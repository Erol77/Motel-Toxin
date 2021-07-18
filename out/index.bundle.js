/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/uiKit/index.js":
/*!****************************!*\
  !*** ./src/uiKit/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/uiKit/scss/style.scss\");\n/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.pug */ \"./src/uiKit/index.pug\");\n/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_pug__WEBPACK_IMPORTED_MODULE_1__);\n// const pug = require('pug');\n// const path = require('path');\n//const compiledFunction = pug.compileFile('/pug/index.pug');\n // import \"./script.js\";\n// $('body').css({'background-color': 'green'});\n// $('h1#title').text('Hello Webpack');\n\nvar heading = document.createElement('h1');\nheading.textContent = 'Как интересно!'; // добавляем заголовок в DOM\n\nvar root = document.querySelector('#root');\nroot.append(heading);\n // pug.render('p Hello world!');\n// console.log(\"hello world!\");\n// import component from \"./component\";\n// document.body.appendChild(component());\n// component();\n\n//# sourceURL=webpack://post/./src/uiKit/index.js?");

/***/ }),

/***/ "./src/uiKit/scss/style.scss":
/*!***********************************!*\
  !*** ./src/uiKit/scss/style.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://post/./src/uiKit/scss/style.scss?");

/***/ }),

/***/ "./src/uiKit/component/footer.pug":
/*!****************************************!*\
  !*** ./src/uiKit/component/footer.pug ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;var pug_indent = [];\npug_html = pug_html + \"\\n\\u003Cfooter class=\\\"footer\\\"\\u003E\\n  \\u003Cp\\u003ECopyright текст 2021\\u003C\\u002Fp\\u003E\\n\\u003C\\u002Ffooter\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack://post/./src/uiKit/component/footer.pug?");

/***/ }),

/***/ "./src/uiKit/component/head.pug":
/*!**************************************!*\
  !*** ./src/uiKit/component/head.pug ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;var pug_indent = [];\npug_html = pug_html + \"\\n\\u003Chead\\u003E\\n  \\u003Cmeta charset=\\\"UTF-8\\\"\\u003E\\n  \\u003Ctitle\\u003EЗаголовок страницы\\u003C\\u002Ftitle\\u003E\\n  \\u003C!--script(src=\\\"\\u002Fjs\\u002Fjquery.js\\\")--\\u003E\\n  \\u003Cscript src=\\\"\\u002Fjs\\u002Fscripts.js\\\"\\u003E\\u003C\\u002Fscript\\u003E\\n\\u003C\\u002Fhead\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack://post/./src/uiKit/component/head.pug?");

/***/ }),

/***/ "./src/uiKit/index.pug":
/*!*****************************!*\
  !*** ./src/uiKit/index.pug ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;\n    var locals_for_with = (locals || {});\n    \n    (function (pug_indent) {\n      var pug_indent = [];\npug_html = pug_html + \"\\u003C!DOCTYPE html\\u003E\\n\\u003Chtml lang=\\\"ru\\\"\\u003E\" + (null == (pug_interp = __webpack_require__(/*! ./component/head.pug */ \"./src/uiKit/component/head.pug\").call(this, locals)) ? \"\" : pug_interp) + \"\\n  \\u003Cbody\\u003E\";\npug_mixins[\"divMenu\"] = pug_interp = function(name1,name2){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\n    \";\npug_html = pug_html + pug_indent.join(\"\");\npug_html = pug_html + \"\\u003Cdiv class=\\\"menu-item\\\"\\u003E\" + (pug.escape(null == (pug_interp = name1) ? \"\" : pug_interp)) + \"\\n      \";\npug_html = pug_html + pug_indent.join(\"\");\npug_html = pug_html + \"\\u003Cdiv class=\\\"submenu\\\"\\u003E\" + (pug.escape(null == (pug_interp = name2) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\n    \";\npug_html = pug_html + pug_indent.join(\"\");\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n};\npug_html = pug_html + \"\\n    \\u003Cheader class=\\\"header1\\\"\\u003E\\n      \\u003Cdiv\\u003E\\n        \\u003Cdiv\\u003E\\u003Cimg class=\\\"logo\\\" src=\\\"\\u002Fsrc\\u002FuiKit\\u002Fimg\\u002Flogo.svg\\\" alt=\\\"Logotip company\\\"\\u003E\\u003Cimg class=\\\"logo1\\\" src=\\\"\\u002Fsrc\\u002FuiKit\\u002Fimg\\u002FTOXIN.svg\\\" alt=\\\"TOXIN\\\"\\u003E\\n          \\u003Cp\\u003EЛоготип сайта\\u003C\\u002Fp\\u003E\\n        \\u003C\\u002Fdiv\\u003E\\n        \\u003Cdiv id=\\\"nav\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\n        \\u003Cdiv class=\\\"menu-item\\\"\\u003EMenu 1\\n          \\u003Cdiv class=\\\"submenu\\\"\\u003EPodmenu\\u003C\\u002Fdiv\\u003E\";\npug_indent.push(\"          \");\npug_mixins[\"divMenu\"]('О нас');\npug_indent.pop();\npug_indent.push(\"          \");\npug_mixins[\"divMenu\"]('Услуги', 'V');\npug_indent.pop();\npug_indent.push(\"          \");\npug_mixins[\"divMenu\"]('Вакансии');\npug_indent.pop();\npug_indent.push(\"          \");\npug_mixins[\"divMenu\"]('Новости');\npug_indent.pop();\npug_indent.push(\"          \");\npug_mixins[\"divMenu\"]('Соглашения', 'V');\npug_indent.pop();\npug_html = pug_html + \"\\n        \\u003C\\u002Fdiv\\u003E\\n      \\u003C\\u002Fdiv\\u003E\\n    \\u003C\\u002Fheader\\u003E\\n    \\u003Ch1\\u003EЗаголовок страницы\\u003C\\u002Fh1\\u003E\\n    \\u003Cp\\u003EАбзац, небольшое описание\\u003C\\u002Fp\\u003E\\n    \\u003Cp\\u003E\\n      style\\n          include .\\u002Fcss\\u002Fcustom-style.css\\n      \\n    \\u003C\\u002Fp\\u003E\\n    \\u003C!-- Include custom scripts\\n    script\\n        include .\\u002Fjs\\u002Fcustom-script.js\\n    --\\u003E\\n    \\u003Cp\\u003E\\n      Циклы\\n      Циклы или итерации в Pug позволяют выполнять какие-то множественные операции, написав всего лишь несколько строк кода. Например, можно вывести список пунктов меню, написав код итерации следующим образом:\\n    \\u003C\\u002Fp\\u003E\" + (null == (pug_interp = __webpack_require__(/*! ./component/footer.pug */ \"./src/uiKit/component/footer.pug\").call(this, locals)) ? \"\" : pug_interp) + \"\\n  \\u003C\\u002Fbody\\u003E\\n\\u003C\\u002Fhtml\\u003E\";\n    }.call(this, \"pug_indent\" in locals_for_with ?\n        locals_for_with.pug_indent :\n        typeof pug_indent !== 'undefined' ? pug_indent : undefined));\n    ;;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack://post/./src/uiKit/index.pug?");

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;\n      var valB = pug_style(b[key]);\n      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n}\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '',\n    className,\n    padding = '',\n    escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '',\n    padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    return val + '';\n  }\n}\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (\n    val === false ||\n    val == null ||\n    (!val && (key === 'class' || key === 'style'))\n  ) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  var type = typeof val;\n  if (\n    (type === 'object' || type === 'function') &&\n    typeof val.toJSON === 'function'\n  ) {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + \"='\" + val.replace(/'/g, '&#39;') + \"'\";\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n}\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse) {\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n}\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html) {\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34:\n        escape = '&quot;';\n        break;\n      case 38:\n        escape = '&amp;';\n        break;\n      case 60:\n        escape = '&lt;';\n        break;\n      case 62:\n        escape = '&gt;';\n        break;\n      default:\n        continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n}\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str) {\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  var context, lines, start, end;\n  try {\n    str = str || __webpack_require__(/*! fs */ \"?8f63\").readFileSync(filename, {encoding: 'utf8'});\n    context = 3;\n    lines = str.split('\\n');\n    start = Math.max(lineno - context, 0);\n    end = Math.min(lines.length, lineno + context);\n  } catch (ex) {\n    err.message +=\n      ' - could not read from ' + filename + ' (' + ex.message + ')';\n    pug_rethrow(err, null, lineno);\n    return;\n  }\n\n  // Error context\n  context = lines\n    .slice(start, end)\n    .map(function(line, i) {\n      var curr = i + start + 1;\n      return (curr == lineno ? '  > ' : '    ') + curr + '| ' + line;\n    })\n    .join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  try {\n    err.message =\n      (filename || 'Pug') +\n      ':' +\n      lineno +\n      '\\n' +\n      context +\n      '\\n\\n' +\n      err.message;\n  } catch (e) {}\n  throw err;\n}\n\n\n//# sourceURL=webpack://post/./node_modules/pug-runtime/index.js?");

/***/ }),

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://post/fs_(ignored)?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/uiKit/index.js");
/******/ 	
/******/ })()
;