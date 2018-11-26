webpackHotUpdate("static/development/pages/messenger.js",{

/***/ "./components/Favorites.js":
/*!*********************************!*\
  !*** ./components/Favorites.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_drag_drop_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-drag-drop-container */ "./node_modules/react-drag-drop-container/lib/bundle.js");
/* harmony import */ var react_drag_drop_container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_drag_drop_container__WEBPACK_IMPORTED_MODULE_3__);





var Favorites = function Favorites(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "favorites-container"
  }, props.houses.map(function (obj, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_drag_drop_container__WEBPACK_IMPORTED_MODULE_3__["DragDropContainer"], {
      onDrop: function onDrop() {
        return props.shareFavorite(i);
      },
      targetKey: "fav",
      dragClone: true,
      render: function render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/browser/".concat(obj.house_id),
          prefetch: true
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "fav-image-prev",
          key: i,
          src: obj.imgUrl,
          alt: "house-image"
        }));
      }
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n      img {\n        cursor: pointer;\n      }\n      #favorites-container {\n        // overflow-x: scroll;\n        // overflow-y: hidden;\n        // white-space: nowrap;\n        margin: 0 .3em 0 .3em;\n        background-color: white;\n        height: 6em;\n        justify-content: space-around;\n      }\n      .fav-image-prev {\n        display: inline-block;\n        width: 5em;\n        height: auto;\n        margin: .5em 1em;\n        border: 3px solid black;\n        // draggable: false;\n        // user-drag: none;\n        // user-select: none;\n        // -moz-user-select: none;\n        // -webkit-user-drag: none;\n        // -webkit-user-select: none;\n        // -ms-user-select: none;\n      }\n      "));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (_ref) {
  var houses = _ref.houses;
  return {
    houses: houses
  };
})(Favorites));

/***/ })

})
//# sourceMappingURL=messenger.js.343cfee53ab30575cc21.hot-update.js.map