"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst index = ()=>{\n    const [Number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2);\n    const [Result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const path = \"http://localhost:8000\";\n    const nextfibo = async ()=>{\n        console.log(Number);\n        const data = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(path, {\n            \"Number\": Number,\n            \"Sign\": \"+\"\n        });\n        setResult(data.data.Result);\n    };\n    const beffibo = async ()=>{\n        console.log(Number);\n        const data = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(path, {\n            \"Number\": Number,\n            \"Sign\": \"-\"\n        });\n        setResult(data.data.Result);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-index\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"No\",\n                    children: [\n                        \"No: \",\n                        Number - 1\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/xnr_001/Desktop/Finonacci/Front-End/pages/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            disabled: Number == 1,\n                            className: \"A\",\n                            onClick: ()=>{\n                                setNumber(Number - 1), beffibo();\n                            },\n                            children: \"-\"\n                        }, void 0, false, {\n                            fileName: \"/Users/xnr_001/Desktop/Finonacci/Front-End/pages/index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"div-label\",\n                            defaultValue: 1,\n                            children: Result\n                        }, void 0, false, {\n                            fileName: \"/Users/xnr_001/Desktop/Finonacci/Front-End/pages/index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"B\",\n                            onClick: ()=>{\n                                setNumber(Number + 1), nextfibo();\n                            },\n                            children: \"+\"\n                        }, void 0, false, {\n                            fileName: \"/Users/xnr_001/Desktop/Finonacci/Front-End/pages/index.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/xnr_001/Desktop/Finonacci/Front-End/pages/index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/xnr_001/Desktop/Finonacci/Front-End/pages/index.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/xnr_001/Desktop/Finonacci/Front-End/pages/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN6QjtBQUUxQixNQUFNRyxRQUFRLElBQU07SUFDbEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNTyxPQUFPO0lBQ2IsTUFBTUMsV0FBVyxVQUFZO1FBQzNCQyxRQUFRQyxHQUFHLENBQUNQO1FBQ1osTUFBTVEsT0FBTyxNQUFNVixrREFBVSxDQUFDTSxNQUFLO1lBQy9CLFVBQVVKO1lBQ1YsUUFBTztRQUNYO1FBQ0FHLFVBQVVLLEtBQUtBLElBQUksQ0FBQ04sTUFBTTtJQUM5QjtJQUNFLE1BQU1RLFVBQVUsVUFBWTtRQUMxQkosUUFBUUMsR0FBRyxDQUFDUDtRQUNaLE1BQU1RLE9BQU8sTUFBTVYsa0RBQVUsQ0FBQ00sTUFBSztZQUMvQixVQUFVSjtZQUNWLFFBQU87UUFDWDtRQUNBRyxVQUFVSyxLQUFLQSxJQUFJLENBQUNOLE1BQU07SUFDOUI7SUFDRSxxQkFDRSw4REFBQ1M7a0JBQ0MsNEVBQUNBO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBTUQsV0FBVTs7d0JBQUs7d0JBQUtaLFNBQU87Ozs7Ozs7OEJBQ2xDLDhEQUFDVzs7c0NBQ0MsOERBQUNHOzRCQUNDQyxVQUFVZixVQUFROzRCQUNsQlksV0FBVTs0QkFDVkksU0FBUyxJQUFNO2dDQUNiZixVQUFVRCxTQUFPLElBQ2pCVSxTQUFTOzRCQUNYO3NDQUNEOzs7Ozs7c0NBR0QsOERBQUNHOzRCQUFNRCxXQUFVOzRCQUFZSyxjQUFjO3NDQUN4Q2Y7Ozs7OztzQ0FFSCw4REFBQ1k7NEJBQ0NGLFdBQVU7NEJBQ1ZJLFNBQVMsSUFBTTtnQ0FDYmYsVUFBVUQsU0FBTyxJQUNqQkssVUFBVTs0QkFDWjtzQ0FDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZDtBQUVBLGlFQUFlTixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlub25hbmNpLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtOdW1iZXIsIHNldE51bWJlcl0gPSB1c2VTdGF0ZSgyKTtcbiAgY29uc3QgW1Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBwYXRoID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIlxuICBjb25zdCBuZXh0ZmlibyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhOdW1iZXIpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLnBvc3QocGF0aCx7XG4gICAgICAgIFwiTnVtYmVyXCI6IE51bWJlcixcbiAgICAgICAgXCJTaWduXCI6XCIrXCJcbiAgICB9KVxuICAgIHNldFJlc3VsdChkYXRhLmRhdGEuUmVzdWx0KVxufVxuICBjb25zdCBiZWZmaWJvID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKE51bWJlcilcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MucG9zdChwYXRoLHtcbiAgICAgICAgXCJOdW1iZXJcIjogTnVtYmVyLFxuICAgICAgICBcIlNpZ25cIjpcIi1cIlxuICAgIH0pXG4gICAgc2V0UmVzdWx0KGRhdGEuZGF0YS5SZXN1bHQpXG59XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctaW5kZXhcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIk5vXCI+Tm86IHtOdW1iZXItMX08L2xhYmVsPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGRpc2FibGVkPXtOdW1iZXI9PTF9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJBXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0TnVtYmVyKE51bWJlci0xKSxcbiAgICAgICAgICAgICAgYmVmZmlibygpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAtXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImRpdi1sYWJlbFwiIGRlZmF1bHRWYWx1ZT17MX0+XG4gICAgICAgICAgICB7UmVzdWx0fVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiQlwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE51bWJlcihOdW1iZXIrMSksXG4gICAgICAgICAgICAgIG5leHRmaWJvKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgID5cbiAgICAgICAgICAgICtcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsImluZGV4IiwiTnVtYmVyIiwic2V0TnVtYmVyIiwiUmVzdWx0Iiwic2V0UmVzdWx0IiwicGF0aCIsIm5leHRmaWJvIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJwb3N0IiwiYmVmZmlibyIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiZGVmYXVsdFZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();