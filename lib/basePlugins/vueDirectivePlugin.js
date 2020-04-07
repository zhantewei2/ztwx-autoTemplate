"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const host_path = path.dirname(path.dirname(path.dirname(path.dirname(__dirname))));
class VueDirectivePlugin {
    constructor() {
        this.pluginName = "@ztwx/vue-directive-template";
        this.version = "0.0.1";
        this.templatePath = path.join(host_path, "assets/templates/vueDirective");
    }
    activeTemplate(dirName) {
        return dirName.endsWith("directive") || dirName.endsWith("Directive");
    }
    handleTemplateSource(data) {
        return {
            "tp_name": data.completeName
        };
    }
}
exports.VueDirectivePlugin = VueDirectivePlugin;
