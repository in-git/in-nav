/* empty css              *//* empty css              */import{d as C,aB as x,b6 as z,x as c,y as r,aN as e,aK as t,b5 as o,B as s,aX as E,aW as w,u as m,aQ as h,aP as I,b7 as T,b8 as $,a as D,b9 as q,ba as N,bb as P,aA as V,bc as L,bd as j,a_ as M,b1 as W,c as G,be as H,b as K,bf as Q}from"./arco.154ce1ca.js";import{g as R,r as S,p as v,V as U}from"./HomePage.4b288063.js";/* empty css               *//* empty css              */import{_ as k}from"./index.3de2b359.js";import"./vue.f3ea971f.js";const X={class:"about-me"},J={class:"flex align-center justify-between"},O=["src"],Y=C({__name:"AboutMe",setup(b){const n=[{href:"https://space.bilibili.com/301733306",title:"\u54D4\u54E9\u54D4\u54E9"},{href:"https://github.com/in-git",title:"github"}];return(d,F)=>{const p=x("icon-qq"),a=I,i=T,u=$,f=x("icon-email"),g=x("icon-arrow-right"),y=z;return c(),r("div",X,[e(y,{size:"small",bordered:!1,"max-height":280},{header:t(()=>[o(" \u97F3 [IN] ")]),default:t(()=>[e(u,null,{default:t(()=>[e(i,{copyable:"",class:"w-100 text-12 mb-0 flex justify-between"},{default:t(()=>[s("span",null,[e(p,{style:{color:"#3a86ff"},class:"mr-12 text-16"}),e(a,{type:"dashed",size:"mini"},{default:t(()=>[o("444891953")]),_:1})])]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(i,{copyable:"",class:"w-100 mb-0 flex text-12 justify-between"},{default:t(()=>[s("span",null,[e(f,{style:{color:"#ff006e"},class:"mr-12 text-16"}),e(a,{size:"mini",type:"dashed"},{default:t(()=>[o("444891953@qq.com")]),_:1})])]),_:1})]),_:1}),(c(),r(E,null,w(n,l=>e(u,{key:l.title},{default:t(()=>[s("div",J,[s("div",null,[s("img",{src:m(R)(l.href),alt:"bilibili",width:"16",height:"16",class:"mr-12"},null,8,O),e(a,{target:"_blank",size:"mini",href:l.href,type:"dashed"},{default:t(()=>[o(h(l.title),1)]),_:2},1032,["href"])]),s("div",null,[e(a,{size:"mini",target:"_blank",shape:"circle",href:l.href},{default:t(()=>[e(g)]),_:2},1032,["href"])])])]),_:2},1024)),64))]),_:1})])}}});const Z=k(Y,[["__scopeId","data-v-9114709b"]]);const A=["#fca311","#ffd6ff","#c8b6ff","#52b788","#ffd670","#ff6b6b"],B=()=>{const b=S(0,A.length-1);return A[b]},ee={class:"text-12 text-selected-none"},te={class:"text-12"},ae={class:"text-12"},oe={class:"flex gc-4 flex-wrap gr-4"},se={class:"website-info text-12"},ne=C({__name:"AboutPage",setup(b){const n=[{time:"2023-03-20",content:"\u7F51\u9875\u9996\u53D1\u81F3gitee",dotColor:B(),version:"\u7F18\u8D77"}],d=D(["vue3","typescript","arco.design","pinia","scss","vue3-draggable-resizable"]);return(F,p)=>{const a=q,i=L,u=N,f=j,g=M,y=W,l=P;return c(),r("div",ee,[e(l,{bordered:!1,"default-active-key":[1],accordion:""},{default:t(()=>[e(f,{key:"1",header:"\u53D1\u5E03\u884C\u7A0B"},{default:t(()=>[e(u,null,{default:t(()=>[(c(),r(E,null,w(n,_=>e(i,{key:_.time,label:_.time},{default:t(()=>[s("span",te,h(_.content),1),s("div",ae,[o(" \u7248\u672C\u53F7: "),e(a,{color:"#38b000",size:"small"},{default:t(()=>[o(h(_.version),1)]),_:2},1024)])]),_:2},1032,["label"])),64))]),_:1})]),_:1}),e(f,{key:"2",header:"\u6280\u672F\u624B\u518C"},{default:t(()=>[s("div",oe,[(c(!0),r(E,null,w(d.value,_=>(c(),V(a,{key:_},{default:t(()=>[o(h(_),1)]),_:2},1024))),128)),e(g,{class:"my-2"}),e(y,{content:"\u81EA\u7814css\u5E93"},{default:t(()=>[e(a,{color:m(B)()},{default:t(()=>[o("in-less")]),_:1},8,["color"])]),_:1})])]),_:1}),e(f,{key:"3",header:"\u4FE1\u606F\u5B89\u5168"},{default:t(()=>[s("div",se,[o(" \u672C\u7AD9\u5C06\u4EE5 "),e(a,{color:"#38b000"},{default:t(()=>[o("\u9759\u6001\u7F51\u9875")]),_:1}),o(" \u7684\u5F62\u5F0F\u53D1\u5E03, \u65E0\u9700 \u3010\u767B\u9646/\u6CE8\u518C\u3011 \u6240\u4EE5\u6839\u672C\u4E0D\u7528\u62C5\u5FC3\u6570\u636E\u5B89\u5168\u95EE\u9898 ")])]),_:1})]),_:1})])}}});const ue=k(ne,[["__scopeId","data-v-ad74a954"]]),le={class:"px-8 pt-4 flex-1 about-content"},_e=C({__name:"About",setup(b){const n=D({w:300,h:400}),d=G(()=>({x:window.innerWidth/1.2-n.value.w/2,y:window.innerHeight/2-n.value.h/2}));return(F,p)=>{const a=Q,i=H;return c(),r("div",null,[e(U,{show:m(v),"onUpdate:show":p[0]||(p[0]=u=>K(v)?v.value=u:null),x:m(d).x,y:m(d).y,w:n.value.w,h:n.value.h,title:"\u5173\u4E8E",resizable:!1},{default:t(()=>[s("div",le,[e(i,{size:"medium",class:"h-100"},{default:t(()=>[e(a,{key:"1",title:"\u5173\u4E8E\u4F5C\u8005"},{default:t(()=>[e(Z)]),_:1}),e(a,{key:"2",title:"\u5173\u4E8E\u672C\u9875"},{default:t(()=>[e(ue)]),_:1})]),_:1})])]),_:1},8,["show","x","y","w","h"])])}}});const he=k(_e,[["__scopeId","data-v-955b0193"]]);export{he as default};
