webpackJsonp([2],{

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(227)
}
var normalizeComponent = __webpack_require__(79)
/* script */
var __vue_script__ = __webpack_require__(229)
/* template */
var __vue_template__ = __webpack_require__(235)
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
Component.options.__file = "resources\\assets\\js\\components\\article.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3498fe22", Component.options)
  } else {
    hotAPI.reload("data-v-3498fe22", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(228);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(80)("4c37c714", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3498fe22\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./article.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3498fe22\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./article.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addComment__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addComment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__addComment__);
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
            article: {
                data: {}
            },
            user: {},
            showEditBtn: false,
            showDeleteBtn: false
        };
    },

    components: {
        addComment: __WEBPACK_IMPORTED_MODULE_1__addComment___default.a
    },
    mounted: function mounted() {
        this.getArticle();
    },

    methods: {
        getArticle: function getArticle() {
            var _this = this;

            this.$ajax({
                method: 'get',
                url: 'article/' + this.$route.params.id
            }).then(function (response) {
                _this.article = response.data;

                _this.$ajax({
                    method: 'get',
                    url: 'user'
                }).then(function (response) {
                    _this.user = response.data;
                    if (_this.user.id == _this.article.data.user_id) {
                        _this.showEditBtn = true;
                        _this.showDeleteBtn = true;
                    } else {
                        _this.showEditBtn = false;
                        _this.showDeleteBtn = false;
                    }
                });
            });
        },
        deleteArticle: function deleteArticle(id) {
            var _this2 = this;

            this.$ajax({
                method: 'delete',
                // type: 'delete',
                url: 'article/' + id,
                data: {
                    return: {}
                }
            }).then(function (response) {
                console.log('删除成功');
                _this2.$router.push({ path: '/' });
            });
        },
        lay: function lay() {
            this.$layer.alert('sdhsdfghdfgh');
        }
    }
});

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(231)
}
var normalizeComponent = __webpack_require__(79)
/* script */
var __vue_script__ = __webpack_require__(233)
/* template */
var __vue_template__ = __webpack_require__(234)
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
Component.options.__file = "resources\\assets\\js\\components\\addComment.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eb8893d6", Component.options)
  } else {
    hotAPI.reload("data-v-eb8893d6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(232);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(80)("5ed632b2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-eb8893d6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./addComment.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-eb8893d6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./addComment.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, "\n.comment-box{\r\n    margin-bottom: 20px;\n}\n.comment-auth{\r\n    color: #409EFF;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 233:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            comments: {},
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

    props: {
        articleId: { // 数据总条数
            type: Number,
            default: 0
        }
    },
    watch: {
        'articleId': function articleId(newValue, oldV) {
            this.getCommeentsByArticleId(newValue);
        }
    },
    mounted: function mounted() {
        this.getUser();
    },

    methods: {
        onSubmit: function onSubmit() {
            var _this = this;

            this.$ajax({
                method: 'post',
                url: 'comment',
                data: {
                    content: this.form.content,
                    user_id: this.user.id,
                    article_id: this.articleId
                }
            }).then(function (response) {
                console.log("发布成功");
                _this.form = {};
                _this.getCommeentsByArticleId(_this.articleId);
            });
        },
        getUser: function getUser() {
            var _this2 = this;

            this.$ajax({
                method: 'get',
                url: 'user'
            }).then(function (response) {
                _this2.user = response.data;
            });
        },
        getCommeentsByArticleId: function getCommeentsByArticleId(article_id) {
            var _this3 = this;

            this.$ajax({
                method: 'get',
                url: 'comments/' + article_id
            }).then(function (response) {
                _this3.comments = response.data;
            });
        }
    }
});

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h5", [_vm._v("评论")]),
      _vm._v(" "),
      _vm._l(_vm.comments.data, function(comment) {
        return _c("div", { staticClass: "comment-box" }, [
          comment.user
            ? _c("span", { staticClass: "comment-auth" }, [
                _vm._v(_vm._s(comment.user.name) + " ")
              ])
            : _vm._e(),
          _vm._v(" "),
          !comment.user
            ? _c("span", { staticClass: "comment-auth" }, [_vm._v("游客 ")])
            : _vm._e(),
          _vm._v("\n        评论：" + _vm._s(comment.content) + "\n    ")
        ])
      }),
      _vm._v(" "),
      _c(
        "el-form",
        { ref: "form", attrs: { model: _vm.form, "label-width": "80px" } },
        [
          _c(
            "el-form-item",
            { attrs: { label: "发表评论:" } },
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
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-eb8893d6", module.exports)
  }
}

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h1", [_vm._v("article")]),
      _vm._v(" "),
      _c("h5", [_vm._v(_vm._s(_vm.article.data.title))]),
      _vm._v(" "),
      _c("div", [_vm._v(_vm._s(_vm.article.data.content))]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-default",
          attrs: { type: "button", name: "button" },
          on: {
            click: function($event) {
              _vm.$router.history.go(-1)
            }
          }
        },
        [_vm._v("返回")]
      ),
      _vm._v(" "),
      _vm.showEditBtn
        ? _c("router-link", { attrs: { to: "edit/" + _vm.article.data.id } }, [
            _c(
              "button",
              {
                staticClass: "btn btn-default",
                attrs: { type: "button", name: "button" }
              },
              [_vm._v(" 编辑")]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.showDeleteBtn
        ? _c(
            "button",
            {
              staticClass: "btn btn-danger",
              attrs: { type: "button", name: "button" },
              on: {
                click: function($event) {
                  _vm.deleteArticle(_vm.article.data.id)
                }
              }
            },
            [_vm._v("删除")]
          )
        : _vm._e(),
      _vm._v(" "),
      false
        ? _c(
            "button",
            {
              staticClass: "btn btn-danger",
              attrs: { type: "button", name: "button" },
              on: {
                click: function($event) {
                  _vm.lay()
                }
              }
            },
            [_vm._v("测试layer")]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("add-comment", { attrs: { articleId: _vm.article.data.id } })
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
    require("vue-hot-reload-api")      .rerender("data-v-3498fe22", module.exports)
  }
}

/***/ })

});