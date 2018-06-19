webpackJsonp([3],{

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(251)
}
var normalizeComponent = __webpack_require__(79)
/* script */
var __vue_script__ = __webpack_require__(253)
/* template */
var __vue_template__ = __webpack_require__(254)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\about.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bdd34f74", Component.options)
  } else {
    hotAPI.reload("data-v-bdd34f74", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(252);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(80)("0013fc12", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bdd34f74\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./about.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-bdd34f74\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./about.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, "\n.indent{\r\n    text-indent: 40px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            aboutMsg: ''
        };
    },

    methods: {}
});

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h3", [_vm._v("一个简单的博客")]),
      _vm._v(" "),
      _c("h4", [_vm._v("目前功能：")]),
      _vm._v(" "),
      _c("div", { staticClass: "indent" }, [
        _vm._v("\n        1.登录注册\n    ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "indent" }, [
        _vm._v("\n        2.文章发布、查看、编辑、删除（需要登录）\n    ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "indent" }, [
        _vm._v("\n        3.图片上传\n    ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "indent" }, [
        _vm._v("\n        4.评论（不登录，游客也可发评论）\n    ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "indent" }, [
        _vm._v(
          "\n        5.图片裁剪功能（避免上传超大图片占用空间、避免图片尺寸不合规格而变形影响美观）\n    "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "indent" }, [
        _vm._v("\n        持续迭代……欢迎提需求~ (ง •̀_•́)ง\n    ")
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("使用的技术：")]),
      _vm._v(" "),
      _c("div", { staticClass: "indent" }, [
        _vm._v("Laravel、Vue、Vue-router、axios、element-ui")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-bdd34f74", module.exports)
  }
}

/***/ })

});