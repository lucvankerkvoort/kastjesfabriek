(this.webpackJsonpkastjesfabriek=this.webpackJsonpkastjesfabriek||[]).push([[0],{18:function(e,t,n){e.exports=n(30)},23:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),c={authed:!0},i=Object(a.createContext)(c).Provider,l=function(e){var t=e.children,n=Object(a.useReducer)((function(e,t){throw t.type,new Error}),c),l=Object(r.a)(n,2),s=l[0],u=l[1];return o.a.createElement(i,{value:{state:s,dispatch:u}},t)},s=n(16),u=n.n(s),m=(n(23),n(6)),h=n(1),d=n(9),p=n.n(d),f=function(){return o.a.createElement("div",{className:"navbar"},o.a.createElement("div",{className:"logo"},o.a.createElement(m.b,{to:"/",style:{textDecoration:"none",color:"black"}},o.a.createElement("img",{src:p.a,alt:"logo",width:"75px",height:"75px"}))),o.a.createElement("div",{className:"navbar-items"},o.a.createElement(m.b,{to:"/",style:{textDecoration:"none",color:"black"}},o.a.createElement("p",null," Home ")),o.a.createElement(m.b,{to:"/shop",style:{textDecoration:"none",color:"black"}},o.a.createElement("p",null," Shop ")),o.a.createElement(m.b,{to:"/about",style:{textDecoration:"none",color:"black"}},o.a.createElement("p",null," About ")),o.a.createElement(m.b,{to:"/help",style:{textDecoration:"none",color:"black"}},o.a.createElement("p",null," Help "))))},v=function(e){var t=e.title;return o.a.createElement("div",{className:"jumbotron"},o.a.createElement("img",{src:p.a,alt:"logo",width:"100px",height:"100px"}),o.a.createElement("h1",null,t))},b=function(){return o.a.createElement("div",{className:"home"},o.a.createElement(v,{title:"Kastjes Fabriek"}))},E=function(){return o.a.createElement("div",{className:"help"})},g=function(){return o.a.createElement("div",{className:"shop"})},w=function(){return o.a.createElement("div",{className:"about"})},k=(n(29),function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2);n[0],n[1],e.handleInfo;return o.a.createElement("div",{className:"App"},o.a.createElement(m.a,{basename:"/"},o.a.createElement(f,null),o.a.createElement(h.a,{exact:!0,path:"/",component:b}),o.a.createElement(h.a,{path:"/help",component:E}),o.a.createElement(h.a,{path:"/about",component:w}),o.a.createElement(h.a,{path:"/shop",component:g})))}),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}u.a.render(o.a.createElement(l,null,o.a.createElement(k,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/kastjesfabriek",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/kastjesfabriek","/service-worker.js");x?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(t,e)}))}}()},9:function(e,t,n){e.exports=n.p+"static/media/Logo.e44725f8.png"}},[[18,1,2]]]);
//# sourceMappingURL=main.14c78623.chunk.js.map