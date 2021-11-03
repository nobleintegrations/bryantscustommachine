/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/_assets/js/main.js":
/*!***********************************!*\
  !*** ./source/_assets/js/main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var Scrollactive = __webpack_require__(/*! vue-scrollactive */ "./node_modules/vue-scrollactive/dist/vue-scrollactive.min.js");

Vue.use(Scrollactive);
var app = new Vue({
  el: '#app',
  data: {},
  methods: {} // ...
  // ...

});

/***/ }),

/***/ "./source/_assets/css/main.css":
/*!*************************************!*\
  !*** ./source/_assets/css/main.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/vue-scrollactive/dist/vue-scrollactive.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-scrollactive/dist/vue-scrollactive.min.js ***!
  \********************************************************************/
/***/ (function(module) {

!(function (t, e) {
   true
    ? (module.exports = e())
    : 0;
})('undefined' != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function r(n) {
      if (e[n]) return e[n].exports;
      var o = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (r.r = function (t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (r.t = function (t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
          2 & e && 'string' != typeof t)
        )
          for (var o in t)
            r.d(
              n,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return n;
      }),
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, 'a', e), e;
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = '/dist/'),
      r((r.s = 1))
    );
  })([
    function (t, e) {
      var r = 'function' == typeof Float32Array;
      function n(t, e) {
        return 1 - 3 * e + 3 * t;
      }
      function o(t, e) {
        return 3 * e - 6 * t;
      }
      function i(t) {
        return 3 * t;
      }
      function s(t, e, r) {
        return ((n(e, r) * t + o(e, r)) * t + i(e)) * t;
      }
      function l(t, e, r) {
        return 3 * n(e, r) * t * t + 2 * o(e, r) * t + i(e);
      }
      function a(t) {
        return t;
      }
      t.exports = function (t, e, n, o) {
        if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
          throw new Error('bezier x values must be in [0, 1] range');
        if (t === e && n === o) return a;
        for (var i = r ? new Float32Array(11) : new Array(11), c = 0; c < 11; ++c)
          i[c] = s(0.1 * c, t, n);
        function u(e) {
          for (var r = 0, o = 1; 10 !== o && i[o] <= e; ++o) r += 0.1;
          --o;
          var a = r + 0.1 * ((e - i[o]) / (i[o + 1] - i[o])),
            c = l(a, t, n);
          return c >= 0.001
            ? (function (t, e, r, n) {
                for (var o = 0; o < 4; ++o) {
                  var i = l(e, r, n);
                  if (0 === i) return e;
                  e -= (s(e, r, n) - t) / i;
                }
                return e;
              })(e, a, t, n)
            : 0 === c
            ? a
            : (function (t, e, r, n, o) {
                var i,
                  l,
                  a = 0;
                do {
                  (i = s((l = e + (r - e) / 2), n, o) - t) > 0 ? (r = l) : (e = l);
                } while (Math.abs(i) > 1e-7 && ++a < 10);
                return l;
              })(e, r, r + 0.1, t, n);
        }
        return function (t) {
          return 0 === t ? 0 : 1 === t ? 1 : s(u(t), e, o);
        };
      };
    },
    function (t, e, r) {
      'use strict';
      r.r(e);
      var n = function () {
        var t = this.$createElement;
        return (this._self._c || t)(
          this.tag,
          { ref: 'scrollactive-nav-wrapper', tag: 'component', staticClass: 'scrollactive-nav' },
          [this._t('default')],
          2
        );
      };
      n._withStripped = !0;
      var o = r(0),
        i = r.n(o);
      function s(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return l(t);
          })(t) ||
          (function (t) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return l(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === r && t.constructor && (r = t.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(t);
            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
              return l(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var a = (function (t, e, r, n, o, i, s, l) {
        var a,
          c = 'function' == typeof t ? t.options : t;
        if (
          (e && ((c.render = e), (c.staticRenderFns = r), (c._compiled = !0)),
          n && (c.functional = !0),
          i && (c._scopeId = 'data-v-' + i),
          s
            ? ((a = function (t) {
                (t =
                  t ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  o && o.call(this, t),
                  t && t._registeredComponents && t._registeredComponents.add(s);
              }),
              (c._ssrRegister = a))
            : o &&
              (a = l
                ? function () {
                    o.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : o),
          a)
        )
          if (c.functional) {
            c._injectStyles = a;
            var u = c.render;
            c.render = function (t, e) {
              return a.call(e), u(t, e);
            };
          } else {
            var f = c.beforeCreate;
            c.beforeCreate = f ? [].concat(f, a) : [a];
          }
        return { exports: t, options: c };
      })(
        {
          props: {
            activeClass: { type: String, default: 'is-active' },
            offset: { type: Number, default: 20 },
            scrollOffset: { type: Number, default: null },
            scrollContainerSelector: { type: String, default: '' },
            clickToScroll: { type: Boolean, default: !0 },
            duration: { type: Number, default: 600 },
            alwaysTrack: { type: Boolean, default: !1 },
            bezierEasingValue: { type: String, default: '.5,0,.35,1' },
            modifyUrl: { type: Boolean, default: !0 },
            exact: { type: Boolean, default: !1 },
            highlightFirstItem: { type: Boolean, default: !1 },
            tag: { type: String, default: 'nav' },
            scrollOnStart: { type: Boolean, default: !0 },
          },
          data: function () {
            return {
              observer: null,
              items: [],
              currentItem: null,
              lastActiveItem: null,
              scrollAnimationFrame: null,
              bezierEasing: i.a,
            };
          },
          computed: {
            cubicBezierArray: function () {
              return this.bezierEasingValue.split(',');
            },
            scrollContainer: function () {
              var t = window;
              return (
                this.scrollContainerSelector &&
                  (t = document.querySelector(this.scrollContainerSelector) || window),
                t
              );
            },
          },
          mounted: function () {
            var t = window.MutationObserver || window.WebKitMutationObserver;
            this.observer ||
              ((this.observer = new t(this.initScrollactiveItems)),
              this.observer.observe(this.$refs['scrollactive-nav-wrapper'], {
                childList: !0,
                subtree: !0,
              })),
              this.initScrollactiveItems(),
              this.removeActiveClass(),
              (this.currentItem = this.getItemInsideWindow()),
              this.currentItem && this.currentItem.classList.add(this.activeClass),
              this.scrollOnStart && this.scrollToHashElement(),
              this.scrollContainer.addEventListener('scroll', this.onScroll);
          },
          updated: function () {
            this.initScrollactiveItems();
          },
          beforeDestroy: function () {
            this.scrollContainer.removeEventListener('scroll', this.onScroll),
              window.cancelAnimationFrame(this.scrollAnimationFrame);
          },
          methods: {
            onScroll: function (t) {
              (this.currentItem = this.getItemInsideWindow()),
                this.currentItem !== this.lastActiveItem &&
                  (this.removeActiveClass(),
                  this.$emit('itemchanged', t, this.currentItem, this.lastActiveItem),
                  (this.lastActiveItem = this.currentItem)),
                this.currentItem && this.currentItem.classList.add(this.activeClass);
            },
            getItemInsideWindow: function () {
              var t,
                e = this;
              return (
                [].forEach.call(this.items, function (r) {
                  var n = r === e.items[0],
                    o = document.getElementById(decodeURI(r.hash.substr(1)));
                  if (o) {
                    var i = e.scrollContainer.scrollTop || window.pageYOffset,
                      s = i >= e.getOffsetTop(o) - e.offset,
                      l = i < e.getOffsetTop(o) - e.offset + o.offsetHeight;
                    n && e.highlightFirstItem && l && (t = r),
                      e.exact && s && l && (t = r),
                      !e.exact && s && (t = r);
                  }
                }),
                t
              );
            },
            initScrollactiveItems: function () {
              var t = this;
              (this.items = this.$el.querySelectorAll('.scrollactive-item')),
                this.clickToScroll
                  ? [].forEach.call(this.items, function (e) {
                      e.addEventListener('click', t.handleClick);
                    })
                  : [].forEach.call(this.items, function (e) {
                      e.removeEventListener('click', t.handleClick);
                    });
            },
            setScrollactiveItems: function () {
              this.initScrollactiveItems();
            },
            handleClick: function (t) {
              var e = this;
              t.preventDefault();
              var r = t.currentTarget.hash,
                n = document.getElementById(decodeURI(r.substr(1)));
              n
                ? (this.alwaysTrack ||
                    (this.scrollContainer.removeEventListener('scroll', this.onScroll),
                    window.cancelAnimationFrame(this.scrollAnimationFrame),
                    this.removeActiveClass(),
                    t.currentTarget.classList.add(this.activeClass)),
                  this.scrollTo(n).then(function () {
                    if (!e.alwaysTrack) {
                      e.scrollContainer.addEventListener('scroll', e.onScroll);
                      (e.currentItem = [].find.call(e.items, function (t) {
                        return decodeURI(t.hash.substr(1)) === n.id;
                      })),
                        e.currentItem !== e.lastActiveItem &&
                          (e.$emit('itemchanged', null, e.currentItem, e.lastActiveItem),
                          (e.lastActiveItem = e.currentItem));
                    }
                    e.modifyUrl && e.pushHashToUrl(r);
                  }))
                : console.warn(
                    "[vue-scrollactive] Element '".concat(
                      r,
                      "' was not found. Make sure it is set in the DOM."
                    )
                  );
            },
            scrollTo: function (t) {
              var e = this;
              return new Promise(function (r) {
                var n = e.getOffsetTop(t),
                  o = e.scrollContainer.scrollTop || window.pageYOffset,
                  i = n - o,
                  l = e.bezierEasing.apply(e, s(e.cubicBezierArray)),
                  a = null;
                window.requestAnimationFrame(function t(n) {
                  a || (a = n);
                  var s = n - a,
                    c = s / e.duration;
                  s >= e.duration && (s = e.duration), c >= 1 && (c = 1);
                  var u = e.scrollOffset || e.offset,
                    f = o + l(c) * (i - u);
                  e.scrollContainer.scrollTo(0, f),
                    s < e.duration
                      ? (e.scrollAnimationFrame = window.requestAnimationFrame(t))
                      : r();
                });
              });
            },
            getOffsetTop: function (t) {
              for (var e = 0, r = t; r; ) (e += r.offsetTop), (r = r.offsetParent);
              return this.scrollContainer.offsetTop && (e -= this.scrollContainer.offsetTop), e;
            },
            removeActiveClass: function () {
              var t = this;
              [].forEach.call(this.items, function (e) {
                e.classList.remove(t.activeClass);
              });
            },
            scrollToHashElement: function () {
              var t = this,
                e = window.location.hash;
              if (e) {
                var r = document.querySelector(decodeURI(e));
                r &&
                  ((window.location.hash = ''),
                  setTimeout(function () {
                    var n = r.offsetTop - t.offset;
                    t.scrollContainer.scrollTo(0, n), t.pushHashToUrl(e);
                  }, 0));
              }
            },
            pushHashToUrl: function (t) {
              window.history.pushState
                ? window.history.pushState(null, null, t)
                : (window.location.hash = t);
            },
          },
        },
        n,
        [],
        !1,
        null,
        null,
        null
      );
      a.options.__file = 'src/scrollactive.vue';
      var c = a.exports,
        u = {
          install: function (t) {
            u.install.installed || t.component('scrollactive', c);
          },
        };
      'undefined' != typeof window && window.Vue && u.install(window.Vue);
      e.default = u;
    },
  ]);
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbryantscustommachine"] = self["webpackChunkbryantscustommachine"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./source/_assets/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./source/_assets/css/main.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;