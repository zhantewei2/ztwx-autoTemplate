"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const host_path = path.dirname(path.dirname(__dirname));
const humpTo = (humpName) => {
    let preIsUpper = false;
    let nowIsUppper = false;
    let itemChar;
    let prePos = 0;
    const splitArr = [];
    for (let i = 0, len = humpName.length; i < len; i++) {
        itemChar = humpName.charCodeAt(i);
        nowIsUppper = itemChar >= 60 && itemChar <= 90;
        if (nowIsUppper && !preIsUpper && i !== 0) {
            splitArr.push(humpName.slice(prePos, i));
            prePos = i;
        }
        preIsUpper = nowIsUppper;
    }
    splitArr.push(humpName.slice(prePos, humpName.length));
    return splitArr.reduce((p, n) => p + '-' + n[0].toLowerCase() + n.slice(1));
};
class VueComponentModulePlugin {
    constructor() {
        this.pluginName = "@ztwx/vue-component-template";
        this.version = "0.0.1";
        this.templatePath = path.join(host_path, "assets/templates/vueComponentModule");
    }
    activeTemplate(dirName) {
        return dirName.endsWith("component-module") || dirName.endsWith("ComponentModule");
    }
    handleTemplateSource(data) {
        const tpComponentName = data.completeName.slice(0, data.completeName.indexOf("Module"));
        const tpComponentNameCamelize = humpTo(tpComponentName);
        return {
            "tp_component_name": tpComponentName,
            "tp_component_name_camelize": tpComponentNameCamelize,
            "tp_name": data.completeName,
            "tp_file_name": data.dirName,
            "tp_user": data.gitName || "",
            "tp_email": data.gitEmail || "",
            "tp_now": data.nowDate || ""
        };
    }
}
exports.VueComponentModulePlugin = VueComponentModulePlugin;
