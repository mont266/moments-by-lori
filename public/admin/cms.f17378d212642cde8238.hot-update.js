webpackHotUpdate("cms",{

/***/ "./src/components/Gallery.js":
/*!***********************************!*\
  !*** ./src/components/Gallery.js ***!
  \***********************************/
/*! exports provided: query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gallery; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_photoswipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-photoswipe */ "./node_modules/react-photoswipe/lib/index.js");
/* harmony import */ var react_photoswipe__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_photoswipe__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Image */ "./src/components/Image.js");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Grid */ "./src/components/Grid/index.js");
/* harmony import */ var _components_Columns_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Columns/styled */ "./src/components/Columns/styled.js");
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/kebabCase */ "./node_modules/lodash/kebabCase.js");
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabCase__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Gallery_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Gallery.css */ "./src/components/Gallery.css");
/* harmony import */ var _Gallery_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Gallery_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_photoswipe_lib_photoswipe_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-photoswipe/lib/photoswipe.css */ "./node_modules/react-photoswipe/lib/photoswipe.css");
/* harmony import */ var react_photoswipe_lib_photoswipe_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_photoswipe_lib_photoswipe_css__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\Jukez\\Desktop\\moments-by-lori\\src\\components\\Gallery.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};










var query = "2372873876";

var Gallery = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Gallery, _Component);

  function Gallery() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      loaded: false,
      isOpen: false,
      sliderImages: [],
      index: 0
    };

    _this.handleKeyDown = function (ev) {
      if (ev.keyCode === 13 && !_this.state.isOpen) {
        // enter to open
        _this.isOpen(true, _this.state.index);
      }
    };

    _this.getImageInfo = function (img, index) {
      return fetch(img.image + '-/json/').then(function (res) {
        return res.json();
      }).then(function (result) {
        var newImagesArr = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.sliderImages);

        newImagesArr[index] = {
          src: img.image,
          title: img.title,
          w: result.width,
          h: result.height
        };

        _this.setState({
          sliderImages: newImagesArr
        });

        return true;
      }, function (error) {
        console.log(error);
        return false;
      });
    };

    return _this;
  }

  var _proto = Gallery.prototype;

  _proto.isOpen = function isOpen(_isOpen, index) {
    if (typeof index === 'undefined') index = 0;
    this.setState({
      isOpen: _isOpen,
      index: index
    });
  };

  _proto.componentDidMount = function componentDidMount() {
    var images = this.props.images,
        maxCount = images.length;
    var loopCount = 1;

    for (var i in images) {
      if (this.getImageInfo(images[i], i)) {
        this.setState({
          loaded: loopCount === maxCount
        });
        loopCount++;
      }
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var images = this.props.images;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }
    }, images && images.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Columns_styled__WEBPACK_IMPORTED_MODULE_7__["ImageColumn"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 31
      }
    }, images.map(function (image, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Columns_styled__WEBPACK_IMPORTED_MODULE_7__["PostItemWrapper"], {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "Gallery--Item",
        key: lodash_kebabCase__WEBPACK_IMPORTED_MODULE_8___default()(image.alt) + '-' + index,
        onClick: function onClick() {
          return _this2.isOpen(true, index);
        },
        onKeyDown: _this2.handleKeyDown,
        tabIndex: 0,
        "aria-label": "Toggle Gallery",
        role: "button",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_5__["default"], {
        resolutions: "small",
        src: image.image,
        alt: image.alt,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 25
        }
      })), image.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figcaption", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 39
        }
      }, image.title)));
    })))), this.state.loaded && this.state.sliderImages.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_photoswipe__WEBPACK_IMPORTED_MODULE_4__["PhotoSwipe"], {
      isOpen: this.state.isOpen,
      items: this.state.sliderImages,
      options: {
        index: this.state.index,
        history: false
      },
      onClose: function onClose() {
        return _this2.isOpen(false);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 11
      }
    }));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Gallery;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);


Gallery.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(query, "query", "C:\\Users\\Jukez\\Desktop\\moments-by-lori\\src\\components\\Gallery.js");
  reactHotLoader.register(Gallery, "Gallery", "C:\\Users\\Jukez\\Desktop\\moments-by-lori\\src\\components\\Gallery.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Grid/index.js":
/*!**************************************!*\
  !*** ./src/components/Grid/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/components/Grid/styled.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Jukez\\Desktop\\moments-by-lori\\src\\components\\Grid\\index.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var Grid = function Grid(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["GridContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 32
    }
  }, children);
};

var _default = Grid;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Grid, "Grid", "C:\\Users\\Jukez\\Desktop\\moments-by-lori\\src\\components\\Grid\\index.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Jukez\\Desktop\\moments-by-lori\\src\\components\\Grid\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Grid/styled.js":
/*!***************************************!*\
  !*** ./src/components/Grid/styled.js ***!
  \***************************************/
/*! exports provided: GridContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridContainer", function() { return GridContainer; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-media-query */ "./node_modules/styled-media-query/dist/styled-media-query.es.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    line-height: 1.1;\n    font-size: 3rem;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    width: 100%;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    line-height: 1.1;\n    font-size: 3rem;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    width: 100%;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    line-height: 1.1;\n    font-size: 2.4rem;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    width: 100%;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    line-height: 1.1;\n    font-size: 2rem;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    width: 100%;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    line-height: 1.1;\n    font-size: 2rem;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    width: 100%;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 100%;\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var customMedia = Object(styled_media_query__WEBPACK_IMPORTED_MODULE_3__["generateMedia"])({
  mobile: '46em'
});
var GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), customMedia.lessThan('mobile')(_templateObject2()), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].greaterThan('small')(_templateObject3()), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].greaterThan('medium')(_templateObject4()), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].greaterThan('large')(_templateObject5()), styled_media_query__WEBPACK_IMPORTED_MODULE_3__["default"].greaterThan('huge')(_templateObject6()));
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(customMedia, "customMedia", "C:\\Users\\Jukez\\Desktop\\moments-by-lori\\src\\components\\Grid\\styled.js");
  reactHotLoader.register(GridContainer, "GridContainer", "C:\\Users\\Jukez\\Desktop\\moments-by-lori\\src\\components\\Grid\\styled.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.f17378d212642cde8238.hot-update.js.map