import{s as safe_not_equal,n as noop,f as subscribe,h as get_store_value,o as onMount,b as binding_callbacks,r as run_all,e as component_subscribe,i as null_to_empty}from"../chunks/scheduler.debfefe8.js";import{S as SvelteComponent,i as init,g as element,s as space,h as claim_element,j as children,y as get_svelte_dataset,c as claim_space,f as detach,k as attr,a as insert_hydration,x as append_hydration,z as listen,m as text,n as claim_text,o as set_data,H as HtmlTagHydration,A as claim_html_tag,e as empty,l as set_style,d as transition_in,p as group_outros,t as transition_out,b as check_outros,r as create_component,u as claim_component,v as mount_component,w as destroy_component}from"../chunks/index.54b8959a.js";import{g as getNode,d as deleteNode,u as useserver,o as openaikey,c as createNode,a as context_message_number,b as active_persona,p as personas}from"../chunks/store.182a4e3d.js";import{w as writable}from"../chunks/index.7cc10669.js";const staticMessage_svelte_svelte_type_style_lang="";function create_else_block$1(l){let e,t,n,i="error not expected type",o,s=l[1].content+"",d;return{c(){e=element("div"),t=element("div"),n=element("h2"),n.textContent=i,o=space(),d=text(s),this.h()},l(c){e=claim_element(c,"DIV",{});var a=children(e);t=claim_element(a,"DIV",{class:!0});var r=children(t);n=claim_element(r,"H2",{"data-svelte-h":!0}),get_svelte_dataset(n)!=="svelte-wun3cb"&&(n.textContent=i),o=claim_space(r),d=claim_text(r,s),r.forEach(detach),a.forEach(detach),this.h()},h(){attr(t,"class","msg svelte-124jswh")},m(c,a){insert_hydration(c,e,a),append_hydration(e,t),append_hydration(t,n),append_hydration(t,o),append_hydration(t,d)},p(c,a){a&2&&s!==(s=c[1].content+"")&&set_data(d,s)},d(c){c&&detach(e)}}}function create_if_block$3(l){let e,t,n,i=tohtml$1(l[1].content)+"",o,s=l[4]&&create_if_block_1$1(l);return{c(){e=element("div"),t=element("div"),n=new HtmlTagHydration(!1),o=space(),s&&s.c(),this.h()},l(d){e=claim_element(d,"DIV",{class:!0});var c=children(e);t=claim_element(c,"DIV",{class:!0});var a=children(t);n=claim_html_tag(a,!1),o=claim_space(a),s&&s.l(a),a.forEach(detach),c.forEach(detach),this.h()},h(){n.a=o,attr(t,"class","msg svelte-124jswh"),attr(e,"class","assistant svelte-124jswh")},m(d,c){insert_hydration(d,e,c),append_hydration(e,t),n.m(i,t),append_hydration(t,o),s&&s.m(t,null)},p(d,c){c&2&&i!==(i=tohtml$1(d[1].content)+"")&&n.p(i),d[4]?s?s.p(d,c):(s=create_if_block_1$1(d),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},d(d){d&&detach(e),s&&s.d()}}}function create_if_block_1$1(l){let e,t,n=l[5]?"v":">",i,o,s=l[4].function_call.name+"",d,c,a,r,u,_=l[1].content&&create_if_block_3$1(),m=l[5]&&create_if_block_2$1(l);return{c(){_&&_.c(),e=space(),t=element("button"),i=text(n),o=space(),d=text(s),c=space(),m&&m.c(),a=empty(),this.h()},l(f){_&&_.l(f),e=claim_space(f),t=claim_element(f,"BUTTON",{class:!0});var p=children(t);i=claim_text(p,n),o=claim_space(p),d=claim_text(p,s),p.forEach(detach),c=claim_space(f),m&&m.l(f),a=empty(),this.h()},h(){attr(t,"class","function_title svelte-124jswh")},m(f,p){_&&_.m(f,p),insert_hydration(f,e,p),insert_hydration(f,t,p),append_hydration(t,i),append_hydration(t,o),append_hydration(t,d),insert_hydration(f,c,p),m&&m.m(f,p),insert_hydration(f,a,p),r||(u=listen(t,"click",l[6]),r=!0)},p(f,p){f[1].content?_||(_=create_if_block_3$1(),_.c(),_.m(e.parentNode,e)):_&&(_.d(1),_=null),p&32&&n!==(n=f[5]?"v":">")&&set_data(i,n),p&16&&s!==(s=f[4].function_call.name+"")&&set_data(d,s),f[5]?m?m.p(f,p):(m=create_if_block_2$1(f),m.c(),m.m(a.parentNode,a)):m&&(m.d(1),m=null)},d(f){f&&(detach(e),detach(t),detach(c),detach(a)),_&&_.d(f),m&&m.d(f),r=!1,u()}}}function create_if_block_3$1(l){let e;return{c(){e=element("br")},l(t){e=claim_element(t,"BR",{})},m(t,n){insert_hydration(t,e,n)},d(t){t&&detach(e)}}}function create_if_block_2$1(l){let e,t=format_function_arguments(l[4].function_call.arguments)+"",n,i,o,s,d=get_store_value(getNode(l[2].children[0])).message.content+"",c;return{c(){e=element("div"),n=text(t),i=space(),o=element("div"),s=text("> "),c=text(d),this.h()},l(a){e=claim_element(a,"DIV",{style:!0});var r=children(e);n=claim_text(r,t),r.forEach(detach),i=claim_space(a),o=claim_element(a,"DIV",{});var u=children(o);s=claim_text(u,"> "),c=claim_text(u,d),u.forEach(detach),this.h()},h(){set_style(e,"margin-top","1em")},m(a,r){insert_hydration(a,e,r),append_hydration(e,n),insert_hydration(a,i,r),insert_hydration(a,o,r),append_hydration(o,s),append_hydration(o,c)},p(a,r){r&16&&t!==(t=format_function_arguments(a[4].function_call.arguments)+"")&&set_data(n,t),r&4&&d!==(d=get_store_value(getNode(a[2].children[0])).message.content+"")&&set_data(c,d)},d(a){a&&(detach(e),detach(i),detach(o))}}}function create_fragment$3(l){let e,t,n=" ",i,o,s,d="x",c,a;function r(m,f){return m[2].message.role=="assistant"?create_if_block$3:create_else_block$1}let u=r(l),_=u(l);return{c(){e=element("div"),t=element("button"),t.textContent=n,i=space(),_.c(),o=space(),s=element("button"),s.textContent=d,this.h()},l(m){e=claim_element(m,"DIV",{class:!0});var f=children(e);t=claim_element(f,"BUTTON",{class:!0,"data-svelte-h":!0}),get_svelte_dataset(t)!=="svelte-2nj3z4"&&(t.textContent=n),i=claim_space(f),_.l(f),o=claim_space(f),s=claim_element(f,"BUTTON",{class:!0,"data-svelte-h":!0}),get_svelte_dataset(s)!=="svelte-1fkcjn"&&(s.textContent=d),f.forEach(detach),this.h()},h(){attr(t,"class","svelte-124jswh"),attr(s,"class","active svelte-124jswh"),attr(e,"class","bubble svelte-124jswh")},m(m,f){insert_hydration(m,e,f),append_hydration(e,t),append_hydration(e,i),_.m(e,null),append_hydration(e,o),append_hydration(e,s),c||(a=listen(s,"click",l[7]),c=!0)},p(m,[f]){u===(u=r(m))&&_?_.p(m,f):(_.d(1),_=u(m),_&&(_.c(),_.m(e,o)))},i:noop,o:noop,d(m){m&&detach(e),_.d(),c=!1,a()}}}function tohtml$1(l){if(l==null)return"";let e=l.replaceAll("<","&lt;").replace(/\n/g,"<br>");for(var t=0;;){let n=e.indexOf("```",t);if(n==-1)break;let i=e.indexOf("<br>",n+1),o=e.substring(n+3,i);if(t=e.indexOf("```",i),t==-1)break;let s=e.substring(i+4,t);s.replaceAll('"','\\"').replaceAll("<br>",`
`);let d=`<pre class="codeblock"><div> ${o} </div>`+s+"</pre>";e=e.substring(0,n)+d+e.substring(t+3)}return e}function format_function_arguments(l){try{let e=JSON.parse(l);return e.argument?e.argument:l}catch{return l}}function instance$3(l,e,t){let n,i=noop,o=()=>(i(),i=subscribe(d,m=>t(2,n=m)),d);l.$$.on_destroy.push(()=>i());let{id:s}=e,d=getNode(s);if(o(),n.message.role=="user")throw new Error("userMessage can only be used for user messages");let c=n.message,a=null;c.function_call&&(a=c);let r=!1;const u=()=>{t(5,r=!r)},_=()=>{deleteNode(s)};return l.$$set=m=>{"id"in m&&t(0,s=m.id)},l.$$.update=()=>{l.$$.dirty&7&&(o(t(3,d=getNode(s))),t(1,c=n.message),c.function_call?t(4,a=c):t(4,a=null))},[s,c,n,d,a,r,u,_]}class StaticMessage extends SvelteComponent{constructor(e){super(),init(this,e,instance$3,create_fragment$3,safe_not_equal,{id:0})}}async function chat_stream_request(l,e){return(await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e},body:JSON.stringify({model:"gpt-3.5-turbo",messages:l.messages,temperature:l.temperature??.7,functions:[{name:"eval",description:"Use this function to evaluate any javascript code. It can fetch information from the internet.",parameters:{type:"object",properties:{argument:{type:"string",description:"javascript code to evaluate"}},required:["argument"]}},{name:"fetch_grocery_sortiment",description:"Use this function to fetch the grocery sortiment from the internet.",parameters:{type:"object",properties:{store:{type:"string",description:"The store to fetch the sortiment from."},name:{type:"string",description:"The name of the product to fetch."}}}}],function_call:"auto",stream:!0})})).body}async function chatCompletion(l,e){let t;if(get_store_value(useserver)){let o=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(o.body==null){console.error("failed to get response stream");return}if(o.body==null){console.error("failed to get response stream");return}t=o.body.getReader()}else t=(await chat_stream_request(l,get_store_value(openaikey))).getReader();let n=new TextDecoder,i=!1;for(;!i;){const{value:o,done:s}=await t.read();i=s,n.decode(o).split(`
`).filter(a=>a.length>0).forEach(a=>{if(a=="data: [DONE]")return;if(!a.startsWith("data:"))throw console.error("unexpected response",a),new Error("unexpected response");let r=JSON.parse(a.slice(6));if(r.choices[0].delta.content)e.update(u=>(u.content+=r.choices[0].delta.content,u));else if(r.choices[0].delta.function_call){let u=r.choices[0].delta.function_call;u.name?e.update(_=>(_.function_call=u,_)):e.update(_=>(_.function_call.arguments+=u.arguments,_))}})}}const dynamicMessage_svelte_svelte_type_style_lang="";function create_else_block(l){let e,t;return{c(){e=element("div"),t=element("div"),this.h()},l(n){e=claim_element(n,"DIV",{class:!0});var i=children(e);t=claim_element(i,"DIV",{class:!0}),children(t).forEach(detach),i.forEach(detach),this.h()},h(){attr(t,"class","msg svelte-y5c4bh"),attr(e,"class","assistant svelte-y5c4bh")},m(n,i){insert_hydration(n,e,i),append_hydration(e,t),l[12](t)},p:noop,d(n){n&&detach(e),l[12](null)}}}function create_if_block$2(l){let e,t,n,i;return{c(){e=element("div"),t=element("div"),this.h()},l(o){e=claim_element(o,"DIV",{class:!0});var s=children(e);t=claim_element(s,"DIV",{contenteditable:!0,class:!0}),children(t).forEach(detach),s.forEach(detach),this.h()},h(){attr(t,"contenteditable",""),attr(t,"class","msg svelte-y5c4bh"),attr(e,"class","user svelte-y5c4bh")},m(o,s){insert_hydration(o,e,s),append_hydration(e,t),l[11](t),n||(i=[listen(t,"keypress",l[4]),listen(t,"keyup",l[6]),listen(t,"keydown",l[5]),listen(t,"input",l[7]),listen(t,"paste",onpaste)],n=!0)},p:noop,d(o){o&&detach(e),l[11](null),n=!1,run_all(i)}}}function create_fragment$2(l){let e,t,n=" ",i,o,s,d="x",c,a;function r(m,f){return m[2].message.role=="user"?create_if_block$2:create_else_block}let u=r(l),_=u(l);return{c(){e=element("div"),t=element("button"),t.textContent=n,i=space(),_.c(),o=space(),s=element("button"),s.textContent=d,this.h()},l(m){e=claim_element(m,"DIV",{class:!0});var f=children(e);t=claim_element(f,"BUTTON",{class:!0,"data-svelte-h":!0}),get_svelte_dataset(t)!=="svelte-2nj3z4"&&(t.textContent=n),i=claim_space(f),_.l(f),o=claim_space(f),s=claim_element(f,"BUTTON",{class:!0,"data-svelte-h":!0}),get_svelte_dataset(s)!=="svelte-1fkcjn"&&(s.textContent=d),f.forEach(detach),this.h()},h(){attr(t,"class","svelte-y5c4bh"),attr(s,"class","active svelte-y5c4bh"),attr(e,"class","bubble svelte-y5c4bh")},m(m,f){insert_hydration(m,e,f),append_hydration(e,t),append_hydration(e,i),_.m(e,null),append_hydration(e,o),append_hydration(e,s),c||(a=listen(s,"click",l[13]),c=!0)},p(m,[f]){u===(u=r(m))&&_?_.p(m,f):(_.d(1),_=u(m),_&&(_.c(),_.m(e,o)))},i:noop,o:noop,d(m){m&&detach(e),_.d(),c=!1,a()}}}function tohtml(l){let e=l.replaceAll("<","&lt;").replace(/\n/g,"<br>");for(var t=0;;){let n=e.indexOf("```",t);if(n==-1)break;let i=e.indexOf("<br>",n+1),o=e.substring(n+3,i);if(t=e.indexOf("```",i),t==-1)break;let s=e.substring(i+4,t),d=s.replaceAll('"','\\"').replaceAll("<br>",`
`),c=`<pre class="codeblock"><div> ${o} <button onclick='navigator.clipboard.writeText(\`${d}\`)'>copy</button> </div>`+s+"</pre>";e=e.substring(0,n)+c+e.substring(t+3)}return e}function totext(l){return l.replace(/<br>/g,`
`)}function cleanMarkup(l){let e=document.createElement("textarea");return e.innerHTML=l,e.remove(),e.value}function onpaste(l){var t;l.preventDefault(),console.log("paste");let e=(t=l.clipboardData)==null?void 0:t.getData("text/plain");e&&document.execCommand("insertText",!1,e)}function instance$2(l,e,t){let n,i=noop,o=()=>(i(),i=subscribe(a,h=>t(2,n=h)),a);l.$$.on_destroy.push(()=>i());let{id:s}=e,d=s,{sendMessage:c}=e,a=getNode(s);o();let r;onMount(()=>{t(1,r.innerHTML=tohtml(n.message.content),r)});let u=!1;function _(h){h.key=="Enter"&&!u&&(h.preventDefault(),c())}function m(h){h.key=="Shift"&&(u=!0)}function f(h){h.key=="Shift"&&(u=!1)}function p(h){let g=totext(r.innerHTML),$=n.message.content;n.children.length>0?(createNode({role:"user",content:g},n.parent),t(1,r.innerHTML=tohtml($),r),console.log("create new node",g)):a.update(b=>(b.message.content=g,b))}function v(h){binding_callbacks[h?"unshift":"push"](()=>{r=h,t(1,r),t(0,s),t(10,d),t(2,n)})}function y(h){binding_callbacks[h?"unshift":"push"](()=>{r=h,t(1,r),t(0,s),t(10,d),t(2,n)})}const k=()=>{deleteNode(s)};return l.$$set=h=>{"id"in h&&t(0,s=h.id),"sendMessage"in h&&t(8,c=h.sendMessage)},l.$$.update=()=>{l.$$.dirty&1031&&(o(t(3,a=getNode(s))),r&&d!=s&&(t(1,r.innerHTML=tohtml(n.message.content),r),t(10,d=s)))},[s,r,n,a,_,m,f,p,c,cleanMarkup,d,v,y,k]}class DynamicMessage extends SvelteComponent{constructor(e){super(),init(this,e,instance$2,create_fragment$2,safe_not_equal,{id:0,sendMessage:8,cleanMarkup:9})}get cleanMarkup(){return cleanMarkup}}const chatNode_svelte_svelte_type_style_lang="";function create_if_block$1(l){let e,t,n,i,o;const s=[create_if_block_3,create_if_block_4],d=[];function c(r,u){return r[1].message.role=="user"?0:r[1].message.role!="system"&&r[1].message.role!="function"?1:-1}~(e=c(l))&&(t=d[e]=s[e](l));let a=l[1].children.length>0&&create_if_block_1(l);return{c(){t&&t.c(),n=space(),a&&a.c(),i=empty()},l(r){t&&t.l(r),n=claim_space(r),a&&a.l(r),i=empty()},m(r,u){~e&&d[e].m(r,u),insert_hydration(r,n,u),a&&a.m(r,u),insert_hydration(r,i,u),o=!0},p(r,u){let _=e;e=c(r),e===_?~e&&d[e].p(r,u):(t&&(group_outros(),transition_out(d[_],1,1,()=>{d[_]=null}),check_outros()),~e?(t=d[e],t?t.p(r,u):(t=d[e]=s[e](r),t.c()),transition_in(t,1),t.m(n.parentNode,n)):t=null),r[1].children.length>0?a?(a.p(r,u),u&2&&transition_in(a,1)):(a=create_if_block_1(r),a.c(),transition_in(a,1),a.m(i.parentNode,i)):a&&(group_outros(),transition_out(a,1,1,()=>{a=null}),check_outros())},i(r){o||(transition_in(t),transition_in(a),o=!0)},o(r){transition_out(t),transition_out(a),o=!1},d(r){r&&(detach(n),detach(i)),~e&&d[e].d(r),a&&a.d(r)}}}function create_if_block_4(l){let e,t;return e=new StaticMessage({props:{id:l[0]}}),{c(){create_component(e.$$.fragment)},l(n){claim_component(e.$$.fragment,n)},m(n,i){mount_component(e,n,i),t=!0},p(n,i){const o={};i&1&&(o.id=n[0]),e.$set(o)},i(n){t||(transition_in(e.$$.fragment,n),t=!0)},o(n){transition_out(e.$$.fragment,n),t=!1},d(n){destroy_component(e,n)}}}function create_if_block_3(l){let e,t;return e=new DynamicMessage({props:{id:l[0],sendMessage:l[4]}}),{c(){create_component(e.$$.fragment)},l(n){claim_component(e.$$.fragment,n)},m(n,i){mount_component(e,n,i),t=!0},p(n,i){const o={};i&1&&(o.id=n[0]),e.$set(o)},i(n){t||(transition_in(e.$$.fragment,n),t=!0)},o(n){transition_out(e.$$.fragment,n),t=!1},d(n){destroy_component(e,n)}}}function create_if_block_1(l){let e,t,n,i,o=l[1].message.role!="system"&&l[1].message.role!="function"&&create_if_block_2(l);return n=new ChatNode({props:{nodeId:l[1].children[l[3]]}}),{c(){o&&o.c(),e=space(),t=element("div"),create_component(n.$$.fragment)},l(s){o&&o.l(s),e=claim_space(s),t=claim_element(s,"DIV",{});var d=children(t);claim_component(n.$$.fragment,d),d.forEach(detach)},m(s,d){o&&o.m(s,d),insert_hydration(s,e,d),insert_hydration(s,t,d),mount_component(n,t,null),i=!0},p(s,d){s[1].message.role!="system"&&s[1].message.role!="function"?o?o.p(s,d):(o=create_if_block_2(s),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null);const c={};d&10&&(c.nodeId=s[1].children[s[3]]),n.$set(c)},i(s){i||(transition_in(n.$$.fragment,s),i=!0)},o(s){transition_out(n.$$.fragment,s),i=!1},d(s){s&&(detach(e),detach(t)),o&&o.d(s),destroy_component(n)}}}function create_if_block_2(l){let e,t,n,i,o,s,d,c,a,r;return{c(){e=element("div"),t=element("button"),n=text("<"),o=space(),s=element("button"),d=text(">"),this.h()},l(u){e=claim_element(u,"DIV",{class:!0});var _=children(e);t=claim_element(_,"BUTTON",{class:!0});var m=children(t);n=claim_text(m,"<"),m.forEach(detach),o=claim_space(_),s=claim_element(_,"BUTTON",{class:!0});var f=children(s);d=claim_text(f,">"),f.forEach(detach),_.forEach(detach),this.h()},h(){attr(t,"class",i=null_to_empty(l[3]>0?"active":"hidden")+" svelte-1usy634"),attr(s,"class",c=null_to_empty(l[1].children.length>l[3]+1?"active":"hidden")+" svelte-1usy634"),attr(e,"class","navbar svelte-1usy634")},m(u,_){insert_hydration(u,e,_),append_hydration(e,t),append_hydration(t,n),append_hydration(e,o),append_hydration(e,s),append_hydration(s,d),a||(r=[listen(t,"click",l[6]),listen(s,"click",l[7])],a=!0)},p(u,_){_&8&&i!==(i=null_to_empty(u[3]>0?"active":"hidden")+" svelte-1usy634")&&attr(t,"class",i),_&10&&c!==(c=null_to_empty(u[1].children.length>u[3]+1?"active":"hidden")+" svelte-1usy634")&&attr(s,"class",c)},d(u){u&&detach(e),a=!1,run_all(r)}}}function create_fragment$1(l){let e,t,n=l[1]&&create_if_block$1(l);return{c(){n&&n.c(),e=empty()},l(i){n&&n.l(i),e=empty()},m(i,o){n&&n.m(i,o),insert_hydration(i,e,o),t=!0},p(i,[o]){i[1]?n?(n.p(i,o),o&2&&transition_in(n,1)):(n=create_if_block$1(i),n.c(),transition_in(n,1),n.m(e.parentNode,e)):n&&(group_outros(),transition_out(n,1,1,()=>{n=null}),check_outros())},i(i){t||(transition_in(n),t=!0)},o(i){transition_out(n),t=!1},d(i){i&&detach(e),n&&n.d(i)}}}function instance$1($$self,$$props,$$invalidate){let $context_message_number,$node,$$unsubscribe_node=noop,$$subscribe_node=()=>($$unsubscribe_node(),$$unsubscribe_node=subscribe(node,l=>$$invalidate(1,$node=l)),node);component_subscribe($$self,context_message_number,l=>$$invalidate(9,$context_message_number=l)),$$self.$$.on_destroy.push(()=>$$unsubscribe_node());let{nodeId}=$$props,node=getNode(nodeId);$$subscribe_node();let old_child_count=$node?$node.children.length:0;var oldid=nodeId;let openchild=0;function get_history(l){l==null&&(l=node);let e=[get_store_value(l).message],t=get_store_value(l).parent;for(;t!=null&&e.length<$context_message_number;){let n=getNode(t);e=[get_store_value(n).message,...e],t=get_store_value(n).parent}return console.log(e),e}async function send(senderID){senderID==null&&(senderID=nodeId);let hist=get_history(getNode(senderID));console.log({hist});let childid=createNode({role:"assistant",content:""},senderID),child=getNode(childid),message=writable(get_store_value(child).message);if(message.subscribe(l=>{child.update(e=>({...e,message:l}))}),await chatCompletion({messages:hist},message),get_store_value(message).function_call){let fcall=get_store_value(message).function_call;if((fcall==null?void 0:fcall.name)=="eval"){let res,res_string="";childid=createNode({role:"function",name:"eval",content:res_string},childid);let function_node=getNode(childid);try{let conslog=function(...l){res_string+=l+`
`,console.log(res_string),console.log(child),function_node.update(e=>({...e,message:{...e.message,content:res_string}}))},call=JSON.parse(fcall.arguments),code=call.argument.replaceAll("console.log","conslog");res=eval(code),code.includes("conslog")&&await new Promise(l=>setTimeout(l,1e3)),res instanceof Promise&&(console.log("awaiting promise"),res=await res,res_string+=JSON.stringify(res)),console.log(res),res_string+=JSON.stringify(res)??"",function_node.update(l=>({...l,message:{...l.message,content:res_string}}))}catch(l){console.log(l),console.log(fcall.arguments);let e=String(l);console.log(e),res_string+=e,function_node.update(t=>({...t,message:{...t.message,content:res_string}}))}}send(childid)}else createNode({role:"user",content:""},childid)}onMount(()=>{node.subscribe(l=>{l.children.length>old_child_count?($$invalidate(3,openchild=0),console.log("child added",old_child_count),old_child_count=l.children.length):l.children.length<old_child_count&&(console.log("child removed"),$$invalidate(3,openchild=Math.max(0,openchild-1)),old_child_count=l.children.length)})});const click_handler=()=>{$$invalidate(3,openchild=Math.max(0,openchild-1))},click_handler_1=()=>{$$invalidate(3,openchild=Math.min($node.children.length-1,openchild+1))};return $$self.$$set=l=>{"nodeId"in l&&$$invalidate(0,nodeId=l.nodeId)},$$self.$$.update=()=>{$$self.$$.dirty&35&&nodeId!=oldid&&($$subscribe_node($$invalidate(2,node=getNode(nodeId))),$$invalidate(5,oldid=nodeId),old_child_count=$node.children.length,$$invalidate(3,openchild=0))},[nodeId,$node,node,openchild,send,oldid,click_handler,click_handler_1]}class ChatNode extends SvelteComponent{constructor(e){super(),init(this,e,instance$1,create_fragment$1,safe_not_equal,{nodeId:0})}}const _page_svelte_svelte_type_style_lang="";function create_if_block(l){let e,t=l[1][l[0]].name+"",n,i,o,s,d,c;return d=new ChatNode({props:{nodeId:l[1][l[0]].starter_id}}),{c(){e=element("a"),n=text(t),i=space(),o=element("p"),s=space(),create_component(d.$$.fragment),this.h()},l(a){e=claim_element(a,"A",{class:!0,href:!0});var r=children(e);n=claim_text(r,t),r.forEach(detach),i=claim_space(a),o=claim_element(a,"P",{}),children(o).forEach(detach),s=claim_space(a),claim_component(d.$$.fragment,a),this.h()},h(){attr(e,"class","headerlink svelte-a50hhw"),attr(e,"href","/settings")},m(a,r){insert_hydration(a,e,r),append_hydration(e,n),insert_hydration(a,i,r),insert_hydration(a,o,r),insert_hydration(a,s,r),mount_component(d,a,r),c=!0},p(a,r){(!c||r&3)&&t!==(t=a[1][a[0]].name+"")&&set_data(n,t);const u={};r&3&&(u.nodeId=a[1][a[0]].starter_id),d.$set(u)},i(a){c||(transition_in(d.$$.fragment,a),c=!0)},o(a){transition_out(d.$$.fragment,a),c=!1},d(a){a&&(detach(e),detach(i),detach(o),detach(s)),destroy_component(d,a)}}}function create_fragment(l){let e,t,n,i,o,s,d,c=l[0]!=null&&l[1][l[0]]&&create_if_block(l);return{c(){e=element("main"),c&&c.c(),t=space(),n=element("div"),i=element("button"),this.h()},l(a){e=claim_element(a,"MAIN",{class:!0});var r=children(e);c&&c.l(r),t=claim_space(r),n=claim_element(r,"DIV",{class:!0});var u=children(n);i=claim_element(u,"BUTTON",{class:!0}),children(i).forEach(detach),u.forEach(detach),r.forEach(detach),this.h()},h(){attr(i,"class","homebtn svelte-a50hhw"),attr(n,"class","footer svelte-a50hhw"),attr(e,"class","svelte-a50hhw")},m(a,r){insert_hydration(a,e,r),c&&c.m(e,null),append_hydration(e,t),append_hydration(e,n),append_hydration(n,i),o=!0,s||(d=listen(i,"click",l[2]),s=!0)},p(a,[r]){a[0]!=null&&a[1][a[0]]?c?(c.p(a,r),r&3&&transition_in(c,1)):(c=create_if_block(a),c.c(),transition_in(c,1),c.m(e,t)):c&&(group_outros(),transition_out(c,1,1,()=>{c=null}),check_outros())},i(a){o||(transition_in(c),o=!0)},o(a){transition_out(c),o=!1},d(a){a&&detach(e),c&&c.d(),s=!1,d()}}}function instance(l,e,t){let n,i;component_subscribe(l,active_persona,s=>t(0,n=s)),component_subscribe(l,personas,s=>t(1,i=s));function o(){createNode({role:"user",content:""},i[n].starter_id)}return onMount(()=>{window.origin.includes("localhost")&&(document.title="LocalRing",console.log("local"))}),[n,i,o]}class Page extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{})}}export{Page as component};
