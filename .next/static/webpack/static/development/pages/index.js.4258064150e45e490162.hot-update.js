webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/video */ "./components/video.js");
var _jsxFileName = "/Users/michaelwrather/development/headspace-sharing/pages/index.js";




 // class CustomDocument extends Document {
//   mainStyles = {
//     "font-family": 'Apercu',
//     "font-style": "normal",
//     "font-weight": 400,
//     src: "url('https://static.headspace.com/fonts/apercu/apercu_regular.eot')",
//     margin: "0px",
//   }
//   render () {
//     return (<html lang='en-US'>
//       <Head>
//         <meta property="og:image" content="https://images.ctfassets.net/v3n26e09qg2r/11CfrjeTLEc8iYUoC0eM2U/7723fe6ae4e779ad09f857eb338473a7/share.jpg" class="next-head" />
//         <meta property="og:url" content="https://www.headspace.com/" class="next-head"></meta>
//         <meta property="og:title" content="Meditation and Sleep Made Simple - Headspace" class="next-head" />
//         <meta property="og:description" content="Live a healthier, happier, more well-rested life in just a few minutes a day with the Headspace app." class="next-head" />
//         <meta property="og:image:type" content="image/jpeg" />
//         <meta property="og:image:height" content="600" class="next-head" />
//         <meta property="og:image:width" content="1230" class="next-head"></meta>
//         <meta property="og:image:alt" content="A shiny red apple with a bite taken out" />
//       </Head>
//       <body style={this.mainStyles}>
//         <Main />
//         <Video></Video>
//         <NextScript />
//       </body>
//     </html>)
//   }
// }
// export default CustomDocument;

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var mainStyles = {
    "font-family": 'Apercu',
    "font-style": "normal",
    "font-weight": 400,
    src: "url('https://static.headspace.com/fonts/apercu/apercu_regular.eot')",
    margin: "0px"
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    style: mainStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: "https://images.ctfassets.net/v3n26e09qg2r/11CfrjeTLEc8iYUoC0eM2U/7723fe6ae4e779ad09f857eb338473a7/share.jpg",
    "class": "next-head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: "https://www.headspace.com/",
    "class": "next-head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: "Meditation and Sleep Made Simple - Headspace",
    "class": "next-head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: "Live a healthier, happier, more well-rested life in just a few minutes a day with the Headspace app.",
    "class": "next-head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:type",
    content: "image/jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:height",
    content: "600",
    "class": "next-head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:width",
    content: "1230",
    "class": "next-head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:alt",
    content: "A shiny red apple with a bite taken out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "../assets/styles.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_video__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.4258064150e45e490162.hot-update.js.map