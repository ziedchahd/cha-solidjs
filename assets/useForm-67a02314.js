function m({data:f,validation:a={},message:u={}}){const c={},i={},o=new Map,b=async()=>{const e=Object.keys(c);let t=!0;for(let n of e){const s=c[n];if(!await s(r[n])){t=!1;break}}return t},V=async e=>{const t=c[e];return!(t&&!await t(r[e]))},d=function(e){return a?a[e]:{}},g=function(e){return u?u[e]:{}},C=function(){const e=Object.keys(f),t={};return e.forEach(n=>{t[n]=r[n]}),t},w=function(e,t){Object.keys(f).forEach(s=>{t?k[s]=e[s]:(r[s]=e[s],h(s,e[s]))})},j=(e,t)=>{c[e]=t},y=(e,t)=>{i[e]=t},F=e=>{if(e){const t=i[e];t&&t()}else{const t=Object.keys(i);for(let n of t){const s=i[n];s&&s()}}},h=(e,t)=>{if(o.has(e)){const[n,s]=o.get(e);s(t)}},r={...f,isValid:b,getFormData:C,setFormData:w,setCheckValid:j,getValidation:d,getMessage:g,bindController:(e,t,n)=>{o.set(e,[t,n])},setClearValid:y,clearValidates:F,checkField:V},k=new Proxy(r,{get(e,t,n){if(o.has(t)){const[s,l]=o.get(t);return s()}return e[t]},set(e,t,n,s){e[t]=n,h(t,n);let l=c[t];return l&&l(n),!0}});return k}export{m as u};