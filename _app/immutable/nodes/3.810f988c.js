import{s as Q,n as D,r as V,e as F}from"../chunks/scheduler.918d31b8.js";import{S as W,i as Y,g as u,s as _,h as a,y as S,c as f,j as G,f as l,k as p,a as s,B as H,z as J,C as O}from"../chunks/index.94a51986.js";import{a as K,p as M}from"../chunks/store.34003bcd.js";function Z(x){let r,B="settings",b,o,C,m,h="context size (in chat messages)",E,i,w,A,R,v,N="primer:",k,L,z,n,P,T,j,y,q,c,U="home",I,X;return{c(){r=u("h2"),r.textContent=B,b=_(),o=u("br"),C=_(),m=u("label"),m.textContent=h,E=_(),i=u("input"),w=_(),A=u("br"),R=_(),v=u("label"),v.textContent=N,k=_(),L=u("br"),z=_(),n=u("textarea"),P=_(),T=u("br"),j=_(),y=u("p"),q=_(),c=u("a"),c.textContent=U,this.h()},l(t){r=a(t,"H2",{"data-svelte-h":!0}),S(r)!=="svelte-14ykkk3"&&(r.textContent=B),b=f(t),o=a(t,"BR",{}),C=f(t),m=a(t,"LABEL",{for:!0,"data-svelte-h":!0}),S(m)!=="svelte-s2qjb7"&&(m.textContent=h),E=f(t),i=a(t,"INPUT",{type:!0,name:!0,class:!0}),w=f(t),A=a(t,"BR",{}),R=f(t),v=a(t,"LABEL",{for:!0,"data-svelte-h":!0}),S(v)!=="svelte-12nhcx6"&&(v.textContent=N),k=f(t),L=a(t,"BR",{}),z=f(t),n=a(t,"TEXTAREA",{name:!0,id:!0,cols:!0,rows:!0,class:!0}),G(n).forEach(l),P=f(t),T=a(t,"BR",{}),j=f(t),y=a(t,"P",{}),G(y).forEach(l),q=f(t),c=a(t,"A",{href:!0,"data-svelte-h":!0}),S(c)!=="svelte-1bzf17w"&&(c.textContent=U),this.h()},h(){p(m,"for","contextsetting"),p(i,"type","number"),p(i,"name","contextsetting"),p(i,"class","svelte-edubwa"),p(v,"for","primerinput"),p(n,"name","primerinput"),p(n,"id","primerinput"),p(n,"cols","30"),p(n,"rows","10"),p(n,"class","svelte-edubwa"),p(c,"href","/")},m(t,e){s(t,r,e),s(t,b,e),s(t,o,e),s(t,C,e),s(t,m,e),s(t,E,e),s(t,i,e),H(i,x[0]),s(t,w,e),s(t,A,e),s(t,R,e),s(t,v,e),s(t,k,e),s(t,L,e),s(t,z,e),s(t,n,e),H(n,x[1].message.content),s(t,P,e),s(t,T,e),s(t,j,e),s(t,y,e),s(t,q,e),s(t,c,e),I||(X=[J(i,"input",x[2]),J(n,"input",x[3])],I=!0)},p(t,[e]){e&1&&O(i.value)!==t[0]&&H(i,t[0]),e&2&&H(n,t[1].message.content)},i:D,o:D,d(t){t&&(l(r),l(b),l(o),l(C),l(m),l(E),l(i),l(w),l(A),l(R),l(v),l(k),l(L),l(z),l(n),l(P),l(T),l(j),l(y),l(q),l(c)),I=!1,V(X)}}}function $(x,r,B){let b,o;F(x,K,h=>B(0,b=h)),F(x,M,h=>B(1,o=h));function C(){b=O(this.value),K.set(b)}function m(){o.message.content=this.value,M.set(o)}return[b,o,C,m]}class et extends W{constructor(r){super(),Y(this,r,$,Z,Q,{})}}export{et as component};
