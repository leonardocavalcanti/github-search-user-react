(this["webpackJsonpgithub-search-user"]=this["webpackJsonpgithub-search-user"]||[]).push([[0],{18:function(e,t,a){e.exports=a(44)},23:function(e,t,a){},24:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"USERS_SET",(function(){return N})),a.d(n,"USERS_SELECT",(function(){return R})),a.d(n,"set",(function(){return k})),a.d(n,"select",(function(){return _}));var r={};a.r(r),a.d(r,"REPOSITORIES_SET",(function(){return C})),a.d(r,"REPOSITORIES_SELECT",(function(){return I})),a.d(r,"set",(function(){return A})),a.d(r,"select",(function(){return U}));var c=a(0),l=a.n(c),s=a(15),i=a.n(s),o=(a(23),a(24),a(2)),u=Object(c.createContext)(),m=Object(c.createContext)(),d=function(){return Object(c.useContext)(u)},f=function(){return Object(c.useContext)(m)},E=a(16),v=a.n(E).a.create({baseURL:"https://api.github.com"});function p(e){var t=localStorage.getItem("searchHistory"),a=JSON.parse(t||"[]");a.find((function(t){return t.login===e.login}))||v.get(e.avatar_url,{responseType:"arraybuffer"}).then((function(t){var n;e.avatar_url=(n=t.data,"data:image/jpeg;base64,"+btoa([].reduce.call(new Uint8Array(n),(function(e,t){return e+String.fromCharCode(t)}),""))),a.push(e),a.length>3&&a.splice(0,1),localStorage.setItem("searchHistory",JSON.stringify(a))}))}var b=a(3);var h=function(e){var t=e.user,a=f().state,n=d(),r=n.usersActions,s=n.repositoriesActions,i=Object(c.useState)(0),u=Object(o.a)(i,2),m=u[0],E=u[1],h=Object(c.useState)(0),g=Object(o.a)(h,2),y=g[0],O=g[1],S=Object(c.useState)([]),j=Object(o.a)(S,2),w=j[0],N=j[1],R=Object(c.useState)(!1),k=Object(o.a)(R,2),_=k[0],T=k[1];function C(e){var t=0,a=0,n=[];e.forEach((function(e){t+=e.size,a+=e.open_issues_count;var r=e.language||"Outras",c=n.find((function(e){return e.name===r}));c?c.count+=1:n.push({name:r,count:1})})),E(t),O(a),N(n)}return Object(c.useEffect)((function(){var e;t&&(t.isFromHistory?(s.set(t.repositories),C(t.repositories)):(T(!0),(e=t.login,v.get("/users/".concat(e,"/repos"))).then((function(e){s.set(e.data),p(Object(b.a)({},t,{repositories:e.data,isFromHistory:!0})),C(e.data),T(!1)}))))}),[t,r,s]),l.a.createElement("div",{className:"user-detail",key:t.login},l.a.createElement("div",{className:"profile"},l.a.createElement("img",{src:t.avatar_url,alt:t.login}),l.a.createElement("h6",null,t.login),l.a.createElement("div",{className:"summary"},l.a.createElement("div",null,l.a.createElement("small",null,"Nome")," ",l.a.createElement("b",null,t.name)),l.a.createElement("div",null,l.a.createElement("small",null,"Bio")," ",l.a.createElement("b",null,t.bio)),l.a.createElement("div",null,l.a.createElement("small",null,"Localidade")," ",l.a.createElement("b",null,t.location)))),l.a.createElement("div",{className:"user-repositories"},l.a.createElement("i",{className:"fas fa-list"})," Reposit\xf3rios"),_?l.a.createElement("div",{className:"table-loading"},l.a.createElement("i",{className:"fas fa-spinner fa-spin"})):l.a.createElement("div",null,l.a.createElement("div",{className:"summary"},l.a.createElement("h6",null,"Resumo"),l.a.createElement("div",null,l.a.createElement("small",null,"Tamanho Total")," ",l.a.createElement("b",null,m," bytes")),l.a.createElement("div",null,l.a.createElement("small",null,"Linguagens")," ",w.map((function(e,t){return l.a.createElement("b",{key:t},e.name," (",e.count,")"," ")}))),l.a.createElement("div",null,l.a.createElement("small",null,"Issues Abertos")," ",l.a.createElement("b",null,y))),a.repositories.items&&a.repositories.items.map((function(e,t){return l.a.createElement("div",{key:t,className:"repository"},l.a.createElement("div",{className:"title"},e.name),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("small",null,"Tamanho")," ",l.a.createElement("b",null,e.size,"bytes")),l.a.createElement("li",null,l.a.createElement("small",null,"Linguagem")," ",l.a.createElement("b",null,e.language||"Outras")),l.a.createElement("li",null,l.a.createElement("small",null,"Issues abertos")," ",l.a.createElement("b",null,e.open_issues_count))))}))))};var g=function(e){var t=e.selectUser,a=e.item;return l.a.createElement("div",{onClick:function(){return t(a)},className:"repository-item"},l.a.createElement("img",{src:a.avatar_url,alt:a.login}),l.a.createElement("div",{className:"repository-name"},l.a.createElement("span",null,a.login),l.a.createElement("i",{className:"fas fa-arrow-right"})))};var y=function(){var e=Object(c.useRef)(),t=Object(c.useState)(),a=Object(o.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(!1),i=Object(o.a)(s,2),u=i[0],m=i[1],E=d().usersActions,p=f().state,b=function(){var e=localStorage.getItem("searchHistory");if(e)return JSON.parse(e)}();function y(e){var t;e?(t=e.login,v.get("/users/".concat(t))).then((function(e){return E.select(e.data)})):E.select(null)}function O(e){E.select(e)}return Object(c.useEffect)((function(){var e;n&&(m(!0),(e=n,v.get("/search/users?q=".concat(e))).then((function(e){E.set(e.data.items),m(!1)})))}),[n,E]),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"content"},p.users.item?l.a.createElement("div",{className:"back"},l.a.createElement("button",{onClick:function(){return y(null)}},l.a.createElement("i",{className:"fas fa-arrow-left"}),l.a.createElement("span",null,"Voltar")),l.a.createElement("h4",null,"Busca de Usu\xe1rios do GitHub")):l.a.createElement("div",{className:"search-container"},l.a.createElement("h4",null,"Busca de Usu\xe1rios do GitHub"),l.a.createElement("div",{className:"form"},l.a.createElement("input",{type:"text",ref:e}),l.a.createElement("button",{onClick:function(){var t=e.current;r(t.value)}},"Buscar"))),u?l.a.createElement("div",{className:"table-loading"},l.a.createElement("i",{className:"fas fa-spinner fa-spin"})):p.users.item?l.a.createElement(h,{user:p.users.item}):p.users.items&&p.users.items.map((function(e,t){return l.a.createElement(g,{selectUser:y,item:e,key:t})})),!p.users.item&&b&&l.a.createElement("div",{className:"history"},l.a.createElement("h6",null,"Visualizado Recentemente"),b.map((function(e,t){return l.a.createElement(g,{selectUser:O,item:e,key:t})})))))};var O=function(){return l.a.createElement(y,null)},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var w=a(4),N="USERS_SET",R="USERS_SELECT",k=function(e){return{type:N,payload:e}},_=function(e){return{type:R,payload:e}},T={items:[],item:null},C="REPOSITORIES_SET",I="REPOSITORIES_SELECT",A=function(e){return{type:C,payload:e}},U=function(e){return{type:I,payload:e}},L={items:[],item:null},P=Object(w.b)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(b.a)({},e,{},{items:t.payload});case R:return Object(b.a)({},e,{},{item:t.payload});default:return e}},repositories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(b.a)({},e,{},{items:t.payload});case I:return Object(b.a)({},e,{},{item:t.payload});default:return e}}}),W=function(e){return{usersActions:Object(w.a)(n,e),repositoriesActions:Object(w.a)(r,e)}};i.a.render(l.a.createElement((function(e){var t=e.rootReducer(e.initialValue,{type:"__INIT__"}),a=Object(c.useReducer)(e.rootReducer,t),n=Object(o.a)(a,2),r=n[0],s=n[1],i=Object(c.useMemo)((function(){return e.rootActions(s)}),[e]),d={state:r,dispatch:s};return l.a.createElement(m.Provider,{value:d},l.a.createElement(u.Provider,{value:i},e.children))}),{rootReducer:P,rootActions:W},l.a.createElement(O,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/github-search-user-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/github-search-user-react","/service-worker.js");S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(t,e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.c5473a8d.chunk.js.map