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
/* harmony import */ var _actions_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/message */ "./actions/message.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Message */ "./components/Message.js");
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






 // import NavBar from './NavBar';

var generateName = function generateName() {
  var getRandomInt = function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var firstName = ['Jack', 'Steven', 'Brian', 'Marc', 'Drew', 'Stephanie', 'Daniel', 'James', 'Spencer', 'Caitlin', 'Jackie', 'Julius', 'Patrick'];
  var lastName = ['Li', 'Chung', 'Tiosejo', 'Louie', 'Curtis', 'Sockwell', 'Jiang', 'Bykowsky', 'Detro', 'Chen', 'Sea', 'Doyle'];
  var name = firstName[getRandomInt(0, firstName.length)] + ' ' + lastName[getRandomInt(0, lastName.length)];
  return name;
};

var Messenger =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Messenger, _React$Component);

  function Messenger(props) {
    var _this;

    _classCallCheck(this, Messenger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Messenger).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMessage", function (message) {
      _this.setState(function (state) {
        return {
          messages: state.messages.concat(message)
        };
      });

      _this.props.addMessage(message.text, message.username, message.created_at);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (e) {
      e.preventDefault();
      var message = {
        created_at: new Date().getTime(),
        username: _this.state.username,
        text: _this.state.text
      };

      _this.socket.emit('message', message);

      _this.props.addMessage(_this.state.text, _this.state.username, message.created_at);

      _this.setState(function (state) {
        return {
          text: '',
          messages: _this.state.messages.concat(message)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToBottom", function () {
      _this.el.scrollIntoView({
        behavior: 'instant'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      _this.setState({
        username: e.target.value
      });
    });

    _this.state = {
      text: '',
      messages: [],
      username: generateName(),
      updated: false,
      currentConvo: ''
    };
    return _this;
  }

  _createClass(Messenger, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      this.scrollToBottom();

      if (!this.state.messages.length && !this.state.updated) {
        var filtered = this.state.currentConvo !== '' ? this.props.messages.filter(function (message) {
          return message.username === _this2.state.currentConvo;
        }) : this.state.messages;
        this.setState({
          messages: filtered,
          updated: true
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:3000');
      this.socket.on('message', this.handleMessage);
      setTimeout(this.scrollToBottom, 100);
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
      var _this3 = this;

      var sameUser = function sameUser(msg, i, arr) {
        return i > 0 && msg.username === arr[i - 1].username;
      }; // let allMessages = this.props.messages.concat(this.state.messages);
      // allMessages.sort((a, b) => b.createdAt - a.createdAt);


      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        onChange: this.handleChange,
        placeholder: 'enter username'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mdl-card mdl-shadow--2dp",
        id: "chatview"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.state.messages.map(function (message, i, array) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: i,
          message: message,
          username: _this3.state.username,
          firstMessage: sameUser(message, i, array)
        });
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: function ref(el) {
          _this3.el = el;
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        autoComplete: "off"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: this.state.text,
        onChange: function onChange(e) {
          return _this3.setState({
            text: e.target.value
          });
        },
        className: "mdl-textfield__input",
        id: "message-input",
        placeholder: 'Send a message'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "mdl-textfield__label",
        htmlFor: "message-input"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n\t\t\t\t\t\t#message-input {\n\t\t\t\t\t\tborder-bottom: lightgray solid 1px;\n\t\t\t\t\t\tborder-top: lightgray solid 1px;\n\t\t\t\t\t\theight: 20px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tform {\n\t\t\t\t\t\t\tbackground: #fff;\n\t\t\t\t\t\t\tpadding: 0px 10px 0px 10px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tul {\n\t\t\t\t\t\t\theight: 480px;\n\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t\tlist-style: none;\n\t\t\t\t\t\t\toverflow-y: scroll;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tul li {\n\t\t\t\t\t\t\tpadding: 1px;\n\t\t\t\t\t\t\tbackground: #FFF;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.mdl-card {\n\t\t\t\t\t\t\tmargin: auto;\n\t\t\t\t\t\t\ttransition: all .3s;\n\t\t\t\t\t\t\ttransform: translateY(100px);\n\t\t\t\t\t\t\tmin-height: 500px;\n\t\t\t\t\t\t\tmax-height: 500px;\n\t\t\t\t\t\t}\n\t\t\t\t\t")));
    }
  }]);

  return Messenger;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (_ref) {
  var messages = _ref.messages,
      houses = _ref.houses;
  return {
    messages: messages,
    houses: houses
  };
}, {
  addMessage: _actions_message__WEBPACK_IMPORTED_MODULE_3__["addMessage"],
  addHouse: _actions_message__WEBPACK_IMPORTED_MODULE_3__["addHouse"]
})(Messenger));

/***/ }),

/***/ "./components/NavBar.js":
false,

/***/ "./node_modules/classnames/index.js":
false,

/***/ "./node_modules/lodash.isfunction/index.js":
false,

/***/ "./node_modules/lodash.isobject/index.js":
false,

/***/ "./node_modules/lodash.tonumber/index.js":
false,

/***/ "./node_modules/popper.js/dist/esm/popper.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
false,

/***/ "./node_modules/react-popper/lib/Arrow.js":
false,

/***/ "./node_modules/react-popper/lib/Manager.js":
false,

/***/ "./node_modules/react-popper/lib/Popper.js":
false,

/***/ "./node_modules/react-popper/lib/Target.js":
false,

/***/ "./node_modules/react-popper/lib/react-popper.js":
false,

/***/ "./node_modules/reactstrap/dist/reactstrap.es.js":
false

})
//# sourceMappingURL=index.js.aec65a88597252f5b183.hot-update.js.map