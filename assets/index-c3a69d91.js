import{i as y,a as v,s as d,F as w,g as o,h as m,t as h,m as k,j as _,y as f,f as z}from"./index-00bf0c33.js";const L=h("<div>"),S=h("<ul>"),b=h("<li>");function A(e){const c=e.size??"medium",s=e.shape??"circle",a=()=>_(e,"cm-skeleton-item",{[`cm-skeleton-${e.type}`]:e.type,[`cm-skeleton-${e.type}-${c}`]:c,[`cm-skeleton-${e.type}-${s}`]:s,["cm-skeleton-inline"]:e.inline}),i=()=>f(e,{width:typeof e.size=="number"?e.size+"px":e.width,height:typeof e.size=="number"?e.size+"px":e.height});return(()=>{const n=L();return o(t=>{const u=a(),l=i();return t._v$=m(n,u,t._v$),t._v$2=d(n,l,t._v$2),t},{_v$:void 0,_v$2:void 0}),n})()}const $=e=>c=>v(A,k({type:e},c)),I=$("avatar"),x=$("image"),P=$("title"),B=$("button"),C=$("item");function F(e){const c=e.rows??4,s=()=>_(e,"cm-skeleton-paragraph"),a=new Array(c).fill(1),i=()=>f(e,{width:e.width});return(()=>{const n=S();return y(n,v(w,{each:a,children:(t,u)=>{let l={};return e.width&&e.width instanceof Array&&(l.width=e.width[u()]),(()=>{const g=b();return d(g,l),g})()}})),o(t=>{const u=s(),l=i();return t._v$3=m(n,u,t._v$3),t._v$4=d(n,l,t._v$4),t},{_v$3:void 0,_v$4:void 0}),n})()}const T=h("<div>");function r(e){const c=()=>_(e,"cm-skeleton",{"cm-skeleton-active":e.active}),s=()=>f(e,{width:e.width,height:e.height});return v(z,{get when(){return e.loading},get fallback(){return e.children},get children(){const a=T();return y(a,()=>e.placeholder),o(i=>{const n=c(),t=s();return i._v$=m(a,n,i._v$),i._v$2=d(a,t,i._v$2),i},{_v$:void 0,_v$2:void 0}),a}})}r.Avatar=I;r.Image=x;r.Title=P;r.Button=B;r.Item=C;r.Paragraph=F;export{r as S};