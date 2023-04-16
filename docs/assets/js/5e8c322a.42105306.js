"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={id:"index",title:"thinker-ai",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},i=void 0,o={unversionedId:"api/index",id:"api/index",title:"thinker-ai",description:"thinkerAI is a chat AI developed by thinking-grp.",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/thinkerAI/docs/api/",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"thinker-ai",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",next:{title:"Exports",permalink:"/thinkerAI/docs/api/modules"}},p={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Development schedule",id:"development-schedule",level:2},{value:"Compatible models",id:"compatible-models",level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{src:"./assets/logo/logo_and_text.png",width:"500"}),(0,a.kt)("p",null,"thinkerAI is a chat AI developed by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/thinking-grp"},"thinking-grp"),"."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Please use the latest version as much as possible."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows 10 or later"),(0,a.kt)("li",{parentName:"ul"},"Rust"),(0,a.kt)("li",{parentName:"ul"},"Node.js"),(0,a.kt)("li",{parentName:"ul"},"Python ",(0,a.kt)("strong",{parentName:"li"},"(Cannot be used after 3.10)")),(0,a.kt)("li",{parentName:"ul"},"10GB free space")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"How to install it is not yet documented.\n(I plan to create a dedicated installer.)"),(0,a.kt)("h2",{id:"development-schedule"},"Development schedule"),(0,a.kt)("p",null,"We release a development version roughly every week."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Date"),(0,a.kt)("th",{parentName:"tr",align:null},"Contents"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"March 2023"),(0,a.kt)("td",{parentName:"tr",align:null},"Distribution of installers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"July 2023"),(0,a.kt)("td",{parentName:"tr",align:null},"Release v1.0.0 Release Candidate version")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"August 2023"),(0,a.kt)("td",{parentName:"tr",align:null},"Release v1.0.0 stable version")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"December 2023"),(0,a.kt)("td",{parentName:"tr",align:null},"Release development editor")))),(0,a.kt)("h2",{id:"compatible-models"},"Compatible models"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://huggingface.co/rinna/japanese-gpt2-medium"},"rinna/japanese-gpt2-medium"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/license-MIT-blue.svg",alt:"License: MIT"})))}c.isMDXComponent=!0}}]);