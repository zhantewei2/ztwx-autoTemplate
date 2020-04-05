# Auto Template


### Simple use
```typescript
import {ManageTempalteWatchDir}  from "@ztwx/auto-template";
const path=require("path");

new MangeTemplateWatchDir().watch(
  path.join(process.cwd(),"src")
)
```

### Auto watch dir

- [name]-page
- [name]-component
- [name]-directive

### custom template plugin

```typescript
import {TemplatePlugin,BaseData,ManageTempalteWatchDir} from "@ztwx/TemplatePlugin";

class MyTemplatePlugin implements TemplatePlugin{
    pluginName:string="myTemplatePlugin";
    version:string="0.0.1";
    // The `yourTemplateDir` will be the template dir path
    templatePath:string=path.join(xxx,"yourTemplateDir");

    //active template when dirname end with "myComponent"
    activeTemplate(dirName:string):boolean{
        return dirName.endsWith("myComponent");
    }
    handleTemplateSource(data:TemplateBaseData){
        return {
            "tp_name":"your custom name",
        }
    }
}

const manageTemplateWatchDir=new MangeTemplateWatchDir();
manageTempalteWatchDir.addPlugin(new MyTemplatePlugin());

manageTemplateWatchDir.watch(...);

```
**yourTemplateDir**

- one.js.j2
```j2
console.log("hello ${tp_name}")
```
`${tp_name}` will replace to `your custom name`. and  place it in the newly created directory with name `one.js`


# Watch Cli

```
npx ztwx-autoTp <dirpath>
```
