webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Message.js":
/*!*******************************!*\
  !*** ./components/Message.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Jack\\Desktop\\HRR34\\PWA-MessengerHouse\\components\\Message.js";

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var message = _ref.message,
      username = _ref.username,
      firstMessage = _ref.firstMessage;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    classname: !firstMessage ? 'first-message-' : 'another-message',
    style: {
      listStyle: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "message-username",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, username), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: username === message.username ? 'my-message' : 'your-message',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, message.text, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "\n      .my-message {\n      background: #00e34d;\n      color: white;\n      border-radius: 10px;\n      margin-bottom: 0.1em;\n      padding: 1px 8px;\n      max-width: 60%;\n      word-break: break-all;\n      width: fit-content;\n      }\n      .your-message {\n      background: #EEF6FF;\n      border-radius: 10px;\n      margin-bottom: 0.1em;\n      padding: 1px 8px;\n      max-width: 60%;\n      word-break: break-all;\n      width: fit-content;\n      }\n      li .my-message {\n      float: right;\n      }\n      li {\n      clear: right;\n      }\n    "))));
});

/***/ })

})
//# sourceMappingURL=index.js.e657e934e419c3c448ea.hot-update.js.map