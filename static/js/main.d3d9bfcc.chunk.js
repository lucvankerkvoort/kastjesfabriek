(this.webpackJsonpkastjesfabriek=this.webpackJsonpkastjesfabriek||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/IMG-20200720-WA0002.32882860.jpg"},22:function(e,t,a){e.exports=a.p+"static/media/Logo.e44725f8.png"},23:function(e,t,a){e.exports=a.p+"static/media/IMG-20200720-WA0005.140060f6.jpg"},24:function(e,t,a){e.exports=a.p+"static/media/IMG-20200720-WA0006.81bf48ed.jpg"},25:function(e,t,a){e.exports=a.p+"static/media/IMG-20200720-WA0007.51764ab4.jpg"},26:function(e,t,a){e.exports=a.p+"static/media/IMG-20200720-WA0008.af3ce155.jpg"},27:function(e,t,a){e.exports=a.p+"static/media/IMG-20200720-WA0004.3fd46ddc.jpg"},28:function(e,t,a){e.exports=a.p+"static/media/IMG-20200720-WA0009.c09abf50.jpg"},36:function(e,t,a){e.exports=a(48)},41:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o={authed:!0},i=Object(n.createContext)(o),l=i.Provider,s=function(e){var t=e.children,a=Object(n.useReducer)((function(e,t){switch(t.type){case"current":return Object.assign({},e,{current:t.payload});default:throw new Error}}),o),i=Object(c.a)(a,2),s=i[0],u=i[1];return r.a.createElement(l,{value:{state:s,dispatch:u}},t)},u=a(9),p=a.n(u),m=(a(41),a(7)),d=a(3),f=a(21),E=a.n(f),h=a(22),b=a.n(h),v=a(23),g=a.n(v),k=a(24),w=a.n(k),j=a(25),x=a.n(j),y=a(26),N=a.n(y),A=a(27),G=a.n(A),W=a(28),I=a.n(W),O={antracietGrijs001:E.a,antracietGrijs002:g.a,Logo:b.a,donkerGroen001:w.a,bruin001:x.a,bruin002:N.a,verfRose001:G.a,verfAquaMarine001:I.a},M=function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"logo"},r.a.createElement(m.b,{to:"/",style:{textDecoration:"none",color:"black"}},r.a.createElement("img",{src:O.Logo,alt:"logo",width:"75px",height:"75px"}))),r.a.createElement("div",{className:"navbar-items"},r.a.createElement(m.b,{to:"/",style:{textDecoration:"none",color:"black"}},r.a.createElement("p",null," Home ")),r.a.createElement(m.b,{to:"/shop",style:{textDecoration:"none",color:"black"}},r.a.createElement("p",null," Shop ")),r.a.createElement(m.b,{to:"/about",style:{textDecoration:"none",color:"black"}},r.a.createElement("p",null," About ")),r.a.createElement(m.b,{to:"/help",style:{textDecoration:"none",color:"black"}},r.a.createElement("p",null," Help "))))},S=function(e){var t=e.title;return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("img",{src:O.Logo,alt:"logo",width:"100px",height:"100px"}),r.a.createElement("h1",null,t))},C=function(){return r.a.createElement("div",{className:"home"},r.a.createElement(S,{title:"Kastjes Fabriek"}))},D=function(){return r.a.createElement("div",{className:"help"})},L=function(e){var t=e.title,a=e.price,c=e.pics,o=Object(n.useContext)(i).dispatch,l={title:t,price:a,pics:c};return r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"picture"},r.a.createElement(m.b,{onClick:function(){return o({type:"current",payload:l})},to:"/spec"},r.a.createElement("div",{style:{background:"url(".concat(c[0],")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}))),r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,t)),r.a.createElement("div",{className:"price"},r.a.createElement("p",null,"\u20ac",a,",00")))},R=function(){return r.a.createElement("div",{className:"shop"},r.a.createElement(L,{title:"Antraciet Grijze Kast",price:"150",pics:[O.antracietGrijs001,O.antracietGrijs002]}),r.a.createElement(L,{title:"Bruine Kast",price:"150",pics:[O.bruin001,O.bruin002]}),r.a.createElement(L,{title:"Donker Groene Kast",price:"150",pics:[O.donkerGroen001]}))},P=function(){return r.a.createElement("div",{className:"about"})},B=a(50),K=function(e){var t=e.picture;return r.a.createElement("div",{className:"gallery"},r.a.createElement(B.a,null,t.map((function(e){return r.a.createElement(B.a.Item,null,r.a.createElement("div",{className:"picture",style:{background:"url(".concat(e,")"),backgroundSize:"cover",backgroundPosition:"center center"}}))}))))},z=function(){var e=Object(n.useContext)(i).state.current,t=e.pics,a=e.title,c=e.description,o=e.price,l=e.shopify,s=e.marktplaats;return r.a.createElement("div",{className:"specification"},r.a.createElement("div",{className:"title-spec"},r.a.createElement(m.b,{className:"back-to-shop",to:"/shop"},"Back to shopping"),r.a.createElement("h1",null,a)),r.a.createElement("div",null,r.a.createElement(K,{picture:t}),r.a.createElement("div",null,r.a.createElement("p",null,c),r.a.createElement("p",null,"\u20ac",o,",-"),r.a.createElement("link",null,s),r.a.createElement("link",null,l))))},U=(a(47),function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2);a[0],a[1],e.handleInfo;return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{basename:"/"},r.a.createElement(M,null),r.a.createElement(d.a,{exact:!0,path:"/",component:C}),r.a.createElement(d.a,{path:"/help",component:D}),r.a.createElement(d.a,{path:"/about",component:P}),r.a.createElement(d.a,{path:"/shop",component:R}),r.a.createElement(d.a,{path:"/spec",component:z})))}),H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}p.a.render(r.a.createElement(s,null,r.a.createElement(U,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/kastjesfabriek",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/kastjesfabriek","/service-worker.js");H?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):J(t,e)}))}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.d3d9bfcc.chunk.js.map