import{u as o,i as g,a as e,S as r,T as d,t as h}from"./index-00bf0c33.js";import{S as t}from"./index-73979b49.js";import{T as s,C as i}from"./index-345cd19e.js";import{D as n,a,C as y}from"./code-6666454f.js";import{P as u}from"./index-e4583d54.js";import{T as p}from"./index-0092c168.js";import{p as _,e as v}from"./columns-26981c48.js";import{h as b}from"./hljs-74a5c6d1.js";import"./createField-b596c149.js";import"./index-112bc2d3.js";import"./_commonjsHelpers-725317a4.js";const f="<Slider />",F=`<Space dir="v">
    <Slider disabled/>
    <Slider disabled range value={[30, 70]}/>
</Space>`,x=`<Space dir="v">
    <Slider step={10}/>
    <Slider step={0.1}/>
</Space>`,E="<Slider value={30} />",C="<Slider step={0.01} min={0.2} max={1} value={0.3}/>",S="<Slider value={[30, 70]} range/>",D=`<Slider value={[30, 70]} range tipFormatter={(v: number) => {
    return v + '分'
}}/>`,B="<Slider step={10} marks={{0: '0', 20: '20a', 50: '50'}}/>",A=[{name:"classList",desc:"自定义class",type:"Object",default:""},{name:"class",desc:"自定义class",type:"string",default:""},{name:"style",desc:"自定义样式",type:"Object",default:""},{name:"name",desc:"name属性",type:"string",default:""},{name:"disabled",desc:"禁用",type:"boolean",default:""},{name:"range",desc:"使用范围滑块",type:"boolean",default:""},{name:"min",desc:"最小值",type:"number",default:"0"},{name:"max",desc:"最大值",type:"number",default:"100"},{name:"step",desc:"步长",type:"number",default:"1.0"},{name:"prepend",desc:"前缀",type:"JSXElement",default:""},{name:"value",desc:"值，可控属性",type:"Function[]",default:""},{name:"tipFormatter",desc:"提示格式化",type:"Function",default:""},{name:"marks",desc:"显示的标记",type:"Object",default:""},{name:"onChange",desc:"值改变事件",type:"Function",default:""}],k=[{name:"onChange",desc:"值改变事件",params:"value: number | number[]"}],P=[{id:"slider_base",text:"基础用法"},{id:"slider_disabled",text:"禁用"},{id:"slider_step",text:"步长"},{id:"slider_init",text:"初始化"},{id:"slider_minMax",text:"最大最小值"},{id:"slider_range",text:"范围"},{id:"slider_tip",text:"格式化"},{id:"slider_marks",text:"标记"},{id:"comp_api",text:"API"},{id:"comp_props",text:"属性"},{id:"comp_data_props",text:"数据属性"},{id:"comp_events",text:"事件"}],l={slider_base:f,slider_disabled:F,slider_step:x,slider_init:E,slider_minMax:C,slider_range:S,slider_tip:D,slider_marks:B},T=h('<div class="sys-ctx-main-left">');function G(){return[(()=>{const c=T();return o(b,c,()=>""),g(c,e(r,{dir:"v",size:32,get children(){return[e(s,{heading:2,children:"Slider 滑块"}),e(r,{id:"slider_base",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(t,{}),e(n,{align:"left",get children(){return e(d,{type:"primary",children:"基础用法"})}}),e(u,{type:"secondary",spacing:"extended",children:"基础用法"}),e(a,{get data(){return l.slider_base}})]}})}}),e(r,{id:"slider_disabled",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(r,{dir:"v",get children(){return[e(t,{disabled:!0}),e(t,{disabled:!0,range:!0,value:[30,70]})]}}),e(n,{align:"left",get children(){return e(d,{type:"primary",children:"禁用"})}}),e(u,{type:"secondary",spacing:"extended",children:"disabled 可禁用"}),e(a,{get data(){return l.slider_disabled}})]}})}}),e(r,{id:"slider_step",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(r,{dir:"v",get children(){return[e(t,{step:10}),e(t,{step:.1})]}}),e(n,{align:"left",get children(){return e(d,{type:"primary",children:"步长"})}}),e(u,{type:"secondary",spacing:"extended",children:"step 属性可修改滑动的步长"}),e(a,{get data(){return l.slider_step}})]}})}}),e(r,{id:"slider_init",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(t,{value:30}),e(n,{align:"left",get children(){return e(d,{type:"primary",children:"初始化值"})}}),e(u,{type:"secondary",spacing:"extended",children:"value 可初始化值"}),e(a,{get data(){return l.slider_init}})]}})}}),e(r,{id:"slider_minMax",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(t,{step:.01,min:.2,max:1,value:.3}),e(n,{align:"left",get children(){return e(d,{type:"primary",children:"最大小值"})}}),e(u,{type:"secondary",spacing:"extended",children:"可通过min max 修改最小最大值"}),e(a,{get data(){return l.slider_minMax}})]}})}}),e(r,{id:"slider_range",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(t,{value:[30,70],range:!0}),e(n,{align:"left",get children(){return e(d,{type:"primary",children:"范围"})}}),e(u,{type:"secondary",spacing:"extended",children:"设置 range 为范围滑块"}),e(a,{get data(){return l.slider_range}})]}})}}),e(r,{id:"slider_tip",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(t,{value:[30,70],range:!0,tipFormatter:m=>m+"分"}),e(n,{align:"left",get children(){return e(d,{type:"primary",children:"格式化"})}}),e(u,{type:"secondary",spacing:"extended",children:"使用 tipFormatter 可自定义提示信息"}),e(a,{get data(){return l.slider_tip}})]}})}}),e(r,{id:"slider_marks",dir:"v",get children(){return e(i,{bordered:!0,get children(){return[e(t,{step:10,marks:{0:"0",20:"20a",50:"50"}}),e(n,{align:"left",get children(){return e(d,{type:"primary",children:"标记"})}}),e(u,{type:"secondary",spacing:"extended",children:"设置属性 marks 可以显示标记"}),e(a,{get data(){return l.slider_marks}})]}})}}),e(r,{dir:"v",size:24,id:"comp_api",get children(){return[e(s,{type:"primary",heading:3,children:"API"}),e(r,{id:"comp_props",dir:"v",get children(){return[e(s,{type:"primary",heading:4,children:"Slider Props"}),e(p,{columns:_,data:A,border:!0,size:"small"})]}}),e(r,{id:"comp_events",dir:"v",get children(){return[e(s,{type:"primary",heading:4,children:"Events"}),e(p,{columns:v,data:k,border:!0,size:"small"})]}})]}})]}})),c})(),e(y,{data:P})]}export{G as default};
