import{h as c}from"./scheduler.918d31b8.js";import{w as p}from"./index.c018a9c8.js";function s(e,n){var t;{if(typeof n=="string")t=localStorage[e]??n;else{let o=JSON.stringify(n),a=localStorage[e];a==="undefined"&&(localStorage[e]=o,a=o),t=JSON.parse(a??o)}n instanceof Date&&(t=new Date(t))}const r=p(t);return r.subscribe(o=>{typeof o=="string"?localStorage[e]=o:localStorage[e]=JSON.stringify(o)}),r}const y=s("useserver",!1),f=s("openaikey","");if(c(f)==""){let e=prompt("please enter your openai key");e!=null&&f.set(e)}const S=s("context_message_number",10),v=s("primer",{message:{role:"system",content:"You are assistant, a helpful AI. You can do almost anything. If you need to use eval function to execute any javascript code and fulfill your task."},parent:null,children:[]}),g=s("messagecount",0);let u={};if(!localStorage.getItem("message_0")){let e=l({role:"assistant",content:"how can I help you?"},null);l({role:"user",content:"explain quantum computing for a five year old"},e),l({role:"user",content:'say "I love you" in binary'},e),l({role:"user",content:"show me a quine in javascript"},e),l({role:"user",content:"what is the current time?"},e)}function i(e){return u[e]||(u[e]=s(`message_${e}`,{message:{role:"assistant",content:"how can I help you?"},children:[],parent:null})),u[e]}function l(e,n){e.role=="function"&&e.content==null&&(e.content="");let t=0;g.update(o=>(t=o,o+1));let r=i(t);return r==null||r.set({message:e,children:[],parent:n}),n!=null&&i(n).update(a=>({...a,children:[t,...a.children]})),t}function d(e){if(e==0)return;let n=c(i(e));if(n.parent==0&&c(i(0)).children.length==1&&l({role:"user",content:""},0),console.log("deleting ",e),n.parent!=null){let t=i(n.parent);t.update(r=>({...r,children:r.children.filter(o=>o!=e)})),console.log("parent ",c(t))}n.children.forEach(t=>{d(t)}),localStorage.removeItem(`message_${e}`),delete u[e]}export{S as a,l as c,d,i as g,f as o,v as p,y as u};
