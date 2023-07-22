import{f as E,s as F,n as z,o as re,h as oe,b as ee,r as ae,i as j}from"../chunks/scheduler.3578c530.js";import{S as G,i as K,g as w,s as B,h as N,j as T,y as q,c as V,f as m,k as v,a as M,x as k,z as O,e as L,d as x,p as ie,t as C,b as ce,r as Q,u as X,v as Y,w as Z,m as te,n as ne}from"../chunks/index.bafd8785.js";import{w as he}from"../chunks/paths.209e5314.js";function U(s,t){var e;{if(typeof t=="string")e=localStorage[s]??t;else{let l=JSON.stringify(t),o=localStorage[s];o==="undefined"&&(localStorage[s]=l,o=l),e=JSON.parse(o??l)}t instanceof Date&&(e=new Date(e))}const n=he(e);return n.subscribe(l=>{typeof l=="string"?localStorage[s]=l:localStorage[s]=JSON.stringify(l)}),n}const pe=U("useserver",!1),A=U("openaikey","");if(E(A)==""){let s=prompt("please enter your openai key");s!=null&&A.set(s)}const ge=U("messagecount",0);let H={};localStorage.getItem("message_0")||(D({role:"assistant",content:"how can i help you"},null),D({role:"user",content:"hello"},0),D({role:"user",content:"bye"},0));function S(s){return H[s]||(H[s]=U(`message_${s}`,{message:{role:"assistant",content:"how can I help you?"},children:[],parent:null})),H[s]}function D(s,t){let e=0;ge.update(l=>(e=l,l+1)),console.log("creating ",e);let n=S(e);return n==null||n.set({message:s,children:[],parent:t}),t!=null&&S(t).update(o=>({...o,children:[e,...o.children]})),e}function W(s){if(s==0)return;let t=E(S(s));if(t.parent==0&&E(S(0)).children.length==1&&D({role:"user",content:""},0),console.log("deleting ",s),t.parent!=null){let e=S(t.parent);e.update(n=>({...n,children:n.children.filter(l=>l!=s)})),console.log("parent ",E(e))}t.children.forEach(e=>{W(e)}),localStorage.removeItem(`message_${s}`),delete H[s]}async function me(s,t){return(await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t},body:JSON.stringify({model:"gpt-3.5-turbo",messages:s.messages,temperature:s.temperature??.7,stream:!0})})).body}async function _e(s,t){let e;if(E(pe)){let r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(r.body==null||r.body==null)return console.error("failed to get response stream"),"";e=r.body.getReader()}else e=(await me(s,E(A))).getReader();let n=new TextDecoder,l="",o=!1;for(;!o;){const{value:r,done:c}=await e.read();o=c,n.decode(r).split(`
`).filter(a=>a.length>0).forEach(a=>{if(a=="data: [DONE]")return l;if(!a.startsWith("data:"))throw console.error("unexpected response",a),new Error("unexpected response");let h=JSON.parse(a.slice(6));h.choices[0].delta.content&&(l+=h.choices[0].delta.content,t==null||t(l))})}return l}function be(s){let t,e;return{c(){t=w("div"),e=w("div"),this.h()},l(n){t=N(n,"DIV",{class:!0});var l=T(t);e=N(l,"DIV",{class:!0}),T(e).forEach(m),l.forEach(m),this.h()},h(){v(e,"class","msg svelte-z15wxn"),v(t,"class","assistant svelte-z15wxn")},m(n,l){M(n,t,l),k(t,e),s[13](e)},p:z,d(n){n&&m(t),s[13](null)}}}function ve(s){let t,e,n,l,o="x",r,c;return{c(){t=w("div"),e=w("div"),n=B(),l=w("button"),l.textContent=o,this.h()},l(u){t=N(u,"DIV",{class:!0});var d=T(t);e=N(d,"DIV",{contenteditable:!0,class:!0}),T(e).forEach(m),n=V(d),l=N(d,"BUTTON",{class:!0,"data-svelte-h":!0}),q(l)!=="svelte-1n9arnn"&&(l.textContent=o),d.forEach(m),this.h()},h(){v(e,"contenteditable",""),v(e,"class","msg svelte-z15wxn"),v(l,"class","active svelte-z15wxn"),v(t,"class","user svelte-z15wxn")},m(u,d){M(u,t,d),k(t,e),s[11](e),k(t,n),k(t,l),r||(c=[O(e,"keypress",s[4]),O(e,"keyup",s[6]),O(e,"keydown",s[5]),O(e,"input",s[7]),O(e,"paste",we),O(l,"click",s[12])],r=!0)},p:z,d(u){u&&m(t),s[11](null),r=!1,ae(c)}}}function ye(s){let t,e,n=" ",l,o,r,c="x",u,d;function a(_,b){return _[2].message.role=="user"?ve:be}let h=a(s),p=h(s);return{c(){t=w("div"),e=w("button"),e.textContent=n,l=B(),p.c(),o=B(),r=w("button"),r.textContent=c,this.h()},l(_){t=N(_,"DIV",{class:!0});var b=T(t);e=N(b,"BUTTON",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-2nj3z4"&&(e.textContent=n),l=V(b),p.l(b),o=V(b),r=N(b,"BUTTON",{class:!0,"data-svelte-h":!0}),q(r)!=="svelte-1fkcjn"&&(r.textContent=c),b.forEach(m),this.h()},h(){v(e,"class","svelte-z15wxn"),v(r,"class","active svelte-z15wxn"),v(t,"class","bubble svelte-z15wxn")},m(_,b){M(_,t,b),k(t,e),k(t,l),p.m(t,null),k(t,o),k(t,r),u||(d=O(r,"click",s[14]),u=!0)},p(_,[b]){h===(h=a(_))&&p?p.p(_,b):(p.d(1),p=h(_),p&&(p.c(),p.m(t,o)))},i:z,o:z,d(_){_&&m(t),p.d(),u=!1,d()}}}function R(s){let t=s.replace(/\n/g,"<br>");for(var e=0;;){let n=t.indexOf("```",e);if(e=t.indexOf("```",n+1),e==-1)break;t=t.substring(0,n)+"<pre style='background:black;margin:10px;padding:10px;border-radius:10px'>"+t.substring(n+3,e)+"</pre>"+t.substring(e+3),console.log(t)}return t}function ke(s){return s.replace(/<br>/g,`
`)}function ue(s){let t=document.createElement("textarea");return t.innerHTML=s,t.remove(),t.value}function we(s){var e;s.preventDefault(),console.log("paste");let t=(e=s.clipboardData)==null?void 0:e.getData("text/plain");t&&document.execCommand("insertText",!1,t)}function Ne(s,t,e){let n,l=z,o=()=>(l(),l=oe(d,f=>e(2,n=f)),d);s.$$.on_destroy.push(()=>l());let{id:r}=t,c=r,{sendMessage:u}=t,d=S(r);o();let a;re(()=>{e(1,a.innerHTML=R(n.message.content),a)});let h=!1;function p(f){f.key=="Enter"&&!h&&(f.preventDefault(),u())}function _(f){f.key=="Shift"&&(h=!0)}function b(f){f.key=="Shift"&&(h=!1)}function i(f){let P=ke(a.innerHTML),fe=n.message.content;n.children.length>0?(D({role:"user",content:P},n.parent),e(1,a.innerHTML=R(fe),a),console.log("create new node",P)):d.update($=>($.message.content=P,$))}function g(f){ee[f?"unshift":"push"](()=>{a=f,e(1,a),e(0,r),e(2,n),e(10,c)})}const y=()=>{W(r)};function J(f){ee[f?"unshift":"push"](()=>{a=f,e(1,a),e(0,r),e(2,n),e(10,c)})}const I=()=>{W(r)};return s.$$set=f=>{"id"in f&&e(0,r=f.id),"sendMessage"in f&&e(8,u=f.sendMessage)},s.$$.update=()=>{s.$$.dirty&1031&&(o(e(3,d=S(r))),a&&(n.message.role!="user"||c!=r)&&(e(1,a.innerHTML=R(n.message.content),a),e(10,c=r)))},[r,a,n,d,p,_,b,i,u,ue,c,g,y,J,I]}class Se extends G{constructor(t){super(),K(this,t,Ne,ye,F,{id:0,sendMessage:8,cleanMarkup:9})}get cleanMarkup(){return ue}}function se(s){let t,e,n,l;t=new Se({props:{id:s[0],sendMessage:s[4]}});let o=s[1].children.length>0&&le(s);return{c(){Q(t.$$.fragment),e=B(),o&&o.c(),n=L()},l(r){X(t.$$.fragment,r),e=V(r),o&&o.l(r),n=L()},m(r,c){Y(t,r,c),M(r,e,c),o&&o.m(r,c),M(r,n,c),l=!0},p(r,c){const u={};c&1&&(u.id=r[0]),t.$set(u),r[1].children.length>0?o?(o.p(r,c),c&2&&x(o,1)):(o=le(r),o.c(),x(o,1),o.m(n.parentNode,n)):o&&(ie(),C(o,1,1,()=>{o=null}),ce())},i(r){l||(x(t.$$.fragment,r),x(o),l=!0)},o(r){C(t.$$.fragment,r),C(o),l=!1},d(r){r&&(m(e),m(n)),Z(t,r),o&&o.d(r)}}}function le(s){let t,e,n,l,o,r,c,u,d,a,h,p,_,b;return h=new de({props:{nodeId:s[1].children[s[3]]}}),{c(){t=w("div"),e=w("button"),n=te("<"),o=B(),r=w("button"),c=te(">"),d=B(),a=w("div"),Q(h.$$.fragment),this.h()},l(i){t=N(i,"DIV",{class:!0});var g=T(t);e=N(g,"BUTTON",{class:!0});var y=T(e);n=ne(y,"<"),y.forEach(m),o=V(g),r=N(g,"BUTTON",{class:!0});var J=T(r);c=ne(J,">"),J.forEach(m),g.forEach(m),d=V(i),a=N(i,"DIV",{});var I=T(a);X(h.$$.fragment,I),I.forEach(m),this.h()},h(){v(e,"class",l=j(s[3]>0?"active":"hidden")+" svelte-1usy634"),v(r,"class",u=j(s[1].children.length>s[3]+1?"active":"hidden")+" svelte-1usy634"),v(t,"class","navbar svelte-1usy634")},m(i,g){M(i,t,g),k(t,e),k(e,n),k(t,o),k(t,r),k(r,c),M(i,d,g),M(i,a,g),Y(h,a,null),p=!0,_||(b=[O(e,"click",s[6]),O(r,"click",s[7])],_=!0)},p(i,g){(!p||g&8&&l!==(l=j(i[3]>0?"active":"hidden")+" svelte-1usy634"))&&v(e,"class",l),(!p||g&10&&u!==(u=j(i[1].children.length>i[3]+1?"active":"hidden")+" svelte-1usy634"))&&v(r,"class",u);const y={};g&10&&(y.nodeId=i[1].children[i[3]]),h.$set(y)},i(i){p||(x(h.$$.fragment,i),p=!0)},o(i){C(h.$$.fragment,i),p=!1},d(i){i&&(m(t),m(d),m(a)),Z(h),_=!1,ae(b)}}}function Te(s){let t,e,n=s[1]&&se(s);return{c(){n&&n.c(),t=L()},l(l){n&&n.l(l),t=L()},m(l,o){n&&n.m(l,o),M(l,t,o),e=!0},p(l,[o]){l[1]?n?(n.p(l,o),o&2&&x(n,1)):(n=se(l),n.c(),x(n,1),n.m(t.parentNode,t)):n&&(ie(),C(n,1,1,()=>{n=null}),ce())},i(l){e||(x(n),e=!0)},o(l){C(n),e=!1},d(l){l&&m(t),n&&n.d(l)}}}function Me(s,t,e){let n,l=z,o=()=>(l(),l=oe(c,i=>e(1,n=i)),c);s.$$.on_destroy.push(()=>l());let{nodeId:r}=t,c=S(r);o();let u=n?n.children.length:0;var d=r;let a=0;function h(){console.log("get history");let i=[n.message],g=n.parent;for(;g!=null;){let y=S(g);i=[E(y).message,...i],g=E(y).parent}return console.log(i),i}async function p(){console.log("send");let i=h(),g=D({role:"assistant",content:""},r);D({role:"user",content:""},g);let y=S(g),J=await _e({messages:i},I=>y.update(f=>({...f,message:{...f.message,content:I}})));y.update(I=>({...I,message:{...I.message,content:J}}))}re(()=>{c.subscribe(i=>{i.children.length>u?(e(3,a=0),console.log("child added"),u=i.children.length):i.children.length<u&&(console.log("child removed"),e(3,a=Math.max(0,a-1)),u=i.children.length)})});const _=()=>{e(3,a=Math.max(0,a-1))},b=()=>{e(3,a=Math.min(n.children.length-1,a+1))};return s.$$set=i=>{"nodeId"in i&&e(0,r=i.nodeId)},s.$$.update=()=>{s.$$.dirty&35&&r!=d&&(o(e(2,c=S(r))),e(5,d=r),u=n.children.length,e(3,a=0))},[r,n,c,a,p,d,_,b]}class de extends G{constructor(t){super(),K(this,t,Me,Te,F,{nodeId:0})}}function Ie(s){let t,e,n;return e=new de({props:{nodeId:0}}),{c(){t=w("main"),Q(e.$$.fragment),this.h()},l(l){t=N(l,"MAIN",{class:!0});var o=T(t);X(e.$$.fragment,o),o.forEach(m),this.h()},h(){v(t,"class","svelte-eolhps")},m(l,o){M(l,t,o),Y(e,t,null),n=!0},p:z,i(l){n||(x(e.$$.fragment,l),n=!0)},o(l){C(e.$$.fragment,l),n=!1},d(l){l&&m(t),Z(e)}}}class Ce extends G{constructor(t){super(),K(this,t,null,Ie,F,{})}}export{Ce as component};
