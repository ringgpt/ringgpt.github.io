import{h as i}from"./scheduler.debfefe8.js";import{w as g}from"./index.7cc10669.js";function a(e,t){var n;{if(typeof t=="string")n=localStorage[e]??t;else{let r=JSON.stringify(t),s=localStorage[e];s==="undefined"&&(localStorage[e]=r,s=r),n=JSON.parse(s??r)}t instanceof Date&&(n=new Date(n))}const o=g(n);return o.subscribe(r=>{typeof r=="string"?localStorage[e]=r:localStorage[e]=JSON.stringify(r)}),o}const v=a("useserver",!1),u=a("openaikey",""),w=a("context_message_number",10),d=a("messagecount",0);function h(){console.log();let e="new_persona",t="The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.",n="Hello, how can I help you today?",o=p({role:"system",content:t},null),r=p({role:"assistant",content:n},o);return p({role:"user",content:""},r),{name:e,primer_id:o,starter_id:r}}let c={};var f=g([]);{if(i(u)==""){let e=prompt("please enter your openai key");e!=null&&u.set(e)}if(localStorage.personas)f.set(JSON.parse(localStorage.personas));else{let e=h();e.name="ringGPT",f.set([e]),f.subscribe(t=>localStorage.personas=JSON.stringify(t))}}var y=a("active_persona",0);function l(e){return c[e]||(c[e]=a(`message_${e}`,{message:{role:"assistant",content:"how can I help you?"},children:[],parent:null})),c[e]}function p(e,t){e.role=="function"&&e.content==null&&(e.content="");let n=0;d.update(r=>(n=r,r+1));let o=l(n);return o==null||o.set({message:e,children:[],parent:t}),t!=null&&l(t).update(s=>({...s,children:[n,...s.children]})),n}function m(e){if(e==0)return;let t=i(l(e));if(t.parent==0&&i(l(0)).children.length==1&&p({role:"user",content:""},0),console.log("deleting ",e),t.parent!=null){let n=l(t.parent);n.update(o=>({...o,children:o.children.filter(r=>r!=e)})),console.log("parent ",i(n))}t.children.forEach(n=>{m(n)}),localStorage.removeItem(`message_${e}`),delete c[e]}export{w as a,y as b,p as c,m as d,l as g,h as n,u as o,f as p,v as u};
