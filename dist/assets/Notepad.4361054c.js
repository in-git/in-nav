/* empty css              */import{w as e,V as A,x as L,y as M,t as H}from"./HomePage.3d0a7747.js";import{d as K,a as r,aH as z,c as O,aB as p,bi as P,aU as R,x,aA as y,aK as o,B as t,aN as n,aO as W,aR as b,u as a,aS as k,b5 as g,aL as $,aP as j,b3 as q,b2 as G,b1 as J,a$ as Q,b0 as X}from"./arco.154ce1ca.js";import{_ as Y}from"./index.df0b2fcc.js";import"./vue.f3ea971f.js";const B=l=>(Q("data-v-599464cf"),l=l(),X(),l),Z={class:"text-white"},ee=B(()=>t("span",null,"\u8BB0\u4E8B\u672C",-1)),te={class:"notepad-actions gc-4 flex align-center"},oe=B(()=>t("span",null,"\u6587\u4EF6",-1)),ne={class:"mx-12"},ae={class:"notepad-save"},se={class:"absolute w-100 save-tips"},ce=K({__name:"Notepad",setup(l){const C=r(),u=r(!1);let _=0;const i=r({w:900,h:600});function f(){e.content.length<=0||(e.title.length===0&&(e.title=e.content.slice(0,4)),L({content:e.content,id:e.id,title:e.title,date:M(new Date)}),u.value=!0,_=setTimeout(()=>{u.value=!1,clearTimeout(_)},3e3))}const D=()=>{H()},m=d=>{d.key==="s"&&d.ctrlKey&&(f(),d.preventDefault())};window.addEventListener("keydown",m),z(()=>{window.removeEventListener("keydown",m)});const w=O(()=>({x:window.innerWidth/2-i.value.w/2,y:window.innerHeight/2-i.value.h/2}));return(d,s)=>{const N=p("icon-bookmark"),F=p("icon-down"),v=j,V=p("icon-delete"),I=q,S=G,E=p("IconSave"),T=J,U=P,h=R("focus");return x(),y(A,{show:a(e).show,"onUpdate:show":s[3]||(s[3]=c=>a(e).show=c),x:a(w).x,y:a(w).y,w:i.value.w,h:i.value.h},{title:o(()=>[t("span",Z,[n(N,{class:"mr-6"}),ee])]),hander:o(()=>[t("div",{class:"notepad-title",onMousedown:s[1]||(s[1]=W(()=>{},["stop"]))},[b(t("input",{"onUpdate:modelValue":s[0]||(s[0]=c=>a(e).title=c),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"},null,512),[[k,a(e).title],[h]])],32)]),default:o(()=>[t("div",te,[n(S,{"popup-max-height":!1,position:"bl"},{content:o(()=>[t("div",ne,[n(I,{onClick:D},{default:o(()=>[n(V),g(" \u6E05\u7A7A")]),_:1})])]),default:o(()=>[n(v,{type:"text",size:"medium",style:{color:"#333"}},{default:o(()=>[oe,n(F)]),_:1})]),_:1})]),t("div",{ref_key:"notepad",ref:C,class:"notepad-content pt-4 w-100 flex-1"},[b(t("textarea",{"onUpdate:modelValue":s[2]||(s[2]=c=>a(e).content=c),class:"px-8 h-100 in-scrollbar",autocomplete:"off",placeholder:"\u5728\u8FD9\u91CC\u8F93\u5165\u6587\u5B57"},null,512),[[k,a(e).content],[h]])],512),t("div",ae,[n(T,{content:"\u4FDD\u5B58"},{default:o(()=>[n(v,{shape:"circle",disabled:a(e).content.length<=0,type:"primary",onClick:f},{default:o(()=>[n(E)]),_:1},8,["disabled"])]),_:1})]),t("div",se,[u.value?(x(),y(U,{key:0,banner:"",type:"success",closable:""},{default:o(()=>[g(" \u64CD\u4F5C\u6210\u529F ")]),_:1})):$("",!0)])]),_:1},8,["show","x","y","w","h"])}}});const re=Y(ce,[["__scopeId","data-v-599464cf"]]);export{re as default};
