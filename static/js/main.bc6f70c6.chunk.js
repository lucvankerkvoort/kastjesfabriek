(this.webpackJsonpkastjesfabriek=this.webpackJsonpkastjesfabriek||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/IMG-20200720-WA0002.32882860.jpg"},22:function(e,t,a){e.exports=a.p+"static/media/Logo.e44725f8.png"},23:function(e,t,a){e.exports=a.p+"static/media/IMG-20200720-WA0005.140060f6.jpg"},24:function(e,t,a){e.exports=a.p+"static/media/IMG-20200720-WA0006.81bf48ed.jpg"},25:function(e,t,a){e.exports=a.p+"static/media/IMG-20200720-WA0007.51764ab4.jpg"},26:function(e,t,a){e.exports=a.p+"static/media/IMG-20200720-WA0008.af3ce155.jpg"},27:function(e,t,a){e.exports=a.p+"static/media/IMG-20200720-WA0004.3fd46ddc.jpg"},28:function(e,t,a){e.exports=a.p+"static/media/IMG-20200720-WA0009.c09abf50.jpg"},29:function(e,t,a){e.exports=a.p+"static/media/army_green001.3a9f06e6.jpg"},30:function(e,t,a){e.exports=a.p+"static/media/army_green002.539abb68.jpeg"},31:function(e,t,a){e.exports=a.p+"static/media/army_green003.adc58ec2.jpeg"},32:function(e,t,a){e.exports=a.p+"static/media/army_green004.d65b9ec9.jpeg"},39:function(e,t,a){e.exports=a(51)},44:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),i={authed:!0},o=Object(n.createContext)(i),l=o.Provider,s=function(e){var t=e.children,a=Object(n.useReducer)((function(e,t){switch(t.type){case"current":return Object.assign({},e,{current:t.payload});default:throw new Error}}),i),o=Object(c.a)(a,2),s=o[0],u=o[1];return r.a.createElement(l,{value:{state:s,dispatch:u}},t)},u=a(9),m=a.n(u),p=(a(44),a(8)),d=a(3),f=a(21),g=a.n(f),h=a(22),E=a.n(h),v=a(23),b=a.n(v),k=a(24),j=a.n(k),y=a(25),w=a.n(y),x=a(26),G=a.n(x),N=a(27),A=a.n(N),W=a(28),I=a.n(W),O=a(29),M=a.n(O),S=a(30),C=a.n(S),L=a(31),P=a.n(L),R=a(32),K=a.n(R),z={antracietGrijs001:g.a,antracietGrijs002:b.a,Logo:E.a,donkerGroen001:j.a,bruin001:w.a,bruin002:G.a,verfRose001:A.a,verfAquaMarine001:I.a,armyGreen001:M.a,armyGreen002:C.a,armyGreen003:P.a,armyGreen004:K.a},D=function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"logo"},r.a.createElement(p.b,{to:"/",style:{textDecoration:"none",color:"black"}},r.a.createElement("img",{src:z.Logo,alt:"logo",width:"75px",height:"75px"}))),r.a.createElement("div",{className:"navbar-items"},r.a.createElement(p.b,{to:"/",style:{textDecoration:"none",color:"black"}},r.a.createElement("p",null," Home ")),r.a.createElement(p.b,{to:"/shop",style:{textDecoration:"none",color:"black"}},r.a.createElement("p",null," Shop "))))},_=function(e){var t=e.title;return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("img",{src:z.Logo,alt:"logo",width:"100px",height:"100px"}),r.a.createElement("h1",null,t))},B=function(){return r.a.createElement("div",{className:"home"},r.a.createElement(_,{title:"Kastjes Fabriek"}))},J=function(){return r.a.createElement("div",{className:"banner"},r.a.createElement("h2",null,"Verkocht"))},T=function(e){var t=e.title,a=e.price,c=e.pics,i=e.sold,l=Object(n.useContext)(o).dispatch,s={title:t,price:a,pics:c};return r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"picture"},r.a.createElement(p.b,{onClick:function(){return l({type:"current",payload:s})},to:"/spec"},r.a.createElement("div",{style:{background:"url(".concat(c[0],")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}))),r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,t)),i?r.a.createElement(J,null):null,r.a.createElement("div",{className:"price"},r.a.createElement("p",null,"\u20ac",a,",00")))},U=function(){return r.a.createElement("div",{className:"shop"},r.a.createElement(T,{title:"Antraciet Grijze Kast",price:"150",sold:!0,pics:[z.antracietGrijs001,z.antracietGrijs002]}),r.a.createElement(T,{title:"Bruine Kast",price:"150",sold:!0,pics:[z.bruin001,z.bruin002]}),r.a.createElement(T,{title:"Donker Groene Kast",price:"150",sold:!1,pics:[z.donkerGroen001]}),r.a.createElement(T,{title:"Army Green Kast",price:"150",sold:!1,pics:[z.armyGreen001,z.armyGreen002,z.armyGreen003,z.armyGreen004]}))},q=a(54),F=function(e){var t=e.picture;return r.a.createElement("div",{className:"gallery"},r.a.createElement(q.a,null,t.map((function(e){return r.a.createElement(q.a.Item,null,r.a.createElement("div",{className:"picture",style:{background:"url(".concat(e,")"),backgroundSize:"cover",backgroundPosition:"center center"}}))}))))},H=function(){var e=Object(n.useContext)(o).state.current,t=e.pics,a=e.title,c=e.description,i=e.price,l=e.shopify,s=e.marktplaats;return r.a.createElement("div",{className:"specification"},r.a.createElement("div",{className:"title-spec"},r.a.createElement(p.b,{className:"back-to-shopping",to:"/shop"},"Terug"),r.a.createElement("h1",null,a)),r.a.createElement("div",{className:"product-spec"},r.a.createElement(F,{picture:t}),r.a.createElement("div",{className:"detail-spec"},r.a.createElement("p",null,"Omschrijving: ",c),r.a.createElement("p",null,"Prijs: \u20ac",i,",-"),r.a.createElement("p",null,"Je kan deze producten kopen via"),r.a.createElement("a",{href:s},"Marktplaats"),r.a.createElement("a",{href:l},"Shopify"))))},V=(a(50),function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2);a[0],a[1],e.handleInfo;return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{basename:"/"},r.a.createElement(D,null),r.a.createElement(d.a,{exact:!0,path:"/",component:B}),r.a.createElement(d.a,{path:"/shop",component:U}),r.a.createElement(d.a,{path:"/spec",component:H})))}),$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}m.a.render(r.a.createElement(s,null,r.a.createElement(V,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/kastjesfabriek",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/kastjesfabriek","/service-worker.js");$?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Q(t,e)}))}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.bc6f70c6.chunk.js.map