import{c as h,J as f,v as k,i as g,g as b,n as E,t as L,h as T,s as _,j as C}from"./index-00bf0c33.js";import{s as y}from"./index-345cd19e.js";const x=L('<div><div class="cm-back-top-inner">');function S(t){const[s,c]=h(!1),i=()=>C(t,"cm-back-top",{"cm-back-top-show":s()}),l=t.bottom??30,a=t.right??30,r=t.height??400,d=t.duration??1e3,m=()=>({...t.style,bottom:`${l}px`,right:`${a}px`}),v=()=>{const e=document.documentElement.scrollTop||document.body.scrollTop;y(window,e,0,d),t.onClick&&t.onClick()},o=()=>{c(window.pageYOffset>=r)};return f(()=>{window.addEventListener("scroll",o),window.addEventListener("resize",o)}),k(()=>{window.removeEventListener("scroll",o),window.removeEventListener("resize",o)}),(()=>{const e=x(),u=e.firstChild;return e.$$click=v,g(u,()=>t.children),b(n=>{const w=i(),$=m();return n._v$=T(e,w,n._v$),n._v$2=_(e,$,n._v$2),n},{_v$:void 0,_v$2:void 0}),e})()}E(["click"]);export{S as B};