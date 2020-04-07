"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TemplateManagePlugin {
    constructor() {
        this.templatePlugins = [];
    }
    ;
    /**
     * 添加plugin
     * @param templatePlugin
     */
    addPlugin(templatePlugin) {
        this.templatePlugins.push(templatePlugin);
    }
    /**
     * 根据目录名，来选择激活某个plugin
     * @param dirName
     */
    switchTemplatePlugin(dirName) {
        for (let plugin of this.templatePlugins) {
            if (plugin.activeTemplate(dirName))
                return plugin;
        }
        return null;
    }
}
exports.TemplateManagePlugin = TemplateManagePlugin;
