webpackHotUpdate("static/development/pages/messenger.js",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



var NavBar = function NavBar(_ref) {
  var getConvo = _ref.getConvo,
      friends = _ref.friends,
      newMessage = _ref.newMessage,
      changeHome = _ref.changeHome,
      changeMessage = _ref.changeMessage,
      addConvo = _ref.addConvo,
      currentChat = _ref.currentChat;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "navbar-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "convo-status"
  }, "Chatting with ", currentChat), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/browser",
    prefetch: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../static/house.png",
    id: "house-button",
    alt: ""
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, newMessage ? 'You have a new message' : '')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "dropbtn"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-bars"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-menu",
    "aria-labelledby": "dropdownMenuButton"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: addConvo
  }, "Start a new convo"), friends.slice(-5).map(function (friend, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: i,
      onClick: function onClick() {
        return getConvo("".concat(friend));
      }
    }, friend);
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n        #convo-status {\n          color: white;\n          font-size: .8em;\n        }\n        a {\n          font-size: 12px;\n        }\n        #navbar-container {\n          display: flex;\n          justify-content: flex-end;\n          background-color: #0069E0;\n        }\n        #house-button {\n          margin-right: 12px;\n          height: 50px;\n          width: auto;\n        }\n        .dropbtn {\n            background-color: #0069E0;\n            color: white;\n            font-size: 16px;\n            border: none;\n            cursor: pointer;\n            width: 120px;\n            margin: .5em .2em;\n            text-align: end;\n        }\n        .dropdown {\n            position: relative;\n            display: inline-block;\n            float: right;\n        }\n        .dropdown-menu {\n            /* display: none;\n            position: absolute;\n            background-color: #f9f9f9;\n            min-width: 160px;\n            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n            z-index: 1; \n            */\n            float:left;\n            text-align:left;\n        }\n        .dropdown-content a {\n            color: black;\n            // padding: 12px 16px;\n            text-decoration: none;\n            display: block;\n        }\n        .dropdown-content a {background-color: #f1f1f1}\n        .dropdown .dropdown-content {\n            display: block;\n        }\n        .dropdown.dropbtn {\n            background-color: #0069E0;\n        }\n      "));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=messenger.js.46eeb12f5b8e8796c2c1.hot-update.js.map