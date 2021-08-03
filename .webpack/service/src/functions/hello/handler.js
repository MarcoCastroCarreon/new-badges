/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/http-status.ts":
/*!***********************************!*\
  !*** ./src/common/http-status.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HttpStatus\": () => (/* binding */ HttpStatus)\n/* harmony export */ });\nvar HttpStatus;\n(function (HttpStatus) {\n    HttpStatus[HttpStatus[\"OK\"] = 200] = \"OK\";\n    HttpStatus[HttpStatus[\"BAD_REQUEST\"] = 400] = \"BAD_REQUEST\";\n    HttpStatus[HttpStatus[\"SERVER_ERROR\"] = 500] = \"SERVER_ERROR\";\n    HttpStatus[HttpStatus[\"CREATED\"] = 201] = \"CREATED\";\n    HttpStatus[HttpStatus[\"NO_CONTENT\"] = 204] = \"NO_CONTENT\";\n})(HttpStatus || (HttpStatus = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2h0dHAtc3RhdHVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3LWJhZGdlcy1hcGkvLi9zcmMvY29tbW9uL2h0dHAtc3RhdHVzLnRzPzRiMDYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZW51bSBIdHRwU3RhdHVzIHN0YXR1cyBmb3IgaHR0cCBtZXRob2RzIGFzIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBlbnVtIEh0dHBTdGF0dXMge1xuICAgIE9LID0gMjAwLFxuICAgIEJBRF9SRVFVRVNUID0gNDAwLFxuICAgIFNFUlZFUl9FUlJPUiA9IDUwMCxcbiAgICBDUkVBVEVEID0gMjAxLFxuICAgIE5PX0NPTlRFTlQgPSAyMDQsXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/common/http-status.ts\n");

/***/ }),

/***/ "./src/functions/hello/handler.ts":
/*!****************************************!*\
  !*** ./src/functions/hello/handler.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _libs_parseEventBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libs/parseEventBody */ \"./src/libs/parseEventBody.ts\");\n/* harmony import */ var _libs_responseApiGateway__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @libs/responseApiGateway */ \"./src/libs/responseApiGateway.ts\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '@common/http-status'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\nconst hello = async (event) => {\n    return new _libs_responseApiGateway__WEBPACK_IMPORTED_MODULE_3__.Response(event.body, Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '@common/http-status'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n};\nconst main = _middy_core__WEBPACK_IMPORTED_MODULE_1___default()(hello).use(_libs_parseEventBody__WEBPACK_IMPORTED_MODULE_2__.default);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2hlbGxvL2hhbmRsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctYmFkZ2VzLWFwaS8uL3NyYy9mdW5jdGlvbnMvaGVsbG8vaGFuZGxlci50cz85MjJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcblxuaW1wb3J0IHR5cGUgeyBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50IH0gZnJvbSAnQGxpYnMvYXBpR2F0ZXdheSc7XG5pbXBvcnQgc2NoZW1hIGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCBtaWRkeSBmcm9tICdAbWlkZHkvY29yZSc7XG5pbXBvcnQgcGFyc2VFdmVudEJvZHkgZnJvbSAnQGxpYnMvcGFyc2VFdmVudEJvZHknO1xuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdAbGlicy9yZXNwb25zZUFwaUdhdGV3YXknO1xuaW1wb3J0IHsgSHR0cFN0YXR1cyB9IGZyb20gJ0Bjb21tb24vaHR0cC1zdGF0dXMnO1xuXG5jb25zdCBoZWxsbzogVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudDx0eXBlb2Ygc2NoZW1hPiA9IGFzeW5jIChldmVudCkgPT4ge1xuICByZXR1cm4gbmV3IFJlc3BvbnNlKGV2ZW50LmJvZHksIEh0dHBTdGF0dXMuT0spO1xufVxuXG5leHBvcnQgY29uc3QgbWFpbiA9IG1pZGR5KGhlbGxvKS51c2UocGFyc2VFdmVudEJvZHkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/hello/handler.ts\n");

/***/ }),

/***/ "./src/libs/parseEventBody.ts":
/*!************************************!*\
  !*** ./src/libs/parseEventBody.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    before: async (handler) => {\n        handler.event.body = JSON.parse(handler.event.body);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9wYXJzZUV2ZW50Qm9keS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25ldy1iYWRnZXMtYXBpLy4vc3JjL2xpYnMvcGFyc2VFdmVudEJvZHkudHM/M2Q4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoe1xuICAgIGJlZm9yZTogYXN5bmMgKGhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlci5ldmVudC5ib2R5ID0gSlNPTi5wYXJzZShoYW5kbGVyLmV2ZW50LmJvZHkpO1xuICAgIH1cbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/parseEventBody.ts\n");

/***/ }),

/***/ "./src/libs/responseApiGateway.ts":
/*!****************************************!*\
  !*** ./src/libs/responseApiGateway.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Response\": () => (/* binding */ Response)\n/* harmony export */ });\n/* harmony import */ var src_common_http_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/common/http-status */ \"./src/common/http-status.ts\");\n\nclass Response {\n    constructor(body, statusCode) {\n        this.body = null;\n        this.statusCode = src_common_http_status__WEBPACK_IMPORTED_MODULE_0__.HttpStatus.OK;\n        this.body = JSON.stringify(body);\n        this.statusCode = statusCode;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9yZXNwb25zZUFwaUdhdGV3YXkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBO0FBS0E7QUFIQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctYmFkZ2VzLWFwaS8uL3NyYy9saWJzL3Jlc3BvbnNlQXBpR2F0ZXdheS50cz85ZDg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBTdGF0dXMgfSBmcm9tIFwic3JjL2NvbW1vbi9odHRwLXN0YXR1c1wiO1xuXG5leHBvcnQgY2xhc3MgUmVzcG9uc2Uge1xuXG4gICAgcHVibGljIGJvZHk6IGFueSA9IG51bGw7XG4gICAgcHVibGljIHN0YXR1c0NvZGU6IEh0dHBTdGF0dXMgPSBIdHRwU3RhdHVzLk9LO1xuXG4gICAgY29uc3RydWN0b3IoYm9keTogYW55LCBzdGF0dXNDb2RlOiBIdHRwU3RhdHVzKSB7XG4gICAgICAgIHRoaXMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuICAgICAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/responseApiGateway.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/hello/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;