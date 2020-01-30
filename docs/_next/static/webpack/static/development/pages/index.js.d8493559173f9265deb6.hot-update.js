webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/price.js":
/*!************************!*\
  !*** ./utils/price.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var price = function price(num) {
  var result = Number(num).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  if (result.substring(result.length - 2, result.length) === '00') {
    result = result.substring(0, result.length - 3);
  }

  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (price);

/***/ })

})
//# sourceMappingURL=index.js.d8493559173f9265deb6.hot-update.js.map