import { TemplatePlugin, TemplateBaseData } from "../plugin-template";
export declare class VueComponentModulePlugin implements TemplatePlugin {
    pluginName: string;
    version: string;
    templatePath: string;
    constructor();
    activeTemplate(dirName: string): boolean;
    handleTemplateSource(data: TemplateBaseData): {
        tp_component_name: string;
        tp_component_name_camelize: string;
        tp_name: string;
        tp_file_name: string;
        tp_user: string;
        tp_email: string;
        tp_now: string;
    };
}
