const humpName="XxxX";

let preIsUpper=false;
let nowIsUppper=false;
let itemChar;
let prePos=0;
const splitArr=[];

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
const str=splitArr.reduce((p,n)=>p+'-'+n[0].toLowerCase()+n.slice(1));
console.log(str)
