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

/***/ "./pages/sidenav.js":
/*!**************************!*\
  !*** ./pages/sidenav.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar navigation = [\n    {\n        name: \"about\",\n        icon: \"😁\"\n    },\n    {\n        name: \"Supported By\",\n        icon: \"😁\"\n    },\n    {\n        name: \"Prizes\",\n        icon: \"😁\"\n    },\n    {\n        name: \"Speakers\",\n        icon: \"😁\"\n    },\n    {\n        name: \"Schedule\",\n        icon: \"😁\"\n    },\n    {\n        name: \"Mentors\",\n        icon: \"😁\"\n    },\n    {\n        name: \"Sponsors\",\n        icon: \"😁\"\n    },\n    {\n        name: \"FAQ\",\n        icon: \"😁\"\n    }, \n];\nfunction sideHeader() {\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"hidden lg:block\",\n        __source: {\n            fileName: \"/home/gamefreat/myFiles/projects/hackfit/pages/sidenav.js\",\n            lineNumber: 13,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"fixed h-4/5 w-20 my-10 mt-24 rounded-2xl ml-2 bg-brochblack text-white px-6 flex flex-col justify-evenly items-center opacity-100\",\n            __source: {\n                fileName: \"/home/gamefreat/myFiles/projects/hackfit/pages/sidenav.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            },\n            __self: this,\n            children: navigation.map(function(item) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"/home/gamefreat/myFiles/projects/hackfit/pages/sidenav.js\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"flex justify-center\",\n                            __source: {\n                                fileName: \"/home/gamefreat/myFiles/projects/hackfit/pages/sidenav.js\",\n                                lineNumber: 17,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: item.icon.toUpperCase()\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"text-xs flex justify-center\",\n                            __source: {\n                                fileName: \"/home/gamefreat/myFiles/projects/hackfit/pages/sidenav.js\",\n                                lineNumber: 18,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                __source: {\n                                    fileName: \"/home/gamefreat/myFiles/projects/hackfit/pages/sidenav.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: item.name.toUpperCase()\n                            })\n                        })\n                    ]\n                });\n            })\n        })\n    }));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (sideHeader);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWRlbmF2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsR0FBSyxDQUFDQSxVQUFVLEdBQUcsQ0FBQztJQUNsQixDQUFDO1FBQUNDLElBQUksRUFBRSxDQUFPO1FBQUVDLElBQUksRUFBRSxDQUFHO0lBQUksQ0FBQztJQUM1QixDQUFGO1FBQUNELElBQUksRUFBRSxDQUFjO1FBQUVDLElBQUksRUFBRSxDQUFHO0lBQUksQ0FBQztJQUNuQyxDQUFGO1FBQUNELElBQUksRUFBRSxDQUFRO1FBQUVDLElBQUksRUFBRSxDQUFHO0lBQUksQ0FBQztJQUM3QixDQUFGO1FBQUNELElBQUksRUFBRSxDQUFVO1FBQUVDLElBQUksRUFBRSxDQUFHO0lBQUksQ0FBQztJQUMvQixDQUFGO1FBQUNELElBQUksRUFBRSxDQUFVO1FBQUVDLElBQUksRUFBRSxDQUFHO0lBQUksQ0FBQztJQUMvQixDQUFGO1FBQUNELElBQUksRUFBRSxDQUFTO1FBQUVDLElBQUksRUFBRSxDQUFHO0lBQUksQ0FBQztJQUM5QixDQUFGO1FBQUNELElBQUksRUFBRSxDQUFVO1FBQUVDLElBQUksRUFBRSxDQUFHO0lBQUksQ0FBQztJQUMvQixDQUFGO1FBQUNELElBQUksRUFBRSxDQUFLO1FBQUVDLElBQUksRUFBRSxDQUFHO0lBQUMsQ0FBQztBQUM1QixDQUFDO1NBQ1FDLFVBQVUsR0FBRyxDQUFDOztJQUNyQixNQUFNLHNFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFpQjs7Ozs7Ozt1RkFDN0JELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQW1JOzs7Ozs7O3NCQUMvSUwsVUFBVSxDQUFDTSxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJOzhCQUNuQixNQUNWLENBQUMsd0RBRFVILENBQUc7Ozs7Ozs7OzZGQUNESSxDQUFDOzRCQUFDSCxTQUFTLEVBQUMsQ0FBcUI7Ozs7Ozs7c0NBQUVFLElBQUksQ0FBQ0wsSUFBSSxDQUFDTyxXQUFXOzs2RkFDeERMLENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUE2Qjs7Ozs7OzsyR0FDekNHLENBQUM7Ozs7Ozs7MENBQUVELElBQUksQ0FBQ04sSUFBSSxDQUFDUSxXQUFXOzs7Ozs7OztBQU92QyxDQUFDO0FBQ0QsK0RBQWVOLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWRlbmF2LmpzP2M2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmF2aWdhdGlvbiA9IFtcbiAgeyBuYW1lOiBcImFib3V0XCIsIGljb246IFwi8J+YgVwiIH0sXG4gIHsgbmFtZTogXCJTdXBwb3J0ZWQgQnlcIiwgaWNvbjogXCLwn5iBXCIgfSxcbiAgeyBuYW1lOiBcIlByaXplc1wiLCBpY29uOiBcIvCfmIFcIiB9LFxuICB7IG5hbWU6IFwiU3BlYWtlcnNcIiwgaWNvbjogXCLwn5iBXCIgfSxcbiAgeyBuYW1lOiBcIlNjaGVkdWxlXCIsIGljb246IFwi8J+YgVwiIH0sXG4gIHsgbmFtZTogXCJNZW50b3JzXCIsIGljb246IFwi8J+YgVwiIH0sXG4gIHsgbmFtZTogXCJTcG9uc29yc1wiLCBpY29uOiBcIvCfmIFcIiB9LFxuICB7IG5hbWU6IFwiRkFRXCIsIGljb246IFwi8J+YgVwiIH0sXG5dO1xuZnVuY3Rpb24gc2lkZUhlYWRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9ja1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBoLTQvNSB3LTIwIG15LTEwIG10LTI0IHJvdW5kZWQtMnhsIG1sLTIgYmctYnJvY2hibGFjayB0ZXh0LXdoaXRlIHB4LTYgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWV2ZW5seSBpdGVtcy1jZW50ZXIgb3BhY2l0eS0xMDBcIj5cbiAgICAgICAge25hdmlnYXRpb24ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj57aXRlbS5pY29uLnRvVXBwZXJDYXNlKCl9PC9hPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGE+e2l0ZW0ubmFtZS50b1VwcGVyQ2FzZSgpfTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgc2lkZUhlYWRlcjtcbiJdLCJuYW1lcyI6WyJuYXZpZ2F0aW9uIiwibmFtZSIsImljb24iLCJzaWRlSGVhZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImEiLCJ0b1VwcGVyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sidenav.js\n");

/***/ })

});