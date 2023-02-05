/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// Importing dependencies
// import { appcommon } from "tizen-tv-webapis";
// import { application } from "tizen-common-web";

var debugMode = false;
window.onload = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var articles, pagesDiv, textbox;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        // if (!debugMode) {
        // 	document.body.addEventListener("keydown", keydownHandler);
        // }
        articles = [];
        _context.next = 3;
        return fetch("https://nos-app.vercel.app/api/rss").then(function (response) {
          return response.text();
        }).then(function (str) {
          return new window.DOMParser().parseFromString(str, "text/xml");
        }).then(function (doc) {
          var items = doc.querySelectorAll("item");
          items.forEach(function (item) {
            articles.push({
              title: item.querySelector("title").textContent,
              img: item.querySelector("enclosure").getAttribute("url"),
              text: item.querySelector("description").textContent,
              link: item.querySelector("link").textContent // (click to open on phone?)
            });
          });
        });
      case 3:
        pagesDiv = document.getElementById("pages");
        pagesDiv.removeChild(document.getElementById("main"));
        articles.forEach(function (item, idx) {
          page = document.createElement("div");
          page.setAttribute("id", "page" + String(idx + 1));
          page.className = "ui-page";
          content = document.createElement("div");
          content.className = "ui-content ui-content-padding";
          content.innerHTML = item.title;
          page.appendChild(content);
          pagesDiv.appendChild(page);
        });
        document.getElementById("page1").classList.add("ui-page-active");
        console.log(articles);
        textbox = document.querySelector("pages");
        textbox.addEventListener("click", function () {
          textbox.innerHTML = "fakka";
        });
      case 10:
      case "end":
        return _context.stop();
    }
  }, _callee);
}));
var keyName = {
  10009: "return"
};
function keydownHandler(e) {
  console.log(e.keyCode);
  switch (keyName[e.keyCode]) {
    case "return":
      application.getCurrentApplication().exit();
      break;
  }
}
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "index.html");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDcEMsUUFBUSxDQUFDO1FBRWpCcUMsT0FBTyxHQUFHaEIsUUFBUSxDQUFDTixhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzdDc0IsT0FBTyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtVQUM3Q0QsT0FBTyxDQUFDTixTQUFTLEdBQUcsT0FBTztRQUM1QixDQUFDLENBQUM7TUFBQztNQUFBO1FBQUE7SUFBQTtFQUFBO0FBQUEsQ0FDSDtBQUVELElBQU1RLE9BQU8sR0FBRztFQUNmLEtBQUssRUFBRTtBQUNSLENBQUM7QUFFRCxTQUFTQyxjQUFjLENBQUNDLENBQUMsRUFBRTtFQUMxQk4sT0FBTyxDQUFDQyxHQUFHLENBQUNLLENBQUMsQ0FBQ0MsT0FBTyxDQUFDO0VBQ3RCLFFBQVFILE9BQU8sQ0FBQ0UsQ0FBQyxDQUFDQyxPQUFPLENBQUM7SUFDekIsS0FBSyxRQUFRO01BQ1pDLFdBQVcsQ0FBQ0MscUJBQXFCLEVBQUUsQ0FBQ0MsSUFBSSxFQUFFO01BQzFDO0VBQU07QUFFVCxDOzs7Ozs7Ozs7Ozs7O0FDL0RBLGlFQUFlLHFCQUF1QixlQUFlLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3MtdGl6ZW4tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vcy10aXplbi1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25vcy10aXplbi1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ub3MtdGl6ZW4tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbm9zLXRpemVuLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25vcy10aXplbi1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbm9zLXRpemVuLWFwcC8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL25vcy10aXplbi1hcHAvLi9zcmMvaW5kZXguaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBJbXBvcnRpbmcgZGVwZW5kZW5jaWVzXG4vLyBpbXBvcnQgeyBhcHBjb21tb24gfSBmcm9tIFwidGl6ZW4tdHYtd2ViYXBpc1wiO1xuLy8gaW1wb3J0IHsgYXBwbGljYXRpb24gfSBmcm9tIFwidGl6ZW4tY29tbW9uLXdlYlwiO1xuXG5sZXQgZGVidWdNb2RlID0gZmFsc2U7XG5cbndpbmRvdy5vbmxvYWQgPSBhc3luYyAoKSA9PiB7XG5cdC8vIGlmICghZGVidWdNb2RlKSB7XG5cdC8vIFx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlkb3duSGFuZGxlcik7XG5cdC8vIH1cblxuXHRsZXQgYXJ0aWNsZXMgPSBbXTtcblxuXHRhd2FpdCBmZXRjaChgaHR0cHM6Ly9ub3MtYXBwLnZlcmNlbC5hcHAvYXBpL3Jzc2ApXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXG5cdFx0LnRoZW4oKHN0cikgPT4gbmV3IHdpbmRvdy5ET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc3RyLCBcInRleHQveG1sXCIpKVxuXHRcdC50aGVuKChkb2MpID0+IHtcblx0XHRcdGxldCBpdGVtcyA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKFwiaXRlbVwiKTtcblx0XHRcdGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdFx0YXJ0aWNsZXMucHVzaCh7XG5cdFx0XHRcdFx0dGl0bGU6IGl0ZW0ucXVlcnlTZWxlY3RvcihcInRpdGxlXCIpLnRleHRDb250ZW50LFxuXHRcdFx0XHRcdGltZzogaXRlbS5xdWVyeVNlbGVjdG9yKFwiZW5jbG9zdXJlXCIpLmdldEF0dHJpYnV0ZShcInVybFwiKSxcblx0XHRcdFx0XHR0ZXh0OiBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCJkZXNjcmlwdGlvblwiKS50ZXh0Q29udGVudCxcblx0XHRcdFx0XHRsaW5rOiBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCJsaW5rXCIpLnRleHRDb250ZW50LCAvLyAoY2xpY2sgdG8gb3BlbiBvbiBwaG9uZT8pXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0bGV0IHBhZ2VzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlc1wiKTtcblx0cGFnZXNEaXYucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpKTtcblxuXHRhcnRpY2xlcy5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcblx0XHRwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRwYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGFnZVwiICsgU3RyaW5nKGlkeCArIDEpKTtcblx0XHRwYWdlLmNsYXNzTmFtZSA9IFwidWktcGFnZVwiO1xuXHRcdGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGNvbnRlbnQuY2xhc3NOYW1lID0gXCJ1aS1jb250ZW50IHVpLWNvbnRlbnQtcGFkZGluZ1wiO1xuXHRcdGNvbnRlbnQuaW5uZXJIVE1MID0gaXRlbS50aXRsZTtcblx0XHRwYWdlLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXHRcdHBhZ2VzRGl2LmFwcGVuZENoaWxkKHBhZ2UpO1xuXHR9KTtcblxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2UxXCIpLmNsYXNzTGlzdC5hZGQoXCJ1aS1wYWdlLWFjdGl2ZVwiKTtcblxuXHRjb25zb2xlLmxvZyhhcnRpY2xlcyk7XG5cblx0dmFyIHRleHRib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwicGFnZXNcIik7XG5cdHRleHRib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcblx0XHR0ZXh0Ym94LmlubmVySFRNTCA9IFwiZmFra2FcIjtcblx0fSk7XG59O1xuXG5jb25zdCBrZXlOYW1lID0ge1xuXHQxMDAwOTogXCJyZXR1cm5cIixcbn07XG5cbmZ1bmN0aW9uIGtleWRvd25IYW5kbGVyKGUpIHtcblx0Y29uc29sZS5sb2coZS5rZXlDb2RlKTtcblx0c3dpdGNoIChrZXlOYW1lW2Uua2V5Q29kZV0pIHtcblx0XHRjYXNlIFwicmV0dXJuXCI6XG5cdFx0XHRhcHBsaWNhdGlvbi5nZXRDdXJyZW50QXBwbGljYXRpb24oKS5leGl0KCk7XG5cdFx0XHRicmVhaztcblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjsiXSwibmFtZXMiOlsiZGVidWdNb2RlIiwid2luZG93Iiwib25sb2FkIiwiYXJ0aWNsZXMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInRleHQiLCJzdHIiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJkb2MiLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJ0aXRsZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImltZyIsImdldEF0dHJpYnV0ZSIsImxpbmsiLCJwYWdlc0RpdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmVDaGlsZCIsImlkeCIsInBhZ2UiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiU3RyaW5nIiwiY2xhc3NOYW1lIiwiY29udGVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29uc29sZSIsImxvZyIsInRleHRib3giLCJhZGRFdmVudExpc3RlbmVyIiwia2V5TmFtZSIsImtleWRvd25IYW5kbGVyIiwiZSIsImtleUNvZGUiLCJhcHBsaWNhdGlvbiIsImdldEN1cnJlbnRBcHBsaWNhdGlvbiIsImV4aXQiXSwic291cmNlUm9vdCI6IiJ9