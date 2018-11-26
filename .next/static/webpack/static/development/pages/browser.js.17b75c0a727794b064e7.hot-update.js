webpackHotUpdate("static/development/pages/browser.js",{

/***/ "./pages/browser.js":
/*!**************************!*\
  !*** ./pages/browser.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/message */ "./actions/message.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Browser =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Browser, _React$Component);

  function Browser(props) {
    var _this;

    _classCallCheck(this, Browser);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Browser).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addFavorite", function () {
      var imgUrl = document.querySelector('.home-profile-image').getAttribute('src');
      var houseNum = 0;
      var houseId = Number(window.location.pathname.replace(/\/browser\//, ''));

      if (houseId && houseId >= 0 && houseId < 100) {
        houseNum = houseId;
      }

      for (var i = 0, len = _this.props.houses.length; i < len; ++i) {
        if (_this.props.houses[i].house_id === houseNum) {
          return;
        }
      }

      _this.props.addHouse(houseNum, _this.props.user.username, imgUrl);
    });

    return _this;
  }

  _createClass(Browser, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var script_Top = document.createElement("script");
      script_Top.src = "https://s3-us-west-1.amazonaws.com/img-gallery-hr/PWAbundle.js";
      script_Top.async = true;
      document.body.appendChild(script_Top);
      var script = document.createElement("script");
      script.src = "https://s3-us-west-1.amazonaws.com/housing-hr/PWAbundle.js";
      script.async = true;
      document.body.appendChild(script);

      var delayForRender = function delayForRender() {
        var favoriteButton = document.getElementById('add-favorites');
        favoriteButton.addEventListener('click', _this2.addFavorite);
      };

      setTimeout(delayForRender, 2000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var favoriteButton = document.getElementById('add-favorites');
      favoriteButton.removeEventListener('click', this.addFavorite);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "browse-homes"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/messenger"
      }, "Messenger"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "top-app"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "main"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n            #main {\n              margin-left: -100px;\n              transform: scale(.5);\n            }\n            #browse-homes {\n              max-width: 100%;\n              max-height: 100%;\n            }\n            html.mdl-js {\n              background: white !important;\n            }\n          @media (max-width: 320px) {\n\n            }\n\n          "));
    }
  }]);

  return Browser;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (_ref) {
  var houses = _ref.houses,
      user = _ref.user;
  return {
    houses: houses,
    user: user
  };
}, {
  addHouse: _actions_message__WEBPACK_IMPORTED_MODULE_2__["addHouse"]
})(Browser));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/browser")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=browser.js.17b75c0a727794b064e7.hot-update.js.map