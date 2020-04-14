import {TemplatePlugin,TemplateBaseData} from "../plugin-template";
const path=require("path");

const host_path=path.dirname(path.dirname(__dirname));

const humpTo=(humpName:string):string=>{

  let preIsUpper:boolean=false;
  let nowIsUppper:boolean=false;
  let itemChar:number;
  let prePos:number=0;
  const splitArr:string[]=[];
  for(let i=0,len=humpName.length;i<len;i++){
    itemChar=humpName.charCodeAt(i);
    nowIsUppper=itemChar>=60&&itemChar<=90;
    if(nowIsUppper&&!preIsUpper&&i!==0){
      splitArr.push(humpName.slice(prePos,i));
      prePos=i;
    }
    preIsUpper=nowIsUppper;
  }
  splitArr.push(humpName.slice(prePos,humpName.length));
  return splitArr.reduce((p,n)=>p+'-'+n[0].toLowerCase()+n.slice(1));
};

export class VueComponentModulePlugin implements TemplatePlugin{
  pluginName:string="@ztwx/vue-component-template";
  version:string="0.0.1";

  templatePath:string=path.join(host_path,"assets/templates/vueComponentModule");
  constructor() {

  }
  activeTemplate(dirName:string):boolean{
    return dirName.endsWith("component-module")||dirName.endsWith("ComponentModule");
  }
  handleTemplateSource(data:TemplateBaseData){
    const tpComponentName=data.completeName.slice(0,data.completeName.indexOf("Module"));
    const tpComponentNameCamelize=humpTo(tpComponentName);
    return {
      "tp_component_name":tpComponentName,
      "tp_component_name_camelize":tpComponentNameCamelize,
      "tp_name":data.completeName,
      "tp_file_name":data.dirName,
      "tp_user": data.gitName || "",
      "tp_email": data.gitEmail || "",
      "tp_now": data.nowDate || ""
    }
  }
}
