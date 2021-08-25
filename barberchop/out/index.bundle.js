/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./barberchop/src/index.js":
/*!*********************************!*\
  !*** ./barberchop/src/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./barberchop/src/scss/style.scss\");\n/* harmony import */ var _js_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/map.js */ \"./barberchop/src/js/map.js\");\n/* harmony import */ var _js_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_map_js__WEBPACK_IMPORTED_MODULE_1__);\n// const pug = require('pug');\n// const path = require('path');\n//const compiledFunction = pug.compileFile('/pug/index.pug');\n\n // require (\"./js/\", true ,/\\.js$/);\n// require('script!../../vendor/slider/jquery.slider.js');\n// import \"./script.js\";\n// $('body').css({'background-color': 'green'});\n// $('h1#title').text('Hello Webpack');\n// const heading = document.createElement('h1');\n// heading.textContent = 'Как интересно!';\n// добавляем заголовок в DOM\n// const root = document.querySelector('#root');\n// root.append(heading);\n// import \"./index.pug\";\n// pug.render('p Hello world!');\n// console.log(\"hello world!\");\n// import component from \"./component\";\n// document.body.appendChild(component());\n// component();\n\n//# sourceURL=webpack://post/./barberchop/src/index.js?");

/***/ }),

/***/ "./barberchop/src/js/map.js":
/*!**********************************!*\
  !*** ./barberchop/src/js/map.js ***!
  \**********************************/
/***/ (() => {

eval("\n\nvar modalMap = document.querySelector('.modal-map');\nvar closeMap = modalMap.querySelector('.modal-close');\nvar buttonMap = document.querySelector('.btn-open-modal');\nbuttonMap.addEventListener('click', function (e) {\n  e.preventDefault();\n  modalMap.classList.add(\"modal-show\");\n});\ncloseMap.addEventListener('click', function (e) {\n  e.preventDefault();\n  modalMap.classList.remove(\"modal-show\");\n});\n\n//# sourceURL=webpack://post/./barberchop/src/js/map.js?");

/***/ }),

/***/ "./barberchop/src/scss/style.scss":
/*!****************************************!*\
  !*** ./barberchop/src/scss/style.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://post/./barberchop/src/scss/style.scss?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./barberchop/src/index.js");
/******/ 	
/******/ })()
;