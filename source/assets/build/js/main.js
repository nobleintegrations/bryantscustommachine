!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=0)}({0:function(t,e,r){r("BSPe"),t.exports=r("olAV")},"4FdG":function(t,e,r){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=1)}([function(t,e){var r=4,n=.001,o=1e-7,i=10,l=11,s=1/(l-1),a="function"==typeof Float32Array;function c(t,e){return 1-3*e+3*t}function u(t,e){return 3*e-6*t}function f(t){return 3*t}function d(t,e,r){return((c(e,r)*t+u(e,r))*t+f(e))*t}function h(t,e,r){return 3*c(e,r)*t*t+2*u(e,r)*t+f(e)}t.exports=function(t,e,c,u){if(!(0<=t&&t<=1&&0<=c&&c<=1))throw new Error("bezier x values must be in [0, 1] range");var f=a?new Float32Array(l):new Array(l);if(t!==e||c!==u)for(var m=0;m<l;++m)f[m]=d(m*s,t,c);function v(e){for(var a=0,u=1,m=l-1;u!==m&&f[u]<=e;++u)a+=s;var v=a+(e-f[--u])/(f[u+1]-f[u])*s,p=h(v,t,c);return p>=n?function(t,e,n,o){for(var i=0;i<r;++i){var l=h(e,n,o);if(0===l)return e;e-=(d(e,n,o)-t)/l}return e}(e,v,t,c):0===p?v:function(t,e,r,n,l){var s,a,c=0;do{(s=d(a=e+(r-e)/2,n,l)-t)>0?r=a:e=a}while(Math.abs(s)>o&&++c<i);return a}(e,a,a+s,t,c)}return function(r){return t===e&&c===u?r:0===r?0:1===r?1:d(v(r),e,u)}}},function(t,e,r){t.exports=r(2)},function(t,e,r){"use strict";r.r(e);var n=function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{ref:"scrollactive-nav-wrapper",tag:"component",staticClass:"scrollactive-nav"},[this._t("default")],2)};n._withStripped=!0;var o=r(0),i=r.n(o),l=function(t,e,r,n,o,i,l,s){var a,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=[],c._compiled=!0),a)if(c.functional){c._injectStyles=a;var u=c.render;c.render=function(t,e){return a.call(e),u(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,a):[a]}return{exports:t,options:c}}({props:{activeClass:{type:String,default:"is-active"},offset:{type:Number,default:20},scrollOffset:{type:Number,default:null},scrollContainerSelector:{type:String,default:""},clickToScroll:{type:Boolean,default:!0},duration:{type:Number,default:600},alwaysTrack:{type:Boolean,default:!1},bezierEasingValue:{type:String,default:".5,0,.35,1"},modifyUrl:{type:Boolean,default:!0},exact:{type:Boolean,default:!1},highlightFirstItem:{type:Boolean,default:!1},tag:{type:String,default:"nav"}},data:function(){return{observer:null,items:[],currentItem:null,lastActiveItem:null,scrollAnimationFrame:null,bezierEasing:i.a}},computed:{cubicBezierArray:function(){return this.bezierEasingValue.split(",")},scrollContainer:function(){var t=window;return this.scrollContainerSelector&&(t=document.querySelector(this.scrollContainerSelector)||window),t}},mounted:function(){var t=window.MutationObserver||window.WebKitMutationObserver;this.observer||(this.observer=new t(this.initScrollactiveItems),this.observer.observe(this.$refs["scrollactive-nav-wrapper"],{childList:!0,subtree:!0})),this.initScrollactiveItems(),this.removeActiveClass(),this.currentItem=this.getItemInsideWindow(),this.currentItem&&this.currentItem.classList.add(this.activeClass),this.scrollToHashElement(),this.scrollContainer.addEventListener("scroll",this.onScroll)},updated:function(){this.initScrollactiveItems()},beforeDestroy:function(){this.scrollContainer.removeEventListener("scroll",this.onScroll),window.cancelAnimationFrame(this.scrollAnimationFrame)},methods:{onScroll:function(t){this.currentItem=this.getItemInsideWindow(),this.currentItem!==this.lastActiveItem&&(this.removeActiveClass(),this.$emit("itemchanged",t,this.currentItem,this.lastActiveItem),this.lastActiveItem=this.currentItem),this.currentItem&&this.currentItem.classList.add(this.activeClass)},getItemInsideWindow:function(){var t,e=this;return[].forEach.call(this.items,(function(r){var n=r===e.items[0],o=document.getElementById(decodeURI(r.hash.substr(1)));if(o){var i=e.scrollContainer.scrollTop||window.pageYOffset,l=i>=e.getOffsetTop(o)-e.offset,s=i<e.getOffsetTop(o)-e.offset+o.offsetHeight;n&&e.highlightFirstItem&&s&&(t=r),e.exact&&l&&s&&(t=r),!e.exact&&l&&(t=r)}})),t},initScrollactiveItems:function(){var t=this;this.items=this.$el.querySelectorAll(".scrollactive-item"),this.clickToScroll?[].forEach.call(this.items,(function(e){e.addEventListener("click",t.handleClick)})):[].forEach.call(this.items,(function(e){e.removeEventListener("click",t.handleClick)}))},setScrollactiveItems:function(){this.initScrollactiveItems()},handleClick:function(t){var e=this;t.preventDefault();var r=t.currentTarget.hash,n=document.getElementById(decodeURI(r.substr(1)));n?(this.alwaysTrack||(this.scrollContainer.removeEventListener("scroll",this.onScroll),window.cancelAnimationFrame(this.scrollAnimationFrame),this.removeActiveClass(),t.currentTarget.classList.add(this.activeClass)),this.scrollTo(n).then((function(){e.alwaysTrack||(e.scrollContainer.addEventListener("scroll",e.onScroll),e.currentItem=[].find.call(e.items,(function(t){return decodeURI(t.hash.substr(1))===n.id})),e.currentItem!==e.lastActiveItem&&(e.$emit("itemchanged",null,e.currentItem,e.lastActiveItem),e.lastActiveItem=e.currentItem)),e.modifyUrl&&e.pushHashToUrl(r)}))):console.warn("[vue-scrollactive] Element '".concat(r,"' was not found. Make sure it is set in the DOM."))},scrollTo:function(t){var e=this;return new Promise((function(r){var n=e.getOffsetTop(t),o=e.scrollContainer.scrollTop||window.pageYOffset,i=n-o,l=e.bezierEasing.apply(e,function(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(e.cubicBezierArray)),s=null;window.requestAnimationFrame((function t(n){s||(s=n);var a=n-s,c=a/e.duration;a>=e.duration&&(a=e.duration),c>=1&&(c=1);var u=e.scrollOffset||e.offset,f=o+l(c)*(i-u);e.scrollContainer.scrollTo(0,f),a<e.duration?e.scrollAnimationFrame=window.requestAnimationFrame(t):r()}))}))},getOffsetTop:function(t){for(var e=0,r=t;r;)e+=r.offsetTop,r=r.offsetParent;return this.scrollContainer.offsetTop&&(e-=this.scrollContainer.offsetTop),e},removeActiveClass:function(){var t=this;[].forEach.call(this.items,(function(e){e.classList.remove(t.activeClass)}))},scrollToHashElement:function(){var t=this,e=window.location.hash;if(e){var r=document.querySelector(decodeURI(e));r&&(window.location.hash="",setTimeout((function(){var n=r.offsetTop-t.offset;t.scrollContainer.scrollTo(0,n),t.pushHashToUrl(e)}),0))}},pushHashToUrl:function(t){window.history.pushState?window.history.pushState(null,null,t):window.location.hash=t}}},n);l.options.__file="src/scrollactive.vue";var s=l.exports,a={install:function(t){a.install.installed||t.component("scrollactive",s)}};"undefined"!=typeof window&&window.Vue&&a.install(window.Vue),e.default=a}])},BSPe:function(t,e,r){var n=r("4FdG");Vue.use(n);new Vue({el:"#app",data:{},methods:{}})},olAV:function(t,e){}});