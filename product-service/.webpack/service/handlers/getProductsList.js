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

/***/ "./handlers/getProductsList.js":
/*!*************************************!*\
  !*** ./handlers/getProductsList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProductsList\": () => (/* binding */ getProductsList)\n/* harmony export */ });\n/* harmony import */ var _products_mocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products.mocks */ \"./products.mocks.js\");\n\n\n\nasync function getProductsList(event) {\n  let productsArray;\n  try {\n    productsArray = await _products_mocks__WEBPACK_IMPORTED_MODULE_0__.productsList;\n  } catch (error) {\n    return response = {\n      statusCode: 500,\n      body: JSON.stringify({\n        message: `Internal server error: ${error}`\n      })\n    };\n  }\n  return {\n    statusCode: 200,\n    body: JSON.stringify(productsArray)\n  };\n}\n\n//# sourceURL=webpack:///./handlers/getProductsList.js?");

/***/ }),

/***/ "./products.mocks.js":
/*!***************************!*\
  !*** ./products.mocks.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productsList\": () => (/* binding */ productsList)\n/* harmony export */ });\nconst productsList = new Promise(resolve => resolve([{\n  title: 'Triumph Bonneville T120',\n  price: 12000,\n  imgUrl: 'https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/modern-classics/my21/t120/family%20page%20images/t120-family-timeline-slide-engine-1920x780.jpg',\n  id: 1\n}, {\n  title: 'Triumph Thruxton RS',\n  price: 16900,\n  imgUrl: 'https://cdp.azureedge.net/products-private/prod/99fdabe4-cbc0-4cae-9c46-fbe88ecfc4f3/790f309b-4eb8-4866-853f-af1701743e13/00000000-0000-0000-0000-000000000000/2cc45f91-3480-44fc-9c07-ad8101676add/7741bace-03e3-4f9c-b098-af2100fc6ff4/6000000005.jpg',\n  id: 2\n}, {\n  title: 'Triumph Scrambler 1200',\n  price: 14745,\n  imgUrl: 'https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/modern-classics/my21/dr-ds-d74%20-%20scrambler%201200/family%20page%20images/scarmbler-1200-family-hero-1920x1080.jpg',\n  id: 3\n}, {\n  title: 'Triumph Speed Twin 1200',\n  price: 12500,\n  imgUrl: 'https://images.triumphmotorcycles.co.uk/media-library/images/motorcycles/modern-classics/my21/dd4%20speed%20twin/family%20page%20images/speed-twin-family-timeline-handling-1920x780.jpg',\n  id: 4\n}, {\n  title: 'Triumph Bonneville SpeedMaster',\n  price: 13700,\n  imgUrl: 'https://ultimatemotorcycling.com/wp-content/uploads/2021/02/2022-Triumph-Bonneville-Speedmaster-First-Look-cruiser-retro-motorcycle-featured.jpg',\n  id: 5\n}, {\n  title: 'Triumph Bonneville Bobber',\n  price: 13500,\n  imgUrl: 'https://triumph.granmoto.ru/user/pages/02.motorcycles/04.classic/09.Bonneville-bobber/06._key_features/bobber_details_9.jpg',\n  id: 6\n}]));\n\n//# sourceURL=webpack:///./products.mocks.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./handlers/getProductsList.js");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;