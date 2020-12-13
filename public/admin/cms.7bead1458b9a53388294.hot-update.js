webpackHotUpdate("cms",{

/***/ "./src/templates/ComponentsPage.js":
/*!*****************************************!*\
  !*** ./src/templates/ComponentsPage.js ***!
  \*****************************************/
/*! exports provided: ComponentsPageTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsPageTemplate", function() { return ComponentsPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PageHeader */ "./src/components/PageHeader.js");
/* harmony import */ var _components_Content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Content.js */ "./src/components/Content.js");
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout.js */ "./src/components/Layout.js");
/* harmony import */ var _components_Accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Accordion */ "./src/components/Accordion.js");
/* harmony import */ var _components_BackgroundVideo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BackgroundVideo */ "./src/components/BackgroundVideo.js");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Grid */ "./src/components/Grid/index.js");
/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Gallery */ "./src/components/Gallery.js");
/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Popup */ "./src/components/Popup.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Jukez\\Desktop\\moments-by-lori\\src\\templates\\ComponentsPage.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};









 // Export Template for use in CMS preview

var ComponentsPageTemplate = function ComponentsPageTemplate(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      featuredImage = _ref.featuredImage,
      body = _ref.body,
      gallery = _ref.gallery;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title,
    subtitle: subtitle,
    backgroundImage: featuredImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Gallery__WEBPACK_IMPORTED_MODULE_7__["default"], {
    images: gallery,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }))));
};

var ComponentsPage = function ComponentsPage(_ref2) {
  var page = _ref2.data.page;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    meta: page.frontmatter.meta || false,
    title: page.frontmatter.title || false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComponentsPageTemplate, Object.assign({}, page, page.frontmatter, {
    body: page.html,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  })));
};

var _default = ComponentsPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "471811793";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ComponentsPageTemplate, "ComponentsPageTemplate", "C:\\Users\\Jukez\\Desktop\\moments-by-lori\\src\\templates\\ComponentsPage.js");
  reactHotLoader.register(ComponentsPage, "ComponentsPage", "C:\\Users\\Jukez\\Desktop\\moments-by-lori\\src\\templates\\ComponentsPage.js");
  reactHotLoader.register(pageQuery, "pageQuery", "C:\\Users\\Jukez\\Desktop\\moments-by-lori\\src\\templates\\ComponentsPage.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Jukez\\Desktop\\moments-by-lori\\src\\templates\\ComponentsPage.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.7bead1458b9a53388294.hot-update.js.map