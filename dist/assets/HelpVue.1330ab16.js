import{d as B,a as o,aB as y,x as n,aA as C,aK as V,B as e,aN as b,b4 as E,y as h,aX as k,aW as D,z as A,aQ as N,aR as m,bk as v,u as t,b as F}from"./arco.5d89a600.js";import{h as i,V as H}from"./HomePage.00775db9.js";import{u as L}from"./tocenter.d07e9f02.js";import{_ as z}from"./index.c1ffd91f.js";/* empty css              */import"./vue.bde832aa.js";const I={class:"h-100 flex in-help mt-6 gc-4"},R={class:"p-4 flex flex-col gr-4 text-12"},S={class:"text-999"},T=["onClick"],X={class:"flex-1 flex flex-s"},K=["src"],M={class:"w-100 h-100 flex flex-s loading"},Q=B({__name:"HelpVue",setup(U){const{position:r,wh:c}=L(600,400),u=o([{title:"\u58C1\u7EB8\u8BBE\u5B9A",src:"//player.bilibili.com/player.html?aid=824201465&bvid=BV1Vg4y137XM&cid=1073592467&page=1"}]),d=o(u.value[0].src),_=o(0),l=o(!1),x=(p,a)=>{_.value=a,d.value=p.src},g=()=>{l.value=!0};return(p,a)=>{const w=y("icon-list");return n(),C(H,{show:t(i),"onUpdate:show":a[0]||(a[0]=s=>F(i)?i.value=s:null),x:t(r).x,y:t(r).y,w:t(c).w,h:t(c).h,title:"\u5E2E\u52A9\u4E2D\u5FC3"},{default:V(()=>[e("div",I,[e("ul",R,[e("div",S,[b(w),E(" \u89C6\u9891\u5217\u8868 ")]),(n(!0),h(k,null,D(u.value,(s,f)=>(n(),h("li",{key:s.title,class:A({active:f==_.value}),onClick:W=>x(s,f)},N(s.title),11,T))),128))]),e("div",X,[m(e("iframe",{src:d.value,scrolling:"no",border:0,frameborder:"no",framespacing:"0",allowfullscreen:"true",class:"w-100 h-100 p-8",marginheight:"0",marginwidth:"0",onLoad:g},`\r
        `,40,K),[[v,l.value]]),m(e("div",M," \u6B63\u5728\u52A0\u8F7D\u4E2D ",512),[[v,!l.value]])])])]),_:1},8,["show","x","y","w","h"])}}});const P=z(Q,[["__scopeId","data-v-98a8ddef"]]);export{P as default};