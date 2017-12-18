(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["Cube"] = factory(require("react"), require("react-dom"), require("prop-types"));
	else
		root["Cube"] = factory(root["react"], root["react-dom"], root["prop-types"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_10__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);var _reactDom = __webpack_require__(2);var _Classes = __webpack_require__(6);var _Classes2 = _interopRequireDefault(_Classes);var _Attrs = __webpack_require__(7);var _Attrs2 = _interopRequireDefault(_Attrs);var _utils = __webpack_require__(8);function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === 'object' || typeof call === 'function') ? call : self;
}function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}exports.default = function (WrappedComponent, updater) {
  for (var _len = arguments.length, updaterArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    updaterArgs[_key - 2] = arguments[_key];
  }WrappedComponent = (0, _utils.isObject)(WrappedComponent) ? (0, _utils.create)(WrappedComponent) : WrappedComponent;if (!(0, _utils.isObject)(updater) && !(0, _utils.isFunction)(updater)) updater = {};var component = function (_Component) {
    _inherits(component, _Component);function component() {
      _classCallCheck(this, component);return _possibleConstructorReturn(this, (component.__proto__ || Object.getPrototypeOf(component)).apply(this, arguments));
    }_createClass(component, [{ key: 'componentDidMount', value: function componentDidMount() {
        this.css.apply(this, [updater].concat(updaterArgs));
      } }, { key: 'componentDidUpdate', value: function componentDidUpdate() {
        this.css.apply(this, [updater].concat(updaterArgs));
      } }, { key: 'css', value: function css(updater) {
        for (var _len2 = arguments.length, updaterArgs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          updaterArgs[_key2 - 1] = arguments[_key2];
        }var $ = (0, _reactDom.findDOMNode)(this);if (!$) return;var _$ = { classes: new ((0, _Classes2.default)($))(), attrs: new ((0, _Attrs2.default)($))() };var args = [this.props, _$];updaterArgs = updaterArgs.map(function (arg) {
          return _utils.get.apply(null, [arg].concat(_toConsumableArray(args)));
        });args = [].concat(_toConsumableArray(args), _toConsumableArray(updaterArgs));var vars = _utils.get.apply(null, [updater].concat(_toConsumableArray(args)));if (!(0, _utils.isObject)(vars)) return;for (var v in vars) {
          var got = _utils.get.apply(null, [vars[v]].concat(_toConsumableArray(args)));if (v !== '$') {
            $.style.setProperty((0, _utils.name)(v), got);
          }
        }
      } }, { key: 'render', value: function render() {
        return _react2.default.createElement(WrappedComponent, this.props);
      } }]);return component;
  }(_react.Component);component.displayName = 'RCV(' + (0, _utils.getDisplayName)(WrappedComponent) + ')';return component;
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });var flatten = function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
};var uniquify = function uniquify(arr) {
  return arr.filter(function (v, i, a) {
    return a.indexOf(v) === i;
  });
};var args2arr = exports.args2arr = function args2arr(args) {
  return uniquify(flatten(flatten(args).map(function (str) {
    return str.split(' ');
  })));
};var args2pairs = exports.args2pairs = function args2pairs(args) {
  var pairs = [];if (!args.length) return pairs;if (args.length === 1) {
    pairs = args[0];
  } else {
    var olds = typeof args[0] === 'string' ? [args[0]] : args[0];var news = typeof args[1] === 'string' ? [args[1]] : args[1];var l = Math.min(olds.length, news.length);for (var i = 0; i < l; ++i) {
      pairs.push([olds[i], news[i]]);
    }
  }return pairs;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Face = undefined;

var _Face = __webpack_require__(5);

var _Face2 = _interopRequireDefault(_Face);

var _Cube = __webpack_require__(9);

var _Cube2 = _interopRequireDefault(_Cube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Face = _Face2.default;
exports.default = _Cube2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactCssVars = __webpack_require__(1);

var _reactCssVars2 = _interopRequireDefault(_reactCssVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var updater = function updater(props, $, current, row, col) {
  $.classes.remove('current');current && $.classes.add('current');

  return {
    FaceRow: row,
    FaceCol: col
  };
};

var Face$ = (0, _reactCssVars2.default)({
  tag: 'div',
  className: 'Face',
  displayName: 'Face'
}, {
  $: function $(props, _$) {
    return _$.attrs.add('react-cube-nav', '');
  }
});

var Face = function (_Component) {
  _inherits(Face, _Component);

  function Face() {
    _classCallCheck(this, Face);

    return _possibleConstructorReturn(this, (Face.__proto__ || Object.getPrototypeOf(Face)).apply(this, arguments));
  }

  _createClass(Face, [{
    key: 'css',
    value: function css(current, row, col) {
      this.ref.css(updater, current, row, col);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        Face$,
        {
          ref: function ref(_ref) {
            return _this2.ref = _ref;
          }
        },
        this.props.children
      );
    }
  }]);

  return Face;
}(_react.Component);

exports.default = Face;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();var _utils = __webpack_require__(3);function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}var Classes = function Classes($) {
  var length = void 0;var that = $.classList;var sync = function sync() {
    length = that.length;
  };sync();return function () {
    function _class() {
      _classCallCheck(this, _class);
    }_createClass(_class, [{ key: 'all', value: function all() {
        return that.value.split(' ');
      } }, { key: 'add', value: function add() {
        for (var _len = arguments.length, tokens = Array(_len), _key = 0; _key < _len; _key++) {
          tokens[_key] = arguments[_key];
        }tokens = (0, _utils.args2arr)(tokens);tokens.forEach(function (token) {
          return that.add(token);
        });sync();return this;
      } }, { key: 'remove', value: function remove() {
        for (var _len2 = arguments.length, tokens = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          tokens[_key2] = arguments[_key2];
        }tokens = (0, _utils.args2arr)(tokens);tokens.forEach(function (token) {
          return that.remove(token);
        });sync();return this;
      } }, { key: 'has', value: function has() {
        for (var _len3 = arguments.length, tokens = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          tokens[_key3] = arguments[_key3];
        }if (!tokens.length) return length !== 0;tokens = (0, _utils.args2arr)(tokens);return tokens.every(function (token) {
          return that.contains(token);
        });
      } }, { key: 'hasSome', value: function hasSome() {
        for (var _len4 = arguments.length, tokens = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          tokens[_key4] = arguments[_key4];
        }tokens = (0, _utils.args2arr)(tokens);return tokens.some(function (token) {
          return that.contains(token);
        });
      } // Examples:
      // replace([['old1', 'new1'], ['old2', 'new2']])
      // replace('old', 'new')
      // replace(['old1', 'old2'], ['new1', 'new2'])
    }, { key: 'replace', value: function replace() {
        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }var pairs = (0, _utils.args2pairs)(args);pairs.forEach(function (pair) {
          return that.replace.apply(that, pair);
        });sync();return this;
      } // Examples
      // toggle('a b c') or toggle(['a', ['b', 'c']])
      // toggle('a', true|false) // force, returns this
      // toggle('a', null, true) // dont force, returns results
    }, { key: 'toggle', value: function toggle() {
        for (var _len6 = arguments.length, tokens = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          tokens[_key6] = arguments[_key6];
        }var force = null;var results = null;var l = tokens.length;var last = tokens[l - 1] === null || typeof tokens[l - 1] === 'boolean';var beforeLast = tokens[l - 2] === null || typeof tokens[l - 2] === 'boolean';if (beforeLast && last) {
          results = tokens.pop();force = tokens.pop();
        } else if (last) {
          force = tokens.pop();
        }force === null && (force = undefined);tokens = (0, _utils.args2arr)(tokens);var ret = tokens.map(function (token) {
          return that.toggle(token, force);
        });sync();return results ? ret : this;
      } }, { key: 'length', get: function get() {
        return length;
      }, set: function set(length) {
        console.error('DOMTokenList: length is read-only');
      } }]);return _class;
  }();
};exports.default = Classes;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', { value: true });var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();var _utils = __webpack_require__(3);function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}var Attrs = function Attrs($) {
  var length = void 0;var that = $.attributes;var sync = function sync() {
    length = that.length;
  };sync();return function () {
    function _class() {
      _classCallCheck(this, _class);
    }_createClass(_class, [{ key: 'all', value: function all() {
        return $.getAttributeNames();
      } // Examples:
      // add([['name1', 'value1'], ['name2', 'value2']])
      // add('name', 'value')
      // add(['name1', 'name2'], ['value1', 'value2'])
    }, { key: 'add', value: function add() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }var pairs = (0, _utils.args2pairs)(args);pairs.forEach(function (pair) {
          return $.setAttribute.apply($, pair);
        });sync();return this;
      } }, { key: 'remove', value: function remove() {
        for (var _len2 = arguments.length, names = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          names[_key2] = arguments[_key2];
        }names = (0, _utils.args2arr)(names);names.forEach(function (name) {
          return $.removeAttribute(name);
        });sync();return this;
      } }, { key: 'has', value: function has() {
        for (var _len3 = arguments.length, names = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          names[_key3] = arguments[_key3];
        }if (!names.length) return $.hasAttributes();names = (0, _utils.args2arr)(names);return names.every(function (name) {
          return $.hasAttribute(name);
        });
      } }, { key: 'hasSome', value: function hasSome() {
        for (var _len4 = arguments.length, names = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          names[_key4] = arguments[_key4];
        }names = (0, _utils.args2arr)(names);return names.some(function (name) {
          return $.hasAttribute(name);
        });
      } }, { key: 'get', value: function get() {
        for (var _len5 = arguments.length, names = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          names[_key5] = arguments[_key5];
        }names = (0, _utils.args2arr)(names);return names.map(function (name) {
          return { name: name, value: $.getAttribute(name) };
        });
      } }, { key: 'length', get: function get() {
        return length;
      }, set: function set(length) {
        console.error('NamedNodeMap: length is read-only');
      } }]);return _class;
  }();
};exports.default = Attrs;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });exports.create = exports.getDisplayName = exports.get = exports.name = exports.isFunction = exports.isObject = exports.isNull = undefined;var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();var _typeof = typeof Symbol === 'function' && _typeof2(Symbol.iterator) === 'symbol' ? function (obj) {
  return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
};var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === 'object' || typeof call === 'function') ? call : self;
}function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}var isNull = exports.isNull = function isNull(o) {
  return o === null;
};var isObject = exports.isObject = function isObject(o) {
  return !isNull(o) && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object';
};var isFunction = exports.isFunction = function isFunction(o) {
  return typeof o === 'function';
};var name = exports.name = function name(str) {
  if (str.startsWith('--')) return str;var isUpper = str[0] === str[0].toUpperCase();str = str.replace(/([A-Z])/g, function (m) {
    return '-' + m.toLowerCase();
  }).toString();if (isUpper) {
    str = str.substr(1);str = str.split('');str[0] = str[0].toUpperCase();str = str.join('');
  }return '--' + str;
};var get = exports.get = function get(obj) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }return isFunction(obj) ? obj.apply(undefined, args) : obj;
};var getDisplayName = exports.getDisplayName = function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};var create = exports.create = function create(arg) {
  var _ref = typeof arg === 'string' ? { tag: arg, className: '', displayName: 'Wrapped' } : { tag: arg.tag || 'div', className: arg.className || '', displayName: arg.displayName || arg.className || 'Wrapped' },
      tag = _ref.tag,
      className = _ref.className,
      displayName = _ref.displayName;var component = function (_Component) {
    _inherits(component, _Component);function component() {
      _classCallCheck(this, component);return _possibleConstructorReturn(this, (component.__proto__ || Object.getPrototypeOf(component)).apply(this, arguments));
    }_createClass(component, [{ key: 'render', value: function render() {
        var Tag = tag;return _react2.default.createElement(Tag, _extends({ className: className }, this.props), this.props.children);
      } }]);return component;
  }(_react.Component);component.displayName = displayName;return component;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Struct = __webpack_require__(11);

var _Struct2 = _interopRequireDefault(_Struct);

var _Layer = __webpack_require__(13);

var _Layer2 = _interopRequireDefault(_Layer);

var _reactCssVars = __webpack_require__(1);

var _reactCssVars2 = _interopRequireDefault(_reactCssVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cube$ = (0, _reactCssVars2.default)({
  tag: 'div',
  className: 'Cube',
  displayName: 'Cube'
}, {
  $: function $(props, _$) {
    return _$.attrs.add('react-cube-nav', '');
  }
});

var Cube = function (_Component) {
  _inherits(Cube, _Component);

  function Cube(props) {
    _classCallCheck(this, Cube);

    var _this = _possibleConstructorReturn(this, (Cube.__proto__ || Object.getPrototypeOf(Cube)).call(this, props));

    _this.struct = new _Struct2.default(_this.props.children);
    _this.coords = { x: 0, y: 0, z: 0 };
    _this.layers = [];
    _this.faces = [];
    return _this;
  }

  _createClass(Cube, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        move: this.move.bind(this),
        has: this.has.bind(this)
      };
    }
  }, {
    key: 'mins',
    value: function mins(cube) {
      var map = function map(_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            row = _ref2[0],
            c = _ref2[1];

        return +c;
      };
      var sort = function sort(a, b) {
        return a - b;
      };

      var x = cube.by('x').map(map).sort(sort)[0];
      var y = cube.by('y').map(map).sort(sort)[0];

      return { x: x, y: y };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._setCoords(this.coords);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        Cube$,
        null,
        this.struct.by('z').map(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              cube = _ref4[0],
              z = _ref4[1];

          var mins = _this2.mins(cube);

          return _react2.default.createElement(
            _Layer2.default,
            {
              key: 'z:' + z,
              ref: function ref(_ref6) {
                return _this2.layers.push({ z: +z, mins: mins, ref: _ref6 });
              }
            },
            cube.map(function (Face, x, y, z) {
              return _react2.default.cloneElement(Face, {
                key: 'x:' + x + '/y:' + y + '/z:' + z,
                ref: function ref(_ref5) {
                  return _this2.faces.push({
                    x: +x,
                    y: +y,
                    row: y - mins.y + 1,
                    col: x - mins.x + 1,
                    ref: _ref5
                  });
                }
              });
            })
          );
        })
      );
    }
  }, {
    key: '_setCoords',
    value: function _setCoords(coords) {
      var _this3 = this;

      this.coords = coords;

      this.layers.forEach(function (layer) {
        var row = _this3.coords.y - layer.mins.y + 1;
        var col = _this3.coords.x - layer.mins.x + 1;

        var dir = 0;layer.z > _this3.coords.z && (dir = 1);layer.z < _this3.coords.z && (dir = -1);

        layer.ref.css(dir, row, col);
      });

      this.faces.forEach(function (face) {
        var current = face.x === _this3.coords.x && face.y === _this3.coords.y;

        face.ref.css(current, face.row, face.col);
      });
    }

    /**
     * Examples:
     * move({ x: 1 })
     * move({ x: 0, y: 0, z: 0 })
     * move((coords) => coords)
     * move('out')
     */

  }, {
    key: 'move',
    value: function move(coords) {
      coords = this._coords(coords);

      if (this.has(coords)) {
        this._setCoords(coords);
      }
    }
  }, {
    key: 'has',
    value: function has(coords, refCoords) {
      coords = this._coords(coords, refCoords);

      return !!this.struct.get(coords).length;
    }
  }, {
    key: '_coords',
    value: function _coords(coords) {
      var refCoords = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.coords;

      if (typeof coords === 'string') {
        switch (coords.toUpperCase()) {
          case 'LEFT':
            coords = { x: refCoords.x - 1 };break;
          case 'RIGHT':
            coords = { x: refCoords.x + 1 };break;
          case 'UP':
            coords = { y: refCoords.y - 1 };break;
          case 'DOWN':
            coords = { y: refCoords.y + 1 };break;
          case 'IN':
            coords = { z: refCoords.z - 1 };break;
          case 'OUT':
            coords = { z: refCoords.z + 1 };break;
          default:
            coords = refCoords;
        }

        return Object.assign({}, this.coords, refCoords, coords);
      } else if (typeof coords === 'function') {
        coords = coords(Object.assign({}, this.coords));

        return Object.assign({}, this.coords, coords);
      }
    }
  }]);

  return Cube;
}(_react.Component);

Cube.childContextTypes = {
  move: _propTypes2.default.func,
  has: _propTypes2.default.func
};

exports.default = Cube;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(12);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Struct = function () {
  function Struct(items) {
    _classCallCheck(this, Struct);

    this._items = items;
  }

  _createClass(Struct, [{
    key: 'get',
    value: function get() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 0, z: 0 },
          x = _ref.x,
          y = _ref.y,
          z = _ref.z;

      return this._items.filter(function (child) {
        var condition = true;
        var checkX = _utils2.default.def(x) && _utils2.default.def(child.props.x);
        var checkY = _utils2.default.def(y) && _utils2.default.def(child.props.y);
        var checkZ = _utils2.default.def(z) && _utils2.default.def(child.props.z);

        if (checkX) condition = condition && +child.props.x === +x;
        if (checkY) condition = condition && +child.props.y === +y;
        if (checkZ) condition = condition && +child.props.z === +z;

        return condition;
      });
    }
  }, {
    key: 'by',
    value: function by() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'z';

      return Object.entries(_utils2.default.groupBy(this._items, function (item) {
        return item.props[direction];
      })).map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            dir = _ref3[0],
            items = _ref3[1];

        return [new Struct(items), dir];
      });
    }
  }, {
    key: 'map',
    value: function map() {
      var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      return [].map.call(this._items, function (item) {
        return fn(item, item.props.x, item.props.y, item.props.z);
      });
    }
  }]);

  return Struct;
}();

exports.default = Struct;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  groupBy: function groupBy(arr, key) {
    var isFunc = typeof key === 'function';

    return arr.reduce(function (reduced, item) {
      var by = isFunc ? key(item) : item[key];

      reduced[by] = reduced[by] || [];
      reduced[by].push(item);

      return reduced;
    }, {});
  },
  def: function def(o) {
    return typeof o !== 'undefined';
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactCssVars = __webpack_require__(1);

var _reactCssVars2 = _interopRequireDefault(_reactCssVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var updater = function updater(props, $, dir, row, col) {
  $.classes.remove('current');
  $.classes.remove('in');
  $.classes.remove('out');dir === 0 && $.classes.add('current');dir > 0 && $.classes.add('out');dir < 0 && $.classes.add('in');

  return {
    LayerRow: row,
    LayerCol: col
  };
};

var Layer$ = (0, _reactCssVars2.default)({
  tag: 'div',
  className: 'Layer',
  displayName: 'Layer'
}, {
  $: function $(props, _$) {
    return _$.attrs.add('react-cube-nav', '');
  }
});

var Layer = function (_Component) {
  _inherits(Layer, _Component);

  function Layer() {
    _classCallCheck(this, Layer);

    return _possibleConstructorReturn(this, (Layer.__proto__ || Object.getPrototypeOf(Layer)).apply(this, arguments));
  }

  _createClass(Layer, [{
    key: 'css',
    value: function css(dir, row, col) {
      this.ref.css(updater, dir, row, col);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        Layer$,
        {
          ref: function ref(_ref) {
            return _this2.ref = _ref;
          }
        },
        this.props.children
      );
    }
  }]);

  return Layer;
}(_react.Component);

exports.default = Layer;

/***/ })
/******/ ]);
});