!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VuePopup",[],t):"object"==typeof exports?exports.VuePopup=t():e.VuePopup=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r={install:function(e){e.component("vue-popup",o.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),t.default=r},function(e,t,n){"use strict";function o(e){n(2)}var r=n(8),i=n(9),s=n(7),u=o,a=s(r.a,i.a,!1,u,null,null);t.a=a.exports},function(e,t,n){var o=n(3);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(5)("c76fe76a",o,!0)},function(e,t,n){t=e.exports=n(4)(void 0),t.push([e.i,".popup-bg{position:fixed;width:100%;height:100%;top:0;left:100%;z-index:1025;background-color:rgba(0,0,0,.4);overflow-x:hidden;overflow-y:auto}.popup-bg .popup-body{margin:auto;margin-top:120px;position:relative;border:1px solid #fff;border-radius:4px;box-shadow:0 0 4px #8b8b8b;background-color:#fff}.popup-bg.popup-show{left:0;animation:showPopup .2s both linear}.popup-bg.popup-hide{animation:hidePopup .2s both linear}@keyframes showPopup{0%{opacity:0}to{opacity:1}}@keyframes hidePopup{0%{left:0;opacity:1}99%{left:0;opacity:0}to{left:-100%;opacity:0}}",""])},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=c[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(i(n.parts[r]));c[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(h)return v;o.parentNode.removeChild(o)}if(g){var i=l++;o=d||(d=r()),t=s.bind(null,o,i,!1),n=s.bind(null,o,i,!0)}else o=r(),t=u.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function s(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function u(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var p=n(6),c={},f=a&&(document.head||document.getElementsByTagName("head")[0]),d=null,l=0,h=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var r=p(e,t);return o(r),function(t){for(var n=[],i=0;i<r.length;i++){var s=r[i],u=c[s.id];u.refs--,n.push(u)}t?(r=p(e,t),o(r)):r=[];for(var i=0;i<n.length;i++){var u=n[i];if(0===u.refs){for(var a=0;a<u.parts.length;a++)u.parts[a]();delete c[u.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=i[0],u=i[1],a=i[2],p=i[3],c={id:e+":"+r,css:u,media:a,sourceMap:p};o[s]?o[s].parts.push(c):n.push(o[s]={id:s,parts:[c]})}return n}},function(e,t){e.exports=function(e,t,n,o,r,i){var s,u=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(s=e,u=e.default);var p="function"==typeof u?u.options:u;t&&(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0),n&&(p.functional=!0),r&&(p._scopeId=r);var c;if(i?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},p._ssrRegister=c):o&&(c=o),c){var f=p.functional,d=f?p.render:p.beforeCreate;f?(p._injectStyles=c,p.render=function(e,t){return c.call(t),d(e,t)}):p.beforeCreate=d?[].concat(d,c):[c]}return{esModule:s,exports:u,options:p}}},function(e,t,n){"use strict";t.a={props:{options:{type:Object,default:function(){return{width:"800",bgClose:!1}}}},data:function(){return{showPopup:""}},methods:{show:function(){this.showPopup="popup-show"},hide:function(){this.showPopup="popup-hide"},clickBg:function(){this.options.bgClose&&this.hide()}}}},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"popup-bg",class:e.showPopup,on:{click:function(t){if(t.target!==t.currentTarget)return null;e.clickBg(t)}}},[n("div",{staticClass:"popup-body",style:{width:e.options.width+"px"}},[e._t("default")],2)])},r=[],i={render:o,staticRenderFns:r};t.a=i}])});
//# sourceMappingURL=index.js.map