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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/index.html":
/*!*************************!*\
  !*** ./dist/index.html ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "index.html");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

// Importing dependencies
// import { appcommon } from "tizen-tv-webapis";
// import { application } from "tizen-common-web";

window.onload = function () {
  // console.log('onload');
  // const version = appcommon.getVersion();
  // console.log('appcommon version : ', version);
  // document.body.addEventListener('keydown', keydownHandler);

  var box = document.querySelector('#textbox');
  box.innerHTML = document.domain;
  fetch("https://nos-app.vercel.app/api/rss").then(function (response) {
    return response.text();
  }).then(function (str) {
    return new window.DOMParser().parseFromString(str, "text/xml");
  }).then(function (doc) {
    var items = doc.querySelectorAll("item");
    var data = [];
    items.forEach(function (item) {
      return data.push({
        title: item.querySelector("title").textContent,
        link: item.querySelector('link').textContent,
        description: item.querySelector('description').textContent,
        enclosure: item.querySelector('enclosure').getAttribute("url")
      });
    });
    return data;
  }).then(console.log);
  var textbox = document.querySelector('.contents');
  textbox.addEventListener("click", function () {
    console.log("fakka");

    // 	var data = await scraper.tweetHandler(tweet);
    // 	for (var i = 0; i < data.length; i++) {
    // 		console.log(i)
    // 	}
  });
};

// const keyName = {
// 	10009: 'return'
// };

// function keydownHandler(e) {
// 	console.log(e.keyCode);
// 	switch (keyName[e.keyCode]) {
// 		case 'return':
// 			application.getCurrentApplication().exit();
// 			break;
// 	}
// }

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/main.js ./dist/index.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\lykru\Documents\Git Repositories\NOSApp\TizenStudioApp\NOS\src\main.js */"./src/main.js");
module.exports = __webpack_require__(/*! C:\Users\lykru\Documents\Git Repositories\NOSApp\TizenStudioApp\NOS\dist\index.html */"./dist/index.html");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9pbmRleC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsImJveCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImRvbWFpbiIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwidGV4dCIsInN0ciIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsImRvYyIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImRhdGEiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJ0aXRsZSIsInRleHRDb250ZW50IiwibGluayIsImRlc2NyaXB0aW9uIiwiZW5jbG9zdXJlIiwiZ2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsInRleHRib3giLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQWUsb0ZBQXVCLGVBQWUsRTs7Ozs7Ozs7Ozs7QUNBckQ7QUFDQTtBQUNBOztBQUdBQSxNQUFNLENBQUNDLE1BQU0sR0FBRyxZQUFNO0VBQ3JCO0VBQ0E7RUFDQTtFQUNBOztFQUVBLElBQUlDLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0VBQzVDRixHQUFHLENBQUNHLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxNQUFNO0VBRS9CQyxLQUFLLHNDQUFzQyxDQUN6Q0MsSUFBSSxDQUFDLFVBQUFDLFFBQVE7SUFBQSxPQUFJQSxRQUFRLENBQUNDLElBQUksRUFBRTtFQUFBLEVBQUMsQ0FDakNGLElBQUksQ0FBQyxVQUFBRyxHQUFHO0lBQUEsT0FBSSxJQUFJWCxNQUFNLENBQUNZLFNBQVMsRUFBRSxDQUFDQyxlQUFlLENBQUNGLEdBQUcsRUFBRSxVQUFVLENBQUM7RUFBQSxFQUFDLENBQ3BFSCxJQUFJLENBQUMsVUFBQU0sR0FBRyxFQUFJO0lBQ1osSUFBSUMsS0FBSyxHQUFHRCxHQUFHLENBQUNFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztJQUN4QyxJQUFJQyxJQUFJLEdBQUcsRUFBRTtJQUNiRixLQUFLLENBQUNHLE9BQU8sQ0FBQyxVQUFBQyxJQUFJO01BQUEsT0FBSUYsSUFBSSxDQUFDRyxJQUFJLENBQUM7UUFBRUMsS0FBSyxFQUFFRixJQUFJLENBQUNmLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQ2tCLFdBQVc7UUFBRUMsSUFBSSxFQUFFSixJQUFJLENBQUNmLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ2tCLFdBQVc7UUFBRUUsV0FBVyxFQUFFTCxJQUFJLENBQUNmLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQ2tCLFdBQVc7UUFBRUcsU0FBUyxFQUFFTixJQUFJLENBQUNmLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQ3NCLFlBQVksQ0FBQyxLQUFLO01BQUUsQ0FBQyxDQUFDO0lBQUEsRUFBQztJQUM5UCxPQUFPVCxJQUFJO0VBQ1osQ0FBQyxDQUFDLENBQ0RULElBQUksQ0FBQ21CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO0VBS25CLElBQUlDLE9BQU8sR0FBRzFCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztFQUNqRHlCLE9BQU8sQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7SUFDN0NILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQzs7SUFFckI7SUFDQTtJQUNBO0lBQ0E7RUFFQSxDQUFDLENBQUM7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjsiLCIvLyBJbXBvcnRpbmcgZGVwZW5kZW5jaWVzXHJcbi8vIGltcG9ydCB7IGFwcGNvbW1vbiB9IGZyb20gXCJ0aXplbi10di13ZWJhcGlzXCI7XHJcbi8vIGltcG9ydCB7IGFwcGxpY2F0aW9uIH0gZnJvbSBcInRpemVuLWNvbW1vbi13ZWJcIjtcclxuXHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG5cdC8vIGNvbnNvbGUubG9nKCdvbmxvYWQnKTtcclxuXHQvLyBjb25zdCB2ZXJzaW9uID0gYXBwY29tbW9uLmdldFZlcnNpb24oKTtcclxuXHQvLyBjb25zb2xlLmxvZygnYXBwY29tbW9uIHZlcnNpb24gOiAnLCB2ZXJzaW9uKTtcclxuXHQvLyBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlkb3duSGFuZGxlcik7XHJcblxyXG5cdHZhciBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dGJveCcpO1xyXG5cdGJveC5pbm5lckhUTUwgPSBkb2N1bWVudC5kb21haW47XHJcblxyXG5cdGZldGNoKGBodHRwczovL25vcy1hcHAudmVyY2VsLmFwcC9hcGkvcnNzYClcclxuXHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcclxuXHRcdC50aGVuKHN0ciA9PiBuZXcgd2luZG93LkRPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzdHIsIFwidGV4dC94bWxcIikpXHJcblx0XHQudGhlbihkb2MgPT4ge1xyXG5cdFx0XHRsZXQgaXRlbXMgPSBkb2MucXVlcnlTZWxlY3RvckFsbChcIml0ZW1cIik7XHJcblx0XHRcdGxldCBkYXRhID0gW107XHJcblx0XHRcdGl0ZW1zLmZvckVhY2goaXRlbSA9PiBkYXRhLnB1c2goeyB0aXRsZTogaXRlbS5xdWVyeVNlbGVjdG9yKFwidGl0bGVcIikudGV4dENvbnRlbnQsIGxpbms6IGl0ZW0ucXVlcnlTZWxlY3RvcignbGluaycpLnRleHRDb250ZW50LCBkZXNjcmlwdGlvbjogaXRlbS5xdWVyeVNlbGVjdG9yKCdkZXNjcmlwdGlvbicpLnRleHRDb250ZW50LCBlbmNsb3N1cmU6IGl0ZW0ucXVlcnlTZWxlY3RvcignZW5jbG9zdXJlJykuZ2V0QXR0cmlidXRlKFwidXJsXCIpIH0pKVxyXG5cdFx0XHRyZXR1cm4gZGF0YVxyXG5cdFx0fSlcclxuXHRcdC50aGVuKGNvbnNvbGUubG9nKVxyXG5cclxuXHJcblxyXG5cclxuXHR2YXIgdGV4dGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50cycpO1xyXG5cdHRleHRib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiZmFra2FcIik7XHJcblxyXG5cdC8vIFx0dmFyIGRhdGEgPSBhd2FpdCBzY3JhcGVyLnR3ZWV0SGFuZGxlcih0d2VldCk7XHJcblx0Ly8gXHRmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2coaSlcclxuXHQvLyBcdH1cclxuXHJcblx0fSk7XHJcbn07XHJcblxyXG4vLyBjb25zdCBrZXlOYW1lID0ge1xyXG4vLyBcdDEwMDA5OiAncmV0dXJuJ1xyXG4vLyB9O1xyXG5cclxuLy8gZnVuY3Rpb24ga2V5ZG93bkhhbmRsZXIoZSkge1xyXG4vLyBcdGNvbnNvbGUubG9nKGUua2V5Q29kZSk7XHJcbi8vIFx0c3dpdGNoIChrZXlOYW1lW2Uua2V5Q29kZV0pIHtcclxuLy8gXHRcdGNhc2UgJ3JldHVybic6XHJcbi8vIFx0XHRcdGFwcGxpY2F0aW9uLmdldEN1cnJlbnRBcHBsaWNhdGlvbigpLmV4aXQoKTtcclxuLy8gXHRcdFx0YnJlYWs7XHJcbi8vIFx0fVxyXG4vLyB9Il0sInNvdXJjZVJvb3QiOiIifQ==