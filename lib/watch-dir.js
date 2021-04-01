"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 监听文件夹改变
 *
 * 自动生成目录
 *
 * **/
const create_template_1 = require("./create-template");
const vueComponentPlugin_1 = require("./basePlugins/vueComponentPlugin");
const vueDirectivePlugin_1 = require("./basePlugins/vueDirectivePlugin");
const vuePagePlugin_1 = require("./basePlugins/vuePagePlugin");
const vueComponentModulePlugin_1 = require("./basePlugins/vueComponentModulePlugin");
const path = require("path");
const chokidar = require("chokidar");
const { LoggerFactory } = require("@ztwx/logger");
const log = LoggerFactory.getLogger(__filename);
class ManageTempalteWatchDir {
    constructor({ installDefault: { page, directive, component, componentModule } } = { installDefault: { page: true, directive: true, component: true, componentModule: true } }) {
        this.createTemplate = new create_template_1.CreateTemplate();
        /**
         * 注册基础模板
         */
        page && this.addPlugin(new vuePagePlugin_1.VuePagePlugin());
        directive && this.addPlugin(new vueDirectivePlugin_1.VueDirectivePlugin());
        component && this.addPlugin(new vueComponentPlugin_1.VueComponentPlugin());
        componentModule && this.addPlugin(new vueComponentModulePlugin_1.VueComponentModulePlugin());
    }
    addPlugin(tpPlugin) {
        this.createTemplate.addPlugin(tpPlugin);
    }
    watch(dirPath) {
        log.info("watch dir: " + dirPath);
        chokidar.watch(dirPath, {
            ignoreInitial: true
        })
            .on("addDir", (path) => {
            /**
             * listener
             */
            log.debug("add dir");
            this.autoCompleteTp(path);
        });
    }
    /**
     * 监听文件创建，并自动写入模板
     * @param dirPath
     */
    autoCompleteTp(dirPath) {
        let dirName = this.getDirName(dirPath);
        if (!dirName)
            return;
        const templatePlugin = this.createTemplate.switchTemplatePlugin(dirName);
        if (!templatePlugin)
            return log.info("ignore dir :" + dirPath);
        this.createTemplate.createSimple(templatePlugin, dirPath);
        log.info("created template completed: " + dirPath);
        log.warn("webStorm: please press CTRL+ALT+T to refresh page");
    }
    /**
     * 获得dir目录名
     * @param dirPath
     */
    getDirName(dirPath) {
        const matcher = dirPath.match(new RegExp("[^\\" + path.sep + "]+$"));
        if (!matcher)
            return null;
        return matcher[0];
    }
}
exports.ManageTempalteWatchDir = ManageTempalteWatchDir;
// const m=new ManageTempalteWatchDir();
//
// m.watch("/home/workspace/frontend/ztwx-fire-ui/dist");
