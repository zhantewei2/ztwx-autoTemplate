import { TemplatePlugin } from "./plugin-template";
export declare class ManageTempalteWatchDir {
    private createTemplate;
    constructor();
    addPlugin(tpPlugin: TemplatePlugin): void;
    watch(dirPath: string): void;
    /**
     * 监听文件创建，并自动写入模板
     * @param dirPath
     */
    autoCompleteTp(dirPath: string): void;
    /**
     * 获得dir目录名
     * @param dirPath
     */
    getDirName(dirPath: string): string | null;
}
