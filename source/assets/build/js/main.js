/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-scrollactive/dist/vue-scrollactive.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-scrollactive/dist/vue-scrollactive.min.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=1)}([function(t,e){var n=4,r=.001,o=1e-7,i=10,s=11,l=1/(s-1),a="function"==typeof Float32Array;function c(t,e){return 1-3*e+3*t}function u(t,e){return 3*e-6*t}function f(t){return 3*t}function d(t,e,n){return((c(e,n)*t+u(e,n))*t+f(e))*t}function h(t,e,n){return 3*c(e,n)*t*t+2*u(e,n)*t+f(e)}t.exports=function(t,e,c,u){if(!(0<=t&&t<=1&&0<=c&&c<=1))throw new Error("bezier x values must be in [0, 1] range");var f=a?new Float32Array(s):new Array(s);if(t!==e||c!==u)for(var v=0;v<s;++v)f[v]=d(v*l,t,c);function m(e){for(var a=0,u=1,v=s-1;u!==v&&f[u]<=e;++u)a+=l;var m=a+(e-f[--u])/(f[u+1]-f[u])*l,p=h(m,t,c);return p>=r?function(t,e,r,o){for(var i=0;i<n;++i){var s=h(e,r,o);if(0===s)return e;e-=(d(e,r,o)-t)/s}return e}(e,m,t,c):0===p?m:function(t,e,n,r,s){var l,a,c=0;do{(l=d(a=e+(n-e)/2,r,s)-t)>0?n=a:e=a}while(Math.abs(l)>o&&++c<i);return a}(e,a,a+l,t,c)}return function(n){return t===e&&c===u?n:0===n?0:1===n?1:d(m(n),e,u)}}},function(t,e,n){t.exports=n(2)},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{ref:"scrollactive-nav-wrapper",tag:"component",staticClass:"scrollactive-nav"},[this._t("default")],2)};r._withStripped=!0;var o=n(0),i=n.n(o);function s(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=function(t,e,n,r,o,i,s,l){var a,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=a):o&&(a=l?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(c.functional){c._injectStyles=a;var u=c.render;c.render=function(t,e){return a.call(e),u(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,a):[a]}return{exports:t,options:c}}({props:{activeClass:{type:String,default:"is-active"},offset:{type:Number,default:20},scrollOffset:{type:Number,default:null},scrollContainerSelector:{type:String,default:""},clickToScroll:{type:Boolean,default:!0},duration:{type:Number,default:600},alwaysTrack:{type:Boolean,default:!1},bezierEasingValue:{type:String,default:".5,0,.35,1"},modifyUrl:{type:Boolean,default:!0},exact:{type:Boolean,default:!1},highlightFirstItem:{type:Boolean,default:!1},tag:{type:String,default:"nav"}},data:function(){return{observer:null,items:[],currentItem:null,lastActiveItem:null,scrollAnimationFrame:null,bezierEasing:i.a}},computed:{cubicBezierArray:function(){return this.bezierEasingValue.split(",")},scrollContainer:function(){var t=window;return this.scrollContainerSelector&&(t=document.querySelector(this.scrollContainerSelector)||window),t}},mounted:function(){var t=window.MutationObserver||window.WebKitMutationObserver;this.observer||(this.observer=new t(this.initScrollactiveItems),this.observer.observe(this.$refs["scrollactive-nav-wrapper"],{childList:!0,subtree:!0})),this.initScrollactiveItems(),this.removeActiveClass(),this.currentItem=this.getItemInsideWindow(),this.currentItem&&this.currentItem.classList.add(this.activeClass),this.scrollToHashElement(),this.scrollContainer.addEventListener("scroll",this.onScroll)},updated:function(){this.initScrollactiveItems()},beforeDestroy:function(){this.scrollContainer.removeEventListener("scroll",this.onScroll),window.cancelAnimationFrame(this.scrollAnimationFrame)},methods:{onScroll:function(t){this.currentItem=this.getItemInsideWindow(),this.currentItem!==this.lastActiveItem&&(this.removeActiveClass(),this.$emit("itemchanged",t,this.currentItem,this.lastActiveItem),this.lastActiveItem=this.currentItem),this.currentItem&&this.currentItem.classList.add(this.activeClass)},getItemInsideWindow:function(){var t,e=this;return[].forEach.call(this.items,function(n){var r=n===e.items[0],o=document.getElementById(decodeURI(n.hash.substr(1)));if(o){var i=e.scrollContainer.scrollTop||window.pageYOffset,s=i>=e.getOffsetTop(o)-e.offset,l=i<e.getOffsetTop(o)-e.offset+o.offsetHeight;r&&e.highlightFirstItem&&l&&(t=n),e.exact&&s&&l&&(t=n),!e.exact&&s&&(t=n)}}),t},initScrollactiveItems:function(){var t=this;this.items=this.$el.querySelectorAll(".scrollactive-item"),this.clickToScroll?[].forEach.call(this.items,function(e){e.addEventListener("click",t.handleClick)}):[].forEach.call(this.items,function(e){e.removeEventListener("click",t.handleClick)})},setScrollactiveItems:function(){this.initScrollactiveItems()},handleClick:function(t){var e=this;t.preventDefault();var n=t.currentTarget.hash,r=document.getElementById(decodeURI(n.substr(1)));r?(this.alwaysTrack||(this.scrollContainer.removeEventListener("scroll",this.onScroll),window.cancelAnimationFrame(this.scrollAnimationFrame),this.removeActiveClass(),t.currentTarget.classList.add(this.activeClass)),this.scrollTo(r).then(function(){if(!e.alwaysTrack){e.scrollContainer.addEventListener("scroll",e.onScroll);e.currentItem=[].find.call(e.items,function(t){return decodeURI(t.hash.substr(1))===r.id}),e.currentItem!==e.lastActiveItem&&(e.$emit("itemchanged",null,e.currentItem,e.lastActiveItem),e.lastActiveItem=e.currentItem)}e.modifyUrl&&e.pushHashToUrl(n)})):console.warn("[vue-scrollactive] Element '".concat(n,"' was not found. Make sure it is set in the DOM."))},scrollTo:function(t){var e=this;return new Promise(function(n){var r=e.getOffsetTop(t),o=e.scrollContainer.scrollTop||window.pageYOffset,i=r-o,l=e.bezierEasing.apply(e,s(e.cubicBezierArray)),a=null;window.requestAnimationFrame(function t(r){a||(a=r);var s=r-a,c=s/e.duration;s>=e.duration&&(s=e.duration),c>=1&&(c=1);var u=e.scrollOffset||e.offset,f=o+l(c)*(i-u);e.scrollContainer.scrollTo(0,f),s<e.duration?e.scrollAnimationFrame=window.requestAnimationFrame(t):n()})})},getOffsetTop:function(t){for(var e=0,n=t;n;)e+=n.offsetTop,n=n.offsetParent;return this.scrollContainer.offsetTop&&(e-=this.scrollContainer.offsetTop),e},removeActiveClass:function(){var t=this;[].forEach.call(this.items,function(e){e.classList.remove(t.activeClass)})},scrollToHashElement:function(){var t=this,e=window.location.hash;if(e){var n=document.querySelector(decodeURI(e));n&&(window.location.hash="",setTimeout(function(){var r=n.offsetTop-t.offset;t.scrollContainer.scrollTo(0,r),t.pushHashToUrl(e)},0))}},pushHashToUrl:function(t){window.history.pushState?window.history.pushState(null,null,t):window.location.hash=t}}},r,[],!1,null,null,null);l.options.__file="src/scrollactive.vue";var a=l.exports,c={install:function(t){c.install.installed||t.component("scrollactive",a)}};"undefined"!=typeof window&&window.Vue&&c.install(window.Vue);e.default=c}])});

/***/ }),

/***/ "./source/_assets/js/main.js":
/*!***********************************!*\
  !*** ./source/_assets/js/main.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Scrollactive = __webpack_require__(/*! vue-scrollactive */ "./node_modules/vue-scrollactive/dist/vue-scrollactive.min.js");

Vue.use(Scrollactive);
var app = new Vue({
  el: '#app',
  data: {},
  methods: {} // ...
  // ...

});

/***/ }),

/***/ "./source/_assets/sass/main.scss":
/*!***************************************!*\
  !*** ./source/_assets/sass/main.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************************!*\
  !*** multi ./source/_assets/js/main.js ./source/_assets/sass/main.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/tanner/code/bryantscustommachine/source/_assets/js/main.js */"./source/_assets/js/main.js");
module.exports = __webpack_require__(/*! /Users/tanner/code/bryantscustommachine/source/_assets/sass/main.scss */"./source/_assets/sass/main.scss");


/***/ })

/******/ });