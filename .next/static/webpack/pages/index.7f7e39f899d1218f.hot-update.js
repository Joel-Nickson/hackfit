"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/About.js":
/*!************************!*\
  !*** ./pages/About.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_typing_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-typing-effect */ \"./node_modules/react-typing-effect/dist/index.js\");\n/* harmony import */ var react_typing_effect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_typing_effect__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_animations_programmer_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/animations/programmer.svg */ \"./assets/animations/programmer.svg\");\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/logo.png */ \"./assets/logo.png\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar About = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        id: \"about\",\n        className: \"flex flex-col h-screen lg:flex-row-reverse items-center justify-around lg:justify-between bg-brochgreen text-gray-100\",\n        __source: {\n            fileName: \"/home/gamefreat/myFiles/projects/hackfit/pages/About.js\",\n            lineNumber: 8,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            id: \"back\",\n            __source: {\n                fileName: \"/home/gamefreat/myFiles/projects/hackfit/pages/About.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"flex justify-center\",\n                __source: {\n                    fileName: \"/home/gamefreat/myFiles/projects/hackfit/pages/About.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                    src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    alt: \"Logo\",\n                    __source: {\n                        fileName: \"/home/gamefreat/myFiles/projects/hackfit/pages/About.js\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    },\n                    __self: _this\n                })\n            })\n        })\n    }));\n};\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9BYm91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QjtBQUNxQjtBQUNTO0FBQ3ZCOztBQUVyQyxHQUFLLENBQUNJLEtBQUssR0FBRyxRQUNkLEdBRG9CLENBQUM7SUFDbkIsTUFBTSxzRUFDSEMsQ0FBRztRQUNGQyxFQUFFLEVBQUMsQ0FBTztRQUNWQyxTQUFTLEVBQUMsQ0FBdUg7Ozs7Ozs7dUZBRWhJRixDQUFHO1lBQUNDLEVBQUUsRUFBQyxDQUFNOzs7Ozs7OzJGQUNYRCxDQUFHO2dCQUFDRSxTQUFTLEVBQUMsQ0FBcUI7Ozs7Ozs7K0ZBQ2pDQyxDQUFHO29CQUFDQyxHQUFHLEVBQUVOLHdEQUFJO29CQUFFTyxHQUFHLEVBQUMsQ0FBTTs7Ozs7Ozs7Ozs7QUFLcEMsQ0FBQztLQWJLTixLQUFLO0FBZVgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9BYm91dC5qcz8zOWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0VHlwaW5nRWZmZWN0IGZyb20gXCJyZWFjdC10eXBpbmctZWZmZWN0XCI7XG5pbXBvcnQgcHJvZ3JhbW1lciBmcm9tIFwiLi4vYXNzZXRzL2FuaW1hdGlvbnMvcHJvZ3JhbW1lci5zdmdcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9hc3NldHMvbG9nby5wbmdcIjtcblxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgaWQ9XCJhYm91dFwiXG4gICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGgtc2NyZWVuIGxnOmZsZXgtcm93LXJldmVyc2UgaXRlbXMtY2VudGVyIGp1c3RpZnktYXJvdW5kIGxnOmp1c3RpZnktYmV0d2VlbiBiZy1icm9jaGdyZWVuIHRleHQtZ3JheS0xMDBcIlxuICAgID5cbiAgICAgIDxkaXYgaWQ9XCJiYWNrXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtMb2dvfSBhbHQ9XCJMb2dvXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3RUeXBpbmdFZmZlY3QiLCJwcm9ncmFtbWVyIiwiTG9nbyIsIkFib3V0IiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/About.js\n");

/***/ })

});