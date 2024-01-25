import{z as Z,a as V,a0 as L,m as E,i as $,t as v,p as x,j as y,c as F,q as C,g as I,h as k,s as z,u as P}from"./index-00bf0c33.js";const R=v('<form><button type="submit">'),b=x();function j(e){const n=()=>y(e,"cm-form",{"cm-form-inline":e.inline}),[r,t]=Z(e,["labelWidth","form","inline","classList","class","onChange","children","onBeforeSubmit"]),m=(i,u)=>{r.form[i]=u,r.onChange&&r.onChange(i,u)},o={labelWidth:r.labelWidth,inline:r.inline,form:r.form,onChange:m},s=i=>(i.preventDefault(),r.onBeforeSubmit?r.onBeforeSubmit():!1);return V(b.Provider,{value:o,get children(){const i=R(),u=i.firstChild;return i.addEventListener("submit",s),L(i,E({get classList(){return n()}},t,{get autocomplete(){return e.autocomplete}}),!1,!0),u.style.setProperty("display","none"),$(i,()=>r.children,null),i}})}function B(){return{required(e){return e==null?!1:e instanceof Array?e.length>0:`${e}`.length>0},email(e){return/^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)},url(e){return new RegExp("^(?:(?:(?:https?|ftp):)?//)(?:S+(?::S*)?@)?(?:(?!(?:10|127)(?:.d{1,3}){3})(?!(?:169.254|192.168)(?:.d{1,3}){2})(?!172.(?:1[6-9]|2d|3[0-1])(?:.d{1,3}){2})(?:[1-9]d?|1dd|2[01]d|22[0-3])(?:.(?:1?d{1,2}|2[0-4]d|25[0-5])){2}(?:.(?:[1-9]d?|1dd|2[0-4]d|25[0-4]))|(?:(?:[a-z¡-￿0-9]-*)*[a-z¡-￿0-9]+)(?:.(?:[a-z¡-￿0-9]-*)*[a-z¡-￿0-9]+)*(?:.(?:[a-z¡-￿]{2,})).?)(?::d{2,5})?(?:[/?#]S*)?$","i").test(e)},minLength(e,n){return(e?e.length:0)>=n},maxLength(e,n){return(e?e.length:0)<=n},min(e,n){return e>=n},max(e,n){return e<=n},range(e,n){return e>=n[0]&&e<=n[1]},price(e){return/^\d+(.\d{1,2})?$/.test(e)},idCard(e){return/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e)},noSpecial(e){return/^[\u4E00-\u9FA5A-Za-z0-9_&]+$/.test(e)},userName(e){return/^[\u4E00-\u9FA5A-Za-z0-9*]+$/.test(e)},mobile(e){return/^1[3-8][0-9]{9}$/.test(e)},ip(e){return/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(e)},equalTo(e,n,r){const t=r[n];return e===t}}}const W=v('<div><label class="cm-form-label"></label><div class="cm-form-item-element"><div class="cm-form-item-error-tip">'),S=x();function M(e){const[n,r]=F(null),t=C(b),m=B();let o;const s=e.name;let i=!1;s&&t&&t.form.getValidation&&t.form.getValidation(s)&&(i=t.form.getValidation(s).required),e.rules&&(i=e.rules.required);const u=()=>y(e,"cm-form-item",{"cm-form-item-error":n(),"cm-form-item-inline":e.inline||t?.inline,"cm-form-item-required":i}),h=async f=>{if(o){const l=o.getBoundingClientRect();if(l.width===0||l.height===0)return!0}if(s&&t&&t.form.getValidation&&t.form.getValidation(s)||t&&e.rules){const l=t.form.getValidation(s)||e.rules,d=t.form.getMessage(s)||e.messages;if(l.required){const a=await m.required(f,l.required,t.form);if(!a)return r(d?d.required:""),a}for(let a in l)if(a!=="required"){if(m[a]){const c=await m[a](f,l[a],t.form);if(!c)return r(d?d[a]:""),c}if(l[a]&&typeof l[a]=="function"){const c=await l[a](f,t.form);if(!c)return r(d?d[a]:""),c}}return r(null),!0}return!0};e.name||console.warn("formItem needs name property to check valid");const _=()=>{r(null)};return e.name&&t?.form.setCheckValid&&t.form.setCheckValid(e.name,h),e.name&&t?.form.setClearValid&&t.form.setClearValid(e.name,_),V(S.Provider,{get value(){return{name:e.name}},get children(){const f=W(),l=f.firstChild,d=l.nextSibling,a=d.firstChild;$(l,()=>e.label);const c=o;return typeof c=="function"?P(c,d):o=d,$(d,()=>e.children,a),$(a,n),I(g=>{const q=u(),A=e.style,w={width:t?.labelWidth+"px",...e.labelStyle};return g._v$=k(f,q,g._v$),g._v$2=z(f,A,g._v$2),g._v$3=z(l,w,g._v$3),g},{_v$:void 0,_v$2:void 0,_v$3:void 0}),f}})}const D=()=>C(S);function T(e,n,r){arguments.length===2&&(r=n,n="value");let t,m;e[n]&&e[n].length===2&&typeof e[n][0]=="function"?(t=e[n][0],m=e[n][1]):[t,m]=F(e[n]||r);const o=C(b),s=o?.form.getFormData?o.form.getFormData():{},u=D()?.name||e.name,h=s&&u?s[u]:void 0;return h!=null&&!e.notCreateFiled&&m(h),o&&o.form&&u&&!e.notCreateFiled&&o.form.bindController(u,t,m),[t,f=>{m(f),e.notCreateFiled||o?.onChange(u,f)}]}export{j as F,M as a,T as c,B as u};
