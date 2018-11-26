webpackHotUpdate("static/development/pages/messenger.js",{

/***/ "./components/Messenger.js":
/*!*********************************!*\
  !*** ./components/Messenger.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/message */ "./actions/message.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Message */ "./components/Message.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavBar */ "./components/NavBar.js");
/* harmony import */ var _Favorites__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Favorites */ "./components/Favorites.js");
/* harmony import */ var react_drag_drop_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-drag-drop-container */ "./node_modules/react-drag-drop-container/lib/bundle.js");
/* harmony import */ var react_drag_drop_container__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_drag_drop_container__WEBPACK_IMPORTED_MODULE_8__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

  function Messenger(props) {
    var _this;

    _classCallCheck(this, Messenger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Messenger).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMessage", function (message) {
      _this.setState(function (state) {
        return {
          typing: state.typing.filter(function (_ref) {
            var username = _ref.username;
            return username !== message.username;
          })
        };
      });

      _this.setState(function (state) {
        return state.friends.add(message.username);
      });

      if (message.username === _this.state.currentConvo) {
        _this.setState(function (state) {
          return {
            messages: state.messages.concat(message)
          };
        });
      } else {
        _this.setState({
          otherNewMessage: true
        });
      }

      _this.props.addMessage(message.text, message.username, message.messageType, message.created_at);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "noUserExists", function () {
      alert('User by that name does not exist');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "typingStatus", function (data) {
      if (data === _this.state.currentConvo) {
        var notIncluded = _this.state.typing.filter(function (el) {
          return el.username !== data;
        });

        for (var i = 0, len = _this.state.typing.length; i < len; ++i) {
          if (_this.state.typing[i].username === data) {
            clearTimeout(_this.state.typing[i].timeoutId);
          }
        }

        var timeoutId = setTimeout(function () {
          _this.setState(function (state) {
            return {
              typing: state.typing.filter(function (el) {
                return el.username !== data;
              })
            };
          });
        }, 3000);
        var status = {
          username: data,
          timeoutId: timeoutId
        };

        _this.setState(function (state) {
          return {
            typing: _toConsumableArray(notIncluded).concat([status])
          };
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getCurrentConvo", function (otherUser) {
      _this.setState(function () {
        var filtered = _this.props.messages.filter(function (message) {
          return message.username === otherUser || message.username === _this.username && message.recipients.includes(otherUser);
        });

        return {
          currentConvo: otherUser,
          messages: filtered
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addConversation",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var username;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return prompt('enter a username');

            case 2:
              username = _context.sent;

              _this.setState({
                currentConvo: username
              }, function () {
                _this.getCurrentConvo(username);
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showTypingStatus", function (e) {
      var typingStatus = {
        username: _this.username,
        recipients: [_this.state.currentConvo]
      };

      _this.socket.emit('typing', typingStatus);

      _this.setState({
        text: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (e) {
      e.preventDefault();

      if (_this.state.text !== '') {
        var message = {
          created_at: new Date().getTime(),
          username: _this.username,
          text: _this.state.text,
          messageType: 'text',
          recipients: [_this.state.currentConvo]
        };

        _this.socket.emit('message', message); //TODO THIS ADDS TO PROPS


        _this.props.addMessage(_this.state.text, 'text', _this.username, message.created_at, [_this.state.currentConvo]);

        _this.setState(function (state) {
          return {
            text: '',
            messages: _this.state.messages.concat(message)
          };
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToBottom", function () {
      if (_this.el) {
        _this.el.scrollIntoView({
          behavior: 'instant'
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "shareFavorite", function (arrayIdx) {
      var message = {
        created_at: new Date().getTime(),
        username: _this.username,
        text: [arrayIdx, _this.props.houses[arrayIdx].imgUrl],
        messageType: 'link',
        recipients: [_this.state.currentConvo]
      };

      _this.props.addMessage(message.text, message.messageType, message.username, message.created_at, message.recipients);

      _this.setState(function (state) {
        state.messages = _toConsumableArray(_this.state.messages).concat([message]);
        return state;
      });
    });

    _this.state = {
      text: '',
      messages: [],
      updated: false,
      currentConvo: '',
      friends: new Set(),
      typing: [],
      otherNewMessage: false
    };
    return _this;
  }

  _createClass(Messenger, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      this.username = this.props.user.username;
      this.scrollToBottom();

      if (!this.state.messages.length && !this.state.updated) {
        this.setState(function (state) {
          _this2.props.messages.forEach(function (msg) {
            state.friends.add(msg.username);
          });

          return state;
        });
        var filtered = this.state.currentConvo !== '' ? this.props.messages.filter(function (message) {
          return message.username === _this2.state.currentConvo;
        }) : this.props.messages.filter(function (message) {
          return message.username === _this2.props.messages.slice(-1)[0];
        });
        this.setState({
          messages: filtered,
          updated: true
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var connectSocket = function connectSocket() {
        var _this3$props$user = _this3.props.user,
            username = _this3$props$user.username,
            password = _this3$props$user.password;
        _this3.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:3000');

        _this3.socket.on('connect', function () {
          _this3.socket.emit('authentication', {
            username: username,
            password: password
          });
        });

        _this3.socket.on('message', _this3.handleMessage);

        _this3.socket.on('typing', _this3.typingStatus);

        _this3.socket.on('noexist', _this3.noUserExists);

        _this3.socket.emit('login', username);
      };

      setTimeout(connectSocket, 100);
      setTimeout(this.scrollToBottom, 100);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {//TODO do we want this to shut off when you navigate away from messenger?
      //this works current if user goes back to browser
      //TODO seems like we want to receive messages still
      // this.socket.off('message', this.handleMessage);
      // this.socket.close();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var sameUser = function sameUser(msg, i, arr) {
        return i > 0 && msg.username === arr[i - 1].username;
      };

      var typingStatusMessage = !this.state.typing.length ? '' : this.state.typing.length === 1 ? "".concat(this.state.typing[0].username, " is typing...") : this.state.typing.length === 2 ? "".concat(this.state.typing[0].username, " and ").concat(this.state.typing[1].username, " are typing...") : 'several people are typing';
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "mdl-card mdl-shadow--2dp",
        id: "chatview"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Favorites__WEBPACK_IMPORTED_MODULE_7__["default"], {
        shareFavorite: this.shareFavorite
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        newMessage: this.state.otherNewMessage,
        currentChat: this.state.currentConvo,
        addConvo: this.addConversation,
        getConvo: this.getCurrentConvo,
        friends: _toConsumableArray(this.state.friends).filter(function (notUser) {
          return notUser !== _this4.username && notUser !== _this4.state.currentConvo;
        })
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_drag_drop_container__WEBPACK_IMPORTED_MODULE_8__["DropTarget"], {
        targetKey: "fav"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, this.state.messages.map(function (message, i, array) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: i,
          message: message,
          username: _this4.username,
          firstMessage: sameUser(message, i, array)
        });
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        ref: function ref(el) {
          _this4.el = el;
        }
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "typing-status"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", null, typingStatusMessage)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        autoComplete: "off"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        value: this.state.text,
        onChange: this.showTypingStatus,
        className: "mdl-textfield__input",
        id: "message-input",
        placeholder: "Send a message"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onClick: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "far fa-comment"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "mdl-textfield__label",
        htmlFor: "message-input"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", null, "\n            .droptarget {\n              height: 440px;\n            }\n            #chatview {\n              width: 320px;\n              height: 568px;\n            }\n            #typing-status {\n              height: 2.4em;\n              font-size: .7em;\n            }\n            #message-input {\n              border-bottom: lightgray solid 1px;\n              border-top: lightgray solid 1px;\n              height: 20px;\n            }\n            form {\n              background: #fff;\n              padding: 0px 10px 0px 10px;\n            }\n            ul {\n              position: relative;\n              top:0.5em;\n              height: 350px;\n              margin: 0;\n              padding: 0;\n              text-align: left;\n              list-style: none;\n              overflow-y: scroll;\n            }\n            ul li {\n              padding: 1px;\n              background: #FFF;\n            }\n            .mdl-card {\n              margin: auto;\n              transition: all .3s;\n              // transform: translateY(100px);\n            }\n            .mdl-textfield__input {\n              display:inline-block;\n              width: 90%;\n              padding-top: .5em;\n            }\n            .timestamp{\n              font-size:10px;\n              font-weight: 300;\n              color: transparent;\n              margin: 3px;\n            }\n            li:hover .my-timestamp {\n              color: black;\n              transition: color .8s;\n            }\n            li:hover .timestamp {\n              color: black;\n              transition: color .8s;\n            }\n          .my-message {\n            display: inline-block;\n            font-weight: 400;\n            background: #00e34d;\n            color: white;\n            border-radius: 10px;\n            padding: 7px;\n            max-width: 50%;\n            word-wrap: break-word;\n            clear: right;\n            line-height: 1.25;\n          }\n          .your-message {\n            display: inline-block;\n            background: #E5E5EA;\n            border-radius: 10px;\n            padding: 7px;\n            word-wrap: break-word;\n            max-width:70%;\n            line-height: 1.25;\n          }\n          .message-username {\n            display: block;\n            font-size: 0.8em;\n            font-weight: bold;\n            line-height: 1.5;\n            margin-left: 0.6em;\n          }\n          .send-msg-btn {\n            cursor:pointer;\n          }\n          .mdl-textfield__label:after{\n            background-color: #0069E0;\n          }\n          "));
    }
  }]);

  return Messenger;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (_ref3) {
  var messages = _ref3.messages,
      houses = _ref3.houses,
      user = _ref3.user;
  return {
    messages: messages,
    houses: houses,
    user: user
  };
}, {
  addMessage: _actions_message__WEBPACK_IMPORTED_MODULE_4__["addMessage"]
})(Messenger));

/***/ })

})
//# sourceMappingURL=messenger.js.8850997842f52af30cd2.hot-update.js.map