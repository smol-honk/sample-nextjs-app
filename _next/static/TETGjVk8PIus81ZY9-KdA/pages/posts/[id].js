(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+iuc":function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),e.exports=n("WEpk").Set},"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"3JuP":function(e,t,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var u=o(n("q1tI"));t.AmpStateContext=u.createContext({})},"4hZ1":function(e,t,n){"use strict";var r=n("/HRN"),o=n("ZDA2"),u=n("/+P4"),i=n("K47E"),a=n("WaGi"),s=n("N9n2"),c=n("TbGu"),l=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});var f=n("q1tI"),d=!1;t.default=function(){var e,t=new l;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){function l(e){var a;return r(this,l),a=o(this,u(l).call(this,e)),d&&(t.add(i(a)),n(i(a))),a}return s(l,c),a(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(f.Component)}},B9jh:function(e,t,n){"use strict";var r=n("Wu5q"),o=n("n3ko");e.exports=n("raTm")("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{add:function(e){return r.def(o(this,"Set"),e=0===e?0:e,e)}},r)},EqzI:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){var e=n("yG97");return{page:e.default||e}}])},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),o=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},PQJW:function(e,t,n){var r=n("d04V"),o=n("yLu3");e.exports=function(e){if(o(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},TbGu:function(e,t,n){var r=n("fGSI"),o=n("PQJW"),u=n("2PDY");e.exports=function(e){return r(e)||o(e)||u()}},"V+O7":function(e,t,n){n("aPfg")("Set")},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),o=n("Y7ZC"),u=n("JB68"),i=n("sNwI"),a=n("NwJ3"),s=n("tEej"),c=n("IP1Z"),l=n("fNZA");o(o.S+o.F*!n("TuGD")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,o,f,d=u(e),p="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,v=void 0!==h,y=0,w=l(d);if(v&&(h=r(h,m>2?arguments[2]:void 0,2)),void 0==w||p==Array&&a(w))for(n=new p(t=s(d.length));t>y;y++)c(n,y,v?h(d[y],y):d[y]);else for(f=w.call(d),n=new p;!(o=f.next()).done;y++)c(n,y,v?i(f,h,[o.value,y],!0):o.value);return n.length=y,n}})},VKFn:function(e,t,n){n("bBy9"),n("FlQf"),e.exports=n("ldVq")},Wziy:function(e,t,n){"use strict";var r=n("hfKm"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var u=o(n("q1tI")),i=n("3JuP");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,u=e.hasQuery;return n||o&&(void 0!==u&&u)}t.isInAmpMode=a,t.useAmp=function(){return a(u.default.useContext(i.AmpStateContext))}},d04V:function(e,t,n){e.exports=n("0tVQ")},dL40:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},fGSI:function(e,t,n){var r=n("p0XB");e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},ldVq:function(e,t,n){var r=n("QMMT"),o=n("UWiX")("iterator"),u=n("SBuE");e.exports=n("WEpk").isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||u.hasOwnProperty(r(t))}},"m/Gl":function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest,u=[],i=[],a={},s=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:s,headers:{keys:function(){return u},entries:function(){return i},get:function(e){return a[e.toLowerCase()]},has:function(e){return e.toLowerCase()in a}}}};for(var c in o.open(t.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){u.push(t=t.toLowerCase()),i.push([t,n]),a[t]=a[t]?a[t]+","+n:n}),n(s())},o.onerror=r,o.withCredentials="include"==t.credentials,t.headers)o.setRequestHeader(c,t.headers[c]);o.send(t.body||null)})}},"m/Pd":function(e,t,n){"use strict";var r=n("ttDY"),o=n("hfKm"),u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};o(t,"__esModule",{value:!0});var i=u(n("q1tI")),a=u(n("4hZ1")),s=n("3JuP"),c=n("IClC"),l=n("Wziy");function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{key:"charSet",charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)},[])):e.concat(t)}t.defaultHead=f;var p=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce(function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new r,t=new r,n=new r,o={};return function(u){if(u.key&&"number"!==typeof u.key&&0===u.key.indexOf(".$"))return!e.has(u.key)&&(e.add(u.key),!0);switch(u.type){case"title":case"base":if(t.has(u.type))return!1;t.add(u.type);break;case"meta":for(var i=0,a=p.length;i<a;i++){var s=p[i];if(u.props.hasOwnProperty(s))if("charSet"===s){if(n.has(s))return!1;n.add(s)}else{var c=u.props[s],l=o[s]||new r;if(l.has(c))return!1;l.add(c),o[s]=l}}}return!0}}()).reverse().map(function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})})}var h=a.default();function v(e){var t=e.children;return i.default.createElement(s.AmpStateContext.Consumer,null,function(e){return i.default.createElement(c.HeadManagerContext.Consumer,null,function(n){return i.default.createElement(h,{reduceComponentsToState:m,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)})})}v.rewind=h.rewind,t.default=v},ttDY:function(e,t,n){e.exports=n("+iuc")},xvv9:function(e,t,n){n("cHUd")("Set")},yG97:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),o=n.n(r),u=n("O40h"),i=n("q1tI"),a=n.n(i),s=n("3Hq7"),c=n("zgjP"),l=n.n(c),f=n("vOnD"),d=a.a.createElement,p=f.b.div.withConfig({displayName:"Comments__AllComments",componentId:"sc-14kbbb9-0"})(["width:80vw;"]),m=f.b.div.withConfig({displayName:"Comments__CommentBox",componentId:"sc-14kbbb9-1"})(["border:1px solid #ddd;margin:20px 0;padding:10px;"]),h=function(e){var t=e.comments;return d(p,null,d("h3",null,"Comments"),t.map(function(e){return d(m,{key:e.id},d("h4",null,e.name),d("h5",null,e.email),d("p",null,e.body))}))},v=n("m/Pd"),y=n.n(v),w=a.a.createElement,x=f.b.div.withConfig({displayName:"id__MainPost",componentId:"sc-1lrwsnk-0"})(["width:80vw;padding:10px;margin:10px 0;"]),b=function(e){var t=e.comments,n=e.post;return w(s.a,null,w(y.a,null,w("title",null,"Sample App - ".concat(n.title))),w(x,null,w("h1",null,n.title),w("p",null,n.body)),w(h,{comments:t}))};b.getInitialProps=function(){var e=Object(u.a)(o.a.mark(function e(t){var n,r,u,i,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query.id,e.next=3,l()("https://jsonplaceholder.typicode.com/posts/".concat(n));case 3:return r=e.sent,e.next=6,r.json();case 6:return u=e.sent,e.next=9,l()("https://jsonplaceholder.typicode.com/comments?postId=".concat(n));case 9:return i=e.sent,e.next=12,i.json();case 12:return a=e.sent,console.log("fetched: ".concat(u.title)),e.abrupt("return",{post:u,comments:a});case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();t.default=b},yLu3:function(e,t,n){e.exports=n("VKFn")},zgjP:function(e,t,n){e.exports=window.fetch||(window.fetch=n("m/Gl").default||n("m/Gl"))}},[["EqzI",1,0]]]);