/* empty css              */import{e as c,V as G,j as L,n as H,i as K}from"./HomePage.dc93b31a.js";/* empty css               */import{d as M,r as O,a as Q,c as Y,aG as Z,n as q,aH as J,aB as d,b9 as R,x as m,y as f,aN as t,aK as s,B as o,u as a,A as W,b5 as l,z as X,aQ as h,aP as ee,a_ as te,aZ as oe,b3 as se,b2 as ne,a$ as ae,b0 as ce}from"./arco.9e4de7b4.js";import{u as ie}from"./tocenter.20975ab6.js";import{s as F,b as le,d as de,u as ue,t as _e}from"./file.c66aa0c6.js";import{_ as re}from"./index.6a7e5633.js";import"./vue.21e7a02f.js";const r=u=>(ae("data-v-2be0d0c0"),u=u(),ce(),u),pe={class:"image-container h-100 flex flex-s"},me=["src"],fe={key:1},he={style:{width:"160px"},class:"flex flex-col gr-4 text-12"},ge={class:"flex justify-between align-center"},we=r(()=>o("span",null,"\u5206\u8FA8\u7387",-1)),xe={class:"flex justify-between align-center"},ye=r(()=>o("span",null,"\u5927\u5C0F",-1)),ve=r(()=>o("span",{class:"text-12 text-666"},"\u8F6CPNG\u4E0B\u8F7D",-1)),be=r(()=>o("span",{class:"text-12 text-666"},"\u8F6CBASE64\u4E0B\u8F7D",-1)),Ce=M({__name:"ImageVue",setup(u){const n=O({scale:1,rotate:0,width:0,height:0}),p=Q(),k=async()=>{const e=new Image;e.src=c.src,e.onload=()=>{n.width=e.width,n.height=e.height}},B=async()=>{const e=await F(c.src),_=le(e,"png");de(_,"file","png")},E=async()=>{const e=await F(c.src);L(e,`${H().slice(0,8)}.txt`)},g=()=>{n.scale>0&&(n.scale-=.2),n.scale<=0&&(n.scale=.1)},w=()=>{n.scale<12&&(n.scale+=.2)},I=Y(()=>({transform:`scale(${n.scale}) rotate(${n.rotate}deg)`})),D=()=>{n.rotate+=45},V=async()=>{const e=await ue();K(e.name)&&(c.src=await _e(e))},x=e=>{e.preventDefault(),e.deltaY<0?g():w()};Z(()=>{q(()=>{const e=p.value;!e||e.addEventListener("wheel",x)})}),J(()=>{const e=p.value;!e||e.removeEventListener("wheel",x)});const{position:y,wh:v}=ie(900,600);return(e,_)=>{const i=ee,z=d("icon-plus"),S=d("icon-minus"),T=d("icon-sync"),A=d("icon-info"),N=te,b=R,j=oe,$=d("icon-download"),C=se,P=ne;return m(),f("div",{ref_key:"imageContainer",ref:p},[t(G,{show:a(c).show,"onUpdate:show":_[0]||(_[0]=U=>a(c).show=U),x:a(y).x,y:a(y).y,w:a(v).w,h:a(v).h,title:"\u56FE\u7247\u5904\u7406"},{default:s(()=>[o("div",pe,[a(c).src?(m(),f("img",{key:0,src:a(c).src,style:W(a(I)),width:"400"},null,12,me)):(m(),f("div",fe,[t(i,{type:"primary",onClick:V},{default:s(()=>[l("\u4E0A\u4F20\u56FE\u7247")]),_:1})]))]),o("div",{class:X(["image-tools px-24 flex align-center gc-8 justify-between",{"no-image":!a(c).src}])},[o("div",null,[t(i,{shape:"circle",type:"text",onClick:w},{default:s(()=>[t(z)]),_:1})]),o("div",null,[t(i,{shape:"circle",type:"text",onClick:g},{default:s(()=>[t(S)]),_:1})]),o("div",null,[t(i,{shape:"circle",type:"text",onClick:D},{default:s(()=>[t(T)]),_:1})]),o("div",null,[t(j,{title:"\u56FE\u7247\u4FE1\u606F",trigger:"click"},{content:s(()=>[o("div",he,[t(N,{class:"my-4"}),o("div",ge,[we,o("span",null,[t(b,null,{default:s(()=>[l(h(n.width)+" x "+h(n.height),1)]),_:1}),l(" px ")])]),o("div",xe,[ye,o("span",null,[t(b,null,{default:s(()=>[l(h(a(c).size),1)]),_:1}),l(" byte ")])])])]),default:s(()=>[t(i,{shape:"circle",type:"text",onClick:k},{default:s(()=>[t(A)]),_:1})]),_:1})]),o("div",null,[t(P,{position:"bl"},{content:s(()=>[o("div",null,[t(C,{onClick:B},{default:s(()=>[ve]),_:1}),t(C,{class:"text-12",onClick:E},{default:s(()=>[be]),_:1})])]),default:s(()=>[t(i,{size:"mini"},{default:s(()=>[l(" \u4E0B\u8F7D "),t($)]),_:1})]),_:1})])],2)]),_:1},8,["show","x","y","w","h"])],512)}}});const Se=re(Ce,[["__scopeId","data-v-2be0d0c0"]]);export{Se as default};