"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const host_path = path.dirname(path.dirname(path.dirname(path.dirname(__dirname))));
class VueComponentPlugin {
    constructor() {
        this.pluginName = "@ztwx/vue-component-template";
        this.version = "0.0.1";
        this.templatePath = path.join(host_path, "assets/templates/vueComponent");
    }
    activeTemplate(dirName) {
        return dirName.endsWith("component") || dirName.endsWith("Component");
    }
    handleTemplateSource(data) {
        return {
            "tp_name": data.completeName,
            "tp_file_name": data.dirName,
            "tp_user": data.gitName || "",
            "tp_email": data.gitEmail || "",
            "tp_now": data.nowDate || ""
        };
    }
}
exports.VueComponentPlugin = VueComponentPlugin;
