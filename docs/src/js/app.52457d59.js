(function(e){function t(t){for(var r,a,c=t[0],u=t[1],l=t[2],p=0,f=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b86":function(e,t,n){"use strict";var r=n("fb6a"),o=n.n(r);o.a},2691:function(e,t,n){"use strict";var r=n("52be"),o=n.n(r);o.a},"52be":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"rebuild",mode:"out-in"}},[n(e.isMobile,{tag:"component"})],1)],1)},i=[],a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"video-wrapper"},[n("video",{staticClass:"video",attrs:{autoplay:""}})])])}],u={name:"mobileApp",data:function(){return{stream:null}},created:function(){var e=this;navigator.mediaDevices.getUserMedia({video:!0}).then((function(t){e.$el.querySelector(".video").srcObject=t,e.stream=t})).catch((function(e){console.error(e)}))}},l=u,s=(n("2691"),n("2877")),p=Object(s["a"])(l,a,c,!1,null,null,null),f=p.exports,d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("p",[e._v(" desktop")])])}],b={name:"desktopApp"},m=b,h=Object(s["a"])(m,d,v,!1,null,null,null),y=h.exports,_={name:"app",components:{mobileApp:f,desktopApp:y},data:function(){return{isMobile:"desktopApp"}},created:function(){var e=this;setInterval((function(){window.matchMedia("(min-width: 768px)").matches?e.isMobile="desktopApp":e.isMobile="mobileApp"}),200)}},g=_,w=(n("0b86"),Object(s["a"])(g,o,i,!1,null,null,null)),O=w.exports;r["a"].config.productionTip=!1,new r["a"]({el:"#app",render:function(e){return e(O)}})},fb6a:function(e,t,n){}});
//# sourceMappingURL=app.52457d59.js.map