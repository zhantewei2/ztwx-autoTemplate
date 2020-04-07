"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const host_path = path.dirname(path.dirname(path.dirname(path.dirname(__dirname))));
class VuePagePlugin {
    constructor() {
        this.pluginName = "@ztwx/vue-page-template";
        this.version = "0.0.1";
        this.templatePath = path.join(host_path, "assets/templates/vuePage");
    }
    activeTemplate(dirName) {
        return dirName.endsWith("page") || dirName.endsWith("Page");
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
exports.VuePagePlugin = VuePagePlugin;
