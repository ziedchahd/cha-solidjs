import{c as u,u as m,i as T,a as e,S as a,T as t,I as f,t as v}from"./index-00bf0c33.js";import{D as n,a as s,C as x}from"./code-6666454f.js";import{T as r,C as d}from"./index-345cd19e.js";import{P as i}from"./index-e4583d54.js";import{T as l}from"./index-0092c168.js";import{p as c,e as b}from"./columns-26981c48.js";import{h as w}from"./hljs-74a5c6d1.js";import{R as C}from"./index-cff0105e.js";import"./_commonjsHelpers-725317a4.js";import"./createField-b596c149.js";const S=`<Space dir="v">
    <Paragraph copyable>
        CMUI Web Component library.
    </Paragraph>
    <Paragraph copyable copyText="Custom content">
        Custom copy content.
    </Paragraph>
</Space>`,k=`<Title style={{ margin: '8px 0' }}>h1. Typography Title</Title>
<Title heading={2} style={{ margin: '8px 0' }}>h2. Typography Title</Title>
<Title heading={3} style={{ margin: '8px 0' }}>h3. Typography Title</Title>
<Title heading={4} style={{ margin: '8px 0' }}>h4. Typography Title</Title>
<Title heading={5} style={{ margin: '8px 0' }}>h5. Typography Title</Title>
<Title heading={6} style={{ margin: '8px 0' }}>h6. Typography Title</Title>`,P=`<Space dir="v">
    <Text>Text</Text>
    <Text type='primary'>Primary</Text>
    <Text type='secondary'>Secondary</Text>
    <Text type='warning'>Warning</Text>
    <Text type='error'>Error</Text>
    <Text type='success'>Success</Text>
    <Text type='success' disabled>Disabled</Text>
    <Text mark disabled>Default Mark</Text>
    <Text type='error' mark>Error Mark</Text>
    <Text code>let i = 0;</Text>
    <Text underline>Underline</Text>
    <Text deleted>Deleted</Text>
    <Text strong>Strong</Text>
    <Text link='http://www.baidu.com'>链接</Text>
    <Text icon={<Icon name='link'/>} strong underline link='http://www.baidu.com'>Link</Text>
    <Text size="small">Small</Text>
    <Text>Normal</Text>
    <Text size="large">Large</Text>
</Space>`,_=`<Space dir="v">
    <Title heading={5}>Default spacing</Title>
    <Paragraph>
        Javascript It is a NetScape LiveScript The developed prototype -oriented dynamic type of dynamic types of the client script language of the object -oriented type is mainly to solve the server language, such as Perl, the left -leaving speed problem, and provides customers with smoother browsing effects. At that time, the server needed to verify the data. Because the network speed was quite slow, there were only 28.8kbps, and the verification steps wereted too much time. So NetScape's browser Navigator added JavaScript to provide the basic features of data verification.
    </Paragraph>
    <Title heading={5}>宽松行距</Title>
    <Paragraph spacing='extended'>
         Javascript is a prototype-inherited, object-oriented, dynamically typed, case-sensitive client-side scripting language developed from Netscape's LiveScript. Its main purpose is to solve the speed problems left by server-side languages, such as Perl, and provide customers with Provide smoother browsing effect. At that time, the server needed to verify the data. Since the network speed was very slow, only 28.8kbps, the verification step wasted too much time. So Netscape's browser Navigator added Javascript to provide basic functions of data verification.
    </Paragraph>
</Space>`,D=[{name:"classList",desc:"Custom Class",type:"Object",default:""},{name:"class",desc:"Custom Class",type:"string",default:""},{name:"style",desc:"Custom style",type:"Object",default:""},{name:"type",desc:"Text",type:"default|secondary|warning|error|success|primary",default:"default"},{name:"disabled",desc:"Disable",type:"boolean",default:""},{name:"link",desc:"link address",type:"string",default:""},{name:"icon",desc:"icon",type:"Icon",default:""},{name:"mark",desc:"Tag",type:"boolean",default:""},{name:"code",desc:"Code style",type:"boolean",default:""},{name:"underline",desc:"Underline text",type:"boolean",default:""},{name:"deleted",desc:"Delete style text",type:"boolean",default:""},{name:"strong",desc:"Bold text",type:"boolean",default:""},{name:"size",desc:"Text size",type:"small|default|large",default:"default"}],z=[{name:"classList",desc:"Custom Class",type:"Object",default:""},{name:"class",desc:"Custom Class",type:"string",default:""},{name:"style",desc:"Custom style",type:"Object",default:""},{name:"type",desc:"Text",type:"default|secondary|warning|error|success|primary",default:"default"},{name:"heading",desc:"Title level 1|2|3|4|5|6",type:"number",default:"1"}],L=[{name:"classList",desc:"Custom Class",type:"Object",default:""},{name:"class",desc:"Custom Class",type:"string",default:""},{name:"style",desc:"Custom style",type:"Object",default:""},{name:"size",desc:"Text size",type:"small|default|large",default:"default"},{name:"spacing",desc:"spacing Optional extended",type:"string",default:""},{name:"copyable",desc:"Copy",type:"boolean",default:""},{name:"copyText",desc:"Custom copy content",type:"string",default:""},{name:"onCopy",desc:"Copy callback function",type:"Function",default:""}],N=[{name:"onCopy",desc:"Copy",params:""}],I=[{id:"typography_title",text:"title"},{id:"typography_text",text:"Built -in text"},{id:"typography_copy",text:"Copy"},{id:"typography_spacing",text:"Row distance"},{id:"comp_api",text:"API"},{id:"comp_props",text:"Text attribute"},{id:"title_props",text:"Title attribute"},{id:"paragraph_props",text:"Paragraph attribute"},{id:"paragraph_events",text:"Paragraph"}],o={typography_copy:S,typography_title:k,typography_text:P,typography_spacing:_},j=v('<div class="sys-ctx-main-left">');function $(){const[y,h]=u("");return[(()=>{const p=j();return m(w,p,()=>""),T(p,e(a,{dir:"v",size:32,get children(){return[e(r,{heading:2,children:"Typography"}),e(a,{id:"typography_title",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(r,{style:{margin:"8px 0"},children:"h1. Typography Title"}),e(r,{heading:2,style:{margin:"8px 0"},children:"h2. Typography Title"}),e(r,{heading:3,style:{margin:"8px 0"},children:"h3. Typography Title"}),e(r,{heading:4,style:{margin:"8px 0"},children:"h4. Typography Title"}),e(r,{heading:5,style:{margin:"8px 0"},children:"h5. Typography Title"}),e(r,{heading:6,style:{margin:"8px 0"},children:"h6. Typography Title"}),e(n,{align:"left",get children(){return e(t,{type:"primary",children:"title"})}}),e(i,{type:"secondary",spacing:"extended",children:"Title of each level"}),e(s,{get data(){return o.typography_title}})]}})}}),e(a,{id:"typography_text",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(a,{dir:"v",get children(){return[e(t,{children:"Text"}),e(t,{type:"primary",children:"Primary"}),e(t,{type:"secondary",children:"Secondary"}),e(t,{type:"warning",children:"Warning"}),e(t,{type:"error",children:"Error"}),e(t,{type:"success",children:"Success"}),e(t,{type:"success",disabled:!0,children:"Disabled"}),e(t,{mark:!0,disabled:!0,children:"Default Mark"}),e(t,{type:"error",mark:!0,children:"Error Mark"}),e(t,{code:!0,children:"let i = 0;"}),e(t,{underline:!0,children:"Underline"}),e(t,{deleted:!0,children:"Deleted"}),e(t,{strong:!0,children:"Strong"}),e(t,{link:"http://www.baidu.com",children:"Link"}),e(t,{get icon(){return e(f,{name:"link"})},strong:!0,underline:!0,link:"http://www.baidu.com",children:"Link"}),e(t,{size:"small",children:"Small"}),e(t,{get size(){return y()},children:"Normal"}),e(t,{size:"large",children:"Large"}),e(C,{stick:!0,value:[y,h],data:[{label:"Small",value:"small"},{label:"Default",value:""},{label:"Large",value:"large"}],onChange:g=>{h(g)}})]}}),e(n,{align:"left",get children(){return e(t,{type:"primary",children:"text"})}}),e(i,{type:"secondary",spacing:"extended",children:"Different styles of text and hyperlink text"}),e(s,{get data(){return o.typography_text}})]}})}}),e(a,{id:"typography_copy",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(a,{dir:"v",get children(){return[e(i,{copyable:!0,children:"CMUI Web Component library."}),e(i,{copyable:!0,copyText:"自定义内容",children:"Custom copy content."})]}}),e(n,{align:"left",get children(){return e(t,{type:"primary",children:"Copy"})}}),e(i,{type:"secondary",spacing:"extended",children:"Provide the ability to copy text"}),e(s,{get data(){return o.typography_copy}})]}})}}),e(a,{id:"typography_spacing",dir:"v",get children(){return e(d,{bordered:!0,get children(){return[e(a,{dir:"v",get children(){return[e(r,{heading:5,children:"Default spacing"}),e(i,{children:"Javascript is a prototype-inherited, object-oriented, dynamically typed, case-sensitive client-side scripting language developed from Netscape's LiveScript. Its main purpose is to solve the speed problems left by server-side languages, such as Perl, and provide customers with Provide smoother browsing effect. At that time, the server needed to verify the data. Since the network speed was very slow, only 28.8kbps, the verification step wasted too much time. So Netscape's browser Navigator added Javascript to provide basic functions of data verification."}),e(r,{heading:5,children:"Loose distance"}),e(i,{spacing:"extended",children:"Javascript is a prototype-inherited, object-oriented, dynamically typed, case-sensitive client-side scripting language developed from Netscape's LiveScript. Its main purpose is to solve the speed problems left by server-side languages, such as Perl, and provide customers with Provide smoother browsing effect. At that time, the server needed to verify the data. Since the network speed was very slow, only 28.8kbps, the verification step wasted too much time. So Netscape's browser Navigator added Javascript to provide basic functions of data verification."})]}}),e(n,{align:"left",get children(){return e(t,{type:"primary",children:"Line spacing"})}}),e(i,{type:"secondary",spacing:"extended",get children(){return["Can be set by setting ",e(t,{mark:!0,children:"spacing"})," Set the paragraph line distance, not set to the default line distance extended For a loose distance"]}}),e(s,{get data(){return o.typography_spacing}})]}})}}),e(a,{dir:"v",size:24,id:"comp_api",get children(){return[e(r,{type:"primary",heading:3,children:"API"}),e(a,{id:"comp_props",dir:"v",get children(){return[e(r,{type:"primary",heading:4,children:"Text Props"}),e(l,{columns:c,data:D,border:!0,size:"small"})]}}),e(a,{id:"title_props",dir:"v",get children(){return[e(r,{type:"primary",heading:4,children:"Title Props"}),e(l,{columns:c,data:z,border:!0,size:"small"})]}}),e(a,{id:"paragraph_props",dir:"v",get children(){return[e(r,{type:"primary",heading:4,children:"Paragraph Props"}),e(l,{columns:c,data:L,border:!0,size:"small"})]}}),e(a,{id:"paragraph_events",dir:"v",get children(){return[e(r,{type:"primary",heading:4,children:"Paragraph Events"}),e(l,{columns:b,data:N,border:!0,size:"small"})]}})]}})]}})),p})(),e(x,{data:I})]}export{$ as default};