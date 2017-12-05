(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["Cube"] = factory(require("react"), require("react-dom"), require("prop-types"));
	else
		root["Cube"] = factory(root["react"], root["react-dom"], root["prop-types"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_7__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(5);




/* harmony default export */ __webpack_exports__["default"] = ((WrappedComponent, updater) => {
  WrappedComponent = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* isObject */])(WrappedComponent) ? Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* create */])(WrappedComponent) : WrappedComponent;

  if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* isObject */])(updater) && !Object(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* isFunction */])(updater)) return WrappedComponent;

  let component = class extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    componentDidMount() {
      this.postRender();
    }

    componentDidUpdate() {
      this.postRender();
    }

    postRender() {
      const $ = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["findDOMNode"])(this);
      if (!$) return;

      const _$ = {
        classes: {
          add: $.classList.add.bind($.classList),
          remove: $.classList.remove.bind($.classList),
          item: $.classList.item.bind($.classList),
          toggle: $.classList.toggle.bind($.classList),
          contains: $.classList.contains.bind($.classList),
          replace: $.classList.replace.bind($.classList)
        },
        attrs: {
          get: $.getAttribute.bind($),
          set: $.setAttribute.bind($),
          has: $.hasAttribute.bind($),
          have: $.hasAttributes.bind($),
          remove: $.removeAttribute.bind($)
        }
      };

      const vars = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* get */])(updater, this.props, _$);
      if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* isObject */])(vars)) return;

      for (const v in vars) {
        if (v === '$') {
          Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* get */])(vars[v], this.props, _$);
        } else {
          $.style.setProperty(Object(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* name */])(v), Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* get */])(vars[v], this.props));
        }
      }
    }

    render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WrappedComponent, this.props);
    }
  };

  component.displayName = `RCV(${Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* getDisplayName */])(WrappedComponent)})`;

  return component;
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Face = undefined;

var _Face = __webpack_require__(4);

var _Face2 = _interopRequireDefault(_Face);

var _Cube = __webpack_require__(6);

var _Cube2 = _interopRequireDefault(_Cube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Face = _Face2.default;
exports.default = _Cube2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactCssVars = __webpack_require__(2);

var _reactCssVars2 = _interopRequireDefault(_reactCssVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Face$ = (0, _reactCssVars2.default)({
  tag: 'div',
  className: 'Face',
  displayName: 'Face'
}, function (props, $) {
  $.attrs.set('react-cube-nav', '');

  $.classes.remove('current');!!props.current && $.classes.add('current');

  return {
    FaceRow: function FaceRow(props) {
      return props.row;
    },
    FaceCol: function FaceCol(props) {
      return props.col;
    }
  };
});

var Face = function (_Component) {
  _inherits(Face, _Component);

  function Face() {
    _classCallCheck(this, Face);

    return _possibleConstructorReturn(this, (Face.__proto__ || Object.getPrototypeOf(Face)).apply(this, arguments));
  }

  _createClass(Face, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Face$,
        {
          row: this.props.row,
          col: this.props.col,
          current: this.props.current ? 1 : 0
        },
        this.props.children
      );
    }
  }]);

  return Face;
}(_react.Component);

exports.default = Face;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};



const isNull = o => o === null;
/* unused harmony export isNull */

const isObject = o => !isNull(o) && typeof o === 'object';
/* harmony export (immutable) */ __webpack_exports__["e"] = isObject;

const isFunction = o => typeof o === 'function';
/* harmony export (immutable) */ __webpack_exports__["d"] = isFunction;


const name = str => {
  if (str.startsWith('--')) return str;

  let isUpper = str[0] === str[0].toUpperCase();
  str = str.replace(/([A-Z])/g, m => `-${m.toLowerCase()}`).toString();

  if (isUpper) {
    str = str.substr(1);
    str = str.split('');
    str[0] = str[0].toUpperCase();
    str = str.join('');
  }

  return `--${str}`;
};
/* harmony export (immutable) */ __webpack_exports__["f"] = name;


const get = (obj, ...args) => isFunction(obj) ? obj(...args) : obj;
/* harmony export (immutable) */ __webpack_exports__["b"] = get;


const getDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || 'Component';
/* harmony export (immutable) */ __webpack_exports__["c"] = getDisplayName;


const create = arg => {
  let { tag, className, displayName } = typeof arg === 'string' ? {
    tag: arg,
    className: '',
    displayName: 'Wrapped'
  } : {
    tag: arg.tag || 'div',
    className: arg.className || '',
    displayName: arg.displayName || arg.className || 'Wrapped'
  };

  let component = class extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
      let Tag = tag;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag, _extends({ className: className }, this.props), this.props.children);
    }
  };

  component.displayName = displayName;

  return component;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = create;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Struct = __webpack_require__(8);

var _Struct2 = _interopRequireDefault(_Struct);

var _Layer = __webpack_require__(10);

var _Layer2 = _interopRequireDefault(_Layer);

var _reactCssVars = __webpack_require__(2);

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
    return _$.attrs.set('react-cube-nav', '');
  }
});

var Cube = function (_Component) {
  _inherits(Cube, _Component);

  function Cube(props) {
    _classCallCheck(this, Cube);

    var _this = _possibleConstructorReturn(this, (Cube.__proto__ || Object.getPrototypeOf(Cube)).call(this, props));

    _this.struct = new _Struct2.default(_this.props.children);
    _this.state = { x: 0, y: 0, z: 0 };
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
      var x = cube.by('x').map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            row = _ref2[0],
            x = _ref2[1];

        return +x;
      }).sort()[0];
      var y = cube.by('y').map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            row = _ref4[0],
            y = _ref4[1];

        return +y;
      }).sort()[0];

      return { x: x, y: y };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        Cube$,
        null,
        this.struct.by('z').map(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              cube = _ref6[0],
              z = _ref6[1];

          var mins = _this2.mins(cube);
          var coords = Object.assign({}, _this2.state, {
            row: _this2.state.y - mins.y + 1,
            col: _this2.state.x - mins.x + 1
          });

          return _react2.default.createElement(
            _Layer2.default,
            {
              key: 'z:' + z,
              z: z,
              coords: coords
            },
            cube.map(function (Face, x, y, z) {
              return _react2.default.cloneElement(Face, {
                key: 'x:' + x + '/y:' + y + '/z:' + z,
                row: y - mins.y + 1,
                col: x - mins.x + 1
              });
            })
          );
        })
      );
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
        this.setState(coords);
      }
    }
  }, {
    key: 'has',
    value: function has(coords) {
      coords = this._coords(coords);

      return !!this.struct.get(coords).length;
    }
  }, {
    key: '_coords',
    value: function _coords(coords) {
      if (typeof coords === 'string') {
        switch (coords.toUpperCase()) {
          case 'LEFT':
            coords = { x: this.state.x - 1 };break;
          case 'RIGHT':
            coords = { x: this.state.x + 1 };break;
          case 'UP':
            coords = { y: this.state.y - 1 };break;
          case 'DOWN':
            coords = { y: this.state.y + 1 };break;
          case 'IN':
            coords = { z: this.state.z - 1 };break;
          case 'OUT':
            coords = { z: this.state.z + 1 };break;
          default:
            coords = this.state;
        }
      } else if (typeof coords === 'function') {
        coords = coords(Object.assign({}, this.state));
      }

      return Object.assign({}, this.state, coords);
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
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(9);

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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactCssVars = __webpack_require__(2);

var _reactCssVars2 = _interopRequireDefault(_reactCssVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layer$ = (0, _reactCssVars2.default)({
  tag: 'div',
  className: 'Layer',
  displayName: 'Layer'
}, function (props, $) {
  $.attrs.set('react-cube-nav', '');

  $.classes.remove('current');
  $.classes.remove('in');
  $.classes.remove('out');props.dir === 0 && $.classes.add('current');props.dir > 0 && $.classes.add('out');props.dir < 0 && $.classes.add('in');

  return {
    LayerRow: function LayerRow(props) {
      return props.coords.row;
    },
    LayerCol: function LayerCol(props) {
      return props.coords.col;
    }
  };
});

var Layer = function (_Component) {
  _inherits(Layer, _Component);

  function Layer() {
    _classCallCheck(this, Layer);

    return _possibleConstructorReturn(this, (Layer.__proto__ || Object.getPrototypeOf(Layer)).apply(this, arguments));
  }

  _createClass(Layer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var dir = 0;+this.props.z > +this.props.coords.z && (dir = 1);+this.props.z < +this.props.coords.z && (dir = -1);

      return _react2.default.createElement(
        Layer$,
        {
          z: this.props.z,
          coords: this.props.coords,
          dir: dir
        },
        this.props.children.map(function (Face) {
          return _react2.default.cloneElement(Face, {
            current: +Face.props.x === +_this2.props.coords.x && +Face.props.y === +_this2.props.coords.y
          });
        })
      );
    }
  }]);

  return Layer;
}(_react.Component);

exports.default = Layer;

/***/ })
/******/ ]);
});