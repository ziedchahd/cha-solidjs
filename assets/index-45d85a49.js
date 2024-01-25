import{c as h,b as x,u as k,i as t,a as e,S as n,I as a,T as r,t as b}from"./index-00bf0c33.js";import{R as z,C as I}from"./index-96ab4b8f.js";import{I as _}from"./index-6735e77f.js";import{D as i,a as c,C}from"./code-6666454f.js";import{T as l,C as s}from"./index-345cd19e.js";import{P as d}from"./index-e4583d54.js";import{T as S}from"./index-0092c168.js";import{p as D}from"./columns-26981c48.js";import{h as q}from"./hljs-74a5c6d1.js";import"./index-39a7fc71.js";import"./createField-b596c149.js";import"./index-cff0105e.js";import"./input-14b161dc.js";import"./index-469010fe.js";import"./index-f515a01c.js";import"./index-26110a98.js";import"./Item-a37b8cba.js";import"./Recommend-04f5af18.js";import"./Value-1107dbb2.js";import"./index-5ebde19f.js";import"./index-83488e34.js";import"./dayjs.min-ea173184.js";import"./_commonjsHelpers-725317a4.js";import"./index-b5d4e03a.js";import"./Collapase-7b5e31c6.js";import"./Option-c7b11dbe.js";import"./index-e167ef83.js";import"./index-73979b49.js";import"./index-112bc2d3.js";import"./index-2c1e88fa.js";import"./index-4642d62a.js";const g=[{name:"box"},{name:"write"},{name:"clock"},{name:"reply"},{name:"reply-all"},{name:"forward"},{name:"flag"},{name:"search"},{name:"trash"},{name:"envelope"},{name:"bubble"},{name:"bubbles"},{name:"user"},{name:"users"},{name:"cloud"},{name:"download"},{name:"upload"},{name:"rain"},{name:"sun"},{name:"moon"},{name:"bell"},{name:"folder"},{name:"pin"},{name:"sound"},{name:"microphone"},{name:"camera"},{name:"image"},{name:"cog"},{name:"calendar"},{name:"book"},{name:"map-marker"},{name:"store"},{name:"support"},{name:"tag"},{name:"heart"},{name:"video-camera"},{name:"trophy"},{name:"cart"},{name:"eye"},{name:"cancel"},{name:"chart"},{name:"target"},{name:"printer"},{name:"location"},{name:"bookmark"},{name:"monitor"},{name:"cross"},{name:"plus"},{name:"left"},{name:"up"},{name:"browser"},{name:"windows"},{name:"switch"},{name:"dashboard"},{name:"play"},{name:"fast-forward"},{name:"next"},{name:"refresh"},{name:"film"},{name:"home"},{name:"activity"},{name:"airplay"},{name:"alert-circle"},{name:"alert-octagon"},{name:"alert-triangle"},{name:"align-center"},{name:"align-justify"},{name:"align-left"},{name:"align-right"},{name:"anchor"},{name:"aperture"},{name:"archive"},{name:"arrow-down"},{name:"arrow-down-circle"},{name:"arrow-down-left"},{name:"arrow-down-right"},{name:"arrow-left"},{name:"arrow-left-circle"},{name:"arrow-right"},{name:"arrow-right-circle"},{name:"arrow-up"},{name:"arrow-up-circle"},{name:"arrow-up-left"},{name:"arrow-up-right"},{name:"at-sign"},{name:"award"},{name:"bar-chart"},{name:"bar-chart-2"},{name:"battery"},{name:"battery-charging"},{name:"bell1"},{name:"bell-off"},{name:"bluetooth"},{name:"bold"},{name:"book1"},{name:"book-open"},{name:"bookmark1"},{name:"box1"},{name:"briefcase"},{name:"calendar1"},{name:"camera1"},{name:"camera-off"},{name:"cast"},{name:"check"},{name:"check-circle"},{name:"check-square"},{name:"chevron-down"},{name:"chevron-left"},{name:"chevron-right"},{name:"chevron-up"},{name:"chevrons-down"},{name:"chevrons-left"},{name:"chevrons-right"},{name:"chevrons-up"},{name:"chrome"},{name:"circle"},{name:"clipboard"},{name:"clock1"},{name:"cloud1"},{name:"cloud-drizzle"},{name:"cloud-lightning"},{name:"cloud-off"},{name:"cloud-rain"},{name:"cloud-snow"},{name:"code"},{name:"codepen"},{name:"codesandbox"},{name:"coffee"},{name:"columns"},{name:"command"},{name:"compass"},{name:"copy"},{name:"corner-down-left"},{name:"corner-down-right"},{name:"corner-left-down"},{name:"corner-left-up"},{name:"corner-right-down"},{name:"corner-right-up"},{name:"corner-up-left"},{name:"corner-up-right"},{name:"cpu"},{name:"credit-card"},{name:"crop"},{name:"crosshair"},{name:"database"},{name:"delete"},{name:"disc"},{name:"dollar-sign"},{name:"download1"},{name:"download-cloud"},{name:"droplet"},{name:"edit"},{name:"edit-2"},{name:"edit-3"},{name:"external-link"},{name:"eye1"},{name:"eye-off"},{name:"facebook"},{name:"fast-forward1"},{name:"feather"},{name:"figma"},{name:"file"},{name:"file-minus"},{name:"file-plus"},{name:"file-text"},{name:"film1"},{name:"filter"},{name:"flag1"},{name:"folder1"},{name:"folder-minus"},{name:"folder-plus"},{name:"framer"},{name:"frown"},{name:"gift"},{name:"git-branch"},{name:"git-commit"},{name:"git-merge"},{name:"git-pull-request"},{name:"github"},{name:"gitlab"},{name:"globe"},{name:"grid"},{name:"hard-drive"},{name:"hash"},{name:"headphones"},{name:"heart1"},{name:"help-circle"},{name:"hexagon"},{name:"home1"},{name:"image1"},{name:"inbox"},{name:"info"},{name:"instagram"},{name:"italic"},{name:"key"},{name:"layers"},{name:"layout"},{name:"life-buoy"},{name:"link"},{name:"link-2"},{name:"linkedin"},{name:"list"},{name:"loader"},{name:"lock"},{name:"log-in"},{name:"log-out"},{name:"mail"},{name:"map"},{name:"map-pin"},{name:"maximize"},{name:"maximize-2"},{name:"meh"},{name:"menu"},{name:"message-circle"},{name:"message-square"},{name:"mic"},{name:"mic-off"},{name:"minimize"},{name:"minimize-2"},{name:"minus"},{name:"minus-circle"},{name:"minus-square"},{name:"monitor1"},{name:"moon1"},{name:"more-horizontal"},{name:"more-vertical"},{name:"mouse-pointer"},{name:"move"},{name:"music"},{name:"navigation"},{name:"navigation-2"},{name:"octagon"},{name:"package"},{name:"paperclip"},{name:"pause"},{name:"pause-circle"},{name:"pen-tool"},{name:"percent"},{name:"phone"},{name:"phone-call"},{name:"phone-forwarded"},{name:"phone-incoming"},{name:"phone-missed"},{name:"phone-off"},{name:"phone-outgoing"},{name:"pie-chart"},{name:"play1"},{name:"play-circle"},{name:"plus1"},{name:"plus-circle"},{name:"plus-square"},{name:"pocket"},{name:"power"},{name:"printer1"},{name:"radio"},{name:"refresh-ccw"},{name:"refresh-cw"},{name:"repeat"},{name:"rewind"},{name:"rotate-ccw"},{name:"rotate-cw"},{name:"rss"},{name:"save"},{name:"scissors"},{name:"search1"},{name:"send"},{name:"server"},{name:"settings"},{name:"share"},{name:"share-2"},{name:"shield"},{name:"shield-off"},{name:"shopping-bag"},{name:"shopping-cart"},{name:"shuffle"},{name:"sidebar"},{name:"skip-back"},{name:"skip-forward"},{name:"slack"},{name:"slash"},{name:"sliders"},{name:"smartphone"},{name:"smile"},{name:"speaker"},{name:"square"},{name:"star"},{name:"stop-circle"},{name:"sun1"},{name:"sunrise"},{name:"sunset"},{name:"tablet"},{name:"tag1"},{name:"target1"},{name:"terminal"},{name:"thermometer"},{name:"thumbs-down"},{name:"thumbs-up"},{name:"toggle-left"},{name:"toggle-right"},{name:"tool"},{name:"trash1"},{name:"trash-2"},{name:"trello"},{name:"trending-down"},{name:"trending-up"},{name:"triangle"},{name:"truck"},{name:"tv"},{name:"twitch"},{name:"twitter"},{name:"type"},{name:"umbrella"},{name:"underline"},{name:"unlock"},{name:"upload1"},{name:"upload-cloud"},{name:"user1"},{name:"user-check"},{name:"user-minus"},{name:"user-plus"},{name:"user-x"},{name:"users1"},{name:"video"},{name:"video-off"},{name:"voicemail"},{name:"volume"},{name:"volume-1"},{name:"volume-2"},{name:"volume-x"},{name:"watch"},{name:"wifi"},{name:"wifi-off"},{name:"wind"},{name:"x"},{name:"x-circle"},{name:"x-octagon"},{name:"x-square"},{name:"youtube"},{name:"zap"},{name:"zap-off"},{name:"zoom-in"},{name:"zoom-out"}],T=`<Space dir="h" align="center">
    <Icon name='box1' />
    <Icon name='loader' size={16}/>
    <Icon name='thumbs-up' size={24}/>
</Space>`,f=`<Space dir="h" align="center">
    <Icon name='box1' color="#52c41a"/>
    <Icon name='loader' color="#ff4d4f"/>
    <Icon name='thumbs-up' color="#1890ff"/>
</Space>`,P=[{name:"classList",desc:"Custom Class",type:"Object",default:""},{name:"class",desc:"Custom Class",type:"string",default:""},{name:"style",desc:"Custom style",type:"Object",default:""},{name:"size",desc:"The icon size is set up font-size",type:"number",default:"14"},{name:"spin",desc:"Whether it is a rotating icon",type:"boolean",default:""},{name:"name",desc:"Icon name",type:"string",default:""}],j=[{id:"icon_size",text:"Icon size"},{id:"icon_color",text:"Icon color"},{id:"icon_spin",text:"Rotating icon"},{id:"icon_search",text:"search Icon"},{id:"comp_api",text:"API"},{id:"comp_props",text:"Icon attribute"}],p={icon_size:T,icon_color:f,icon_spin:f},R=b("<div>"),$=b('<div class="sys-ctx-main-left">');function pe(){const[u,w]=h(""),[y,v]=h(g);return x(()=>{const o=g.filter(m=>m.name.indexOf(u())>-1);v(o)}),[(()=>{const o=$();return k(q,o,()=>""),t(o,e(n,{dir:"v",size:32,get children(){return[e(l,{heading:2,children:"Icon"}),e(n,{id:"icon_size",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(n,{dir:"h",align:"center",get children(){return[e(a,{name:"box1"}),e(a,{name:"loader",size:16}),e(a,{name:"thumbs-up",size:24})]}}),e(i,{align:"left",get children(){return e(r,{type:"primary",children:"Icon size"})}}),e(d,{type:"secondary",spacing:"extended",get children(){return["Set ",e(r,{code:!0,children:"size"})," You can set the icon size,default 14px"]}}),e(c,{get data(){return p.icon_size}})]}})}}),e(n,{id:"icon_color",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(n,{dir:"h",align:"center",get children(){return[e(a,{name:"box1",color:"#52c41a"}),e(a,{name:"loader",color:"#ff4d4f"}),e(a,{name:"thumbs-up",color:"#1890ff"})]}}),e(i,{align:"left",get children(){return e(r,{type:"primary",children:"Icon color"})}}),e(d,{type:"secondary",spacing:"extended",get children(){return["Set ",e(r,{code:!0,children:"color"})," You can set icon color"]}}),e(c,{get data(){return p.icon_color}})]}})}}),e(n,{id:"icon_spin",dir:"v",get children(){return e(s,{bordered:!0,get children(){return[e(n,{dir:"h",get children(){const m=R();return t(m,e(a,{name:"cog",spin:!0}),null),t(m,e(a,{name:"loader",spin:!0}),null),m}}),e(i,{align:"left",get children(){return e(r,{type:"primary",children:"Rotating icon"})}}),e(d,{type:"secondary",spacing:"extended",get children(){return["Set ",e(r,{code:!0,children:"spin"})," You can set the icon to rotate icon"]}}),e(c,{get data(){return p.icon_spin}})]}})}}),e(n,{dir:"v",id:"icon_search",get children(){return[e(_,{value:[u,w],trigger:"input",placeholder:"search Icon"}),e(z,{gutter:20,class:"cm-icons-row",get children(){return y().map(m=>e(I,{grid:.25,get children(){return[e(a,{get name(){return m.name}}),e(r,{get children(){return m.name}})]}}))}})]}}),e(n,{dir:"v",size:24,id:"comp_api",get children(){return[e(l,{type:"primary",heading:3,children:"API"}),e(n,{id:"comp_props",dir:"v",get children(){return[e(l,{type:"primary",heading:4,children:"Icon Props"}),e(S,{columns:D,data:P,border:!0,size:"small"})]}})]}})]}})),o})(),e(C,{data:j})]}export{pe as default};
