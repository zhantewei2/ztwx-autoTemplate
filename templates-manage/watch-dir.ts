/**
 * 监听文件夹改变
 *
 * 自动生成目录
 *
 * **/
import {CreateTemplate} from "./create-template";
import {TemplatePlugin} from "./plugin-template";
import {VueComponentPlugin} from "./basePlugins/vueComponentPlugin";
import {VueDirectivePlugin} from "./basePlugins/vueDirectivePlugin";
import {VuePagePlugin} from "./basePlugins/vuePagePlugin";
import {VueComponentModulePlugin} from "./basePlugins/vueComponentModulePlugin";

const path=require("path");
const chokidar=require("chokidar");
const {LoggerFactory}=require("@ztwx/logger");
const log=(LoggerFactory as any).getLogger(__filename);

export type Config = {
    installDefault: {
        page: boolean
        directive: boolean
        component: boolean
        componentModule: boolean
    }
}

export class ManageTempalteWatchDir{
    private createTemplate:CreateTemplate=new CreateTemplate();

    constructor({installDefault:{page,directive,component,componentModule}}: Config={installDefault:{page:true,directive:true,component:true,componentModule:true}}) {
        /**
         * 注册基础模板
         */
        page && this.addPlugin(new VuePagePlugin());
        directive && this.addPlugin(new VueDirectivePlugin());
        component && this.addPlugin(new VueComponentPlugin());
        componentModule && this.addPlugin(new VueComponentModulePlugin());
    }
    addPlugin(tpPlugin:TemplatePlugin){
        this.createTemplate.addPlugin(tpPlugin);
    }
    
    watch(dirPath:string){
        log.info("watch dir: "+dirPath);
        chokidar.watch(dirPath,{
            ignoreInitial:true
        })
            .on("addDir",(path:string)=>{
                /**
                 * listener
                 */
                log.debug("add dir");
                this.autoCompleteTp(path);

            })
    }

    /**
     * 监听文件创建，并自动写入模板
     * @param dirPath
     */
    autoCompleteTp(dirPath:string):void{
        let dirName:string|null=this.getDirName(dirPath);
        if(!dirName)return;
        const templatePlugin:TemplatePlugin|null=this.createTemplate.switchTemplatePlugin(dirName);
        if(!templatePlugin)return log.info("ignore dir :"+ dirPath);
        this.createTemplate.createSimple(templatePlugin,dirPath);
        log.info("created template completed: "+dirPath);
        log.warn("webStorm: please press CTRL+ALT+T to refresh page")
    }

    /**
     * 获得dir目录名
     * @param dirPath
     */
    getDirName(dirPath:string):string|null{
        const matcher=dirPath.match(
            new RegExp("[^\\"+path.sep+"]+$")
        );
        if(!matcher)return null;
        return matcher[0];
    }
}

// const m=new ManageTempalteWatchDir();
//
// m.watch("/home/workspace/frontend/ztwx-fire-ui/dist");
