"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_homePage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/home/cal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/home/cal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      boxs: [{
        name: "100",
        number: 0,
        price: "1.68"
      }, {
        name: "101",
        number: 0,
        price: "1.68"
      }, {
        name: "102",
        number: 0,
        price: "1.55"
      }, {
        name: "103",
        number: 0,
        price: "1.45"
      }, {
        name: "107",
        number: 0,
        price: "1.55"
      }, {
        name: "108",
        number: 0,
        price: "2.1"
      }, {
        name: "109",
        number: 0,
        price: "2.1"
      }, {
        name: "110",
        number: 0,
        price: "1.58"
      }, {
        name: "111",
        number: 0,
        price: "1.55"
      }, {
        name: "112",
        number: 0,
        price: "2.1"
      }, {
        name: "113",
        number: 0,
        price: "2.1"
      }, {
        name: "114",
        number: 0,
        price: "1.2"
      }, {
        name: "116",
        number: 0,
        price: "1.2"
      }, {
        name: "118",
        number: 0,
        price: "1.68"
      }, {
        name: "119",
        number: 0,
        price: "1.55"
      }, {
        name: "120",
        number: 0,
        price: "0.32"
      }, {
        name: "121",
        number: 0,
        price: "0.32"
      }, {
        name: "122",
        number: 0,
        price: "0.32"
      }, {
        name: "123",
        number: 0,
        price: "0.35"
      }, {
        name: "124",
        number: 0,
        price: "0.42"
      }, {
        name: "125",
        number: 0,
        price: "0.42"
      }, {
        name: "126",
        number: 0,
        price: "0.42"
      }, {
        name: "128",
        number: 0,
        price: "0.5"
      }, {
        name: "130",
        number: 0,
        price: "0.6"
      }, {
        name: "160",
        number: 0,
        price: "1.12"
      }, {
        name: "162",
        number: 0,
        price: "1.4"
      }, {
        name: "164",
        number: 0,
        price: "0.2"
      }, {
        name: "165",
        number: 0,
        price: "1.4"
      }, {
        name: "167",
        number: 0,
        price: "0.2"
      }, {
        name: "170",
        number: 0,
        price: "1.45"
      }, {
        name: "171",
        number: 0,
        price: "1.45"
      }, {
        name: "172",
        number: 0,
        price: "2.5"
      }, {
        name: "200",
        number: 0,
        price: "2"
      }, {
        name: "0",
        number: 0,
        price: "1.68"
      }]
    };
  },
  computed: {
    total: function total() {
      var total = 0;

      for (var i = 0; i < this.boxs.length; i++) {
        total = this.boxs[i].number * this.boxs[i].price + total;
      }

      return total;
    },
    sum: function sum() {
      var sum = 0;

      for (var i = 0; i < this.boxs.length; i++) {
        sum = this.boxs[i].number + sum;
      }

      return sum;
    }
  },
  filters: {
    fixFilter: function fixFilter(string) {
      return string.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/homePage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/homePage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_cal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/cal.vue */ "./resources/js/components/home/cal.vue");
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    cal: _home_cal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      message: 'Hello World'
    };
  }
});

/***/ }),

/***/ "./resources/js/components/home/cal.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/home/cal.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cal_vue_vue_type_template_id_74fd8ce9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cal.vue?vue&type=template&id=74fd8ce9& */ "./resources/js/components/home/cal.vue?vue&type=template&id=74fd8ce9&");
/* harmony import */ var _cal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cal.vue?vue&type=script&lang=js& */ "./resources/js/components/home/cal.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _cal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cal_vue_vue_type_template_id_74fd8ce9___WEBPACK_IMPORTED_MODULE_0__.render,
  _cal_vue_vue_type_template_id_74fd8ce9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/home/cal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/homePage.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/pages/homePage.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _homePage_vue_vue_type_template_id_27ac3c84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage.vue?vue&type=template&id=27ac3c84& */ "./resources/js/components/pages/homePage.vue?vue&type=template&id=27ac3c84&");
/* harmony import */ var _homePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/homePage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _homePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _homePage_vue_vue_type_template_id_27ac3c84___WEBPACK_IMPORTED_MODULE_0__.render,
  _homePage_vue_vue_type_template_id_27ac3c84___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/homePage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/home/cal.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/home/cal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/home/cal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/homePage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/pages/homePage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./homePage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/homePage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/home/cal.vue?vue&type=template&id=74fd8ce9&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/home/cal.vue?vue&type=template&id=74fd8ce9& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cal_vue_vue_type_template_id_74fd8ce9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cal_vue_vue_type_template_id_74fd8ce9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cal_vue_vue_type_template_id_74fd8ce9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cal.vue?vue&type=template&id=74fd8ce9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/home/cal.vue?vue&type=template&id=74fd8ce9&");


/***/ }),

/***/ "./resources/js/components/pages/homePage.vue?vue&type=template&id=27ac3c84&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pages/homePage.vue?vue&type=template&id=27ac3c84& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homePage_vue_vue_type_template_id_27ac3c84___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homePage_vue_vue_type_template_id_27ac3c84___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homePage_vue_vue_type_template_id_27ac3c84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./homePage.vue?vue&type=template&id=27ac3c84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/homePage.vue?vue&type=template&id=27ac3c84&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/home/cal.vue?vue&type=template&id=74fd8ce9&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/home/cal.vue?vue&type=template&id=74fd8ce9& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "trend" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c(
        "div",
        { staticClass: "row" },
        _vm._l(_vm.boxs, function (box, index) {
          return _c("div", { key: index, staticClass: "col-2" }, [
            _c("div", { staticClass: "mb-3" }, [
              _c(
                "label",
                {
                  staticClass: "form-labe bg-whitel mb-2",
                  attrs: { for: box.name },
                },
                [_c("b", [_vm._v("KL " + _vm._s(box.name))])]
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "form-labe bg-whitel mb-1",
                  attrs: { for: box.name },
                },
                [
                  _vm._v(
                    _vm._s(box.price) +
                      " * " +
                      _vm._s(_vm.boxs[index].number) +
                      " = "
                  ),
                  _c("b", [
                    _vm._v(
                      _vm._s(
                        _vm._f("fixFilter")(box.price * _vm.boxs[index].number)
                      ) + " EU"
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model.number",
                    value: _vm.boxs[index].number,
                    expression: "boxs[index].number",
                    modifiers: { number: true },
                  },
                ],
                staticClass: "form-control d-print-none",
                attrs: { type: "number" },
                domProps: { value: _vm.boxs[index].number },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.boxs[index],
                      "number",
                      _vm._n($event.target.value)
                    )
                  },
                  blur: function ($event) {
                    return _vm.$forceUpdate()
                  },
                },
              }),
            ]),
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-6" }, [
          _c("h3", [
            _vm._v("Netto: "),
            _c("b", [
              _vm._v(" " + _vm._s(_vm._f("fixFilter")(_vm.total)) + "  "),
            ]),
            _vm._v("EU"),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-6" }, [
          _c("h3", [
            _c("b", [_vm._v(" " + _vm._s(_vm.sum) + "  ")]),
            _vm._v("Packet"),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("h3", [
        _vm._v("MwSt.19% : "),
        _c("b", [_vm._v(_vm._s(_vm._f("fixFilter")(_vm.total * 0.19)) + "  ")]),
        _vm._v("EU"),
      ]),
      _vm._v(" "),
      _c("h3", [
        _vm._v("Gesamt: "),
        _c("b", [
          _vm._v(
            " " +
              _vm._s(_vm._f("fixFilter")(_vm.total + _vm.total * 0.19)) +
              "  "
          ),
        ]),
        _vm._v("EU"),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/homePage.vue?vue&type=template&id=27ac3c84&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/homePage.vue?vue&type=template&id=27ac3c84& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("cal")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);