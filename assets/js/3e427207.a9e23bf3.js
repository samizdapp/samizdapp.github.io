"use strict";(self.webpackChunksamizdapp_herakles=self.webpackChunksamizdapp_herakles||[]).push([[234],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7901:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:2},a="service_upnp",p={unversionedId:"troubleshooting/service-upnp",id:"troubleshooting/service-upnp",title:"service_upnp",description:"AddPortMapping(...) failed with code 402 (Invalid Args)",source:"@site/docs/troubleshooting/service-upnp.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/service-upnp",permalink:"/docs/troubleshooting/service-upnp",draft:!1,editUrl:"https://github.com/samizdapp/samizdapp.github.io/tree/master/docs/troubleshooting/service-upnp.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Entire Stack",permalink:"/docs/troubleshooting/stack"}},l={},s=[{value:"AddPortMapping(...) failed with code 402 (Invalid Args)",id:"addportmapping-failed-with-code-402-invalid-args",level:2},{value:"Symptoms",id:"symptoms",level:3},{value:"Cause",id:"cause",level:3},{value:"Resolution",id:"resolution",level:3},{value:"Additional Info",id:"additional-info",level:3}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"service_upnp"},"service_upnp"),(0,o.kt)("h2",{id:"addportmapping-failed-with-code-402-invalid-args"},"AddPortMapping(...) failed with code 402 (Invalid Args)"),(0,o.kt)("h3",{id:"symptoms"},"Symptoms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There is no response for requests to ",(0,o.kt)("inlineCode",{parentName:"li"},"setup.local"),"."),(0,o.kt)("li",{parentName:"ul"},"daemon_proxy is in a restart loop with the error:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Error: ENOENT: no such file or directory, open './upnp/addresses'\n"))),(0,o.kt)("li",{parentName:"ul"},"service_upnp is in a loop constantly failing to add a UPnP port mapping with\nthe error:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"AddPortMapping(port, 4000, IP) failed with code 402 (Invalid Args)\n")))),(0,o.kt)("h3",{id:"cause"},"Cause"),(0,o.kt)("p",null,"This is generally caused by the UPnP Portmap Table of your router being full (different routers have different limits)."),(0,o.kt)("h3",{id:"resolution"},"Resolution"),(0,o.kt)("p",null,"Some routers' firmware may allow you to clear the table or delete entries. If not, resetting the router by unplugging its power, waiting 10 seconds, and plugging it back in should clear the table."),(0,o.kt)("h3",{id:"additional-info"},"Additional Info"),(0,o.kt)("p",null,"See: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/samizdapp/herakles-upnp/issues/1"},"https://github.com/samizdapp/herakles-upnp/issues/1")))}c.isMDXComponent=!0}}]);