import{d as w,a as _,aU as y,u as i,x as l,aA as C,aK as g,B as c,y as v,aX as k,aW as D,aQ as I,aR as T,aT as b,aS as B,aL as E,n as f,a$ as S,b0 as K}from"./arco.154ce1ca.js";import{c as a,I as L,a as $,o as j}from"./HomePage.3d0a7747.js";import{_ as V}from"./index.df0b2fcc.js";/* empty css              */import"./vue.f3ea971f.js";const F=r=>(S("data-v-4d8c4b99"),r=r(),K(),r),N={class:"flex"},U=F(()=>c("div",{class:"flex align-center"},[c("span",{class:"text-nowrap text-12"},"[javascript]:")],-1)),q=["onKeydown"],A=w({__name:"Command",setup(r){const u=_(),s=_(""),d="[javascript]:",h=()=>{u.value.focus()};function m(){const t=document.querySelector(".cmd-content");t==null||t.scrollTo({top:t.scrollHeight}),s.value=""}const p=t=>{a.content.push(d+t),f(()=>{m()})};function x(){if($.every(e=>s.value.includes(e))){const e=s.value.split(" "),n=e[0],o=e[1];if(e.length<2){p("\u547D\u4EE4\u4E0D\u5408\u6CD5");return}switch(n){case"goto":{if(!o)return;p(`goto ${o}`),j(o);break}}return}try{const e=window.eval(s.value);if(!e)a.content.push(d);else{const n=`[javascript]:${s.value}`;a.content.push(n),a.content.push(e)}}catch(e){a.content.push(e)}s.value="",f(()=>{m()})}return(t,e)=>{const n=y("focus");return i(a).show?(l(),C(L,{key:0,title:"\u547D\u4EE4\u884C",width:"900px",height:"500px",class:"command",onOnClose:e[1]||(e[1]=o=>i(a).show=!1)},{default:g(()=>[c("div",{class:"h-100 cmd-content",onClick:h},[(l(!0),v(k,null,D(i(a).content,o=>(l(),v("div",{key:o,class:"text-12"},I(o),1))),128)),c("div",N,[U,T(c("input",{ref_key:"commandInput",ref:u,"onUpdate:modelValue":e[0]||(e[0]=o=>s.value=o),type:"text",class:"w-100",onKeydown:b(x,["enter"])},null,40,q),[[B,s.value],[n]])])])]),_:1})):E("",!0)}}});const W=V(A,[["__scopeId","data-v-4d8c4b99"]]);export{W as default};
