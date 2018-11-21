webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Messenger.js":
/*!*********************************!*\
  !*** ./components/Messenger.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/todo */ "./actions/todo.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Message */ "./components/Message.js");
var _jsxFileName = "C:\\Users\\Jack\\Desktop\\HRR34\\PWA-MessengerHouse\\components\\Messenger.js";

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







var Messenger =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Messenger, _React$Component);

  function Messenger() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Messenger);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Messenger)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      text: '',
      messages: [],
      username: Math.floor(Math.random() * 1000).toString() //TODO need to load props from redux

    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMessage", function (message) {
      _this.setState(function (state) {
        return {
          messages: state.messages.concat(message)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (e) {
      e.preventDefault();
      var message = {
        id: new Date().getTime(),
        username: _this.state.username,
        text: _this.state.text
      };

      _this.socket.emit('message', message);

      _this.props.addTodo(_this.state.text);

      _this.setState(function (state) {
        return {
          text: '',
          messages: state.messages.concat(message)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeTodo", function (todo) {
      _this.props.removeTodo(todo);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      _this.setState({
        username: e.target.value
      });
    });

    return _this;
  }

  _createClass(Messenger, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:3000');
      this.socket.on('message', this.handleMessage);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.socket.off('message', this.handleMessage);
      this.socket.close();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var sameUser = function sameUser(msg, i, arr) {
        return i > 0 && msg.username === arr[i - 1].username;
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.handleChange,
        placeholder: "enter username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mdl-card mdl-shadow--2dp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, this.state.username), this.state.messages.map(function (message, i, array) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: i,
          message: message,
          username: _this2.state.username,
          firstMessage: sameUser(message, i, array),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: this.state.text,
        onChange: function onChange(e) {
          return _this2.setState({
            text: e.target.value
          });
        },
        className: "mdl-textfield__input",
        id: "input",
        placeholder: "Send a message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "mdl-textfield__label",
        htmlFor: "input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "\n\t\t\t\t\t\tform {\n\t\t\t\t\t\t\tbackground: #fff;\n\t\t\t\t\t\t\tpadding: 10px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tul {\n\t\t\t\t\t\t\tmin-height: 100px;\n\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t\tlist-style: none;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tul li {\n\t\t\t\t\t\t\tpadding: 3px;\n\t\t\t\t\t\t\tbackground: #FFF;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.mdl-card {\n\t\t\t\t\t\t\tmargin: auto;\n\t\t\t\t\t\t\ttransition: all .3s;\n\t\t\t\t\t\t\ttransform: translateY(100px);\n\t\t\t\t\t\t}\n\t\t\t\t\t")));
    }
  }]);

  return Messenger;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (_ref) {
  var todos = _ref.todos;
  return {
    todos: todos
  };
}, {
  addTodo: _actions_todo__WEBPACK_IMPORTED_MODULE_3__["addTodo"],
  removeTodo: _actions_todo__WEBPACK_IMPORTED_MODULE_3__["removeTodo"]
})(Messenger));

/***/ })

})
//# sourceMappingURL=index.js.9248c8b7ff21d60eb00c.hot-update.js.map