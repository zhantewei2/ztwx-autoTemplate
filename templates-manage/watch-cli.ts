import {ManageTempalteWatchDir} from "./watch-dir";
const path=require("path");

const argvs:string[]=process.argv;

const dir=argvs[2];
if (dir){
    const m=new ManageTempalteWatchDir();
    m.watch(path.resolve(dir));
}