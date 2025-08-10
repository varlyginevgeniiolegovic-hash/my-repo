/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/my-repo/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 72);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 1 */
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 2 */
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 44);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 3 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ 74),
    getValue = __webpack_require__(/*! ./_getValue */ 80);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 4 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 5 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 6 */
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ 43),
    isLength = __webpack_require__(/*! ./isLength */ 28);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 7 */
/*!***************************************************!*\
  !*** ./app/scripts/prototypo.js/utils/generic.js ***!
  \***************************************************/
/*! exports provided: constantOrFormula, createContour, memoizeSplit, transformByName, changeTransformOrigin, transformNode, transformGlyph, glyphBoundingBox */
/*! exports used: constantOrFormula, createContour, memoizeSplit, transformGlyph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["a"] = constantOrFormula;
/* harmony export (immutable) */ __webpack_exports__["b"] = createContour;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return memoizeSplit; });
/* unused harmony export transformByName */
/* unused harmony export changeTransformOrigin */
/* unused harmony export transformNode */
/* harmony export (immutable) */ __webpack_exports__["d"] = transformGlyph;
/* unused harmony export glyphBoundingBox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(/*! ./linear */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__precursor_Path__ = __webpack_require__(/*! ../precursor/Path */ 58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__precursor_Formula__ = __webpack_require__(/*! ../precursor/Formula */ 69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__precursor_Constant__ = __webpack_require__(/*! ../precursor/Constant */ 176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_memoize_immutable__ = __webpack_require__(/*! memoize-immutable */ 40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_memoize_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_memoize_immutable__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





function constantOrFormula(source, cursor) {
  if (_typeof(source) === 'object' && source !== null && source._operation) {
    // eslint-disable-line no-underscore-dangle, max-len
    return new __WEBPACK_IMPORTED_MODULE_2__precursor_Formula__["a" /* default */](source, cursor);
  }
  return new __WEBPACK_IMPORTED_MODULE_3__precursor_Constant__["a" /* default */](source, cursor);
}
function createContour(source, i) {
  if (source.skeleton && source.closed) {
    return new __WEBPACK_IMPORTED_MODULE_1__precursor_Path__["a" /* ClosedSkeletonPath */](source, i);
  } else if (source.skeleton) {
    return new __WEBPACK_IMPORTED_MODULE_1__precursor_Path__["c" /* SkeletonPath */](source, i);
  }
  return new __WEBPACK_IMPORTED_MODULE_1__precursor_Path__["b" /* SimplePath */](source, i);
}
function fastSplit(string) {
  return string.split('.');
}
var memoizeSplit = __WEBPACK_IMPORTED_MODULE_4_memoize_immutable___default()(fastSplit, {
  cache: new Map()
});
var transformByName = {
  skewX: function skewX(node, deg) {
    var center = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      x: 0,
      y: 0
    };
    var theta = deg;
    var skew = [1, Math.tan(theta), 0, 1, 0, 0];
    var matrix = changeTransformOrigin(center, skew);
    return Object(__WEBPACK_IMPORTED_MODULE_0__linear__["h" /* transform2D */])(matrix, node);
  },
  skewY: function skewY(node, deg) {
    var center = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      x: 0,
      y: 0
    };
    var theta = deg;
    var skew = [1, 0, Math.tan(theta), 1, 0, 0];
    var matrix = changeTransformOrigin(center, skew);
    return Object(__WEBPACK_IMPORTED_MODULE_0__linear__["h" /* transform2D */])(matrix, node);
  },
  rotate: function rotate(node, deg) {
    var center = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      x: 0,
      y: 0
    };
    var theta = deg;
    var rotate = [Math.cos(theta), -Math.sin(theta), Math.sin(theta), Math.cos(theta), 0, 0];
    var matrix = changeTransformOrigin(center, rotate);
    return Object(__WEBPACK_IMPORTED_MODULE_0__linear__["h" /* transform2D */])(matrix, node);
  },
  translateX: function translateX(node, offset) {
    var translate = [1, 0, 0, 1, offset, 0];
    return Object(__WEBPACK_IMPORTED_MODULE_0__linear__["h" /* transform2D */])(translate, node);
  },
  translateY: function translateY(node, offset) {
    var translate = [1, 0, 0, 1, 0, offset];
    return Object(__WEBPACK_IMPORTED_MODULE_0__linear__["h" /* transform2D */])(translate, node);
  },
  scaleX: function scaleX(node, scale) {
    var center = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      x: 0,
      y: 0
    };
    var scaleMatrix = [scale, 0, 0, 1, 0, 0];
    var matrix = changeTransformOrigin(center, scaleMatrix);
    return Object(__WEBPACK_IMPORTED_MODULE_0__linear__["h" /* transform2D */])(matrix, node);
  },
  scaleY: function scaleY(node, scale) {
    var center = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      x: 0,
      y: 0
    };
    var scaleMatrix = [1, 0, 0, scale, 0, 0];
    var matrix = changeTransformOrigin(center, scaleMatrix);
    return Object(__WEBPACK_IMPORTED_MODULE_0__linear__["h" /* transform2D */])(matrix, node);
  }
};
function changeTransformOrigin(origin, transform) {
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var preTransform = [z, 0, 0, z, -origin.x, -origin.y];
  var postTransform = [z, 0, 0, z, origin.x, origin.y];
  return Object(__WEBPACK_IMPORTED_MODULE_0__linear__["d" /* matrixMul */])(Object(__WEBPACK_IMPORTED_MODULE_0__linear__["d" /* matrixMul */])(preTransform, transform), postTransform);
}

/* eslint-disable */
function transformNode(node, transforms, origin) {
  for (var i = 0; i < transforms.length; i++) {
    var _transforms$i = _slicedToArray(transforms[i], 2),
      name = _transforms$i[0],
      param = _transforms$i[1];
    exeTransformOnNode(name, node, param, origin);
    node.addedTransform.push({
      name: name,
      param: param
    });
    if (node.handleIn) {
      exeTransformOnNode(name, node.handleIn, param, origin);
    }
    if (node.handleOut) {
      exeTransformOnNode(name, node.handleOut, param, origin);
    }
  }
}
function transformGlyph(opDone, transformTuples) {
  for (var i = 0; i < opDone.contours.length; i++) {
    var contour = opDone.contours[i];
    for (var j = 0; j < contour.nodes.length; j++) {
      var node = contour.nodes[j];
      node.addedTransform = []; // eslint-disable-line no-param-reassign
      if (node.expandedTo) {
        node.expandedTo[0].addedTransform = []; // eslint-disable-line no-param-reassign
        node.expandedTo[1].addedTransform = []; // eslint-disable-line no-param-reassign
      }
      var transforms = [].concat(_toConsumableArray(transformTuples), [[contour.transforms || [], contour.transformOrigin]]);
      for (var k = 0; k < transforms.length; k++) {
        var _transforms$k = _slicedToArray(transforms[k], 2),
          transform = _transforms$k[0],
          origin = _transforms$k[1];
        if (node.expandedTo) {
          transformNode(node.expandedTo[0], transform, origin);
          transformNode(node.expandedTo[1], transform, origin);
          transformNode(node, transform, origin);
        } else {
          transformNode(node, transform, origin);
        }
      }
    }
  }
}
/* eslint-enable */

function exeTransformOnNode(name, node, param, origin) {
  var _transformByName$name = transformByName[name](node, param, origin),
    x = _transformByName$name.x,
    y = _transformByName$name.y;
  var _transformByName$name2 = transformByName[name]({
      x: node.xBase,
      y: node.yBase
    }, param, origin),
    xBase = _transformByName$name2.x,
    yBase = _transformByName$name2.y;
  node.x = Math.round(x); // eslint-disable-line no-param-reassign
  node.y = Math.round(y); // eslint-disable-line no-param-reassign
  node.xBase = Math.round(xBase); // eslint-disable-line no-param-reassign
  node.yBase = Math.round(yBase); // eslint-disable-line no-param-reassign
}
function glyphBoundingBox(glyph) {
  var minX = Infinity;
  var maxX = -Infinity;
  var minY = Infinity;
  var maxY = -Infinity;
  glyph.otContours.forEach(function (contour) {
    contour.forEach(function (bezier) {
      bezier.forEach(function (node) {
        minX = Math.min(node.x, minX);
        maxX = Math.max(node.x, maxX);
        minY = Math.min(node.y, minY);
        maxY = Math.max(node.y, maxY);
      });
    });
  });
  return [{
    x: minX,
    y: minY
  }, {
    x: maxX,
    y: maxY
  }];
}
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(constantOrFormula, "constantOrFormula", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(createContour, "createContour", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(fastSplit, "fastSplit", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(memoizeSplit, "memoizeSplit", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(transformByName, "transformByName", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(changeTransformOrigin, "changeTransformOrigin", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(transformNode, "transformNode", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(transformGlyph, "transformGlyph", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(exeTransformOnNode, "exeTransformOnNode", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(glyphBoundingBox, "glyphBoundingBox", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(_toConsumableArray, "_toConsumableArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(_nonIterableSpread, "_nonIterableSpread", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(_iterableToArray, "_iterableToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(_arrayWithoutHoles, "_arrayWithoutHoles", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(_slicedToArray, "_slicedToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(_nonIterableRest, "_nonIterableRest", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(_unsupportedIterableToArray, "_unsupportedIterableToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(_arrayLikeToArray, "_arrayLikeToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(_iterableToArrayLimit, "_iterableToArrayLimit", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(_arrayWithHoles, "_arrayWithHoles", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(_typeof, "_typeof", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(__signature__, "__signature__", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(constantOrFormula, "constantOrFormula", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(createContour, "createContour", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(fastSplit, "fastSplit", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(memoizeSplit, "memoizeSplit", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(transformByName, "transformByName", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(changeTransformOrigin, "changeTransformOrigin", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(transformNode, "transformNode", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(transformGlyph, "transformGlyph", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(exeTransformOnNode, "exeTransformOnNode", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
  reactHotLoader.register(glyphBoundingBox, "glyphBoundingBox", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/generic.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ 0)(module)))

/***/ }),
/* 8 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 9),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ 76),
    objectToString = __webpack_require__(/*! ./_objectToString */ 77);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 9 */
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ 2);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 10 */
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ 83),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ 89),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 6);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 11 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ 93),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ 135),
    identity = __webpack_require__(/*! ./identity */ 22),
    isArray = __webpack_require__(/*! ./isArray */ 1),
    property = __webpack_require__(/*! ./property */ 144);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 12 */
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ 21);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 13 */
/*!***************************************!*\
  !*** ./node_modules/lodash/forOwn.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ 26),
    castFunction = __webpack_require__(/*! ./_castFunction */ 147);

/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn(object, iteratee) {
  return object && baseForOwn(object, castFunction(iteratee));
}

module.exports = forOwn;


/***/ }),
/* 14 */
/*!******************************************!*\
  !*** ./node_modules/lodash/mapValues.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 41),
    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ 26),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 11);

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),
/* 15 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 16 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ 95),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ 96),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ 97),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ 98),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ 99);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 17 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ 18);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 18 */
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 19 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 3);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 20 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ 113);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 21 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 8),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 5);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 22 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 23 */
/*!**************************************************!*\
  !*** ./app/scripts/prototypo.js/utils/linear.js ***!
  \**************************************************/
/*! exports provided: transform2D, matrixMul, dot2D, add2D, subtract2D, mulScalar2D, arcToCubicBezier, round2D, distance2D, normalize2D */
/*! exports used: add2D, distance2D, dot2D, matrixMul, mulScalar2D, round2D, subtract2D, transform2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["h"] = transform2D;
/* harmony export (immutable) */ __webpack_exports__["d"] = matrixMul;
/* harmony export (immutable) */ __webpack_exports__["c"] = dot2D;
/* harmony export (immutable) */ __webpack_exports__["a"] = add2D;
/* harmony export (immutable) */ __webpack_exports__["g"] = subtract2D;
/* harmony export (immutable) */ __webpack_exports__["e"] = mulScalar2D;
/* unused harmony export arcToCubicBezier */
/* harmony export (immutable) */ __webpack_exports__["f"] = round2D;
/* harmony export (immutable) */ __webpack_exports__["b"] = distance2D;
/* unused harmony export normalize2D */
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
function transform2D(viewMatrix, p) {
  var _viewMatrix = _slicedToArray(viewMatrix, 6),
    a = _viewMatrix[0],
    b = _viewMatrix[1],
    c = _viewMatrix[2],
    d = _viewMatrix[3],
    tx = _viewMatrix[4],
    ty = _viewMatrix[5];
  return {
    x: a * p.x + b * p.y + tx,
    y: c * p.x + d * p.y + ty
  };
}
function matrixMul(b, a) {
  var _a = _slicedToArray(a, 6),
    aa = _a[0],
    ab = _a[1],
    ac = _a[2],
    ad = _a[3],
    atx = _a[4],
    aty = _a[5];
  var _b = _slicedToArray(b, 6),
    ba = _b[0],
    bb = _b[1],
    bc = _b[2],
    bd = _b[3],
    btx = _b[4],
    bty = _b[5];
  return [aa * ba + ab * bc, aa * bb + ab * bd, ac * ba + ad * bc, ac * bb + ad * bd, aa * btx + ab * bty + atx, ac * btx + ad * bty + aty];
}
function dot2D(v1, v2) {
  return v1.x * v2.x + v1.y * v2.y;
}
function add2D(v1, v2) {
  return {
    x: v1.x + v2.x,
    y: v1.y + v2.y
  };
}
function subtract2D(v1, v2) {
  return {
    x: v1.x - v2.x,
    y: v1.y - v2.y
  };
}
function mulScalar2D(scalar, v) {
  return {
    x: scalar * v.x,
    y: scalar * v.y
  };
}
function parametricAngle(lambda, a, b) {
  return Math.atan2(Math.sin(lambda) / b, Math.cos(lambda) / a);
}
function arcToCubicBezier(a, b, t1, t2) {
  var major = a > b ? a : b;
  var minor = a > b ? b : a;
  var firstAngle = Math.PI * 2 * t1;
  var secondAngle = Math.PI * 2 * t2;
  var firstPoint = {
    x: major * Math.cos(firstAngle),
    y: minor * Math.sin(firstAngle)
  };
  var secondPoint = {
    x: major * Math.cos(secondAngle),
    y: minor * Math.sin(secondAngle)
  };
  var eta1 = parametricAngle(firstAngle, a, b);
  var eta2 = parametricAngle(secondAngle, a, b);
  var EPrime1 = {
    x: -major * Math.sin(eta1),
    y: minor * Math.cos(eta1)
  };
  var EPrime2 = {
    x: -major * Math.sin(eta2),
    y: minor * Math.cos(eta2)
  };
  var alpha = Math.sin(eta2 - eta1) * (Math.sqrt(4 + 3 * Math.pow(Math.tan((eta2 - eta1) / 2), 2)) - 1) / 3;
  return [firstPoint, add2D(firstPoint, mulScalar2D(alpha, EPrime1)), subtract2D(secondPoint, mulScalar2D(alpha, EPrime2)), secondPoint];
}
function round2D(a) {
  return {
    x: Math.round(a.x),
    y: Math.round(a.y)
  };
}
function distance2D(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
function normalize2D(a) {
  return mulScalar2D(1 / distance2D({
    x: 0,
    y: 0
  }, a), a);
}
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(transform2D, "transform2D", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(matrixMul, "matrixMul", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(dot2D, "dot2D", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(add2D, "add2D", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(subtract2D, "subtract2D", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(mulScalar2D, "mulScalar2D", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(parametricAngle, "parametricAngle", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(arcToCubicBezier, "arcToCubicBezier", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(round2D, "round2D", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(distance2D, "distance2D", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(normalize2D, "normalize2D", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(_slicedToArray, "_slicedToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(_nonIterableRest, "_nonIterableRest", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(_unsupportedIterableToArray, "_unsupportedIterableToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(_arrayLikeToArray, "_arrayLikeToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(_iterableToArrayLimit, "_iterableToArrayLimit", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(_arrayWithHoles, "_arrayWithHoles", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(__signature__, "__signature__", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(transform2D, "transform2D", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(matrixMul, "matrixMul", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(dot2D, "dot2D", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(add2D, "add2D", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(subtract2D, "subtract2D", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(mulScalar2D, "mulScalar2D", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(parametricAngle, "parametricAngle", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(arcToCubicBezier, "arcToCubicBezier", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(round2D, "round2D", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(distance2D, "distance2D", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
  reactHotLoader.register(normalize2D, "normalize2D", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/linear.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ 0)(module)))

/***/ }),
/* 24 */
/*!***************************************!*\
  !*** ./node_modules/lodash/reduce.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ 148),
    baseEach = __webpack_require__(/*! ./_baseEach */ 59),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 11),
    baseReduce = __webpack_require__(/*! ./_baseReduce */ 150),
    isArray = __webpack_require__(/*! ./isArray */ 1);

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

module.exports = reduce;


/***/ }),
/* 25 */
/*!*************************************!*\
  !*** ./node_modules/lodash/find.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(/*! ./_createFind */ 151),
    findIndex = __webpack_require__(/*! ./findIndex */ 152);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),
/* 26 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ 81),
    keys = __webpack_require__(/*! ./keys */ 10);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 27 */
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ 85),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 5);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 28 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 29 */
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 3),
    root = __webpack_require__(/*! ./_root */ 2);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 30 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ 105),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ 112),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ 114),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ 115),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ 116);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 31 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ 30),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ 118),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ 119);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 32 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 33 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 34 */
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ 57);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 35 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ 1),
    isKey = __webpack_require__(/*! ./_isKey */ 36),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ 136),
    toString = __webpack_require__(/*! ./toString */ 139);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 36 */
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ 1),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 21);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 37 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 38 */
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ 153);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 39 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/difference.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(/*! ./_baseDifference */ 160),
    baseFlatten = __webpack_require__(/*! ./_baseFlatten */ 62),
    baseRest = __webpack_require__(/*! ./_baseRest */ 164),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ 171);

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


/***/ }),
/* 40 */
/*!******************************************************!*\
  !*** ./node_modules/memoize-immutable/dist/index.js ***!
  \******************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tuplemap = __webpack_require__(/*! tuplemap */ 177);

var _tuplemap2 = _interopRequireDefault(_tuplemap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof WeakMap === 'undefined' || typeof Map === 'undefined') {
  throw new Error('This lib requires an implementation of WeakMap and Map');
} /* An efficient memoizer for functions that only receive immutable arguments.
   * Ideal with Redux and similar environments.
   */


function memoize(fn, options) {
  var cache = options && options.cache || new _tuplemap2.default(options);

  var memoized = void 0;

  // Memoizer for functions that accept a single argument
  if (/^\[object (Weak|LRU|NamedTuple)?Map\]$/.test(cache.toString())) {
    memoized = function memoized(arg) {
      if (!cache.has(arg)) {
        var result = fn.call(this, arg);
        cache.set(arg, result);
        return result;
      }
      return cache.get(arg);
    };
  }

  // Memoizer for functions that accept multiple arguments
  else {
      memoized = function memoized() {
        if (!cache.has(arguments)) {
          var result = fn.apply(this, arguments);
          cache.set(arguments, result);
          return result;
        }
        return cache.get(arguments);
      };
    }

  // Give a meaningful displayName to the memoized function
  if (fn.name) {
    memoized.displayName = fn.name + 'Memoized';
  }

  return memoized;
}

exports.default = memoize;
module.exports = exports['default'];

//# sourceMappingURL=index.js.map

/***/ }),
/* 41 */
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ 42);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 42 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 3);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 43 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 8),
    isObject = __webpack_require__(/*! ./isObject */ 4);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 44 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ 75)))

/***/ }),
/* 45 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 46 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ 2),
    stubFalse = __webpack_require__(/*! ./stubFalse */ 86);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/module.js */ 47)(module)))

/***/ }),
/* 47 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 48 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ 87),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ 49),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ 88);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 49 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 50 */
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ 16),
    stackClear = __webpack_require__(/*! ./_stackClear */ 100),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ 101),
    stackGet = __webpack_require__(/*! ./_stackGet */ 102),
    stackHas = __webpack_require__(/*! ./_stackHas */ 103),
    stackSet = __webpack_require__(/*! ./_stackSet */ 104);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 51 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ 117),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 5);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 52 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ 31),
    arraySome = __webpack_require__(/*! ./_arraySome */ 120),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ 32);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 53 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 54 */
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 3),
    root = __webpack_require__(/*! ./_root */ 2);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 55 */
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ 4);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 56 */
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 57 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ 35),
    toKey = __webpack_require__(/*! ./_toKey */ 12);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 58 */
/*!****************************************************!*\
  !*** ./app/scripts/prototypo.js/precursor/Path.js ***!
  \****************************************************/
/*! exports provided: SkeletonPath, ClosedSkeletonPath, SimplePath */
/*! exports used: ClosedSkeletonPath, SimplePath, SkeletonPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SkeletonPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClosedSkeletonPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SimplePath; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_reduce__ = __webpack_require__(/*! lodash/reduce */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_find__ = __webpack_require__(/*! lodash/find */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_flatMap__ = __webpack_require__(/*! lodash/flatMap */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_flatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_flatMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_take__ = __webpack_require__(/*! lodash/take */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_difference__ = __webpack_require__(/*! lodash/difference */ 39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_difference___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_difference__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_linear__ = __webpack_require__(/*! ../utils/linear */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_updateUtils__ = __webpack_require__(/*! ../utils/updateUtils */ 67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_generic__ = __webpack_require__(/*! ../utils/generic */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Node__ = __webpack_require__(/*! ./Node */ 68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ExpandingNode__ = __webpack_require__(/*! ./ExpandingNode */ 70);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};










var SMOOTH = 'smooth';
var LINE = 'line';
function computeHandle(dest, current, prev, next, node, prevNode, nextNode, j, params, curviness) {
  var inIntersection;
  var outIntersection;
  var prevDir = j // eslint-disable-line no-nested-ternary
  ? prevNode.dirIn === null ? prev.dirIn : prevNode.dirIn : prevNode.dirOut === null ? prev.dirOut : prevNode.dirOut;
  var nextDir = j // eslint-disable-line no-nested-ternary
  ? nextNode.dirOut === null ? next.dirOut : nextNode.dirOut : nextNode.dirIn === null ? next.dirIn : nextNode.dirIn;
  var dirToPrev = (j ? current.dirOut || node.dirOut : current.dirIn || node.dirIn) || 0;
  var dirToNext = (j ? current.dirIn || node.dirIn : current.dirOut || node.dirOut) || 0;
  var tensionIn = j ? node.tensionOut : node.tensionIn;
  var tensionOut = j ? node.tensionIn : node.tensionOut;
  var typeIn = j ? node.typeOut : node.typeIn;
  var typeOut = j ? node.typeIn : node.typeOut;
  if (typeIn === SMOOTH && typeOut === LINE) {
    if (nextNode.expandedTo) {
      dirToPrev = Object(__WEBPACK_IMPORTED_MODULE_6__utils_updateUtils__["lineAngle"])(current, nextNode.expandedTo[j]);
    } else {
      dirToPrev = Object(__WEBPACK_IMPORTED_MODULE_6__utils_updateUtils__["lineAngle"])(current, nextNode);
    }
  } else if (typeOut === SMOOTH && typeIn === LINE) {
    if (prevNode.expandedTo) {
      dirToNext = Object(__WEBPACK_IMPORTED_MODULE_6__utils_updateUtils__["lineAngle"])(current, prevNode.expandedTo[j]);
    } else {
      dirToNext = Object(__WEBPACK_IMPORTED_MODULE_6__utils_updateUtils__["lineAngle"])(current, prevNode);
    }
  }
  if ((Math.PI - Math.abs(Math.abs(prevDir - dirToPrev) - Math.PI)) % Math.PI === 0) {
    var unitDir = {
      x: Math.cos(dirToPrev),
      y: Math.sin(dirToPrev)
    };
    inIntersection = Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["a" /* add2D */])(Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["e" /* mulScalar2D */])(Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["c" /* dot2D */])(unitDir, Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["g" /* subtract2D */])(prev, current)) / 2, unitDir), current);
  } else {
    inIntersection = Object(__WEBPACK_IMPORTED_MODULE_6__utils_updateUtils__["rayRayIntersection"])({
      x: prev.x,
      y: prev.y
    }, prevDir, {
      x: current.x,
      y: current.y
    }, dirToPrev);
  }
  if ((Math.PI - Math.abs(Math.abs(nextDir - dirToNext) - Math.PI)) % Math.PI === 0) {
    var _unitDir = {
      x: Math.cos(dirToNext),
      y: Math.sin(dirToNext)
    };
    outIntersection = Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["a" /* add2D */])(Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["e" /* mulScalar2D */])(Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["c" /* dot2D */])(_unitDir, Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["g" /* subtract2D */])(next, current)) / 2, _unitDir), current);
  } else {
    outIntersection = Object(__WEBPACK_IMPORTED_MODULE_6__utils_updateUtils__["rayRayIntersection"])({
      x: next.x,
      y: next.y
    }, nextDir, {
      x: current.x,
      y: current.y
    }, dirToNext);
  }
  var untensionedInVector = Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["g" /* subtract2D */])(inIntersection, current);
  var untensionOutVector = Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["g" /* subtract2D */])(outIntersection, current);
  var inVector = Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["e" /* mulScalar2D */])(curviness * tensionIn, untensionedInVector);
  var outVector = Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["e" /* mulScalar2D */])(curviness * tensionOut, untensionOutVector);
  var outBase = Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["f" /* round2D */])(Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["a" /* add2D */])(current, outVector));
  var inBase = Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["f" /* round2D */])(Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["a" /* add2D */])(current, inVector));
  dest.baseTensionIn = Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["b" /* distance2D */])(inVector, {
    x: 0,
    y: 0
  }) / (Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["b" /* distance2D */])(untensionedInVector, {
    x: 0,
    y: 0
  }) * 0.6);
  dest.baseTensionOut = Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["b" /* distance2D */])(outVector, {
    x: 0,
    y: 0
  }) / (Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["b" /* distance2D */])(untensionOutVector, {
    x: 0,
    y: 0
  }) * 0.6);
  if (inVector.x === undefined || inVector.y === undefined || outVector.x === undefined || outVector.y === undefined || Number.isNaN(inVector.x) || Number.isNaN(inVector.y) || Number.isNaN(outVector.x) || Number.isNaN(outVector.y)) {
    console.error("handle creation went south for cursor:".concat(dest.cursor)); // eslint-disable-line no-console
  }
  if (node.expandedTo) {
    var outMod = {
      x: params["".concat(node.nodeAddress, "expandedTo.").concat(j, ".out.x")] || 0,
      y: params["".concat(node.nodeAddress, "expandedTo.").concat(j, ".out.y")] || 0
    };
    var inMod = {
      x: params["".concat(node.nodeAddress, "expandedTo.").concat(j, ".in.x")] || 0,
      y: params["".concat(node.nodeAddress, "expandedTo.").concat(j, ".in.y")] || 0
    };
    inVector = Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["a" /* add2D */])(inVector, inMod);
    outVector = Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["a" /* add2D */])(outVector, outMod);
  } else {
    var _outMod = {
      x: params["".concat(node.nodeAddress, "out.x")] || 0,
      y: params["".concat(node.nodeAddress, "out.y")] || 0
    };
    var _inMod = {
      x: params["".concat(node.nodeAddress, "in.x")] || 0,
      y: params["".concat(node.nodeAddress, "in.y")] || 0
    };
    inVector = Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["a" /* add2D */])(inVector, _inMod);
    outVector = Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["a" /* add2D */])(outVector, _outMod);
  }

  /* eslint-disable no-param-reassign */
  dest.baseTypeIn = node.typeIn;
  dest.baseTypeOut = node.typeOut;
  dest.dirOut = dirToNext;
  dest.dirIn = dirToPrev;
  dest.tensionIn = Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["b" /* distance2D */])(inVector, {
    x: 0,
    y: 0
  }) / (Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["b" /* distance2D */])(untensionedInVector, {
    x: 0,
    y: 0
  }) * 0.6);
  dest.tensionOut = Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["b" /* distance2D */])(outVector, {
    x: 0,
    y: 0
  }) / (Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["b" /* distance2D */])(untensionOutVector, {
    x: 0,
    y: 0
  }) * 0.6);
  dest.handleIn = Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["f" /* round2D */])(Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["a" /* add2D */])(current, inVector));
  dest.handleOut = Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["f" /* round2D */])(Object(__WEBPACK_IMPORTED_MODULE_5__utils_linear__["a" /* add2D */])(current, outVector));
  dest.handleIn.xBase = inBase.x;
  dest.handleIn.yBase = inBase.y;
  dest.handleOut.xBase = outBase.x;
  dest.handleOut.yBase = outBase.y;
  /* eslint-enable no-param-reassign */
}
var SolvablePath = /*#__PURE__*/function () {
  function SolvablePath(i) {
    _classCallCheck(this, SolvablePath);
    this.cursor = "contours.".concat(i, ".");
  }
  return _createClass(SolvablePath, [{
    key: "solveOperationOrder",
    value: function solveOperationOrder(glyph, operationOrder) {
      var _this = this;
      return ["".concat(this.cursor, "closed"), "".concat(this.cursor, "skeleton")].concat(_toConsumableArray(__WEBPACK_IMPORTED_MODULE_0_lodash_reduce___default()([].concat(_toConsumableArray(this.nodes), [this.transforms, this.transformOrigin]), function (result, node) {
        result.push.apply(result, _toConsumableArray(node.solveOperationOrder(glyph, [].concat(_toConsumableArray(operationOrder), _toConsumableArray(result)))));
        var allOperation = [].concat(_toConsumableArray(operationOrder), _toConsumableArray(result));
        if (_this.isReadyForHandles(allOperation) && !__WEBPACK_IMPORTED_MODULE_1_lodash_find___default()(allOperation, function (op) {
          return op.action === 'handle' && op.cursor === _this.cursor.substring(0, _this.cursor.length - 1);
        })) {
          result.push({
            action: 'handle',
            cursor: _this.cursor.substring(0, _this.cursor.length - 1)
          });
        }
        return result;
      }, [])));
    }
  }, {
    key: "analyzeDependency",
    value: function analyzeDependency(glyph, graph) {
      this.nodes.forEach(function (node) {
        node.analyzeDependency(glyph, graph);
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value:
    // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }], [{
    key: "correctValues",
    value: function correctValues(_ref) {
      var nodes = _ref.nodes,
        closed = _ref.closed,
        skeleton = _ref.skeleton;
      /* eslint-disable no-param-reassign */
      var results = {};
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        nodes[i].nodeAddress = node.nodeAddress;
        nodes[i].x = Math.round(node.x);
        nodes[i].y = Math.round(node.y);
        nodes[i].xBase = Math.round(node.x);
        nodes[i].yBase = Math.round(node.y);
        nodes[i].typeIn = node.typeIn || node.type;
        nodes[i].typeOut = node.typeOut || node.type;
        if (node.typeOut === SMOOTH && node.dirOut === null) {
          nodes[i].dirOut = nodes[i].dirIn;
        } else if (node.typeIn === SMOOTH && node.dirIn === null) {
          nodes[i].dirIn = nodes[i].dirOut;
        }
        if (node.expand) {
          if (i === 0 && !closed) {
            nodes[i].typeIn = LINE;
          } else if (i === nodes.length - 1 && !closed) {
            nodes[i].typeOut = LINE;
          }
          var dirIn = node.dirIn;
          var dirOut = node.dirOut;
          nodes[i].expand.angle = node.expand.angle;
          nodes[i].dirIn = dirIn === null || dirIn === undefined ? (nodes[i].expand.angle + Math.PI / 2) % (2 * Math.PI) : dirIn;
          nodes[i].dirOut = dirOut === null || dirOut === undefined ? (nodes[i].expand.angle + Math.PI / 2) % (2 * Math.PI) : dirOut;
        } else if (node.expandedTo) {
          if (i === 0 && !closed) {
            node.expandedTo[0].typeIn = LINE;
            node.expandedTo[1].typeOut = LINE;
          } else if (i === nodes.length - 1 && !closed) {
            node.expandedTo[1].typeIn = LINE;
            node.expandedTo[0].typeOut = LINE;
          }
          var dirIn0 = node.expandedTo[0].dirIn;
          var dirOut0 = node.expandedTo[0].dirOut;
          var dirIn1 = node.expandedTo[1].dirIn;
          var dirOut1 = node.expandedTo[1].dirOut;
          node.expandedTo[0].dirIn = dirIn0;
          node.expandedTo[0].dirOut = dirOut0;
          node.expandedTo[1].dirIn = dirIn1;
          node.expandedTo[1].dirOut = dirOut1;
        } else {
          nodes[i].dirIn = node.dirIn || 0;
          nodes[i].dirOut = node.dirOut || 0;
        }
        if (node.typeOut === LINE) {
          nodes[i].tensionOut = 0;
        }
        if (node.typeIn === LINE) {
          nodes[i].tensionIn = 0;
        }
        nodes[i].tensionIn = node.tensionIn === undefined ? 1 : node.tensionIn;
        nodes[i].tensionOut = node.tensionOut === undefined ? 1 : node.tensionOut;
      }
      /* eslint-enable no-param-reassign */

      return results;
    }
  }]);
}();
var SkeletonPath = /*#__PURE__*/function (_SolvablePath) {
  function SkeletonPath(source, i) {
    var _this2;
    _classCallCheck(this, SkeletonPath);
    _this2 = _callSuper(this, SkeletonPath, [i]);
    _this2.nodes = source.point.map(function (point, j) {
      return new __WEBPACK_IMPORTED_MODULE_9__ExpandingNode__["a" /* default */](point, i, j);
    });
    _this2.closed = Object(__WEBPACK_IMPORTED_MODULE_7__utils_generic__["a" /* constantOrFormula */])(false, "".concat(_this2.cursor, "closed"));
    _this2.skeleton = Object(__WEBPACK_IMPORTED_MODULE_7__utils_generic__["a" /* constantOrFormula */])(true, "".concat(_this2.cursor, "skeleton"));
    _this2.transforms = source.transforms === undefined ? Object(__WEBPACK_IMPORTED_MODULE_7__utils_generic__["a" /* constantOrFormula */])(null, "".concat(_this2.cursor, "transforms")) : Object(__WEBPACK_IMPORTED_MODULE_7__utils_generic__["a" /* constantOrFormula */])(source.transforms, "".concat(_this2.cursor, "transforms"));
    _this2.transformOrigin = source.transformOrigin ? Object(__WEBPACK_IMPORTED_MODULE_7__utils_generic__["a" /* constantOrFormula */])(source.transformOrigin, "".concat(_this2.cursor, "transformOrigin")) : Object(__WEBPACK_IMPORTED_MODULE_7__utils_generic__["a" /* constantOrFormula */])(null, "".concat(_this2.cursor, "transformOrigin"));
    return _this2;
  }
  _inherits(SkeletonPath, _SolvablePath);
  return _createClass(SkeletonPath, [{
    key: "isReadyForHandles",
    value: function isReadyForHandles(ops) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ops.length - 1;
      var cursorToLook = __WEBPACK_IMPORTED_MODULE_2_lodash_flatMap___default()(this.nodes, function (node) {
        if (node.expanding) {
          return ["".concat(node.cursor, "expand.width"), "".concat(node.cursor, "expand.distr"), "".concat(node.cursor, "expand.angle"), "".concat(node.cursor, "typeOut"), "".concat(node.cursor, "typeIn"), "".concat(node.cursor, "dirIn"), "".concat(node.cursor, "dirOut"), "".concat(node.cursor, "tensionIn"), "".concat(node.cursor, "tensionOut"), "".concat(node.cursor, "x"), "".concat(node.cursor, "y")];
        }
        return ["".concat(node.cursor, "expandedTo.0.x"), "".concat(node.cursor, "expandedTo.0.y"), "".concat(node.cursor, "expandedTo.1.x"), "".concat(node.cursor, "expandedTo.1.y"), "".concat(node.cursor, "dirIn"), "".concat(node.cursor, "dirOut"), "".concat(node.cursor, "tensionIn"), "".concat(node.cursor, "tensionOut")];
      });
      var done = __WEBPACK_IMPORTED_MODULE_3_lodash_take___default()(ops, index + 1);
      return __WEBPACK_IMPORTED_MODULE_4_lodash_difference___default()(done, cursorToLook).length === done.length - cursorToLook.length;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value:
    // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }], [{
    key: "createHandle",
    value: function createHandle(dest, params, curviness) {
      var nodes = dest.nodes;
      for (var k = 0; k < nodes.length; k++) {
        var node = nodes[k];
        for (var j = 0; j < node.expandedTo.length; j++) {
          var nextSecondIndex = j;
          var nextFirstIndex = k + 1 * (j ? -1 : 1);
          var prevFirstIndex = k - 1 * (j ? -1 : 1);
          var prevSecondIndex = j;
          if (nextFirstIndex > nodes.length - 1) {
            nextFirstIndex = nodes.length - 1;
            nextSecondIndex = 1;
          } else if (nextFirstIndex < 0) {
            nextFirstIndex = 0;
            nextSecondIndex = 0;
          }
          if (prevFirstIndex > nodes.length - 1) {
            prevFirstIndex = nodes.length - 1;
            prevSecondIndex = 0;
          } else if (prevFirstIndex < 0) {
            prevFirstIndex = 0;
            prevSecondIndex = 1;
          }
          var nextExpanded = nodes[nextFirstIndex].expandedTo[nextSecondIndex];
          var prevExpanded = nodes[prevFirstIndex].expandedTo[prevSecondIndex];
          var nextNode = nodes[nextFirstIndex];
          var prevNode = nodes[prevFirstIndex];
          var currentExpanded = node.expandedTo[j];
          computeHandle(dest.nodes[k].expandedTo[j], currentExpanded, prevExpanded, nextExpanded, node, prevNode, nextNode, j, params, curviness);
        }
      }
    }
  }]);
}(SolvablePath);
var ClosedSkeletonPath = /*#__PURE__*/function (_SkeletonPath) {
  function ClosedSkeletonPath(source, i) {
    var _this3;
    _classCallCheck(this, ClosedSkeletonPath);
    _this3 = _callSuper(this, ClosedSkeletonPath, [source, i]);
    _this3.closed = Object(__WEBPACK_IMPORTED_MODULE_7__utils_generic__["a" /* constantOrFormula */])(true, "".concat(_this3.cursor, "closed"));
    return _this3;
  }
  _inherits(ClosedSkeletonPath, _SkeletonPath);
  return _createClass(ClosedSkeletonPath, [{
    key: "__reactstandin__regenerateByEval",
    value:
    // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }], [{
    key: "createHandle",
    value: function createHandle(dest, params, curviness) {
      var nodes = dest.nodes;
      for (var k = 0; k < nodes.length; k++) {
        var node = nodes[k];
        for (var j = 0; j < node.expandedTo.length; j++) {
          var nextFirstIndex = k + 1 * (j ? -1 : 1) - nodes.length * Math.floor((k + 1 * (j ? -1 : 1)) / nodes.length);
          var prevFirstIndex = k - 1 * (j ? -1 : 1) - nodes.length * Math.floor((k - 1 * (j ? -1 : 1)) / nodes.length);
          var nextExpanded = nodes[nextFirstIndex].expandedTo[j];
          var prevExpanded = nodes[prevFirstIndex].expandedTo[j];
          var nextNode = nodes[nextFirstIndex];
          var prevNode = nodes[prevFirstIndex];
          var currentExpanded = node.expandedTo[j];
          computeHandle(dest.nodes[k].expandedTo[j], currentExpanded, prevExpanded, nextExpanded, node, prevNode, nextNode, j, params, curviness);
        }
      }
    }
  }]);
}(SkeletonPath);
var SimplePath = /*#__PURE__*/function (_SolvablePath2) {
  function SimplePath(source, i) {
    var _this4;
    _classCallCheck(this, SimplePath);
    _this4 = _callSuper(this, SimplePath, [i]);
    _this4.nodes = source.point.map(function (point, j) {
      return new __WEBPACK_IMPORTED_MODULE_8__Node__["a" /* default */](point, i, j);
    });
    _this4.closed = Object(__WEBPACK_IMPORTED_MODULE_7__utils_generic__["a" /* constantOrFormula */])(true, "".concat(_this4.cursor, "closed"));
    _this4.skeleton = Object(__WEBPACK_IMPORTED_MODULE_7__utils_generic__["a" /* constantOrFormula */])(false, "".concat(_this4.cursor, "skeleton"));
    _this4.exportReversed = Object(__WEBPACK_IMPORTED_MODULE_7__utils_generic__["a" /* constantOrFormula */])(source.exportReversed);
    _this4.transforms = source.transforms === undefined ? Object(__WEBPACK_IMPORTED_MODULE_7__utils_generic__["a" /* constantOrFormula */])(null, "".concat(_this4.cursor, "transforms")) : Object(__WEBPACK_IMPORTED_MODULE_7__utils_generic__["a" /* constantOrFormula */])(source.transforms, "".concat(_this4.cursor, "transforms"));
    _this4.transformOrigin = source.transformOrigin ? Object(__WEBPACK_IMPORTED_MODULE_7__utils_generic__["a" /* constantOrFormula */])(source.transformOrigin, "".concat(_this4.cursor, "transformOrigin")) : Object(__WEBPACK_IMPORTED_MODULE_7__utils_generic__["a" /* constantOrFormula */])(null, "".concat(_this4.cursor, "transformOrigin"));
    return _this4;
  }
  _inherits(SimplePath, _SolvablePath2);
  return _createClass(SimplePath, [{
    key: "isReadyForHandles",
    value: function isReadyForHandles(ops) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ops.length - 1;
      var cursorToLook = __WEBPACK_IMPORTED_MODULE_2_lodash_flatMap___default()(this.nodes, function (node) {
        return ["".concat(node.cursor, "typeOut"), "".concat(node.cursor, "typeIn"), "".concat(node.cursor, "dirIn"), "".concat(node.cursor, "dirOut"), "".concat(node.cursor, "tensionIn"), "".concat(node.cursor, "tensionOut"), "".concat(node.cursor, "x"), "".concat(node.cursor, "y")];
      });
      var done = __WEBPACK_IMPORTED_MODULE_3_lodash_take___default()(ops, index + 1);
      return __WEBPACK_IMPORTED_MODULE_4_lodash_difference___default()(done, cursorToLook).length === done.length - cursorToLook.length;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value:
    // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }], [{
    key: "createHandle",
    value: function createHandle(dest, params, curviness) {
      var nodes = dest.nodes;
      for (var k = 0; k < nodes.length; k++) {
        var node = nodes[k];
        var prevNode = nodes[k - 1 - nodes.length * Math.floor((k - 1) / nodes.length)];
        var nextNode = nodes[(k + 1) % nodes.length];
        computeHandle(dest.nodes[k], node, prevNode, nextNode, node, prevNode, nextNode, 0, params, curviness);
      }
    }
  }]);
}(SolvablePath);
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(SMOOTH, "SMOOTH", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(LINE, "LINE", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(computeHandle, "computeHandle", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(SolvablePath, "SolvablePath", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(SkeletonPath, "SkeletonPath", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(ClosedSkeletonPath, "ClosedSkeletonPath", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(SimplePath, "SimplePath", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(_callSuper, "_callSuper", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(_inherits, "_inherits", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(_typeof, "_typeof", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(_toConsumableArray, "_toConsumableArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(_nonIterableSpread, "_nonIterableSpread", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(_unsupportedIterableToArray, "_unsupportedIterableToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(_iterableToArray, "_iterableToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(_arrayWithoutHoles, "_arrayWithoutHoles", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(_arrayLikeToArray, "_arrayLikeToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(_createClass, "_createClass", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(_toPropertyKey, "_toPropertyKey", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(_toPrimitive, "_toPrimitive", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(__signature__, "__signature__", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(SMOOTH, "SMOOTH", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(LINE, "LINE", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(computeHandle, "computeHandle", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(SolvablePath, "SolvablePath", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(SkeletonPath, "SkeletonPath", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(ClosedSkeletonPath, "ClosedSkeletonPath", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
  reactHotLoader.register(SimplePath, "SimplePath", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Path.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ 0)(module)))

/***/ }),
/* 59 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ 26),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ 149);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 60 */
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 61 */
/*!****************************************!*\
  !*** ./node_modules/lodash/flatMap.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ 62),
    map = __webpack_require__(/*! ./map */ 158);

/**
 * Creates a flattened array of values by running each element in `collection`
 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
 * with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [n, n];
 * }
 *
 * _.flatMap([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */
function flatMap(collection, iteratee) {
  return baseFlatten(map(collection, iteratee), 1);
}

module.exports = flatMap;


/***/ }),
/* 62 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ 53),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ 157);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 63 */
/*!*************************************!*\
  !*** ./node_modules/lodash/take.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ 64),
    toInteger = __webpack_require__(/*! ./toInteger */ 38);

/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.take([1, 2, 3]);
 * // => [1]
 *
 * _.take([1, 2, 3], 2);
 * // => [1, 2]
 *
 * _.take([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.take([1, 2, 3], 0);
 * // => []
 */
function take(array, n, guard) {
  if (!(array && array.length)) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  return baseSlice(array, 0, n < 0 ? 0 : n);
}

module.exports = take;


/***/ }),
/* 64 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 65 */
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayIncludes.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ 161);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 66 */
/*!***************************************************!*\
  !*** ./node_modules/lodash/_arrayIncludesWith.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 67 */
/*!*******************************************************!*\
  !*** ./app/scripts/prototypo.js/utils/updateUtils.js ***!
  \*******************************************************/
/*! exports provided: approximately, lineLineIntersection, rayRayIntersection, lineAngle, onLine, pointOnCurve, getPointOnCurve, split, distance, align, getIntersectionTValue, lineCurveIntersection, log, normalize, vectorFromPoints, parseInt, makeCurveInsideSerif */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["approximately"] = approximately;
/* harmony export (immutable) */ __webpack_exports__["lineLineIntersection"] = lineLineIntersection;
/* harmony export (immutable) */ __webpack_exports__["rayRayIntersection"] = rayRayIntersection;
/* harmony export (immutable) */ __webpack_exports__["lineAngle"] = lineAngle;
/* harmony export (immutable) */ __webpack_exports__["onLine"] = onLine;
/* harmony export (immutable) */ __webpack_exports__["pointOnCurve"] = pointOnCurve;
/* harmony export (immutable) */ __webpack_exports__["getPointOnCurve"] = getPointOnCurve;
/* harmony export (immutable) */ __webpack_exports__["split"] = split;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["align"] = align;
/* harmony export (immutable) */ __webpack_exports__["getIntersectionTValue"] = getIntersectionTValue;
/* harmony export (immutable) */ __webpack_exports__["lineCurveIntersection"] = lineCurveIntersection;
/* harmony export (immutable) */ __webpack_exports__["log"] = log;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["vectorFromPoints"] = vectorFromPoints;
/* harmony export (immutable) */ __webpack_exports__["parseInt"] = parseInt;
/* harmony export (immutable) */ __webpack_exports__["makeCurveInsideSerif"] = makeCurveInsideSerif;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_linear__ = __webpack_require__(/*! ../utils/linear */ 23);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var infinityPointScale = 5000000;
var epsilon = 0.000001;
function approximately(a, b) {
  var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : epsilon;
  return Math.abs(a - b) <= precision;
}

// The following function should be useless, thanks to paper
function lineLineIntersection(p1, p2, p3, p4) {
  var x1 = p1.x;
  var y1 = p1.y;
  var x2 = p2.x;
  var y2 = p2.y;
  var x3 = p3.x;
  var y3 = p3.y;
  var x4 = p4.x;
  var y4 = p4.y;
  var d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  if (d === 0) {
    return p1;
  }
  return {
    x: ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / d,
    y: ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / d
  };
}

// Find the intersection of two rays.
// A ray is defined by a point and an angle.
function rayRayIntersection(p1, a1, p2, a2) {
  // line equations
  var a = Math.tan(a1);
  var b = Math.tan(a2);
  var c = p1.y - a * p1.x;
  var d = p2.y - b * p2.x;
  var x;
  var y;

  // When searching for lines intersection,
  // angles can be normalized to 0 < a < PI
  // This will be helpful in detecting special cases below.
  /* eslint-disable no-param-reassign */
  a1 %= Math.PI;
  if (a1 < 0) {
    a1 += Math.PI;
  }
  a2 %= Math.PI;
  if (a2 < 0) {
    a2 += Math.PI;
  }

  // no intersection
  if (a1 === a2) {
    return {
      x: p1.x + infinityPointScale * Math.cos(a1),
      y: p1.y + infinityPointScale * Math.sin(a1)
    };
  }

  // We want to round a1, a2 and PI to avoid problems with approximation
  a1 = a1.toFixed(6);
  a2 = a2.toFixed(6);
  /* eslint-enable no-param-reassign */
  var piOver2 = (Math.PI / 2).toFixed(6);

  // Optimize frequent and easy special cases.
  // Without optimization, results would be incorrect when cos(a) === 0
  if (a1 === 0) {
    y = p1.y;
  } else if (a1 === piOver2) {
    x = p1.x;
  }
  if (a2 === 0) {
    y = p2.y;
  } else if (a2 === piOver2) {
    x = p2.x;
  }

  // easiest case
  if (x !== undefined && y !== undefined) {
    return {
      x: x,
      y: y
    };
  }

  // other cases that can be optimized
  if (a1 === 0) {
    return {
      x: (y - d) / b,
      y: y
    };
  }
  if (a1 === piOver2) {
    return {
      x: x,
      y: b * x + d
    };
  }
  if (a2 === 0) {
    return {
      x: (y - c) / a,
      y: y
    };
  }
  if (a2 === piOver2) {
    return {
      x: x,
      y: a * x + c
    };
  }

  // intersection from two line equations
  // algo: http://en.wikipedia.org/wiki/Line–line_intersection#Given_the_equations_of_the_lines
  var newX = (d - c) / (a - b);
  return {
    x: newX,
    // this should work equally well with ax+c or bx+d
    y: a * newX + c
  };
}

// return the angle between two points
function lineAngle(p0, p1) {
  return Math.atan2(p1.y - p0.y, p1.x - p0.x) % (2 * Math.PI);
}
function onLine(params) {
  if (params.on[0].x === params.on[1].x && params.on[0].y === params.on[1].y) {
    return 'x' in params ? params.on[0].y : params.on[0].x;
  }
  var origin = params.on[0];
  var vector = [params.on[1].x - params.on[0].x, params.on[1].y - params.on[0].y];
  return 'x' in params ? (params.x - origin.x) / vector[0] * vector[1] + origin.y : (params.y - origin.y) / vector[1] * vector[0] + origin.x;
}
function pointOnCurve(pointHandleOut, handleOut, pointHandleIn, handleIn, distanceFromOut, inverseOrientation) {
  var linePrecision = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 3;
  var length = 0;
  var previousPoint;
  var points;
  if (inverseOrientation) {
    points = [pointHandleIn, handleIn, handleOut, pointHandleOut];
  } else {
    points = [pointHandleOut, handleOut, handleIn, pointHandleIn];
  }
  for (var i = 0; i < linePrecision; i++) {
    var point = getPointOnCurve(points, i / (linePrecision - 1));
    if (previousPoint) {
      length += distance(previousPoint.x, previousPoint.y, point.x, point.y);
    }
    previousPoint = point;
  }
  var t = length === 0 ? 0 : distanceFromOut / length;
  t = Math.max(0.001, Math.min(1, t));
  return getPointOnCurve(points, t);
}
function getPointOnCurve(points, t) {
  var inverseT = 1 - t;
  var a = inverseT * inverseT * inverseT;
  var b = inverseT * inverseT * t * 3;
  var c = inverseT * t * t * 3;
  var d = t * t * t;
  return {
    x: a * points[0].x + b * points[1].x + c * points[2].x + d * points[3].x,
    y: a * points[0].y + b * points[1].y + c * points[2].y + d * points[3].y,
    normal: lineAngle({
      x: 0,
      y: 0
    }, {
      x: (points[1].x - points[0].x) * inverseT * inverseT + 2 * (points[2].x - points[1].x) * t * inverseT + (points[3].x - points[2].x) * t * t,
      y: (points[1].y - points[0].y) * inverseT * inverseT + 2 * (points[2].y - points[1].y) * t * inverseT + (points[3].y - points[2].y) * t * t
    })
  };
}
function split(points) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var base = arguments.length > 2 ? arguments[2] : undefined;
  var result = points;
  var current = points;
  while (current.length > 1) {
    var newPoints = [];
    for (var i = 1; i < current.length; i++) {
      newPoints.push(Object(__WEBPACK_IMPORTED_MODULE_0__utils_linear__["a" /* add2D */])(Object(__WEBPACK_IMPORTED_MODULE_0__utils_linear__["e" /* mulScalar2D */])(1 - t, current[i - 1]), Object(__WEBPACK_IMPORTED_MODULE_0__utils_linear__["e" /* mulScalar2D */])(t, current[i])));
    }
    result = result.concat(newPoints);
    current = newPoints;
  }
  if (t === 1) {
    return {
      left: [base[1], base[0]],
      right: [base[1], base[1]]
    };
  }
  var splitBezier = {
    left: [{
      x: result[0].x,
      y: result[0].y,
      handleOut: {
        x: result[4].x,
        y: result[4].y
      }
    }, {
      x: result[9].x,
      y: result[9].y,
      handleIn: {
        x: result[7].x,
        y: result[7].y
      },
      handleOut: {
        x: result[8].x,
        y: result[8].y
      }
    }],
    right: [{
      x: result[9].x,
      y: result[9].y,
      handleIn: {
        x: result[7].x,
        y: result[7].y
      },
      handleOut: {
        x: result[8].x,
        y: result[8].y
      }
    }, {
      x: result[3].x,
      y: result[3].y,
      handleIn: {
        x: result[6].x,
        y: result[6].y
      }
    }]
  };
  return splitBezier;
}
function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y1 - y2, 2));
}
function align(points, lineStart, lineEnd) {
  var tx = lineStart.x;
  var ty = lineStart.y;
  var a = -Math.atan2(lineEnd.y - ty, lineEnd.x - tx);
  return points.map(function (v) {
    return {
      x: (v.x - tx) * Math.cos(a) - (v.y - ty) * Math.sin(a),
      y: (v.x - tx) * Math.sin(a) + (v.y - ty) * Math.cos(a)
    };
  });
}
function crt(v) {
  return v < 0 ? -Math.pow(-v, 1 / 3) : Math.pow(v, 1 / 3);
}
function getIntersectionTValue(pointHandleOut, handleOut, pointHandleIn, handleIn) {
  var lineStart = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
    x: 0,
    y: 0
  };
  var lineEnd = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
    x: 1,
    y: 0
  };
  var points = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [pointHandleOut, handleOut, handleIn, pointHandleIn];
  var p = align(points, lineStart, lineEnd);
  function reduce(t) {
    return t >= 0 && t <= 1;
  } // eslint-disable-line yoda

  // see http://www.trans4mind.com/personal_development/mathematics/polynomials/cubicAlgebra.htm
  var pa = p[0].y;
  var pb = p[1].y;
  var pc = p[2].y;
  var pd = p[3].y;
  var d = -pa + 3 * pb - 3 * pc + pd;
  var a = 3 * pa - 6 * pb + 3 * pc;
  var b = -3 * pa + 3 * pb;
  var c = pa;
  var u1;
  var v1;
  var x1;
  var x2;
  var x3;
  if (approximately(d, 0)) {
    // this is not a cubic curve.
    if (approximately(a, 0)) {
      // in fact, this is not a quadratic curve either.
      if (approximately(b, 0)) {
        // in fact in fact, there are no solutions.
        return [];
      }
      // linear solution:
      return [-c / b].filter(reduce);
    }
    // quadratic solution:
    var _q = Math.sqrt(b * b - 4 * a * c);
    var a2 = 2 * a;
    return [(_q - b) / a2, (-b - _q) / a2].filter(reduce);
  }
  a /= d;
  b /= d;
  c /= d;
  var p3 = (3 * b - a * a) / 3 / 3;
  var q = (2 * Math.pow(a, 3) - 9 * a * b + 27 * c) / 27;
  var q2 = q / 2;
  var discriminant = Math.pow(q2, 2) + Math.pow(p3, 3);
  var result;
  if (discriminant < 0) {
    var mp3 = -p3;
    var mp33 = mp3 * mp3 * mp3;
    var r = Math.sqrt(mp33);
    var t = -q / (2 * r);
    var cosphi = t < -1 // eslint-disable-line no-nested-ternary
    ? -1 : t > 1 ? 1 : t;
    var phi = Math.acos(cosphi);
    var crtr = crt(r);
    var t1 = 2 * crtr;
    x1 = t1 * Math.cos(phi / 3) - a / 3;
    x2 = t1 * Math.cos((phi + Math.PI * 2) / 3) - a / 3;
    x3 = t1 * Math.cos((phi + 4 * Math.PI) / 3) - a / 3;
    result = [x1, x2, x3].filter(reduce);
  } else if (discriminant === 0) {
    u1 = q2 < 0 ? crt(-q2) : -crt(q2);
    x1 = 2 * u1 - a / 3;
    x2 = -u1 - a / 3;
    result = [x1, x2].filter(reduce);
  } else {
    var sd = Math.sqrt(discriminant);
    u1 = crt(-q2 + sd);
    v1 = crt(q2 + sd);
    result = [u1 - v1 - a / 3].filter(reduce);
  }
  return result;
}

// see https://github.com/Pomax/bezierjs/blob/gh-pages/lib/utils.js line 313
function lineCurveIntersection(pointHandleOut, handleOut, pointHandleIn, handleIn) {
  var lineStart = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
    x: 0,
    y: 0
  };
  var lineEnd = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
    x: 1,
    y: 0
  };
  var points = [pointHandleOut, handleOut, handleIn, pointHandleIn];
  var result = getIntersectionTValue(pointHandleOut, handleOut, pointHandleIn, handleIn, lineStart, lineEnd, points);
  return split(points, result[0] || 0, [pointHandleIn, pointHandleOut]);
}
function log() {
  for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }
  /* eslint-disable no-console */
  console.log(rest);
  /* eslint-enable no-console */
  return rest[0];
}
function normalize(vector) {
  var x = vector.x;
  var y = vector.y;
  var norm = distance(0, 0, x, y);
  if (norm === 0) {
    return {
      x: 0,
      y: 0
    };
  }
  return {
    x: x / norm,
    y: y / norm
  };
}
function vectorFromPoints(a, b) {
  return {
    x: b.x - a.x,
    y: b.y - a.y
  };
}
function parseInt(int) {
  return parseInt(int);
}
function makeCurveInsideSerif(pAnchors, serifHeight, serifWidth, serifMedian, serifCurve, serifTerminal, thickness, midWidth, serifRotate) {
  var yDir = pAnchors.down ? -1 : 1;
  var xDir = pAnchors.left ? -1 : 1;
  var rotateRad = (serifRotate * pAnchors.rotationAngle || 0) * Math.PI / 180;
  var baseWidth = pAnchors.baseWidth;
  var baseDir = pAnchors.baseDir;
  var baseHeight = pAnchors.baseHeight;
  var stumpOpposite = pAnchors.opposite;
  var stumpBase = baseHeight;
  var stumpVector = {
    x: stumpOpposite.x - stumpBase.x,
    y: stumpOpposite.y - stumpBase.y
  };
  if (baseHeight.x === stumpOpposite.x && baseHeight.y === stumpOpposite.y) {
    stumpVector = {
      x: -stumpOpposite.x + baseWidth.x,
      y: -stumpOpposite.y + baseWidth.y
    };
  }
  var stumpNorm = distance(0, 0, stumpVector.x, stumpVector.y);
  var rotationCenter = pAnchors.rotationCenter;
  stumpVector = normalize(stumpVector);
  rotationCenter.typeIn = 'line';
  var topLeft = {
    x: rotationCenter.x + (baseHeight.x - rotationCenter.x - serifHeight * xDir) * Math.cos(rotateRad) - (baseWidth.y - rotationCenter.y + serifWidth * yDir) * Math.sin(rotateRad),
    y: rotationCenter.y + (baseWidth.y - rotationCenter.y + serifWidth * yDir) * Math.cos(rotateRad) + (baseHeight.x - rotationCenter.x - serifHeight * xDir) * Math.sin(rotateRad)
  };
  var bottomLeft = {
    x: rotationCenter.x + (baseHeight.x - rotationCenter.x - serifHeight * xDir) * Math.cos(rotateRad) - (baseHeight.y - rotationCenter.y) * Math.sin(rotateRad),
    y: rotationCenter.y + (baseHeight.y - rotationCenter.y) * Math.cos(rotateRad) + (baseHeight.x - rotationCenter.x - serifHeight * xDir) * Math.sin(rotateRad)
  };

  // We get the intersection with the left edge of the serif and the curve support
  // this operation is direction dependent
  var splitBase;
  if (pAnchors.inverseOrder) {
    splitBase = lineCurveIntersection(pAnchors.curveEnd, pAnchors.curveEnd.handleOut, pAnchors.baseWidth, pAnchors.baseWidth.handleIn, {
      x: topLeft.x,
      y: topLeft.y
    }, {
      x: bottomLeft.x,
      y: bottomLeft.y
    });
  } else {
    splitBase = lineCurveIntersection(pAnchors.baseWidth, pAnchors.baseWidth.handleOut, pAnchors.curveEnd, pAnchors.curveEnd.handleIn, {
      x: topLeft.x,
      y: topLeft.y
    }, {
      x: bottomLeft.x,
      y: bottomLeft.y
    });
  }

  // We chose a serifCenter depending on if the left edge intersect or not with
  // the curve support
  var serifCenter;
  var splitCurveEnd;
  if (!pAnchors.inverseOrder) {
    if (splitBase.right[0].x !== splitBase.right[1].x || splitBase.right[0].y !== splitBase.right[1].y) {
      serifCenter = splitBase.right[0];
      splitCurveEnd = splitBase.right[1];
    } else {
      serifCenter = splitBase.left[0];
      splitCurveEnd = splitBase.left[1];
    }
  } else if (splitBase.left[0].x !== splitBase.left[1].x || splitBase.left[0].y !== splitBase.left[1].y) {
    serifCenter = splitBase.left[1];
    splitCurveEnd = splitBase.left[0];
  } else {
    serifCenter = splitBase.right[1];
    splitCurveEnd = splitBase.right[0];
  }

  // The serif direction is the line from the serif center
  // to the serif left edge
  var serifDirection = vectorFromPoints(serifCenter, {
    x: rotationCenter.x + (baseHeight.x - rotationCenter.x - serifHeight * xDir) * serifMedian * Math.cos(rotateRad) - (baseWidth.y - rotationCenter.y + serifWidth * yDir) * Math.sin(rotateRad),
    y: rotationCenter.y + (baseWidth.y - rotationCenter.y + serifWidth * yDir) * Math.cos(rotateRad) + (baseHeight.x - rotationCenter.x - serifHeight * xDir) * serifMedian * Math.sin(rotateRad)
  });
  var serifBasis = normalize(serifDirection);
  var serifRadDirection = Math.atan2(serifBasis.y, serifBasis.x);
  var pointOnCurveVar;
  var pointOnSerif;
  var pointWithCurve = {};
  var normalToCurve;
  if (pAnchors.inverseOrder) {
    pointWithCurve = pointOnCurve(splitCurveEnd, splitCurveEnd.handleOut, serifCenter, serifCenter.handleIn, serifCurve, true, 200);
  } else {
    pointWithCurve = pointOnCurve(serifCenter, serifCenter.handleOut, splitCurveEnd, splitCurveEnd.handleIn, serifCurve, false, 200);
  }
  if (serifCurve > 0) {
    normalToCurve = pointWithCurve.normal;
    pointOnCurveVar = {
      x: pointWithCurve.x,
      y: pointWithCurve.y,
      dirOut: pointWithCurve.normal,
      typeIn: 'line'
    };
    var curveRatio = Math.min(serifCurve / distance(0, 0, serifDirection.x, serifDirection.y), 0.75);
    pointOnSerif = {
      x: serifCenter.x + serifDirection.x * curveRatio,
      y: serifCenter.y + serifDirection.y * curveRatio,
      dirIn: serifRadDirection,
      dirOut: serifRadDirection
    };
  } else {
    if (pAnchors.inverseOrder) {
      var relHandle = Object(__WEBPACK_IMPORTED_MODULE_0__utils_linear__["g" /* subtract2D */])(serifCenter, serifCenter.handleIn);
      normalToCurve = Math.atan2(relHandle.y, relHandle.x) + Math.PI;
    } else {
      var _relHandle = Object(__WEBPACK_IMPORTED_MODULE_0__utils_linear__["g" /* subtract2D */])(serifCenter, serifCenter.handleOut);
      normalToCurve = Math.atan2(_relHandle.y, _relHandle.x) + Math.PI;
    }
    pointOnCurveVar = {
      x: serifCenter.x,
      y: serifCenter.y,
      typeIn: 'line'
    };
    pointOnSerif = {
      x: serifCenter.x,
      y: serifCenter.y,
      type: 'corner'
    };
  }
  var leftEdge = {
    x: serifCenter.x + serifDirection.x,
    y: serifCenter.y + serifDirection.y,
    dirIn: serifRadDirection,
    dirOut: rotateRad
  };
  var rightEdge = {
    x: rotationCenter.x - (baseWidth.y - rotationCenter.y + serifWidth * midWidth * yDir) * Math.sin(rotateRad),
    y: rotationCenter.y + (baseWidth.y - rotationCenter.y + serifWidth * midWidth * yDir) * Math.cos(rotateRad),
    dirIn: rotateRad,
    typeOut: 'line'
  };
  var serifRoot = {
    x: baseHeight.x,
    y: baseHeight.y,
    typeIn: 'line'
  };
  var rootVector = normalize(vectorFromPoints(serifRoot, rightEdge));
  var medianVector = normalize(vectorFromPoints(pointOnSerif, leftEdge));
  var terminalVector = normalize({
    x: rootVector.x + medianVector.x,
    y: rootVector.y + medianVector.y
  });
  var midPoint = {
    x: (leftEdge.x + rightEdge.x) / 2 + serifTerminal * serifHeight * terminalVector.x,
    y: (leftEdge.y + rightEdge.y) / 2 + serifTerminal * serifHeight * terminalVector.y,
    dirIn: rotateRad,
    dirOut: rotateRad
  };
  if (serifTerminal !== 0) {
    leftEdge.dirOut = Math.atan2(medianVector.y, medianVector.x);
    rightEdge.dirIn = Math.atan2(rootVector.y, rootVector.x);
  } else if (midWidth !== 1) {
    var dirOut = Math.atan2(leftEdge.y - rightEdge.y, leftEdge.x - rightEdge.x);
    leftEdge.dirOut = dirOut;
    rightEdge.dirIn = dirOut;
    midPoint.dirIn = dirOut;
    midPoint.dirOut = dirOut;
  }
  var midStump = {
    x: serifRoot.x + stumpNorm / 2 * stumpVector.x,
    y: serifRoot.y + stumpNorm / 2 * stumpVector.y,
    dirOut: baseDir,
    typeIn: 'line'
  };
  var lastPoint = {
    x: pointOnCurveVar.x - stumpNorm / 2 * Math.sin(normalToCurve) * yDir * xDir,
    y: pointOnCurveVar.y + stumpNorm / 2 * Math.cos(normalToCurve) * yDir * xDir,
    dirIn: normalToCurve,
    typeOut: 'line',
    type: 'corner'
  };
  if (serifCurve + serifHeight < 70) {
    midStump.tensionOut = 0;
    lastPoint.tensionIn = 0;
  } else {
    midStump.tensionOut = 1;
    lastPoint.tensionIn = 1;
  }
  return [pointOnCurveVar, pointOnSerif, leftEdge, midPoint, rightEdge, rotationCenter, serifRoot, midStump, lastPoint];
}
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(infinityPointScale, "infinityPointScale", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(epsilon, "epsilon", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(approximately, "approximately", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(lineLineIntersection, "lineLineIntersection", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(rayRayIntersection, "rayRayIntersection", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(lineAngle, "lineAngle", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(onLine, "onLine", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(pointOnCurve, "pointOnCurve", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(getPointOnCurve, "getPointOnCurve", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(split, "split", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(distance, "distance", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(align, "align", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(crt, "crt", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(getIntersectionTValue, "getIntersectionTValue", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(lineCurveIntersection, "lineCurveIntersection", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(log, "log", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(normalize, "normalize", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(vectorFromPoints, "vectorFromPoints", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(parseInt, "parseInt", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(makeCurveInsideSerif, "makeCurveInsideSerif", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(__signature__, "__signature__", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(infinityPointScale, "infinityPointScale", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(epsilon, "epsilon", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(approximately, "approximately", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(lineLineIntersection, "lineLineIntersection", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(rayRayIntersection, "rayRayIntersection", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(lineAngle, "lineAngle", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(onLine, "onLine", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(pointOnCurve, "pointOnCurve", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(getPointOnCurve, "getPointOnCurve", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(split, "split", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(distance, "distance", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(align, "align", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(crt, "crt", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(getIntersectionTValue, "getIntersectionTValue", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(lineCurveIntersection, "lineCurveIntersection", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(log, "log", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(normalize, "normalize", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(vectorFromPoints, "vectorFromPoints", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(parseInt, "parseInt", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
  reactHotLoader.register(makeCurveInsideSerif, "makeCurveInsideSerif", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/utils/updateUtils.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ 0)(module)))

/***/ }),
/* 68 */
/*!****************************************************!*\
  !*** ./app/scripts/prototypo.js/precursor/Node.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Node; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_forOwn__ = __webpack_require__(/*! lodash/forOwn */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_forOwn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_forOwn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_find__ = __webpack_require__(/*! lodash/find */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_generic__ = __webpack_require__(/*! ../utils/generic */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Formula__ = __webpack_require__(/*! ./Formula */ 69);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var Node = /*#__PURE__*/function () {
  function Node(source, i, j, expandedCursor) {
    _classCallCheck(this, Node);
    var dirIn = source.dirIn,
      dirOut = source.dirOut,
      type = source.type,
      typeIn = source.typeIn,
      typeOut = source.typeOut,
      transforms = source.transforms,
      transformOrigin = source.transformOrigin,
      x = source.x,
      y = source.y,
      tensionIn = source.tensionIn,
      tensionOut = source.tensionOut;
    var cursor = expandedCursor || "contours.".concat(i, ".nodes.").concat(j, ".");

    /* eslint-disable no-negated-condition */
    this.cursor = cursor;
    this.nodeAddress = Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(cursor, "".concat(cursor, "nodeAddress"));
    this.dirIn = dirIn !== undefined ? Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(dirIn, "".concat(cursor, "dirIn")) : Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(null, "".concat(cursor, "dirIn"));
    this.dirOut = dirOut !== undefined ? Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(dirOut, "".concat(cursor, "dirOut")) : Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(null, "".concat(cursor, "dirOut"));
    // simplify by having just typeIn and typeOut
    this.type = type || null;
    this.typeIn = typeIn !== undefined ? Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(typeIn, "".concat(cursor, "typeIn")) : Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(this.type, "".concat(cursor, "typeIn"));
    this.typeOut = typeOut !== undefined ? Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(typeOut, "".concat(cursor, "typeOut")) : Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(this.type, "".concat(cursor, "typeOut"));
    this.tensionIn = tensionIn !== undefined ? Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(tensionIn, "".concat(cursor, "tensionIn")) : Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(1, "".concat(cursor, "tensionIn"));
    this.tensionOut = tensionOut !== undefined ? Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(tensionOut, "".concat(cursor, "tensionOut")) : Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(1, "".concat(cursor, "tensionOut"));
    this.transforms = transforms !== undefined ? Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(transforms, "".concat(cursor, "transforms")) : Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(null, "".concat(cursor, "transforms"));
    this.transformOrigin = transformOrigin ? Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(transformOrigin, "".concat(cursor, "transformOrigin")) : Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(null, "".concat(cursor, "transformOrigin"));
    this.x = x !== undefined ? Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(x, "".concat(cursor, "x")) : Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(null, "".concat(cursor, "x"));
    this.y = y !== undefined ? Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(y, "".concat(cursor, "y")) : Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(null, "".concat(cursor, "y"));
    /* eslint-enable no-negated-condition */
  }
  return _createClass(Node, [{
    key: "solveOperationOrder",
    value: function solveOperationOrder(glyph, operationOrder) {
      var _this = this;
      var result = [];
      __WEBPACK_IMPORTED_MODULE_0_lodash_forOwn___default()(this, function (value, key) {
        if (value !== null && key !== 'cursor' && key !== 'type') {
          if (key === 'expand') {
            __WEBPACK_IMPORTED_MODULE_0_lodash_forOwn___default()(value, function (item) {
              result.push.apply(result, _toConsumableArray(item.solveOperationOrder(glyph, [].concat(_toConsumableArray(operationOrder), result))));
            });
          } else if (key === 'expandedTo') {
            value.forEach(function (item) {
              result.push.apply(result, _toConsumableArray(item.solveOperationOrder(glyph, [].concat(_toConsumableArray(operationOrder), result))));
            });
          } else if (key !== 'expanding') {
            result.push.apply(result, _toConsumableArray(value.solveOperationOrder(glyph, [].concat(_toConsumableArray(operationOrder), result))));
          }
          if (typeof _this.readyToExpand === 'function') {
            var opToAdd = {
              action: 'expand',
              cursor: _this.cursor.substring(0, _this.cursor.length - 1)
            };
            if (_this.readyToExpand([].concat(_toConsumableArray(operationOrder), result)) && !__WEBPACK_IMPORTED_MODULE_1_lodash_find___default()([].concat(_toConsumableArray(operationOrder), result), opToAdd)) {
              result.push(opToAdd);
            }
          }
        }
      });
      return result;
    }
  }, {
    key: "analyzeDependency",
    value: function analyzeDependency(glyph, graph) {
      __WEBPACK_IMPORTED_MODULE_0_lodash_forOwn___default()(this, function (value, key) {
        if (value instanceof __WEBPACK_IMPORTED_MODULE_3__Formula__["a" /* default */] && key !== 'cursor') {
          if (key === 'expand') {
            __WEBPACK_IMPORTED_MODULE_0_lodash_forOwn___default()(value, function (item) {
              item.analyzeDependency(glyph, graph);
            });
          } else if (key === 'expandedTo') {
            value.forEach(function (item) {
              item.analyzeDependency(glyph, graph);
            });
          } else {
            value.analyzeDependency(glyph, graph);
          }
        }
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value:
    // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
}();

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(Node, "Node", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Node.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(_typeof, "_typeof", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Node.js");
  reactHotLoader.register(_toConsumableArray, "_toConsumableArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Node.js");
  reactHotLoader.register(_nonIterableSpread, "_nonIterableSpread", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Node.js");
  reactHotLoader.register(_unsupportedIterableToArray, "_unsupportedIterableToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Node.js");
  reactHotLoader.register(_iterableToArray, "_iterableToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Node.js");
  reactHotLoader.register(_arrayWithoutHoles, "_arrayWithoutHoles", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Node.js");
  reactHotLoader.register(_arrayLikeToArray, "_arrayLikeToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Node.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Node.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Node.js");
  reactHotLoader.register(_createClass, "_createClass", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Node.js");
  reactHotLoader.register(_toPropertyKey, "_toPropertyKey", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Node.js");
  reactHotLoader.register(_toPrimitive, "_toPrimitive", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Node.js");
  reactHotLoader.register(__signature__, "__signature__", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Node.js");
  reactHotLoader.register(Node, "Node", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Node.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ 0)(module)))

/***/ }),
/* 69 */
/*!*******************************************************!*\
  !*** ./app/scripts/prototypo.js/precursor/Formula.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Formula; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_difference__ = __webpack_require__(/*! lodash/difference */ 39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_difference___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_difference__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_get__ = __webpack_require__(/*! lodash/get */ 34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_uniq__ = __webpack_require__(/*! lodash/uniq */ 172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_uniq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_uniq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_reduce__ = __webpack_require__(/*! lodash/reduce */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_find__ = __webpack_require__(/*! lodash/find */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_keys__ = __webpack_require__(/*! lodash/keys */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_keys__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var Formula = /*#__PURE__*/function () {
  function Formula(formula, cursor) {
    _classCallCheck(this, Formula);
    this.cursor = cursor;
    this.dependencies = formula._dependencies; // eslint-disable-line no-underscore-dangle
    /* eslint-disable no-new-func */
    this.operation = _construct(Function, _toConsumableArray(['contours', 'anchors', 'parentAnchors', 'Utils'].concat(formula._parameters || []) // eslint-disable-line no-underscore-dangle
    .concat((typeof formula._operation === 'string' // eslint-disable-line no-underscore-dangle
    && formula._operation.indexOf('return ') === -1 // eslint-disable-line no-underscore-dangle
    ? 'return ' : ''
    // The operation might be wrapped in a function (e.g. multi-
    // line code for debugging purpose). In this case, return
    // must be explicit
    ) + formula._operation.toString() // eslint-disable-line no-underscore-dangle
    // [\s\S] need to be used instead of . because
    // javascript doesn't have a dotall flag (s)
    .replace(/^function\s*\(\)\s*\{([\s\S]*?)\}$/, '$1').trim()
    /* +
    // add sourceURL pragma to help debugging
    // TODO: restore sourceURL pragma if it proves necessary
    '\n\n//# sourceURL=' + path */)));
    /* eslint-enable no-new-func */
    this.parameters = formula._parameters; // eslint-disable-line no-underscore-dangle
    this.analyzing = false;
  }
  return _createClass(Formula, [{
    key: "analyzeDependency",
    value: function analyzeDependency(glyph) {
      var graph = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      graph.push(this.cursor);
      if (this.analyzing) {
        throw new Error("There is a circular dependency for glyph ".concat(glyph.name.value, " following the subsequent graph:\n").concat(graph.join(' => '), "\n"));
      }
      this.analyzing = true;
      this.dependencies.forEach(function (dependency) {
        try {
          if (dependency.indexOf('parentAnchors') === -1) {
            var formula = glyph.getFromXPath(dependency);
            formula.analyzeDependency(glyph, graph);
          }
        } catch (e) {
          throw new Error("There was an error while checking glyph ".concat(glyph.name.value, " dependencies for cursor: ").concat(dependency, ".\n\t\t\t\t\t").concat(e.message));
        }
        graph.pop();
      });
      this.analyzing = false;
    }
  }, {
    key: "getResult",
    value: function getResult(parameters, contours, anchors, parentAnchors, utils) {
      var args = [contours, anchors, parentAnchors, utils];
      for (var i = 0; i < this.parameters.length; i++) {
        var name = this.parameters[i];
        args.push(parameters[name]);
      }
      var result = this.operation.apply(this, args);

      /*if (typeof result === 'number' && isNaN(result)) {
      	console.error(`Operation returned NaN
      operation is:
      ${this.operation.toString()}
      parameters value are:
      ${this.parameters.map(name => `${name}: ${parameters[name]}`)}
      cursor used are:
      ${this.dependencies.map(name => `${name}: ${_get(contours, name)}`)}`);
      	
      }*/

      return result;
    }
  }, {
    key: "solveOperationOrder",
    value: function solveOperationOrder(glyph, operationOrder) {
      var result = [];
      var operationsToSolve = __WEBPACK_IMPORTED_MODULE_0_lodash_difference___default()(__WEBPACK_IMPORTED_MODULE_2_lodash_uniq___default()(this.dependencies), operationOrder);
      if (operationsToSolve.length > 0) {
        result.push.apply(result, _toConsumableArray(__WEBPACK_IMPORTED_MODULE_3_lodash_reduce___default()(operationsToSolve, function (acc, xpath) {
          var expandedIndex = xpath.indexOf('expandedTo');
          var processedOps = [].concat(_toConsumableArray(operationOrder), result, _toConsumableArray(acc));

          // We don't have to compute dependcy on parentAnchors they are not
          // our responsability and should be provided by parent
          if (xpath.indexOf('parentAnchors') !== -1) {
            return acc;
          }
          if (xpath.match(/handle(Out|In)/)) {
            var contourPath = xpath.split('.').slice(0, 2).join('.');
            var contour = glyph.getFromXPath(contourPath);
            acc.push.apply(acc, _toConsumableArray(contour.solveOperationOrder(glyph, _toConsumableArray(processedOps))));
          } else if (expandedIndex !== -1) {
            /* eslint-disable no-negated-condition, max-depth */
            var base = xpath.substr(0, expandedIndex - 1);
            var node = glyph.getFromXPath("".concat(base));
            if (node.expandedTo) {
              if (false === 'yes') {
                if (!glyph.getFromXPath(xpath)) {
                  console.log("".concat(glyph.name.value, " on cursor ").concat(xpath)); // eslint-disable-line no-console
                }
              }
              acc.push.apply(acc, _toConsumableArray(glyph.getFromXPath(xpath).solveOperationOrder(glyph, _toConsumableArray(processedOps))));
            } else {
              if (false === 'yes') {
                if (!glyph.getFromXPath("".concat(base, ".expand.width")) || !glyph.getFromXPath("".concat(base, ".expand.distr")) || !glyph.getFromXPath("".concat(base, ".expand.angle")) || !glyph.getFromXPath("".concat(base, ".x")) || !glyph.getFromXPath("".concat(base, ".y"))) {
                  console.log("".concat(glyph.name.value, " on cursor ").concat(base)); // eslint-disable-line no-console
                }
              }
              var expandResult = glyph.getFromXPath("".concat(base, ".expand.width")).solveOperationOrder(glyph, processedOps);
              expandResult.push.apply(expandResult, _toConsumableArray(glyph.getFromXPath("".concat(base, ".expand.distr")).solveOperationOrder(glyph, [].concat(_toConsumableArray(processedOps), _toConsumableArray(expandResult)))));
              expandResult.push.apply(expandResult, _toConsumableArray(glyph.getFromXPath("".concat(base, ".expand.angle")).solveOperationOrder(glyph, [].concat(_toConsumableArray(processedOps), _toConsumableArray(expandResult)))));
              expandResult.push.apply(expandResult, _toConsumableArray(glyph.getFromXPath("".concat(base, ".x")).solveOperationOrder(glyph, [].concat(_toConsumableArray(processedOps), _toConsumableArray(expandResult)))));
              expandResult.push.apply(expandResult, _toConsumableArray(glyph.getFromXPath("".concat(base, ".y")).solveOperationOrder(glyph, [].concat(_toConsumableArray(processedOps), _toConsumableArray(expandResult)))));
              var opToAdd = {
                action: 'expand',
                cursor: base
              };
              if (!__WEBPACK_IMPORTED_MODULE_4_lodash_find___default()([].concat(_toConsumableArray(processedOps), _toConsumableArray(expandResult)), opToAdd)) {
                expandResult.push(opToAdd);
              }
              acc.push.apply(acc, _toConsumableArray(expandResult));
            }
          } else {
            /* eslint-disable no-negated-condition, max-depth */
            acc.push.apply(acc, _toConsumableArray(glyph.getFromXPath(xpath).solveOperationOrder(glyph, processedOps)));
          }
          return acc;
        }, [])));
      }
      if ([].concat(_toConsumableArray(operationOrder), result).indexOf(this.cursor) === -1) {
        result.push(this.cursor);
      }
      return result;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value:
    // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
}();

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(Formula, "Formula", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Formula.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(_typeof, "_typeof", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Formula.js");
  reactHotLoader.register(_construct, "_construct", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Formula.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Formula.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Formula.js");
  reactHotLoader.register(_toConsumableArray, "_toConsumableArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Formula.js");
  reactHotLoader.register(_nonIterableSpread, "_nonIterableSpread", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Formula.js");
  reactHotLoader.register(_unsupportedIterableToArray, "_unsupportedIterableToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Formula.js");
  reactHotLoader.register(_iterableToArray, "_iterableToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Formula.js");
  reactHotLoader.register(_arrayWithoutHoles, "_arrayWithoutHoles", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Formula.js");
  reactHotLoader.register(_arrayLikeToArray, "_arrayLikeToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Formula.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Formula.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Formula.js");
  reactHotLoader.register(_createClass, "_createClass", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Formula.js");
  reactHotLoader.register(_toPropertyKey, "_toPropertyKey", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Formula.js");
  reactHotLoader.register(_toPrimitive, "_toPrimitive", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Formula.js");
  reactHotLoader.register(__signature__, "__signature__", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Formula.js");
  reactHotLoader.register(Formula, "Formula", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Formula.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ 0)(module)))

/***/ }),
/* 70 */
/*!*************************************************************!*\
  !*** ./app/scripts/prototypo.js/precursor/ExpandingNode.js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandingNode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_mapValues__ = __webpack_require__(/*! lodash/mapValues */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_mapValues___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_mapValues__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_take__ = __webpack_require__(/*! lodash/take */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_difference__ = __webpack_require__(/*! lodash/difference */ 39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_difference___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_difference__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_linear__ = __webpack_require__(/*! ../utils/linear */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_generic__ = __webpack_require__(/*! ../utils/generic */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Node__ = __webpack_require__(/*! ./Node */ 68);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var EXPAND_WIDTH = '.expand.width';
var EXPAND_ANGLE = '.expand.angle';
var EXPAND_DISTR = '.expand.distr';
var ExpandingNode = /*#__PURE__*/function (_Node) {
  function ExpandingNode(source, i, j) {
    var _this;
    _classCallCheck(this, ExpandingNode);
    _this = _callSuper(this, ExpandingNode, [source, i, j]);
    if (source.expand) {
      _this.expanding = true;
      _this.expand = __WEBPACK_IMPORTED_MODULE_0_lodash_mapValues___default()(source.expand, function (item, key) {
        return Object(__WEBPACK_IMPORTED_MODULE_4__utils_generic__["a" /* constantOrFormula */])(item, "".concat(_this.cursor, "expand.").concat(key));
      });
    } else if (source.expandedTo) {
      _this.expanding = false;
      _this.expandedTo = source.expandedTo.map(function (point, k) {
        return new __WEBPACK_IMPORTED_MODULE_5__Node__["a" /* default */](point, undefined, undefined, "".concat(_this.cursor, "expandedTo.").concat(k, "."));
      });
    }
    return _this;
  }
  _inherits(ExpandingNode, _Node);
  return _createClass(ExpandingNode, [{
    key: "readyToExpand",
    value: function readyToExpand(ops) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ops.length - 1;
      var cursorToLook = ["".concat(this.cursor, "expand.width"), "".concat(this.cursor, "expand.distr"), "".concat(this.cursor, "expand.angle"), "".concat(this.cursor, "x"), "".concat(this.cursor, "y")];
      var done = __WEBPACK_IMPORTED_MODULE_1_lodash_take___default()(ops, index + 1);

      // if all the op are done we should have a length 5 short because
      // we removed the 5 necessary cursor
      return __WEBPACK_IMPORTED_MODULE_2_lodash_difference___default()(done, cursorToLook).length === done.length - cursorToLook.length;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value:
    // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }], [{
    key: "applyExpandChange",
    value: function applyExpandChange(computedNode, changes, cursor) {
      /* eslint-disable no-param-reassign */
      computedNode.expand.baseWidth = computedNode.expand.width;
      computedNode.expand.baseDistr = computedNode.expand.distr;
      computedNode.expand.baseAngle = computedNode.expand.angle;
      computedNode.expand.width = computedNode.expand.baseWidth * (changes[cursor + EXPAND_WIDTH] || 1);
      computedNode.expand.angle = computedNode.expand.baseAngle + (changes[cursor + EXPAND_ANGLE] || 0);
      computedNode.expand.distr = computedNode.expand.baseDistr + (changes[cursor + EXPAND_DISTR] || 0);
      return computedNode;
      /* eslint-disable no-param-reassign */
    }
  }, {
    key: "expand",
    value: function expand(computedNode) {
      var x = computedNode.x,
        y = computedNode.y,
        _computedNode$expand = computedNode.expand,
        width = _computedNode$expand.width,
        angle = _computedNode$expand.angle,
        distr = _computedNode$expand.distr,
        baseWidth = _computedNode$expand.baseWidth,
        baseAngle = _computedNode$expand.baseAngle,
        baseDistr = _computedNode$expand.baseDistr;
      return [{
        x: Math.round(x - Math.cos(angle) * width * distr),
        y: Math.round(y - Math.sin(angle) * width * distr),
        xBase: Math.round(x - Math.cos(angle) * width * distr),
        yBase: Math.round(y - Math.sin(angle) * width * distr)
      }, {
        x: Math.round(x + Math.cos(angle) * width * (1 - distr)),
        y: Math.round(y + Math.sin(angle) * width * (1 - distr)),
        xBase: Math.round(x + Math.cos(angle) * width * (1 - distr)),
        yBase: Math.round(y + Math.sin(angle) * width * (1 - distr))
      }];
    }
  }]);
}(__WEBPACK_IMPORTED_MODULE_5__Node__["a" /* default */]);

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(EXPAND_WIDTH, "EXPAND_WIDTH", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
  reactHotLoader.register(EXPAND_ANGLE, "EXPAND_ANGLE", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
  reactHotLoader.register(EXPAND_DISTR, "EXPAND_DISTR", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
  reactHotLoader.register(ExpandingNode, "ExpandingNode", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(_typeof, "_typeof", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
  reactHotLoader.register(_createClass, "_createClass", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
  reactHotLoader.register(_toPropertyKey, "_toPropertyKey", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
  reactHotLoader.register(_toPrimitive, "_toPrimitive", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
  reactHotLoader.register(_callSuper, "_callSuper", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
  reactHotLoader.register(_possibleConstructorReturn, "_possibleConstructorReturn", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
  reactHotLoader.register(_assertThisInitialized, "_assertThisInitialized", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
  reactHotLoader.register(_isNativeReflectConstruct, "_isNativeReflectConstruct", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
  reactHotLoader.register(_getPrototypeOf, "_getPrototypeOf", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
  reactHotLoader.register(_inherits, "_inherits", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
  reactHotLoader.register(_setPrototypeOf, "_setPrototypeOf", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
  reactHotLoader.register(__signature__, "__signature__", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
  reactHotLoader.register(EXPAND_WIDTH, "EXPAND_WIDTH", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
  reactHotLoader.register(EXPAND_ANGLE, "EXPAND_ANGLE", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
  reactHotLoader.register(EXPAND_DISTR, "EXPAND_DISTR", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
  reactHotLoader.register(ExpandingNode, "ExpandingNode", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/ExpandingNode.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ 0)(module)))

/***/ }),
/* 71 */
/*!***************************************!*\
  !*** ./app/scripts/opentype/check.js ***!
  \***************************************/
/*! exports provided: fail, checkArgument */
/*! exports used: checkArgument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export fail */
/* harmony export (immutable) */ __webpack_exports__["a"] = checkArgument;
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
function fail(message) {
  throw new Error(message);
}

// Precondition function that checks if the given predicate is true.
// If not, it will throw an error.
function checkArgument(predicate, message) {
  if (!predicate) {
    fail(message);
  }
}
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(fail, "fail", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/check.js");
  reactHotLoader.register(checkArgument, "checkArgument", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/check.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(__signature__, "__signature__", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/check.js");
  reactHotLoader.register(fail, "fail", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/check.js");
  reactHotLoader.register(checkArgument, "checkArgument", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/check.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ 0)(module)))

/***/ }),
/* 72 */
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/if-loader!./node_modules/babel-loader/lib??ref--7-0!./node_modules/if-loader!./app/scripts/worker/worker.js ***!
  \****************************************************************************************************************************************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__prototypo_js_precursor_FontPrecursor__ = __webpack_require__(/*! ../prototypo.js/precursor/FontPrecursor */ 73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__opentype_font__ = __webpack_require__(/*! ../opentype/font */ 186);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


var fonts = {};

/* eslint-disable no-bitwise */
/* eslint-disable prefer-numeric-literals */
var getfsSelection = function getfsSelection(weight, italic) {
  return (weight > 500 ? parseInt('0000000000100000', 2) : parseInt('0000000001000000', 2)) | (italic ? parseInt('0000000000000001', 2) : parseInt('0000000000000000', 2));
};

/* eslint-disable no-restricted-globals */

// Layout of array is [
//   number of glyphs,
//   unicode,
//   advanceWidth,
//   spacingLeft,
//   spacingRight,
//   unicode,...
//   ]
function getFontValuesArray(font) {
  var glyphValuesArray = [];
  var length = 0;
  for (var i = 0; i < font.glyphs.length; i++) {
    var _font$glyphs$i = font.glyphs[i],
      unicode = _font$glyphs$i.unicode,
      spacingLeft = _font$glyphs$i.spacingLeft,
      baseSpacingLeft = _font$glyphs$i.baseSpacingLeft,
      spacingRight = _font$glyphs$i.spacingRight,
      baseSpacingRight = _font$glyphs$i.baseSpacingRight,
      advanceWidth = _font$glyphs$i.advanceWidth;
    if (unicode) {
      length++;
      glyphValuesArray.push(unicode);
      glyphValuesArray.push(advanceWidth);
      glyphValuesArray.push(spacingLeft);
      glyphValuesArray.push(baseSpacingLeft);
      glyphValuesArray.push(spacingRight);
      glyphValuesArray.push(baseSpacingRight);
    }
  }
  glyphValuesArray.unshift(length);
  var intArray = new Int32Array(glyphValuesArray);
  return new Uint8Array(intArray.buffer);
}
self.onmessage = function (e) {
  switch (e.data.type) {
    case 'createFont':
      {
        console.log('🔄 Loading fonts in worker:', e.data.data.map(function (t) {
          return t.name;
        }));
        e.data.data.forEach(function (typedata) {
          try {
            fonts[typedata.name] = new __WEBPACK_IMPORTED_MODULE_0__prototypo_js_precursor_FontPrecursor__["a" /* default */](typedata.json);
            console.log('✅ Successfully loaded font:', typedata.name);
          } catch (error) {
            console.error('❌ Failed to load font:', typedata.name, error);
          }
        });
        console.log('📋 Total fonts loaded:', Object.keys(fonts));
        self.postMessage({
          id: e.data.id
        });
        break;
      }
    case 'reloadFont':
      {
        try {
          console.log('🔄 Reloading font in worker:', e.data.data.name);
          fonts[e.data.data.name] = new __WEBPACK_IMPORTED_MODULE_0__prototypo_js_precursor_FontPrecursor__["a" /* default */](e.data.data.json);
          console.log('✅ Successfully reloaded font:', e.data.data.name);
        } catch (error) {
          console.error('❌ Failed to reload font:', e.data.data.name, error);
        }
        self.postMessage({
          id: e.data.id
        });
        break;
      }
    case 'constructFont':
      {
        if (!fonts[e.data.data.name]) {
          console.error('🚨 Font not found in worker:', e.data.data.name);
          console.log('📋 Available fonts:', Object.keys(fonts));
          console.log('📝 Request data:', e.data.data);
          self.postMessage({
            id: e.data.id,
            error: "Font \"".concat(e.data.data.name, "\" not loaded in worker")
          });
          break;
        }
        try {
          var font = fonts[e.data.data.name].constructFont(e.data.data.params, e.data.data.subset);

          // Ensure we have proper font metadata
          var familyName = e.data.data.familyName || 'Prototypo Font';
          var styleName = e.data.data.styleName || 'Regular';
          var weight = e.data.data.weight || 400;
          var width = e.data.data.width || 5;
          var italic = e.data.data.italic || false;
          console.log('🔧 Constructing font with metadata:', {
            familyName: familyName,
            styleName: styleName,
            weight: weight,
            width: width,
            italic: italic,
            glyphCount: font.glyphs ? font.glyphs.length : 0
          });
          var arrayBuffer = Object(__WEBPACK_IMPORTED_MODULE_1__opentype_font__["a" /* fontToSfntTable */])(_objectSpread(_objectSpread({}, font), {}, {
            fontFamily: {
              en: familyName
            },
            fontSubfamily: {
              en: styleName
            },
            postScriptName: {
              en: "".concat(familyName.replace(/\s/g, ''), "-").concat(styleName)
            },
            unitsPerEm: 1024,
            usWeightClass: weight,
            usWidthClass: width,
            manufacturer: e.data.data.foundry || 'Prototypo',
            manufacturerURL: e.data.data.foundryUrl || 'https://prototypo.io',
            designer: e.data.data.designer || '',
            designerURL: e.data.data.designerUrl || '',
            version: '1.0',
            copyright: "\xA9 ".concat(new Date().getFullYear(), " Prototypo"),
            fsSelection: getfsSelection(weight, italic)
          }));
          if (e.data.data.forExport) {
            var textEncoder = new TextEncoder('utf-8');
            var encodedId = textEncoder.encode(e.data.id);
            var resultBuffer = new Uint8Array(1 + encodedId.byteLength // ids plus length of ids
            + arrayBuffer.byteLength);
            resultBuffer.set([encodedId.byteLength].concat(_toConsumableArray(encodedId), _toConsumableArray(arrayBuffer)), 0);
            self.postMessage(resultBuffer.buffer);
          } else {
            var _textEncoder = new TextEncoder('utf-8');
            var _encodedId = _textEncoder.encode(e.data.id);
            var glyphValuesArray = getFontValuesArray(font);
            var _resultBuffer = new Uint8Array(glyphValuesArray.byteLength + 1 + _encodedId.byteLength // ids plus length of ids
            + arrayBuffer.byteLength);
            _resultBuffer.set([_encodedId.byteLength].concat(_toConsumableArray(_encodedId), _toConsumableArray(glyphValuesArray), _toConsumableArray(arrayBuffer)), 0);
            self.postMessage(_resultBuffer.buffer);
          }
        } catch (error) {
          console.error('❌ Failed to construct font:', e.data.data.name, error);
          self.postMessage({
            id: e.data.id,
            error: "Font construction failed: ".concat(error.message)
          });
        }
        break;
      }
    default:
      {
        break;
      }
  }
};
self.onerror = function () {
  self.postMessage(true);
};

/* eslint-enable no-restricted-globals */
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(fonts, "fonts", "/Users/evgeniivarlygin/prototypo-master/app/scripts/worker/worker.js");
  reactHotLoader.register(getfsSelection, "getfsSelection", "/Users/evgeniivarlygin/prototypo-master/app/scripts/worker/worker.js");
  reactHotLoader.register(getFontValuesArray, "getFontValuesArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/worker/worker.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(_typeof, "_typeof", "/Users/evgeniivarlygin/prototypo-master/app/scripts/worker/worker.js");
  reactHotLoader.register(_toConsumableArray, "_toConsumableArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/worker/worker.js");
  reactHotLoader.register(_nonIterableSpread, "_nonIterableSpread", "/Users/evgeniivarlygin/prototypo-master/app/scripts/worker/worker.js");
  reactHotLoader.register(_unsupportedIterableToArray, "_unsupportedIterableToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/worker/worker.js");
  reactHotLoader.register(_iterableToArray, "_iterableToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/worker/worker.js");
  reactHotLoader.register(_arrayWithoutHoles, "_arrayWithoutHoles", "/Users/evgeniivarlygin/prototypo-master/app/scripts/worker/worker.js");
  reactHotLoader.register(_arrayLikeToArray, "_arrayLikeToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/worker/worker.js");
  reactHotLoader.register(ownKeys, "ownKeys", "/Users/evgeniivarlygin/prototypo-master/app/scripts/worker/worker.js");
  reactHotLoader.register(_objectSpread, "_objectSpread", "/Users/evgeniivarlygin/prototypo-master/app/scripts/worker/worker.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "/Users/evgeniivarlygin/prototypo-master/app/scripts/worker/worker.js");
  reactHotLoader.register(_toPropertyKey, "_toPropertyKey", "/Users/evgeniivarlygin/prototypo-master/app/scripts/worker/worker.js");
  reactHotLoader.register(_toPrimitive, "_toPrimitive", "/Users/evgeniivarlygin/prototypo-master/app/scripts/worker/worker.js");
  reactHotLoader.register(__signature__, "__signature__", "/Users/evgeniivarlygin/prototypo-master/app/scripts/worker/worker.js");
  reactHotLoader.register(fonts, "fonts", "/Users/evgeniivarlygin/prototypo-master/app/scripts/worker/worker.js");
  reactHotLoader.register(getfsSelection, "getfsSelection", "/Users/evgeniivarlygin/prototypo-master/app/scripts/worker/worker.js");
  reactHotLoader.register(getFontValuesArray, "getFontValuesArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/worker/worker.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ 0)(module)))

/***/ }),
/* 73 */
/*!*************************************************************!*\
  !*** ./app/scripts/prototypo.js/precursor/FontPrecursor.js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FontPrecursor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_mapValues__ = __webpack_require__(/*! lodash/mapValues */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_mapValues___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_mapValues__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_forOwn__ = __webpack_require__(/*! lodash/forOwn */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_forOwn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_forOwn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_generic__ = __webpack_require__(/*! ../utils/generic */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Glyph__ = __webpack_require__(/*! ./Glyph */ 178);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var keyToTransform = ['familyName', 'version', 'description', 'ascender', 'descender', 'cap-height', 'descendent-height'];
var FontPrecursor = /*#__PURE__*/function () {
  function FontPrecursor(fontSrc) {
    var _this = this;
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        resolveOp: true
      },
      resolveOp = _ref.resolveOp;
    _classCallCheck(this, FontPrecursor);
    var fontinfo = fontSrc.fontinfo,
      lib = fontSrc.lib;
    keyToTransform.forEach(function (key) {
      _this[key] = Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(fontinfo[key]);
    });
    this.parameters = __WEBPACK_IMPORTED_MODULE_0_lodash_mapValues___default()(lib.parameters, function (param) {
      return Object(__WEBPACK_IMPORTED_MODULE_2__utils_generic__["a" /* constantOrFormula */])(param);
    });
    this.paramBase = {
      manualChanges: {},
      postDepManualChanges: {},
      altList: {},
      glyphComponentChoice: {}
    };
    this.unicodeToGlyphName = {};
    this.glyphs = __WEBPACK_IMPORTED_MODULE_0_lodash_mapValues___default()(fontSrc.glyphs, function (glyph) {
      if (glyph.name.indexOf('alt') === -1) {
        _this.unicodeToGlyphName[glyph.unicode] = glyph.name;
      }
      return new __WEBPACK_IMPORTED_MODULE_3__Glyph__["a" /* default */](glyph, _this.paramBase, {
        resolveOp: resolveOp
      });
    });

    // this.analyzeDependency();
  }
  return _createClass(FontPrecursor, [{
    key: "analyzeDependency",
    value: function analyzeDependency() {
      __WEBPACK_IMPORTED_MODULE_1_lodash_forOwn___default()(this.glyphs, function (glyph) {
        glyph.analyzeDependency();
      });
    }
  }, {
    key: "constructFont",
    value: function constructFont(params, subset) {
      var _this2 = this;
      var localParams = _objectSpread(_objectSpread(_objectSpread({}, params), __WEBPACK_IMPORTED_MODULE_0_lodash_mapValues___default()(this.parameters, function (param) {
        return param.getResult(params);
      })), {}, {
        manualChanges: _objectSpread(_objectSpread({}, this.paramBase.manualChanges), params.manualChanges),
        postDepManualChanges: _objectSpread(_objectSpread({}, this.paramBase.postDepManualChanges), params.postDepManualChanges),
        glyphComponentChoice: _objectSpread(_objectSpread({}, this.paramBase.glyphComponentChoice), params.glyphComponentChoice),
        altList: _objectSpread(_objectSpread({}, this.paramBase.altList), params.altList)
      });
      var transformedThis = {};
      var glyphNames = [];
      var glyphs = [];
      for (var i = 0; i < keyToTransform.length; i++) {
        var key = keyToTransform[i];
        var prop = this[key];
        transformedThis[key] = prop.getResult(localParams);
      }
      for (var _i = 0; _i < subset.length; _i++) {
        var char = subset[_i];
        var altOrDefault = localParams.altList[char] || this.unicodeToGlyphName[char];
        glyphNames.push(altOrDefault);
      }
      var _loop = function _loop() {
        var name = glyphNames[_i2];
        var indivParam = _objectSpread({}, params);
        if (name !== undefined) {
          if (localParams.indiv_glyphs) {
            var group = localParams.indiv_glyphs[_this2.glyphs[name].unicode.value];
            if (group) {
              var indivModifs = localParams.indiv_group_param[group];
              var keys = Object.keys(indivModifs);
              for (var j = 0; j < keys.length; j++) {
                var param = keys[j].substr(0, keys[j].length - 4);
                var mod = indivModifs[keys[j]];
                indivParam[param] = mod.state === 'relative' ? params[param] * mod.value : params[param] + mod.value;
              }
            }
            localParams = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, localParams), indivParam), __WEBPACK_IMPORTED_MODULE_0_lodash_mapValues___default()(_this2.parameters, function (param) {
              return param.getResult(indivParam);
            })), {}, {
              manualChanges: _objectSpread(_objectSpread({}, _this2.paramBase.manualChanges), localParams.manualChanges),
              postDepManualChanges: _objectSpread(_objectSpread({}, _this2.paramBase.postDepManualChanges), params.postDepManualChanges),
              glyphComponentChoice: _objectSpread(_objectSpread({}, _this2.paramBase.glyphComponentChoice), localParams.glyphComponentChoice),
              altList: _objectSpread(_objectSpread({}, _this2.paramBase.altList), localParams.altList)
            });
          }
          if (_this2.glyphs[name]) {
            glyphs.push(_this2.glyphs[name].constructGlyph(_objectSpread({}, localParams), undefined, _this2.glyphs));
          }
        }
      };
      for (var _i2 = 0; _i2 < glyphNames.length; _i2++) {
        _loop();
      }
      return _objectSpread(_objectSpread({}, transformedThis), {}, {
        glyphs: glyphs
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value:
    // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
}();

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(keyToTransform, "keyToTransform", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/FontPrecursor.js");
  reactHotLoader.register(FontPrecursor, "FontPrecursor", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/FontPrecursor.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(_typeof, "_typeof", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/FontPrecursor.js");
  reactHotLoader.register(ownKeys, "ownKeys", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/FontPrecursor.js");
  reactHotLoader.register(_objectSpread, "_objectSpread", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/FontPrecursor.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/FontPrecursor.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/FontPrecursor.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/FontPrecursor.js");
  reactHotLoader.register(_createClass, "_createClass", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/FontPrecursor.js");
  reactHotLoader.register(_toPropertyKey, "_toPropertyKey", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/FontPrecursor.js");
  reactHotLoader.register(_toPrimitive, "_toPrimitive", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/FontPrecursor.js");
  reactHotLoader.register(__signature__, "__signature__", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/FontPrecursor.js");
  reactHotLoader.register(keyToTransform, "keyToTransform", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/FontPrecursor.js");
  reactHotLoader.register(FontPrecursor, "FontPrecursor", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/FontPrecursor.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ 0)(module)))

/***/ }),
/* 74 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ 43),
    isMasked = __webpack_require__(/*! ./_isMasked */ 78),
    isObject = __webpack_require__(/*! ./isObject */ 4),
    toSource = __webpack_require__(/*! ./_toSource */ 45);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 75 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 76 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 9);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 77 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 78 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ 79);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 79 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ 2);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 80 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 81 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ 82);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 82 */
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 83 */
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ 84),
    isArguments = __webpack_require__(/*! ./isArguments */ 27),
    isArray = __webpack_require__(/*! ./isArray */ 1),
    isBuffer = __webpack_require__(/*! ./isBuffer */ 46),
    isIndex = __webpack_require__(/*! ./_isIndex */ 15),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ 48);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 84 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 85 */
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 8),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 5);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 86 */
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 87 */
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 8),
    isLength = __webpack_require__(/*! ./isLength */ 28),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 5);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 88 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 44);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/module.js */ 47)(module)))

/***/ }),
/* 89 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ 90),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ 91);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 90 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 91 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ 92);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 92 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 93 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ 94),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ 134),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ 56);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 94 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ 50),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ 51);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 95 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 96 */
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 17);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 97 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 17);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 98 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 17);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 99 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 17);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 100 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ 16);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 101 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 102 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 103 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 104 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ 16),
    Map = __webpack_require__(/*! ./_Map */ 29),
    MapCache = __webpack_require__(/*! ./_MapCache */ 30);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 105 */
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ 106),
    ListCache = __webpack_require__(/*! ./_ListCache */ 16),
    Map = __webpack_require__(/*! ./_Map */ 29);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 106 */
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ 107),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ 108),
    hashGet = __webpack_require__(/*! ./_hashGet */ 109),
    hashHas = __webpack_require__(/*! ./_hashHas */ 110),
    hashSet = __webpack_require__(/*! ./_hashSet */ 111);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 107 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 19);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 108 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 109 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 19);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 110 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 19);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 111 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 19);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 112 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 20);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 113 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 114 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 20);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 115 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 20);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 116 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 20);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 117 */
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ 50),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ 52),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ 121),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ 124),
    getTag = __webpack_require__(/*! ./_getTag */ 130),
    isArray = __webpack_require__(/*! ./isArray */ 1),
    isBuffer = __webpack_require__(/*! ./isBuffer */ 46),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ 48);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 118 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 119 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 120 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 121 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 9),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ 122),
    eq = __webpack_require__(/*! ./eq */ 18),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ 52),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ 123),
    setToArray = __webpack_require__(/*! ./_setToArray */ 33);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 122 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ 2);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 123 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 124 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ 125);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 125 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ 126),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ 127),
    keys = __webpack_require__(/*! ./keys */ 10);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 126 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ 53),
    isArray = __webpack_require__(/*! ./isArray */ 1);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 127 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ 128),
    stubArray = __webpack_require__(/*! ./stubArray */ 129);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 128 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 129 */
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 130 */
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ 131),
    Map = __webpack_require__(/*! ./_Map */ 29),
    Promise = __webpack_require__(/*! ./_Promise */ 132),
    Set = __webpack_require__(/*! ./_Set */ 54),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ 133),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 8),
    toSource = __webpack_require__(/*! ./_toSource */ 45);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 131 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 3),
    root = __webpack_require__(/*! ./_root */ 2);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 132 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 3),
    root = __webpack_require__(/*! ./_root */ 2);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 133 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 3),
    root = __webpack_require__(/*! ./_root */ 2);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 134 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ 55),
    keys = __webpack_require__(/*! ./keys */ 10);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 135 */
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ 51),
    get = __webpack_require__(/*! ./get */ 34),
    hasIn = __webpack_require__(/*! ./hasIn */ 141),
    isKey = __webpack_require__(/*! ./_isKey */ 36),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ 55),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ 56),
    toKey = __webpack_require__(/*! ./_toKey */ 12);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 136 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ 137);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 137 */
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ 138);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 138 */
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ 30);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 139 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ 140);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 140 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 9),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ 37),
    isArray = __webpack_require__(/*! ./isArray */ 1),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 21);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 141 */
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ 142),
    hasPath = __webpack_require__(/*! ./_hasPath */ 143);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 142 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 143 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ 35),
    isArguments = __webpack_require__(/*! ./isArguments */ 27),
    isArray = __webpack_require__(/*! ./isArray */ 1),
    isIndex = __webpack_require__(/*! ./_isIndex */ 15),
    isLength = __webpack_require__(/*! ./isLength */ 28),
    toKey = __webpack_require__(/*! ./_toKey */ 12);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 144 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ 145),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ 146),
    isKey = __webpack_require__(/*! ./_isKey */ 36),
    toKey = __webpack_require__(/*! ./_toKey */ 12);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 145 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 146 */
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ 57);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 147 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_castFunction.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ 22);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 148 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayReduce.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 149 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ 6);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 150 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseReduce.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;


/***/ }),
/* 151 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_createFind.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 11),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 6),
    keys = __webpack_require__(/*! ./keys */ 10);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),
/* 152 */
/*!******************************************!*\
  !*** ./node_modules/lodash/findIndex.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ 60),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 11),
    toInteger = __webpack_require__(/*! ./toInteger */ 38);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),
/* 153 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ 154);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 154 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ 155),
    isObject = __webpack_require__(/*! ./isObject */ 4),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 21);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 155 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ 156);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),
/* 156 */
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),
/* 157 */
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 9),
    isArguments = __webpack_require__(/*! ./isArguments */ 27),
    isArray = __webpack_require__(/*! ./isArray */ 1);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 158 */
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ 37),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 11),
    baseMap = __webpack_require__(/*! ./_baseMap */ 159),
    isArray = __webpack_require__(/*! ./isArray */ 1);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),
/* 159 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ 59),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 6);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),
/* 160 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseDifference.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ 31),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ 65),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ 66),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ 37),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ 49),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ 32);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),
/* 161 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ 60),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ 162),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ 163);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 162 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsNaN.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 163 */
/*!***********************************************!*\
  !*** ./node_modules/lodash/_strictIndexOf.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 164 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ 22),
    overRest = __webpack_require__(/*! ./_overRest */ 165),
    setToString = __webpack_require__(/*! ./_setToString */ 167);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 165 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ 166);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 166 */
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 167 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ 168),
    shortOut = __webpack_require__(/*! ./_shortOut */ 170);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 168 */
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ 169),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ 42),
    identity = __webpack_require__(/*! ./identity */ 22);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 169 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 170 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 171 */
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ 6),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 5);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 172 */
/*!*************************************!*\
  !*** ./node_modules/lodash/uniq.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseUniq = __webpack_require__(/*! ./_baseUniq */ 173);

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),
/* 173 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseUniq.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ 31),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ 65),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ 66),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ 32),
    createSet = __webpack_require__(/*! ./_createSet */ 174),
    setToArray = __webpack_require__(/*! ./_setToArray */ 33);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),
/* 174 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_createSet.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./_Set */ 54),
    noop = __webpack_require__(/*! ./noop */ 175),
    setToArray = __webpack_require__(/*! ./_setToArray */ 33);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),
/* 175 */
/*!*************************************!*\
  !*** ./node_modules/lodash/noop.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 176 */
/*!********************************************************!*\
  !*** ./app/scripts/prototypo.js/precursor/Constant.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constant; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var Constant = /*#__PURE__*/function () {
  function Constant(value, cursor) {
    _classCallCheck(this, Constant);
    this.cursor = cursor;
    this.value = value;
  }
  return _createClass(Constant, [{
    key: "analyzeDependency",
    value: function analyzeDependency() {
      return undefined;
    }
  }, {
    key: "getResult",
    value: function getResult() {
      return this.value;
    }
  }, {
    key: "getNecessaryOperation",
    value: function getNecessaryOperation() {
      return [];
    }
  }, {
    key: "solveOperationOrder",
    value: function solveOperationOrder(glyph, operationOrder) {
      var result = [];
      if (operationOrder.indexOf(this.cursor) === -1) {
        result.push(this.cursor);
      }
      return result;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value:
    // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
}();

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(Constant, "Constant", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Constant.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(_typeof, "_typeof", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Constant.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Constant.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Constant.js");
  reactHotLoader.register(_createClass, "_createClass", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Constant.js");
  reactHotLoader.register(_toPropertyKey, "_toPropertyKey", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Constant.js");
  reactHotLoader.register(_toPrimitive, "_toPrimitive", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Constant.js");
  reactHotLoader.register(__signature__, "__signature__", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Constant.js");
  reactHotLoader.register(Constant, "Constant", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Constant.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ 0)(module)))

/***/ }),
/* 177 */
/*!*********************************************!*\
  !*** ./node_modules/tuplemap/dist/index.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function TupleMap(opts) {
  if (opts && 'limit' in opts) {
    this._limit = opts.limit;
  }
  this.clear();
}

TupleMap.prototype = {
  toString: function toString() {
    return '[object TupleMap]';
  },
  _hash: function _hash(tuple) {
    // Speed up hash generation for the folowing pattern:
    // if ( !cache.has(t) ) { cache.set( t, slowFn(t) ); }
    if (tuple === this._lastTuple) {
      return this._lastHash;
    }

    var l = tuple.length;
    var hash = [];

    for (var i = 0; i < l; i++) {
      var arg = tuple[i];
      var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

      // if the argument is not a primitive, get a unique (memoized?) id for it
      // (typeof null is "object", but should be considered a primitive)
      if (arg !== null && (argType === 'object' || argType === 'function')) {
        if (this._idMap.has(arg)) {
          hash.push(this._idMap.get(arg));
        } else {
          var id = '#' + this._id++;
          this._idMap.set(arg, id);
          hash.push(id);
        }

        // otherwise, add the argument and its type to the hash
      } else {
        hash.push(argType === 'string' ? '"' + arg + '"' : '' + arg);
      }
    }

    this._lastTuple = tuple;
    // concatenate serialized arguments using a complex separator
    // (to avoid key collisions)
    this._lastHash = hash.join('/<[MI_SEP]>/');

    return this._lastHash;
  },

  has: function has(tuple) {
    var hash = this._hash(tuple);
    return this._cache.has(hash);
  },

  set: function set(tuple, value) {
    var hash = this._hash(tuple);

    if (this._limit !== undefined) {
      this._cache.delete(hash);
    }

    this._cache.set(hash, value);

    if (this._limit !== undefined && this._cache.size > this._limit) {
      this._cache.delete(this._cache.keys().next().value);
    }

    return this;
  },

  get: function get(tuple) {
    var hash = this._hash(tuple);

    if (this._limit !== undefined && this._cache.has(hash)) {
      var value = this._cache.get(hash);
      this._cache.delete(hash);
      this._cache.set(hash, value);
      return value;
    }

    return this._cache.get(hash);
  },

  clear: function clear() {
    this._cache = new Map();
    this._idMap = new WeakMap();
    this._id = 0;
    delete this._lastTuple;
    delete this._lastHash;
  }
};

exports.default = TupleMap;
module.exports = exports['default'];

//# sourceMappingURL=index.js.map

/***/ }),
/* 178 */
/*!*****************************************************!*\
  !*** ./app/scripts/prototypo.js/precursor/Glyph.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Glyph; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_chunk__ = __webpack_require__(/*! lodash/chunk */ 179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_chunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_chunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_mapValues__ = __webpack_require__(/*! lodash/mapValues */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_mapValues___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_mapValues__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_reduce__ = __webpack_require__(/*! lodash/reduce */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_forOwn__ = __webpack_require__(/*! lodash/forOwn */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_forOwn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_forOwn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_flatMap__ = __webpack_require__(/*! lodash/flatMap */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_flatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_flatMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_reverse__ = __webpack_require__(/*! lodash/reverse */ 181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_reverse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_reverse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_get__ = __webpack_require__(/*! lodash/get */ 34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_set__ = __webpack_require__(/*! lodash/set */ 182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_memoize_immutable__ = __webpack_require__(/*! memoize-immutable */ 40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_memoize_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_memoize_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_generic__ = __webpack_require__(/*! ../utils/generic */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_updateUtils__ = __webpack_require__(/*! ../utils/updateUtils */ 67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Component__ = __webpack_require__(/*! ./Component */ 185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ExpandingNode__ = __webpack_require__(/*! ./ExpandingNode */ 70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Path__ = __webpack_require__(/*! ./Path */ 58);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};














function getFromGlyphAndXPath(glyph, path) {
  var result;
  var pathArray = Object(__WEBPACK_IMPORTED_MODULE_9__utils_generic__["c" /* memoizeSplit */])(path);
  if (pathArray.length === 1) {
    result = glyph[pathArray[0]];
  } else if (pathArray.length > 1) {
    result = glyph[pathArray[0]];
    pathArray = pathArray.slice(1, pathArray.length);
    pathArray.forEach(function (propName) {
      if (!((!result[propName] || result[propName] === null) && result.solveOperationOrder instanceof Function)) {
        result = result[propName];
      }
    });
  }
  if (!(result.solveOperationOrder instanceof Function)) {
    console.error("While trying to solve ".concat(this.name.value, " operation order, couldn't find ").concat(path)); // eslint-disable-line no-console, max-len
  }
  return result;
}
var memGetFromXPath = __WEBPACK_IMPORTED_MODULE_8_memoize_immutable___default()(getFromGlyphAndXPath);

/* eslint-disable */
function checkAndChangeOrient(beziers, clockwise) {
  var result = [];
  for (var i = 0; i < beziers.length; i++) {
    var bezier = beziers[i];
    var count = 0;
    var flatBezier = [];
    for (var k = 0; k < bezier.length; k++) {
      Array.prototype.push.apply(flatBezier, bezier[k]);
    }
    for (var j = 0; j < flatBezier.length; j++) {
      var point = flatBezier[j];
      var next = flatBezier[(j + 1) % flatBezier.length];
      count += (next.x - point.x) * (next.y + point.y);
    }
    if (count > 0 && clockwise || count < 0 && !clockwise) {
      result.push(__WEBPACK_IMPORTED_MODULE_0_lodash_chunk___default()(flatBezier.reverse(), 4));
    } else {
      result.push(bezier);
    }
  }
  return result;
}
/* eslint-enable */

var keyToTransform = ['unicode', 'name', 'componentLabel', 'characterName', 'tags', 'transforms', 'transformOrigin', 'base', 'global'];
var Glyph = /*#__PURE__*/function () {
  function Glyph(glyphSrc, paramBase, _ref) {
    var _this = this;
    var resolveOp = _ref.resolveOp;
    _classCallCheck(this, Glyph);
    var name = glyphSrc.name,
      parameter = glyphSrc.parameter,
      anchor = glyphSrc.anchor,
      outline = glyphSrc.outline,
      base = glyphSrc.base;
    paramBase.manualChanges[name] = {
      // eslint-disable-line no-param-reassign
      cursors: {}
    };
    paramBase.postDepManualChanges[name] = {
      // eslint-disable-line no-param-reassign
      cursors: {}
    };
    if (base !== undefined) {
      paramBase.manualChanges[base] = {
        // eslint-disable-line no-param-reassign
        cursors: {}
      };
      paramBase.postDepManualChanges[base] = {
        // eslint-disable-line no-param-reassign
        cursors: {}
      };
    }
    paramBase.glyphComponentChoice[name] = {}; // eslint-disable-line no-param-reassign

    keyToTransform.forEach(function (key) {
      _this[key] = Object(__WEBPACK_IMPORTED_MODULE_9__utils_generic__["a" /* constantOrFormula */])(glyphSrc[key]);
    });
    this.parameters = __WEBPACK_IMPORTED_MODULE_1_lodash_mapValues___default()(parameter, function (param) {
      return Object(__WEBPACK_IMPORTED_MODULE_9__utils_generic__["a" /* constantOrFormula */])(param);
    });
    this.paramKeys = Object.keys(this.parameters);
    this.contours = outline.contour.map(function (contour, i) {
      return Object(__WEBPACK_IMPORTED_MODULE_9__utils_generic__["b" /* createContour */])(contour, i);
    });
    this.anchors = (anchor || []).map(function (item, i) {
      return __WEBPACK_IMPORTED_MODULE_1_lodash_mapValues___default()(item, function (props, anchorName) {
        return Object(__WEBPACK_IMPORTED_MODULE_9__utils_generic__["a" /* constantOrFormula */])(props, "anchors.".concat(i, ".").concat(anchorName));
      });
    });
    this.anchorKeys = Object.keys(this.anchors);

    // this.analyzeDependency();
    if (glyphSrc.operationOrder) {
      this.operationOrder = glyphSrc.operationOrder;
    } else {
      this.operationOrder = this.solveOperationOrder();
    }
    if (resolveOp) {
      this.resolveOperationTarget();
    }
    this.components = outline.component.map(function (component, i) {
      var componentObject = new __WEBPACK_IMPORTED_MODULE_11__Component__["a" /* default */](component, "component.".concat(i), _this);
      componentObject.base.forEach(function (compBase) {
        paramBase.manualChanges[compBase.value] = {
          cursors: {}
        };
      });
      return componentObject;
    });
    this.componentsName = this.components.map(function (c, i) {
      return "components.".concat(i);
    });
    for (var i = 0; i < this.operationOrder.length; i++) {
      var op = this.operationOrder[i];
      if (_typeof(op) !== 'object') {
        var obj = this.getFromXPath(op);
        if (obj.dependencies) {
          __WEBPACK_IMPORTED_MODULE_7_lodash_set___default()(this.dependencyTree, op, obj.dependencies);
        }
      }
    }
    if (glyphSrc.ot) {
      this.advanceWidth = Object(__WEBPACK_IMPORTED_MODULE_9__utils_generic__["a" /* constantOrFormula */])(glyphSrc.ot.advanceWidth);
    }
  }
  return _createClass(Glyph, [{
    key: "solveOperationOrder",
    value: function solveOperationOrder() {
      var _this2 = this;
      var contourOp = __WEBPACK_IMPORTED_MODULE_2_lodash_reduce___default()(this.contours, function (result, contour) {
        result.push.apply(result, _toConsumableArray(contour.solveOperationOrder(_this2, result)));
        return result;
      }, []);
      return __WEBPACK_IMPORTED_MODULE_2_lodash_reduce___default()(this.anchors, function (acc, anchor) {
        var anchorOp = _toConsumableArray(acc);
        __WEBPACK_IMPORTED_MODULE_3_lodash_forOwn___default()(anchor, function (prop) {
          anchorOp.push.apply(anchorOp, _toConsumableArray(prop.solveOperationOrder(_this2, anchorOp)));
        });
        return anchorOp;
      }, contourOp);
    }
  }, {
    key: "resolveOperationTarget",
    value: function resolveOperationTarget() {
      for (var i = 0; i < this.operationOrder.length; i++) {
        var op = this.operationOrder[i];
        if (_typeof(op) !== 'object') {
          this.operationOrder[i] = this.getFromXPath(op);
        }
      }
    }
  }, {
    key: "createGlyphContour",
    value: function createGlyphContour(contours) {
      var beziers = __WEBPACK_IMPORTED_MODULE_4_lodash_flatMap___default()(contours, function (contour) {
        if (!contour.skeleton) {
          var _otBeziers = [contour.nodes.map(function (node, i) {
            var nextNode = contour.nodes[(i + 1) % contour.nodes.length];
            var bezier = [{
              x: node.x,
              y: node.y
            }, {
              x: node.handleOut.x,
              y: node.handleOut.y
            }, {
              x: nextNode.handleIn.x,
              y: nextNode.handleIn.y
            }, {
              x: nextNode.x,
              y: nextNode.y
            }];
            return bezier;
          })];
          return checkAndChangeOrient(_otBeziers, true);
        } else if (!contour.closed) {
          var _otBeziers2 = [contour.nodes.reduceRight(function (acc, node, i) {
            var bezier = [0, 1].map(function (index) {
              var secondIndex = index;
              var firstIndex = i + 1 * (index ? -1 : 1);
              if (firstIndex > contour.nodes.length - 1) {
                firstIndex = contour.nodes.length - 1;
                secondIndex = 1;
              } else if (firstIndex < 0) {
                firstIndex = 0;
                secondIndex = 0;
              }
              var nextNode = contour.nodes[firstIndex].expandedTo[secondIndex];
              return [{
                x: node.expandedTo[index].x,
                y: node.expandedTo[index].y
              }, {
                x: node.expandedTo[index].handleOut.x,
                y: node.expandedTo[index].handleOut.y
              }, {
                x: nextNode.handleIn.x,
                y: nextNode.handleIn.y
              }, {
                x: nextNode.x,
                y: nextNode.y
              }];
            });
            acc.push(bezier[1]);
            acc.unshift(bezier[0]);
            return acc;
          }, [])];
          return checkAndChangeOrient(_otBeziers2, true);
        }
        var otBeziers = [0, 1].map(function (index) {
          var result = contour.nodes.map(function (node, i) {
            var nextNode = contour.nodes[i + 1 - contour.nodes.length * Math.floor((i + 1) / contour.nodes.length)].expandedTo[index];
            var handleOut = index ? node.expandedTo[index].handleIn : node.expandedTo[index].handleOut;
            var handleIn = index ? nextNode.handleOut : nextNode.handleIn;
            var bezier = [{
              x: node.expandedTo[index].x,
              y: node.expandedTo[index].y
            }, handleOut, handleIn, {
              x: nextNode.x,
              y: nextNode.y
            }];
            if (index) {
              return __WEBPACK_IMPORTED_MODULE_5_lodash_reverse___default()(bezier);
            }
            return bezier;
          });
          if (index) {
            return __WEBPACK_IMPORTED_MODULE_5_lodash_reverse___default()(result);
          }
          return result;
        });
        return [].concat(_toConsumableArray(checkAndChangeOrient([otBeziers[0]], true)), _toConsumableArray(checkAndChangeOrient([otBeziers[1]], false)));
      });
      return beziers;
    }
  }, {
    key: "getFromXPath",
    value: function getFromXPath(path) {
      return memGetFromXPath(this, path);
    }
  }, {
    key: "analyzeDependency",
    value: function analyzeDependency(graph) {
      var _this3 = this;
      __WEBPACK_IMPORTED_MODULE_3_lodash_forOwn___default()(this, function (value) {
        if (value !== undefined) {
          if (typeof value.analyzeDependency === 'function') {
            value.analyzeDependency(_this3, graph);
          } else if (Array.isArray(value)) {
            value.forEach(function (item) {
              if (typeof item.analyzeDependency === 'function') {
                item.analyzeDependency(_this3, graph);
              } else if (_typeof(item) === 'object' && item !== null) {
                __WEBPACK_IMPORTED_MODULE_3_lodash_forOwn___default()(item, function (prop) {
                  if (typeof prop.analyzeDependency === 'function') {
                    prop.analyzeDependency(_this3, graph);
                  }
                });
              }
            });
          } else if (_typeof(value) === 'object' && value !== null) {
            __WEBPACK_IMPORTED_MODULE_3_lodash_forOwn___default()(value, function (val) {
              if (typeof val.analyzeDependency === 'function') {
                val.analyzeDependency(_this3, graph);
              }
            });
          }
        }
      });
    }
  }, {
    key: "handleHandleOp",
    value: function handleHandleOp(_ref2, opDone, params) {
      var cursor = _ref2.cursor;
      var contour = this.getFromXPath(cursor);
      var dest = __WEBPACK_IMPORTED_MODULE_6_lodash_get___default()(opDone, cursor);
      if (contour.skeleton.value) {
        __WEBPACK_IMPORTED_MODULE_13__Path__["c" /* SkeletonPath */].correctValues(dest);
        if (contour.closed.value) {
          __WEBPACK_IMPORTED_MODULE_13__Path__["a" /* ClosedSkeletonPath */].createHandle(dest, params.manualChanges[this.name.value].cursors, params.curviness);
        } else {
          __WEBPACK_IMPORTED_MODULE_13__Path__["c" /* SkeletonPath */].createHandle(dest, params.manualChanges[this.name.value].cursors, params.curviness);
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_13__Path__["b" /* SimplePath */].correctValues(dest);
        __WEBPACK_IMPORTED_MODULE_7_lodash_set___default()(opDone, "".concat(cursor, ".checkOrientation"), true);
        __WEBPACK_IMPORTED_MODULE_13__Path__["b" /* SimplePath */].createHandle(dest, params.manualChanges[this.name.value].cursors, params.curviness);
      }
    }
  }, {
    key: "handleExpandOp",
    value: function handleExpandOp(_ref3, opDone, params) {
      var cursor = _ref3.cursor;
      var manualChanges = params.manualChanges[this.name.value].cursors;
      var node = __WEBPACK_IMPORTED_MODULE_12__ExpandingNode__["a" /* default */].applyExpandChange(__WEBPACK_IMPORTED_MODULE_6_lodash_get___default()(opDone, cursor), manualChanges, cursor);
      var expandedTo = __WEBPACK_IMPORTED_MODULE_12__ExpandingNode__["a" /* default */].expand(node);
      __WEBPACK_IMPORTED_MODULE_7_lodash_set___default()(opDone, "".concat(cursor, ".expandedTo"), expandedTo);
    }
  }, {
    key: "handleOp",
    value: function handleOp(obj, opDone, localParams, parentAnchors) {
      var op = obj.cursor;
      var result = obj.getResult(localParams, opDone.contours, opDone.anchors, parentAnchors, __WEBPACK_IMPORTED_MODULE_10__utils_updateUtils__);
      var option = op.substr(op.length - 2);
      if (option === '.x' || option === '.y') {
        __WEBPACK_IMPORTED_MODULE_7_lodash_set___default()(opDone, "".concat(op, "Base"), result);
        var manualChanges = localParams.manualChanges[this.name.value].cursors[op] || 0;
        result += manualChanges;
      }
      __WEBPACK_IMPORTED_MODULE_7_lodash_set___default()(opDone, op, result);
    }
  }, {
    key: "constructGlyph",
    value: function constructGlyph(params, parentAnchors, glyphs) {
      var parentTransformTuple = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [[[], undefined]];
      var localParams = {};
      var paramKeys = Object.keys(params);
      var thisParamKeys = this.paramKeys;
      for (var i = 0; i < paramKeys.length; i++) {
        localParams[paramKeys[i]] = params[paramKeys[i]];
      }
      localParams.manualChanges = _defineProperty({}, this.name.value, {
        cursors: {}
      });
      localParams.postDepManualChanges = _defineProperty({}, this.name.value, {
        cursors: {}
      });
      var manualParamKeys = Object.keys(params.manualChanges[this.name.value].cursors);
      var postDepManualParamKeys = Object.keys(params.postDepManualChanges[this.name.value].cursors);
      for (var _i = 0; _i < manualParamKeys.length; _i++) {
        localParams.manualChanges[this.name.value].cursors[manualParamKeys[_i]] = params.manualChanges[this.name.value].cursors[manualParamKeys[_i]];
      }
      for (var _i2 = 0; _i2 < thisParamKeys.length; _i2++) {
        localParams[thisParamKeys[_i2]] = this.parameters[thisParamKeys[_i2]].getResult(localParams);
      }
      for (var _i3 = 0; _i3 < postDepManualParamKeys.length; _i3++) {
        localParams.postDepManualChanges[this.name.value].cursors[postDepManualParamKeys[_i3]] = params.postDepManualChanges[this.name.value].cursors[postDepManualParamKeys[_i3]];
      }
      if (this.base.value !== undefined) {
        var manualParamsKeys = Object.keys(params.manualChanges[this.base.value].cursors);
        for (var _i4 = 0; _i4 < manualParamsKeys.length; _i4++) {
          localParams.manualChanges[this.name.value].cursors[manualParamsKeys[_i4]] = params.manualChanges[this.base.value].cursors[manualParamsKeys[_i4]] + (params.manualChanges[this.name.value].cursors[manualParamsKeys[_i4]] || 0);
        }
        var postDepManualParamsKeys = Object.keys(params.postDepManualChanges[this.base.value].cursors);
        for (var _i5 = 0; _i5 < postDepManualParamsKeys.length; _i5++) {
          localParams.postDepManualChanges[this.name.value].cursors[postDepManualParamsKeys[_i5]] = params.postDepManualChanges[this.base.value].cursors[postDepManualParamsKeys[_i5]] + (params.postDepManualChanges[this.name.value].cursors[postDepManualParamsKeys[_i5]] || 0);
        }
      }
      var specialProps = this.unicode ? (localParams.glyphSpecialProps || {})[this.unicode.value] || {} : {};
      var baseSpacingLeft = localParams.spacingLeft;
      var baseSpacingRight = localParams.spacingRight;
      var transformedThis = {};
      localParams.spacingLeft += specialProps.spacingLeft || 0;
      localParams.spacingRight += specialProps.spacingRight || 0;
      var opDone = {
        contours: [],
        anchors: [],
        components: []
      };
      for (var _i6 = 0; _i6 < this.operationOrder.length; _i6++) {
        var op = this.operationOrder[_i6];
        if (op.action === 'handle') {
          this.handleHandleOp(op, opDone, localParams);
        } else if (op.action === 'expand') {
          this.handleExpandOp(op, opDone, localParams);
        } else {
          this.handleOp(op, opDone, localParams, parentAnchors);
        }
      }
      var localParamsKeys = Object.keys(localParams.postDepManualChanges[this.name.value].cursors);
      for (var _i7 = 0; _i7 < localParamsKeys.length; _i7++) {
        var cursor = localParamsKeys[_i7];
        var parentCursor = cursor.substr(0, cursor.length - 2);
        var downCursor = cursor.substr(-1);
        var obj = __WEBPACK_IMPORTED_MODULE_6_lodash_get___default()(opDone, parentCursor);
        if (obj) {
          obj[downCursor] += localParams.postDepManualChanges[this.name.value].cursors[cursor];
        }
      }
      var opAnchors = opDone.anchors;
      var anchorsKeys = this.anchorKeys;
      for (var _i8 = 0; _i8 < anchorsKeys.length; _i8++) {
        var key = anchorsKeys[_i8];
        var anchor = this.anchors[key];
        var anchorKeys = Object.keys(anchor);
        for (var j = 0; j < anchorKeys.length; j++) {
          var name = anchorKeys[j];
          var computedAnchor = opAnchors[key][name] || anchor[name].getResult(localParams, opDone.contours, opAnchors, parentAnchors, __WEBPACK_IMPORTED_MODULE_10__utils_updateUtils__);
          opAnchors[key][name] = computedAnchor;
        }
      }
      for (var _i9 = 0; _i9 < keyToTransform.length; _i9++) {
        var _key = keyToTransform[_i9];
        var prop = this[_key];
        transformedThis[_key] = prop.getResult(localParams, opDone.contours, opDone.anchors, __WEBPACK_IMPORTED_MODULE_10__utils_updateUtils__, glyphs);
      }
      if (this.advanceWidth) {
        transformedThis.advanceWidth = this.advanceWidth.getResult(localParams, opDone.contours, opDone.anchors, __WEBPACK_IMPORTED_MODULE_10__utils_updateUtils__, glyphs);
      }
      var transforms = [];
      transforms.push([transformedThis.transforms || [], transformedThis.transformOrigin]);
      Array.prototype.push.apply(transforms, parentTransformTuple);
      for (var idx = 0; idx < this.components.length; idx++) {
        var component = this.components[idx];
        var componentManualChanges = {};
        var componentPostDepManualChanges = {};
        var glyphManualChanges = localParams.manualChanges[this.name.value].cursors;
        var glyphPostDepManualChanges = localParams.postDepManualChanges[this.name.value].cursors;
        var componentName = component.base[0].value;
        if (component.id && localParams.glyphComponentChoice[this.name.value][component.id.value]) {
          componentName = localParams.glyphComponentChoice[this.name.value][component.id.value];
        } else if (component.componentClass && localParams.glyphComponentChoice[component.componentClass.value]) {
          componentName = localParams.glyphComponentChoice[component.componentClass.value];
        }

        // We all know this is ugly AF however runing a function is cost intensive and
        // we can't really afford anything here
        // We could develop a inliner transform
        var keys = Object.keys(glyphManualChanges);
        for (var _i0 = 0; _i0 < keys.length; _i0++) {
          var _key2 = keys[_i0];
          var criteria = "components.".concat(idx);
          if (_key2.indexOf(criteria) !== -1) {
            componentManualChanges[_key2.substr(criteria.length + 1)] = glyphManualChanges[_key2];
          }
        }
        var globalComponentChange = (params.manualChanges[componentName] || {
          cursors: {}
        }).cursors;
        var globalCompChangeKeys = Object.keys(globalComponentChange);
        for (var _i1 = 0; _i1 < globalCompChangeKeys.length; _i1++) {
          var globalCompChangeKey = globalCompChangeKeys[_i1];
          var _criteria = "components.".concat(idx);
          componentManualChanges[globalCompChangeKey.substr(_criteria.length + 1)] = (componentManualChanges[globalCompChangeKey.substr(_criteria.length + 1)] || 0) + globalComponentChange[globalCompChangeKey];
        }
        var postDepKeys = Object.keys(glyphPostDepManualChanges);
        for (var _i10 = 0; _i10 < postDepKeys.length; _i10++) {
          var _key3 = postDepKeys[_i10];
          var _criteria2 = "components.".concat(idx);
          if (_key3.indexOf(_criteria2) !== -1) {
            componentPostDepManualChanges[_key3.substr(_criteria2.length + 1)] = glyphPostDepManualChanges[_key3];
          }
        }
        var globalPostDepComponentChange = (params.postDepManualChanges[componentName] || {
          cursors: {}
        }).cursors;
        var globalPostDepCompChangeKeys = Object.keys(globalPostDepComponentChange);
        for (var _i11 = 0; _i11 < globalPostDepCompChangeKeys.length; _i11++) {
          var globalPostDepCompChangeKey = globalPostDepCompChangeKeys[_i11];
          var _criteria3 = "components.".concat(idx);
          componentPostDepManualChanges[globalPostDepCompChangeKey.substr(_criteria3.length + 1)] = (componentPostDepManualChanges[globalPostDepCompChangeKey.substr(_criteria3.length + 1)] || 0) + globalPostDepComponentChange[globalPostDepCompChangeKey];
        }
        var componentParams = {};
        var _localParamsKeys = Object.keys(localParams);
        for (var _i12 = 0; _i12 < _localParamsKeys.length; _i12++) {
          componentParams[_localParamsKeys[_i12]] = localParams[_localParamsKeys[_i12]];
        }
        componentParams.manualChanges[componentName] = {
          cursors: componentManualChanges
        };
        componentParams.postDepManualChanges[componentName] = {
          cursors: componentPostDepManualChanges
        };
        componentParams.componentChoice = componentName;
        opDone.components.push(component.constructComponent(componentParams, opDone.contours, opDone.anchors, __WEBPACK_IMPORTED_MODULE_10__utils_updateUtils__, glyphs, transforms));
      }
      Object(__WEBPACK_IMPORTED_MODULE_9__utils_generic__["d" /* transformGlyph */])(opDone, transforms);
      var otContours = this.createGlyphContour(opDone.contours);
      for (var _i13 = 0; _i13 < opDone.components.length; _i13++) {
        if (opDone.components[_i13].name !== 'none') {
          Array.prototype.push.apply(otContours, opDone.components[_i13].otContours);
        }
      }
      return _objectSpread(_objectSpread(_objectSpread({}, transformedThis), opDone), {}, {
        spacingLeft: localParams.spacingLeft,
        spacingRight: localParams.spacingRight,
        componentLabel: this.componentLabel ? this.componentLabel.value : undefined,
        baseSpacingRight: baseSpacingRight,
        baseSpacingLeft: baseSpacingLeft,
        dependencyTree: this.dependencyTree,
        otContours: otContours
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value:
    // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
}();

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(getFromGlyphAndXPath, "getFromGlyphAndXPath", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(memGetFromXPath, "memGetFromXPath", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(checkAndChangeOrient, "checkAndChangeOrient", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(keyToTransform, "keyToTransform", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(Glyph, "Glyph", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(ownKeys, "ownKeys", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(_objectSpread, "_objectSpread", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(_toConsumableArray, "_toConsumableArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(_nonIterableSpread, "_nonIterableSpread", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(_unsupportedIterableToArray, "_unsupportedIterableToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(_iterableToArray, "_iterableToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(_arrayWithoutHoles, "_arrayWithoutHoles", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(_arrayLikeToArray, "_arrayLikeToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(_typeof, "_typeof", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(_createClass, "_createClass", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(_toPropertyKey, "_toPropertyKey", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(_toPrimitive, "_toPrimitive", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(__signature__, "__signature__", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(getFromGlyphAndXPath, "getFromGlyphAndXPath", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(memGetFromXPath, "memGetFromXPath", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(checkAndChangeOrient, "checkAndChangeOrient", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(keyToTransform, "keyToTransform", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
  reactHotLoader.register(Glyph, "Glyph", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Glyph.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ 0)(module)))

/***/ }),
/* 179 */
/*!**************************************!*\
  !*** ./node_modules/lodash/chunk.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ 64),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ 180),
    toInteger = __webpack_require__(/*! ./toInteger */ 38);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
    size = 1;
  } else {
    size = nativeMax(toInteger(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = baseSlice(array, index, (index += size));
  }
  return result;
}

module.exports = chunk;


/***/ }),
/* 180 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ 18),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 6),
    isIndex = __webpack_require__(/*! ./_isIndex */ 15),
    isObject = __webpack_require__(/*! ./isObject */ 4);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 181 */
/*!****************************************!*\
  !*** ./node_modules/lodash/reverse.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeReverse = arrayProto.reverse;

/**
 * Reverses `array` so that the first element becomes the last, the second
 * element becomes the second to last, and so on.
 *
 * **Note:** This method mutates `array` and is based on
 * [`Array#reverse`](https://mdn.io/Array/reverse).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = [1, 2, 3];
 *
 * _.reverse(array);
 * // => [3, 2, 1]
 *
 * console.log(array);
 * // => [3, 2, 1]
 */
function reverse(array) {
  return array == null ? array : nativeReverse.call(array);
}

module.exports = reverse;


/***/ }),
/* 182 */
/*!************************************!*\
  !*** ./node_modules/lodash/set.js ***!
  \************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(/*! ./_baseSet */ 183);

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ }),
/* 183 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ 184),
    castPath = __webpack_require__(/*! ./_castPath */ 35),
    isIndex = __webpack_require__(/*! ./_isIndex */ 15),
    isObject = __webpack_require__(/*! ./isObject */ 4),
    toKey = __webpack_require__(/*! ./_toKey */ 12);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),
/* 184 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 41),
    eq = __webpack_require__(/*! ./eq */ 18);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 185 */
/*!*********************************************************!*\
  !*** ./app/scripts/prototypo.js/precursor/Component.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_mapValues__ = __webpack_require__(/*! lodash/mapValues */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_mapValues___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_mapValues__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_generic__ = __webpack_require__(/*! ../utils/generic */ 7);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


var keyToTransform = ['id', 'transforms', 'transformOrigin', 'componentClass'];
var Component = /*#__PURE__*/function () {
  function Component(source) {
    _classCallCheck(this, Component);
    if (Array.isArray(source.base)) {
      this.base = source.base.map(function (base) {
        return Object(__WEBPACK_IMPORTED_MODULE_1__utils_generic__["a" /* constantOrFormula */])(base);
      });
    } else {
      this.base = [Object(__WEBPACK_IMPORTED_MODULE_1__utils_generic__["a" /* constantOrFormula */])(source.base)];
    }
    this.parameters = __WEBPACK_IMPORTED_MODULE_0_lodash_mapValues___default()(source.parameters, function (param) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils_generic__["a" /* constantOrFormula */])(param);
    });
    this.id = Object(__WEBPACK_IMPORTED_MODULE_1__utils_generic__["a" /* constantOrFormula */])(source.id);
    this.componentClass = Object(__WEBPACK_IMPORTED_MODULE_1__utils_generic__["a" /* constantOrFormula */])(source.class);
    this.anchors = (source.anchor || []).map(function (item, i) {
      return __WEBPACK_IMPORTED_MODULE_0_lodash_mapValues___default()(item, function (props, name) {
        return Object(__WEBPACK_IMPORTED_MODULE_1__utils_generic__["a" /* constantOrFormula */])(props, "anchors.".concat(i, ".").concat(name));
      });
    });
    this.transforms = Object(__WEBPACK_IMPORTED_MODULE_1__utils_generic__["a" /* constantOrFormula */])(source.transforms);
    this.transformOrigin = Object(__WEBPACK_IMPORTED_MODULE_1__utils_generic__["a" /* constantOrFormula */])(source.transformOrigin);
  }
  return _createClass(Component, [{
    key: "constructComponent",
    value: function constructComponent(params, contours, parentAnchors, utils, glyphs, parentTransformTuple) {
      var localParams = _objectSpread(_objectSpread({}, params), __WEBPACK_IMPORTED_MODULE_0_lodash_mapValues___default()(this.parameters, function (param) {
        return param.getResult(params, contours, [], parentAnchors, utils);
      }));
      var opDone = {
        anchors: []
      };
      for (var i = 0; i < Object.keys(this.anchors).length; i++) {
        var key = Object.keys(this.anchors)[i];
        var anchor = this.anchors[key];
        var accumulator = {};
        var anchorKeys = Object.keys(anchor);
        for (var j = 0; j < anchorKeys.length; j++) {
          var name = anchorKeys[j];
          accumulator[name] = anchor[name].getResult(localParams, contours, accumulator, parentAnchors, utils);
        }
        opDone.anchors[key] = accumulator;
      }
      var computedBase = params.componentChoice || this.base[0].getResult(localParams, contours, opDone.anchors, parentAnchors, utils);
      var compGlyph = glyphs[computedBase];
      var transformedThis = {};
      for (var _i = 0; _i < keyToTransform.length; _i++) {
        var _key = keyToTransform[_i];
        var prop = this[_key];
        transformedThis[_key] = prop.getResult(localParams, contours, parentAnchors, utils, glyphs);
      }
      var computedBaseArray = [];
      for (var _i2 = 0; _i2 < this.base.length; _i2++) {
        var base = this.base[_i2];
        var componentId = base.getResult(localParams, contours, parentAnchors, utils, glyphs);
        computedBaseArray.push({
          id: componentId,
          label: glyphs[componentId].componentLabel,
          componentClass: this.componentClass ? this.componentClass.value : undefined
        });
      }
      transformedThis.base = computedBaseArray;
      opDone = _objectSpread(_objectSpread(_objectSpread({}, opDone), compGlyph.constructGlyph(localParams, opDone.anchors, glyphs, [[transformedThis.transforms || [], transformedThis.transformOrigin]].concat(_toConsumableArray(parentTransformTuple)))), transformedThis);
      return opDone;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value:
    // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
}();

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(keyToTransform, "keyToTransform", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Component.js");
  reactHotLoader.register(Component, "Component", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Component.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(_typeof, "_typeof", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Component.js");
  reactHotLoader.register(_toConsumableArray, "_toConsumableArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Component.js");
  reactHotLoader.register(_nonIterableSpread, "_nonIterableSpread", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Component.js");
  reactHotLoader.register(_unsupportedIterableToArray, "_unsupportedIterableToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Component.js");
  reactHotLoader.register(_iterableToArray, "_iterableToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Component.js");
  reactHotLoader.register(_arrayWithoutHoles, "_arrayWithoutHoles", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Component.js");
  reactHotLoader.register(_arrayLikeToArray, "_arrayLikeToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Component.js");
  reactHotLoader.register(ownKeys, "ownKeys", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Component.js");
  reactHotLoader.register(_objectSpread, "_objectSpread", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Component.js");
  reactHotLoader.register(_defineProperty, "_defineProperty", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Component.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Component.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Component.js");
  reactHotLoader.register(_createClass, "_createClass", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Component.js");
  reactHotLoader.register(_toPropertyKey, "_toPropertyKey", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Component.js");
  reactHotLoader.register(_toPrimitive, "_toPrimitive", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Component.js");
  reactHotLoader.register(__signature__, "__signature__", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Component.js");
  reactHotLoader.register(keyToTransform, "keyToTransform", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Component.js");
  reactHotLoader.register(Component, "Component", "/Users/evgeniivarlygin/prototypo-master/app/scripts/prototypo.js/precursor/Component.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ 0)(module)))

/***/ }),
/* 186 */
/*!**************************************!*\
  !*** ./app/scripts/opentype/font.js ***!
  \**************************************/
/*! exports provided: usWeightClasses, usWidthClasses, fontToSfntTable */
/*! exports used: fontToSfntTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export usWeightClasses */
/* unused harmony export usWidthClasses */
/* harmony export (immutable) */ __webpack_exports__["a"] = fontToSfntTable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_reduce__ = __webpack_require__(/*! lodash/reduce */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_find__ = __webpack_require__(/*! lodash/find */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__check_js__ = __webpack_require__(/*! ./check.js */ 71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__os2_js__ = __webpack_require__(/*! ./os2.js */ 187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__table_js__ = __webpack_require__(/*! ./table.js */ 188);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var usWeightClasses = {
  THIN: 100,
  EXTRA_LIGHT: 200,
  LIGHT: 300,
  NORMAL: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
  BLACK: 900
};
var usWidthClasses = {
  ULTRA_CONDENSED: 1,
  EXTRA_CONDENSED: 2,
  CONDENSED: 3,
  SEMI_CONDENSED: 4,
  MEDIUM: 5,
  SEMI_EXPANDED: 6,
  EXPANDED: 7,
  EXTRA_EXPANDED: 8,
  ULTRA_EXPANDED: 9
};
function log2(v) {
  return Math.log(v) / Math.log(2) | 0;
}
function computeCheckSum(bytes) {
  while (bytes.length % 4 !== 0) {
    bytes.push(0);
  }
  var sum = 0;
  for (var i = 0; i < bytes.length; i += 4) {
    sum += (bytes[i] << 24) + (bytes[i + 1] << 16) + (bytes[i + 2] << 8) + bytes[i + 3];
  }
  sum %= Math.pow(2, 32);
  return sum;
}
function fontToSfntTable(font) {
  var ascender = font.ascender,
    descender = font.descender,
    unitsPerEm = font.unitsPerEm,
    glyphs = font.glyphs,
    createdTimestamp = font.createdTimestamp,
    fontFamily = font.fontFamily,
    fontSubfamily = font.fontSubfamily,
    postScriptName = font.postScriptName,
    manufacturer = font.manufacturer,
    manufacturerURL = font.manufacturerURL,
    designer = font.designer,
    designerURL = font.designerURL,
    license = font.license,
    licenseURL = font.licenseURL,
    version = font.version,
    description = font.description,
    copyright = font.copyright,
    trademark = font.trademark,
    usWeightClass = font.usWeightClass,
    usWidthClass = font.usWidthClass,
    fsSelection = font.fsSelection;
  var xMins = [];
  var yMins = [];
  var xMaxs = [];
  var yMaxs = [];
  var advanceWidths = [];
  var leftSideBearings = [];
  var rightSideBearings = [];
  var firstCharIndex = Infinity;
  var lastCharIndex = 0;
  var ulUnicodeRange1 = 0;
  var ulUnicodeRange2 = 0;
  var ulUnicodeRange3 = 0;
  var ulUnicodeRange4 = 0;
  font.glyphs.unshift({
    name: '.notdef',
    unicode: 0,
    otContours: [],
    advanceWidth: 100,
    spacingLeft: 0,
    spacingRight: 0
  });
  for (var i = 0; i < font.glyphs.length; i++) {
    var glyph = font.glyphs[i];
    var unicode = glyph.unicode;
    if (isNaN(glyph.advanceWidth)) {
      throw new Error("Glyph ".concat(glyph.name, " (").concat(i, "): advanceWidth is not a number"));
    }
    if (firstCharIndex > unicode && unicode > 0) {
      firstCharIndex = unicode;
    }
    if (lastCharIndex < unicode) {
      lastCharIndex = unicode;
    }
    var position = Object(__WEBPACK_IMPORTED_MODULE_3__os2_js__["a" /* getUnicodeRange */])(unicode);
    if (position < 32) {
      ulUnicodeRange1 |= 1 << position;
    } else if (position < 64) {
      ulUnicodeRange2 |= 1 << position - 32;
    } else if (position < 96) {
      ulUnicodeRange3 |= 1 << position - 64;
    } else if (position < 123) {
      ulUnicodeRange4 |= 1 << position - 96;
    } else {
      throw new Error('Unicode ranges bits > 123 are reserved for internal usage');
    }
    if (glyph.name === '.notdef') {
      continue;
    }
    var metrics = getMetrics(glyph);
    xMins.push(metrics.xMin);
    yMins.push(metrics.yMin);
    xMaxs.push(metrics.xMax);
    yMaxs.push(metrics.yMax);
    leftSideBearings.push(metrics.leftSideBearing);
    rightSideBearings.push(metrics.rightSideBearing);
    advanceWidths.push(glyph.advanceWidth);
  }
  var advanceWidthMax = Math.max.apply(null, advanceWidths);
  var advanceWithAvg = __WEBPACK_IMPORTED_MODULE_0_lodash_reduce___default()(advanceWidths, function (acc, item) {
    return acc + item;
  }, 0) / advanceWidths.length;
  var minLeftSideBearing = Math.min.apply(null, leftSideBearings);
  var maxLeftSideBearing = Math.min.apply(null, leftSideBearings);
  var xMin = Math.min.apply(null, xMins);
  var yMin = Math.min.apply(null, yMins);
  var xMax = Math.max.apply(null, xMaxs);
  var yMax = Math.max.apply(null, yMaxs);
  var headTable = __WEBPACK_IMPORTED_MODULE_4__table_js__["e" /* head */].make({
    flags: 3,
    unitsPerEm: unitsPerEm,
    xMin: xMin,
    yMin: yMin,
    xMax: xMax,
    yMax: yMax,
    lowestRecPPEM: 3,
    createdTimestamp: createdTimestamp
  });
  var hheaTable = __WEBPACK_IMPORTED_MODULE_4__table_js__["f" /* hhea */].make({
    ascender: ascender,
    descender: descender,
    advanceWidthMax: advanceWidthMax,
    minLeftSideBearing: minLeftSideBearing,
    maxLeftSideBearing: maxLeftSideBearing,
    xMaxExtent: maxLeftSideBearing + xMax - xMin,
    numberOfHMetrics: glyphs.length
  });
  var maxpTable = __WEBPACK_IMPORTED_MODULE_4__table_js__["i" /* maxp */].make(glyphs.length);
  var hasSpace = __WEBPACK_IMPORTED_MODULE_1_lodash_find___default()(font.glyphs, function (glyph) {
    return glyph.unicode === 32;
  });
  var os2Table = __WEBPACK_IMPORTED_MODULE_4__table_js__["k" /* os2 */].make({
    xAvgCharWidth: Math.round(advanceWithAvg),
    usWeightClass: usWeightClass || usWeightClasses.NORMAL,
    usWidthClass: usWidthClass && typeof usWidthClass === 'string' ? usWidthClasses[usWidthClass.toUpperCase()] : usWidthClasses.MEDIUM,
    usFirstCharIndex: firstCharIndex,
    usLastCharIndex: lastCharIndex,
    ulUnicodeRange1: ulUnicodeRange1,
    ulUnicodeRange2: ulUnicodeRange2,
    ulUnicodeRange3: ulUnicodeRange3,
    ulUnicodeRange4: ulUnicodeRange4,
    fsSelection: fsSelection,
    sTypoAscender: ascender,
    sTypoDescender: descender,
    sTypeLineGap: 0,
    usWinAscent: yMax,
    usWinDescent: Math.abs(yMin),
    ulCodePageRange1: 1,
    sxHeight: metricsForChar(font, 'xyvw', {
      yMax: Math.round(ascender / 2)
    }).yMax,
    sCapHeight: metricsForChar(font, 'HIKLEFJMNTZBDPRAGOQSUVWXY', {
      yMax: yMax
    }).yMax,
    usDefaultChar: hasSpace ? 32 : 0,
    usBreakChar: hasSpace ? 32 : 0
  });
  var hmtxTable = __WEBPACK_IMPORTED_MODULE_4__table_js__["g" /* hmtx */].make(glyphs);
  var cmapTable = __WEBPACK_IMPORTED_MODULE_4__table_js__["c" /* cmap */].make(glyphs);
  var englishFamilyName = fontFamily.en;
  var englishStyleName = fontSubfamily.en;
  var englishFullName = "".concat(englishFamilyName, " ").concat(englishStyleName);
  var postScriptNameString = postScriptName.en || "".concat(englishFamilyName.replace(/\s/g, ''), "-").concat(englishStyleName);
  var names = {
    fontFamily: fontFamily,
    fontSubfamily: fontSubfamily,
    fullName: {
      en: englishFullName
    },
    postScriptName: {
      en: postScriptNameString
    },
    designer: designer,
    designerURL: designerURL,
    manufacturer: manufacturer,
    manufacturerURL: manufacturerURL,
    license: license,
    licenseURL: licenseURL,
    version: {
      en: version
    },
    description: {
      en: description
    },
    copyright: copyright,
    trademark: trademark,
    uniqueID: {
      en: "".concat(manufacturer, ":").concat(englishFullName)
    },
    preferredFamily: fontFamily,
    preferredSubfamily: fontSubfamily
  };
  var languageTags = [];
  var nameTable = __WEBPACK_IMPORTED_MODULE_4__table_js__["j" /* name */].make(names, languageTags);
  var ltagTable = languageTags.length > 0 ? __WEBPACK_IMPORTED_MODULE_4__table_js__["h" /* ltag */].make(languageTags) : undefined;
  var postTable = __WEBPACK_IMPORTED_MODULE_4__table_js__["l" /* post */].make();
  var cffTable = __WEBPACK_IMPORTED_MODULE_4__table_js__["b" /* cff */].make(glyphs, {
    version: version.en,
    fullName: englishFullName,
    familyName: englishFamilyName,
    weightName: englishStyleName,
    postScriptName: postScriptNameString,
    unitsPerEm: unitsPerEm,
    fontBBox: [0, yMin, ascender, advanceWidthMax]
  });
  var tables = [headTable, hheaTable, maxpTable, os2Table, nameTable, cmapTable, postTable, cffTable, hmtxTable];
  if (ltagTable) {
    tables.push(ltagTable);
  }
  var sfntTable = makeSfntTable(tables);
  var bytes = Object(__WEBPACK_IMPORTED_MODULE_4__table_js__["d" /* encodeTable */])(sfntTable);
  var checkSum = computeCheckSum(bytes);
  var tableFields = sfntTable.fields;
  var checkSumAdjusted = false;
  for (var _i = 0; _i < tableFields.length; _i++) {
    if (tableFields[_i].name === 'head table') {
      tableFields[_i].value.checkSumAdjustment = 0xb1b0afba - checkSum;
      checkSumAdjusted = true;
      break;
    }
  }
  if (!checkSumAdjusted) {
    throw new Error('Could not find head table with checkSum to adjust');
  }
  return new Uint8Array(Object(__WEBPACK_IMPORTED_MODULE_4__table_js__["d" /* encodeTable */])(sfntTable));
}
function makeTableRecord(tag, checkSum, offset, length) {
  return Object(__WEBPACK_IMPORTED_MODULE_4__table_js__["a" /* buildTableObj */])('Table Record', [{
    name: 'tag',
    type: 'TAG',
    value: tag === undefined ? '' : tag
  }, {
    name: 'checkSum',
    type: 'ULONG',
    value: checkSum === undefined ? 0 : checkSum
  }, {
    name: 'offset',
    type: 'ULONG',
    value: offset === undefined ? 0 : offset
  }, {
    name: 'length',
    type: 'ULONG',
    value: length === undefined ? 0 : length
  }]);
}
function makeSfntTable(tables) {
  var sfnt = Object(__WEBPACK_IMPORTED_MODULE_4__table_js__["a" /* buildTableObj */])('sfnt', [{
    name: 'version',
    type: 'TAG',
    value: 'OTTO'
  }, {
    name: 'numTables',
    type: 'USHORT',
    value: 0
  }, {
    name: 'searchRange',
    type: 'USHORT',
    value: 0
  }, {
    name: 'entrySelector',
    type: 'USHORT',
    value: 0
  }, {
    name: 'rangeShift',
    type: 'USHORT',
    value: 0
  }]);
  sfnt.tables = tables;
  sfnt.numTables = tables.length;
  var highestPowerOf2 = Math.pow(2, log2(sfnt.numTables));
  sfnt.searchRange = 16 * highestPowerOf2;
  sfnt.entrySelector = log2(highestPowerOf2);
  sfnt.rangeShift = sfnt.numTables * 16 - sfnt.searchRange;
  var recordFields = [];
  var tableFields = [];
  var offset = Object(__WEBPACK_IMPORTED_MODULE_4__table_js__["m" /* sizeOfTable */])(sfnt) + Object(__WEBPACK_IMPORTED_MODULE_4__table_js__["m" /* sizeOfTable */])(makeTableRecord()) * sfnt.numTables;
  while (offset % 4 !== 0) {
    offset += 1;
    tableFields.push({
      name: 'padding',
      type: 'BYTE',
      value: 0
    });
  }
  for (var i = 0; i < tables.length; i += 1) {
    var t = tables[i];
    Object(__WEBPACK_IMPORTED_MODULE_2__check_js__["a" /* checkArgument */])(t.tableName.length === 4, "Table name ".concat(t.tableName, " is invalid."));
    var tableLength = Object(__WEBPACK_IMPORTED_MODULE_4__table_js__["m" /* sizeOfTable */])(t);
    var tableRecord = makeTableRecord(t.tableName, computeCheckSum(Object(__WEBPACK_IMPORTED_MODULE_4__table_js__["d" /* encodeTable */])(t)), offset, tableLength);
    recordFields.push({
      name: "".concat(tableRecord.tag, " Table Record"),
      type: 'RECORD',
      value: tableRecord
    });
    tableFields.push({
      name: "".concat(t.tableName, " table"),
      type: 'RECORD',
      value: t
    });
    offset += tableLength;
    Object(__WEBPACK_IMPORTED_MODULE_2__check_js__["a" /* checkArgument */])(!isNaN(offset), 'Something went wrong calculating the offset.');
    while (offset % 4 !== 0) {
      offset += 1;
      tableFields.push({
        name: 'padding',
        type: 'BYTE',
        value: 0
      });
    }
  }

  // Table records need to be sorted alphabetically.
  recordFields.sort(function (r1, r2) {
    if (r1.value.tag > r2.value.tag) {
      return 1;
    }
    return -1;
  });
  sfnt.fields = sfnt.fields.concat(recordFields);
  sfnt.fields = sfnt.fields.concat(tableFields);
  return sfnt;
}
function metricsForChar(glyphs, chars, notFoundMetrics) {
  for (var i = 0; i < chars.length; i++) {
    var glyph = __WEBPACK_IMPORTED_MODULE_1_lodash_find___default()(glyphs, {
      unicode: chars[i].charCodeAt(0)
    });
    if (glyph) {
      return getMetrics(glyph);
    }
  }
  return notFoundMetrics;
}
function getMetrics(glyph) {
  var xCoords = [];
  var yCoords = [];
  glyph.otContours.forEach(function (contour) {
    contour.forEach(function (curve) {
      curve.forEach(function (node) {
        xCoords.push(node.x);
        yCoords.push(node.y);
      });
    });
  });
  return {
    xMin: Math.min.apply(Math, xCoords),
    xMax: Math.max.apply(Math, xCoords),
    yMin: Math.min.apply(Math, yCoords),
    yMax: Math.max.apply(Math, yCoords),
    leftSideBearing: glyph.spacingLeft,
    rightSideBearing: glyph.spacingRight
  };
}
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(usWeightClasses, "usWeightClasses", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/font.js");
  reactHotLoader.register(usWidthClasses, "usWidthClasses", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/font.js");
  reactHotLoader.register(log2, "log2", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/font.js");
  reactHotLoader.register(computeCheckSum, "computeCheckSum", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/font.js");
  reactHotLoader.register(fontToSfntTable, "fontToSfntTable", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/font.js");
  reactHotLoader.register(makeTableRecord, "makeTableRecord", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/font.js");
  reactHotLoader.register(makeSfntTable, "makeSfntTable", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/font.js");
  reactHotLoader.register(metricsForChar, "metricsForChar", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/font.js");
  reactHotLoader.register(getMetrics, "getMetrics", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/font.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(__signature__, "__signature__", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/font.js");
  reactHotLoader.register(usWeightClasses, "usWeightClasses", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/font.js");
  reactHotLoader.register(usWidthClasses, "usWidthClasses", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/font.js");
  reactHotLoader.register(log2, "log2", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/font.js");
  reactHotLoader.register(computeCheckSum, "computeCheckSum", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/font.js");
  reactHotLoader.register(fontToSfntTable, "fontToSfntTable", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/font.js");
  reactHotLoader.register(makeTableRecord, "makeTableRecord", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/font.js");
  reactHotLoader.register(makeSfntTable, "makeSfntTable", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/font.js");
  reactHotLoader.register(metricsForChar, "metricsForChar", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/font.js");
  reactHotLoader.register(getMetrics, "getMetrics", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/font.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ 0)(module)))

/***/ }),
/* 187 */
/*!*************************************!*\
  !*** ./app/scripts/opentype/os2.js ***!
  \*************************************/
/*! exports provided: getUnicodeRange */
/*! exports used: getUnicodeRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["a"] = getUnicodeRange;
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var unicodeRanges = [{
  begin: 0x0000,
  end: 0x007f
},
// Basic Latin
{
  begin: 0x0080,
  end: 0x00ff
},
// Latin-1 Supplement
{
  begin: 0x0100,
  end: 0x017f
},
// Latin Extended-A
{
  begin: 0x0180,
  end: 0x024f
},
// Latin Extended-B
{
  begin: 0x0250,
  end: 0x02af
},
// IPA Extensions
{
  begin: 0x02b0,
  end: 0x02ff
},
// Spacing Modifier Letters
{
  begin: 0x0300,
  end: 0x036f
},
// Combining Diacritical Marks
{
  begin: 0x0370,
  end: 0x03ff
},
// Greek and Coptic
{
  begin: 0x2c80,
  end: 0x2cff
},
// Coptic
{
  begin: 0x0400,
  end: 0x04ff
},
// Cyrillic
{
  begin: 0x0530,
  end: 0x058f
},
// Armenian
{
  begin: 0x0590,
  end: 0x05ff
},
// Hebrew
{
  begin: 0xa500,
  end: 0xa63f
},
// Vai
{
  begin: 0x0600,
  end: 0x06ff
},
// Arabic
{
  begin: 0x07c0,
  end: 0x07ff
},
// NKo
{
  begin: 0x0900,
  end: 0x097f
},
// Devanagari
{
  begin: 0x0980,
  end: 0x09ff
},
// Bengali
{
  begin: 0x0a00,
  end: 0x0a7f
},
// Gurmukhi
{
  begin: 0x0a80,
  end: 0x0aff
},
// Gujarati
{
  begin: 0x0b00,
  end: 0x0b7f
},
// Oriya
{
  begin: 0x0b80,
  end: 0x0bff
},
// Tamil
{
  begin: 0x0c00,
  end: 0x0c7f
},
// Telugu
{
  begin: 0x0c80,
  end: 0x0cff
},
// Kannada
{
  begin: 0x0d00,
  end: 0x0d7f
},
// Malayalam
{
  begin: 0x0e00,
  end: 0x0e7f
},
// Thai
{
  begin: 0x0e80,
  end: 0x0eff
},
// Lao
{
  begin: 0x10a0,
  end: 0x10ff
},
// Georgian
{
  begin: 0x1b00,
  end: 0x1b7f
},
// Balinese
{
  begin: 0x1100,
  end: 0x11ff
},
// Hangul Jamo
{
  begin: 0x1e00,
  end: 0x1eff
},
// Latin Extended Additional
{
  begin: 0x1f00,
  end: 0x1fff
},
// Greek Extended
{
  begin: 0x2000,
  end: 0x206f
},
// General Punctuation
{
  begin: 0x2070,
  end: 0x209f
},
// Superscripts And Subscripts
{
  begin: 0x20a0,
  end: 0x20cf
},
// Currency Symbol
{
  begin: 0x20d0,
  end: 0x20ff
},
// Combining Diacritical Marks For Symbols
{
  begin: 0x2100,
  end: 0x214f
},
// Letterlike Symbols
{
  begin: 0x2150,
  end: 0x218f
},
// Number Forms
{
  begin: 0x2190,
  end: 0x21ff
},
// Arrows
{
  begin: 0x2200,
  end: 0x22ff
},
// Mathematical Operators
{
  begin: 0x2300,
  end: 0x23ff
},
// Miscellaneous Technical
{
  begin: 0x2400,
  end: 0x243f
},
// Control Pictures
{
  begin: 0x2440,
  end: 0x245f
},
// Optical Character Recognition
{
  begin: 0x2460,
  end: 0x24ff
},
// Enclosed Alphanumerics
{
  begin: 0x2500,
  end: 0x257f
},
// Box Drawing
{
  begin: 0x2580,
  end: 0x259f
},
// Block Elements
{
  begin: 0x25a0,
  end: 0x25ff
},
// Geometric Shapes
{
  begin: 0x2600,
  end: 0x26ff
},
// Miscellaneous Symbols
{
  begin: 0x2700,
  end: 0x27bf
},
// Dingbats
{
  begin: 0x3000,
  end: 0x303f
},
// CJK Symbols And Punctuation
{
  begin: 0x3040,
  end: 0x309f
},
// Hiragana
{
  begin: 0x30a0,
  end: 0x30ff
},
// Katakana
{
  begin: 0x3100,
  end: 0x312f
},
// Bopomofo
{
  begin: 0x3130,
  end: 0x318f
},
// Hangul Compatibility Jamo
{
  begin: 0xa840,
  end: 0xa87f
},
// Phags-pa
{
  begin: 0x3200,
  end: 0x32ff
},
// Enclosed CJK Letters And Months
{
  begin: 0x3300,
  end: 0x33ff
},
// CJK Compatibility
{
  begin: 0xac00,
  end: 0xd7af
},
// Hangul Syllables
{
  begin: 0xd800,
  end: 0xdfff
},
// Non-Plane 0 *
{
  begin: 0x10900,
  end: 0x1091f
},
// Phoenicia
{
  begin: 0x4e00,
  end: 0x9fff
},
// CJK Unified Ideographs
{
  begin: 0xe000,
  end: 0xf8ff
},
// Private Use Area (plane 0)
{
  begin: 0x31c0,
  end: 0x31ef
},
// CJK Strokes
{
  begin: 0xfb00,
  end: 0xfb4f
},
// Alphabetic Presentation Forms
{
  begin: 0xfb50,
  end: 0xfdff
},
// Arabic Presentation Forms-A
{
  begin: 0xfe20,
  end: 0xfe2f
},
// Combining Half Marks
{
  begin: 0xfe10,
  end: 0xfe1f
},
// Vertical Forms
{
  begin: 0xfe50,
  end: 0xfe6f
},
// Small Form Variants
{
  begin: 0xfe70,
  end: 0xfeff
},
// Arabic Presentation Forms-B
{
  begin: 0xff00,
  end: 0xffef
},
// Halfwidth And Fullwidth Forms
{
  begin: 0xfff0,
  end: 0xffff
},
// Specials
{
  begin: 0x0f00,
  end: 0x0fff
},
// Tibetan
{
  begin: 0x0700,
  end: 0x074f
},
// Syriac
{
  begin: 0x0780,
  end: 0x07bf
},
// Thaana
{
  begin: 0x0d80,
  end: 0x0dff
},
// Sinhala
{
  begin: 0x1000,
  end: 0x109f
},
// Myanmar
{
  begin: 0x1200,
  end: 0x137f
},
// Ethiopic
{
  begin: 0x13a0,
  end: 0x13ff
},
// Cherokee
{
  begin: 0x1400,
  end: 0x167f
},
// Unified Canadian Aboriginal Syllabics
{
  begin: 0x1680,
  end: 0x169f
},
// Ogham
{
  begin: 0x16a0,
  end: 0x16ff
},
// Runic
{
  begin: 0x1780,
  end: 0x17ff
},
// Khmer
{
  begin: 0x1800,
  end: 0x18af
},
// Mongolian
{
  begin: 0x2800,
  end: 0x28ff
},
// Braille Patterns
{
  begin: 0xa000,
  end: 0xa48f
},
// Yi Syllables
{
  begin: 0x1700,
  end: 0x171f
},
// Tagalog
{
  begin: 0x10300,
  end: 0x1032f
},
// Old Italic
{
  begin: 0x10330,
  end: 0x1034f
},
// Gothic
{
  begin: 0x10400,
  end: 0x1044f
},
// Deseret
{
  begin: 0x1d000,
  end: 0x1d0ff
},
// Byzantine Musical Symbols
{
  begin: 0x1d400,
  end: 0x1d7ff
},
// Mathematical Alphanumeric Symbols
{
  begin: 0xff000,
  end: 0xffffd
},
// Private Use (plane 15)
{
  begin: 0xfe00,
  end: 0xfe0f
},
// Variation Selectors
{
  begin: 0xe0000,
  end: 0xe007f
},
// Tags
{
  begin: 0x1900,
  end: 0x194f
},
// Limbu
{
  begin: 0x1950,
  end: 0x197f
},
// Tai Le
{
  begin: 0x1980,
  end: 0x19df
},
// New Tai Lue
{
  begin: 0x1a00,
  end: 0x1a1f
},
// Buginese
{
  begin: 0x2c00,
  end: 0x2c5f
},
// Glagolitic
{
  begin: 0x2d30,
  end: 0x2d7f
},
// Tifinagh
{
  begin: 0x4dc0,
  end: 0x4dff
},
// Yijing Hexagram Symbols
{
  begin: 0xa800,
  end: 0xa82f
},
// Syloti Nagri
{
  begin: 0x10000,
  end: 0x1007f
},
// Linear B Syllabary
{
  begin: 0x10140,
  end: 0x1018f
},
// Ancient Greek Numbers
{
  begin: 0x10380,
  end: 0x1039f
},
// Ugaritic
{
  begin: 0x103a0,
  end: 0x103df
},
// Old Persian
{
  begin: 0x10450,
  end: 0x1047f
},
// Shavian
{
  begin: 0x10480,
  end: 0x104af
},
// Osmanya
{
  begin: 0x10800,
  end: 0x1083f
},
// Cypriot Syllabary
{
  begin: 0x10a00,
  end: 0x10a5f
},
// Kharoshthi
{
  begin: 0x1d300,
  end: 0x1d35f
},
// Tai Xuan Jing Symbols
{
  begin: 0x12000,
  end: 0x123ff
},
// Cuneiform
{
  begin: 0x1d360,
  end: 0x1d37f
},
// Counting Rod Numerals
{
  begin: 0x1b80,
  end: 0x1bbf
},
// Sundanese
{
  begin: 0x1c00,
  end: 0x1c4f
},
// Lepcha
{
  begin: 0x1c50,
  end: 0x1c7f
},
// Ol Chiki
{
  begin: 0xa880,
  end: 0xa8df
},
// Saurashtra
{
  begin: 0xa900,
  end: 0xa92f
},
// Kayah Li
{
  begin: 0xa930,
  end: 0xa95f
},
// Rejang
{
  begin: 0xaa00,
  end: 0xaa5f
},
// Cham
{
  begin: 0x10190,
  end: 0x101cf
},
// Ancient Symbols
{
  begin: 0x101d0,
  end: 0x101ff
},
// Phaistos Disc
{
  begin: 0x102a0,
  end: 0x102df
},
// Carian
{
  begin: 0x1f030,
  end: 0x1f09f
} // Domino Tiles
];
function getUnicodeRange(unicode) {
  for (var i = 0; i < unicodeRanges.length; i++) {
    var range = unicodeRanges[i];
    if (unicode >= range.begin && unicode < range.end) {
      return i;
    }
  }
  return -1;
}
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(unicodeRanges, "unicodeRanges", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/os2.js");
  reactHotLoader.register(getUnicodeRange, "getUnicodeRange", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/os2.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(__signature__, "__signature__", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/os2.js");
  reactHotLoader.register(unicodeRanges, "unicodeRanges", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/os2.js");
  reactHotLoader.register(getUnicodeRange, "getUnicodeRange", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/os2.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ 0)(module)))

/***/ }),
/* 188 */
/*!***************************************!*\
  !*** ./app/scripts/opentype/table.js ***!
  \***************************************/
/*! exports provided: buildTableObj, encodeTable, sizeOfTable, head, hhea, maxp, os2, hmtx, cmap, name, ltag, post, cff, gpos */
/*! exports used: buildTableObj, cff, cmap, encodeTable, head, hhea, hmtx, ltag, maxp, name, os2, post, sizeOfTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (immutable) */ __webpack_exports__["a"] = buildTableObj;
/* harmony export (immutable) */ __webpack_exports__["d"] = encodeTable;
/* harmony export (immutable) */ __webpack_exports__["m"] = sizeOfTable;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return hhea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return maxp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return os2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return hmtx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cmap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ltag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cff; });
/* unused harmony export gpos */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_forOwn__ = __webpack_require__(/*! lodash/forOwn */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_forOwn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_forOwn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__encode__ = __webpack_require__(/*! ./encode */ 189);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



/* eslint-disable babel/new-cap */
function buildTableObj(tableName, fields, options) {
  var tableObj = {};
  fields.forEach(function (field) {
    tableObj[field.name] = field.value;
  });
  tableObj.tableName = tableName;
  tableObj.fields = fields;
  __WEBPACK_IMPORTED_MODULE_0_lodash_forOwn___default()(options, function (value, key) {
    if (tableObj[key] !== undefined) {
      tableObj[key] = value;
    }
  });
  return tableObj;
}
function encodeTable(tableObj) {
  return __WEBPACK_IMPORTED_MODULE_1__encode__["a" /* encode */].TABLE(tableObj);
}
function sizeOfTable(tableObj) {
  return __WEBPACK_IMPORTED_MODULE_1__encode__["b" /* sizeOf */].TABLE(tableObj);
}
var head = /*#__PURE__*/function () {
  function head() {
    _classCallCheck(this, head);
  }
  return _createClass(head, null, [{
    key: "make",
    value: function make(options) {
      var timestamp = Math.round(new Date().getTime() / 1000) + 2082844800;
      var createdTimestamp = timestamp;
      if (options.createdTimestamp) {
        createdTimestamp = options.createdTimestamp + 2082844800;
      }
      return buildTableObj('head', [{
        name: 'version',
        type: 'FIXED',
        value: 0x00010000
      }, {
        name: 'fontRevision',
        type: 'FIXED',
        value: 0x00010000
      }, {
        name: 'checkSumAdjustment',
        type: 'ULONG',
        value: 0
      }, {
        name: 'magicNumber',
        type: 'ULONG',
        value: 0x5f0f3cf5
      }, {
        name: 'flags',
        type: 'USHORT',
        value: 0
      }, {
        name: 'unitsPerEm',
        type: 'USHORT',
        value: 1000
      }, {
        name: 'created',
        type: 'LONGDATETIME',
        value: createdTimestamp
      }, {
        name: 'modified',
        type: 'LONGDATETIME',
        value: timestamp
      }, {
        name: 'xMin',
        type: 'SHORT',
        value: 0
      }, {
        name: 'yMin',
        type: 'SHORT',
        value: 0
      }, {
        name: 'xMax',
        type: 'SHORT',
        value: 0
      }, {
        name: 'yMax',
        type: 'SHORT',
        value: 0
      }, {
        name: 'macStyle',
        type: 'USHORT',
        value: 0
      }, {
        name: 'lowestRecPPEM',
        type: 'USHORT',
        value: 0
      }, {
        name: 'fontDirectionHint',
        type: 'SHORT',
        value: 2
      }, {
        name: 'indexToLocFormat',
        type: 'SHORT',
        value: 0
      }, {
        name: 'glyphDataFormat',
        type: 'SHORT',
        value: 0
      }], options);
    }
  }]);
}();
var hhea = /*#__PURE__*/function () {
  function hhea() {
    _classCallCheck(this, hhea);
  }
  return _createClass(hhea, null, [{
    key: "make",
    value: function make(options) {
      return buildTableObj('hhea', [{
        name: 'version',
        type: 'FIXED',
        value: 0x00010000
      }, {
        name: 'ascender',
        type: 'FWORD',
        value: 0
      }, {
        name: 'descender',
        type: 'FWORD',
        value: 0
      }, {
        name: 'lineGap',
        type: 'FWORD',
        value: 0
      }, {
        name: 'advanceWidthMax',
        type: 'UFWORD',
        value: 0
      }, {
        name: 'minLeftSideBearing',
        type: 'FWORD',
        value: 0
      }, {
        name: 'minRightSideBearing',
        type: 'FWORD',
        value: 0
      }, {
        name: 'xMaxExtent',
        type: 'FWORD',
        value: 0
      }, {
        name: 'caretSlopeRise',
        type: 'SHORT',
        value: 1
      }, {
        name: 'caretSlopeRun',
        type: 'SHORT',
        value: 0
      }, {
        name: 'caretOffset',
        type: 'SHORT',
        value: 0
      }, {
        name: 'reserved1',
        type: 'SHORT',
        value: 0
      }, {
        name: 'reserved2',
        type: 'SHORT',
        value: 0
      }, {
        name: 'reserved3',
        type: 'SHORT',
        value: 0
      }, {
        name: 'reserved4',
        type: 'SHORT',
        value: 0
      }, {
        name: 'metricDataFormat',
        type: 'SHORT',
        value: 0
      }, {
        name: 'numberOfHMetrics',
        type: 'USHORT',
        value: 0
      }], options);
    }
  }]);
}();
var maxp = /*#__PURE__*/function () {
  function maxp() {
    _classCallCheck(this, maxp);
  }
  return _createClass(maxp, null, [{
    key: "make",
    value: function make(numGlyphs) {
      return buildTableObj('maxp', [{
        name: 'version',
        type: 'FIXED',
        value: 0x00005000
      }, {
        name: 'numGlyphs',
        type: 'USHORT',
        value: numGlyphs
      }]);
    }
  }]);
}();
var os2 = /*#__PURE__*/function () {
  function os2() {
    _classCallCheck(this, os2);
  }
  return _createClass(os2, null, [{
    key: "make",
    value: function make(options) {
      return buildTableObj('OS/2', [{
        name: 'version',
        type: 'USHORT',
        value: 0x0003
      }, {
        name: 'xAvgCharWidth',
        type: 'SHORT',
        value: 0
      }, {
        name: 'usWeightClass',
        type: 'USHORT',
        value: 0
      }, {
        name: 'usWidthClass',
        type: 'USHORT',
        value: 0
      }, {
        name: 'fsType',
        type: 'USHORT',
        value: 0
      }, {
        name: 'ySubscriptXSize',
        type: 'SHORT',
        value: 650
      }, {
        name: 'ySubscriptYSize',
        type: 'SHORT',
        value: 699
      }, {
        name: 'ySubscriptXOffset',
        type: 'SHORT',
        value: 0
      }, {
        name: 'ySubscriptYOffset',
        type: 'SHORT',
        value: 140
      }, {
        name: 'ySuperscriptXSize',
        type: 'SHORT',
        value: 650
      }, {
        name: 'ySuperscriptYSize',
        type: 'SHORT',
        value: 699
      }, {
        name: 'ySuperscriptXOffset',
        type: 'SHORT',
        value: 0
      }, {
        name: 'ySuperscriptYOffset',
        type: 'SHORT',
        value: 479
      }, {
        name: 'yStrikeoutSize',
        type: 'SHORT',
        value: 49
      }, {
        name: 'yStrikeoutPosition',
        type: 'SHORT',
        value: 258
      }, {
        name: 'sFamilyClass',
        type: 'SHORT',
        value: 0
      }, {
        name: 'bFamilyType',
        type: 'BYTE',
        value: 0
      }, {
        name: 'bSerifStyle',
        type: 'BYTE',
        value: 0
      }, {
        name: 'bWeight',
        type: 'BYTE',
        value: 0
      }, {
        name: 'bProportion',
        type: 'BYTE',
        value: 0
      }, {
        name: 'bContrast',
        type: 'BYTE',
        value: 0
      }, {
        name: 'bStrokeVariation',
        type: 'BYTE',
        value: 0
      }, {
        name: 'bArmStyle',
        type: 'BYTE',
        value: 0
      }, {
        name: 'bLetterform',
        type: 'BYTE',
        value: 0
      }, {
        name: 'bMidline',
        type: 'BYTE',
        value: 0
      }, {
        name: 'bXHeight',
        type: 'BYTE',
        value: 0
      }, {
        name: 'ulUnicodeRange1',
        type: 'ULONG',
        value: 0
      }, {
        name: 'ulUnicodeRange2',
        type: 'ULONG',
        value: 0
      }, {
        name: 'ulUnicodeRange3',
        type: 'ULONG',
        value: 0
      }, {
        name: 'ulUnicodeRange4',
        type: 'ULONG',
        value: 0
      }, {
        name: 'achVendID',
        type: 'CHARARRAY',
        value: 'XXXX'
      }, {
        name: 'fsSelection',
        type: 'USHORT',
        value: 0
      }, {
        name: 'usFirstCharIndex',
        type: 'USHORT',
        value: 0
      }, {
        name: 'usLastCharIndex',
        type: 'USHORT',
        value: 0
      }, {
        name: 'sTypoAscender',
        type: 'SHORT',
        value: 0
      }, {
        name: 'sTypoDescender',
        type: 'SHORT',
        value: 0
      }, {
        name: 'sTypoLineGap',
        type: 'SHORT',
        value: 0
      }, {
        name: 'usWinAscent',
        type: 'USHORT',
        value: 0
      }, {
        name: 'usWinDescent',
        type: 'USHORT',
        value: 0
      }, {
        name: 'ulCodePageRange1',
        type: 'ULONG',
        value: 0
      }, {
        name: 'ulCodePageRange2',
        type: 'ULONG',
        value: 0
      }, {
        name: 'sxHeight',
        type: 'SHORT',
        value: 0
      }, {
        name: 'sCapHeight',
        type: 'SHORT',
        value: 0
      }, {
        name: 'usDefaultChar',
        type: 'USHORT',
        value: 0
      }, {
        name: 'usBreakChar',
        type: 'USHORT',
        value: 0
      }, {
        name: 'usMaxContext',
        type: 'USHORT',
        value: 0
      }], options);
    }
  }]);
}();
var hmtx = /*#__PURE__*/function () {
  function hmtx() {
    _classCallCheck(this, hmtx);
  }
  return _createClass(hmtx, null, [{
    key: "make",
    value: function make(glyphs) {
      var t = buildTableObj('hmtx', []);
      for (var i = 0; i < glyphs.length; i++) {
        var glyph = glyphs[i];
        var advanceWidth = glyph.advanceWidth || 0;
        var leftSideBearing = glyph.spacingLeft || 0;
        t.fields.push({
          name: "advanceWidth_".concat(i),
          type: 'USHORT',
          value: advanceWidth
        });
        t.fields.push({
          name: "leftSideBearing_".concat(i),
          type: 'SHORT',
          value: leftSideBearing
        });
      }
      return t;
    }
  }]);
}();
function addSegment(t, code, glyphIndex) {
  t.segments.push({
    end: code,
    start: code,
    delta: -(code - glyphIndex),
    offset: 0
  });
}
function addTerminatorSegment(t) {
  t.segments.push({
    end: 0xffff,
    start: 0xffff,
    delta: 1,
    offset: 0
  });
}
var cmap = /*#__PURE__*/function () {
  function cmap() {
    _classCallCheck(this, cmap);
  }
  return _createClass(cmap, null, [{
    key: "make",
    value: function make(glyphs) {
      var i;
      var t = buildTableObj('cmap', [{
        name: 'version',
        type: 'USHORT',
        value: 0
      }, {
        name: 'numTables',
        type: 'USHORT',
        value: 1
      }, {
        name: 'platformID',
        type: 'USHORT',
        value: 3
      }, {
        name: 'encodingID',
        type: 'USHORT',
        value: 1
      }, {
        name: 'offset',
        type: 'ULONG',
        value: 12
      }, {
        name: 'format',
        type: 'USHORT',
        value: 4
      }, {
        name: 'length',
        type: 'USHORT',
        value: 0
      }, {
        name: 'language',
        type: 'USHORT',
        value: 0
      }, {
        name: 'segCountX2',
        type: 'USHORT',
        value: 0
      }, {
        name: 'searchRange',
        type: 'USHORT',
        value: 0
      }, {
        name: 'entrySelector',
        type: 'USHORT',
        value: 0
      }, {
        name: 'rangeShift',
        type: 'USHORT',
        value: 0
      }]);
      t.segments = [];
      for (i = 0; i < glyphs.length; i++) {
        var glyph = glyphs[i];
        // WARNING: This is because we have one unicode per glyph right now
        // But it might change.
        var unicodes = [glyph.unicode];
        for (var j = 0; j < unicodes.length; j++) {
          addSegment(t, unicodes[j], i);
        }
      }
      t.segments = t.segments.sort(function (a, b) {
        return a.start - b.start;
      });
      addTerminatorSegment(t);
      var segCount = t.segments.length;
      t.segCountX2 = segCount * 2;
      t.searchRange = Math.pow(2, Math.floor(Math.log(segCount) / Math.log(2))) * 2;
      t.entrySelector = Math.log(t.searchRange / 2) / Math.log(2);
      t.rangeShift = t.segCountX2 - t.searchRange;

      // Set up parallel segment arrays.
      var endCounts = [];
      var startCounts = [];
      var idDeltas = [];
      var idRangeOffsets = [];
      var glyphIds = [];
      for (i = 0; i < segCount; i++) {
        var segment = t.segments[i];
        endCounts = endCounts.concat({
          name: "end_".concat(i),
          type: 'USHORT',
          value: segment.end
        });
        startCounts = startCounts.concat({
          name: "start_".concat(i),
          type: 'USHORT',
          value: segment.start
        });
        idDeltas = idDeltas.concat({
          name: "idDelta_".concat(i),
          type: 'SHORT',
          value: segment.delta
        });
        idRangeOffsets = idRangeOffsets.concat({
          name: "idRangeOffset_".concat(i),
          type: 'USHORT',
          value: segment.offset
        });
        if (segment.glyphId !== undefined) {
          glyphIds = glyphIds.concat({
            name: "glyph_".concat(i),
            type: 'USHORT',
            value: segment.glyphId
          });
        }
      }
      t.fields = t.fields.concat(endCounts);
      t.fields.push({
        name: 'reservedPad',
        type: 'USHORT',
        value: 0
      });
      t.fields = t.fields.concat(startCounts);
      t.fields = t.fields.concat(idDeltas);
      t.fields = t.fields.concat(idRangeOffsets);
      t.fields = t.fields.concat(glyphIds);
      t.length = 14 // Subtable header
      + endCounts.length * 2 + 2 // reservedPad
      + startCounts.length * 2 + idDeltas.length * 2 + idRangeOffsets.length * 2 + glyphIds.length * 2;
      return t;
    }
  }]);
}();
var utf16 = 'utf-16';

// MacOS script ID → encoding. This table stores the default case,
// which can be overridden by macLanguageEncodings.
var macScriptEncodings = {
  0: 'macintosh',
  // smRoman
  1: 'x-mac-japanese',
  // smJapanese
  2: 'x-mac-chinesetrad',
  // smTradChinese
  3: 'x-mac-korean',
  // smKorean
  6: 'x-mac-greek',
  // smGreek
  7: 'x-mac-cyrillic',
  // smCyrillic
  9: 'x-mac-devanagai',
  // smDevanagari
  10: 'x-mac-gurmukhi',
  // smGurmukhi
  11: 'x-mac-gujarati',
  // smGujarati
  12: 'x-mac-oriya',
  // smOriya
  13: 'x-mac-bengali',
  // smBengali
  14: 'x-mac-tamil',
  // smTamil
  15: 'x-mac-telugu',
  // smTelugu
  16: 'x-mac-kannada',
  // smKannada
  17: 'x-mac-malayalam',
  // smMalayalam
  18: 'x-mac-sinhalese',
  // smSinhalese
  19: 'x-mac-burmese',
  // smBurmese
  20: 'x-mac-khmer',
  // smKhmer
  21: 'x-mac-thai',
  // smThai
  22: 'x-mac-lao',
  // smLao
  23: 'x-mac-georgian',
  // smGeorgian
  24: 'x-mac-armenian',
  // smArmenian
  25: 'x-mac-chinesesimp',
  // smSimpChinese
  26: 'x-mac-tibetan',
  // smTibetan
  27: 'x-mac-mongolian',
  // smMongolian
  28: 'x-mac-ethiopic',
  // smEthiopic
  29: 'x-mac-ce',
  // smCentralEuroRoman
  30: 'x-mac-vietnamese',
  // smVietnamese
  31: 'x-mac-extarabic' // smExtArabic
};

// MacOS language ID → encoding. This table stores the exceptional
// cases, which override macScriptEncodings. For writing MacOS naming
// tables, we need to emit a MacOS script ID. Therefore, we cannot
// merge macScriptEncodings into macLanguageEncodings.
//
// http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/Readme.txt
var macLanguageEncodings = {
  15: 'x-mac-icelandic',
  // langIcelandic
  17: 'x-mac-turkish',
  // langTurkish
  18: 'x-mac-croatian',
  // langCroatian
  24: 'x-mac-ce',
  // langLithuanian
  25: 'x-mac-ce',
  // langPolish
  26: 'x-mac-ce',
  // langHungarian
  27: 'x-mac-ce',
  // langEstonian
  28: 'x-mac-ce',
  // langLatvian
  30: 'x-mac-icelandic',
  // langFaroese
  37: 'x-mac-romanian',
  // langRomanian
  38: 'x-mac-ce',
  // langCzech
  39: 'x-mac-ce',
  // langSlovak
  40: 'x-mac-ce',
  // langSlovenian
  143: 'x-mac-inuit',
  // langInuktitut
  146: 'x-mac-gaelic' // langIrishGaelicScript
};
var macLanguages = {
  0: 'en',
  1: 'fr',
  2: 'de',
  3: 'it',
  4: 'nl',
  5: 'sv',
  6: 'es',
  7: 'da',
  8: 'pt',
  9: 'no',
  10: 'he',
  11: 'ja',
  12: 'ar',
  13: 'fi',
  14: 'el',
  15: 'is',
  16: 'mt',
  17: 'tr',
  18: 'hr',
  19: 'zh-Hant',
  20: 'ur',
  21: 'hi',
  22: 'th',
  23: 'ko',
  24: 'lt',
  25: 'pl',
  26: 'hu',
  27: 'es',
  28: 'lv',
  29: 'se',
  30: 'fo',
  31: 'fa',
  32: 'ru',
  33: 'zh',
  34: 'nl-BE',
  35: 'ga',
  36: 'sq',
  37: 'ro',
  38: 'cz',
  39: 'sk',
  40: 'si',
  41: 'yi',
  42: 'sr',
  43: 'mk',
  44: 'bg',
  45: 'uk',
  46: 'be',
  47: 'uz',
  48: 'kk',
  49: 'az-Cyrl',
  50: 'az-Arab',
  51: 'hy',
  52: 'ka',
  53: 'mo',
  54: 'ky',
  55: 'tg',
  56: 'tk',
  57: 'mn-CN',
  58: 'mn',
  59: 'ps',
  60: 'ks',
  61: 'ku',
  62: 'sd',
  63: 'bo',
  64: 'ne',
  65: 'sa',
  66: 'mr',
  67: 'bn',
  68: 'as',
  69: 'gu',
  70: 'pa',
  71: 'or',
  72: 'ml',
  73: 'kn',
  74: 'ta',
  75: 'te',
  76: 'si',
  77: 'my',
  78: 'km',
  79: 'lo',
  80: 'vi',
  81: 'id',
  82: 'tl',
  83: 'ms',
  84: 'ms-Arab',
  85: 'am',
  86: 'ti',
  87: 'om',
  88: 'so',
  89: 'sw',
  90: 'rw',
  91: 'rn',
  92: 'ny',
  93: 'mg',
  94: 'eo',
  128: 'cy',
  129: 'eu',
  130: 'ca',
  131: 'la',
  132: 'qu',
  133: 'gn',
  134: 'ay',
  135: 'tt',
  136: 'ug',
  137: 'dz',
  138: 'jv',
  139: 'su',
  140: 'gl',
  141: 'af',
  142: 'br',
  143: 'iu',
  144: 'gd',
  145: 'gv',
  146: 'ga',
  147: 'to',
  148: 'el-polyton',
  149: 'kl',
  150: 'az',
  151: 'nn'
};

// While Microsoft indicates a region/country for all its language
// IDs, we omit the region code if it's equal to the "most likely
// region subtag" according to Unicode CLDR. For scripts, we omit
// the subtag if it is equal to the Suppress-Script entry in the
// IANA language subtag registry for IETF BCP 47.
//
// For example, Microsoft states that its language code 0x041A is
// Croatian in Croatia. We transform this to the BCP 47 language code 'hr'
// and not 'hr-HR' because Croatia is the default country for Croatian,
// according to Unicode CLDR. As another example, Microsoft states
// that 0x101A is Croatian (Latin) in Bosnia-Herzegovina. We transform
// this to 'hr-BA' and not 'hr-Latn-BA' because Latin is the default script
// for the Croatian language, according to IANA.
//
// http://www.unicode.org/cldr/charts/latest/supplemental/likely_subtags.html
// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
var windowsLanguages = {
  0x0436: 'af',
  0x041c: 'sq',
  0x0484: 'gsw',
  0x045e: 'am',
  0x1401: 'ar-DZ',
  0x3c01: 'ar-BH',
  0x0c01: 'ar',
  0x0801: 'ar-IQ',
  0x2c01: 'ar-JO',
  0x3401: 'ar-KW',
  0x3001: 'ar-LB',
  0x1001: 'ar-LY',
  0x1801: 'ary',
  0x2001: 'ar-OM',
  0x4001: 'ar-QA',
  0x0401: 'ar-SA',
  0x2801: 'ar-SY',
  0x1c01: 'aeb',
  0x3801: 'ar-AE',
  0x2401: 'ar-YE',
  0x042b: 'hy',
  0x044d: 'as',
  0x082c: 'az-Cyrl',
  0x042c: 'az',
  0x046d: 'ba',
  0x042d: 'eu',
  0x0423: 'be',
  0x0845: 'bn',
  0x0445: 'bn-IN',
  0x201a: 'bs-Cyrl',
  0x141a: 'bs',
  0x047e: 'br',
  0x0402: 'bg',
  0x0403: 'ca',
  0x0c04: 'zh-HK',
  0x1404: 'zh-MO',
  0x0804: 'zh',
  0x1004: 'zh-SG',
  0x0404: 'zh-TW',
  0x0483: 'co',
  0x041a: 'hr',
  0x101a: 'hr-BA',
  0x0405: 'cs',
  0x0406: 'da',
  0x048c: 'prs',
  0x0465: 'dv',
  0x0813: 'nl-BE',
  0x0413: 'nl',
  0x0c09: 'en-AU',
  0x2809: 'en-BZ',
  0x1009: 'en-CA',
  0x2409: 'en-029',
  0x4009: 'en-IN',
  0x1809: 'en-IE',
  0x2009: 'en-JM',
  0x4409: 'en-MY',
  0x1409: 'en-NZ',
  0x3409: 'en-PH',
  0x4809: 'en-SG',
  0x1c09: 'en-ZA',
  0x2c09: 'en-TT',
  0x0809: 'en-GB',
  0x0409: 'en',
  0x3009: 'en-ZW',
  0x0425: 'et',
  0x0438: 'fo',
  0x0464: 'fil',
  0x040b: 'fi',
  0x080c: 'fr-BE',
  0x0c0c: 'fr-CA',
  0x040c: 'fr',
  0x140c: 'fr-LU',
  0x180c: 'fr-MC',
  0x100c: 'fr-CH',
  0x0462: 'fy',
  0x0456: 'gl',
  0x0437: 'ka',
  0x0c07: 'de-AT',
  0x0407: 'de',
  0x1407: 'de-LI',
  0x1007: 'de-LU',
  0x0807: 'de-CH',
  0x0408: 'el',
  0x046f: 'kl',
  0x0447: 'gu',
  0x0468: 'ha',
  0x040d: 'he',
  0x0439: 'hi',
  0x040e: 'hu',
  0x040f: 'is',
  0x0470: 'ig',
  0x0421: 'id',
  0x045d: 'iu',
  0x085d: 'iu-Latn',
  0x083c: 'ga',
  0x0434: 'xh',
  0x0435: 'zu',
  0x0410: 'it',
  0x0810: 'it-CH',
  0x0411: 'ja',
  0x044b: 'kn',
  0x043f: 'kk',
  0x0453: 'km',
  0x0486: 'quc',
  0x0487: 'rw',
  0x0441: 'sw',
  0x0457: 'kok',
  0x0412: 'ko',
  0x0440: 'ky',
  0x0454: 'lo',
  0x0426: 'lv',
  0x0427: 'lt',
  0x082e: 'dsb',
  0x046e: 'lb',
  0x042f: 'mk',
  0x083e: 'ms-BN',
  0x043e: 'ms',
  0x044c: 'ml',
  0x043a: 'mt',
  0x0481: 'mi',
  0x047a: 'arn',
  0x044e: 'mr',
  0x047c: 'moh',
  0x0450: 'mn',
  0x0850: 'mn-CN',
  0x0461: 'ne',
  0x0414: 'nb',
  0x0814: 'nn',
  0x0482: 'oc',
  0x0448: 'or',
  0x0463: 'ps',
  0x0415: 'pl',
  0x0416: 'pt',
  0x0816: 'pt-PT',
  0x0446: 'pa',
  0x046b: 'qu-BO',
  0x086b: 'qu-EC',
  0x0c6b: 'qu',
  0x0418: 'ro',
  0x0417: 'rm',
  0x0419: 'ru',
  0x243b: 'smn',
  0x103b: 'smj-NO',
  0x143b: 'smj',
  0x0c3b: 'se-FI',
  0x043b: 'se',
  0x083b: 'se-SE',
  0x203b: 'sms',
  0x183b: 'sma-NO',
  0x1c3b: 'sms',
  0x044f: 'sa',
  0x1c1a: 'sr-Cyrl-BA',
  0x0c1a: 'sr',
  0x181a: 'sr-Latn-BA',
  0x081a: 'sr-Latn',
  0x046c: 'nso',
  0x0432: 'tn',
  0x045b: 'si',
  0x041b: 'sk',
  0x0424: 'sl',
  0x2c0a: 'es-AR',
  0x400a: 'es-BO',
  0x340a: 'es-CL',
  0x240a: 'es-CO',
  0x140a: 'es-CR',
  0x1c0a: 'es-DO',
  0x300a: 'es-EC',
  0x440a: 'es-SV',
  0x100a: 'es-GT',
  0x480a: 'es-HN',
  0x080a: 'es-MX',
  0x4c0a: 'es-NI',
  0x180a: 'es-PA',
  0x3c0a: 'es-PY',
  0x280a: 'es-PE',
  0x500a: 'es-PR',
  // Microsoft has defined two different language codes for
  // “Spanish with modern sorting” and “Spanish with traditional
  // sorting”. This makes sense for collation APIs, and it would be
  // possible to express this in BCP 47 language tags via Unicode
  // extensions (eg., es-u-co-trad is Spanish with traditional
  // sorting). However, for storing names in fonts, the distinction
  // does not make sense, so we give “es” in both cases.
  0x0c0a: 'es',
  0x040a: 'es',
  0x540a: 'es-US',
  0x380a: 'es-UY',
  0x200a: 'es-VE',
  0x081d: 'sv-FI',
  0x041d: 'sv',
  0x045a: 'syr',
  0x0428: 'tg',
  0x085f: 'tzm',
  0x0449: 'ta',
  0x0444: 'tt',
  0x044a: 'te',
  0x041e: 'th',
  0x0451: 'bo',
  0x041f: 'tr',
  0x0442: 'tk',
  0x0480: 'ug',
  0x0422: 'uk',
  0x042e: 'hsb',
  0x0420: 'ur',
  0x0843: 'uz-Cyrl',
  0x0443: 'uz',
  0x042a: 'vi',
  0x0452: 'cy',
  0x0488: 'wo',
  0x0485: 'sah',
  0x0478: 'ii',
  0x046a: 'yo'
};

// MacOS language ID → MacOS script ID
//
// Note that the script ID is not sufficient to determine what encoding
// to use in TrueType files. For some languages, MacOS used a modification
// of a mainstream script. For example, an Icelandic name would be stored
// with smRoman in the TrueType naming table, but the actual encoding
// is a special Icelandic version of the normal Macintosh Roman encoding.
// As another example, Inuktitut uses an 8-bit encoding for Canadian Aboriginal
// Syllables but MacOS had run out of available script codes, so this was
// done as a (pretty radical) "modification" of Ethiopic.
//
// http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/Readme.txt
var macLanguageToScript = {
  0: 0,
  // langEnglish → smRoman
  1: 0,
  // langFrench → smRoman
  2: 0,
  // langGerman → smRoman
  3: 0,
  // langItalian → smRoman
  4: 0,
  // langDutch → smRoman
  5: 0,
  // langSwedish → smRoman
  6: 0,
  // langSpanish → smRoman
  7: 0,
  // langDanish → smRoman
  8: 0,
  // langPortuguese → smRoman
  9: 0,
  // langNorwegian → smRoman
  10: 5,
  // langHebrew → smHebrew
  11: 1,
  // langJapanese → smJapanese
  12: 4,
  // langArabic → smArabic
  13: 0,
  // langFinnish → smRoman
  14: 6,
  // langGreek → smGreek
  15: 0,
  // langIcelandic → smRoman (modified)
  16: 0,
  // langMaltese → smRoman
  17: 0,
  // langTurkish → smRoman (modified)
  18: 0,
  // langCroatian → smRoman (modified)
  19: 2,
  // langTradChinese → smTradChinese
  20: 4,
  // langUrdu → smArabic
  21: 9,
  // langHindi → smDevanagari
  22: 21,
  // langThai → smThai
  23: 3,
  // langKorean → smKorean
  24: 29,
  // langLithuanian → smCentralEuroRoman
  25: 29,
  // langPolish → smCentralEuroRoman
  26: 29,
  // langHungarian → smCentralEuroRoman
  27: 29,
  // langEstonian → smCentralEuroRoman
  28: 29,
  // langLatvian → smCentralEuroRoman
  29: 0,
  // langSami → smRoman
  30: 0,
  // langFaroese → smRoman (modified)
  31: 4,
  // langFarsi → smArabic (modified)
  32: 7,
  // langRussian → smCyrillic
  33: 25,
  // langSimpChinese → smSimpChinese
  34: 0,
  // langFlemish → smRoman
  35: 0,
  // langIrishGaelic → smRoman (modified)
  36: 0,
  // langAlbanian → smRoman
  37: 0,
  // langRomanian → smRoman (modified)
  38: 29,
  // langCzech → smCentralEuroRoman
  39: 29,
  // langSlovak → smCentralEuroRoman
  40: 0,
  // langSlovenian → smRoman (modified)
  41: 5,
  // langYiddish → smHebrew
  42: 7,
  // langSerbian → smCyrillic
  43: 7,
  // langMacedonian → smCyrillic
  44: 7,
  // langBulgarian → smCyrillic
  45: 7,
  // langUkrainian → smCyrillic (modified)
  46: 7,
  // langByelorussian → smCyrillic
  47: 7,
  // langUzbek → smCyrillic
  48: 7,
  // langKazakh → smCyrillic
  49: 7,
  // langAzerbaijani → smCyrillic
  50: 4,
  // langAzerbaijanAr → smArabic
  51: 24,
  // langArmenian → smArmenian
  52: 23,
  // langGeorgian → smGeorgian
  53: 7,
  // langMoldavian → smCyrillic
  54: 7,
  // langKirghiz → smCyrillic
  55: 7,
  // langTajiki → smCyrillic
  56: 7,
  // langTurkmen → smCyrillic
  57: 27,
  // langMongolian → smMongolian
  58: 7,
  // langMongolianCyr → smCyrillic
  59: 4,
  // langPashto → smArabic
  60: 4,
  // langKurdish → smArabic
  61: 4,
  // langKashmiri → smArabic
  62: 4,
  // langSindhi → smArabic
  63: 26,
  // langTibetan → smTibetan
  64: 9,
  // langNepali → smDevanagari
  65: 9,
  // langSanskrit → smDevanagari
  66: 9,
  // langMarathi → smDevanagari
  67: 13,
  // langBengali → smBengali
  68: 13,
  // langAssamese → smBengali
  69: 11,
  // langGujarati → smGujarati
  70: 10,
  // langPunjabi → smGurmukhi
  71: 12,
  // langOriya → smOriya
  72: 17,
  // langMalayalam → smMalayalam
  73: 16,
  // langKannada → smKannada
  74: 14,
  // langTamil → smTamil
  75: 15,
  // langTelugu → smTelugu
  76: 18,
  // langSinhalese → smSinhalese
  77: 19,
  // langBurmese → smBurmese
  78: 20,
  // langKhmer → smKhmer
  79: 22,
  // langLao → smLao
  80: 30,
  // langVietnamese → smVietnamese
  81: 0,
  // langIndonesian → smRoman
  82: 0,
  // langTagalog → smRoman
  83: 0,
  // langMalayRoman → smRoman
  84: 4,
  // langMalayArabic → smArabic
  85: 28,
  // langAmharic → smEthiopic
  86: 28,
  // langTigrinya → smEthiopic
  87: 28,
  // langOromo → smEthiopic
  88: 0,
  // langSomali → smRoman
  89: 0,
  // langSwahili → smRoman
  90: 0,
  // langKinyarwanda → smRoman
  91: 0,
  // langRundi → smRoman
  92: 0,
  // langNyanja → smRoman
  93: 0,
  // langMalagasy → smRoman
  94: 0,
  // langEsperanto → smRoman
  128: 0,
  // langWelsh → smRoman (modified)
  129: 0,
  // langBasque → smRoman
  130: 0,
  // langCatalan → smRoman
  131: 0,
  // langLatin → smRoman
  132: 0,
  // langQuechua → smRoman
  133: 0,
  // langGuarani → smRoman
  134: 0,
  // langAymara → smRoman
  135: 7,
  // langTatar → smCyrillic
  136: 4,
  // langUighur → smArabic
  137: 26,
  // langDzongkha → smTibetan
  138: 0,
  // langJavaneseRom → smRoman
  139: 0,
  // langSundaneseRom → smRoman
  140: 0,
  // langGalician → smRoman
  141: 0,
  // langAfrikaans → smRoman
  142: 0,
  // langBreton → smRoman (modified)
  143: 28,
  // langInuktitut → smEthiopic (modified)
  144: 0,
  // langScottishGaelic → smRoman (modified)
  145: 0,
  // langManxGaelic → smRoman (modified)
  146: 0,
  // langIrishGaelicScript → smRoman (modified)
  147: 0,
  // langTongan → smRoman
  148: 6,
  // langGreekAncient → smRoman
  149: 0,
  // langGreenlandic → smRoman
  150: 0,
  // langAzerbaijanRoman → smRoman
  151: 0 // langNynorsk → smRoman
};
function getEncoding(platformID, encodingID, languageID) {
  switch (platformID) {
    case 0:
      // Unicode
      return utf16;
    case 1:
      // Apple Macintosh
      return macLanguageEncodings[languageID] || macScriptEncodings[encodingID];
    case 3:
      // Microsoft Windows
      if (encodingID === 1 || encodingID === 10) {
        return utf16;
      }
      break;
    default:
      break;
  }
  return undefined;
}
function reverseDict(dict) {
  var result = {};
  __WEBPACK_IMPORTED_MODULE_0_lodash_forOwn___default()(dict, function (value, key) {
    result[value] = parseInt(key, 10);
  });
  return result;
}
function makeNameRecord(platformID, encodingID, languageID, nameID, length, offset) {
  return buildTableObj('NameRecord', [{
    name: 'platformID',
    type: 'USHORT',
    value: platformID
  }, {
    name: 'encodingID',
    type: 'USHORT',
    value: encodingID
  }, {
    name: 'languageID',
    type: 'USHORT',
    value: languageID
  }, {
    name: 'nameID',
    type: 'USHORT',
    value: nameID
  }, {
    name: 'length',
    type: 'USHORT',
    value: length
  }, {
    name: 'offset',
    type: 'USHORT',
    value: offset
  }]);
}

// NameIDs for the name table.
var nameTableNames = ['copyright',
// 0
'fontFamily',
// 1
'fontSubfamily',
// 2
'uniqueID',
// 3
'fullName',
// 4
'version',
// 5
'postScriptName',
// 6
'trademark',
// 7
'manufacturer',
// 8
'designer',
// 9
'description',
// 10
'manufacturerURL',
// 11
'designerURL',
// 12
'license',
// 13
'licenseURL',
// 14
'reserved',
// 15
'preferredFamily',
// 16
'preferredSubfamily',
// 17
'compatibleFullName',
// 18
'sampleText',
// 19
'postScriptFindFontName',
// 20
'wwsFamily',
// 21
'wwsSubfamily' // 22
];

// Finds the position of needle in haystack, or -1 if not there.
// Like String.indexOf(), but for arrays.
function findSubArray(needle, haystack) {
  var needleLength = needle.length;
  var limit = haystack.length - needleLength + 1;

  /* eslint-disable no-restricted-syntax, max-depth, no-continue, no-labels */
  loop: for (var pos = 0; pos < limit; pos++) {
    for (; pos < limit; pos++) {
      for (var k = 0; k < needleLength; k++) {
        if (haystack[pos + k] !== needle[k]) {
          continue loop;
        }
      }
      return pos;
    }
  }
  /* eslint-enable */

  return -1;
}
function addStringToPool(s, pool) {
  var offset = findSubArray(s, pool);
  if (offset < 0) {
    offset = pool.length;
    for (var i = 0; i < s.length; i++) {
      pool.push(s[i]);
    }
  }
  return offset;
}
var name = /*#__PURE__*/function () {
  function name() {
    _classCallCheck(this, name);
  }
  return _createClass(name, null, [{
    key: "make",
    value: function make(names, ltag) {
      var nameID;
      var nameIDs = [];
      var namesWithNumericKeys = {};
      var nameTableIds = reverseDict(nameTableNames);
      __WEBPACK_IMPORTED_MODULE_0_lodash_forOwn___default()(names, function (value, key) {
        if (value !== undefined) {
          var id = nameTableIds[key];
          if (id === undefined) {
            id = key;
          }
          nameID = parseInt(id, 10);
          if (isNaN(nameID)) {
            throw new Error("Name table entry \"".concat(key, "\" does not exist, see nameTableNames for complete list."));
          }
          namesWithNumericKeys[nameID] = names[key];
          nameIDs.push(nameID);
        }
      });
      var macLanguageIds = reverseDict(macLanguages);
      var windowsLanguageIds = reverseDict(windowsLanguages);
      var nameRecords = [];
      var stringPool = [];
      for (var i = 0; i < nameIDs.length; i++) {
        nameID = nameIDs[i];
        var translations = namesWithNumericKeys[nameID];
        __WEBPACK_IMPORTED_MODULE_0_lodash_forOwn___default()(translations, function (text, lang) {
          // eslint-disable-line no-loop-func
          // For MacOS, we try to emit the name in the form that was introduced
          // in the initial version of the TrueType spec (in the late 1980s).
          // However, this can fail for various reasons: the requested BCP 47
          // language code might not have an old-style Mac equivalent;
          // we might not have a codec for the needed character encoding;
          // or the name might contain characters that cannot be expressed
          // in the old-style Macintosh encoding. In case of failure, we emit
          // the name in a more modern fashion (Unicode encoding with BCP 47
          // language tags) that is recognized by MacOS 10.5, released in 2009.
          // If fonts were only read by operating systems, we could simply
          // emit all names in the modern form; this would be much easier.
          // However, there are many applications and libraries that read
          // 'name' tables directly, and these will usually only recognize
          // the ancient form (silently skipping the unrecognized names).
          var macPlatform = 1; // Macintosh
          var macLanguage = macLanguageIds[lang];
          var macScript = macLanguageToScript[macLanguage];
          var macEncoding = getEncoding(macPlatform, macScript, macLanguage);
          var macName = __WEBPACK_IMPORTED_MODULE_1__encode__["a" /* encode */].MACSTRING(text, macEncoding);
          if (macName === undefined) {
            macPlatform = 0; // Unicode
            macLanguage = ltag.indexOf(lang);
            if (macLanguage < 0) {
              macLanguage = ltag.length;
              ltag.push(lang);
            }
            macScript = 4; // Unicode 2.0 and later
            macName = __WEBPACK_IMPORTED_MODULE_1__encode__["a" /* encode */].UTF16(text);
          }
          var macNameOffset = addStringToPool(macName, stringPool);
          nameRecords.push(makeNameRecord(macPlatform, macScript, macLanguage, nameID, macName.length, macNameOffset));
          var winLanguage = windowsLanguageIds[lang];
          if (winLanguage !== undefined) {
            var winName = __WEBPACK_IMPORTED_MODULE_1__encode__["a" /* encode */].UTF16(text);
            var winNameOffset = addStringToPool(winName, stringPool);
            nameRecords.push(makeNameRecord(3, 1, winLanguage, nameID, winName.length, winNameOffset));
          }
        });
      }
      nameRecords.sort(function (a, b) {
        return a.platformID - b.platformID || a.encodingID - b.encodingID || a.languageID - b.languageID || a.nameID - b.nameID;
      });
      var t = buildTableObj('name', [{
        name: 'format',
        type: 'USHORT',
        value: 0
      }, {
        name: 'count',
        type: 'USHORT',
        value: nameRecords.length
      }, {
        name: 'stringOffset',
        type: 'USHORT',
        value: 6 + nameRecords.length * 12
      }]);
      for (var r = 0; r < nameRecords.length; r++) {
        t.fields.push({
          name: "record_".concat(r),
          type: 'RECORD',
          value: nameRecords[r]
        });
      }
      t.fields.push({
        name: 'strings',
        type: 'LITERAL',
        value: stringPool
      });
      return t;
    }
  }]);
}();
var ltag = /*#__PURE__*/function () {
  function ltag() {
    _classCallCheck(this, ltag);
  }
  return _createClass(ltag, null, [{
    key: "make",
    value: function make(tags) {
      var result = buildTableObj('ltag', [{
        name: 'version',
        type: 'ULONG',
        value: 1
      }, {
        name: 'flags',
        type: 'ULONG',
        value: 0
      }, {
        name: 'numTags',
        type: 'ULONG',
        value: tags.length
      }]);
      var stringPool = '';
      var stringPoolOffset = 12 + tags.length * 4;
      for (var i = 0; i < tags.length; i++) {
        var pos = stringPool.indexOf(tags[i]);
        if (pos < 0) {
          pos = stringPool.length;
          stringPool += tags[i];
        }
        result.fields.push({
          name: "offset ".concat(i),
          type: 'USHORT',
          value: stringPoolOffset + pos
        });
        result.fields.push({
          name: "length ".concat(i),
          type: 'USHORT',
          value: tags[i].length
        });
      }
      result.fields.push({
        name: 'stringPool',
        type: 'CHARARRAY',
        value: stringPool
      });
      return result;
    }
  }]);
}();
var post = /*#__PURE__*/function () {
  function post() {
    _classCallCheck(this, post);
  }
  return _createClass(post, null, [{
    key: "make",
    value: function make() {
      return buildTableObj('post', [{
        name: 'version',
        type: 'FIXED',
        value: 0x00030000
      }, {
        name: 'italicAngle',
        type: 'FIXED',
        value: 0
      }, {
        name: 'underlinePosition',
        type: 'FWORD',
        value: 0
      }, {
        name: 'underlineThickness',
        type: 'FWORD',
        value: 0
      }, {
        name: 'isFixedPitch',
        type: 'ULONG',
        value: 0
      }, {
        name: 'minMemType42',
        type: 'ULONG',
        value: 0
      }, {
        name: 'maxMemType42',
        type: 'ULONG',
        value: 0
      }, {
        name: 'minMemType1',
        type: 'ULONG',
        value: 0
      }, {
        name: 'maxMemType1',
        type: 'ULONG',
        value: 0
      }]);
    }
  }]);
}();
var cffStandardStrings = ['.notdef', 'space', 'exclam', 'quotedbl', 'numbersign', 'dollar', 'percent', 'ampersand', 'quoteright', 'parenleft', 'parenright', 'asterisk', 'plus', 'comma', 'hyphen', 'period', 'slash', 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'colon', 'semicolon', 'less', 'equal', 'greater', 'question', 'at', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'bracketleft', 'backslash', 'bracketright', 'asciicircum', 'underscore', 'quoteleft', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'braceleft', 'bar', 'braceright', 'asciitilde', 'exclamdown', 'cent', 'sterling', 'fraction', 'yen', 'florin', 'section', 'currency', 'quotesingle', 'quotedblleft', 'guillemotleft', 'guilsinglleft', 'guilsinglright', 'fi', 'fl', 'endash', 'dagger', 'daggerdbl', 'periodcentered', 'paragraph', 'bullet', 'quotesinglbase', 'quotedblbase', 'quotedblright', 'guillemotright', 'ellipsis', 'perthousand', 'questiondown', 'grave', 'acute', 'circumflex', 'tilde', 'macron', 'breve', 'dotaccent', 'dieresis', 'ring', 'cedilla', 'hungarumlaut', 'ogonek', 'caron', 'emdash', 'AE', 'ordfeminine', 'Lslash', 'Oslash', 'OE', 'ordmasculine', 'ae', 'dotlessi', 'lslash', 'oslash', 'oe', 'germandbls', 'onesuperior', 'logicalnot', 'mu', 'trademark', 'Eth', 'onehalf', 'plusminus', 'Thorn', 'onequarter', 'divide', 'brokenbar', 'degree', 'thorn', 'threequarters', 'twosuperior', 'registered', 'minus', 'eth', 'multiply', 'threesuperior', 'copyright', 'Aacute', 'Acircumflex', 'Adieresis', 'Agrave', 'Aring', 'Atilde', 'Ccedilla', 'Eacute', 'Ecircumflex', 'Edieresis', 'Egrave', 'Iacute', 'Icircumflex', 'Idieresis', 'Igrave', 'Ntilde', 'Oacute', 'Ocircumflex', 'Odieresis', 'Ograve', 'Otilde', 'Scaron', 'Uacute', 'Ucircumflex', 'Udieresis', 'Ugrave', 'Yacute', 'Ydieresis', 'Zcaron', 'aacute', 'acircumflex', 'adieresis', 'agrave', 'aring', 'atilde', 'ccedilla', 'eacute', 'ecircumflex', 'edieresis', 'egrave', 'iacute', 'icircumflex', 'idieresis', 'igrave', 'ntilde', 'oacute', 'ocircumflex', 'odieresis', 'ograve', 'otilde', 'scaron', 'uacute', 'ucircumflex', 'udieresis', 'ugrave', 'yacute', 'ydieresis', 'zcaron', 'exclamsmall', 'Hungarumlautsmall', 'dollaroldstyle', 'dollarsuperior', 'ampersandsmall', 'Acutesmall', 'parenleftsuperior', 'parenrightsuperior', '266 ff', 'onedotenleader', 'zerooldstyle', 'oneoldstyle', 'twooldstyle', 'threeoldstyle', 'fouroldstyle', 'fiveoldstyle', 'sixoldstyle', 'sevenoldstyle', 'eightoldstyle', 'nineoldstyle', 'commasuperior', 'threequartersemdash', 'periodsuperior', 'questionsmall', 'asuperior', 'bsuperior', 'centsuperior', 'dsuperior', 'esuperior', 'isuperior', 'lsuperior', 'msuperior', 'nsuperior', 'osuperior', 'rsuperior', 'ssuperior', 'tsuperior', 'ff', 'ffi', 'ffl', 'parenleftinferior', 'parenrightinferior', 'Circumflexsmall', 'hyphensuperior', 'Gravesmall', 'Asmall', 'Bsmall', 'Csmall', 'Dsmall', 'Esmall', 'Fsmall', 'Gsmall', 'Hsmall', 'Ismall', 'Jsmall', 'Ksmall', 'Lsmall', 'Msmall', 'Nsmall', 'Osmall', 'Psmall', 'Qsmall', 'Rsmall', 'Ssmall', 'Tsmall', 'Usmall', 'Vsmall', 'Wsmall', 'Xsmall', 'Ysmall', 'Zsmall', 'colonmonetary', 'onefitted', 'rupiah', 'Tildesmall', 'exclamdownsmall', 'centoldstyle', 'Lslashsmall', 'Scaronsmall', 'Zcaronsmall', 'Dieresissmall', 'Brevesmall', 'Caronsmall', 'Dotaccentsmall', 'Macronsmall', 'figuredash', 'hypheninferior', 'Ogoneksmall', 'Ringsmall', 'Cedillasmall', 'questiondownsmall', 'oneeighth', 'threeeighths', 'fiveeighths', 'seveneighths', 'onethird', 'twothirds', 'zerosuperior', 'foursuperior', 'fivesuperior', 'sixsuperior', 'sevensuperior', 'eightsuperior', 'ninesuperior', 'zeroinferior', 'oneinferior', 'twoinferior', 'threeinferior', 'fourinferior', 'fiveinferior', 'sixinferior', 'seveninferior', 'eightinferior', 'nineinferior', 'centinferior', 'dollarinferior', 'periodinferior', 'commainferior', 'Agravesmall', 'Aacutesmall', 'Acircumflexsmall', 'Atildesmall', 'Adieresissmall', 'Aringsmall', 'AEsmall', 'Ccedillasmall', 'Egravesmall', 'Eacutesmall', 'Ecircumflexsmall', 'Edieresissmall', 'Igravesmall', 'Iacutesmall', 'Icircumflexsmall', 'Idieresissmall', 'Ethsmall', 'Ntildesmall', 'Ogravesmall', 'Oacutesmall', 'Ocircumflexsmall', 'Otildesmall', 'Odieresissmall', 'OEsmall', 'Oslashsmall', 'Ugravesmall', 'Uacutesmall', 'Ucircumflexsmall', 'Udieresissmall', 'Yacutesmall', 'Thornsmall', 'Ydieresissmall', '001.000', '001.001', '001.002', '001.003', 'Black', 'Bold', 'Book', 'Light', 'Medium', 'Regular', 'Roman', 'Semibold'];
var TOP_DICT_META = [{
  name: 'version',
  op: 0,
  type: 'SID'
}, {
  name: 'notice',
  op: 1,
  type: 'SID'
}, {
  name: 'copyright',
  op: 1200,
  type: 'SID'
}, {
  name: 'fullName',
  op: 2,
  type: 'SID'
}, {
  name: 'familyName',
  op: 3,
  type: 'SID'
}, {
  name: 'weight',
  op: 4,
  type: 'SID'
}, {
  name: 'isFixedPitch',
  op: 1201,
  type: 'number',
  value: 0
}, {
  name: 'italicAngle',
  op: 1202,
  type: 'number',
  value: 0
}, {
  name: 'underlinePosition',
  op: 1203,
  type: 'number',
  value: -100
}, {
  name: 'underlineThickness',
  op: 1204,
  type: 'number',
  value: 50
}, {
  name: 'paintType',
  op: 1205,
  type: 'number',
  value: 0
}, {
  name: 'charstringType',
  op: 1206,
  type: 'number',
  value: 2
}, {
  name: 'fontMatrix',
  op: 1207,
  type: ['real', 'real', 'real', 'real', 'real', 'real'],
  value: [0.001, 0, 0, 0.001, 0, 0]
}, {
  name: 'uniqueId',
  op: 13,
  type: 'number'
}, {
  name: 'fontBBox',
  op: 5,
  type: ['number', 'number', 'number', 'number'],
  value: [0, 0, 0, 0]
}, {
  name: 'strokeWidth',
  op: 1208,
  type: 'number',
  value: 0
}, {
  name: 'xuid',
  op: 14,
  type: [],
  value: null
}, {
  name: 'charset',
  op: 15,
  type: 'offset',
  value: 0
}, {
  name: 'encoding',
  op: 16,
  type: 'offset',
  value: 0
}, {
  name: 'charStrings',
  op: 17,
  type: 'offset',
  value: 0
}, {
  name: 'private',
  op: 18,
  type: ['number', 'offset'],
  value: [0, 0]
}];
var PRIVATE_DICT_META = [{
  name: 'subrs',
  op: 19,
  type: 'offset',
  value: 0
}, {
  name: 'defaultWidthX',
  op: 20,
  type: 'number',
  value: 0
}, {
  name: 'nominalWidthX',
  op: 21,
  type: 'number',
  value: 0
}];
function makeCffHeader() {
  return buildTableObj('Header', [{
    name: 'major',
    type: 'Card8',
    value: 1
  }, {
    name: 'minor',
    type: 'Card8',
    value: 0
  }, {
    name: 'hdrSize',
    type: 'Card8',
    value: 4
  }, {
    name: 'major',
    type: 'Card8',
    value: 1
  }]);
}
function makeNameIndex(fontNames) {
  var t = buildTableObj('Name INDEX', [{
    name: 'names',
    type: 'INDEX',
    value: []
  }]);
  t.names = [];
  for (var i = 0; i < fontNames.length; i++) {
    t.names.push({
      name: "name_".concat(i),
      type: 'NAME',
      value: fontNames[i]
    });
  }
  return t;
}

// Custom equals function that can also check lists.
function equals(a, b) {
  if (a === b) {
    return true;
  } else if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    for (var i = 0; i < a.length; i++) {
      if (!equals(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
  return false;
}

// Convert a string to a String ID (SID).
// The list of strings is modified in place.
function encodeString(s, strings) {
  var sid;

  // Is the string in the CFF standard strings?
  var i = cffStandardStrings.indexOf(s);
  if (i >= 0) {
    sid = i;
  }

  // Is the string already in the string index?
  i = strings.indexOf(s);
  if (i >= 0) {
    sid = i + cffStandardStrings.length;
  } else {
    sid = cffStandardStrings.length + strings.length;
    strings.push(s);
  }
  return sid;
}

// Given a dictionary's metadata, create a DICT structure.
function makeDict(meta, attrs, strings) {
  var m = {};
  for (var i = 0; i < meta.length; i++) {
    var entry = meta[i];
    var value = attrs[entry.name];
    if (value !== undefined && !equals(value, entry.value)) {
      if (entry.type === 'SID') {
        value = encodeString(value, strings);
      }
      m[entry.op] = {
        name: entry.name,
        type: entry.type,
        value: value
      };
    }
  }
  return m;
}

// The Top DICT houses the global font attributes.
function makeTopDict(attrs, strings) {
  var t = buildTableObj('Top DICT', [{
    name: 'dict',
    type: 'DICT',
    value: {}
  }]);
  t.dict = makeDict(TOP_DICT_META, attrs, strings);
  return t;
}
function makeTopDictIndex(topDict) {
  var t = buildTableObj('Top DICT INDEX', [{
    name: 'topDicts',
    type: 'INDEX',
    value: []
  }]);
  t.topDicts = [{
    name: 'topDict_0',
    type: 'TABLE',
    value: topDict
  }];
  return t;
}
function makeStringIndex(strings) {
  var t = buildTableObj('String INDEX', [{
    name: 'strings',
    type: 'INDEX',
    value: []
  }]);
  t.strings = [];
  for (var i = 0; i < strings.length; i++) {
    t.strings.push({
      name: "string_".concat(i),
      type: 'STRING',
      value: strings[i]
    });
  }
  return t;
}
function makeGlobalSubrIndex() {
  // Currently we don't use subroutines.
  return buildTableObj('Global Subr INDEX', [{
    name: 'subrs',
    type: 'INDEX',
    value: []
  }]);
}
function makeCharsets(glyphNames, strings) {
  var t = buildTableObj('Charsets', [{
    name: 'format',
    type: 'Card8',
    value: 0
  }]);
  for (var i = 0; i < glyphNames.length; i++) {
    var glyphName = glyphNames[i];
    var glyphSID = encodeString(glyphName, strings);
    t.fields.push({
      name: "glyph_".concat(i),
      type: 'SID',
      value: glyphSID
    });
  }
  return t;
}

// TODO(franz): does not work like that anymore
function glyphToOps(glyph) {
  var ops = [];
  var x = 0;
  var y = 0;
  ops.push({
    name: 'width',
    type: 'NUMBER',
    value: glyph.advanceWidth
  });
  for (var i = 0; i < glyph.otContours.length; i++) {
    var dx = void 0;
    var dy = void 0;
    var contour = glyph.otContours[i];
    for (var j = 0; j < contour.length; j++) {
      var bezier = contour[j];
      if (j === 0) {
        dx = Math.round(bezier[0].x - x);
        dy = Math.round(bezier[0].y - y);
        ops.push({
          name: 'dx',
          type: 'NUMBER',
          value: dx
        });
        ops.push({
          name: 'dy',
          type: 'NUMBER',
          value: dy
        });
        ops.push({
          name: 'rmoveto',
          type: 'OP',
          value: 21
        });
        x = Math.round(bezier[0].x);
        y = Math.round(bezier[0].y);
      }
      var dx1 = Math.round(bezier[1].x - x);
      var dy1 = Math.round(bezier[1].y - y);
      var dx2 = Math.round(bezier[2].x - bezier[1].x);
      var dy2 = Math.round(bezier[2].y - bezier[1].y);
      dx = Math.round(bezier[3].x - bezier[2].x);
      dy = Math.round(bezier[3].y - bezier[2].y);
      ops.push({
        name: 'dx1',
        type: 'NUMBER',
        value: dx1
      });
      ops.push({
        name: 'dy1',
        type: 'NUMBER',
        value: dy1
      });
      ops.push({
        name: 'dx2',
        type: 'NUMBER',
        value: dx2
      });
      ops.push({
        name: 'dy2',
        type: 'NUMBER',
        value: dy2
      });
      ops.push({
        name: 'dx',
        type: 'NUMBER',
        value: dx
      });
      ops.push({
        name: 'dy',
        type: 'NUMBER',
        value: dy
      });
      ops.push({
        name: 'rrcurveto',
        type: 'OP',
        value: 8
      });
      x = Math.round(bezier[3].x);
      y = Math.round(bezier[3].y);
      // Contours are closed automatically.
    }
  }
  ops.push({
    name: 'endchar',
    type: 'OP',
    value: 14
  });
  return ops;
}
function makeCharStringsIndex(glyphs) {
  var t = buildTableObj('CharStrings INDEX', [{
    name: 'charStrings',
    type: 'INDEX',
    value: []
  }]);
  for (var i = 0; i < glyphs.length; i++) {
    var glyph = glyphs[i];
    var ops = glyphToOps(glyph);
    t.charStrings.push({
      name: glyph.name,
      type: 'CHARSTRING',
      value: ops
    });
  }
  return t;
}
function makePrivateDict(attrs, strings) {
  var t = buildTableObj('Private DICT', [{
    name: 'dict',
    type: 'DICT',
    value: {}
  }]);
  t.dict = makeDict(PRIVATE_DICT_META, attrs, strings);
  return t;
}
var cff = /*#__PURE__*/function () {
  function cff() {
    _classCallCheck(this, cff);
  }
  return _createClass(cff, null, [{
    key: "make",
    value: function make(glyphs, options) {
      var t = buildTableObj('CFF ', [{
        name: 'header',
        type: 'RECORD'
      }, {
        name: 'nameIndex',
        type: 'RECORD'
      }, {
        name: 'topDictIndex',
        type: 'RECORD'
      }, {
        name: 'stringIndex',
        type: 'RECORD'
      }, {
        name: 'globalSubrIndex',
        type: 'RECORD'
      }, {
        name: 'charsets',
        type: 'RECORD'
      }, {
        name: 'charStringsIndex',
        type: 'RECORD'
      }, {
        name: 'privateDict',
        type: 'RECORD'
      }]);
      var fontScale = 1 / options.unitsPerEm;
      // We use non-zero values for the offsets so that the DICT encodes them.
      // This is important because the size of the Top DICT plays a role in offset calculation,
      // and the size shouldn't change after we've written correct offsets.
      var attrs = {
        version: options.version,
        fullName: options.fullName,
        familyName: options.familyName,
        weight: options.weightName,
        fontBBox: options.fontBBox || [0, 0, 0, 0],
        fontMatrix: [fontScale, 0, 0, fontScale, 0, 0],
        charset: 999,
        encoding: 0,
        charStrings: 999,
        private: [0, 999]
      };
      var privateAttrs = {};
      var glyphNames = [];

      // Skip first glyph (.notdef)
      for (var i = 1; i < glyphs.length; i++) {
        var glyph = glyphs[i];
        glyphNames.push(glyph.name);
      }
      var strings = [];
      var topDict = makeTopDict(attrs, strings);
      t.header = makeCffHeader();
      t.nameIndex = makeNameIndex([options.postScriptName]);
      t.topDictIndex = makeTopDictIndex(topDict);
      t.globalSubrIndex = makeGlobalSubrIndex();
      t.charsets = makeCharsets(glyphNames, strings);
      t.charStringsIndex = makeCharStringsIndex(glyphs);
      t.privateDict = makePrivateDict(privateAttrs, strings);

      // Needs to come at the end, to encode all custom strings used in the font.
      t.stringIndex = makeStringIndex(strings);
      var startOffset = sizeOfTable(t.header) + sizeOfTable(t.nameIndex) + sizeOfTable(t.topDictIndex) + sizeOfTable(t.stringIndex) + sizeOfTable(t.globalSubrIndex);
      attrs.charset = startOffset;

      // We use the CFF standard encoding; proper encoding will be handled in cmap.
      attrs.encoding = 0;
      attrs.charStrings = attrs.charset + sizeOfTable(t.charsets);
      attrs.private[1] = attrs.charStrings + sizeOfTable(t.charStringsIndex);

      // Recreate the Top DICT INDEX with the correct offsets.
      var topDictWithAttrs = makeTopDict(attrs, strings);
      t.topDictIndex = makeTopDictIndex(topDictWithAttrs);
      return t;
    }
  }]);
}();
function makeGposHeader() {
  return buildTableObj('Header', [{
    name: 'majorVersion',
    type: 'UINT16',
    value: 1
  }, {
    name: 'minorersion',
    type: 'UINT16',
    value: 1
  }, {
    name: 'scriptListOffset',
    type: 'Offset16',
    value: 10
  }, {
    name: 'featureListOffset',
    type: 'Offset16',
    value: undefined
  }, {
    name: 'lookupListOffset',
    type: 'Offset16',
    value: undefined
  }, {
    name: 'featureVariations',
    type: 'Offset32',
    value: 0
  }]);
}
function makeLanguageSystemTable(lang) {
  var t = buildTableObj('langSysTable', [{
    name: 'lookupOrder',
    type: 'Offset16',
    value: 0
  }, {
    name: 'requiredFeatureIndex',
    type: 'UINT16',
    value: lang.requiredFeatureIndex
  }, {
    name: 'featureIndexCount',
    type: 'UINT16',
    value: lang.featIndexes.length
  }, {
    name: 'featureIndices',
    type: 'ARRAY'
  }]);
  lang.featIndexes.forEach(function (feat, i) {
    t.featureIndices.push({
      name: "featureIndex[".concat(i, "]"),
      type: 'UINT16',
      value: feat
    });
  });
}
function makeLangSysRecords(lang, idx, offset) {
  var t = buildTableObj("langSysRecord[".concat(idx, "]"), [{
    name: 'langSysTag',
    type: 'Tag',
    value: lang.id
  }, {
    name: 'langSysOffset',
    type: 'Offset16',
    value: offset
  }]);
  return t;
}
function makeScriptTable(_ref) {
  var defaultLang = _ref.defaultLang,
    all = _ref.all;
  var offset = 4 + all.length * 6;
  var t = buildTableObj('scriptTable', [{
    name: 'defaultLangSys',
    type: 'Offset16',
    value: offset
  }, {
    name: 'langSysCount',
    type: 'UINT16',
    value: all.length
  }, {
    name: 'langSysRecords',
    type: 'ARRAY'
  }, {
    name: 'languageSystemTables',
    type: 'ARRAY'
  }]);
  t.langSysRecords = [];
  t.langSystemTables = [];
  var defaultLangSys = makeLanguageSystemTable(defaultLang, offset);
  offset += __WEBPACK_IMPORTED_MODULE_1__encode__["b" /* sizeOf */].TABLE(defaultLangSys);
  t.langSystemTables.push(defaultLangSys);
  all.forEach(function (language) {
    t.langSysRecords.push(makeLangSysRecords(language, offset));
    var langSysTable = makeLanguageSystemTable(language);
    offset += __WEBPACK_IMPORTED_MODULE_1__encode__["b" /* sizeOf */].TABLE(langSysTable);
    t.languageSystemTables.push(langSysTable);
  });
  return t;
}
function makeScriptRecord(tag) {
  var idx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var offset = arguments.length > 2 ? arguments[2] : undefined;
  var t = buildTableObj("scriptRecords[".concat(idx, "]"), [{
    name: 'scriptTag',
    type: 'Tag',
    value: tag
  }, {
    name: 'scriptOffset',
    type: 'Offset16'
  }]);
  t.scriptOffset = offset;
  return t;
}

/* Options layout
 * {
 *	scriptList: [
 *		{
 *			tag: 'latn',
 *			languages: {
 *				defaultLang:{
 *					id: 'DFLT', Default Language is required !!!!
 *					requiredFeatureIndex: 0,
 *					featureIndexes: [1, 2, 3...]
 *				},
 *				all: [
 *					{
 *						id: 'ROM',
 *						requiredFeatureIndex: 0xFFFF, //no required feat
 *						featureIndexes: [1, 2, 3...]
 *					},
 *				]
 *			],
 *		}
 *	]
 * }
 */

var gpos = /*#__PURE__*/function () {
  function gpos() {
    _classCallCheck(this, gpos);
  }
  return _createClass(gpos, null, [{
    key: "make",
    value: function make() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var scripts = options.scripts || ['latn'];
      var t = buildTableObj('GPOS ', [{
        name: 'header',
        type: 'RECORD'
      }, {
        name: 'scriptList',
        type: 'RECORD'
      }, {
        name: 'featureList',
        type: 'RECORD'
      }, {
        name: 'lookupList',
        type: 'RECORD'
      }, {
        name: 'featureVariations',
        type: 'RECORD'
      }]);
      t.header = makeGposHeader();
      t.scriptList = buildTableObj('ScriptListTable', [{
        name: 'scriptCount',
        type: 'UINT16',
        value: scriptList.length
      }, {
        name: 'scriptRecords',
        type: 'ARRAY'
      }, {
        name: 'scriptTables',
        type: 'ARRAY'
      }]);
      t.scriptList.scriptRecords = [];
      t.scriptList.scriptTables = [];
      var offset = options.scriptList.length * 6 + 2;
      options.scriptList.forEach(function (script, i) {
        t.scriptRecords.push(makeScriptRecord(script.tag, i, offset));
        var scriptTable = makeScriptTable(script.languages);
        offset += __WEBPACK_IMPORTED_MODULE_1__encode__["b" /* sizeOf */].TABLE(scriptTable);
        t.scriptList.scriptTables.push(scriptTable);
      });
    }
  }]);
}();
/* eslint-enable babel/new-cap */
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(buildTableObj, "buildTableObj", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(encodeTable, "encodeTable", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(sizeOfTable, "sizeOfTable", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(head, "head", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(hhea, "hhea", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(maxp, "maxp", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(os2, "os2", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(hmtx, "hmtx", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(addSegment, "addSegment", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(addTerminatorSegment, "addTerminatorSegment", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(cmap, "cmap", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(utf16, "utf16", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(macScriptEncodings, "macScriptEncodings", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(macLanguageEncodings, "macLanguageEncodings", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(macLanguages, "macLanguages", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(windowsLanguages, "windowsLanguages", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(macLanguageToScript, "macLanguageToScript", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(getEncoding, "getEncoding", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(reverseDict, "reverseDict", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeNameRecord, "makeNameRecord", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(nameTableNames, "nameTableNames", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(findSubArray, "findSubArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(addStringToPool, "addStringToPool", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(name, "name", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(ltag, "ltag", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(post, "post", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(cffStandardStrings, "cffStandardStrings", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(TOP_DICT_META, "TOP_DICT_META", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(PRIVATE_DICT_META, "PRIVATE_DICT_META", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeCffHeader, "makeCffHeader", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeNameIndex, "makeNameIndex", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(equals, "equals", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(encodeString, "encodeString", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeDict, "makeDict", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeTopDict, "makeTopDict", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeTopDictIndex, "makeTopDictIndex", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeStringIndex, "makeStringIndex", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeGlobalSubrIndex, "makeGlobalSubrIndex", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeCharsets, "makeCharsets", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(glyphToOps, "glyphToOps", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeCharStringsIndex, "makeCharStringsIndex", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makePrivateDict, "makePrivateDict", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(cff, "cff", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeGposHeader, "makeGposHeader", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeLanguageSystemTable, "makeLanguageSystemTable", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeLangSysRecords, "makeLangSysRecords", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeScriptTable, "makeScriptTable", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeScriptRecord, "makeScriptRecord", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(gpos, "gpos", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(_typeof, "_typeof", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(_classCallCheck, "_classCallCheck", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(_defineProperties, "_defineProperties", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(_createClass, "_createClass", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(_toPropertyKey, "_toPropertyKey", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(_toPrimitive, "_toPrimitive", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(__signature__, "__signature__", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(buildTableObj, "buildTableObj", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(encodeTable, "encodeTable", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(sizeOfTable, "sizeOfTable", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(head, "head", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(hhea, "hhea", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(maxp, "maxp", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(os2, "os2", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(hmtx, "hmtx", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(addSegment, "addSegment", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(addTerminatorSegment, "addTerminatorSegment", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(cmap, "cmap", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(utf16, "utf16", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(macScriptEncodings, "macScriptEncodings", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(macLanguageEncodings, "macLanguageEncodings", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(macLanguages, "macLanguages", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(windowsLanguages, "windowsLanguages", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(macLanguageToScript, "macLanguageToScript", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(getEncoding, "getEncoding", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(reverseDict, "reverseDict", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeNameRecord, "makeNameRecord", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(nameTableNames, "nameTableNames", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(findSubArray, "findSubArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(addStringToPool, "addStringToPool", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(name, "name", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(ltag, "ltag", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(post, "post", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(cffStandardStrings, "cffStandardStrings", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(TOP_DICT_META, "TOP_DICT_META", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(PRIVATE_DICT_META, "PRIVATE_DICT_META", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeCffHeader, "makeCffHeader", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeNameIndex, "makeNameIndex", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(equals, "equals", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(encodeString, "encodeString", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeDict, "makeDict", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeTopDict, "makeTopDict", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeTopDictIndex, "makeTopDictIndex", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeStringIndex, "makeStringIndex", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeGlobalSubrIndex, "makeGlobalSubrIndex", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeCharsets, "makeCharsets", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(glyphToOps, "glyphToOps", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeCharStringsIndex, "makeCharStringsIndex", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makePrivateDict, "makePrivateDict", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(cff, "cff", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeGposHeader, "makeGposHeader", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeLanguageSystemTable, "makeLanguageSystemTable", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeLangSysRecords, "makeLangSysRecords", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeScriptTable, "makeScriptTable", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(makeScriptRecord, "makeScriptRecord", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
  reactHotLoader.register(gpos, "gpos", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/table.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ 0)(module)))

/***/ }),
/* 189 */
/*!****************************************!*\
  !*** ./app/scripts/opentype/encode.js ***!
  \****************************************/
/*! exports provided: encode, sizeOf, print */
/*! exports used: encode, sizeOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return encode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sizeOf; });
/* unused harmony export print */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_memoize_immutable__ = __webpack_require__(/*! memoize-immutable */ 40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_memoize_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_memoize_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_forOwn__ = __webpack_require__(/*! lodash/forOwn */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_forOwn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_forOwn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__check__ = __webpack_require__(/*! ./check */ 71);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var LIMIT16 = 32768;
var LIMIT32 = 2147483648; // The limit at which a 32-bit number switches signs == 2 ^ 31

function constant(v) {
  return function () {
    return v;
  };
}
var encode = {};
var sizeOf = {};
var print = {};

/* eslint-disable babel/new-cap, no-bitwise, no-param-reassign */
encode.BYTE = function (v) {
  Object(__WEBPACK_IMPORTED_MODULE_2__check__["a" /* checkArgument */])(v >= 0 && v <= 255, 'Byte value should be between 0 and 255.');
  return [v];
};
sizeOf.BYTE = constant(1);
encode.CHAR = function (v) {
  return [v.charCodeAt(0)];
};
sizeOf.CHAR = constant(1);
encode.CHARARRAY = function (v) {
  var b = [];
  for (var i = 0; i < v.length; i += 1) {
    b[i] = v.charCodeAt(i);
  }
  return b;
};
sizeOf.CHARARRAY = function (v) {
  return v.length;
};
encode.USHORT = function (v) {
  return [v >> 8 & 0xff, v & 0xff];
};
sizeOf.USHORT = constant(2);
encode.SHORT = function (v) {
  // Two's complement
  if (v >= LIMIT16) {
    v = -(2 * LIMIT16 - v);
  }
  return [v >> 8 & 0xff, v & 0xff];
};
sizeOf.SHORT = constant(2);
encode.UINT16 = encode.SHORT;
sizeOf.UINT16 = sizeOf.SHORT;
encode.Offset16 = encode.SHORT;
sizeOf.Offset16 = sizeOf.SHORT;
encode.UINT24 = function (v) {
  return [v >> 16 & 0xff, v >> 8 & 0xff, v & 0xff];
};
sizeOf.UINT24 = constant(3);
encode.ULONG = function (v) {
  return [v >> 24 & 0xff, v >> 16 & 0xff, v >> 8 & 0xff, v & 0xff];
};
sizeOf.ULONG = constant(4);
encode.LONG = function (v) {
  // Two's complement
  if (v >= LIMIT32) {
    v = -(2 * LIMIT32 - v);
  }
  return [v >> 24 & 0xff, v >> 16 & 0xff, v >> 8 & 0xff, v & 0xff];
};
sizeOf.LONG = constant(4);
encode.FIXED = encode.ULONG;
sizeOf.FIXED = sizeOf.ULONG;
encode.FWORD = encode.SHORT;
sizeOf.FWORD = sizeOf.SHORT;
encode.UFWORD = encode.USHORT;
sizeOf.UFWORD = sizeOf.USHORT;
encode.LONGDATETIME = function (v) {
  return [0, 0, 0, 0, v >> 24 & 0xff, v >> 16 & 0xff, v >> 8 & 0xff, v & 0xff];
}; // eslint-disable-line max-len

sizeOf.LONGDATETIME = constant(8);
encode.TAG = function (v) {
  Object(__WEBPACK_IMPORTED_MODULE_2__check__["a" /* checkArgument */])(v.length === 4, 'Tag should be exactly 4 ASCII characters.');
  return [v.charCodeAt(0), v.charCodeAt(1), v.charCodeAt(2), v.charCodeAt(3)];
};
sizeOf.TAG = constant(4);
encode.Card8 = encode.BYTE;
sizeOf.Card8 = sizeOf.BYTE;
encode.Card16 = encode.USHORT;
sizeOf.Card16 = sizeOf.USHORT;
encode.OffSize = encode.BYTE;
sizeOf.OffSize = sizeOf.BYTE;
encode.SID = encode.USHORT;
sizeOf.SID = sizeOf.USHORT;
encode.NUMBER = function (v) {
  if (v >= -107 && v <= 107) {
    return [v + 139];
  } else if (v >= 108 && v <= 1131) {
    var val = v - 108;
    return [(val >> 8) + 247, val & 0xff];
  } else if (v >= -1131 && v <= -108) {
    var _val = -v - 108;
    return [(_val >> 8) + 251, _val & 0xff];
  } else if (v >= -32768 && v <= 32767) {
    return encode.NUMBER16(v);
  }
  return encode.NUMBER32(v);
};
sizeOf.NUMBER = function (v) {
  return encode.NUMBER(v).length;
};
encode.NUMBER16 = function (v) {
  return [28, v >> 8 & 0xff, v & 0xff];
};
sizeOf.NUMBER16 = constant(3);
encode.NUMBER32 = function (v) {
  return [29, v >> 24 & 0xff, v >> 16 & 0xff, v >> 8 & 0xff, v & 0xff];
};
sizeOf.NUMBER32 = constant(4);
encode.REAL = function (v) {
  var value = v.toString();

  // Some numbers use an epsilon to encode the value.
  // (e.g. JavaScript will store 0.0000001 as 1e-7)
  // This code converts it back to a number without the epsilon.
  var m = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(value);
  if (m) {
    var epsilon = parseFloat("1e".concat((m[2] ? +m[2] : 0) + m[1].length));
    value = (Math.round(v * epsilon) / epsilon).toString();
  }
  var nibbles = '';
  var i;
  for (i = 0; i < value.length; i++) {
    var c = value[i];
    if (c === 'e') {
      nibbles += value[++i] === '-' ? 'c' : 'b';
    } else if (c === '.') {
      nibbles += 'a';
    } else if (c === '-') {
      nibbles += 'e';
    } else {
      nibbles += c;
    }
  }
  nibbles += nibbles.length & 1 ? 'f' : 'ff';
  var out = [30];
  for (i = 0; i < nibbles.length; i += 2) {
    out.push(parseInt(nibbles.substr(i, 2), 16));
  }
  return out;
};
sizeOf.REAL = function (v) {
  return encode.REAL(v).length;
};
encode.NAME = encode.CHARARRAY;
sizeOf.NAME = sizeOf.CHARARRAY;
encode.STRING = encode.CHARARRAY;
sizeOf.STRING = sizeOf.CHARARRAY;
encode.UTF16 = function (v) {
  var b = [];
  for (var i = 0; i < v.length; i++) {
    var codepoint = v.charCodeAt(i);
    b[b.length] = codepoint >> 8 & 0xff;
    b[b.length] = codepoint & 0xff;
  }
  return b;
};

/**
 * @param {string}
 * @returns {number}
 */
sizeOf.UTF16 = function (v) {
  return v.length * 2;
};
var eightBitMacEncodings = {
  // Python: 'mac_croatian'
  'x-mac-croatian': 'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø' + '¿¡¬√≈Ć«Č… ÀÃÕŒœĐ“”‘’÷◊©⁄€Æ»·„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙı¯πË˚¸Êæˇ',
  // Python: 'mac_cyrillic'
  'x-mac-cyrillic': 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°£§¶І®©™Ђђ≠Ѓѓ∞±≤≥іµЈЄєЇїЉљЊњ' + 'јЅ¬√≈∆«»… ЋћЌќѕ“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю',
  'x-mac-gaelic':
  // http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/GAELIC.TXT
  'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæø' + 'ṁṖṗɼſṠ«»… ÀÃÕŒœ“”‘’ṡẛÿŸṪ€Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ',
  // Python: 'mac_greek'
  'x-mac-greek': 'Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩ' + "\u03AC\u039D\xAC\u039F\u03A1\u2248\u03A4\xAB\xBB\u2026 \u03A5\u03A7\u0386\u0388\u0153\u2015\u201C\u201D\u2018\u2019\xF7\u0389\u038A\u038C\u038E\u03AD\u03AE\u03AF\u03CC\u038F\u03CD\u03B1\u03B2\u03C8\u03B4\u03B5\u03C6\u03B3\u03B7\u03B9\u03BE\u03BA\u03BB\u03BC\u03BD\u03BF\u03C0\u03CE\u03C1\u03C3\u03C4\u03B8\u03C9\u03C2\u03C7\u03C5\u03B6\u03CA\u03CB\u0390\u03B0\xAD",
  // Python: 'mac_iceland'
  'x-mac-icelandic': 'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø' + '¿¡¬√≈∆«»… ÀÃÕŒœ“”‘’÷◊ÿŸ⁄€ÐðÞþý·„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙı¯˘˙˚¸˝˛ˇ',
  'x-mac-inuit':
  // http://unicode.org/Public/MAPPINGS/VENDORS/APPLE/INUIT.TXT
  'ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗ' + 'ᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł',
  // Python: 'mac_latin2'
  'x-mac-ce': 'ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅ' + 'ņŃ¬√ńŇ∆«»… ňŐÕőŌ“”‘’÷◊ōŔŕŘřŖŗŠ„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ',
  // Python: 'mac_roman'
  macintosh: 'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø' + '¿¡¬√≈∆«»… ÀÃÕŒœ“”‘’÷◊ÿŸ⁄€ﬁﬂ‡·„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙı¯˘˙˚¸˝˛ˇ',
  // Python: 'mac_romanian'
  'x-mac-romanian': 'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș' + '¿¡¬√≈∆«»… ÀÃÕŒœ“”‘’÷◊ÿŸ⁄€Țț‡·„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙı¯˘˙˚¸˝˛ˇ',
  // Python: 'mac_turkish'
  'x-mac-turkish': 'ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø' + '¿¡¬√≈∆«»… ÀÃÕŒœ“”‘’÷◊ÿŸĞğİıŞş‡·„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙ¯˘˙˚¸˝˛ˇ'
};
var macEncodingTableCache = typeof WeakMap === 'function' && new WeakMap();
var macEncodingCacheKeys;
var getMacEncodingTable = function getMacEncodingTable(encoding) {
  // Since we use encoding as a cache key for WeakMap, it has to be
  // a String object and not a literal. And at least on NodeJS 2.10.1,
  // WeakMap requires that the same String instance is passed for cache hits.
  if (!macEncodingCacheKeys) {
    macEncodingCacheKeys = {};
    __WEBPACK_IMPORTED_MODULE_1_lodash_forOwn___default()(eightBitMacEncodings, function (value, key) {
      /* eslint-disable no-new-wrappers */
      macEncodingCacheKeys[key] = new String(key);
      /* eslint-enable no-new-wrappers */
    });
  }
  var cacheKey = macEncodingCacheKeys[encoding];
  if (cacheKey === undefined) {
    return undefined;
  }

  // We can't do "if (cache.has(key)) {return cache.get(key)}" here:
  // since garbage collection may run at any time, it could also kick in
  // between the calls to cache.has() and cache.get(). In that case,
  // we would return 'undefined' even though we do support the encoding.
  if (macEncodingTableCache) {
    var cachedTable = macEncodingTableCache.get(cacheKey);
    if (cachedTable !== undefined) {
      return cachedTable;
    }
  }
  var decodingTable = eightBitMacEncodings[encoding];
  if (decodingTable === undefined) {
    return undefined;
  }
  var encodingTable = {};
  for (var i = 0; i < decodingTable.length; i++) {
    encodingTable[decodingTable.charCodeAt(i)] = i + 0x80;
  }
  if (macEncodingTableCache) {
    macEncodingTableCache.set(cacheKey, encodingTable);
  }
  return encodingTable;
};
encode.MACSTRING = function (str, encoding) {
  var table = getMacEncodingTable(encoding);
  if (table === undefined) {
    return undefined;
  }
  var result = [];
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);

    // In all eight-bit Mac encodings, the characters 0x00..0x7F are
    // mapped to U+0000..U+007F; we only need to look up the others.
    if (c >= 0x80) {
      c = table[c];
      if (c === undefined) {
        // str contains a Unicode character that cannot be encoded
        // in the requested encoding.
        return undefined;
      }
    }
    result[i] = c;
    // result.push(c);
  }
  return result;
};
sizeOf.MACSTRING = function (str, encoding) {
  var b = encode.MACSTRING(str, encoding);
  if (b === undefined) {
    return 0;
  }
  return b.length;
};

// Helper for encode.VARDELTAS
function isByteEncodable(value) {
  return value >= -128 && value <= 127;
}

// Helper for encode.VARDELTAS
function encodeVarDeltaRunAsZeroes(deltas, pos, result) {
  var runLength = 0;
  var numDeltas = deltas.length;
  var position = pos;
  while (position < numDeltas && runLength < 64 && deltas[position] === 0) {
    ++position;
    ++runLength;
  }
  result.push(0x80 | runLength - 1);
  return position;
}

// Helper for encode.VARDELTAS
function encodeVarDeltaRunAsBytes(deltas, offset, result) {
  var runLength = 0;
  var numDeltas = deltas.length;
  var pos = offset;
  while (pos < numDeltas && runLength < 64) {
    var value = deltas[pos];
    if (!isByteEncodable(value)) {
      break;
    }

    // Within a byte-encoded run of deltas, a single zero is best
    // stored literally as 0x00 value. However, if we have two or
    // more zeroes in a sequence, it is better to start a new run.
    // Fore example, the sequence of deltas [15, 15, 0, 15, 15]
    // becomes 6 bytes (04 0F 0F 00 0F 0F) when storing the zero
    // within the current run, but 7 bytes (01 0F 0F 80 01 0F 0F)
    // when starting a new run.
    if (value === 0 && pos + 1 < numDeltas && deltas[pos + 1] === 0) {
      break;
    }
    ++pos;
    ++runLength;
  }
  result.push(runLength - 1);
  for (var i = offset; i < pos; i++) {
    result.push(deltas[i] + 256 & 0xff);
  }
  return pos;
}

// Helper for encode.VARDELTAS
function encodeVarDeltaRunAsWords(deltas, offset, result) {
  var runLength = 0;
  var numDeltas = deltas.length;
  var pos = offset;
  while (pos < numDeltas && runLength < 64) {
    var value = deltas[pos];

    // Within a word-encoded run of deltas, it is easiest to start
    // a new run (with a different encoding) whenever we encounter
    // a zero value. For example, the sequence [0x6666, 0, 0x7777]
    // needs 7 bytes when storing the zero inside the current run
    // (42 66 66 00 00 77 77), and equally 7 bytes when starting a
    // new run (40 66 66 80 40 77 77).
    if (value === 0) {
      break;
    }

    // Within a word-encoded run of deltas, a single value in the
    // range (-128..127) should be encoded within the current run
    // because it is more compact. For example, the sequence
    // [0x6666, 2, 0x7777] becomes 7 bytes when storing the value
    // literally (42 66 66 00 02 77 77), but 8 bytes when starting
    // a new run (40 66 66 00 02 40 77 77).
    if (isByteEncodable(value) && pos + 1 < numDeltas && isByteEncodable(deltas[pos + 1])) {
      break;
    }
    ++pos;
    ++runLength;
  }
  result.push(0x40 | runLength - 1);
  for (var i = offset; i < pos; i++) {
    var val = deltas[i];
    result.push(val + 0x10000 >> 8 & 0xff, val + 0x100 & 0xff);
  }
  return pos;
}

/**
 * Encode a list of variation adjustment deltas.
 *
 * Variation adjustment deltas are used in ‘gvar’ and ‘cvar’ tables.
 * They indicate how points (in ‘gvar’) or values (in ‘cvar’) get adjusted
 * when generating instances of variation fonts.
 *
 * @see https://www.microsoft.com/typography/otspec/gvar.htm
 * @see https://developer.apple.com/fonts/TrueType-Reference-Manual/RM06/Chap6gvar.html
 * @param {Array}
 * @return {Array}
 */
encode.VARDELTAS = function (deltas) {
  var pos = 0;
  var result = [];
  while (pos < deltas.length) {
    var value = deltas[pos];
    if (value === 0) {
      pos = encodeVarDeltaRunAsZeroes(deltas, pos, result);
    } else if (value >= -128 && value <= 127) {
      pos = encodeVarDeltaRunAsBytes(deltas, pos, result);
    } else {
      pos = encodeVarDeltaRunAsWords(deltas, pos, result);
    }
  }
  return result;
};
encode.INDEX = __WEBPACK_IMPORTED_MODULE_0_memoize_immutable___default()(function (l) {
  var i;
  // var offset, offsets, offsetEncoder, encodedOffsets, encodedOffset, data,
  //    i, v;
  // Because we have to know which data type to use to encode the offsets,
  // we have to go through the values twice: once to encode the data and
  // calculate the offets, then again to encode the offsets using the fitting data type.
  var offset = 1; // First offset is always 1.
  var offsets = [offset];
  var data = [];
  for (i = 0; i < l.length; i++) {
    var v = encode.OBJECT(l[i]);
    data.push.apply(data, _toConsumableArray(v));
    offset += v.length;
    offsets.push(offset);
  }
  if (data.length === 0) {
    return [0, 0];
  }
  var encodedOffsets = [];
  var offSize = 1 + Math.floor(Math.log(offset) / Math.log(2)) / 8 | 0;
  var offsetEncoder = [undefined, encode.BYTE, encode.USHORT, encode.UINT24, encode.ULONG][offSize];
  for (i = 0; i < offsets.length; i += 1) {
    var encodedOffset = offsetEncoder(offsets[i]);
    encodedOffsets.push.apply(encodedOffsets, _toConsumableArray(encodedOffset));
  }
  return Array.prototype.concat(encode.Card16(l.length), encode.OffSize(offSize), encodedOffsets, data);
});
sizeOf.INDEX = function (v) {
  return encode.INDEX(v).length;
};
print.INDEX = function (l) {
  var i;
  // var offset, offsets, offsetEncoder, encodedOffsets, encodedOffset, data,
  //    i, v;
  // Because we have to know which data type to use to encode the offsets,
  // we have to go through the values twice: once to encode the data and
  // calculate the offets, then again to encode the offsets using the fitting data type.
  var offset = 1; // First offset is always 1.
  var offsets = [offset];
  var data = [];
  for (i = 0; i < l.length; i++) {
    var v = encode.OBJECT(l[i]);
    data.push.apply(data, _toConsumableArray(v));
    offset += v.length;
    offsets.push(offset);
  }
  if (data.length === 0) {
    return [0, 0];
  }
  var encodedOffsets = [];
  var offSize = 1 + Math.floor(Math.log(offset) / Math.log(2)) / 8 | 0;
  var offsetEncoder = [undefined, encode.BYTE, encode.USHORT, encode.UINT24, encode.ULONG][offSize];
  for (i = 0; i < offsets.length; i += 1) {
    var encodedOffset = offsetEncoder(offsets[i]);
    encodedOffsets.push.apply(encodedOffsets, _toConsumableArray(encodedOffset));
  }
  console.log('Index');
  console.log("".concat(encode.Card16(l.length), "\tindex\tlength"));
  console.log("".concat(encode.OffSize(offSize), "\toffSize"));
  encodedOffsets.forEach(function (off) {
    console.log(off);
  });
  for (i = 0; i < l.length; i++) {
    console.log("".concat(data[i], "\t").concat(l.type, "\t").concat(l.name));
  }
};
encode.DICT = function (m) {
  var d = [];
  var keys = Object.keys(m);
  var length = keys.length;
  for (var i = 0; i < length; i++) {
    // Object.keys() return string keys, but our keys are always numeric.
    var k = parseInt(keys[i], 0);
    var v = m[k];

    // Value comes before the key.
    d = d.concat(encode.OPERAND(v.value, v.type));
    d = d.concat(encode.OPERATOR(k));
  }
  return d;
};
sizeOf.DICT = function (m) {
  return encode.DICT(m).length;
};
print.DICT = function (m) {
  console.log('Dict');
  var keys = Object.keys(m);
  var length = keys.length;
  for (var i = 0; i < length; i++) {
    // Object.keys() return string keys, but our keys are always numeric.
    var k = parseInt(keys[i], 0);
    var v = m[k];

    // Value comes before the key.
    console.log("".concat(encode.OPERAND(v.value, v.type)).concat(encode.OPERATOR(k), "\t").concat(v.type, "\t").concat(v.name));
  }
};

/**
 * @param {number}
 * @returns {Array}
 */
encode.OPERATOR = function (v) {
  if (v < 1200) {
    return [v];
  }
  return [12, v - 1200];
};
encode.OPERAND = function (v, type) {
  var d = [];
  if (Array.isArray(type)) {
    for (var i = 0; i < type.length; i++) {
      Object(__WEBPACK_IMPORTED_MODULE_2__check__["a" /* checkArgument */])(v.length === type.length, "Not enough arguments given for type ".concat(type));
      d = d.concat(encode.OPERAND(v[i], type[i]));
    }
  } else if (type === 'SID') {
    d = d.concat(encode.NUMBER(v));
  } else if (type === 'offset') {
    // We make it easy for ourselves and always encode offsets as
    // 4 bytes. This makes offset calculation for the top dict easier.
    d = d.concat(encode.NUMBER32(v));
  } else if (type === 'number') {
    d = d.concat(encode.NUMBER(v));
  } else if (type === 'real') {
    d = d.concat(encode.REAL(v));
  } else {
    throw new Error("Unknown operand type ".concat(type));
    // FIXME Add support for booleans
  }
  return d;
};
encode.OP = encode.BYTE;
sizeOf.OP = sizeOf.BYTE;
var charStringCache = typeof WeakMap === 'function' && new WeakMap();
encode.CHARSTRING = __WEBPACK_IMPORTED_MODULE_0_memoize_immutable___default()(function (ops) {
  // See encode.MACSTRING for why we don't do "if (wmm && wmm.has(ops))".
  if (charStringCache) {
    var cachedValue = charStringCache.get(ops);
    if (cachedValue !== undefined) {
      return cachedValue;
    }
  }
  var d = [];
  var length = ops.length;
  for (var i = 0; i < length; i++) {
    var op = ops[i];
    d = d.concat(encode[op.type](op.value));
  }
  if (charStringCache) {
    charStringCache.set(ops, d);
  }
  return d;
});
sizeOf.CHARSTRING = function (ops) {
  return encode.CHARSTRING(ops).length;
};
encode.OBJECT = function (v) {
  var encodingFunction = encode[v.type];
  Object(__WEBPACK_IMPORTED_MODULE_2__check__["a" /* checkArgument */])(encodingFunction !== undefined, "No encoding function for type ".concat(v.type));
  return encodingFunction(v.value);
};
sizeOf.OBJECT = function (v) {
  var sizeOfFunction = sizeOf[v.type];
  Object(__WEBPACK_IMPORTED_MODULE_2__check__["a" /* checkArgument */])(sizeOfFunction !== undefined, "No sizeOf function for type ".concat(v.type));
  return sizeOfFunction(v.value);
};
print.OBJECT = function (v) {
  var printFunction = print[v.type];
  Object(__WEBPACK_IMPORTED_MODULE_2__check__["a" /* checkArgument */])(printFunction !== undefined, "No print function for type ".concat(v.type));
  printFunction(v.value);
};
encode.TABLE = function (table) {
  var d = [];
  var length = table.fields.length;
  var subtables = [];
  var subtableOffsets = [];
  for (var i = 0; i < length; i++) {
    var field = table.fields[i];
    var encodingFunction = encode[field.type];
    var value = table[field.name];
    Object(__WEBPACK_IMPORTED_MODULE_2__check__["a" /* checkArgument */])(encodingFunction !== undefined, "No encoding function for field type ".concat(field.type, " (").concat(field.name, ")"));
    if (value === undefined) {
      value = field.value;
    }
    var bytes = encodingFunction(value);
    if (field.type === 'TABLE') {
      subtableOffsets.push(d.length);
      d = d.concat([0, 0]);
      subtables.push(bytes);
    } else {
      d = d.concat(bytes);
    }
  }
  for (var _i = 0; _i < subtables.length; _i++) {
    var o = subtableOffsets[_i];
    var offset = d.length;
    Object(__WEBPACK_IMPORTED_MODULE_2__check__["a" /* checkArgument */])(offset < 65536, "Table ".concat(table.tableNamk, " too big."));
    d[o] = offset >> 8;
    d[o + 1] = offset & 0xff;
    d = d.concat(subtables[_i]);
  }
  return d;
};
sizeOf.TABLE = function (table) {
  var numBytes = 0;
  var length = table.fields.length;
  for (var i = 0; i < length; i++) {
    var field = table.fields[i];
    var sizeOfFunction = sizeOf[field.type];
    var value = table[field.name];
    Object(__WEBPACK_IMPORTED_MODULE_2__check__["a" /* checkArgument */])(sizeOfFunction !== undefined, "No sizeOf function for field type ".concat(field.type, " (").concat(field.name, ")"));
    if (value === undefined) {
      value = field.value;
    }
    numBytes += sizeOfFunction(value);

    // Subtables take 2 more bytes for offsets.
    if (field.type === 'TABLE') {
      numBytes += 2;
    }
  }
  return numBytes;
};
encode.RECORD = encode.TABLE;
sizeOf.RECORD = sizeOf.TABLE;
encode.LITERAL = function (v) {
  return v;
};
sizeOf.LITERAL = function (v) {
  return v.length;
};
encode.ARRAY = function (array) {
  var result = [];
  if (array.length > 0) {
    var type = array[0].type;
    for (var i = 0; i < length; i++) {
      var item = array[i];
      Object(__WEBPACK_IMPORTED_MODULE_2__check__["a" /* checkArgument */])(type === item.type, "Item must be of type ".concat(type, " but is of type ").concat(item.type));
      var encodingFunction = encode[item.type || 'TABLE'];
      Object(__WEBPACK_IMPORTED_MODULE_2__check__["a" /* checkArgument */])(encodingFunction !== undefined, "No encoding function for field type ".concat(item.type, " (").concat(item.name, ")"));
      result.push(encodingFunction(item));
    }
  }
  return result;
};
sizeOf.ARRAY = function (array) {
  if (array.length > 0) {
    var sizeOfFunction = sizeOf[array[0].type || 'TABLE'];

    // we can use a trick like this because items in an array should always
    // have the same size (even if they are records)
    return array.length * sizeOfFunction(array[0]);
  }
  return 0;
};
['BYTE', 'CHAR', 'CHARARRAY', 'USHORT', 'SHORT', 'UINT16', 'Offset16', 'UINT24', 'ULONG', 'LONG', 'FIXED', 'FWORD', 'UFWORD', 'LONGDATETIME', 'TAG', 'Card8', 'Card16', 'OffSize', 'SID', 'NUMBER', 'NUMBER16', 'NUMBER32', 'REAL', 'NAME', 'STRING', 'UTF16', 'MACSTRING', 'OPERATOR', 'OPERAND'].forEach(function (name) {
  print[name] = function (v) {
    console.log("".concat(encode[name](v).join(''), "\t").concat(v.type, "\t").concat(v.name));
  };
});
/* eslint-enable babel/new-cap */
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(LIMIT16, "LIMIT16", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(LIMIT32, "LIMIT32", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(constant, "constant", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(encode, "encode", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(sizeOf, "sizeOf", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(print, "print", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(eightBitMacEncodings, "eightBitMacEncodings", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(macEncodingTableCache, "macEncodingTableCache", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(macEncodingCacheKeys, "macEncodingCacheKeys", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(getMacEncodingTable, "getMacEncodingTable", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(isByteEncodable, "isByteEncodable", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(encodeVarDeltaRunAsZeroes, "encodeVarDeltaRunAsZeroes", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(encodeVarDeltaRunAsBytes, "encodeVarDeltaRunAsBytes", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(encodeVarDeltaRunAsWords, "encodeVarDeltaRunAsWords", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(charStringCache, "charStringCache", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(_toConsumableArray, "_toConsumableArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(_nonIterableSpread, "_nonIterableSpread", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(_unsupportedIterableToArray, "_unsupportedIterableToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(_iterableToArray, "_iterableToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(_arrayWithoutHoles, "_arrayWithoutHoles", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(_arrayLikeToArray, "_arrayLikeToArray", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(__signature__, "__signature__", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(LIMIT16, "LIMIT16", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(LIMIT32, "LIMIT32", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(constant, "constant", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(encode, "encode", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(sizeOf, "sizeOf", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(print, "print", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(eightBitMacEncodings, "eightBitMacEncodings", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(macEncodingTableCache, "macEncodingTableCache", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(macEncodingCacheKeys, "macEncodingCacheKeys", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(getMacEncodingTable, "getMacEncodingTable", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(isByteEncodable, "isByteEncodable", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(encodeVarDeltaRunAsZeroes, "encodeVarDeltaRunAsZeroes", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(encodeVarDeltaRunAsBytes, "encodeVarDeltaRunAsBytes", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(encodeVarDeltaRunAsWords, "encodeVarDeltaRunAsWords", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
  reactHotLoader.register(charStringCache, "charStringCache", "/Users/evgeniivarlygin/prototypo-master/app/scripts/opentype/encode.js");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ 0)(module)))

/***/ })
/******/ ]);
//# sourceMappingURL=eea7b2b8f6b44661a161.worker.js.map