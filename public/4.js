webpackJsonp([4],{

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(75)
/* template */
var __vue_template__ = __webpack_require__(76)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources\\assets\\js\\components\\createArticle.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-43cdc593", Component.options)
  } else {
    hotAPI.reload("data-v-43cdc593", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 75:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        title: '',
        content: '',
        user_id: ''
      },
      user: {
        created_at: '',
        email: "",
        id: '',
        name: "",
        updated_at: ""
      }
    };
  },
  mounted: function mounted() {
    this.getUser();
  },

  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      this.$ajax({
        method: 'post',
        url: 'article',
        data: {
          title: this.form.title,
          content: this.form.content,
          user_id: this.user.id
        }
      }).then(function (response) {
        console.log("发布成功");
        _this.$router.push({ path: '/' });
      });
    },
    getUser: function getUser() {
      var _this2 = this;

      this.$ajax({
        method: 'get',
        url: 'user'
      }).then(function (response) {
        _this2.user = response.data;
        console.log(_this2.user);
      });
    }
  }
});

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h1", [_vm._v("发布文章")]),
      _vm._v(" "),
      _c(
        "el-form",
        { ref: "form", attrs: { model: _vm.form, "label-width": "80px" } },
        [
          _c(
            "el-form-item",
            { attrs: { label: "标题" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.form.title,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "title", $$v)
                  },
                  expression: "form.title"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "内容" } },
            [
              _c("el-input", {
                attrs: { type: "textarea" },
                model: {
                  value: _vm.form.content,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "content", $$v)
                  },
                  expression: "form.content"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.onSubmit } },
                [_vm._v("立即发布")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.$router.history.go(-1)
                    }
                  }
                },
                [_vm._v("取消")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-43cdc593", module.exports)
  }
}

/***/ })

});