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

/***/ "./components/atoms/TodoItem.jsx":
/*!***************************************!*\
  !*** ./components/atoms/TodoItem.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoItem\": function() { return /* binding */ TodoItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TodoIcon_CompleteIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoIcon/CompleteIcon */ \"./components/atoms/TodoIcon/CompleteIcon.js\");\n/* harmony import */ var _TodoIcon_DeleteIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoIcon/DeleteIcon */ \"./components/atoms/TodoIcon/DeleteIcon.js\");\nvar _this = undefined;\n\n\n\n\nvar TodoItem = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"TodoItemContainer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"todoItem--Check\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TodoIcon_CompleteIcon__WEBPACK_IMPORTED_MODULE_2__.CompleteIcon, {\n                    completed: props.completed,\n                    onComplete: props.onComplete\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GeItDone\\\\components\\\\atoms\\\\TodoItem.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 12\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GeItDone\\\\components\\\\atoms\\\\TodoItem.jsx\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"todoItem--Description\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"TodoItem-p \".concat(props.completed && \"TodoItem-p--complete\"),\n                    children: props.text\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GeItDone\\\\components\\\\atoms\\\\TodoItem.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GeItDone\\\\components\\\\atoms\\\\TodoItem.jsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"todoItem--Delete\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btnX\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TodoIcon_DeleteIcon__WEBPACK_IMPORTED_MODULE_3__.DeleteIcon, {\n                        onDelete: props.onDelete\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GeItDone\\\\components\\\\atoms\\\\TodoItem.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GeItDone\\\\components\\\\atoms\\\\TodoItem.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GeItDone\\\\components\\\\atoms\\\\TodoItem.jsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HITMA\\\\Desktop\\\\WORKZONE\\\\GeItDone\\\\components\\\\atoms\\\\TodoItem.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_c = TodoItem;\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F0b21zL1RvZG9JdGVtLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQzJCO0FBQ0o7QUFFMUMsSUFBTUcsUUFBUSxHQUFHLFNBQUNDLEtBQUssRUFBSztJQUNqQyxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsbUJBQW1COzswQkFDOUIsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxpQkFBaUI7MEJBQzdCLDRFQUFDTCxnRUFBWTtvQkFDUk0sU0FBUyxFQUFFSCxLQUFLLENBQUNHLFNBQVM7b0JBQzFCQyxVQUFVLEVBQUVKLEtBQUssQ0FBQ0ksVUFBVTs7Ozs7eUJBQy9COzs7OztxQkFDQzswQkFDTiw4REFBQ0gsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHVCQUF1QjswQkFDbEMsNEVBQUNHLEdBQUM7b0JBQUNILFNBQVMsRUFBRSxhQUFZLENBQTRDLE9BQTFDRixLQUFLLENBQUNHLFNBQVMsSUFBSSxzQkFBc0IsQ0FBRTs4QkFDbEVILEtBQUssQ0FBQ00sSUFBSTs7Ozs7eUJBQ1g7Ozs7O3FCQUNGOzBCQUNOLDhEQUFDTCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsa0JBQWtCOzBCQUM3Qiw0RUFBQ0ssUUFBTTtvQkFBQ0wsU0FBUyxFQUFDLE1BQU07OEJBQ3BCLDRFQUFDSiw0REFBVTt3QkFDWFUsUUFBUSxFQUFFUixLQUFLLENBQUNRLFFBQVE7Ozs7OzZCQUFHOzs7Ozt5QkFDdEI7Ozs7O3FCQUNQOzs7Ozs7YUFDSixDQUNQO0NBQ0Y7QUF0QllULEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdG9tcy9Ub2RvSXRlbS5qc3g/MWE4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NvbXBsZXRlSWNvbn0gZnJvbSAnLi9Ub2RvSWNvbi9Db21wbGV0ZUljb24nO1xyXG5pbXBvcnQge0RlbGV0ZUljb259IGZyb20gJy4vVG9kb0ljb24vRGVsZXRlSWNvbic7XHJcblxyXG5leHBvcnQgY29uc3QgVG9kb0l0ZW0gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJUb2RvSXRlbUNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kb0l0ZW0tLUNoZWNrXCI+XHJcbiAgICAgICAgICAgPENvbXBsZXRlSWNvblxyXG4gICAgICAgICAgICAgICAgY29tcGxldGVkPXtwcm9wcy5jb21wbGV0ZWR9XHJcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlPXtwcm9wcy5vbkNvbXBsZXRlfVxyXG4gICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvSXRlbS0tRGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgVG9kb0l0ZW0tcCAke3Byb3BzLmNvbXBsZXRlZCAmJiAnVG9kb0l0ZW0tcC0tY29tcGxldGUnfWB9PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnRleHR9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG9JdGVtLS1EZWxldGVcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5YXCI+XHJcbiAgICAgICAgICAgICAgICA8RGVsZXRlSWNvblxyXG4gICAgICAgICAgICAgICAgb25EZWxldGU9e3Byb3BzLm9uRGVsZXRlfS8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBsZXRlSWNvbiIsIkRlbGV0ZUljb24iLCJUb2RvSXRlbSIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29tcGxldGVkIiwib25Db21wbGV0ZSIsInAiLCJ0ZXh0IiwiYnV0dG9uIiwib25EZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/atoms/TodoItem.jsx\n");

/***/ })

});