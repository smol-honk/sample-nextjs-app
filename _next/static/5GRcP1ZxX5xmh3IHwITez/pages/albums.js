(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{PMsv:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/albums",function(){var e=t("jl0i");return{page:e.default||e}}])},jl0i:function(e,n,t){"use strict";t.r(n);var r=t("ln6h"),s=t.n(r),o=t("O40h"),i=t("q1tI"),a=t.n(i),u=t("3Hq7"),l=t("zgjP"),c=t.n(l),d=t("vOnD"),p=t("YFqc"),m=t.n(p),f=a.a.createElement,b=d.b.div.withConfig({displayName:"albums__AlbumGrid",componentId:"sc-1noinzy-0"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:0.5rem;width:90vw;"]),w=d.b.img.withConfig({displayName:"albums__AlbumImage",componentId:"sc-1noinzy-1"})(["display:flex;align-self:center;"]),h=d.b.div.withConfig({displayName:"albums__AlbumItem",componentId:"sc-1noinzy-2"})(["display:flex;border:1px solid #ddd;padding:10px;text-align:center;justify-content:center;align-items:center;cursor:pointer;"]),g=d.b.a.withConfig({displayName:"albums__AlbumTitle",componentId:"sc-1noinzy-3"})(["display:flex;flex-direction:column;align-self:center;:hover{color:palevioletred;}"]),v=function(e){var n=e.albums;return f(u.a,null,f("h1",null,"Albums"),f(b,null,n.map(function(e){return f(h,{key:e.id},f(m.a,{href:"/albums/[albumID]",as:"albums/".concat(e.id)},f(g,null,f(w,{src:"https://picsum.photos/200?random=".concat(e.id)}),f("h4",null,e.title))))})))};v.getInitialProps=Object(o.a)(s.a.mark(function e(){var n,t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c()("https://jsonplaceholder.typicode.com/albums");case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",{albums:t});case 7:case"end":return e.stop()}},e)})),n.default=v},"m/Gl":function(e,n,t){"use strict";t.r(n),n.default=function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],i=[],a={},u=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:u,headers:{keys:function(){return o},entries:function(){return i},get:function(e){return a[e.toLowerCase()]},has:function(e){return e.toLowerCase()in a}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),i.push([n,t]),a[n]=a[n]?a[n]+","+t:t}),t(u())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})}},zgjP:function(e,n,t){e.exports=window.fetch||(window.fetch=t("m/Gl").default||t("m/Gl"))}},[["PMsv",1,0]]]);