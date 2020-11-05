(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/admin-authorization/admin-authorization.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/admin-authorization/admin-authorization.component.ts ***!
      \**********************************************************************/

    /*! exports provided: AdminAuthorizationComponent, AlreadyAuthComponent */

    /***/
    function srcAppAdminAuthorizationAdminAuthorizationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminAuthorizationComponent", function () {
        return AdminAuthorizationComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlreadyAuthComponent", function () {
        return AlreadyAuthComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

      function AdminAuthorizationComponent_mat_card_12_ul_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ato_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Employee id: ", ato_r4.empId, "");
        }
      }

      function AdminAuthorizationComponent_mat_card_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Authorizer Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Authorized To: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AdminAuthorizationComponent_mat_card_12_ul_21_Template, 3, 1, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Employee id: ", ctx_r0.selectedAuthUser.empId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Name: ", ctx_r0.selectedAuthUser.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Deparment: ", ctx_r0.selectedAuthUser.selectedDepartment.viewValue, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Grade: ", ctx_r0.selectedAuthUser.selectedGrade.viewValue, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Project: ", ctx_r0.selectedAuthUser.selectedProject.viewValue, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Authorization: ", ctx_r0.selectedAuthUser.selectedAuthorization, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Creation: ", ctx_r0.selectedAuthUser.selectedCreation, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.selectedAuthUser.authorizedTo);
        }
      }

      function AdminAuthorizationComponent_mat_card_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Employee id: ", ctx_r1.selectedUnAuthUser.empId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Name: ", ctx_r1.selectedUnAuthUser.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Deparment: ", ctx_r1.selectedUnAuthUser.selectedDepartment.viewValue, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Grade: ", ctx_r1.selectedUnAuthUser.selectedGrade.viewValue, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Project: ", ctx_r1.selectedUnAuthUser.selectedProject.viewValue, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Authorization: ", ctx_r1.selectedUnAuthUser.selectedAuthorization, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Creation: ", ctx_r1.selectedUnAuthUser.selectedCreation, " ");
        }
      }

      function AdminAuthorizationComponent_button_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminAuthorizationComponent_button_15_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.addAuthorization(ctx_r5.selectedAuthUser._id, ctx_r5.selectedUnAuthUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Authorization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AdminAuthorizationComponent = /*#__PURE__*/function () {
        function AdminAuthorizationComponent(userService, _snackBar) {
          _classCallCheck(this, AdminAuthorizationComponent);

          this.userService = userService;
          this._snackBar = _snackBar;
        }

        _createClass(AdminAuthorizationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // onSelectUnAuth(unAuthUser: User): void {
          //   this.selectedUnAuthUser = unAuthUser;
          // }
          // authUsers: User[];
          // unAuthUsers: User[];
          // getAuthUsers(selectedAuthorization: boolean) {
          //   this.userService.getAuthUsers(selectedAuthorization)
          //     .subscribe(authUsers => this.authUsers = authUsers);
          // }
          // getUnAuthUsers(selectedAuthorization: boolean) {
          //   this.userService.getAuthUsers(selectedAuthorization)
          //     .subscribe(unAuthUsers => this.unAuthUsers = unAuthUsers)
          // }

        }, {
          key: "addAuthorization",
          value: function addAuthorization(authId, uId) {
            var _this = this;

            console.log(this.selectedAuthUser.authorizedTo);
            var iterator = this.selectedAuthUser.authorizedTo[Symbol.iterator]();

            var _iterator = _createForOfIteratorHelper(iterator),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var authorizedToo = _step.value;

                if (authorizedToo.empId === uId.empId) {
                  this._snackBar.openFromComponent(AlreadyAuthComponent, {
                    duration: 3 * 1000
                  }); // alert("You have already added authorization for this user")


                  return;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.userService.addAuthorization(authId, uId).subscribe(function (authUser) {
              // this.location.reload()
              console.log(authUser);
              _this.selectedAuthUser = authUser;
            });
          }
        }]);

        return AdminAuthorizationComponent;
      }();

      AdminAuthorizationComponent.ɵfac = function AdminAuthorizationComponent_Factory(t) {
        return new (t || AdminAuthorizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]));
      };

      AdminAuthorizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminAuthorizationComponent,
        selectors: [["app-admin-authorization"]],
        decls: 16,
        vars: 7,
        consts: [[1, "parent", "flex-parent"], [1, "child", "flex-child"], [1, "search-bar", "left-search", 3, "selectedAuth", "selectedProject"], [1, "search-bar", "right-search", 3, "selectedAuth", "selectedProject"], [1, "row-card"], ["class", "user-card", 4, "ngIf"], [1, "row-button"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click", 4, "ngIf"], [1, "user-card"], [1, "header"], [1, "row"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click"]],
        template: function AdminAuthorizationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Authorization");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Authorizer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-employee-search", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "User");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-employee-search", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdminAuthorizationComponent_mat_card_12_Template, 22, 8, "mat-card", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminAuthorizationComponent_mat_card_13_Template, 19, 7, "mat-card", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminAuthorizationComponent_button_15_Template, 2, 0, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedAuth", true)("selectedProject", ctx.userService.loggedIn.selectedProject._id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedAuth", false)("selectedProject", ctx.userService.loggedIn.selectedProject._id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedAuthUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedUnAuthUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedAuthUser && ctx.selectedUnAuthUser);
          }
        },
        styles: [".authUser-card[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.user-card[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.search-bar[_ngcontent-%COMP%] {\r\n  margin: 2rem;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  margin-left: 2rem;\r\n  margin-top: 2rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{\r\n  margin: 1%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n\r\nli[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n\r\nmat-label[_ngcontent-%COMP%] {\r\n  color: rgba(0, 0, 0, 0.54);\r\n}\r\n\r\n.example-container[_ngcontent-%COMP%] {\r\n  \r\n  max-height: 500px;\r\n  min-width: 300px;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.row-button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.row-card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tYXV0aG9yaXphdGlvbi9hZG1pbi1hdXRob3JpemF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7O0FBRUg7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTs7Ozs7R0FLRzs7QUFFSDs7O0dBR0c7O0FBRUg7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFDQTs7OztHQUlHOztBQUNGO0VBQ0MsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFDQztFQUNDLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0U7MkJBQ3lCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtBQUNyQjs7QUFDQTs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWF1dGhvcml6YXRpb24vYWRtaW4tYXV0aG9yaXphdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogOmhvc3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn0gKi9cclxuXHJcbi5hdXRoVXNlci1jYXJkIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4udXNlci1jYXJkIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4uc2VhcmNoLWJhciB7XHJcbiAgbWFyZ2luOiAycmVtO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLyogLmZsZXgtcGFyZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5mbGV4LWNoaWxkIHtcclxuICBmbGV4OiAxO1xyXG59ICovXHJcblxyXG4vKiAubGVmdC1zZWFyY2gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59ICovXHJcblxyXG5oMSwgaDJ7XHJcbiAgbWFyZ2luOiAxJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi8qIG1hdC1ncmlkLWxpc3R7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIGJvcmRlcjogc29saWQgIzNmNTFiNTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59ICovXHJcbiBsaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgbWFyZ2luOiAuNWVtO1xyXG4gIHBhZGRpbmc6IC4zZW0gMDtcclxuICBoZWlnaHQ6IDEuNmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4gbGk6aG92ZXIge1xyXG4gIGNvbG9yOiAjNjA3RDhCO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XHJcbiAgbGVmdDogLjFlbTtcclxufVxyXG5tYXQtbGFiZWwge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xyXG59XHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgLyogZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbi5yb3ctYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbi5yb3ctY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG4vKiBtYXQtY2FyZC1jb250ZW50IHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59ICovXHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminAuthorizationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-admin-authorization',
            templateUrl: './admin-authorization.component.html',
            styleUrls: ['./admin-authorization.component.css']
          }]
        }], function () {
          return [{
            type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
          }];
        }, null);
      })();

      var AlreadyAuthComponent = function AlreadyAuthComponent() {
        _classCallCheck(this, AlreadyAuthComponent);
      };

      AlreadyAuthComponent.ɵfac = function AlreadyAuthComponent_Factory(t) {
        return new (t || AlreadyAuthComponent)();
      };

      AlreadyAuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AlreadyAuthComponent,
        selectors: [["snack-bar-component-snack"]],
        decls: 2,
        vars: 0,
        consts: [[1, "already-auth"]],
        template: function AlreadyAuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The Authorizer has already been authorized for this user!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".already-auth[_ngcontent-%COMP%] {\n      color: hotpink;\n    }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlreadyAuthComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'snack-bar-component-snack',
            templateUrl: 'snack-bar-component-snack.html',
            styles: ["\n    .already-auth {\n      color: hotpink;\n    }\n  "]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/admin-data-control/admin-data-control.component.ts":
    /*!********************************************************************!*\
      !*** ./src/app/admin-data-control/admin-data-control.component.ts ***!
      \********************************************************************/

    /*! exports provided: AdminDataControlComponent */

    /***/
    function srcAppAdminDataControlAdminDataControlComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminDataControlComponent", function () {
        return AdminDataControlComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/radio */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      function AdminDataControlComponent_mat_radio_button_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var field_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", field_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r6, " ");
        }
      }

      function AdminDataControlComponent_form_8_mat_card_1_mat_form_field_5_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r14._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r14.viewValue, " ");
        }
      }

      function AdminDataControlComponent_form_8_mat_card_1_mat_form_field_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AdminDataControlComponent_form_8_mat_card_1_mat_form_field_5_Template_mat_select_valueChange_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r15.gateFunc(_r12.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdminDataControlComponent_form_8_mat_card_1_mat_form_field_5_mat_option_5_Template, 2, 2, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.items2);
        }
      }

      function AdminDataControlComponent_form_8_mat_card_1_mat_option_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r17._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r17.viewValue, " ");
        }
      }

      function AdminDataControlComponent_form_8_mat_card_1_mat_form_field_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdminDataControlComponent_form_8_mat_card_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdminDataControlComponent_form_8_mat_card_1_mat_form_field_5_Template, 6, 1, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AdminDataControlComponent_form_8_mat_card_1_Template_mat_select_valueChange_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18.toleranceUpdate(_r9.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdminDataControlComponent_form_8_mat_card_1_mat_option_11_Template, 2, 2, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdminDataControlComponent_form_8_mat_card_1_mat_form_field_14_Template, 4, 0, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-actions", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Edit Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.selectedField === ctx_r7.fields[3]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.selectedField);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.selectedField === ctx_r7.fields[4]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r7.editForm.valid);
        }
      }

      function AdminDataControlComponent_form_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminDataControlComponent_form_8_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.onSubmit(ctx_r20.editForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminDataControlComponent_form_8_mat_card_1_Template, 18, 5, "mat-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.editForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedField);
        }
      }

      function AdminDataControlComponent_mat_radio_button_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var field_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", field_r22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r22, " ");
        }
      }

      function AdminDataControlComponent_form_15_mat_card_1_mat_form_field_5_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r27._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r27.viewValue, " ");
        }
      }

      function AdminDataControlComponent_form_15_mat_card_1_mat_form_field_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminDataControlComponent_form_15_mat_card_1_mat_form_field_5_mat_option_4_Template, 2, 2, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.itemsAdd);
        }
      }

      function AdminDataControlComponent_form_15_mat_card_1_mat_form_field_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdminDataControlComponent_form_15_mat_card_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdminDataControlComponent_form_15_mat_card_1_mat_form_field_5_Template, 5, 1, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminDataControlComponent_form_15_mat_card_1_mat_form_field_8_Template, 4, 0, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.selectedField2 === ctx_r23.fields[3]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.selectedField2 === ctx_r23.fields[4]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r23.addForm.valid);
        }
      }

      function AdminDataControlComponent_form_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminDataControlComponent_form_15_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.onSubmit2(ctx_r28.addForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminDataControlComponent_form_15_mat_card_1_Template, 12, 3, "mat-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.addForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.selectedField2);
        }
      }

      function AdminDataControlComponent_mat_radio_button_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var field_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", field_r30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r30, " ");
        }
      }

      function AdminDataControlComponent_form_22_mat_card_1_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r33._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r33.viewValue, " ");
        }
      }

      function AdminDataControlComponent_form_22_mat_card_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdminDataControlComponent_form_22_mat_card_1_mat_option_9_Template, 2, 2, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-actions", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Delete Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r31.selectedField3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r31.itemsDelete);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r31.deleteForm.valid);
        }
      }

      function AdminDataControlComponent_form_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminDataControlComponent_form_22_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.onSubmit3(ctx_r34.deleteForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminDataControlComponent_form_22_mat_card_1_Template, 13, 3, "mat-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r5.deleteForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.selectedField3);
        }
      } // import { Project } from '../project';
      // import { Grade } from '../grade';
      // import { Department } from '../department';


      var AdminDataControlComponent = /*#__PURE__*/function () {
        function AdminDataControlComponent(fb, userService, router) {
          _classCallCheck(this, AdminDataControlComponent);

          this.fb = fb;
          this.userService = userService;
          this.router = router;
          this.fields = ['Departments', 'Grades', 'Projects', 'Gates', 'Units']; // this.editForm = this.fb.group({
          //   selectedItem: new FormControl('', Validators.required),
          //   update: new FormControl('', Validators.required),
          // });
          // this.addForm = this.fb.group({
          //   viewValue: new FormControl('', Validators.required),
          // });

          this.deleteForm = this.fb.group({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }

        _createClass(AdminDataControlComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onChange",
          value: function onChange() {
            var _this2 = this;

            if (this.selectedField == this.fields[0]) {
              this.editForm = this.fb.group({
                selectedItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                update: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
              });
              this.userService.getDepartments().subscribe(function (departments) {
                return _this2.items = departments;
              });
            } else if (this.selectedField == this.fields[1]) {
              this.editForm = this.fb.group({
                selectedItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                update: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
              });
              this.userService.getGrades().subscribe(function (grades) {
                return _this2.items = grades;
              });
            } else if (this.selectedField == this.fields[2]) {
              this.editForm = this.fb.group({
                selectedItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                update: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
              });
              this.userService.getProjects().subscribe(function (projects) {
                return _this2.items = projects;
              });
            } else if (this.selectedField == this.fields[3]) {
              this.editForm = this.fb.group({
                selectedItem2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                selectedItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                update: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
              });
              this.userService.getProjects().subscribe(function (projects) {
                return _this2.items2 = projects;
              });
            } else if (this.selectedField == this.fields[4]) {
              this.editForm = this.fb.group({
                selectedItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                update: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                tolerance: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
              });
              this.userService.getUnits().subscribe(function (units) {
                return _this2.items = units;
              });
            }
          }
        }, {
          key: "toleranceUpdate",
          value: function toleranceUpdate(unitId) {
            if (this.selectedField === this.fields[4]) {
              var unit = this.items.find(function (item) {
                return item._id == unitId;
              });
              this.editForm.patchValue({
                tolerance: unit.tolerance
              });
            }
          }
        }, {
          key: "gateFunc",
          value: function gateFunc(projectId) {
            var project = this.items2.find(function (item) {
              return item._id == projectId;
            });
            this.items = project.gates;
          }
        }, {
          key: "onChange2",
          value: function onChange2() {
            var _this3 = this;

            if (this.selectedField2 == this.fields[3]) {
              this.addForm = this.fb.group({
                selectedItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                viewValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
              });
              this.userService.getProjects().subscribe(function (projects) {
                return _this3.itemsAdd = projects;
              });
            } else if (this.selectedField2 == this.fields[4]) {
              this.addForm = this.fb.group({
                tolerance: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                viewValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
              }); // this.addForm.addControl('tolerance', this.fb.control('', [Validators.required]));
            } else {
              this.addForm = this.fb.group({
                viewValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
              });
            }
          }
        }, {
          key: "onChange3",
          value: function onChange3() {
            var _this4 = this;

            if (this.selectedField3 == this.fields[0]) {
              this.userService.getDepartments().subscribe(function (departments) {
                return _this4.itemsDelete = departments;
              });
            } else if (this.selectedField3 == this.fields[1]) {
              this.userService.getGrades().subscribe(function (grades) {
                return _this4.itemsDelete = grades;
              });
            } else if (this.selectedField3 == this.fields[2]) {
              this.userService.getProjects().subscribe(function (projects) {
                return _this4.itemsDelete = projects;
              });
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(editData) {
            var _this5 = this;

            console.log(editData);

            if (!editData) {
              return;
            } else if (editData.selectedItem === '' || editData.selectedItem === null) {
              return;
            } else if (this.selectedField == this.fields[0]) {
              this.userService.updateDepartment(editData).subscribe(function (Item) {
                _this5.userService.snackBarMessage("Department updated: ".concat(Item.viewValue));

                location.reload();
              });
            } else if (this.selectedField == this.fields[1]) {
              this.userService.updateGrade(editData).subscribe(function (Item) {
                _this5.userService.snackBarMessage("Grade updated: ".concat(Item.viewValue));

                location.reload();
              });
            } else if (this.selectedField == this.fields[2]) {
              this.userService.updateProject(editData).subscribe(function (Item) {
                _this5.userService.snackBarMessage("Project updated: ".concat(Item.viewValue));

                location.reload();
              });
            } else if (this.selectedField == this.fields[3]) {
              this.userService.updateGate(editData).subscribe(function (Item) {
                _this5.userService.snackBarMessage("Gate updated: ".concat(Item.viewValue));

                location.reload();
              });
            } else {
              this.userService.updateUnit(editData).subscribe(function (Item) {
                _this5.userService.snackBarMessage("Unit updated: ".concat(Item.viewValue));

                location.reload(); // this.router.routeReuseStrategy.shouldReuseRoute = function () {
                //   return false;
                // };
              });
            }
          }
        }, {
          key: "onSubmit2",
          value: function onSubmit2(addData) {
            var _this6 = this;

            if (!addData) {
              return;
            } else if (this.selectedField2 == this.fields[0]) {
              this.userService.addDepartment(addData).subscribe(function (Item) {
                _this6.userService.snackBarMessage("Department added: ".concat(Item.viewValue));

                location.reload();
              });
            } else if (this.selectedField2 == this.fields[1]) {
              this.userService.addGrade(addData).subscribe(function (Item) {
                _this6.userService.snackBarMessage("Grade added: ".concat(Item.viewValue));

                location.reload();
              });
            } else if (this.selectedField2 == this.fields[2]) {
              this.userService.addProject(addData).subscribe(function (Item) {
                _this6.userService.snackBarMessage("Project added: ".concat(Item.viewValue));

                location.reload();
              });
            } else if (this.selectedField2 == this.fields[4]) {
              this.userService.addUnit(addData).subscribe(function (Item) {
                _this6.userService.snackBarMessage("Unit added: ".concat(Item.viewValue));

                location.reload();
              });
            } else {
              this.userService.addGate(addData).subscribe(function (Item) {
                _this6.userService.snackBarMessage("Gate added: ".concat(Item.viewValue));

                location.reload();
              });
            }
          }
        }, {
          key: "onSubmit3",
          value: function onSubmit3(deleteData) {
            var _this7 = this;

            if (!deleteData) {
              return;
            } else if (this.selectedField3 == this.fields[0]) {
              this.userService.deleteDepartment(deleteData).subscribe(function (Item) {
                _this7.userService.snackBarMessage("Department deleted: ".concat(Item.viewValue));

                location.reload();
              });
            } else if (this.selectedField3 == this.fields[1]) {
              this.userService.deleteGrade(deleteData).subscribe(function (Item) {
                _this7.userService.snackBarMessage("Grade deleted: ".concat(Item.viewValue));

                location.reload();
              });
            } else if (this.selectedField3 == this.fields[2]) {
              this.userService.deleteProject(deleteData).subscribe(function (Item) {
                _this7.userService.snackBarMessage("Project deleted: ".concat(Item.viewValue));

                location.reload();
              });
            }
          }
        }]);

        return AdminDataControlComponent;
      }();

      AdminDataControlComponent.ɵfac = function AdminDataControlComponent_Factory(t) {
        return new (t || AdminDataControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      AdminDataControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminDataControlComponent,
        selectors: [["app-admin-data-control"]],
        decls: 23,
        vars: 9,
        consts: [[1, "row"], [1, "radio-card"], ["id", "example-radio-group-label"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelChange", "change"], ["class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "example-radio-button", 3, "value"], [3, "formGroup", "ngSubmit"], ["class", "edit-card", 4, "ngIf"], [1, "edit-card"], [1, "header"], ["class", "full-width", 4, "ngIf"], [1, "full-width"], ["formControlName", "selectedItem", "name", "item", 3, "valueChange"], ["unitSelect", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Update Value", "formControlName", "update", "type", "text"], [1, "button"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["formControlName", "selectedItem2", "name", "item2", 3, "valueChange"], ["projectSelect", ""], [3, "value"], ["matInput", "", "placeholder", "Tolerance", "formControlName", "tolerance", "type", "number"], ["matSuffix", ""], ["matInput", "", "placeholder", "Add Value", "formControlName", "viewValue", "type", "text"], ["formControlName", "selectedItem", "name", "item"], ["formControlName", "_id", "name", "item"]],
        template: function AdminDataControlComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin Data Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit data");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-radio-group", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminDataControlComponent_Template_mat_radio_group_ngModelChange_6_listener($event) {
              return ctx.selectedField = $event;
            })("change", function AdminDataControlComponent_Template_mat_radio_group_change_6_listener() {
              return ctx.onChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminDataControlComponent_mat_radio_button_7_Template, 2, 2, "mat-radio-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminDataControlComponent_form_8_Template, 2, 2, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add data");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-radio-group", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminDataControlComponent_Template_mat_radio_group_ngModelChange_13_listener($event) {
              return ctx.selectedField2 = $event;
            })("change", function AdminDataControlComponent_Template_mat_radio_group_change_13_listener() {
              return ctx.onChange2();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdminDataControlComponent_mat_radio_button_14_Template, 2, 2, "mat-radio-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminDataControlComponent_form_15_Template, 2, 2, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Delete data");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-radio-group", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminDataControlComponent_Template_mat_radio_group_ngModelChange_20_listener($event) {
              return ctx.selectedField3 = $event;
            })("change", function AdminDataControlComponent_Template_mat_radio_group_change_20_listener() {
              return ctx.onChange3();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AdminDataControlComponent_mat_radio_button_21_Template, 2, 2, "mat-radio-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AdminDataControlComponent_form_22_Template, 2, 2, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedField);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fields);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedField);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedField2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fields);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedField2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedField3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fields);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedField3);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"]],
        styles: ["h1[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.example-radio-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 15px 0;\r\n}\r\n.example-radio-button[_ngcontent-%COMP%] {\r\n  margin: 5px;\r\n}\r\n.radio-card[_ngcontent-%COMP%] {\r\n  display: block;\r\n\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n.full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n.edit-card[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n  width: 300px;\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tZGF0YS1jb250cm9sL2FkbWluLWRhdGEtY29udHJvbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGNBQWM7O0VBRWQsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tZGF0YS1jb250cm9sL2FkbWluLWRhdGEtY29udHJvbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZXhhbXBsZS1yYWRpby1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1yYWRpby1idXR0b24ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4ucmFkaW8tY2FyZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmVkaXQtY2FyZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminDataControlComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-admin-data-control',
            templateUrl: './admin-data-control.component.html',
            styleUrls: ['./admin-data-control.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/animations/template.animations.ts":
    /*!***************************************************!*\
      !*** ./src/app/animations/template.animations.ts ***!
      \***************************************************/

    /*! exports provided: rowsAnimation */

    /***/
    function srcAppAnimationsTemplateAnimationsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "rowsAnimation", function () {
        return rowsAnimation;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

      var rowsAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('rowsAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: '*',
        opacity: '0',
        transform: 'translateX(-550px)',
        'box-shadow': 'none'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(".35s ease", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: '*',
        opacity: '.2',
        transform: 'translateX(0)',
        'box-shadow': 'none'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(".35s ease", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: '*',
        opacity: 1,
        transform: 'translateX(0)'
      }))])])]);
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/login/login.component.ts");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register/register.component */
      "./src/app/register/register.component.ts");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home/home.component */
      "./src/app/home/home.component.ts");
      /* harmony import */


      var _admin_data_control_admin_data_control_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./admin-data-control/admin-data-control.component */
      "./src/app/admin-data-control/admin-data-control.component.ts");
      /* harmony import */


      var _gate_pass_gate_pass_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./gate-pass/gate-pass.component */
      "./src/app/gate-pass/gate-pass.component.ts");
      /* harmony import */


      var _report_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./report/report.component */
      "./src/app/report/report.component.ts");
      /* harmony import */


      var _admin_authorization_admin_authorization_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./admin-authorization/admin-authorization.component */
      "./src/app/admin-authorization/admin-authorization.component.ts");
      /* harmony import */


      var _filter_gate_pass_filter_gate_pass_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./filter-gate-pass/filter-gate-pass.component */
      "./src/app/filter-gate-pass/filter-gate-pass.component.ts");
      /* harmony import */


      var _return_return_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./return/return.component */
      "./src/app/return/return.component.ts");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./profile/profile.component */
      "./src/app/profile/profile.component.ts");
      /* harmony import */


      var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./page-not-found/page-not-found.component */
      "./src/app/page-not-found/page-not-found.component.ts");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./guards/auth.guard */
      "./src/app/guards/auth.guard.ts");
      /* harmony import */


      var _guards_login_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./guards/login.guard */
      "./src/app/guards/login.guard.ts");
      /* harmony import */


      var _guards_role_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./guards/role.guard */
      "./src/app/guards/role.guard.ts");
      /* harmony import */


      var _guards_create_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./guards/create.guard */
      "./src/app/guards/create.guard.ts");
      /* harmony import */


      var _guards_super_admin_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./guards/super-admin.guard */
      "./src/app/guards/super-admin.guard.ts");
      /* harmony import */


      var _guards_authorize_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./guards/authorize.guard */
      "./src/app/guards/authorize.guard.ts");
      /* harmony import */


      var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./inbox/inbox.component */
      "./src/app/inbox/inbox.component.ts");

      var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_14__["LoginGuard"]]
      }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
        canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_14__["LoginGuard"]]
      }, {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
      }, {
        path: 'gatepass',
        component: _gate_pass_gate_pass_component__WEBPACK_IMPORTED_MODULE_6__["GatePassComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"], _guards_create_guard__WEBPACK_IMPORTED_MODULE_16__["CreateGuard"]]
      }, {
        path: 'admin/data-control',
        component: _admin_data_control_admin_data_control_component__WEBPACK_IMPORTED_MODULE_5__["AdminDataControlComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"], _guards_super_admin_guard__WEBPACK_IMPORTED_MODULE_17__["SuperAdminGuard"]]
      }, {
        path: 'admin/authorization',
        component: _admin_authorization_admin_authorization_component__WEBPACK_IMPORTED_MODULE_8__["AdminAuthorizationComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"], _guards_role_guard__WEBPACK_IMPORTED_MODULE_15__["RoleGuard"]]
      }, {
        path: 'report',
        component: _report_report_component__WEBPACK_IMPORTED_MODULE_7__["ReportComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
      }, {
        path: 'filter',
        component: _filter_gate_pass_filter_gate_pass_component__WEBPACK_IMPORTED_MODULE_9__["FilterGatePassComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
      }, {
        path: 'return',
        component: _return_return_component__WEBPACK_IMPORTED_MODULE_10__["ReturnComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
      }, {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
      }, {
        path: 'inbox',
        component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_19__["InboxComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"], _guards_authorize_guard__WEBPACK_IMPORTED_MODULE_18__["AuthorizeGuard"]]
      }, {
        path: '**',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent, DialogContentPrint, MessageSnackComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogContentPrint", function () {
        return DialogContentPrint;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageSnackComponent", function () {
        return MessageSnackComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      function AppComponent_div_4_button_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_div_4_button_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "admin_panel_settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_div_4_button_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "inbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_div_4_button_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_button_4_Template, 3, 0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.print();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "print");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_4_button_11_Template, 3, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_4_button_12_Template, 3, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_div_4_button_13_Template, 3, 0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "account_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.logOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "exit_to_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userService.loggedIn.selectedUserType != "Security");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userService.loggedIn.selectedUserType === "Admin" || ctx_r0.userService.loggedIn.selectedUserType === "Super Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userService.loggedIn.selectedUserType === "Admin" || ctx_r0.userService.loggedIn.selectedUserType === "Super Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userService.loggedIn.selectedUserType === "Super Admin");
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(userService, dialog, router) {
          _classCallCheck(this, AppComponent);

          this.userService = userService;
          this.dialog = dialog;
          this.router = router;
          this.title = 'Gate Pass';
        } // loggedIn = this.userService.loggedIn;


        _createClass(AppComponent, [{
          key: "logOut",
          value: function logOut() {
            var _this8 = this;

            console.log('logOut');
            this.userService.logOutUser().subscribe(function () {
              return _this8.router.navigate(['login']);
            });
          }
        }, {
          key: "print",
          value: function print() {
            var dialogRef = this.dialog.open(DialogContentPrint, {
              data: {
                project: this.userService.loggedIn.selectedProject._id
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {// console.log(`Dialog result: ${result}`);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 13,
        vars: 2,
        consts: [["color", "primary"], [1, "example-fill-remaining-space"], [4, "ngIf"], ["src", "../assets/NTPC_Logo.png", 1, "image"], [1, "footer"], ["href", "https://github.com/PrateekUpd", "target", "_blank", 1, "github"], ["mat-icon-button", "", "routerLink", "home", "matTooltip", "Home", 1, "toolbar-btn"], ["mat-icon-button", "", "class", "toolbar-btn", "routerLink", "gatepass", "matTooltip", "Create Gate Pass", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Print Gate Pass", 1, "toolbar-btn", 3, "click"], ["mat-icon-button", "", "routerLink", "filter", "matTooltip", "Reports", 1, "toolbar-btn"], ["mat-icon-button", "", "class", "toolbar-btn", "routerLink", "admin/authorization", "matTooltip", "Authorization", 4, "ngIf"], ["mat-icon-button", "", "class", "toolbar-btn", "routerLink", "inbox", "matTooltip", "Inbox", 4, "ngIf"], ["mat-icon-button", "", "class", "toolbar-btn", "routerLink", "admin/data-control", "matTooltip", "Data Management", 4, "ngIf"], ["mat-icon-button", "", "routerLink", "profile", "matTooltip", "Profile", 1, "toolbar-btn"], ["mat-icon-button", "", "routerLink", "login", "matTooltip", "Logout", 1, "toolbar-btn", 3, "click"], ["mat-icon-button", "", "routerLink", "gatepass", "matTooltip", "Create Gate Pass", 1, "toolbar-btn"], ["mat-icon-button", "", "routerLink", "admin/authorization", "matTooltip", "Authorization", 1, "toolbar-btn"], ["mat-icon-button", "", "routerLink", "inbox", "matTooltip", "Inbox", 1, "toolbar-btn"], ["mat-icon-button", "", "routerLink", "admin/data-control", "matTooltip", "Data Management", 1, "toolbar-btn"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 20, 4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Made with \u2764\uFE0F by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Prateek Upadhyay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userService.loggedIn);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]],
        styles: [".example-fill-remaining-space[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.toolbar-btn[_ngcontent-%COMP%]{\r\n  font-size: large ;\r\n  margin-right: 1rem;\r\n}\r\n\r\n\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  \r\n  margin-top: auto;\r\n  bottom: 0;\r\n  position: fixed;\r\n\r\n  \r\n\r\n  width: 100%;\r\n  background-color: #3F51B5;\r\n  color: white;\r\n  text-align: center;\r\n  padding-top: 1rem;\r\n\r\n  \r\n  \r\n}\r\n\r\n\r\n\r\n.github[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: white;\r\n  transition: 0.5s;\r\n}\r\n\r\n.github[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  color: #FF4081;\r\n}\r\n\r\n.image[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n  margin-top: 0.5rem;\r\n  \r\n  -webkit-filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(128deg) brightness(110%) contrast(101%);\r\n          filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(128deg) brightness(110%) contrast(101%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOztBQUVIO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBQ0E7Ozs7Ozs7OztHQVNHOztBQUVIO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsZUFBZTs7RUFFZjtZQUNVOztFQUVWLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7O0VBRWpCLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsd0dBQWdHO1VBQWhHLGdHQUFnRztBQUNsRzs7QUFDRSw0QkFBNEI7O0FBQzVCO21DQUNpQzs7QUFDakMsOENBQThDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59ICovXHJcblxyXG4uZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuLnRvb2xiYXItYnRue1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2UgO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG4vKiAuZm9vdGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNTFCNTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufSAqL1xyXG5cclxuLmZvb3RlciB7XHJcbiAgLyogZmxleDogMCAwIDUwcHg7ICovXHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBib3R0b206IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG5cclxuICAvKiBib3R0b206IDA7XHJcbiAgbGVmdDogMDsgKi9cclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNTFCNTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG5cclxuICAvKiB6LWluZGV4OiAtMSA7ICovXHJcbiAgLyogcGFkZGluZy1ib3R0b206IDAuNXJlbTsgKi9cclxufVxyXG5cclxuLyogLmhhcy10ZXh0LWNlbnRlcmVkIHtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxufSAqL1xyXG5cclxuLmdpdGh1YiB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uZ2l0aHViOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICNGRjQwODE7XHJcbn1cclxuXHJcbi5pbWFnZXtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIC8qIHBhZGRpbmc6IDFweDsgKi9cclxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgxMDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxMjhkZWcpIGJyaWdodG5lc3MoMTEwJSkgY29udHJhc3QoMTAxJSk7XHJcbn1cclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xyXG4gIC8qIGJvcmRlcjogMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDsgKi9cclxuICAvKiBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuNjUpOyAqL1xyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();

      var DialogContentPrint = function DialogContentPrint(data) {
        _classCallCheck(this, DialogContentPrint);

        this.data = data;
      };

      DialogContentPrint.ɵfac = function DialogContentPrint_Factory(t) {
        return new (t || DialogContentPrint)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      DialogContentPrint.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DialogContentPrint,
        selectors: [["dialog-content-print"]],
        decls: 7,
        vars: 2,
        consts: [["mat-dialog-title", ""], [1, "mat-typography"], [3, "print", "project"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""]],
        template: function DialogContentPrint_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Print Gate Pass");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-gatepass-search", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("print", "1")("project", ctx.data.project);
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogContentPrint, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dialog-content-print',
            templateUrl: 'dialog-content-print.html'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();

      var MessageSnackComponent = function MessageSnackComponent() {
        _classCallCheck(this, MessageSnackComponent);
      };

      MessageSnackComponent.ɵfac = function MessageSnackComponent_Factory(t) {
        return new (t || MessageSnackComponent)();
      };

      MessageSnackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MessageSnackComponent,
        selectors: [["snack-bar-component-message"]],
        decls: 0,
        vars: 0,
        template: function MessageSnackComponent_Template(rf, ctx) {},
        styles: [".example-pizza-party[_ngcontent-%COMP%] {\n      color: hotpink;\n    }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageSnackComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'snack-bar-component-message',
            templateUrl: 'snack-bar-component-message.html',
            styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/slider */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/radio */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/paginator */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/sort */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/expansion */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/login/login.component.ts");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./register/register.component */
      "./src/app/register/register.component.ts");
      /* harmony import */


      var _messages_messages_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./messages/messages.component */
      "./src/app/messages/messages.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./home/home.component */
      "./src/app/home/home.component.ts");
      /* harmony import */


      var _admin_data_control_admin_data_control_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./admin-data-control/admin-data-control.component */
      "./src/app/admin-data-control/admin-data-control.component.ts");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _gate_pass_gate_pass_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./gate-pass/gate-pass.component */
      "./src/app/gate-pass/gate-pass.component.ts");
      /* harmony import */


      var _report_report_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./report/report.component */
      "./src/app/report/report.component.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _admin_authorization_admin_authorization_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./admin-authorization/admin-authorization.component */
      "./src/app/admin-authorization/admin-authorization.component.ts");
      /* harmony import */


      var _employee_search_employee_search_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./employee-search/employee-search.component */
      "./src/app/employee-search/employee-search.component.ts");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _filter_gate_pass_filter_gate_pass_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./filter-gate-pass/filter-gate-pass.component */
      "./src/app/filter-gate-pass/filter-gate-pass.component.ts");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
      /* harmony import */


      var _return_return_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./return/return.component */
      "./src/app/return/return.component.ts");
      /* harmony import */


      var _gatepass_search_gatepass_search_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./gatepass-search/gatepass-search.component */
      "./src/app/gatepass-search/gatepass-search.component.ts");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/cdk/table */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./profile/profile.component */
      "./src/app/profile/profile.component.ts");
      /* harmony import */


      var mat_table_exporter__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! mat-table-exporter */
      "./node_modules/mat-table-exporter/__ivy_ngcc__/fesm2015/mat-table-exporter.js");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/material/stepper */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
      /* harmony import */


      var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./page-not-found/page-not-found.component */
      "./src/app/page-not-found/page-not-found.component.ts");
      /* harmony import */


      var _token_interceptor__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./token.interceptor */
      "./src/app/token.interceptor.ts");
      /* harmony import */


      var _quantity_ret_validator_directive__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./quantity-ret-validator.directive */
      "./src/app/quantity-ret-validator.directive.ts");
      /* harmony import */


      var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./inbox/inbox.component */
      "./src/app/inbox/inbox.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [// { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_40__["CdkColumnDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_40__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_40__["NoDataRowOutlet"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
          useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_45__["TokenInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_32__["MatAutocompleteModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__["MatTooltipModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_39__["MatCheckboxModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], mat_table_exporter__WEBPACK_IMPORTED_MODULE_42__["MatTableExporterModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatStepperModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_21__["MessagesComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"], _admin_data_control_admin_data_control_component__WEBPACK_IMPORTED_MODULE_24__["AdminDataControlComponent"], _gate_pass_gate_pass_component__WEBPACK_IMPORTED_MODULE_27__["GatePassComponent"], _report_report_component__WEBPACK_IMPORTED_MODULE_28__["ReportComponent"], _return_return_component__WEBPACK_IMPORTED_MODULE_37__["DialogContentReturn"], _app_component__WEBPACK_IMPORTED_MODULE_2__["DialogContentPrint"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_41__["DialogContentHome"], _admin_authorization_admin_authorization_component__WEBPACK_IMPORTED_MODULE_30__["AdminAuthorizationComponent"], _employee_search_employee_search_component__WEBPACK_IMPORTED_MODULE_31__["EmployeeSearchComponent"], _admin_authorization_admin_authorization_component__WEBPACK_IMPORTED_MODULE_30__["AlreadyAuthComponent"], _filter_gate_pass_filter_gate_pass_component__WEBPACK_IMPORTED_MODULE_35__["FilterGatePassComponent"], _return_return_component__WEBPACK_IMPORTED_MODULE_37__["ReturnComponent"], _gatepass_search_gatepass_search_component__WEBPACK_IMPORTED_MODULE_38__["GatepassSearchComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_41__["UserEditedComponent"], _gate_pass_gate_pass_component__WEBPACK_IMPORTED_MODULE_27__["GpCreatedComponent"], _return_return_component__WEBPACK_IMPORTED_MODULE_37__["ReturnSnackComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_41__["ProfileComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_44__["PageNotFoundComponent"], _quantity_ret_validator_directive__WEBPACK_IMPORTED_MODULE_46__["QuantityRetValidatorDirective"], _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_47__["InboxComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_32__["MatAutocompleteModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__["MatTooltipModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_39__["MatCheckboxModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], mat_table_exporter__WEBPACK_IMPORTED_MODULE_42__["MatTableExporterModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatStepperModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_21__["MessagesComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"], _admin_data_control_admin_data_control_component__WEBPACK_IMPORTED_MODULE_24__["AdminDataControlComponent"], _gate_pass_gate_pass_component__WEBPACK_IMPORTED_MODULE_27__["GatePassComponent"], _report_report_component__WEBPACK_IMPORTED_MODULE_28__["ReportComponent"], _return_return_component__WEBPACK_IMPORTED_MODULE_37__["DialogContentReturn"], _app_component__WEBPACK_IMPORTED_MODULE_2__["DialogContentPrint"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_41__["DialogContentHome"], _admin_authorization_admin_authorization_component__WEBPACK_IMPORTED_MODULE_30__["AdminAuthorizationComponent"], _employee_search_employee_search_component__WEBPACK_IMPORTED_MODULE_31__["EmployeeSearchComponent"], _admin_authorization_admin_authorization_component__WEBPACK_IMPORTED_MODULE_30__["AlreadyAuthComponent"], _filter_gate_pass_filter_gate_pass_component__WEBPACK_IMPORTED_MODULE_35__["FilterGatePassComponent"], _return_return_component__WEBPACK_IMPORTED_MODULE_37__["ReturnComponent"], _gatepass_search_gatepass_search_component__WEBPACK_IMPORTED_MODULE_38__["GatepassSearchComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_41__["UserEditedComponent"], _gate_pass_gate_pass_component__WEBPACK_IMPORTED_MODULE_27__["GpCreatedComponent"], _return_return_component__WEBPACK_IMPORTED_MODULE_37__["ReturnSnackComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_41__["ProfileComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_44__["PageNotFoundComponent"], _quantity_ret_validator_directive__WEBPACK_IMPORTED_MODULE_46__["QuantityRetValidatorDirective"], _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_47__["InboxComponent"]],
            entryComponents: [_report_report_component__WEBPACK_IMPORTED_MODULE_28__["ReportComponent"], _admin_authorization_admin_authorization_component__WEBPACK_IMPORTED_MODULE_30__["AlreadyAuthComponent"], _filter_gate_pass_filter_gate_pass_component__WEBPACK_IMPORTED_MODULE_35__["FilterGatePassComponent"], _return_return_component__WEBPACK_IMPORTED_MODULE_37__["DialogContentReturn"], _app_component__WEBPACK_IMPORTED_MODULE_2__["DialogContentPrint"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_41__["DialogContentHome"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_41__["UserEditedComponent"], _gate_pass_gate_pass_component__WEBPACK_IMPORTED_MODULE_27__["GpCreatedComponent"], _return_return_component__WEBPACK_IMPORTED_MODULE_37__["ReturnSnackComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_32__["MatAutocompleteModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__["MatTooltipModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_39__["MatCheckboxModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], mat_table_exporter__WEBPACK_IMPORTED_MODULE_42__["MatTableExporterModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatStepperModule"]],
            providers: [// { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_40__["CdkColumnDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_40__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_40__["NoDataRowOutlet"], {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
              useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_45__["TokenInterceptor"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_2__["DialogContentPrint"], [_angular_common__WEBPACK_IMPORTED_MODULE_48__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["NgPluralCase"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSlider"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_49__["Dir"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArrayName"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardAvatar"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_50__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_50__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatTextareaAutosize"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarRow"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_51__["CdkScrollable"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOptgroup"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridTileText"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatLine"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridTileFooterCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridAvatarCssMatStyler"], _angular_router__WEBPACK_IMPORTED_MODULE_52__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_52__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_52__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_52__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_52__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatFooterRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatNoDataRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTextColumn"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioButton"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginator"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSort"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortHeader"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatCalendar"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatCalendarBody"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepicker"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerContent"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerToggleIcon"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatMonthView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatMultiYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatCalendarHeader"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatStartDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDateRangePicker"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanelActionRow"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanelContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogActions"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_32__["MatAutocomplete"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_32__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_32__["MatAutocompleteOrigin"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarContainer"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__["MatTooltip"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__["TooltipComponent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_39__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_39__["MatCheckboxRequiredValidator"], mat_table_exporter__WEBPACK_IMPORTED_MODULE_42__["MatTableExporterDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatStepLabel"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatStepHeader"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatStepperIcon"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_21__["MessagesComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"], _admin_data_control_admin_data_control_component__WEBPACK_IMPORTED_MODULE_24__["AdminDataControlComponent"], _gate_pass_gate_pass_component__WEBPACK_IMPORTED_MODULE_27__["GatePassComponent"], _report_report_component__WEBPACK_IMPORTED_MODULE_28__["ReportComponent"], _return_return_component__WEBPACK_IMPORTED_MODULE_37__["DialogContentReturn"], _app_component__WEBPACK_IMPORTED_MODULE_2__["DialogContentPrint"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_41__["DialogContentHome"], _admin_authorization_admin_authorization_component__WEBPACK_IMPORTED_MODULE_30__["AdminAuthorizationComponent"], _employee_search_employee_search_component__WEBPACK_IMPORTED_MODULE_31__["EmployeeSearchComponent"], _admin_authorization_admin_authorization_component__WEBPACK_IMPORTED_MODULE_30__["AlreadyAuthComponent"], _filter_gate_pass_filter_gate_pass_component__WEBPACK_IMPORTED_MODULE_35__["FilterGatePassComponent"], _return_return_component__WEBPACK_IMPORTED_MODULE_37__["ReturnComponent"], _gatepass_search_gatepass_search_component__WEBPACK_IMPORTED_MODULE_38__["GatepassSearchComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_41__["UserEditedComponent"], _gate_pass_gate_pass_component__WEBPACK_IMPORTED_MODULE_27__["GpCreatedComponent"], _return_return_component__WEBPACK_IMPORTED_MODULE_37__["ReturnSnackComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_41__["ProfileComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_44__["PageNotFoundComponent"], _quantity_ret_validator_directive__WEBPACK_IMPORTED_MODULE_46__["QuantityRetValidatorDirective"], _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_47__["InboxComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_48__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["KeyValuePipe"]]);

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_admin_authorization_admin_authorization_component__WEBPACK_IMPORTED_MODULE_30__["AdminAuthorizationComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_48__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["NgPluralCase"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSlider"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_49__["Dir"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArrayName"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardAvatar"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_50__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_50__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatTextareaAutosize"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarRow"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_51__["CdkScrollable"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOptgroup"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridTileText"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatLine"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridTileFooterCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridAvatarCssMatStyler"], _angular_router__WEBPACK_IMPORTED_MODULE_52__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_52__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_52__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_52__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_52__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatFooterRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatNoDataRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTextColumn"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioButton"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginator"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSort"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortHeader"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatCalendar"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatCalendarBody"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepicker"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerContent"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerToggleIcon"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatMonthView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatMultiYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatCalendarHeader"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatStartDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDateRangePicker"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanelActionRow"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanelContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogActions"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_32__["MatAutocomplete"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_32__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_32__["MatAutocompleteOrigin"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarContainer"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__["MatTooltip"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__["TooltipComponent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_39__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_39__["MatCheckboxRequiredValidator"], mat_table_exporter__WEBPACK_IMPORTED_MODULE_42__["MatTableExporterDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatStepLabel"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatStepHeader"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__["MatStepperIcon"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_21__["MessagesComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"], _admin_data_control_admin_data_control_component__WEBPACK_IMPORTED_MODULE_24__["AdminDataControlComponent"], _gate_pass_gate_pass_component__WEBPACK_IMPORTED_MODULE_27__["GatePassComponent"], _report_report_component__WEBPACK_IMPORTED_MODULE_28__["ReportComponent"], _return_return_component__WEBPACK_IMPORTED_MODULE_37__["DialogContentReturn"], _app_component__WEBPACK_IMPORTED_MODULE_2__["DialogContentPrint"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_41__["DialogContentHome"], _admin_authorization_admin_authorization_component__WEBPACK_IMPORTED_MODULE_30__["AdminAuthorizationComponent"], _employee_search_employee_search_component__WEBPACK_IMPORTED_MODULE_31__["EmployeeSearchComponent"], _admin_authorization_admin_authorization_component__WEBPACK_IMPORTED_MODULE_30__["AlreadyAuthComponent"], _filter_gate_pass_filter_gate_pass_component__WEBPACK_IMPORTED_MODULE_35__["FilterGatePassComponent"], _return_return_component__WEBPACK_IMPORTED_MODULE_37__["ReturnComponent"], _gatepass_search_gatepass_search_component__WEBPACK_IMPORTED_MODULE_38__["GatepassSearchComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_41__["UserEditedComponent"], _gate_pass_gate_pass_component__WEBPACK_IMPORTED_MODULE_27__["GpCreatedComponent"], _return_return_component__WEBPACK_IMPORTED_MODULE_37__["ReturnSnackComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_41__["ProfileComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_44__["PageNotFoundComponent"], _quantity_ret_validator_directive__WEBPACK_IMPORTED_MODULE_46__["QuantityRetValidatorDirective"], _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_47__["InboxComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_48__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_48__["KeyValuePipe"]]);
      /***/

    },

    /***/
    "./src/app/employee-search/employee-search.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/employee-search/employee-search.component.ts ***!
      \**************************************************************/

    /*! exports provided: EmployeeSearchComponent */

    /***/
    function srcAppEmployeeSearchEmployeeSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeSearchComponent", function () {
        return EmployeeSearchComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _admin_authorization_admin_authorization_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../admin-authorization/admin-authorization.component */
      "./src/app/admin-authorization/admin-authorization.component.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      function EmployeeSearchComponent_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function EmployeeSearchComponent_mat_option_7_Template_mat_option_onSelectionChange_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var user_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.selectFunc(user_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", user_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", user_r3.empId, " ", user_r3.name, " ", user_r3.selectedDepartment.viewValue, " ", user_r3.selectedGrade.viewValue, " ");
        }
      }

      var EmployeeSearchComponent = /*#__PURE__*/function () {
        function EmployeeSearchComponent(userService, adminAuth) {
          _classCallCheck(this, EmployeeSearchComponent);

          this.userService = userService;
          this.adminAuth = adminAuth;
          this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(EmployeeSearchComponent, [{
          key: "search",
          value: function search(term) {
            this.searchTerms.next(term);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.users$ = this.searchTerms.pipe( // wait 300ms after each keystroke before considering the term
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), // ignore new term if same as previous term
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), // switch to new search observable each time the term changes
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) {
              return _this9.userService.searchUsers(term, _this9.selectedAuth, _this9.selectedProject);
            })); // this.userFunc();
          }
        }, {
          key: "selectFunc",
          value: function selectFunc(user) {
            if (this.selectedAuth) {
              this.adminAuth.selectedAuthUser = user;
            } else {
              this.adminAuth.selectedUnAuthUser = user;
            }
          }
        }]);

        return EmployeeSearchComponent;
      }();

      EmployeeSearchComponent.ɵfac = function EmployeeSearchComponent_Factory(t) {
        return new (t || EmployeeSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_authorization_admin_authorization_component__WEBPACK_IMPORTED_MODULE_4__["AdminAuthorizationComponent"]));
      };

      EmployeeSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EmployeeSearchComponent,
        selectors: [["app-employee-search"]],
        inputs: {
          selectedAuth: "selectedAuth",
          selectedCreation: "selectedCreation",
          selectedProject: "selectedProject"
        },
        decls: 9,
        vars: 4,
        consts: [["appearance", "standard"], ["matInput", "", "type", "text", "placeholder", "Search By Emp Name", "aria-label", "Number", "matInput", "", 3, "matAutocomplete", "input"], ["searchBox", ""], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [3, "value", "onSelectionChange"]],
        template: function EmployeeSearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Employee Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EmployeeSearchComponent_Template_input_input_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

              return ctx.search(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-autocomplete", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EmployeeSearchComponent_mat_option_7_Template, 2, 5, "mat-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, ctx.users$));
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
        styles: ["mat-form-field[_ngcontent-%COMP%]{\r\n  width: 25%;\r\n  font-size: large;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtc2VhcmNoL2VtcGxveWVlLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjs7QUFFbEIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1zZWFyY2gvZW1wbG95ZWUtc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZHtcclxuICB3aWR0aDogMjUlO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcblxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeSearchComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-employee-search',
            templateUrl: './employee-search.component.html',
            styleUrls: ['./employee-search.component.css']
          }]
        }], function () {
          return [{
            type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: _admin_authorization_admin_authorization_component__WEBPACK_IMPORTED_MODULE_4__["AdminAuthorizationComponent"]
          }];
        }, {
          selectedAuth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          selectedCreation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          selectedProject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/filter-gate-pass/filter-gate-pass.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/filter-gate-pass/filter-gate-pass.component.ts ***!
      \****************************************************************/

    /*! exports provided: FilterGatePassComponent */

    /***/
    function srcAppFilterGatePassFilterGatePassComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterGatePassComponent", function () {
        return FilterGatePassComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _gatepass_search_gatepass_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../gatepass-search/gatepass-search.component */
      "./src/app/gatepass-search/gatepass-search.component.ts");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      var FilterGatePassComponent = /*#__PURE__*/function () {
        function FilterGatePassComponent(userService, fb, router) {
          _classCallCheck(this, FilterGatePassComponent);

          this.userService = userService;
          this.fb = fb;
          this.router = router;
          this.filterForm = this.fb.group({
            selectedDepartment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            selectedType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            selectedOwner: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            selectedMovement: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            from: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            selectedProject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.userService.loggedIn.selectedProject._id)
          });
        }

        _createClass(FilterGatePassComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit(filterForm) {
            var _this10 = this;

            if (filterForm.selectedDepartment === 'Own Department') {
              filterForm.selectedDepartment = this.userService.loggedIn.selectedDepartment._id;
            }

            console.log(filterForm);
            this.userService.getFilterGpArray(filterForm).subscribe(function (gpArrays) {
              _this10.userService.gpArrays = gpArrays;

              _this10.router.navigate(['report']);
            });
          }
        }]);

        return FilterGatePassComponent;
      }();

      FilterGatePassComponent.ɵfac = function FilterGatePassComponent_Factory(t) {
        return new (t || FilterGatePassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      FilterGatePassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FilterGatePassComponent,
        selectors: [["app-filter-gate-pass"]],
        decls: 72,
        vars: 6,
        consts: [[1, "search-div"], [3, "project", "print"], [1, "filter-div"], [3, "formGroup", "ngSubmit"], [1, "filter-card"], [1, "full-width"], ["formControlName", "selectedDepartment"], ["value", "Own Department"], ["value", "All"], ["formControlName", "selectedType"], ["value", "Returnable"], ["value", "Non-Returnable"], ["value", "Pending Returnable"], ["formControlName", "selectedOwner"], ["value", "NTPC"], ["value", "Vendor"], ["formControlName", "selectedMovement"], ["value", "In"], ["value", "Out"], ["value", "Within"], [3, "rangePicker"], ["matStartDate", "", "formControlName", "from", "placeholder", "Start date"], ["matEndDate", "", "formControlName", "to", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "filter-card-button"], ["mat-icon-button", "", "color", "accent", 3, "disabled"]],
        template: function FilterGatePassComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-gatepass-search", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "OR");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FilterGatePassComponent_Template_form_ngSubmit_6_listener() {
              return ctx.onSubmit(ctx.filterForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Own Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Returnable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Non-Returnable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Pending Returnable");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Owner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "NTPC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Vendor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Movement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-select", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Within");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Enter a date range");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-date-range-input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "mat-datepicker-toggle", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "mat-date-range-picker", null, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-card-actions", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "filter_alt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", ctx.userService.loggedIn.selectedProject._id)("print", "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.filterForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rangePicker", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.filterForm.valid);
          }
        },
        directives: [_gatepass_search_gatepass_search_component__WEBPACK_IMPORTED_MODULE_4__["GatepassSearchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDateRangePicker"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]],
        styles: [".full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.filter-card-button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.filter-card[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n\r\n.filter-div[_ngcontent-%COMP%]{\r\n  margin-top: 5%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.search-div[_ngcontent-%COMP%] {\r\n  \r\n  align-self: center;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\r\n  margin-left: 43.5%;\r\n}\r\n\r\napp-gatepass-search[_ngcontent-%COMP%] {\r\n  width: 100%!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyLWdhdGUtcGFzcy9maWx0ZXItZ2F0ZS1wYXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7O0FBRUg7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZmlsdGVyLWdhdGUtcGFzcy9maWx0ZXItZ2F0ZS1wYXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA6aG9zdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTklLCAtNTAlKTtcclxufSAqL1xyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmZpbHRlci1jYXJkLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZmlsdGVyLWNhcmQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmZpbHRlci1kaXZ7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaC1kaXYge1xyXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIG1hcmdpbi1sZWZ0OiA0My41JTtcclxufVxyXG5cclxuYXBwLWdhdGVwYXNzLXNlYXJjaCB7XHJcbiAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterGatePassComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-filter-gate-pass',
            templateUrl: './filter-gate-pass.component.html',
            styleUrls: ['./filter-gate-pass.component.css']
          }]
        }], function () {
          return [{
            type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/gate-pass/gate-pass.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/gate-pass/gate-pass.component.ts ***!
      \**************************************************/

    /*! exports provided: GatePassComponent, GpCreatedComponent */

    /***/
    function srcAppGatePassGatePassComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GatePassComponent", function () {
        return GatePassComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GpCreatedComponent", function () {
        return GpCreatedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _animations_template_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../animations/template.animations */
      "./src/app/animations/template.animations.ts");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      function GatePassComponent_mat_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var department_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", department_r33._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", department_r33.viewValue, " ");
        }
      }

      function GatePassComponent_mat_option_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", project_r34._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r34.viewValue, " ");
        }
      }

      function GatePassComponent_mat_option_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r35.viewValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r35.viewValue, " ");
        }
      }

      function GatePassComponent_mat_option_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var owner_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", owner_r36.viewValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", owner_r36.viewValue, " ");
        }
      }

      function GatePassComponent_mat_option_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var movement_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", movement_r37.viewValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", movement_r37.viewValue, " ");
        }
      }

      function GatePassComponent_mat_option_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var gate_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", gate_r38._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", gate_r38.viewValue, " ");
        }
      }

      function GatePassComponent_mat_grid_tile_58_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Vendor Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GatePassComponent_mat_grid_tile_58_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r39.createForm.vendorName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.createForm.vendorName);
        }
      }

      function GatePassComponent_mat_header_cell_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SNo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GatePassComponent_mat_cell_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r41.sno, " ");
        }
      }

      function GatePassComponent_mat_header_cell_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mode Of Transport ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GatePassComponent_mat_cell_73_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 41, 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GatePassComponent_mat_cell_73_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var element_r42 = ctx.$implicit;
            return element_r42.modeOfTransport = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r42 = ctx.$implicit;
          var i_r43 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "modeOfTransport-", i_r43, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", element_r42.modeOfTransport);
        }
      }

      function GatePassComponent_mat_header_cell_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GatePassComponent_mat_cell_76_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 41, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GatePassComponent_mat_cell_76_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);

            var element_r47 = ctx.$implicit;
            return element_r47.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r47 = ctx.$implicit;
          var i_r48 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "description-", i_r48, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", element_r47.description);
        }
      }

      function GatePassComponent_mat_header_cell_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Quantity ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GatePassComponent_mat_cell_79_Template(rf, ctx) {
        if (rf & 1) {
          var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 44, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GatePassComponent_mat_cell_79_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);

            var element_r52 = ctx.$implicit;
            return element_r52.quantity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r52 = ctx.$implicit;
          var i_r53 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "quantity-", i_r53, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", element_r52.quantity);
        }
      }

      function GatePassComponent_mat_header_cell_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GatePassComponent_mat_cell_82_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var Unit_r61 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", Unit_r61._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", Unit_r61.viewValue, " ");
        }
      }

      function GatePassComponent_mat_cell_82_Template(rf, ctx) {
        if (rf & 1) {
          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select", 46, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GatePassComponent_mat_cell_82_Template_mat_select_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

            var element_r57 = ctx.$implicit;
            return element_r57.unit = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GatePassComponent_mat_cell_82_mat_option_4_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r57 = ctx.$implicit;
          var i_r58 = ctx.index;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "unit-", i_r58, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", element_r57.unit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.Units);
        }
      }

      function GatePassComponent_mat_header_cell_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Issued To ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GatePassComponent_mat_cell_85_Template(rf, ctx) {
        if (rf & 1) {
          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 41, 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GatePassComponent_mat_cell_85_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

            var element_r64 = ctx.$implicit;
            return element_r64.issuedTo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r64 = ctx.$implicit;
          var i_r65 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "issuedTo-", i_r65, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", element_r64.issuedTo);
        }
      }

      function GatePassComponent_mat_header_cell_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date Of Return ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GatePassComponent_mat_cell_88_Template(rf, ctx) {
        if (rf & 1) {
          var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 49, 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GatePassComponent_mat_cell_88_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

            var element_r69 = ctx.$implicit;
            return element_r69.dateOfReturn = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-datepicker-toggle", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-datepicker", null, 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r69 = ctx.$implicit;
          var i_r70 = ctx.index;

          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "dateOfReturn-", i_r70, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r72)("ngModel", element_r69.dateOfReturn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r72);
        }
      }

      function GatePassComponent_mat_header_cell_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " From ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GatePassComponent_mat_cell_91_Template(rf, ctx) {
        if (rf & 1) {
          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 41, 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GatePassComponent_mat_cell_91_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

            var element_r75 = ctx.$implicit;
            return element_r75.from = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r75 = ctx.$implicit;
          var i_r76 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "from-", i_r76, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", element_r75.from);
        }
      }

      function GatePassComponent_mat_header_cell_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " To ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GatePassComponent_mat_cell_94_Template(rf, ctx) {
        if (rf & 1) {
          var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 41, 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GatePassComponent_mat_cell_94_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84);

            var element_r80 = ctx.$implicit;
            return element_r80.to = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r80 = ctx.$implicit;
          var i_r81 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "to-", i_r81, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", element_r80.to);
        }
      }

      function GatePassComponent_mat_header_cell_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reason ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GatePassComponent_mat_cell_97_Template(rf, ctx) {
        if (rf & 1) {
          var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 41, 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GatePassComponent_mat_cell_97_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

            var element_r85 = ctx.$implicit;
            return element_r85.reason = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r85 = ctx.$implicit;
          var i_r86 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "reason-", i_r86, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", element_r85.reason);
        }
      }

      function GatePassComponent_mat_header_cell_99_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Remark ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GatePassComponent_mat_cell_100_Template(rf, ctx) {
        if (rf & 1) {
          var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 41, 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GatePassComponent_mat_cell_100_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94);

            var element_r90 = ctx.$implicit;
            return element_r90.remark = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r90 = ctx.$implicit;
          var i_r91 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "remark-", i_r91, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", element_r90.remark);
        }
      }

      function GatePassComponent_mat_header_row_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function GatePassComponent_mat_row_102_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rowsAnimation", undefined);
        }
      } // interface Gate {
      //   viewValue: string;
      // }


      var GatePassComponent = /*#__PURE__*/function () {
        // gatePassForm;
        function GatePassComponent(userService, fb, _snackBar, router) {
          _classCallCheck(this, GatePassComponent);

          this.userService = userService;
          this.fb = fb;
          this._snackBar = _snackBar;
          this.router = router;
          this.createForm = {
            name: this.userService.loggedIn.name,
            selectedGate: null,
            selectedDepartment: this.userService.loggedIn.selectedDepartment,
            selectedProject: this.userService.loggedIn.selectedProject,
            selectedType: null,
            selectedOwner: null,
            selectedMovement: null,
            receiver: null,
            firm: null,
            vendorName: null
          };
          this.dcGatePass = ['sno', 'modeOfTransport', 'description', 'quantity', 'unit', 'issuedTo', 'from', 'to', 'reason', 'remark', 'dateOfReturn'];
          this.gatePasses = [];
          this.types = [{
            viewValue: 'Returnable'
          }, {
            viewValue: 'Non-Returnable'
          }];
          this.owners = [{
            viewValue: 'NTPC'
          }, {
            viewValue: 'Vendor'
          }];
          this.movements = [{
            viewValue: 'In'
          }, {
            viewValue: 'Out'
          }, {
            viewValue: 'Within'
          }];
          this.gpArray = {
            gatePassNo: 0,
            createForm: null,
            createdBy: null,
            authorized: null,
            authorizedDate: null,
            status: 'Created',
            gatePass: []
          }; // this.gatePasses.push(this.createNewGatePass(1));

          this.dsGatePass = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.gatePasses); // this.gatePassForm = this.fb.group({
          //   selectedGate: new FormControl('', Validators.required),
          //   selectedType: new FormControl('', Validators.required),
          //   selectedOwner: new FormControl('', Validators.required),
          //   selectedMovement: new FormControl('', Validators.required),
          //   receiver: new FormControl('', Validators.required),
          //   firm: new FormControl('', Validators.required),
          //   sno: new FormControl('', Validators.required),
          //   modeOfTransport: new FormControl('', Validators.required),
          //   description: new FormControl('', Validators.required),
          //   quantity: new FormControl('', Validators.required),
          //   unit: new FormControl('', Validators.required),
          //   issuedTo: new FormControl('', Validators.required),
          //   from: new FormControl('', Validators.required),
          //   to: new FormControl('', Validators.required),
          //   reason: new FormControl('', Validators.required),
          //   remark: new FormControl('', Validators.required),
          //   dateOfReturn: new FormControl('', Validators.required),
          // })
        }

        _createClass(GatePassComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.gatePasses.push(this.createNewGatePass(1));
            this.getProjects();
            this.getDepartments();
            this.getUnits(); // this.disableInput();
          }
        }, {
          key: "setGates",
          value: function setGates() {
            var _this11 = this;

            var selectedProject = this.projects.find(function (project) {
              return project._id = _this11.userService.loggedIn.selectedProject._id;
            });
            this.gates = selectedProject.gates;
          }
        }, {
          key: "getDepartments",
          value: function getDepartments() {
            var _this12 = this;

            this.userService.getDepartments().subscribe(function (departments) {
              return _this12.departments = departments;
            });
          }
        }, {
          key: "getUnits",
          value: function getUnits() {
            var _this13 = this;

            this.userService.getUnits().subscribe(function (units) {
              return _this13.Units = units;
            });
          }
        }, {
          key: "getProjects",
          value: function getProjects() {
            var _this14 = this;

            this.userService.getProjects().subscribe(function (projects) {
              _this14.projects = projects;

              _this14.setGates();
            });
          }
        }, {
          key: "dateFunc",
          value: function dateFunc(value) {
            console.log(value); // this.createForm.controls.selectedType.value

            var _iterator2 = _createForOfIteratorHelper(this.dcGatePass),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var dc = _step2.value;

                if (dc == "dateOfReturn") {
                  this.dcDate = true;
                  break;
                } else {
                  this.dcDate = false;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            if (value === "Non-Returnable" && this.dcDate === true) {
              this.dcGatePass.pop();
              this.gatePasses.forEach(function (gatePass) {
                gatePass.dateOfReturn = null;
              });
            } else if (value === "Returnable" && this.dcDate === false) {
              this.dcGatePass.push('dateOfReturn');
            }
          }
        }, {
          key: "createNewGatePass",
          value: function createNewGatePass(sno) {
            return {
              sno: sno,
              modeOfTransport: null,
              description: null,
              quantity: null,
              unit: null,
              issuedTo: null,
              dateOfReturn: null,
              from: null,
              to: null,
              reason: null,
              remark: null,
              incomingRef: null
            };
          }
        }, {
          key: "addRow",
          value: function addRow() {
            this.dsGatePass.data.push(this.createNewGatePass(this.dsGatePass.data.length + 1));
            this.dsGatePass.filter = "";
          }
        }, {
          key: "deleteRow",
          value: function deleteRow() {
            if (this.dsGatePass.data.length == 1) {
              return;
            }

            this.dsGatePass.data.pop();
            this.dsGatePass.filter = "";
          }
        }, {
          key: "onSubmitFunc",
          value: function onSubmitFunc() {
            var _this15 = this;

            if (this.gatePasses === [] || !this.createForm) {
              alert("Please fill all the fields");
            } else {
              this.gpArray.createForm = this.createForm;
              this.gpArray.gatePass = this.gatePasses;
              this.gpArray.createdBy = this.userService.loggedIn;
              this.userService.addGpArray(this.gpArray).subscribe(function (gpArray) {
                // alert("Form Submitted")
                _this15._snackBar.openFromComponent(GpCreatedComponent, {
                  duration: 3 * 1000
                });

                _this15.userService.selectedGpArray = gpArray;

                _this15.userService.storeGpArray(gpArray.gatePassNo);

                _this15.router.navigate(['return']);
              });
              console.log(this.gpArray);
            }
          }
        }]);

        return GatePassComponent;
      }();

      GatePassComponent.ɵfac = function GatePassComponent_Factory(t) {
        return new (t || GatePassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      GatePassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GatePassComponent,
        selectors: [["app-gate-pass"]],
        decls: 103,
        vars: 25,
        consts: [["myForm", "ngForm"], [1, "mat-elevation-z8", "create-card"], ["cols", "5", "rowHeight", "5:1"], ["appearance", "standard"], ["matInput", "", "placeholder", "Name", "name", "name", 3, "disabled", "ngModel", "ngModelChange"], ["name", "department", 3, "ngModel", "disabled", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "project", 3, "ngModel", "disabled", "ngModelChange"], ["name", "type", "required", "", 3, "ngModel", "ngModelChange", "valueChange"], ["typeSelect", ""], ["name", "owner", "required", "", 3, "ngModel", "ngModelChange"], ["name", "movement", "required", "", 3, "ngModel", "ngModelChange"], ["name", "gate", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Receiver", "name", "receiver", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Firm Represented", "name", "firm", "required", "", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "general-button", 3, "disabled", "click"], [1, "row-button"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "type", "button", 3, "disabled", "click"], [1, "example-container", "mat-elevation-z8"], [3, "dataSource"], ["matColumnDef", "sno"], [4, "matHeaderCellDef"], ["class", "first", 4, "matCellDef"], ["matColumnDef", "modeOfTransport"], [4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "quantity"], ["matColumnDef", "unit"], ["matColumnDef", "issuedTo"], ["matColumnDef", "dateOfReturn"], ["matColumnDef", "from"], ["matColumnDef", "to"], ["matColumnDef", "reason"], ["matColumnDef", "remark"], [4, "matHeaderRowDef", "matHeaderRowDefSticky"], [4, "matRowDef", "matRowDefColumns"], [3, "value"], ["matInput", "", "placeholder", "Vendor Name", "name", "vendor", "required", "", 3, "ngModel", "ngModelChange"], [1, "first"], ["matInput", "", "type", "text", "required", "", 3, "name", "ngModel", "ngModelChange"], ["modeOfTransport", "ngModel"], ["description", "ngModel"], ["matInput", "", "type", "number", "required", "", 3, "name", "ngModel", "ngModelChange"], ["quantity", "ngModel"], ["required", "", 3, "ngModel", "name", "ngModelChange"], ["unit", "ngModel"], ["issuedTo", "ngModel"], ["matInput", "", "required", "", "readonly", "true", 3, "matDatepicker", "ngModel", "name", "ngModelChange"], ["dateOfReturn", "ngModel"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["from", "ngModel"], ["to", "ngModel"], ["reason", "ngModel"], ["remark", "ngModel"]],
        template: function GatePassComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Material Gate Pass Creation Form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", null, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GatePassComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.createForm.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GatePassComponent_Template_mat_select_ngModelChange_15_listener($event) {
              return ctx.createForm.selectedDepartment._id = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GatePassComponent_mat_option_16_Template, 2, 2, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GatePassComponent_Template_mat_select_ngModelChange_21_listener($event) {
              return ctx.createForm.selectedProject._id = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, GatePassComponent_mat_option_22_Template, 2, 2, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-select", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GatePassComponent_Template_mat_select_ngModelChange_27_listener($event) {
              return ctx.createForm.selectedType = $event;
            })("valueChange", function GatePassComponent_Template_mat_select_valueChange_27_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

              return ctx.dateFunc(_r3.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, GatePassComponent_mat_option_29_Template, 2, 2, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Owner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GatePassComponent_Template_mat_select_ngModelChange_34_listener($event) {
              return ctx.createForm.selectedOwner = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, GatePassComponent_mat_option_35_Template, 2, 2, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Movement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GatePassComponent_Template_mat_select_ngModelChange_40_listener($event) {
              return ctx.createForm.selectedMovement = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, GatePassComponent_mat_option_41_Template, 2, 2, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Gate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GatePassComponent_Template_mat_select_ngModelChange_46_listener($event) {
              return ctx.createForm.selectedGate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, GatePassComponent_mat_option_47_Template, 2, 2, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Receiver");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GatePassComponent_Template_input_ngModelChange_52_listener($event) {
              return ctx.createForm.receiver = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Firm Represented");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GatePassComponent_Template_input_ngModelChange_57_listener($event) {
              return ctx.createForm.firm = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, GatePassComponent_mat_grid_tile_58_Template, 5, 1, "mat-grid-tile", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GatePassComponent_Template_button_click_59_listener() {
              return ctx.onSubmitFunc();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GatePassComponent_Template_button_click_62_listener() {
              return ctx.addRow();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Add row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GatePassComponent_Template_button_click_64_listener() {
              return ctx.deleteRow();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Delete row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-table", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](68, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, GatePassComponent_mat_header_cell_69_Template, 2, 0, "mat-header-cell", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, GatePassComponent_mat_cell_70_Template, 2, 1, "mat-cell", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](71, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, GatePassComponent_mat_header_cell_72_Template, 2, 0, "mat-header-cell", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, GatePassComponent_mat_cell_73_Template, 4, 2, "mat-cell", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](74, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, GatePassComponent_mat_header_cell_75_Template, 2, 0, "mat-header-cell", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, GatePassComponent_mat_cell_76_Template, 4, 2, "mat-cell", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](77, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, GatePassComponent_mat_header_cell_78_Template, 2, 0, "mat-header-cell", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, GatePassComponent_mat_cell_79_Template, 4, 2, "mat-cell", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](80, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, GatePassComponent_mat_header_cell_81_Template, 2, 0, "mat-header-cell", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, GatePassComponent_mat_cell_82_Template, 5, 3, "mat-cell", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](83, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, GatePassComponent_mat_header_cell_84_Template, 2, 0, "mat-header-cell", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, GatePassComponent_mat_cell_85_Template, 4, 2, "mat-cell", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](86, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, GatePassComponent_mat_header_cell_87_Template, 2, 0, "mat-header-cell", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, GatePassComponent_mat_cell_88_Template, 6, 4, "mat-cell", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](89, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, GatePassComponent_mat_header_cell_90_Template, 2, 0, "mat-header-cell", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, GatePassComponent_mat_cell_91_Template, 4, 2, "mat-cell", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](92, 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, GatePassComponent_mat_header_cell_93_Template, 2, 0, "mat-header-cell", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, GatePassComponent_mat_cell_94_Template, 4, 2, "mat-cell", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](95, 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, GatePassComponent_mat_header_cell_96_Template, 2, 0, "mat-header-cell", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, GatePassComponent_mat_cell_97_Template, 4, 2, "mat-cell", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](98, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, GatePassComponent_mat_header_cell_99_Template, 2, 0, "mat-header-cell", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, GatePassComponent_mat_cell_100_Template, 4, 2, "mat-cell", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, GatePassComponent_mat_header_row_101_Template, 1, 0, "mat-header-row", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, GatePassComponent_mat_row_102_Template, 1, 1, "mat-row", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("ngModel", ctx.createForm.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.createForm.selectedDepartment._id)("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.departments);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.createForm.selectedProject._id)("disabled", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.createForm.selectedType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.createForm.selectedOwner);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.owners);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.createForm.selectedMovement);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movements);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.createForm.selectedGate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gates);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.createForm.receiver);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.createForm.firm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createForm.selectedOwner == ctx.owners[1].viewValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.gatePasses.length == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dsGatePass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.dcGatePass)("matHeaderRowDefSticky", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.dcGatePass);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTile"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepicker"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        styles: ["h1[_ngcontent-%COMP%]{\r\n  margin: 1%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nmat-cell[_ngcontent-%COMP%] {\r\n  margin-right:1rem;\r\n\r\n}\r\nmat-cell[_ngcontent-%COMP%]:first-of-type, mat-header-cell[_ngcontent-%COMP%]:first-of-type, mat-footer-cell[_ngcontent-%COMP%]:first-of-type {\r\n  padding-left: 0;\r\n}\r\n.first[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.last[_ngcontent-%COMP%] {\r\n  margin-right: 1rem;\r\n}\r\nmat-header-cell[_ngcontent-%COMP%] {\r\n  \r\n  display: flex;\r\n  justify-content: center;\r\n  background: #3f51b5;\r\n  color: #fff;\r\n}\r\n.example-container[_ngcontent-%COMP%] {\r\n  \r\n  max-height: 500px;\r\n  min-width: 300px;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n.create-card[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n.mat-table[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  max-height: 460px;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  margin: 1rem;\r\n}\r\nfieldset[_ngcontent-%COMP%] {\r\n  border: 0;\r\n}\r\n.general-button[_ngcontent-%COMP%]  {\r\n  float: right;\r\n}\r\n.row-button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2F0ZS1wYXNzL2dhdGUtcGFzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQTs7OztHQUlHO0FBQ0g7RUFDRSxpQkFBaUI7O0FBRW5CO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFDQTtFQUNFOzJCQUN5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9nYXRlLXBhc3MvZ2F0ZS1wYXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICBtYXJnaW46IDElO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLyogbWF0LWdyaWQtbGlzdHtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgYm9yZGVyOiBzb2xpZCAjM2Y1MWI1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0gKi9cclxubWF0LWNlbGwge1xyXG4gIG1hcmdpbi1yaWdodDoxcmVtO1xyXG5cclxufVxyXG5tYXQtY2VsbDpmaXJzdC1vZi10eXBlLCBtYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSwgbWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4uZmlyc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmxhc3Qge1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIC8qIG1hcmdpbjogMXJlbSAwIDAgMDsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAvKiBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5jcmVhdGUtY2FyZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4ubWF0LXRhYmxlIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtYXgtaGVpZ2h0OiA0NjBweDtcclxufVxyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLmdlbmVyYWwtYnV0dG9uICB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ucm93LWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbiJdfQ== */"],
        data: {
          animation: [_animations_template_animations__WEBPACK_IMPORTED_MODULE_1__["rowsAnimation"]]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GatePassComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-gate-pass',
            templateUrl: './gate-pass.component.html',
            styleUrls: ['./gate-pass.component.css'],
            animations: [_animations_template_animations__WEBPACK_IMPORTED_MODULE_1__["rowsAnimation"]]
          }]
        }], function () {
          return [{
            type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }];
        }, null);
      })(); // authorized:{_id: null, name: null, empId:null, password: null, selectedProject: null, selectedGrade: null, selectedDepartment: null, selectedAuthorization:null, selectedCreation: null }


      var GpCreatedComponent = function GpCreatedComponent() {
        _classCallCheck(this, GpCreatedComponent);
      };

      GpCreatedComponent.ɵfac = function GpCreatedComponent_Factory(t) {
        return new (t || GpCreatedComponent)();
      };

      GpCreatedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GpCreatedComponent,
        selectors: [["snack-bar-component-gpCreated"]],
        decls: 4,
        vars: 0,
        consts: [[1, "gp-created"], ["aria-hidden", "false", "aria-label", "Party Icon"]],
        template: function GpCreatedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "done_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Gate Pass Created Successfully!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"]],
        styles: [".gp-created[_ngcontent-%COMP%] {\n      color: hotpink;\n    }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GpCreatedComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'snack-bar-component-gpCreated',
            templateUrl: 'snack-bar-component-gpCreated.html',
            styles: ["\n    .gp-created {\n      color: hotpink;\n    }\n  "]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/gatepass-search/gatepass-search.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/gatepass-search/gatepass-search.component.ts ***!
      \**************************************************************/

    /*! exports provided: GatepassSearchComponent */

    /***/
    function srcAppGatepassSearchGatepassSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GatepassSearchComponent", function () {
        return GatepassSearchComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_print_print_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/print/print.service */
      "./src/app/services/print/print.service.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      function GatepassSearchComponent_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function GatepassSearchComponent_mat_option_7_Template_mat_option_onSelectionChange_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var gatePass_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.selectFunc(gatePass_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var gatePass_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", gatePass_r3.gatePassNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", gatePass_r3.gatePassNo, " ", gatePass_r3.createForm.name, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, gatePass_r3.createdAt), " ");
        }
      }

      var GatepassSearchComponent = /*#__PURE__*/function () {
        function GatepassSearchComponent(userService, router, printService) {
          _classCallCheck(this, GatepassSearchComponent);

          this.userService = userService;
          this.router = router;
          this.printService = printService;
          this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(GatepassSearchComponent, [{
          key: "search",
          value: function search(term) {
            this.searchTerms.next(term);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.gatePasses$ = this.searchTerms.pipe( // wait 300ms after each keystroke before considering the term
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), // ignore new term if same as previous term
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), // switch to new search observable each time the term changes
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) {
              return _this16.userService.searchGatePasses(term, _this16.print, _this16.project);
            })); // this.userFunc();
          }
        }, {
          key: "selectFunc",
          value: function selectFunc(gpArray) {
            if (this.print === '1') {
              this.printService.generatePdf(gpArray, 'Print');
            } else {
              this.userService.selectedGpArray = gpArray;
              this.userService.storeGpArray(gpArray.gatePassNo);
              this.router.navigate(['return']);
            }
          }
        }]);

        return GatepassSearchComponent;
      }();

      GatepassSearchComponent.ɵfac = function GatepassSearchComponent_Factory(t) {
        return new (t || GatepassSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_print_print_service__WEBPACK_IMPORTED_MODULE_5__["PrintService"]));
      };

      GatepassSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GatepassSearchComponent,
        selectors: [["app-gatepass-search"]],
        inputs: {
          print: "print",
          project: "project"
        },
        decls: 9,
        vars: 4,
        consts: [["appearance", "standard"], ["matInput", "", "type", "number", "placeholder", "Search By Gate Pass No.", "aria-label", "Number", "matInput", "", 3, "matAutocomplete", "input"], ["searchBox", ""], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [3, "value", "onSelectionChange"]],
        template: function GatepassSearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search Gate Pass");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function GatepassSearchComponent_Template_input_input_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

              return ctx.search(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-autocomplete", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GatepassSearchComponent_mat_option_7_Template, 3, 6, "mat-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, ctx.gatePasses$));
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
        styles: ["mat-form-field[_ngcontent-%COMP%] {\r\n  width:275px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2F0ZXBhc3Mtc2VhcmNoL2dhdGVwYXNzLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRzs7QUFFSDtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2dhdGVwYXNzLXNlYXJjaC9nYXRlcGFzcy1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIG1hdC1mb3JtLWZpZWxke1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufSAqL1xyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOjI3NXB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GatepassSearchComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-gatepass-search',
            templateUrl: './gatepass-search.component.html',
            styleUrls: ['./gatepass-search.component.css']
          }]
        }], function () {
          return [{
            type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _services_print_print_service__WEBPACK_IMPORTED_MODULE_5__["PrintService"]
          }];
        }, {
          print: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          project: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/guards/auth.guard.ts":
    /*!**************************************!*\
      !*** ./src/app/guards/auth.guard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user/user.service */
      "./src/app/services/user/user.service.ts");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, userService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.userService = userService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var user = this.userService.loggedIn;

            if (user) {
              return true;
            }

            this.router.navigate(['/login']);
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/guards/authorize.guard.ts":
    /*!*******************************************!*\
      !*** ./src/app/guards/authorize.guard.ts ***!
      \*******************************************/

    /*! exports provided: AuthorizeGuard */

    /***/
    function srcAppGuardsAuthorizeGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorizeGuard", function () {
        return AuthorizeGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user/user.service */
      "./src/app/services/user/user.service.ts");

      var AuthorizeGuard = /*#__PURE__*/function () {
        function AuthorizeGuard(router, userService) {
          _classCallCheck(this, AuthorizeGuard);

          this.router = router;
          this.userService = userService;
        }

        _createClass(AuthorizeGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var user = this.userService.loggedIn;

            if (user.selectedAuthorization) {
              return true;
            }

            this.router.navigate(['home']);
            return false;
          }
        }]);

        return AuthorizeGuard;
      }();

      AuthorizeGuard.ɵfac = function AuthorizeGuard_Factory(t) {
        return new (t || AuthorizeGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
      };

      AuthorizeGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthorizeGuard,
        factory: AuthorizeGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorizeGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/guards/create.guard.ts":
    /*!****************************************!*\
      !*** ./src/app/guards/create.guard.ts ***!
      \****************************************/

    /*! exports provided: CreateGuard */

    /***/
    function srcAppGuardsCreateGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateGuard", function () {
        return CreateGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user/user.service */
      "./src/app/services/user/user.service.ts");

      var CreateGuard = /*#__PURE__*/function () {
        function CreateGuard(router, userService) {
          _classCallCheck(this, CreateGuard);

          this.router = router;
          this.userService = userService;
        }

        _createClass(CreateGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var user = this.userService.loggedIn;

            if (user.selectedCreation) {
              return true;
            }

            this.router.navigate(['home']);
            return false;
          }
        }]);

        return CreateGuard;
      }();

      CreateGuard.ɵfac = function CreateGuard_Factory(t) {
        return new (t || CreateGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
      };

      CreateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CreateGuard,
        factory: CreateGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/guards/login.guard.ts":
    /*!***************************************!*\
      !*** ./src/app/guards/login.guard.ts ***!
      \***************************************/

    /*! exports provided: LoginGuard */

    /***/
    function srcAppGuardsLoginGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginGuard", function () {
        return LoginGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user/user.service */
      "./src/app/services/user/user.service.ts");

      var LoginGuard = /*#__PURE__*/function () {
        function LoginGuard(router, userService) {
          _classCallCheck(this, LoginGuard);

          this.router = router;
          this.userService = userService;
        }

        _createClass(LoginGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var user = this.userService.loggedIn;

            if (user) {
              this.router.navigate(['home']);
              return false;
            }

            return true;
          }
        }]);

        return LoginGuard;
      }();

      LoginGuard.ɵfac = function LoginGuard_Factory(t) {
        return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
      };

      LoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoginGuard,
        factory: LoginGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/guards/role.guard.ts":
    /*!**************************************!*\
      !*** ./src/app/guards/role.guard.ts ***!
      \**************************************/

    /*! exports provided: RoleGuard */

    /***/
    function srcAppGuardsRoleGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleGuard", function () {
        return RoleGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user/user.service */
      "./src/app/services/user/user.service.ts");

      var RoleGuard = /*#__PURE__*/function () {
        function RoleGuard(router, userService) {
          _classCallCheck(this, RoleGuard);

          this.router = router;
          this.userService = userService;
        }

        _createClass(RoleGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var user = this.userService.loggedIn;

            if (user.selectedUserType === 'Admin' || user.selectedUserType === 'Super Admin') {
              return true;
            }

            this.router.navigate(['home']);
            return false;
          }
        }]);

        return RoleGuard;
      }();

      RoleGuard.ɵfac = function RoleGuard_Factory(t) {
        return new (t || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
      };

      RoleGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RoleGuard,
        factory: RoleGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/guards/super-admin.guard.ts":
    /*!*********************************************!*\
      !*** ./src/app/guards/super-admin.guard.ts ***!
      \*********************************************/

    /*! exports provided: SuperAdminGuard */

    /***/
    function srcAppGuardsSuperAdminGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuperAdminGuard", function () {
        return SuperAdminGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user/user.service */
      "./src/app/services/user/user.service.ts");

      var SuperAdminGuard = /*#__PURE__*/function () {
        function SuperAdminGuard(router, userService) {
          _classCallCheck(this, SuperAdminGuard);

          this.router = router;
          this.userService = userService;
        }

        _createClass(SuperAdminGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var user = this.userService.loggedIn;

            if (user.selectedUserType === 'Super Admin') {
              return true;
            }

            this.router.navigate(['home']);
            return false;
          }
        }]);

        return SuperAdminGuard;
      }();

      SuperAdminGuard.ɵfac = function SuperAdminGuard_Factory(t) {
        return new (t || SuperAdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
      };

      SuperAdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SuperAdminGuard,
        factory: SuperAdminGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuperAdminGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/home/home.component.ts":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _animations_template_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../animations/template.animations */
      "./src/app/animations/template.animations.ts");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(userService, router) {
          _classCallCheck(this, HomeComponent);

          this.userService = userService;
          this.router = router;
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 2,
        vars: 2,
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Welcome ", ctx.userService.loggedIn.name, " to the NTPC ", ctx.userService.loggedIn.selectedProject.viewValue, " Material Gate Pass System");
          }
        },
        styles: ["h1[_ngcontent-%COMP%] {\r\n  margin: 1%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.home-image[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n\r\n\r\n  \r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7OztFQUdYLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICBtYXJnaW46IDElO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ob21lLWltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcblxyXG4gIC8qIHotaW5kZXg6IC0xOyAqL1xyXG4gIC8qIG9iamVjdC1maXQ6IGNvbnRhaW47ICovXHJcbn1cclxuIl19 */"],
        data: {
          animation: [_animations_template_animations__WEBPACK_IMPORTED_MODULE_1__["rowsAnimation"]]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            animations: [_animations_template_animations__WEBPACK_IMPORTED_MODULE_1__["rowsAnimation"]]
          }]
        }], function () {
          return [{
            type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/inbox/inbox.component.ts":
    /*!******************************************!*\
      !*** ./src/app/inbox/inbox.component.ts ***!
      \******************************************/

    /*! exports provided: InboxComponent */

    /***/
    function srcAppInboxInboxComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InboxComponent", function () {
        return InboxComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _animations_template_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../animations/template.animations */
      "./src/app/animations/template.animations.ts");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

      function InboxComponent_div_2_mat_header_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gate Pass No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_2_mat_cell_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r30.id, " ");
        }
      }

      function InboxComponent_div_2_mat_header_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " S.No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_2_mat_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r31.sno, " ");
        }
      }

      function InboxComponent_div_2_mat_header_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Department ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_2_mat_cell_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r32.department, " ");
        }
      }

      function InboxComponent_div_2_mat_header_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Quantity ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_2_mat_cell_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r33.quantity, " ");
        }
      }

      function InboxComponent_div_2_mat_header_cell_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_2_mat_cell_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r34.unit.viewValue, " ");
        }
      }

      function InboxComponent_div_2_mat_header_cell_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date Of Creation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_2_mat_cell_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r35.dateOfCreation), " ");
        }
      }

      function InboxComponent_div_2_mat_header_cell_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Due Date Of Return ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_2_mat_cell_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r36.dueDateOfReturn), " ");
        }
      }

      function InboxComponent_div_2_mat_header_cell_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Created By ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_2_mat_cell_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r37.createdBy, " ");
        }
      }

      function InboxComponent_div_2_mat_header_cell_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Material Owner ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_2_mat_cell_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r38.owner, " ");
        }
      }

      function InboxComponent_div_2_mat_header_cell_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Movement ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_2_mat_cell_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r39.movement, " ");
        }
      }

      function InboxComponent_div_2_mat_header_cell_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_2_mat_cell_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r40.status, " ");
        }
      }

      function InboxComponent_div_2_mat_header_cell_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Material Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_2_mat_cell_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r41.description, " ");
        }
      }

      function InboxComponent_div_2_mat_header_row_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function InboxComponent_div_2_mat_row_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-row", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_div_2_mat_row_46_Template_mat_row_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

            var row_r42 = ctx.$implicit;

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r43.getRecord(row_r42);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rowsAnimation", undefined);
        }
      }

      function InboxComponent_div_2_tr_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r2.value, "\"");
        }
      }

      function InboxComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pending for Authorization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function InboxComponent_div_2_Template_input_keyup_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r45.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InboxComponent_div_2_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InboxComponent_div_2_mat_cell_11_Template, 2, 1, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InboxComponent_div_2_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InboxComponent_div_2_mat_cell_14_Template, 2, 1, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, InboxComponent_div_2_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, InboxComponent_div_2_mat_cell_17_Template, 2, 1, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, InboxComponent_div_2_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InboxComponent_div_2_mat_cell_20_Template, 2, 1, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, InboxComponent_div_2_mat_header_cell_22_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, InboxComponent_div_2_mat_cell_23_Template, 2, 1, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, InboxComponent_div_2_mat_header_cell_25_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, InboxComponent_div_2_mat_cell_26_Template, 3, 3, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, InboxComponent_div_2_mat_header_cell_28_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, InboxComponent_div_2_mat_cell_29_Template, 3, 3, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, InboxComponent_div_2_mat_header_cell_31_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, InboxComponent_div_2_mat_cell_32_Template, 2, 1, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, InboxComponent_div_2_mat_header_cell_34_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, InboxComponent_div_2_mat_cell_35_Template, 2, 1, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](36, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, InboxComponent_div_2_mat_header_cell_37_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, InboxComponent_div_2_mat_cell_38_Template, 2, 1, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](39, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, InboxComponent_div_2_mat_header_cell_40_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, InboxComponent_div_2_mat_cell_41_Template, 2, 1, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](42, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, InboxComponent_div_2_mat_header_cell_43_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, InboxComponent_div_2_mat_cell_44_Template, 2, 1, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, InboxComponent_div_2_mat_header_row_45_Template, 1, 0, "mat-header-row", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, InboxComponent_div_2_mat_row_46_Template, 1, 1, "mat-row", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, InboxComponent_div_2_tr_47_Template, 3, 1, "tr", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns)("matHeaderRowDefSticky", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
        }
      }

      function InboxComponent_div_3_mat_header_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gate Pass No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_3_mat_cell_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r75 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r75.id, " ");
        }
      }

      function InboxComponent_div_3_mat_header_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " S.No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_3_mat_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r76 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r76.sno, " ");
        }
      }

      function InboxComponent_div_3_mat_header_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Department ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_3_mat_cell_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r77 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r77.department, " ");
        }
      }

      function InboxComponent_div_3_mat_header_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Quantity ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_3_mat_cell_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r78 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r78.quantity, " ");
        }
      }

      function InboxComponent_div_3_mat_header_cell_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_3_mat_cell_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r79 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r79.unit.viewValue, " ");
        }
      }

      function InboxComponent_div_3_mat_header_cell_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date Of Creation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_3_mat_cell_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r80 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r80.dateOfCreation), " ");
        }
      }

      function InboxComponent_div_3_mat_header_cell_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Due Date Of Return ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_3_mat_cell_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r81 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r81.dueDateOfReturn), " ");
        }
      }

      function InboxComponent_div_3_mat_header_cell_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Created By ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_3_mat_cell_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r82 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r82.createdBy, " ");
        }
      }

      function InboxComponent_div_3_mat_header_cell_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Material Owner ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_3_mat_cell_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r83 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r83.owner, " ");
        }
      }

      function InboxComponent_div_3_mat_header_cell_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Movement ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_3_mat_cell_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r84 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r84.movement, " ");
        }
      }

      function InboxComponent_div_3_mat_header_cell_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_3_mat_cell_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r85 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r85.status, " ");
        }
      }

      function InboxComponent_div_3_mat_header_cell_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Material Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InboxComponent_div_3_mat_cell_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r86 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r86.description, " ");
        }
      }

      function InboxComponent_div_3_mat_header_row_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function InboxComponent_div_3_mat_row_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-row", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_div_3_mat_row_46_Template_mat_row_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

            var row_r87 = ctx.$implicit;

            var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r88.authGetRecord(row_r87);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rowsAnimation", undefined);
        }
      }

      function InboxComponent_div_3_tr_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r47.value, "\"");
        }
      }

      function InboxComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Authorized");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function InboxComponent_div_3_Template_input_keyup_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

            var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r90.authApplyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InboxComponent_div_3_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InboxComponent_div_3_mat_cell_11_Template, 2, 1, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InboxComponent_div_3_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InboxComponent_div_3_mat_cell_14_Template, 2, 1, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, InboxComponent_div_3_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, InboxComponent_div_3_mat_cell_17_Template, 2, 1, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, InboxComponent_div_3_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InboxComponent_div_3_mat_cell_20_Template, 2, 1, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, InboxComponent_div_3_mat_header_cell_22_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, InboxComponent_div_3_mat_cell_23_Template, 2, 1, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, InboxComponent_div_3_mat_header_cell_25_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, InboxComponent_div_3_mat_cell_26_Template, 3, 3, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, InboxComponent_div_3_mat_header_cell_28_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, InboxComponent_div_3_mat_cell_29_Template, 3, 3, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, InboxComponent_div_3_mat_header_cell_31_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, InboxComponent_div_3_mat_cell_32_Template, 2, 1, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, InboxComponent_div_3_mat_header_cell_34_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, InboxComponent_div_3_mat_cell_35_Template, 2, 1, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](36, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, InboxComponent_div_3_mat_header_cell_37_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, InboxComponent_div_3_mat_cell_38_Template, 2, 1, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](39, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, InboxComponent_div_3_mat_header_cell_40_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, InboxComponent_div_3_mat_cell_41_Template, 2, 1, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](42, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, InboxComponent_div_3_mat_header_cell_43_Template, 2, 0, "mat-header-cell", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, InboxComponent_div_3_mat_cell_44_Template, 2, 1, "mat-cell", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, InboxComponent_div_3_mat_header_row_45_Template, 1, 0, "mat-header-row", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, InboxComponent_div_3_mat_row_46_Template, 1, 1, "mat-row", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, InboxComponent_div_3_tr_47_Template, 3, 1, "tr", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r1.authDataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns)("matHeaderRowDefSticky", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r1.authDisplayedColumns);
        }
      }

      var InboxComponent = /*#__PURE__*/function () {
        function InboxComponent(userService, dialog, router) {
          _classCallCheck(this, InboxComponent);

          this.userService = userService;
          this.dialog = dialog;
          this.router = router;
          this.displayedColumns = ['id', 'sno', 'description', 'quantity', 'unit', 'dateOfCreation', 'dueDateOfReturn', 'department', 'createdBy', 'owner', 'movement', 'status'];
          this.authDisplayedColumns = ['id', 'sno', 'description', 'quantity', 'unit', 'dateOfCreation', 'dueDateOfReturn', 'department', 'createdBy', 'owner', 'movement', 'status'];
          this.searchTableData = [];
          this.authSearchTableData = [];
          this.loggedIn = this.userService.loggedIn; // getGpArray() {
          //   console.log(this.userService.gpArrays)
          //   if (this.userService.gpArrays == undefined) {
          //     this.refreshFilter();
          //   }
          //   else {
          //     this.gpArrays = this.userService.gpArrays;
          //     this.filterData(this.gpArrays)
          //     this.dataSource = new MatTableDataSource(this.searchTableData);
          //   }
          // }

          this.authToId = [];
          this.pendingBool = false;
          this.authBool = false;
        }

        _createClass(InboxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getGpArray();
            this.getAuthGpArray();
          }
        }, {
          key: "filterData",
          value: function filterData(gpArrays) {
            var _iterator3 = _createForOfIteratorHelper(gpArrays),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var gp = _step3.value;

                var _iterator4 = _createForOfIteratorHelper(gp.gatePass),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var tableRow = _step4.value;

                    if (tableRow.sno == 1) {
                      this.searchTableData.push({
                        id: gp.gatePassNo,
                        sno: tableRow.sno,
                        quantity: tableRow.quantity,
                        unit: tableRow.unit,
                        dateOfCreation: gp.createdAt,
                        dueDateOfReturn: tableRow.dateOfReturn,
                        department: gp.createForm.selectedDepartment.viewValue,
                        createdBy: gp.createdBy.name,
                        owner: gp.createForm.selectedOwner,
                        movement: gp.createForm.selectedMovement,
                        status: gp.status,
                        description: tableRow.description
                      });
                    } else {
                      this.searchTableData.push({
                        vId: gp.gatePassNo,
                        sno: tableRow.sno,
                        quantity: tableRow.quantity,
                        unit: tableRow.unit,
                        dateOfCreation: gp.createdAt,
                        dueDateOfReturn: tableRow.dateOfReturn,
                        department: gp.createForm.selectedDepartment.viewValue,
                        createdBy: gp.createdBy.name,
                        owner: gp.createForm.selectedOwner,
                        movement: gp.createForm.selectedMovement,
                        status: gp.status,
                        description: tableRow.description
                      });
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }, {
          key: "authFilterData",
          value: function authFilterData(gpArrays) {
            var _iterator5 = _createForOfIteratorHelper(gpArrays),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var gp = _step5.value;

                var _iterator6 = _createForOfIteratorHelper(gp.gatePass),
                    _step6;

                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var tableRow = _step6.value;

                    if (tableRow.sno == 1) {
                      this.authSearchTableData.push({
                        id: gp.gatePassNo,
                        sno: tableRow.sno,
                        quantity: tableRow.quantity,
                        unit: tableRow.unit,
                        dateOfCreation: gp.createdAt,
                        dueDateOfReturn: tableRow.dateOfReturn,
                        department: gp.createForm.selectedDepartment.viewValue,
                        createdBy: gp.createdBy.name,
                        owner: gp.createForm.selectedOwner,
                        movement: gp.createForm.selectedMovement,
                        status: gp.status,
                        description: tableRow.description
                      });
                    } else {
                      this.authSearchTableData.push({
                        vId: gp.gatePassNo,
                        sno: tableRow.sno,
                        quantity: tableRow.quantity,
                        unit: tableRow.unit,
                        dateOfCreation: gp.createdAt,
                        dueDateOfReturn: tableRow.dateOfReturn,
                        department: gp.createForm.selectedDepartment.viewValue,
                        createdBy: gp.createdBy.name,
                        owner: gp.createForm.selectedOwner,
                        movement: gp.createForm.selectedMovement,
                        status: gp.status,
                        description: tableRow.description
                      });
                    }
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        }, {
          key: "getRecord",
          value: function getRecord(row) {
            var _this17 = this;

            row.id == null ? this.rId = row.vId : this.rId = row.id;
            var gp = this.gpArrays.find(function (gp) {
              return gp.gatePassNo == _this17.rId;
            });
            this.onSelect(gp); // for(const gp of this.gpArrays) {
            //   if(gp.gatePassNo === this.rId) {
            //     this.onSelect(gp);
            //     console.log(gp);
            //     break;
            //   }
            // }
          }
        }, {
          key: "authGetRecord",
          value: function authGetRecord(row) {
            var _this18 = this;

            row.id == null ? this.aRId = row.vId : this.aRId = row.id;
            var gp = this.authGpArrays.find(function (gp) {
              return gp.gatePassNo == _this18.aRId;
            });
            this.onSelect(gp); // for(const gp of this.gpArrays) {
            //   if(gp.gatePassNo === this.rId) {
            //     this.onSelect(gp);
            //     console.log(gp);
            //     break;
            //   }
            // }
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "authApplyFilter",
          value: function authApplyFilter(event) {
            var filterValue = event.target.value;
            this.authDataSource.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "getGpArray",
          value: function getGpArray() {
            var _this19 = this;

            this.loggedIn.authorizedTo.forEach(function (authTo) {
              _this19.authToId.push(authTo._id);
            });
            console.log(this.authToId);
            this.userService.getInboxGpArray(this.authToId).subscribe(function (gpArrays) {
              _this19.gpArrays = gpArrays;

              if (_this19.gpArrays.length > 0) {
                _this19.pendingBool = true;
              }

              _this19.filterData(gpArrays);

              _this19.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this19.searchTableData);
            });
          }
        }, {
          key: "getAuthGpArray",
          value: function getAuthGpArray() {
            var _this20 = this;

            this.userService.getInboxAuthGpArray(this.loggedIn._id).subscribe(function (authGpArrays) {
              console.log(authGpArrays);
              _this20.authGpArrays = authGpArrays;

              if (_this20.authGpArrays.length > 0) {
                _this20.authBool = true;
              }

              _this20.authFilterData(authGpArrays);

              _this20.authDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this20.authSearchTableData);
            });
          }
        }, {
          key: "onSelect",
          value: function onSelect(gpArray) {
            this.userService.selectedGpArray = gpArray;
            this.userService.storeGpArray(gpArray.gatePassNo);
            this.router.navigate(['return']);
          }
        }, {
          key: "getUnits",
          value: function getUnits() {
            var _this21 = this;

            this.userService.getUnits().subscribe(function (units) {
              return _this21.Units = units;
            });
          }
        }]);

        return InboxComponent;
      }();

      InboxComponent.ɵfac = function InboxComponent_Factory(t) {
        return new (t || InboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      InboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InboxComponent,
        selectors: [["app-inbox"]],
        decls: 4,
        vars: 2,
        consts: [[4, "ngIf"], [1, "filter"], ["matInput", "", "placeholder", "search term", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "example-container", "searchTable", 3, "dataSource"], ["matColumnDef", "id"], [4, "matHeaderCellDef"], ["class", "search-table-mat-cell", 4, "matCellDef"], ["matColumnDef", "sno"], ["matColumnDef", "department"], ["matColumnDef", "quantity"], ["matColumnDef", "unit"], ["matColumnDef", "dateOfCreation"], ["matColumnDef", "dueDateOfReturn"], ["matColumnDef", "createdBy"], ["matColumnDef", "owner"], ["matColumnDef", "movement"], ["matColumnDef", "status"], ["matColumnDef", "description"], [4, "matHeaderRowDef", "matHeaderRowDefSticky"], [3, "click", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [1, "search-table-mat-cell"], [3, "click"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"], ["authInput", ""]],
        template: function InboxComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Gate Pass Inbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InboxComponent_div_2_Template, 48, 4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InboxComponent_div_3_Template, 48, 4, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pendingBool);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authBool);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatNoDataRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
        styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n.row-button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.row-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-right: 1rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{\r\n  margin: 1%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n\r\nli[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n\r\nmat-cell[_ngcontent-%COMP%] {\r\n  margin-right:1rem;\r\n\r\n}\r\n\r\n.row-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-right: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nmat-cell[_ngcontent-%COMP%]:first-of-type, mat-header-cell[_ngcontent-%COMP%]:first-of-type, mat-footer-cell[_ngcontent-%COMP%]:first-of-type {\r\n  padding-left: 0;\r\n}\r\n\r\n.first[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.last[_ngcontent-%COMP%] {\r\n  margin-right: 1rem;\r\n}\r\n\r\n.search-table-mat-cell[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.searchTable[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%] {\r\n  transition: 0.5s;\r\n}\r\n\r\n.searchTable[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  \r\n  background: #FF4081;\r\n\r\n}\r\n\r\n.searchTable[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]:hover   .mat-cell[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%] {\r\n  background: #FF4081;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n\r\n.chk-box[_ngcontent-%COMP%] {\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n.chk-box-header[_ngcontent-%COMP%]     .mat-checkbox-frame{\r\n  border-color: white\r\n}\r\n\r\nmat-header-cell[_ngcontent-%COMP%] {\r\n  \r\n  display: flex;\r\n  justify-content: center;\r\n  background: #3f51b5;\r\n  color: #fff;\r\n}\r\n\r\n\r\n\r\nmat-grid-tile[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nmat-label[_ngcontent-%COMP%] {\r\n  color: rgba(0, 0, 0, 0.54);\r\n}\r\n\r\n.example-container[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  min-width: 300px;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.create-card[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.mat-table[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n}\r\n\r\n\r\n\r\n.general-button[_ngcontent-%COMP%]  {\r\n  float: right;\r\n}\r\n\r\n.row-button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.user-card[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  background: #3f51b5;\r\n  color: #fff;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ib3gvaW5ib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7O0dBR0c7O0FBRUg7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUNBOzs7O0dBSUc7O0FBR0Y7RUFDQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUNDO0VBQ0MsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFHQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUNBOzs7R0FHRzs7QUFDSDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRTsyQkFDeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7O0dBRUc7O0FBRUg7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9pbmJveC9pbmJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKiAubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxufSAqL1xyXG5cclxuLnJvdy1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnJvdy1idXR0b24gYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuaDEsIGgye1xyXG4gIG1hcmdpbjogMSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4vKiBtYXQtZ3JpZC1saXN0e1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBib3JkZXI6IHNvbGlkICMzZjUxYjU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufSAqL1xyXG5cclxuXHJcbiBsaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgbWFyZ2luOiAuNWVtO1xyXG4gIHBhZGRpbmc6IC4zZW0gMDtcclxuICBoZWlnaHQ6IDEuNmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4gbGk6aG92ZXIge1xyXG4gIGNvbG9yOiAjNjA3RDhCO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XHJcbiAgbGVmdDogLjFlbTtcclxufVxyXG5tYXQtY2VsbCB7XHJcbiAgbWFyZ2luLXJpZ2h0OjFyZW07XHJcblxyXG59XHJcblxyXG4ucm93LWJ1dHRvbiBidXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG5cclxubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSwgbWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUsIG1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuLmZpcnN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5sYXN0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcblxyXG4uc2VhcmNoLXRhYmxlLW1hdC1jZWxsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoVGFibGUgbWF0LXJvdyB7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLnNlYXJjaFRhYmxlIG1hdC1yb3c6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvKiBiYWNrZ3JvdW5kOiAjM2Y1MWI1NGQ7ICovXHJcbiAgYmFja2dyb3VuZDogI0ZGNDA4MTtcclxuXHJcbn1cclxuXHJcbi5zZWFyY2hUYWJsZSBtYXQtcm93OmhvdmVyIC5tYXQtY2VsbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZDogI0ZGNDA4MTtcclxufVxyXG5cclxuLnNlbGVjdGVkIC5tYXQtY2VsbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jaGstYm94IHtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG59XHJcblxyXG4uY2hrLWJveC1oZWFkZXIgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtZnJhbWV7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIC8qIG1hcmdpbjogMXJlbSAwIDAgMDsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLyogbWF0LWhlYWRlci1jZWxsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59ICovXHJcbm1hdC1ncmlkLXRpbGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5tYXQtbGFiZWwge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xyXG59XHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgLyogZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xyXG4gIC8qIG1heC1oZWlnaHQ6IDUwMHB4OyAqL1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4uY3JlYXRlLWNhcmQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLm1hdC10YWJsZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLyogYnV0dG9uIHtcclxuICBtYXJnaW46IDFyZW07XHJcbn0gKi9cclxuXHJcbi5nZW5lcmFsLWJ1dHRvbiAge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnJvdy1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnVzZXItY2FyZCB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5maWx0ZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcbiJdfQ== */"],
        data: {
          animation: [_animations_template_animations__WEBPACK_IMPORTED_MODULE_2__["rowsAnimation"]]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InboxComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-inbox',
            templateUrl: './inbox.component.html',
            styleUrls: ['./inbox.component.css'],
            animations: [_animations_template_animations__WEBPACK_IMPORTED_MODULE_2__["rowsAnimation"]]
          }]
        }], function () {
          return [{
            type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/login/login.component.ts":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, fb, userService) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this.fb = fb;
          this.userService = userService;
          this.hide = true;
          this.loginForm = this.fb.group({
            empId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.checkLogin();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(loginData) {
            var _this22 = this;

            if (!loginData) {
              return;
            }

            this.userService.loginUser(loginData).subscribe(function (user) {
              if (user) {
                // this.userService.loggedIn = user;
                _this22.router.navigate(['home']);
              }

              _this22.loginForm.reset();
            }, function (error) {
              alert('Login Failed');
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 22,
        vars: 6,
        consts: [[3, "formGroup", "ngSubmit"], [1, "login-card"], [1, "header"], [1, "row"], [1, "full-width"], ["matInput", "", "placeholder", "EmpId", "formControlName", "empId", "type", "text", "type", "number"], ["matInput", "", "placeholder", "Password", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], [1, "button"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["routerLink", "/register", 1, "register"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() {
              return ctx.onSubmit(ctx.loginForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_12_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-actions", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Register?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: ["[_nghost-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.login-card[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.register[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  text-decoration: none;\r\n  opacity: 0.85;\r\n  color: rgb(131, 131, 131);\r\n}\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFDQTs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubG9naW4tY2FyZCB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuLnJlZ2lzdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuODU7XHJcbiAgY29sb3I6IHJnYigxMzEsIDEzMSwgMTMxKTtcclxufVxyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/messages/messages.component.ts":
    /*!************************************************!*\
      !*** ./src/app/messages/messages.component.ts ***!
      \************************************************/

    /*! exports provided: MessagesComponent */

    /***/
    function srcAppMessagesMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
        return MessagesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_message_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/message/message.service */
      "./src/app/services/message/message.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function MessagesComponent_div_0_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r2, " ");
        }
      }

      function MessagesComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_div_0_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.messageService.clear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MessagesComponent_div_0_div_5_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.messageService.messages);
        }
      }

      var MessagesComponent = /*#__PURE__*/function () {
        function MessagesComponent(messageService) {
          _classCallCheck(this, MessagesComponent);

          this.messageService = messageService;
        }

        _createClass(MessagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MessagesComponent;
      }();

      MessagesComponent.ɵfac = function MessagesComponent_Factory(t) {
        return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_message_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]));
      };

      MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MessagesComponent,
        selectors: [["app-messages"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "clear", 3, "click"], [4, "ngFor", "ngForOf"]],
        template: function MessagesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessagesComponent_div_0_Template, 6, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageService.messages.length);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-messages',
            templateUrl: './messages.component.html',
            styleUrls: ['./messages.component.css']
          }]
        }], function () {
          return [{
            type: _services_message_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/page-not-found/page-not-found.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/page-not-found/page-not-found.component.ts ***!
      \************************************************************/

    /*! exports provided: PageNotFoundComponent */

    /***/
    function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
        return PageNotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PageNotFoundComponent = /*#__PURE__*/function () {
        function PageNotFoundComponent() {
          _classCallCheck(this, PageNotFoundComponent);
        }

        _createClass(PageNotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageNotFoundComponent;
      }();

      PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
        return new (t || PageNotFoundComponent)();
      };

      PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageNotFoundComponent,
        selectors: [["app-page-not-found"]],
        decls: 4,
        vars: 0,
        consts: [[1, "error"], [1, "header-text"]],
        template: function PageNotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u26A0\uFE0F 404");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "!!Page Not Found!!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.error[_ngcontent-%COMP%] {\r\n  color: red;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n}\r\n\r\n.header-text[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5oZWFkZXItdGV4dCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-page-not-found',
            templateUrl: './page-not-found.component.html',
            styleUrls: ['./page-not-found.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/profile/profile.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/profile/profile.component.ts ***!
      \**********************************************/

    /*! exports provided: ProfileComponent, DialogContentHome, UserEditedComponent */

    /***/
    function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogContentHome", function () {
        return DialogContentHome;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserEditedComponent", function () {
        return UserEditedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _animations_template_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../animations/template.animations */
      "./src/app/animations/template.animations.ts");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      function ProfileComponent_div_14_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var department_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", department_r15._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", department_r15.viewValue, " ");
        }
      }

      function ProfileComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_14_Template_mat_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.user.selectedDepartment._id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileComponent_div_14_mat_option_5_Template, 2, 2, "mat-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.user.selectedDepartment._id)("disabled", ctx_r0.disableTextbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.departments);
        }
      }

      function ProfileComponent_div_15_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var grade_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", grade_r19._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", grade_r19.viewValue, " ");
        }
      }

      function ProfileComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Grade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_15_Template_mat_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.user.selectedGrade._id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileComponent_div_15_mat_option_5_Template, 2, 2, "mat-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.user.selectedGrade._id)("disabled", ctx_r1.disableTextbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.grades);
        }
      }

      function ProfileComponent_mat_option_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", project_r22._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r22.viewValue, " ");
        }
      }

      function ProfileComponent_div_22_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var authorization_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", authorization_r24.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", authorization_r24.viewValue, " ");
        }
      }

      function ProfileComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Authorization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_22_Template_mat_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.user.selectedAuthorization = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileComponent_div_22_mat_option_5_Template, 2, 2, "mat-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.user.selectedAuthorization)("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.authorizations);
        }
      }

      function ProfileComponent_div_23_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var creation_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", creation_r28.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", creation_r28.viewValue, " ");
        }
      }

      function ProfileComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Creation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_23_Template_mat_select_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r29.user.selectedCreation = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileComponent_div_23_mat_option_5_Template, 2, 2, "mat-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.user.selectedCreation)("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.creations);
        }
      }

      function ProfileComponent_button_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_button_25_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_button_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_button_26_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.toggleEdit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_button_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_button_27_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r35.updateUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_h3_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Authorizer For: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_div_30_mat_header_cell_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Employee Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_div_30_mat_cell_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r53 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r53.empId, " ");
        }
      }

      function ProfileComponent_div_30_mat_header_cell_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_div_30_mat_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r54 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r54.name, " ");
        }
      }

      function ProfileComponent_div_30_mat_header_cell_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Department ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_div_30_mat_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r55.selectedDepartment.viewValue, " ");
        }
      }

      function ProfileComponent_div_30_mat_header_cell_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Grade ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_div_30_mat_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r56 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r56.selectedGrade.viewValue, " ");
        }
      }

      function ProfileComponent_div_30_mat_header_cell_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Project ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_div_30_mat_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r57 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r57.selectedProject.viewValue, " ");
        }
      }

      function ProfileComponent_div_30_mat_header_cell_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Authorization ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_div_30_mat_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r58 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r58.selectedAuthorization, " ");
        }
      }

      function ProfileComponent_div_30_mat_header_cell_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Creation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_div_30_mat_cell_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r59 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r59.selectedCreation, " ");
        }
      }

      function ProfileComponent_div_30_mat_header_row_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function ProfileComponent_div_30_mat_row_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rowsAnimation", undefined);
        }
      }

      function ProfileComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-table", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_div_30_mat_header_cell_3_Template, 2, 0, "mat-header-cell", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_div_30_mat_cell_4_Template, 2, 1, "mat-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_div_30_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_div_30_mat_cell_7_Template, 2, 1, "mat-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_div_30_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileComponent_div_30_mat_cell_10_Template, 2, 1, "mat-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileComponent_div_30_mat_header_cell_12_Template, 2, 0, "mat-header-cell", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProfileComponent_div_30_mat_cell_13_Template, 2, 1, "mat-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProfileComponent_div_30_mat_header_cell_15_Template, 2, 0, "mat-header-cell", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileComponent_div_30_mat_cell_16_Template, 2, 1, "mat-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfileComponent_div_30_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProfileComponent_div_30_mat_cell_19_Template, 2, 1, "mat-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfileComponent_div_30_mat_header_cell_21_Template, 2, 0, "mat-header-cell", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProfileComponent_div_30_mat_cell_22_Template, 2, 1, "mat-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProfileComponent_div_30_mat_header_row_23_Template, 1, 0, "mat-header-row", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProfileComponent_div_30_mat_row_24_Template, 1, 1, "mat-row", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r9.dsUserAuthTo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r9.dcUserAuthTo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r9.dcUserAuthTo);
        }
      }

      function ProfileComponent_h3_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "History: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_div_34_mat_header_cell_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Department ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_div_34_mat_cell_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r69 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r69.selectedDepartment.viewValue, " ");
        }
      }

      function ProfileComponent_div_34_mat_header_cell_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " From ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_div_34_mat_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r70 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r70.from), " ");
        }
      }

      function ProfileComponent_div_34_mat_header_cell_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " To ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_div_34_mat_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r71 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r71.to), " ");
        }
      }

      function ProfileComponent_div_34_mat_header_row_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function ProfileComponent_div_34_mat_row_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rowsAnimation", undefined);
        }
      }

      function ProfileComponent_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-table", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_div_34_mat_header_cell_3_Template, 2, 0, "mat-header-cell", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_div_34_mat_cell_4_Template, 2, 1, "mat-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_div_34_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_div_34_mat_cell_7_Template, 3, 3, "mat-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_div_34_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileComponent_div_34_mat_cell_10_Template, 3, 3, "mat-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProfileComponent_div_34_mat_header_row_11_Template, 1, 0, "mat-header-row", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileComponent_div_34_mat_row_12_Template, 1, 1, "mat-row", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r11.dsUserHistory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r11.dcUserHistory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r11.dcUserHistory);
        }
      }

      function ProfileComponent_div_35_mat_header_cell_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Grade ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_div_35_mat_cell_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r81 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r81.selectedGrade.viewValue, " ");
        }
      }

      function ProfileComponent_div_35_mat_header_cell_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " From ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_div_35_mat_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r82 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r82.from), " ");
        }
      }

      function ProfileComponent_div_35_mat_header_cell_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " To ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_div_35_mat_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r83 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r83.to), " ");
        }
      }

      function ProfileComponent_div_35_mat_header_row_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function ProfileComponent_div_35_mat_row_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rowsAnimation", undefined);
        }
      }

      function ProfileComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-table", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_div_35_mat_header_cell_3_Template, 2, 0, "mat-header-cell", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_div_35_mat_cell_4_Template, 2, 1, "mat-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_div_35_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_div_35_mat_cell_7_Template, 3, 3, "mat-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_div_35_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileComponent_div_35_mat_cell_10_Template, 3, 3, "mat-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProfileComponent_div_35_mat_header_row_11_Template, 1, 0, "mat-header-row", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileComponent_div_35_mat_row_12_Template, 1, 1, "mat-row", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r12.dsUserHistoryGrade);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r12.dcUserHistoryGrade);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r12.dcUserHistoryGrade);
        }
      }

      function ProfileComponent_div_36_mat_header_cell_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Project ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_div_36_mat_cell_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r93 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r93.selectedProject.viewValue, " ");
        }
      }

      function ProfileComponent_div_36_mat_header_cell_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " From ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_div_36_mat_cell_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r94 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r94.from), " ");
        }
      }

      function ProfileComponent_div_36_mat_header_cell_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " To ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_div_36_mat_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r95 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r95.to), " ");
        }
      }

      function ProfileComponent_div_36_mat_header_row_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function ProfileComponent_div_36_mat_row_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rowsAnimation", undefined);
        }
      }

      function ProfileComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-table", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_div_36_mat_header_cell_3_Template, 2, 0, "mat-header-cell", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_div_36_mat_cell_4_Template, 2, 1, "mat-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_div_36_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_div_36_mat_cell_7_Template, 3, 3, "mat-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_div_36_mat_header_cell_9_Template, 2, 0, "mat-header-cell", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileComponent_div_36_mat_cell_10_Template, 3, 3, "mat-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProfileComponent_div_36_mat_header_row_11_Template, 1, 0, "mat-header-row", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileComponent_div_36_mat_row_12_Template, 1, 1, "mat-row", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r13.dsUserHistoryProject);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r13.dcUserHistoryProject);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r13.dcUserHistoryProject);
        }
      }

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(userService, router, dialog, _snackBar) {
          _classCallCheck(this, ProfileComponent);

          this.userService = userService;
          this.router = router;
          this.dialog = dialog;
          this._snackBar = _snackBar;
          this.dcUserAuthTo = ['empId', 'name', 'department', 'grade', 'project', 'authorization', 'creation'];
          this.dcUserHistory = ['department', 'from', 'to'];
          this.dcUserHistoryGrade = ['grade', 'from', 'to'];
          this.dcUserHistoryProject = ['project', 'from', 'to'];
          this.user = this.userService.loggedIn;
          this.showBool = true;
          this.userTypes = [{
            viewValue: 'Super Admin'
          }, {
            viewValue: 'Admin'
          }, {
            viewValue: 'User'
          }];
          this.authorizations = [{
            value: true,
            viewValue: 'Yes'
          }, {
            value: false,
            viewValue: 'No'
          }];
          this.creations = [{
            value: true,
            viewValue: 'Yes'
          }, {
            value: false,
            viewValue: 'No'
          }];
          this.disableTextbox = true;
          this.dsUserAuthTo = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.user.authorizedTo);
          this.dsUserHistory = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.user.Department);
          this.dsUserHistoryGrade = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.user.Grade);
          this.dsUserHistoryProject = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.user.Project);
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.redirectFunc();
            this.getProjects();
            this.getGrades();
            this.getDepartments();
            this.checkUserType();
          }
        }, {
          key: "checkUserType",
          value: function checkUserType() {
            if (this.user.selectedUserType === 'Security') {
              this.showBool = false;
            }
          }
        }, {
          key: "getProjects",
          value: function getProjects() {
            var _this23 = this;

            this.userService.getProjects().subscribe(function (projects) {
              return _this23.projects = projects;
            });
          }
        }, {
          key: "getGrades",
          value: function getGrades() {
            var _this24 = this;

            this.userService.getGrades().subscribe(function (grades) {
              return _this24.grades = grades;
            });
          }
        }, {
          key: "getDepartments",
          value: function getDepartments() {
            var _this25 = this;

            this.userService.getDepartments().subscribe(function (departments) {
              return _this25.departments = departments;
            });
          }
        }, {
          key: "redirectFunc",
          value: function redirectFunc() {
            if (this.user === null || this.user === undefined) {
              this.router.navigate(['login']);
            }
          }
        }, {
          key: "cancel",
          value: function cancel() {
            var _this26 = this;

            this.userService.getUser(this.user._id).subscribe(function (user) {
              return _this26.user = user;
            });
            this.disableTextbox = !this.disableTextbox;
          }
        }, {
          key: "toggleEdit",
          value: function toggleEdit() {
            this.disableTextbox = !this.disableTextbox;
          }
        }, {
          key: "updateUser",
          value: function updateUser() {
            var _this27 = this;

            var dialogRef = this.dialog.open(DialogContentHome);
            dialogRef.afterClosed().subscribe(function (result) {
              // console.log(`Dialog result: ${result}`);
              if (result == true) {
                _this27.userService.updateUser(_this27.user).subscribe(function (updatedUser) {
                  // this.user = this.userService.loggedIn
                  if (_this27.user.Department != updatedUser.Department) {
                    _this27.dsUserHistory = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](updatedUser.Department);
                  }

                  if (_this27.user.Grade != updatedUser.Grade) {
                    _this27.dsUserHistoryGrade = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](updatedUser.Grade);
                  }

                  if (_this27.user.Project != updatedUser.Project) {
                    _this27.dsUserHistoryProject = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](updatedUser.Project);
                  }

                  _this27.userService.loggedIn = updatedUser;
                  _this27.disableTextbox = true;

                  _this27._snackBar.openFromComponent(UserEditedComponent, {
                    duration: 3 * 1000
                  });
                });
              } else {
                _this27.cancel();
              }
            });
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]));
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 37,
        vars: 21,
        consts: [[1, "user-div"], [1, "user-card"], [1, "header"], [1, "row"], [1, "full-width"], ["matInput", "", "placeholder", "EmpId", "type", "text", "type", "number", 3, "disabled", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Name", "type", "text", 3, "disabled", "ngModel", "ngModelChange"], ["class", "row", 4, "ngIf"], ["name", "project", 3, "ngModel", "disabled", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "button"], ["mat-raised-button", "", "type", "button", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click", 4, "ngIf"], ["class", "table-heading-h4", 4, "ngIf"], ["class", "example-container mat-elevation-z8 mat-table auth-table", 4, "ngIf"], [1, "table-row"], ["class", "example-container mat-elevation-z8 mat-table history", 4, "ngIf"], ["name", "department", 3, "ngModel", "disabled", "ngModelChange"], [3, "value"], ["name", "grade", 3, "ngModel", "disabled", "ngModelChange"], ["name", "authorization", 3, "ngModel", "disabled", "ngModelChange"], ["name", "creation", 3, "ngModel", "disabled", "ngModelChange"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "primary", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click"], [1, "table-heading-h4"], [1, "example-container", "mat-elevation-z8", "mat-table", "auth-table"], [3, "dataSource"], ["matColumnDef", "empId"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "department"], ["matColumnDef", "grade"], ["matColumnDef", "project"], ["matColumnDef", "authorization"], ["matColumnDef", "creation"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [1, "example-container", "mat-elevation-z8", "mat-table", "history"], ["matColumnDef", "from"], ["matColumnDef", "to"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.user.empId = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.user.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProfileComponent_div_14_Template, 6, 3, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProfileComponent_div_15_Template, 6, 3, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_mat_select_ngModelChange_20_listener($event) {
              return ctx.user.selectedProject._id = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfileComponent_mat_option_21_Template, 2, 2, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProfileComponent_div_22_Template, 6, 3, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProfileComponent_div_23_Template, 6, 3, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-actions", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProfileComponent_button_25_Template, 2, 0, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProfileComponent_button_26_Template, 2, 0, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProfileComponent_button_27_Template, 2, 0, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProfileComponent_h3_29_Template, 2, 0, "h3", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProfileComponent_div_30_Template, 25, 3, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProfileComponent_h3_32_Template, 2, 0, "h3", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ProfileComponent_div_34_Template, 13, 3, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ProfileComponent_div_35_Template, 13, 3, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ProfileComponent_div_36_Template, 13, 3, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx.user.name, " to the Material Gate Pass System");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("ngModel", ctx.user.empId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("ngModel", ctx.user.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showBool);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showBool);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.selectedProject._id)("disabled", ctx.disableTextbox);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showBool);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showBool);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.disableTextbox);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.disableTextbox);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.disableTextbox);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.authorizedTo.length != 0 && ctx.showBool);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.authorizedTo.length != 0 && ctx.showBool);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.Department.length > 1 || ctx.user.Grade.length > 1 || ctx.user.Project.length > 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.Department.length > 1 && ctx.showBool);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.Grade.length > 1 && ctx.showBool);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.Project.length > 1);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]],
        styles: ["h1[_ngcontent-%COMP%]{\r\n  margin: 1%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.mat-table[_ngcontent-%COMP%] {\r\n  \r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n\r\n.history[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\nmat-cell[_ngcontent-%COMP%] {\r\n  margin-right:1rem;\r\n\r\n}\r\n\r\nmat-cell[_ngcontent-%COMP%]:first-of-type, mat-header-cell[_ngcontent-%COMP%]:first-of-type, mat-footer-cell[_ngcontent-%COMP%]:first-of-type {\r\n  padding-left: 0;\r\n}\r\n\r\n.first[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.last[_ngcontent-%COMP%] {\r\n  margin-right: 1rem;\r\n}\r\n\r\nmat-header-cell[_ngcontent-%COMP%] {\r\n  \r\n  display: flex;\r\n  justify-content: center;\r\n  background: #3f51b5;\r\n  color: #fff;\r\n}\r\n\r\nmat-cell[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.user-div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.table-heading-h4[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.auth-table[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.user-card[_ngcontent-%COMP%] {\r\n  \r\n  width: 300px;\r\n\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n\r\n\r\n.table-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  height: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTs7O0dBR0c7O0FBRUg7O0dBRUc7O0FBRUg7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0U7dUJBQ3FCO0VBQ3JCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7O0FBRW5COztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7OztxQ0FHbUM7RUFDbkMsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBQ0E7Ozs7OztHQU1HOztBQUVIO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gIG1hcmdpbjogMSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLyogbWF0LWNhcmQtaGVhZGVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG59ICovXHJcblxyXG4vKiBtYXQtY2FyZCB7XHJcbiAgcGFkZGluZzogMDtcclxufSAqL1xyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLm1hdC10YWJsZSB7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtOyAqL1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4uaGlzdG9yeSB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbm1hdC1jZWxsIHtcclxuICBtYXJnaW4tcmlnaHQ6MXJlbTtcclxuXHJcbn1cclxubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSwgbWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUsIG1hdC1mb290ZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuLmZpcnN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5sYXN0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxubWF0LWhlYWRlci1jZWxsIHtcclxuICAvKiBtYXJnaW46IDFyZW0gMCAwIDA7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5tYXQtY2VsbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnVzZXItZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YWJsZS1oZWFkaW5nLWg0IHtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYXV0aC10YWJsZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4udXNlci1jYXJkIHtcclxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAqL1xyXG4gIHdpZHRoOiAzMDBweDtcclxuXHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4vKiAucmVnaXN0ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgb3BhY2l0eTogMC44NTtcclxuICBjb2xvcjogcmdiKDEzMSwgMTMxLCAxMzEpO1xyXG59ICovXHJcblxyXG4udGFibGUtcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4iXX0= */"],
        data: {
          animation: [_animations_template_animations__WEBPACK_IMPORTED_MODULE_1__["rowsAnimation"]]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css'],
            animations: [_animations_template_animations__WEBPACK_IMPORTED_MODULE_1__["rowsAnimation"]]
          }]
        }], function () {
          return [{
            type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
          }];
        }, null);
      })();

      var DialogContentHome = function DialogContentHome() {
        _classCallCheck(this, DialogContentHome);
      };

      DialogContentHome.ɵfac = function DialogContentHome_Factory(t) {
        return new (t || DialogContentHome)();
      };

      DialogContentHome.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DialogContentHome,
        selectors: [["dialog-content-home"]],
        decls: 10,
        vars: 1,
        consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]],
        template: function DialogContentHome_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update Data?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Are you sure you want to update Your Data?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogContentHome, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dialog-content-home',
            templateUrl: 'dialog-content-home.html'
          }]
        }], null, null);
      })();

      var UserEditedComponent = function UserEditedComponent() {
        _classCallCheck(this, UserEditedComponent);
      };

      UserEditedComponent.ɵfac = function UserEditedComponent_Factory(t) {
        return new (t || UserEditedComponent)();
      };

      UserEditedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserEditedComponent,
        selectors: [["snack-bar-component-userEdited"]],
        decls: 4,
        vars: 0,
        consts: [[1, "user-edited"], ["aria-hidden", "false", "aria-label", "Party Icon"]],
        template: function UserEditedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "done_outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " User Details Edited Successfully!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"]],
        styles: [".user-edited[_ngcontent-%COMP%] {\n      color: hotpink;\n    }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserEditedComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'snack-bar-component-userEdited',
            templateUrl: 'snack-bar-component-userEdited.html',
            styles: ["\n    .user-edited {\n      color: hotpink;\n    }\n  "]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/quantity-ret-validator.directive.ts":
    /*!*****************************************************!*\
      !*** ./src/app/quantity-ret-validator.directive.ts ***!
      \*****************************************************/

    /*! exports provided: QuantityRetValidatorDirective */

    /***/
    function srcAppQuantityRetValidatorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuantityRetValidatorDirective", function () {
        return QuantityRetValidatorDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var QuantityRetValidatorDirective = /*#__PURE__*/function () {
        function QuantityRetValidatorDirective() {
          _classCallCheck(this, QuantityRetValidatorDirective);
        }

        _createClass(QuantityRetValidatorDirective, [{
          key: "validate",
          // valueInLimit(quantityNum: number, quantityRet: number) {
          //   let tolerance = 50;
          //   let quantityRetTop = quantityNum + quantityNum*(tolerance/100);
          //   let quantityRetBottom = quantityNum - quantityNum*(tolerance/100);
          //   if((quantityRet>quantityRetBottom) && (quantityRet<quantityRetTop)) {
          //     return true;
          //   }
          //   return false;
          // }
          value: function validate(control) {
            var words = this.str.split(' ');
            var quantityStr = words[0];
            var toleranceStr = words[1];
            var quantityNum = Number(quantityStr);
            var toleranceNum = Number(toleranceStr); // console.log('Tolerance', toleranceNum)
            // console.log('Quantity', quantityNum)

            var quantityRet = control.value; // console.log(quantityNum)
            // let tolerance = 50;
            // console.log(quantityRet, tolerance, quantityNum)

            var quantityRetTop = quantityNum + quantityNum * (toleranceNum / 100);
            var quantityRetBottom = quantityNum - quantityNum * (toleranceNum / 100); // console.log('QuantityRetTop',quantityRetTop, 'QuantityRetBottom',quantityRetBottom)
            // return this.quantity ? quantityValidator(this.valueInLimit(quantityNum, quantityRet))  : null

            return quantityRet >= quantityRetBottom && quantityRet <= quantityRetTop ? null : {
              invalidQuantity: {
                value: control.value
              }
            };
          }
        }]);

        return QuantityRetValidatorDirective;
      }();

      QuantityRetValidatorDirective.ɵfac = function QuantityRetValidatorDirective_Factory(t) {
        return new (t || QuantityRetValidatorDirective)();
      };

      QuantityRetValidatorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: QuantityRetValidatorDirective,
        selectors: [["", "appQuantityRetValidator", ""]],
        inputs: {
          str: ["appQuantityRetValidator", "str"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
          useExisting: QuantityRetValidatorDirective,
          multi: true
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuantityRetValidatorDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appQuantityRetValidator]',
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
              useExisting: QuantityRetValidatorDirective,
              multi: true
            }]
          }]
        }], null, {
          str: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['appQuantityRetValidator']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/register/register.component.ts":
    /*!************************************************!*\
      !*** ./src/app/register/register.component.ts ***!
      \************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      function RegisterComponent_mat_option_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var userType_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", userType_r7.viewValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", userType_r7.viewValue, " ");
        }
      }

      function RegisterComponent_mat_option_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", project_r8._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r8.viewValue, " ");
        }
      }

      function RegisterComponent_mat_form_field_23_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var grade_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", grade_r10._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", grade_r10.viewValue, " ");
        }
      }

      function RegisterComponent_mat_form_field_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Grade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegisterComponent_mat_form_field_23_mat_option_4_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.grades);
        }
      }

      function RegisterComponent_mat_form_field_24_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var department_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", department_r12._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", department_r12.viewValue, " ");
        }
      }

      function RegisterComponent_mat_form_field_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegisterComponent_mat_form_field_24_mat_option_4_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.departments);
        }
      }

      function RegisterComponent_mat_form_field_25_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var authorization_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", authorization_r14.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", authorization_r14.viewValue, " ");
        }
      }

      function RegisterComponent_mat_form_field_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Authorization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegisterComponent_mat_form_field_25_mat_option_4_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.authorizations);
        }
      }

      function RegisterComponent_mat_form_field_26_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var creation_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", creation_r16.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", creation_r16.viewValue, " ");
        }
      }

      function RegisterComponent_mat_form_field_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Creation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegisterComponent_mat_form_field_26_mat_option_4_Template, 2, 2, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.creations);
        }
      }

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(fb, userService) {
          _classCallCheck(this, RegisterComponent);

          this.fb = fb;
          this.userService = userService;
          this.userTypes = [{
            viewValue: 'Super Admin'
          }, {
            viewValue: 'Admin'
          }, {
            viewValue: 'User'
          }, {
            viewValue: 'Security'
          }];
          this.authorizations = [{
            value: true,
            viewValue: 'Yes'
          }, {
            value: false,
            viewValue: 'No'
          }];
          this.creations = [{
            value: true,
            viewValue: 'Yes'
          }, {
            value: false,
            viewValue: 'No'
          }];
          this.securityType = false;
          this.registerForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            empId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            selectedProject: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            selectedGrade: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            selectedDepartment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            selectedUserType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            selectedAuthorization: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            selectedCreation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUsers();
            this.getProjects();
            this.getGrades();
            this.getDepartments();
          }
        }, {
          key: "userTypeFunc",
          value: function userTypeFunc(userType) {
            if (userType === this.userTypes[3].viewValue && this.registerForm.contains('selectedGrade')) {
              this.securityType = true;
              this.registerForm.removeControl('selectedGrade');
              this.registerForm.setControl('empId', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7)]));
              this.registerForm.removeControl('selectedDepartment');
              this.registerForm.removeControl('selectedAuthorization');
              this.registerForm.removeControl('selectedCreation');
            } else {
              this.securityType = false;
              this.registerForm.addControl('selectedGrade', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
              this.registerForm.setControl('empId', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]));
              this.registerForm.addControl('selectedDepartment', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
              this.registerForm.addControl('selectedAuthorization', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
              this.registerForm.addControl('selectedCreation', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
            }

            console.log(this.securityType);
          }
        }, {
          key: "getProjects",
          value: function getProjects() {
            var _this28 = this;

            this.userService.getProjects().subscribe(function (projects) {
              return _this28.projects = projects;
            });
          }
        }, {
          key: "getGrades",
          value: function getGrades() {
            var _this29 = this;

            this.userService.getGrades().subscribe(function (grades) {
              return _this29.grades = grades;
            });
          }
        }, {
          key: "getDepartments",
          value: function getDepartments() {
            var _this30 = this;

            this.userService.getDepartments().subscribe(function (departments) {
              return _this30.departments = departments;
            });
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            var _this31 = this;

            this.userService.getUsers().subscribe(function (users) {
              return _this31.users = users;
            });
          } // createNewProject(regData): ProjectArray {
          //   return {
          //     selectedProject: regData.selectedProject , from: null, to: null
          //   }
          // }

        }, {
          key: "onSubmit",
          value: function onSubmit(registerData) {
            var _this32 = this;

            if (!registerData) {
              return;
            } // this.createNewProject(registerData)
            // else if(registerData.selectedUserType === this.userTypes[3].viewValue) {
            //   this.userService.addSecurity( registerData as Security )
            //   .subscribe(security => {
            //     this.securities.push(security);
            //   });
            // }
            else {
                this.userService.addUser(registerData).subscribe(function (user) {
                  _this32.users.push(user);
                });
              }

            this.registerForm.reset();
            console.warn('Your details have been submitted', registerData);
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 34,
        vars: 8,
        consts: [[3, "formGroup", "ngSubmit"], [1, "register-card"], [1, "header"], [1, "full-width"], ["formControlName", "selectedUserType", "name", "userType", 3, "valueChange"], ["userTypeSelect", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Name", "formControlName", "name", "type", "text"], ["matInput", "", "placeholder", "EmpId", "formControlName", "empId", "type", "empId", "type", "number"], ["matInput", "", "placeholder", "Password", "formControlName", "password", "type", "password"], ["formControlName", "selectedProject", "name", "project"], ["class", "full-width", 4, "ngIf"], [1, "button"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["routerLink", "/login", 1, "login"], [3, "value"], ["formControlName", "selectedGrade", "name", "grade"], ["formControlName", "selectedDepartment", "name", "department"], ["formControlName", "selectedAuthorization", "name", "authorization"], ["formControlName", "selectedCreation", "name", "creation"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_0_listener() {
              return ctx.onSubmit(ctx.registerForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "User Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function RegisterComponent_Template_mat_select_valueChange_9_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

              return ctx.userTypeFunc(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RegisterComponent_mat_option_11_Template, 2, 2, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RegisterComponent_mat_option_22_Template, 2, 2, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RegisterComponent_mat_form_field_23_Template, 5, 1, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RegisterComponent_mat_form_field_24_Template, 5, 1, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegisterComponent_mat_form_field_25_Template, 5, 1, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RegisterComponent_mat_form_field_26_Template, 5, 1, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-actions", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userTypes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.securityType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.securityType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.securityType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.securityType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]],
        styles: ["[_nghost-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.register-card[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.login[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  text-decoration: none;\r\n  opacity: 0.85;\r\n  color: rgb(131, 131, 131);\r\n}\r\n\r\n.full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFDQTs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItY2FyZCB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuLmxvZ2luIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuODU7XHJcbiAgY29sb3I6IHJnYigxMzEsIDEzMSwgMTMxKTtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/report/report.component.ts":
    /*!********************************************!*\
      !*** ./src/app/report/report.component.ts ***!
      \********************************************/

    /*! exports provided: ReportComponent */

    /***/
    function srcAppReportReportComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportComponent", function () {
        return ReportComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _animations_template_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../animations/template.animations */
      "./src/app/animations/template.animations.ts");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var mat_table_exporter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! mat-table-exporter */
      "./node_modules/mat-table-exporter/__ivy_ngcc__/fesm2015/mat-table-exporter.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ReportComponent_mat_header_cell_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gate Pass No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReportComponent_mat_cell_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r29.id, " ");
        }
      }

      function ReportComponent_mat_header_cell_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " S.No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReportComponent_mat_cell_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r30.sno, " ");
        }
      }

      function ReportComponent_mat_header_cell_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Department ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReportComponent_mat_cell_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r31.department, " ");
        }
      }

      function ReportComponent_mat_header_cell_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Quantity ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReportComponent_mat_cell_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r32.quantity, " ");
        }
      }

      function ReportComponent_mat_header_cell_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReportComponent_mat_cell_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r33.unit.viewValue, " ");
        }
      }

      function ReportComponent_mat_header_cell_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date Of Creation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReportComponent_mat_cell_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r34.dateOfCreation), " ");
        }
      }

      function ReportComponent_mat_header_cell_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Due Date Of Return ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReportComponent_mat_cell_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, element_r35.dueDateOfReturn), " ");
        }
      }

      function ReportComponent_mat_header_cell_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Created By ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReportComponent_mat_cell_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r36.createdBy, " ");
        }
      }

      function ReportComponent_mat_header_cell_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Material Owner ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReportComponent_mat_cell_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r37.owner, " ");
        }
      }

      function ReportComponent_mat_header_cell_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Movement ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReportComponent_mat_cell_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r38.movement, " ");
        }
      }

      function ReportComponent_mat_header_cell_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReportComponent_mat_cell_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r39 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r39.status, " ");
        }
      }

      function ReportComponent_mat_header_cell_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Material Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReportComponent_mat_cell_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r40.description, " ");
        }
      }

      function ReportComponent_mat_header_row_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function ReportComponent_mat_row_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-row", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportComponent_mat_row_46_Template_mat_row_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var row_r41 = ctx.$implicit;

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r42.getRecord(row_r41);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r41 = ctx.$implicit;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r27.selectedGpArray && ctx_r27.selectedGpArray.gatePassNo === row_r41.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rowsAnimation", undefined);
        }
      }

      function ReportComponent_tr_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
        }
      }

      var ReportComponent = /*#__PURE__*/function () {
        function ReportComponent(userService, dialog, router) {
          _classCallCheck(this, ReportComponent);

          this.userService = userService;
          this.dialog = dialog;
          this.router = router;
          this.displayedColumns = ['id', 'sno', 'description', 'quantity', 'unit', 'dateOfCreation', 'dueDateOfReturn', 'department', 'createdBy', 'owner', 'movement', 'status'];
          this.searchTableData = [];
          this.loggedIn = this.userService.loggedIn;
        }

        _createClass(ReportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getGpArray(); // this.getUnits();
          }
        }, {
          key: "filterData",
          value: function filterData(gpArrays) {
            var _iterator7 = _createForOfIteratorHelper(gpArrays),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var gp = _step7.value;

                var _iterator8 = _createForOfIteratorHelper(gp.gatePass),
                    _step8;

                try {
                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    var tableRow = _step8.value;

                    if (tableRow.sno == 1) {
                      this.searchTableData.push({
                        id: gp.gatePassNo,
                        sno: tableRow.sno,
                        quantity: tableRow.quantity,
                        unit: tableRow.unit,
                        dateOfCreation: gp.createdAt,
                        dueDateOfReturn: tableRow.dateOfReturn,
                        department: gp.createForm.selectedDepartment.viewValue,
                        createdBy: gp.createdBy.name,
                        owner: gp.createForm.selectedOwner,
                        movement: gp.createForm.selectedMovement,
                        status: gp.status,
                        description: tableRow.description
                      });
                    } else {
                      this.searchTableData.push({
                        vId: gp.gatePassNo,
                        sno: tableRow.sno,
                        quantity: tableRow.quantity,
                        unit: tableRow.unit,
                        dateOfCreation: gp.createdAt,
                        dueDateOfReturn: tableRow.dateOfReturn,
                        department: gp.createForm.selectedDepartment.viewValue,
                        createdBy: gp.createdBy.name,
                        owner: gp.createForm.selectedOwner,
                        movement: gp.createForm.selectedMovement,
                        status: gp.status,
                        description: tableRow.description
                      });
                    }
                  }
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        }, {
          key: "getRecord",
          value: function getRecord(row) {
            var _this33 = this;

            row.id == null ? this.rId = row.vId : this.rId = row.id;
            var gp = this.gpArrays.find(function (gp) {
              return gp.gatePassNo == _this33.rId;
            });
            this.onSelect(gp); // for(const gp of this.gpArrays) {
            //   if(gp.gatePassNo === this.rId) {
            //     this.onSelect(gp);
            //     console.log(gp);
            //     break;
            //   }
            // }
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "getGpArray",
          value: function getGpArray() {
            console.log(this.userService.gpArrays);

            if (this.userService.gpArrays == undefined) {
              this.refreshFilter();
            } else {
              this.gpArrays = this.userService.gpArrays;
              this.filterData(this.gpArrays);
              this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.searchTableData);
            }
          }
        }, {
          key: "refreshFilter",
          value: function refreshFilter() {
            var _this34 = this;

            this.userService.getFilterGpArray(this.userService.getFilter()).subscribe(function (gpArrays) {
              console.log(gpArrays);
              _this34.userService.gpArrays = gpArrays;
              _this34.gpArrays = _this34.userService.gpArrays;

              _this34.filterData(_this34.gpArrays);

              _this34.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this34.searchTableData);
            });
          }
        }, {
          key: "onSelect",
          value: function onSelect(gpArray) {
            this.userService.selectedGpArray = gpArray;
            this.userService.storeGpArray(gpArray.gatePassNo);
            this.router.navigate(['return']);
          }
        }, {
          key: "getUnits",
          value: function getUnits() {
            var _this35 = this;

            this.userService.getUnits().subscribe(function (units) {
              return _this35.Units = units;
            });
          }
        }]);

        return ReportComponent;
      }();

      ReportComponent.ɵfac = function ReportComponent_Factory(t) {
        return new (t || ReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      ReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReportComponent,
        selectors: [["app-report"]],
        decls: 51,
        vars: 4,
        consts: [[1, "filter"], ["matInput", "", "placeholder", "search term", 3, "keyup"], ["input", ""], ["matTableExporter", "", 1, "mat-elevation-z8", "example-container", "searchTable", 3, "dataSource"], ["exporter", "matTableExporter"], ["matColumnDef", "id"], [4, "matHeaderCellDef"], ["class", "search-table-mat-cell", 4, "matCellDef"], ["matColumnDef", "sno"], ["matColumnDef", "department"], ["matColumnDef", "quantity"], ["matColumnDef", "unit"], ["matColumnDef", "dateOfCreation"], ["matColumnDef", "dueDateOfReturn"], ["matColumnDef", "createdBy"], ["matColumnDef", "owner"], ["matColumnDef", "movement"], ["matColumnDef", "status"], ["matColumnDef", "description"], [4, "matHeaderRowDef", "matHeaderRowDefSticky"], [3, "selected", "click", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [1, "row-button"], ["mat-raised-button", "", 3, "click"], [1, "search-table-mat-cell"], [3, "click"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
        template: function ReportComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "List of GatePasses");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ReportComponent_Template_input_keyup_5_listener($event) {
              return ctx.applyFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-table", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ReportComponent_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReportComponent_mat_cell_11_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ReportComponent_mat_header_cell_13_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ReportComponent_mat_cell_14_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ReportComponent_mat_header_cell_16_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ReportComponent_mat_cell_17_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ReportComponent_mat_header_cell_19_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ReportComponent_mat_cell_20_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ReportComponent_mat_header_cell_22_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ReportComponent_mat_cell_23_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ReportComponent_mat_header_cell_25_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ReportComponent_mat_cell_26_Template, 3, 3, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ReportComponent_mat_header_cell_28_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ReportComponent_mat_cell_29_Template, 3, 3, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ReportComponent_mat_header_cell_31_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ReportComponent_mat_cell_32_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ReportComponent_mat_header_cell_34_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ReportComponent_mat_cell_35_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](36, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ReportComponent_mat_header_cell_37_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ReportComponent_mat_cell_38_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](39, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ReportComponent_mat_header_cell_40_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ReportComponent_mat_cell_41_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](42, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ReportComponent_mat_header_cell_43_Template, 2, 0, "mat-header-cell", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ReportComponent_mat_cell_44_Template, 2, 1, "mat-cell", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ReportComponent_mat_header_row_45_Template, 1, 0, "mat-header-row", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ReportComponent_mat_row_46_Template, 1, 3, "mat-row", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ReportComponent_tr_47_Template, 3, 1, "tr", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportComponent_Template_button_click_49_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

              return _r1.exportTable("xlsx", {
                fileName: "reports",
                sheet: "gate-pass-listing",
                Props: {
                  Author: "GatePassApplication"
                }
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Export to Excel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], mat_table_exporter__WEBPACK_IMPORTED_MODULE_8__["MatTableExporterDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatNoDataRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]],
        styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n.row-button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.row-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-right: 1rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{\r\n  margin: 1%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n\r\nli[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n\r\nmat-cell[_ngcontent-%COMP%] {\r\n  margin-right:1rem;\r\n\r\n}\r\n\r\n.row-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-right: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nmat-cell[_ngcontent-%COMP%]:first-of-type, mat-header-cell[_ngcontent-%COMP%]:first-of-type, mat-footer-cell[_ngcontent-%COMP%]:first-of-type {\r\n  padding-left: 0;\r\n}\r\n\r\n.first[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.last[_ngcontent-%COMP%] {\r\n  margin-right: 1rem;\r\n}\r\n\r\n.search-table-mat-cell[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.searchTable[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%] {\r\n  transition: 0.5s;\r\n}\r\n\r\n.searchTable[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  background: #FF4081;\r\n}\r\n\r\n.searchTable[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]:hover   .mat-cell[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%] {\r\n  background: #FF4081;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n\r\n.chk-box[_ngcontent-%COMP%] {\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n.chk-box-header[_ngcontent-%COMP%]     .mat-checkbox-frame{\r\n  border-color: white\r\n}\r\n\r\nmat-header-cell[_ngcontent-%COMP%] {\r\n  \r\n  display: flex;\r\n  justify-content: center;\r\n  background: #3f51b5;\r\n  color: #fff;\r\n}\r\n\r\n\r\n\r\nmat-grid-tile[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nmat-label[_ngcontent-%COMP%] {\r\n  color: rgba(0, 0, 0, 0.54);\r\n}\r\n\r\n.example-container[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  min-width: 300px;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.create-card[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.mat-table[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n}\r\n\r\n\r\n\r\n.general-button[_ngcontent-%COMP%]  {\r\n  float: right;\r\n}\r\n\r\n.row-button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.user-card[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  background: #3f51b5;\r\n  color: #fff;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBOzs7R0FHRzs7QUFFSDtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBQ0E7Ozs7R0FJRzs7QUFHRjtFQUNDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBQ0M7RUFDQyxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUdBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUNBOzs7R0FHRzs7QUFDSDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRTsyQkFDeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7O0dBRUc7O0FBRUg7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59ICovXHJcblxyXG4ucm93LWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4ucm93LWJ1dHRvbiBidXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG5oMSwgaDJ7XHJcbiAgbWFyZ2luOiAxJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi8qIG1hdC1ncmlkLWxpc3R7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIGJvcmRlcjogc29saWQgIzNmNTFiNTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59ICovXHJcblxyXG5cclxuIGxpIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcclxuICBtYXJnaW46IC41ZW07XHJcbiAgcGFkZGluZzogLjNlbSAwO1xyXG4gIGhlaWdodDogMS42ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbiBsaTpob3ZlciB7XHJcbiAgY29sb3I6ICM2MDdEOEI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICBsZWZ0OiAuMWVtO1xyXG59XHJcbm1hdC1jZWxsIHtcclxuICBtYXJnaW4tcmlnaHQ6MXJlbTtcclxuXHJcbn1cclxuXHJcbi5yb3ctYnV0dG9uIGJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcblxyXG5tYXQtY2VsbDpmaXJzdC1vZi10eXBlLCBtYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSwgbWF0LWZvb3Rlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4uZmlyc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmxhc3Qge1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuXHJcbi5zZWFyY2gtdGFibGUtbWF0LWNlbGwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2hUYWJsZSBtYXQtcm93IHtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uc2VhcmNoVGFibGUgbWF0LXJvdzpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6ICNGRjQwODE7XHJcbn1cclxuXHJcbi5zZWFyY2hUYWJsZSBtYXQtcm93OmhvdmVyIC5tYXQtY2VsbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZDogI0ZGNDA4MTtcclxufVxyXG5cclxuLnNlbGVjdGVkIC5tYXQtY2VsbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jaGstYm94IHtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG59XHJcblxyXG4uY2hrLWJveC1oZWFkZXIgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtZnJhbWV7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIC8qIG1hcmdpbjogMXJlbSAwIDAgMDsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLyogbWF0LWhlYWRlci1jZWxsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59ICovXHJcbm1hdC1ncmlkLXRpbGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5tYXQtbGFiZWwge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xyXG59XHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgLyogZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xyXG4gIC8qIG1heC1oZWlnaHQ6IDUwMHB4OyAqL1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4uY3JlYXRlLWNhcmQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLm1hdC10YWJsZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLyogYnV0dG9uIHtcclxuICBtYXJnaW46IDFyZW07XHJcbn0gKi9cclxuXHJcbi5nZW5lcmFsLWJ1dHRvbiAge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnJvdy1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnVzZXItY2FyZCB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5maWx0ZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcbiJdfQ== */"],
        data: {
          animation: [_animations_template_animations__WEBPACK_IMPORTED_MODULE_2__["rowsAnimation"]]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-report',
            templateUrl: './report.component.html',
            styleUrls: ['./report.component.css'],
            animations: [_animations_template_animations__WEBPACK_IMPORTED_MODULE_2__["rowsAnimation"]]
          }]
        }], function () {
          return [{
            type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/return/return.component.ts":
    /*!********************************************!*\
      !*** ./src/app/return/return.component.ts ***!
      \********************************************/

    /*! exports provided: ReturnComponent, DialogContentReturn, ReturnSnackComponent, MessageSnackComponent */

    /***/
    function srcAppReturnReturnComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReturnComponent", function () {
        return ReturnComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogContentReturn", function () {
        return DialogContentReturn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReturnSnackComponent", function () {
        return ReturnSnackComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageSnackComponent", function () {
        return MessageSnackComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
      /* harmony import */


      var _animations_template_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../animations/template.animations */
      "./src/app/animations/template.animations.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! pdfmake/build/pdfmake */
      "./node_modules/pdfmake/build/pdfmake.js");
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! pdfmake/build/vfs_fonts */
      "./node_modules/pdfmake/build/vfs_fonts.js");
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/user/user.service */
      "./src/app/services/user/user.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
      /* harmony import */


      var _services_print_print_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/print/print.service */
      "./src/app/services/print/print.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
      /* harmony import */


      var _quantity_ret_validator_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../quantity-ret-validator.directive */
      "./src/app/quantity-ret-validator.directive.ts");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");

      function ReturnComponent_div_0_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReturnComponent_div_0_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r51.generatePdf();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "print");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReturnComponent_div_0_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReturnComponent_div_0_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r53.deleteGatePass();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReturnComponent_div_0_mat_option_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var department_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", department_r55._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", department_r55.viewValue, " ");
        }
      }

      function ReturnComponent_div_0_mat_option_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r56 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", project_r56._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r56.viewValue, " ");
        }
      }

      function ReturnComponent_div_0_mat_option_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r57 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r57.viewValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r57.viewValue, " ");
        }
      }

      function ReturnComponent_div_0_mat_option_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var owner_r58 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", owner_r58.viewValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", owner_r58.viewValue, " ");
        }
      }

      function ReturnComponent_div_0_mat_option_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var movement_r59 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", movement_r59.viewValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", movement_r59.viewValue, " ");
        }
      }

      function ReturnComponent_div_0_mat_option_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var gate_r60 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", gate_r60._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", gate_r60.viewValue, " ");
        }
      }

      function ReturnComponent_div_0_mat_grid_tile_64_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Vendor Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_mat_grid_tile_64_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r61.selectedGpArray.createForm.vendorName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r11.disableTextbox)("ngModel", ctx_r11.selectedGpArray.createForm.vendorName);
        }
      }

      function ReturnComponent_div_0_button_67_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReturnComponent_div_0_button_67_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r63.addRow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReturnComponent_div_0_button_68_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReturnComponent_div_0_button_68_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r65.deleteRow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r13.selectedGpArray.gatePass.length == 1);
        }
      }

      function ReturnComponent_div_0_button_69_Template(rf, ctx) {
        if (rf & 1) {
          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReturnComponent_div_0_button_69_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r67.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReturnComponent_div_0_button_70_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReturnComponent_div_0_button_70_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r69.updateData("Are you sure you want to update Gate Pass?");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r3.invalid);
        }
      }

      function ReturnComponent_div_0_button_71_Template(rf, ctx) {
        if (rf & 1) {
          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReturnComponent_div_0_button_71_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r71.toggleAuthorize();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Authorize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReturnComponent_div_0_button_72_Template(rf, ctx) {
        if (rf & 1) {
          var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReturnComponent_div_0_button_72_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r73.exitGp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReturnComponent_div_0_button_73_Template(rf, ctx) {
        if (rf & 1) {
          var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReturnComponent_div_0_button_73_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r75.toggleReturn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Return");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReturnComponent_div_0_button_74_Template(rf, ctx) {
        if (rf & 1) {
          var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReturnComponent_div_0_button_74_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r77.toggleEdit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReturnComponent_div_0_mat_header_cell_78_Template(rf, ctx) {
        if (rf & 1) {
          var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReturnComponent_div_0_mat_header_cell_78_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return $event ? ctx_r79.masterToggle() : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r20.selection.hasValue() && ctx_r20.isAllSelected())("indeterminate", ctx_r20.selection.hasValue() && !ctx_r20.isAllSelected())("aria-label", ctx_r20.checkboxLabel());
        }
      }

      function ReturnComponent_div_0_mat_cell_79_Template(rf, ctx) {
        if (rf & 1) {
          var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReturnComponent_div_0_mat_cell_79_Template_mat_checkbox_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

            return $event.stopPropagation();
          })("change", function ReturnComponent_div_0_mat_cell_79_Template_mat_checkbox_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);

            var element_r81 = ctx.$implicit;

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return $event ? ctx_r84.selection.toggle(element_r81) : null;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r81 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r21.selection.isSelected(element_r81))("aria-label", ctx_r21.checkboxLabel(element_r81));
        }
      }

      function ReturnComponent_div_0_mat_header_cell_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SNo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReturnComponent_div_0_mat_cell_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r85 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r85.sno, " ");
        }
      }

      function ReturnComponent_div_0_mat_header_cell_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mode Of Transport ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReturnComponent_div_0_mat_cell_85_Template(rf, ctx) {
        if (rf & 1) {
          var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_mat_cell_85_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

            var element_r86 = ctx.$implicit;
            return element_r86.modeOfTransport = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r86 = ctx.$implicit;
          var i_r87 = ctx.index;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "modeOfTransport-", i_r87, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r25.disableTextbox)("ngModel", element_r86.modeOfTransport);
        }
      }

      function ReturnComponent_div_0_mat_header_cell_87_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReturnComponent_div_0_mat_cell_88_Template(rf, ctx) {
        if (rf & 1) {
          var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_mat_cell_88_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93);

            var element_r90 = ctx.$implicit;
            return element_r90.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r90 = ctx.$implicit;
          var i_r91 = ctx.index;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "description-", i_r91, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r27.disableTextbox)("ngModel", element_r90.description);
        }
      }

      function ReturnComponent_div_0_mat_header_cell_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Quantity ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReturnComponent_div_0_mat_cell_91_Template(rf, ctx) {
        if (rf & 1) {
          var _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_mat_cell_91_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97);

            var element_r94 = ctx.$implicit;
            return element_r94.quantity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r94 = ctx.$implicit;
          var i_r95 = ctx.index;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "quantity-", i_r95, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r29.disableTextbox)("ngModel", element_r94.quantity);
        }
      }

      function ReturnComponent_div_0_mat_header_cell_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Quantity Returned ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReturnComponent_div_0_mat_cell_94_Template(rf, ctx) {
        if (rf & 1) {
          var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_mat_cell_94_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

            var element_r98 = ctx.$implicit;
            return element_r98.quantityRet = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r98 = ctx.$implicit;
          var i_r99 = ctx.index;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "quantityRet-", i_r99, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("appQuantityRetValidator", "", element_r98.quantity, " ", element_r98.unit.tolerance, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r31.selection.isSelected(element_r98))("ngModel", element_r98.quantityRet);
        }
      }

      function ReturnComponent_div_0_mat_header_cell_96_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReturnComponent_div_0_mat_cell_97_mat_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var Unit_r105 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", Unit_r105._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", Unit_r105.viewValue, " ");
        }
      }

      function ReturnComponent_div_0_mat_cell_97_Template(rf, ctx) {
        if (rf & 1) {
          var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_mat_cell_97_Template_mat_select_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107);

            var element_r102 = ctx.$implicit;
            return element_r102.unit._id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReturnComponent_div_0_mat_cell_97_mat_option_3_Template, 2, 2, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r102 = ctx.$implicit;
          var i_r103 = ctx.index;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "unit-", i_r103, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r33.disableTextbox)("ngModel", element_r102.unit._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.Units);
        }
      }

      function ReturnComponent_div_0_mat_header_cell_99_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Issued To ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReturnComponent_div_0_mat_cell_100_Template(rf, ctx) {
        if (rf & 1) {
          var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_mat_cell_100_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111);

            var element_r108 = ctx.$implicit;
            return element_r108.issuedTo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r108 = ctx.$implicit;
          var i_r109 = ctx.index;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "issuedTo-", i_r109, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r35.disableTextbox)("ngModel", element_r108.issuedTo);
        }
      }

      function ReturnComponent_div_0_mat_header_cell_102_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date Of Return ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReturnComponent_div_0_mat_cell_103_Template(rf, ctx) {
        if (rf & 1) {
          var _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_mat_cell_103_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116);

            var element_r112 = ctx.$implicit;
            return element_r112.dateOfReturn = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-datepicker-toggle", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-datepicker", null, 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r112 = ctx.$implicit;
          var i_r113 = ctx.index;

          var _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "dateOfReturn-", i_r113, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r114)("disabled", ctx_r37.disableTextbox)("ngModel", element_r112.dateOfReturn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r114);
        }
      }

      function ReturnComponent_div_0_mat_header_cell_105_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " From ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReturnComponent_div_0_mat_cell_106_Template(rf, ctx) {
        if (rf & 1) {
          var _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_mat_cell_106_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r120);

            var element_r117 = ctx.$implicit;
            return element_r117.from = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r117 = ctx.$implicit;
          var i_r118 = ctx.index;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "from-", i_r118, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r39.disableTextbox)("ngModel", element_r117.from);
        }
      }

      function ReturnComponent_div_0_mat_header_cell_108_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " To ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReturnComponent_div_0_mat_cell_109_Template(rf, ctx) {
        if (rf & 1) {
          var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_mat_cell_109_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124);

            var element_r121 = ctx.$implicit;
            return element_r121.to = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r121 = ctx.$implicit;
          var i_r122 = ctx.index;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "to-", i_r122, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r41.disableTextbox)("ngModel", element_r121.to);
        }
      }

      function ReturnComponent_div_0_mat_header_cell_111_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Reason ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReturnComponent_div_0_mat_cell_112_Template(rf, ctx) {
        if (rf & 1) {
          var _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_mat_cell_112_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r128);

            var element_r125 = ctx.$implicit;
            return element_r125.reason = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r125 = ctx.$implicit;
          var i_r126 = ctx.index;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "reason-", i_r126, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r43.disableTextbox)("ngModel", element_r125.reason);
        }
      }

      function ReturnComponent_div_0_mat_header_cell_114_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Remark ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReturnComponent_div_0_mat_cell_115_Template(rf, ctx) {
        if (rf & 1) {
          var _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_mat_cell_115_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132);

            var element_r129 = ctx.$implicit;
            return element_r129.remark = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r129 = ctx.$implicit;
          var i_r130 = ctx.index;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "remark-", i_r130, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r45.disableTextbox)("ngModel", element_r129.remark);
        }
      }

      function ReturnComponent_div_0_mat_header_cell_117_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Incoming Reference ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ReturnComponent_div_0_mat_cell_118_Template(rf, ctx) {
        if (rf & 1) {
          var _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_mat_cell_118_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136);

            var element_r133 = ctx.$implicit;
            return element_r133.incomingRef = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r133 = ctx.$implicit;
          var i_r134 = ctx.index;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "incomingRef-", i_r134, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r47.selection.isSelected(element_r133))("ngModel", element_r133.incomingRef);
        }
      }

      function ReturnComponent_div_0_mat_header_row_119_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
        }
      }

      function ReturnComponent_div_0_mat_row_120_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-row");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rowsAnimation", undefined);
        }
      }

      function ReturnComponent_div_0_div_123_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Authorized By:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Employee id: ", ctx_r50.user.empId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Name: ", ctx_r50.user.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Deparment: ", ctx_r50.user.selectedDepartment.viewValue, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Grade: ", ctx_r50.user.selectedGrade.viewValue, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Project: ", ctx_r50.user.selectedProject.viewValue, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 7, ctx_r50.selectedGpArray.authorizedDate), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 9, ctx_r50.selectedGpArray.authorizedDate, "shortTime"), " ");
        }
      }

      function ReturnComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReturnComponent_div_0_button_6_Template, 3, 0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ReturnComponent_div_0_button_7_Template, 3, 0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", null, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-list", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139);

            var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r138.selectedGpArray.createForm.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Department");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_Template_mat_select_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139);

            var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r140.selectedGpArray.createForm.selectedDepartment._id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ReturnComponent_div_0_mat_option_22_Template, 2, 2, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_Template_mat_select_ngModelChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139);

            var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r141.selectedGpArray.createForm.selectedProject._id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ReturnComponent_div_0_mat_option_28_Template, 2, 2, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-select", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_Template_mat_select_ngModelChange_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139);

            var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r142.selectedGpArray.createForm.selectedType = $event;
          })("valueChange", function ReturnComponent_div_0_Template_mat_select_valueChange_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

            var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r143.dateFunc(_r6.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ReturnComponent_div_0_mat_option_35_Template, 2, 2, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Owner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_Template_mat_select_ngModelChange_40_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139);

            var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r144.selectedGpArray.createForm.selectedOwner = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ReturnComponent_div_0_mat_option_41_Template, 2, 2, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Movement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_Template_mat_select_ngModelChange_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139);

            var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r145.selectedGpArray.createForm.selectedMovement = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ReturnComponent_div_0_mat_option_47_Template, 2, 2, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Gate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_Template_mat_select_ngModelChange_52_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139);

            var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r146.selectedGpArray.createForm.selectedGate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ReturnComponent_div_0_mat_option_53_Template, 2, 2, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Receiver");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_Template_input_ngModelChange_58_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139);

            var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r147.selectedGpArray.createForm.receiver = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-form-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Firm Represented");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReturnComponent_div_0_Template_input_ngModelChange_63_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139);

            var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r148.selectedGpArray.createForm.firm = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ReturnComponent_div_0_mat_grid_tile_64_Template, 5, 2, "mat-grid-tile", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ReturnComponent_div_0_button_67_Template, 2, 0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, ReturnComponent_div_0_button_68_Template, 2, 1, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ReturnComponent_div_0_button_69_Template, 2, 0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, ReturnComponent_div_0_button_70_Template, 2, 1, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ReturnComponent_div_0_button_71_Template, 2, 0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, ReturnComponent_div_0_button_72_Template, 2, 0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, ReturnComponent_div_0_button_73_Template, 2, 0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, ReturnComponent_div_0_button_74_Template, 2, 0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-table", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](77, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, ReturnComponent_div_0_mat_header_cell_78_Template, 2, 3, "mat-header-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, ReturnComponent_div_0_mat_cell_79_Template, 2, 2, "mat-cell", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](80, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, ReturnComponent_div_0_mat_header_cell_81_Template, 2, 0, "mat-header-cell", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, ReturnComponent_div_0_mat_cell_82_Template, 2, 1, "mat-cell", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](83, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, ReturnComponent_div_0_mat_header_cell_84_Template, 2, 0, "mat-header-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, ReturnComponent_div_0_mat_cell_85_Template, 3, 3, "mat-cell", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](86, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, ReturnComponent_div_0_mat_header_cell_87_Template, 2, 0, "mat-header-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, ReturnComponent_div_0_mat_cell_88_Template, 3, 3, "mat-cell", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](89, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, ReturnComponent_div_0_mat_header_cell_90_Template, 2, 0, "mat-header-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, ReturnComponent_div_0_mat_cell_91_Template, 3, 3, "mat-cell", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](92, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, ReturnComponent_div_0_mat_header_cell_93_Template, 2, 0, "mat-header-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, ReturnComponent_div_0_mat_cell_94_Template, 3, 5, "mat-cell", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](95, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, ReturnComponent_div_0_mat_header_cell_96_Template, 2, 0, "mat-header-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, ReturnComponent_div_0_mat_cell_97_Template, 4, 4, "mat-cell", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](98, 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, ReturnComponent_div_0_mat_header_cell_99_Template, 2, 0, "mat-header-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, ReturnComponent_div_0_mat_cell_100_Template, 3, 3, "mat-cell", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](101, 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, ReturnComponent_div_0_mat_header_cell_102_Template, 2, 0, "mat-header-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, ReturnComponent_div_0_mat_cell_103_Template, 5, 5, "mat-cell", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](104, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, ReturnComponent_div_0_mat_header_cell_105_Template, 2, 0, "mat-header-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, ReturnComponent_div_0_mat_cell_106_Template, 3, 3, "mat-cell", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](107, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, ReturnComponent_div_0_mat_header_cell_108_Template, 2, 0, "mat-header-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, ReturnComponent_div_0_mat_cell_109_Template, 3, 3, "mat-cell", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](110, 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, ReturnComponent_div_0_mat_header_cell_111_Template, 2, 0, "mat-header-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, ReturnComponent_div_0_mat_cell_112_Template, 3, 3, "mat-cell", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](113, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, ReturnComponent_div_0_mat_header_cell_114_Template, 2, 0, "mat-header-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, ReturnComponent_div_0_mat_cell_115_Template, 3, 3, "mat-cell", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](116, 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, ReturnComponent_div_0_mat_header_cell_117_Template, 2, 0, "mat-header-cell", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, ReturnComponent_div_0_mat_cell_118_Template, 3, 3, "mat-cell", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, ReturnComponent_div_0_mat_header_row_119_Template, 1, 0, "mat-header-row", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, ReturnComponent_div_0_mat_row_120_Template, 1, 1, "mat-row", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, ReturnComponent_div_0_div_123_Template, 22, 12, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "mat-card", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "mat-card-header", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Created By:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](141, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](144, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gate Pass Number: ", ctx_r0.selectedGpArray.gatePassNo, " Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Status: ", ctx_r0.selectedGpArray.status, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedGpArray.status === "Authorized");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deleteBool);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r0.selectedGpArray.createForm.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r0.selectedGpArray.createForm.selectedDepartment._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.departments);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectedGpArray.createForm.selectedProject._id)("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.projects);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.disableTextbox)("ngModel", ctx_r0.selectedGpArray.createForm.selectedType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.types);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.disableTextbox)("ngModel", ctx_r0.selectedGpArray.createForm.selectedOwner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.owners);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.disableTextbox)("ngModel", ctx_r0.selectedGpArray.createForm.selectedMovement);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.movements);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.disableTextbox)("ngModel", ctx_r0.selectedGpArray.createForm.selectedGate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.gates);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.disableTextbox)("ngModel", ctx_r0.selectedGpArray.createForm.receiver);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.disableTextbox)("ngModel", ctx_r0.selectedGpArray.createForm.firm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedGpArray.createForm.selectedOwner == ctx_r0.owners[1].viewValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.disableTextbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.disableTextbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.disableTextbox || ctx_r0.returnState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.disableTextbox || ctx_r0.returnState);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.authBool && ctx_r0.disableTextbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.disableTextbox && ctx_r0.exitBool);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedGpArray.createForm.selectedType === "Returnable" && !ctx_r0.returnState && ctx_r0.disableTextbox && ctx_r0.returnBool);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.editBool && ctx_r0.disableTextbox);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.dsGatePass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.dcGatePass)("matHeaderRowDefSticky", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.dcGatePass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedGpArray.authorized && ctx_r0.selectedGpArray.authorizedDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Employee id: ", ctx_r0.selectedGpArray.createdBy.empId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Name: ", ctx_r0.selectedGpArray.createdBy.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Deparment: ", ctx_r0.selectedGpArray.createdBy.selectedDepartment.viewValue, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Grade: ", ctx_r0.selectedGpArray.createdBy.selectedGrade.viewValue, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Project: ", ctx_r0.selectedGpArray.createdBy.selectedProject.viewValue, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](141, 49, ctx_r0.selectedGpArray.createdAt), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](144, 51, ctx_r0.selectedGpArray.createdAt, "shortTime"), " ");
        }
      }

      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default.a.pdfMake.vfs; // interface Gate {
      //   viewValue: string;
      // }

      var ReturnComponent = /*#__PURE__*/function () {
        function ReturnComponent(userService, dialog, router, _snackBar, printService) {
          _classCallCheck(this, ReturnComponent);

          this.userService = userService;
          this.dialog = dialog;
          this.router = router;
          this._snackBar = _snackBar;
          this.printService = printService;
          this.dcGatePass = ['sno', 'modeOfTransport', 'description', 'quantity', 'unit', 'issuedTo', 'from', 'to', 'reason', 'remark', 'dateOfReturn'];
          this.dcGatePassStd = ['sno', 'modeOfTransport', 'description', 'quantity', 'unit', 'issuedTo', 'from', 'to', 'reason', 'remark', 'dateOfReturn'];
          this.dcGatePassRet = ['select', 'sno', 'modeOfTransport', 'description', 'quantity', 'quantityRet', 'unit', 'issuedTo', 'from', 'to', 'reason', 'remark', 'incomingRef', 'dateOfReturn'];
          this.dcGatePassRetNoCheck = ['sno', 'modeOfTransport', 'description', 'quantity', 'quantityRet', 'unit', 'issuedTo', 'from', 'to', 'reason', 'remark', 'incomingRef', 'dateOfReturn'];
          this.disableTextbox = true;
          this.loggedIn = this.userService.loggedIn;
          this.returnState = false;
          this.types = [{
            viewValue: 'Returnable'
          }, {
            viewValue: 'Non-Returnable'
          }];
          this.owners = [{
            viewValue: 'NTPC'
          }, {
            viewValue: 'Vendor'
          }];
          this.movements = [{
            viewValue: 'In'
          }, {
            viewValue: 'Out'
          }, {
            viewValue: 'Within'
          }];
          this.exitBool = false;
          this.deleteBool = false;
          this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
          this.returnBool = false;
        }

        _createClass(ReturnComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getDepartments();
            this.getProjects();

            if (this.userService.selectedGpArray === undefined) {
              this.setSelectedGpArray();
            } else {
              this.onSelect(this.userService.selectedGpArray);
              this.gates = this.selectedGpArray.createForm.selectedProject.gates;
              this.getUnits();
            }
          }
        }, {
          key: "setSelectedGpArray",
          value: function setSelectedGpArray() {
            var _this36 = this;

            this.userService.searchGatePasses(this.userService.getGpNoFromLocal(), '0', this.userService.loggedIn.selectedProject._id).subscribe(function (gpArrays) {
              _this36.userService.selectedGpArray = gpArrays[0];

              _this36.onSelect(_this36.userService.selectedGpArray);

              _this36.gates = _this36.selectedGpArray.createForm.selectedProject.gates;

              _this36.getUnits();
            });
          } // selectedGateViewValue;
          // calcSelectedGate() {
          //   for(const gate of this.gates) {
          //     if(this.selectedGpArray.createForm.selectedGate === gate._id) {
          //       this.selectedGateViewValue = gate.viewValue;
          //       break;
          //     }
          //   }
          // }

        }, {
          key: "dateFunc",
          value: function dateFunc(value) {
            console.log(value); // this.createForm.controls.selectedType.value

            var _iterator9 = _createForOfIteratorHelper(this.dcGatePass),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var dc = _step9.value;

                if (dc == "dateOfReturn") {
                  this.dcDate = true;
                  break;
                } else {
                  this.dcDate = false;
                }
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            if (value === "Non-Returnable" && this.dcDate === true) {
              this.dcGatePass.pop();
              this.selectedGpArray.gatePass.forEach(function (gatePass) {
                gatePass.dateOfReturn = null;
              });
            } else if (value === "Returnable" && this.dcDate === false) {
              this.dcGatePass.push('dateOfReturn');
            }
          }
        }, {
          key: "checkExit",
          value: function checkExit() {
            if (this.loggedIn.selectedUserType === 'Security' && this.selectedGpArray.status === 'Authorized') {
              this.exitBool = true;
            } else {
              this.exitBool = false;
            }
          }
        }, {
          key: "checkDelete",
          value: function checkDelete() {
            if (this.userService.loggedIn.empId === this.selectedGpArray.createdBy.empId && this.selectedGpArray.status === 'Created') {
              this.deleteBool = true;
            } else {
              this.deleteBool = false;
            }
          }
        }, {
          key: "deleteGatePass",
          value: function deleteGatePass() {
            var _this37 = this;

            var dialogRef = this.dialog.open(DialogContentReturn, {
              data: {
                header: 'Delete Gate Pass',
                message: 'Are you sure you want to delete Gate Pass?'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              // console.log(`Dialog result: ${result}`);
              if (result == true) {
                _this37.userService.deleteGpArray(_this37.selectedGpArray).subscribe(function (gpArray) {
                  _this37._snackBar.open("Gate Pass ".concat(gpArray.gatePassNo, " Deleted Successfully"), 'Ok', {
                    duration: 2000
                  });

                  _this37.router.navigate(['home']);
                });
              }
            });
          }
        }, {
          key: "getUnits",
          value: function getUnits() {
            var _this38 = this;

            this.userService.getUnits().subscribe(function (units) {
              return _this38.Units = units;
            });
          }
        }, {
          key: "getProjects",
          value: function getProjects() {
            var _this39 = this;

            this.userService.getProjects().subscribe(function (projects) {
              return _this39.projects = projects;
            });
          }
        }, {
          key: "getDepartments",
          value: function getDepartments() {
            var _this40 = this;

            this.userService.getDepartments().subscribe(function (departments) {
              return _this40.departments = departments;
            });
          }
          /** Whether the number of selected elements matches the total number of rows. */

        }, {
          key: "isAllSelected",
          value: function isAllSelected() {
            var numSelected = this.selection.selected.length;
            var numRows = this.dsGatePass.data.length;
            return numSelected === numRows;
          }
          /** Selects all rows if they are not all selected; otherwise clear selection. */

        }, {
          key: "masterToggle",
          value: function masterToggle() {
            var _this41 = this;

            this.isAllSelected() ? this.selection.clear() : this.dsGatePass.data.forEach(function (row) {
              return _this41.selection.select(row);
            });
          }
          /** The label for the checkbox on the passed row */

        }, {
          key: "checkboxLabel",
          value: function checkboxLabel(row) {
            if (!row) {
              return "".concat(this.isAllSelected() ? 'select' : 'deselect', " all");
            }

            return "".concat(this.selection.isSelected(row) ? 'deselect' : 'select', " row ").concat(row.sno + 1);
          }
        }, {
          key: "createNewGatePass",
          value: function createNewGatePass(sno) {
            return {
              sno: sno,
              modeOfTransport: null,
              description: null,
              quantity: null,
              unit: {
                _id: null,
                tolerance: null,
                viewValue: null
              },
              issuedTo: null,
              dateOfReturn: null,
              from: null,
              to: null,
              reason: null,
              remark: null,
              incomingRef: null
            };
          } // appQuantityRetValidator(quantity: number, tolerance: number): ValidatorFn {
          //   return (control: AbstractControl): { [key: string]: boolean} | null
          //   return null;
          // }

        }, {
          key: "addRow",
          value: function addRow() {
            this.dsGatePass.data.push(this.createNewGatePass(this.dsGatePass.data.length + 1));
            this.dsGatePass.filter = "";
          }
        }, {
          key: "deleteRow",
          value: function deleteRow() {
            this.dsGatePass.data.pop();
            this.dsGatePass.filter = "";
          }
        }, {
          key: "toggleEdit",
          value: function toggleEdit() {
            this.disableTextbox = false;
          }
        }, {
          key: "toggleReturn",
          value: function toggleReturn() {
            this.dcGatePass = this.dcGatePassRet;
            this.returnState = true;
          }
        }, {
          key: "exitGp",
          value: function exitGp() {
            if (this.selectedGpArray.status === 'Authorized') {
              this.selectedGpArray.status = 'Exited';
              this.updateData('Are you sure you want to exit Gate Pass?');
            } else {
              this._snackBar.openFromComponent(ReturnSnackComponent, {
                duration: 3 * 1000
              });
            }
          }
        }, {
          key: "cancel",
          value: function cancel() {
            var _this42 = this;

            this.userService.searchGatePasses(this.selectedGpArray.gatePassNo.toString(), '0', this.userService.loggedIn.selectedProject._id).subscribe(function (gpArray) {
              _this42.onSelect(gpArray[0]);
            });
            this.returnState = false; // this.disableTextbox = true;
            // this.dcGatePass = this.dcGatePassStd;
          }
        }, {
          key: "onSelect",
          value: function onSelect(gpArray) {
            console.log(gpArray);
            this.disableTextbox = true;
            gpArray.createdBy = this.createdByDetails(gpArray.createdBy, gpArray.createdAt);

            if (gpArray.authorized != null) {
              gpArray.authorized = this.authorizedDetails(gpArray.authorized, gpArray.authorizedDate);
            }

            this.selectedGpArray = gpArray;
            this.user = this.selectedGpArray.authorized; // if (this.dcGatePass != this.dcGatePassStd) {
            //   this.dcGatePass = this.dcGatePassStd;
            // }

            this.gpStatusCheck();
            this.gatePassTypeCheck();
            this.dsGatePass = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.selectedGpArray.gatePass);
            this.checkAuth();
            this.checkEdit();
            this.checkExit();
            this.checkReturn();
            this.checkDelete();
          }
        }, {
          key: "gpStatusCheck",
          value: function gpStatusCheck() {
            if ((this.selectedGpArray.status === 'Returned' || this.selectedGpArray.status === 'Partially Returned') && this.returnState == false && this.selectedGpArray.createForm.selectedType === 'Returnable') {
              this.dcGatePass = this.dcGatePassRetNoCheck;
            } else if (this.selectedGpArray.createForm.selectedType === 'Returnable' && this.returnState == true) {
              this.dcGatePass = this.dcGatePassRet;
            } else {
              this.dcGatePass = this.dcGatePassStd;
            }
          }
        }, {
          key: "gatePassTypeCheck",
          value: function gatePassTypeCheck() {
            var _iterator10 = _createForOfIteratorHelper(this.dcGatePass),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var dc = _step10.value;

                if (dc == "dateOfReturn") {
                  this.dcDate = true;
                  break;
                } else {
                  this.dcDate = false;
                }
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }

            if (this.selectedGpArray.createForm.selectedType === "Non-Returnable" && this.dcDate === true) {
              this.dcGatePass.pop();
            } else if (this.selectedGpArray.createForm.selectedType === "Returnable" && this.dcDate === false) {
              this.dcGatePass.push('dateOfReturn');
            }
          }
        }, {
          key: "authorizedDetails",
          value: function authorizedDetails(authorized, authorizedDate) {
            var iterator4 = authorized.Project[Symbol.iterator]();

            if (authorized.Project.length > 1) {
              var _iterator11 = _createForOfIteratorHelper(iterator4),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var Pro = _step11.value;

                  if (authorizedDate >= Pro.from && authorizedDate < Pro.to || Pro.to === null) {
                    authorized.selectedProject = Pro.selectedProject;
                    break;
                  }
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }
            }

            var iterator5 = authorized.Grade[Symbol.iterator]();

            if (authorized.Grade.length > 1) {
              var _iterator12 = _createForOfIteratorHelper(iterator5),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var Gra = _step12.value;

                  if (authorizedDate >= Gra.from && authorizedDate < Gra.to || Gra.to === null) {
                    authorized.selectedGrade = Gra.selectedGrade;
                    break;
                  }
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
            }

            var iterator6 = authorized.Department[Symbol.iterator]();

            if (authorized.Department.length > 1) {
              var _iterator13 = _createForOfIteratorHelper(iterator6),
                  _step13;

              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                  var Dep = _step13.value;

                  if (authorizedDate >= Dep.from && authorizedDate < Dep.to || Dep.to === null) {
                    authorized.selectedDepartment = Dep.selectedDepartment;
                    break;
                  }
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }
            }

            return authorized;
          }
        }, {
          key: "createdByDetails",
          value: function createdByDetails(createdBy, createdAt) {
            var iterator = createdBy.Project[Symbol.iterator]();

            if (createdBy.Project.length > 1) {
              var _iterator14 = _createForOfIteratorHelper(iterator),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var Pro = _step14.value;

                  if (createdAt >= Pro.from && createdAt < Pro.to || Pro.to === null) {
                    createdBy.selectedProject = Pro.selectedProject;
                    break;
                  }
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }
            }

            var iterator2 = createdBy.Grade[Symbol.iterator]();

            if (createdBy.Grade.length > 1) {
              var _iterator15 = _createForOfIteratorHelper(iterator2),
                  _step15;

              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  var Gra = _step15.value;

                  if (createdAt >= Gra.from && createdAt < Gra.to || Gra.to === null) {
                    createdBy.selectedGrade = Gra.selectedGrade;
                    break;
                  }
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }
            }

            var iterator3 = createdBy.Department[Symbol.iterator]();

            if (createdBy.Department.length > 1) {
              var _iterator16 = _createForOfIteratorHelper(iterator3),
                  _step16;

              try {
                for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                  var Dep = _step16.value;

                  if (createdAt >= Dep.from && createdAt < Dep.to || Dep.to === null) {
                    createdBy.selectedDepartment = Dep.selectedDepartment;
                    break;
                  }
                }
              } catch (err) {
                _iterator16.e(err);
              } finally {
                _iterator16.f();
              }
            }

            return createdBy;
          }
        }, {
          key: "checkEdit",
          value: function checkEdit() {
            if (this.userService.loggedIn.empId === this.selectedGpArray.createdBy.empId && this.selectedGpArray.status === 'Created') {
              this.editBool = true;
            } else {
              this.editBool = false;
            }
          }
        }, {
          key: "checkReturn",
          value: function checkReturn() {
            if (this.userService.loggedIn.selectedUserType === 'Security' && (this.selectedGpArray.status === 'Exited' || this.selectedGpArray.status === 'Partially Returned')) {
              this.returnBool = true;
            }
          }
        }, {
          key: "checkAuth",
          value: function checkAuth() {
            if (!this.userService.loggedIn.selectedAuthorization || this.selectedGpArray.authorized) {
              this.authBool = false;
              return;
            } else {
              var iterator = this.userService.loggedIn.authorizedTo[Symbol.iterator]();

              var _iterator17 = _createForOfIteratorHelper(iterator),
                  _step17;

              try {
                for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                  var authorizedToo = _step17.value;

                  if (authorizedToo.empId === this.selectedGpArray.createdBy.empId) {
                    this.authBool = true;
                  }
                }
              } catch (err) {
                _iterator17.e(err);
              } finally {
                _iterator17.f();
              }
            }
          }
        }, {
          key: "toggleAuthorize",
          value: function toggleAuthorize() {
            var _this43 = this;

            this.selectedGpArray2 = this.selectedGpArray;
            this.selectedGpArray2.authorized = this.loggedIn;
            this.selectedGpArray2.status = 'Authorized'; // console.log(this.selectedGpArray.authorized)
            // console.log(this.selectedGpArray)

            this.userService.updateGpArray(this.selectedGpArray2).subscribe(function (updatedGpArray) {
              _this43.onSelect(updatedGpArray); // this.user = updatedGpArray.authorized;
              // this.selectedGpArray.authorizedDate = updatedGpArray.authorizedDate;
              // this.authBool = false;
              // location.reload();

            });
          } // checkStatus() {
          //   var counter = 0;
          //   for (let i=0; i<this.selectedGpArray.gatePass.length; i++) {
          //     if(this.selectedGpArray.gatePass[i].quantityRet > )
          //   }
          // }

        }, {
          key: "updateData",
          value: function updateData(msg) {
            var _this44 = this;

            var dialogRef = this.dialog.open(DialogContentReturn, {
              data: {
                header: 'Update Data',
                message: msg
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              // console.log(`Dialog result: ${result}`);
              if (result == true) {
                if (_this44.returnState === true) {
                  _this44.selectedGpArray.status === 'Returned';
                }

                _this44.userService.updateGpArray(_this44.selectedGpArray).subscribe(function (gpArray) {
                  // location.reload();
                  _this44.onSelect(gpArray);
                });
              } else {
                if (msg === 'Are you sure you want to exit Gate Pass?') {
                  _this44.selectedGpArray.status = 'Authorized';
                }
              }
            });
          }
        }, {
          key: "generatePdf",
          value: function generatePdf() {
            this.printService.generatePdf(this.selectedGpArray, 'Return');
          }
        }]);

        return ReturnComponent;
      }();

      ReturnComponent.ɵfac = function ReturnComponent_Factory(t) {
        return new (t || ReturnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_print_print_service__WEBPACK_IMPORTED_MODULE_10__["PrintService"]));
      };

      ReturnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReturnComponent,
        selectors: [["app-return"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "row-button"], ["mat-mini-fab", "", "aria-label", "fab icon button", 3, "click", 4, "ngIf"], ["mat-mini-fab", "", 3, "click", 4, "ngIf"], ["myForm", "ngForm"], [1, "mat-elevation-z8", "create-card"], ["cols", "5", "rowHeight", "5:1"], ["appearance", "standard"], ["matInput", "", "placeholder", "Name", "name", "name", 3, "disabled", "ngModel", "ngModelChange"], ["name", "department", 3, "disabled", "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "project", 3, "ngModel", "disabled", "ngModelChange"], ["name", "type", "required", "", 3, "disabled", "ngModel", "ngModelChange", "valueChange"], ["typeSelect", ""], ["name", "owner", "required", "", 3, "disabled", "ngModel", "ngModelChange"], ["name", "movement", "required", "", 3, "disabled", "ngModel", "ngModelChange"], ["name", "gate", "required", "", 3, "disabled", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Receiver", "name", "receiver", "required", "", 3, "disabled", "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Firm Represented", "name", "firm", "required", "", 3, "disabled", "ngModel", "ngModelChange"], ["mat-raised-button", "", "type", "button", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "type", "button", "color", "primary", 3, "click", 4, "ngIf"], [1, "example-container", "mat-elevation-z8"], [3, "dataSource"], ["matColumnDef", "select"], [4, "matHeaderCellDef"], ["class", "first chk-box", 4, "matCellDef"], ["matColumnDef", "sno"], ["class", "first", 4, "matHeaderCellDef"], ["class", "first", 4, "matCellDef"], ["matColumnDef", "modeOfTransport"], [4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "quantity"], ["matColumnDef", "quantityRet"], ["matColumnDef", "unit"], ["matColumnDef", "issuedTo"], ["matColumnDef", "dateOfReturn"], ["matColumnDef", "from"], ["matColumnDef", "to"], ["matColumnDef", "reason"], ["matColumnDef", "remark"], ["matColumnDef", "incomingRef"], ["class", "last", 4, "matCellDef"], [4, "matHeaderRowDef", "matHeaderRowDefSticky"], [4, "matRowDef", "matRowDefColumns"], [1, "user-card", "example-container", "mat-elevation-z8"], [1, "header"], [1, "row"], ["mat-mini-fab", "", "aria-label", "fab icon button", 3, "click"], ["mat-mini-fab", "", 3, "click"], [3, "value"], ["matInput", "", "placeholder", "Vendor Name", "name", "vendor", "required", "", 3, "disabled", "ngModel", "ngModelChange"], ["mat-raised-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "type", "button", 3, "disabled", "click"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "disabled", "click"], ["mat-raised-button", "", "type", "button", "color", "accent", 3, "click"], ["mat-raised-button", "", "type", "button", "color", "primary", 3, "click"], [1, "chk-box-header", 3, "checked", "indeterminate", "aria-label", "change"], [1, "first", "chk-box"], [3, "checked", "aria-label", "click", "change"], [1, "first"], ["matInput", "", "type", "text", "required", "", 3, "disabled", "ngModel", "name", "ngModelChange"], ["matInput", "", "type", "number", "required", "", 3, "disabled", "ngModel", "name", "ngModelChange"], ["matInput", "", "type", "number", "required", "", 3, "disabled", "ngModel", "name", "appQuantityRetValidator", "ngModelChange"], ["required", "", 3, "disabled", "ngModel", "name", "ngModelChange"], ["matInput", "", "required", "", "readonly", "true", 3, "matDatepicker", "disabled", "ngModel", "name", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker1", ""], [1, "last"]],
        template: function ReturnComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ReturnComponent_div_0_Template, 145, 54, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedGpArray);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridTile"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NumberValueAccessor"], _quantity_ret_validator_directive__WEBPACK_IMPORTED_MODULE_22__["QuantityRetValidatorDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__["MatDatepicker"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]],
        styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{\r\n  margin: 1%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n\r\nli[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n\r\nmat-cell[_ngcontent-%COMP%] {\r\n  margin-right:1rem;\r\n\r\n}\r\n\r\n.row-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-right: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nmat-cell[_ngcontent-%COMP%]:first-of-type, mat-header-cell[_ngcontent-%COMP%]:first-of-type, mat-footer-cell[_ngcontent-%COMP%]:first-of-type {\r\n  padding-left: 0;\r\n}\r\n\r\n.first[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.last[_ngcontent-%COMP%] {\r\n  margin-right: 1rem;\r\n}\r\n\r\n.search-table-mat-cell[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.searchTable[_ngcontent-%COMP%]   mat-row[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  background: #3f51b54d;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%] {\r\n  background: #3f51b5;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n\r\n.chk-box[_ngcontent-%COMP%] {\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n.chk-box-header[_ngcontent-%COMP%]     .mat-checkbox-frame{\r\n  border-color: white\r\n}\r\n\r\nmat-header-cell[_ngcontent-%COMP%] {\r\n  \r\n  display: flex;\r\n  justify-content: center;\r\n  background: #3f51b5;\r\n  color: #fff;\r\n}\r\n\r\n\r\n\r\nmat-grid-tile[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nmat-label[_ngcontent-%COMP%] {\r\n  color: rgba(0, 0, 0, 0.54);\r\n}\r\n\r\n.example-container[_ngcontent-%COMP%] {\r\n  \r\n  max-height: 500px;\r\n  min-width: 204px;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.create-card[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.mat-table[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n  max-height: 460px;\r\n}\r\n\r\n\r\n\r\n.general-button[_ngcontent-%COMP%]  {\r\n  float: right;\r\n}\r\n\r\n.row-button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.user-card[_ngcontent-%COMP%] {\r\n  width: 220px;\r\n  background: #3f51b5;\r\n  color: #fff;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0dXJuL3JldHVybi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTs7OztHQUlHOztBQUdGO0VBQ0MsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFDQztFQUNDLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUNBO0VBQ0UsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBR0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBQ0E7OztHQUdHOztBQUNIO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFDQTtFQUNFOzJCQUN5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFDQTs7R0FFRzs7QUFFSDtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3JldHVybi9yZXR1cm4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5oMSwgaDJ7XHJcbiAgbWFyZ2luOiAxJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLyogbWF0LWdyaWQtbGlzdHtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgYm9yZGVyOiBzb2xpZCAjM2Y1MWI1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0gKi9cclxuXHJcblxyXG4gbGkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xyXG4gIG1hcmdpbjogLjVlbTtcclxuICBwYWRkaW5nOiAuM2VtIDA7XHJcbiAgaGVpZ2h0OiAxLjZlbTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuIGxpOmhvdmVyIHtcclxuICBjb2xvcjogIzYwN0Q4QjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xyXG4gIGxlZnQ6IC4xZW07XHJcbn1cclxubWF0LWNlbGwge1xyXG4gIG1hcmdpbi1yaWdodDoxcmVtO1xyXG5cclxufVxyXG5cclxuLnJvdy1idXR0b24gYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuXHJcbm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsIG1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlLCBtYXQtZm9vdGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcbi5maXJzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubGFzdCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5cclxuLnNlYXJjaC10YWJsZS1tYXQtY2VsbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaFRhYmxlIG1hdC1yb3c6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1NGQ7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZDogIzNmNTFiNTtcclxufVxyXG5cclxuLnNlbGVjdGVkIC5tYXQtY2VsbCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jaGstYm94IHtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG59XHJcblxyXG4uY2hrLWJveC1oZWFkZXIgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtZnJhbWV7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIC8qIG1hcmdpbjogMXJlbSAwIDAgMDsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLyogbWF0LWhlYWRlci1jZWxsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59ICovXHJcbm1hdC1ncmlkLXRpbGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5tYXQtbGFiZWwge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xyXG59XHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgLyogZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIG1pbi13aWR0aDogMjA0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4uY3JlYXRlLWNhcmQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLm1hdC10YWJsZSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogNDYwcHg7XHJcbn1cclxuLyogYnV0dG9uIHtcclxuICBtYXJnaW46IDFyZW07XHJcbn0gKi9cclxuXHJcbi5nZW5lcmFsLWJ1dHRvbiAge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnJvdy1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnVzZXItY2FyZCB7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5maWx0ZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcbiJdfQ== */"],
        data: {
          animation: [_animations_template_animations__WEBPACK_IMPORTED_MODULE_3__["rowsAnimation"]]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReturnComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-return',
            templateUrl: './return.component.html',
            styleUrls: ['./return.component.css'],
            animations: [_animations_template_animations__WEBPACK_IMPORTED_MODULE_3__["rowsAnimation"]]
          }]
        }], function () {
          return [{
            type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]
          }, {
            type: _services_print_print_service__WEBPACK_IMPORTED_MODULE_10__["PrintService"]
          }];
        }, null);
      })();

      var DialogContentReturn = function DialogContentReturn(data) {
        _classCallCheck(this, DialogContentReturn);

        this.data = data;
      };

      DialogContentReturn.ɵfac = function DialogContentReturn_Factory(t) {
        return new (t || DialogContentReturn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]));
      };

      DialogContentReturn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DialogContentReturn,
        selectors: [["dialog-content-return"]],
        decls: 10,
        vars: 3,
        consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]],
        template: function DialogContentReturn_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ok");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.header);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogContentReturn, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dialog-content-return',
            templateUrl: 'dialog-content-return.html'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();

      var ReturnSnackComponent = function ReturnSnackComponent() {
        _classCallCheck(this, ReturnSnackComponent);
      };

      ReturnSnackComponent.ɵfac = function ReturnSnackComponent_Factory(t) {
        return new (t || ReturnSnackComponent)();
      };

      ReturnSnackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReturnSnackComponent,
        selectors: [["snack-bar-component-returnSnack"]],
        decls: 4,
        vars: 0,
        consts: [[1, "user-edited"], ["aria-hidden", "false", "aria-label", "Warning Icon"]],
        template: function ReturnSnackComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " You cannot exit this Gate Pass!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"]],
        styles: [".user-edited[_ngcontent-%COMP%] {\n      color: hotpink;\n    }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReturnSnackComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'snack-bar-component-returnSnack',
            templateUrl: 'snack-bar-component-returnSnack.html',
            styles: ["\n    .user-edited {\n      color: hotpink;\n    }\n  "]
          }]
        }], null, null);
      })();

      var MessageSnackComponent = function MessageSnackComponent() {
        _classCallCheck(this, MessageSnackComponent);
      };

      MessageSnackComponent.ɵfac = function MessageSnackComponent_Factory(t) {
        return new (t || MessageSnackComponent)();
      };

      MessageSnackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MessageSnackComponent,
        selectors: [["snack-bar-component-message"]],
        decls: 0,
        vars: 0,
        template: function MessageSnackComponent_Template(rf, ctx) {},
        styles: [".example-pizza-party[_ngcontent-%COMP%] {\n      color: hotpink;\n    }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageSnackComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'snack-bar-component-message',
            templateUrl: '../snack-bar-component-message.html',
            styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/message/message.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/services/message/message.service.ts ***!
      \*****************************************************/

    /*! exports provided: MessageService */

    /***/
    function srcAppServicesMessageMessageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageService", function () {
        return MessageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MessageService = /*#__PURE__*/function () {
        function MessageService() {
          _classCallCheck(this, MessageService);

          this.messages = [];
        }

        _createClass(MessageService, [{
          key: "add",
          value: function add(message) {
            this.messages.push(message);
          }
        }, {
          key: "clear",
          value: function clear() {
            this.messages = [];
          }
        }]);

        return MessageService;
      }();

      MessageService.ɵfac = function MessageService_Factory(t) {
        return new (t || MessageService)();
      };

      MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MessageService,
        factory: MessageService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/print/print.service.ts":
    /*!*************************************************!*\
      !*** ./src/app/services/print/print.service.ts ***!
      \*************************************************/

    /*! exports provided: PrintService */

    /***/
    function srcAppServicesPrintPrintServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrintService", function () {
        return PrintService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! pdfmake/build/pdfmake */
      "./node_modules/pdfmake/build/pdfmake.js");
      /* harmony import */


      var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! pdfmake/build/vfs_fonts */
      "./node_modules/pdfmake/build/vfs_fonts.js");
      /* harmony import */


      var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_2___default.a.pdfMake.vfs;

      var PrintService = /*#__PURE__*/function () {
        function PrintService() {
          _classCallCheck(this, PrintService);
        }

        _createClass(PrintService, [{
          key: "calcSelectedGate",
          value: function calcSelectedGate(selectedGateId, selectedProject) {
            this.gates = selectedProject.gates;
            var gate = this.gates.find(function (gate) {
              return gate._id === selectedGateId;
            });
            this.selectedGateViewValue = gate.viewValue;
          }
        }, {
          key: "getGatePassObject",
          value: function getGatePassObject(gatePass, selectedType) {
            if (selectedType === 'Returnable') {
              return {
                table: {
                  // headerRows: 1,
                  widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
                  body: [[{
                    text: 'SNo.',
                    style: 'tableHeader'
                  }, {
                    text: 'Mode Of Transport',
                    style: 'tableHeader'
                  }, {
                    text: 'Description',
                    style: 'tableHeader'
                  }, {
                    text: 'Quantity',
                    style: 'tableHeader'
                  }, {
                    text: 'Unit',
                    style: 'tableHeader'
                  }, {
                    text: 'Issued To',
                    style: 'tableHeader'
                  }, {
                    text: 'From',
                    style: 'tableHeader'
                  }, {
                    text: 'To',
                    style: 'tableHeader'
                  }, {
                    text: 'Reason',
                    style: 'tableHeader'
                  }, {
                    text: 'Remark',
                    style: 'tableHeader'
                  }, {
                    text: 'Date Of Return',
                    style: 'tableHeader'
                  }]].concat(_toConsumableArray(gatePass.map(function (gp) {
                    var date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(gp.dateOfReturn, 'dd-MM-yyyy', 'en-US', '+0530');
                    return [gp.sno, gp.modeOfTransport, gp.description, gp.quantity, gp.unit.viewValue, gp.issuedTo, gp.from, gp.to, gp.reason, gp.remark, date];
                  })))
                }
              };
            } else {
              return {
                table: {
                  // headerRows: 1,
                  widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
                  body: [[{
                    text: 'SNo.',
                    style: 'tableHeader'
                  }, {
                    text: 'Mode Of Transport',
                    style: 'tableHeader'
                  }, {
                    text: 'Description',
                    style: 'tableHeader'
                  }, {
                    text: 'Quantity',
                    style: 'tableHeader'
                  }, {
                    text: 'Unit',
                    style: 'tableHeader'
                  }, {
                    text: 'Issued To',
                    style: 'tableHeader'
                  }, {
                    text: 'From',
                    style: 'tableHeader'
                  }, {
                    text: 'To',
                    style: 'tableHeader'
                  }, {
                    text: 'Reason',
                    style: 'tableHeader'
                  }, {
                    text: 'Remark',
                    style: 'tableHeader'
                  }]].concat(_toConsumableArray(gatePass.map(function (gp) {
                    return [gp.sno, gp.modeOfTransport, gp.description, gp.quantity, gp.unit.viewValue, gp.issuedTo, gp.from, gp.to, gp.reason, gp.remark];
                  })))
                }
              };
            }
          }
        }, {
          key: "getAuthorizedByHeaderObject",
          value: function getAuthorizedByHeaderObject(authorized) {
            if (authorized) {
              return {
                text: 'Authorized By: ',
                style: 'header'
              };
            }
          }
        }, {
          key: "getAuthorizedByObject",
          value: function getAuthorizedByObject(authorized, authorizedDate) {
            if (authorized) {
              var exs = [];
              var authorizedAtDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(authorizedDate, 'dd-MM-yyyy', 'en-US', '+0530');
              var authorizedAtTime = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(authorizedDate, 'hh:mm:ss a', 'en-US', '+0530');
              exs.push([{
                columns: [[{
                  text: 'Employee id: ' + authorized.empId
                }, {
                  text: 'Name: ' + authorized.name
                }, {
                  text: 'Department: ' + authorized.selectedDepartment.viewValue
                }, {
                  text: 'Grade: ' + authorized.selectedGrade.viewValue
                }, {
                  text: 'Project: ' + authorized.selectedProject.viewValue
                }, {
                  text: 'Date: ' + authorizedAtDate
                }, {
                  text: 'Time: ' + authorizedAtTime
                }]]
              }]);
              return {
                table: {
                  widths: ['auto'],
                  body: [].concat(exs)
                }
              };
            }
          }
        }, {
          key: "getCreatedByObject",
          value: function getCreatedByObject(createdBy, createdAt) {
            var exs = [];
            var createdAtDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(createdAt, 'dd-MM-yyyy', 'en-US', '+0530');
            var createdAtTime = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(createdAt, 'hh:mm:ss a', 'en-US', '+0530');
            exs.push([{
              columns: [[{
                text: 'Employee id: ' + createdBy.empId
              }, {
                text: 'Name: ' + createdBy.name
              }, {
                text: 'Department: ' + createdBy.selectedDepartment.viewValue
              }, {
                text: 'Grade: ' + createdBy.selectedGrade.viewValue
              }, {
                text: 'Project: ' + createdBy.selectedProject.viewValue
              }, {
                text: 'Date: ' + createdAtDate
              }, {
                text: 'Time: ' + createdAtTime
              }]]
            }]);
            return {
              table: {
                widths: ['auto'],
                body: [].concat(exs)
              }
            };
          }
        }, {
          key: "getDocumentDefinition",
          value: function getDocumentDefinition(gpArray, selectedGateViewValue) {
            sessionStorage.setItem('gpArray', JSON.stringify(gpArray));
            return {
              pageOrientation: 'landscape',
              content: [{
                text: 'NTPC ' + gpArray.createForm.selectedProject.viewValue + ' Gate Pass System',
                bold: true,
                fontSize: 20,
                alignment: 'center',
                margin: [0, 0, 0, 15]
              }, {
                text: 'Gate Pass Number ' + gpArray.gatePassNo,
                bold: true,
                fontSize: 16,
                alignment: 'center',
                margin: [0, 0, 0, 10]
              }, {
                text: 'Status: ' + gpArray.status,
                bold: true,
                fontSize: 12,
                alignment: 'center',
                margin: [0, 0, 0, 20]
              }, {
                columns: [[{
                  text: 'Name : ' + gpArray.createForm.name
                }, {
                  text: 'Movement : ' + gpArray.createForm.selectedMovement
                }], [{
                  text: 'Department : ' + gpArray.createForm.selectedDepartment.viewValue
                }, {
                  text: 'Gate : ' + selectedGateViewValue
                }], [{
                  text: 'Type : ' + gpArray.createForm.selectedType
                }, {
                  text: 'Firm Represented : ' + gpArray.createForm.firm
                }], [{
                  text: 'Project : ' + gpArray.createForm.selectedProject.viewValue
                }, {
                  text: 'Receiver : ' + gpArray.createForm.receiver
                }], [{
                  text: 'Owner : ' + gpArray.createForm.selectedOwner
                }, {
                  text: 'Vendor Name : ' + gpArray.createForm.vendorName
                }]],
                margin: [0, 0, 0, 20]
              }, this.getGatePassObject(gpArray.gatePass, gpArray.createForm.selectedType), // {
              //   pageOrientation: 'landscape',
              // }
              {
                columns: [[{
                  text: 'Created By: ',
                  style: 'header'
                }, this.getCreatedByObject(gpArray.createdBy, gpArray.createdAt)], [this.getAuthorizedByHeaderObject(gpArray.authorized), this.getAuthorizedByObject(gpArray.authorized, gpArray.authorizedDate)]]
              }],
              info: {
                title: 'Gate-Pass-' + gpArray.gatePassNo,
                author: gpArray.createdBy.name,
                subject: 'Gate Pass',
                keywords: 'GATE PASS, MATERIAL GATE PASS'
              },
              styles: {
                name: {
                  fontSize: 16,
                  bold: true
                },
                tableHeader: {
                  bold: true
                },
                header: {
                  fontSize: 14,
                  bold: true,
                  margin: [0, 20, 0, 10]
                }
              }
            };
          }
        }, {
          key: "generatePdf",
          value: function generatePdf(gpArray, source) {
            this.calcSelectedGate(gpArray.createForm.selectedGate, gpArray.createdBy.selectedProject);

            if (source === 'Print') {
              gpArray.createdBy = this.createdByDetails(gpArray.createdBy, gpArray.createdAt);
              gpArray.authorized = this.authorizedDetails(gpArray.authorized, gpArray.authorizedDate);
            }

            var documentDefinition = this.getDocumentDefinition(gpArray, this.selectedGateViewValue); // const documentDefinition = { content: 'This is a test PDF'};

            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_1___default.a.createPdf(documentDefinition).open();
          }
        }, {
          key: "authorizedDetails",
          value: function authorizedDetails(authorized, authorizedDate) {
            var iterator4 = authorized.Project[Symbol.iterator]();

            if (authorized.Project.length > 1) {
              var _iterator18 = _createForOfIteratorHelper(iterator4),
                  _step18;

              try {
                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  var Pro = _step18.value;

                  if (authorizedDate >= Pro.from && authorizedDate < Pro.to || Pro.to === null) {
                    authorized.selectedProject = Pro.selectedProject;
                    break;
                  }
                }
              } catch (err) {
                _iterator18.e(err);
              } finally {
                _iterator18.f();
              }
            }

            var iterator5 = authorized.Grade[Symbol.iterator]();

            if (authorized.Grade.length > 1) {
              var _iterator19 = _createForOfIteratorHelper(iterator5),
                  _step19;

              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var Gra = _step19.value;

                  if (authorizedDate >= Gra.from && authorizedDate < Gra.to || Gra.to === null) {
                    authorized.selectedGrade = Gra.selectedGrade;
                    break;
                  }
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }
            }

            var iterator6 = authorized.Department[Symbol.iterator]();

            if (authorized.Department.length > 1) {
              var _iterator20 = _createForOfIteratorHelper(iterator6),
                  _step20;

              try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                  var Dep = _step20.value;

                  if (authorizedDate >= Dep.from && authorizedDate < Dep.to || Dep.to === null) {
                    authorized.selectedDepartment = Dep.selectedDepartment;
                    break;
                  }
                }
              } catch (err) {
                _iterator20.e(err);
              } finally {
                _iterator20.f();
              }
            }

            return authorized;
          }
        }, {
          key: "createdByDetails",
          value: function createdByDetails(createdBy, createdAt) {
            var iterator = createdBy.Project[Symbol.iterator]();

            if (createdBy.Project.length > 1) {
              var _iterator21 = _createForOfIteratorHelper(iterator),
                  _step21;

              try {
                for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                  var Pro = _step21.value;

                  if (createdAt >= Pro.from && createdAt < Pro.to || Pro.to === null) {
                    createdBy.selectedProject = Pro.selectedProject;
                    break;
                  }
                }
              } catch (err) {
                _iterator21.e(err);
              } finally {
                _iterator21.f();
              }
            }

            var iterator2 = createdBy.Grade[Symbol.iterator]();

            if (createdBy.Grade.length > 1) {
              var _iterator22 = _createForOfIteratorHelper(iterator2),
                  _step22;

              try {
                for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                  var Gra = _step22.value;

                  if (createdAt >= Gra.from && createdAt < Gra.to || Gra.to === null) {
                    createdBy.selectedGrade = Gra.selectedGrade;
                    break;
                  }
                }
              } catch (err) {
                _iterator22.e(err);
              } finally {
                _iterator22.f();
              }
            }

            var iterator3 = createdBy.Department[Symbol.iterator]();

            if (createdBy.Department.length > 1) {
              var _iterator23 = _createForOfIteratorHelper(iterator3),
                  _step23;

              try {
                for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                  var Dep = _step23.value;

                  if (createdAt >= Dep.from && createdAt < Dep.to || Dep.to === null) {
                    createdBy.selectedDepartment = Dep.selectedDepartment;
                    break;
                  }
                }
              } catch (err) {
                _iterator23.e(err);
              } finally {
                _iterator23.f();
              }
            }

            return createdBy;
          }
        }]);

        return PrintService;
      }();

      PrintService.ɵfac = function PrintService_Factory(t) {
        return new (t || PrintService)();
      };

      PrintService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PrintService,
        factory: PrintService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/user/user.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/user/user.service.ts ***!
      \***********************************************/

    /*! exports provided: UserService */

    /***/
    function srcAppServicesUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../message/message.service */
      "./src/app/services/message/message.service.ts");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

      var UserService = /*#__PURE__*/function () {
        function UserService(http, messageService, _snackBar) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.messageService = messageService;
          this._snackBar = _snackBar;
          this.usersUrl = 'http://localhost:5500/api';
          this.loggedIn = this.checkLoggedIn();
          this.JWT_TOKEN = 'JWT_TOKEN';
          this.REFRESH_TOKEN = 'REFRESH_TOKEN';
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(UserService, [{
          key: "checkLoggedIn",
          value: function checkLoggedIn() {
            return JSON.parse(localStorage.getItem('USER'));
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            var _this45 = this;

            var url = "".concat(this.usersUrl, "/users");
            this.messageService.add('UserService: fetched users');
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return _this45.log('fetched users');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUsers', [])));
          }
        }, {
          key: "getAuthUsers",
          value: function getAuthUsers(selectedAuthorization) {
            var _this46 = this;

            var url = "".concat(this.usersUrl, "/authUsers/").concat(selectedAuthorization);
            this.messageService.add('UserService: fetched authUsers');
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return _this46.log('fetched authUsers');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getAuthUsers', [])));
          }
        }, {
          key: "addAuthorization",
          value: function addAuthorization(authId, uId) {
            var _this47 = this;

            console.log(authId, uId);
            var url = "".concat(this.usersUrl, "/addAuthorization/").concat(authId);
            return this.http.post(url, uId, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return _this47.log("Added Authorization");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addAuthorization')));
          }
        }, {
          key: "getProjects",
          value: function getProjects() {
            var _this48 = this;

            var url = "".concat(this.usersUrl, "/projects");
            this.messageService.add('UserService: fetched projects');
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return _this48.log('fetched projects');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getProjects', [])));
          }
        }, {
          key: "getDepartments",
          value: function getDepartments() {
            var _this49 = this;

            var url = "".concat(this.usersUrl, "/departments");
            this.messageService.add('UserService: fetched departments');
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return _this49.log('fetched departments');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getDepartments', [])));
          }
        }, {
          key: "getUnits",
          value: function getUnits() {
            var _this50 = this;

            var url = "".concat(this.usersUrl, "/units");
            this.messageService.add('UserService: fetched units');
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return _this50.log('fetched units');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUnits', [])));
          }
        }, {
          key: "getGatePasses",
          value: function getGatePasses() {
            var _this51 = this;

            var url = "".concat(this.usersUrl, "/gatepass/getall");
            this.messageService.add('UserService: fetched gatePasses');
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return _this51.log('fetched gatePasses');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getGatePasses', [])));
          }
        }, {
          key: "getGpArray",
          value: function getGpArray() {
            var _this52 = this;

            var url = "".concat(this.usersUrl, "/gatepass/GpArray/getall");
            this.messageService.add('UserService: fetched GpArray');
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return _this52.log('fetched GpArray');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getGpArray', [])));
          }
        }, {
          key: "getFilterGpArray",
          value: function getFilterGpArray(filterForm) {
            var _this53 = this;

            console.log(filterForm);
            var url = "".concat(this.usersUrl, "/gatepass/GpArray/filter");
            this.storeFilter(filterForm);
            return this.http.post(url, filterForm, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return _this53.log("Received Filtered GpArray");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getFilterGpArray')));
          }
        }, {
          key: "getInboxGpArray",
          value: function getInboxGpArray(authToId) {
            var _this54 = this;

            console.log(authToId);
            var url = "".concat(this.usersUrl, "/gatepass/GpArray/inbox");
            return this.http.post(url, authToId, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return _this54.log("Received Inbox GpArrays");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getInboxGpArray')));
          }
        }, {
          key: "getInboxAuthGpArray",
          value: function getInboxAuthGpArray(authId) {
            var _this55 = this;

            console.log(authId);
            var url = "".concat(this.usersUrl, "/gatepass/GpArray/inbox/").concat(authId);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return _this55.log("Received Inbox Authorized GpArrays");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getInboxGpArray')));
          }
        }, {
          key: "storeFilter",
          value: function storeFilter(filterForm) {
            // localStorage.setItem(this.filter, filterForm);
            localStorage.setItem('filter', JSON.stringify(filterForm));
          }
        }, {
          key: "getFilter",
          value: function getFilter() {
            // return localStorage.getItem(this.filter)
            return JSON.parse(localStorage.getItem('filter'));
          }
        }, {
          key: "storeGpArray",
          value: function storeGpArray(gatePassNoNum) {
            var gatePassNo = String(gatePassNoNum); // localStorage.setItem('gatePassNo', JSON.stringify(gatePassNo))

            localStorage.setItem('gatePassNo', gatePassNo);
          }
        }, {
          key: "storeUser",
          value: function storeUser(user) {
            localStorage.setItem('USER', JSON.stringify(user));
          }
        }, {
          key: "getGpNoFromLocal",
          value: function getGpNoFromLocal() {
            // return JSON.parse(localStorage.getItem('gatePassNo'))
            return localStorage.getItem('gatePassNo');
          }
        }, {
          key: "updateGpArray",
          value: function updateGpArray(gpArray) {
            var _this56 = this;

            var url = "".concat(this.usersUrl, "/gatepass/GpArray/update");
            return this.http.put(url, gpArray, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return _this56.log("updated GpArray id=".concat(gpArray._id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateGpArray')));
          }
        }, {
          key: "addDepartment",
          value: function addDepartment(department) {
            var _this57 = this;

            console.log(department);
            var url = "".concat(this.usersUrl, "/department/add");
            return this.http.post(url, department, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (newDepartment) {
              return _this57.log("added department w/ id=".concat(newDepartment._id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addDepartment')));
          }
        }, {
          key: "updateDepartment",
          value: function updateDepartment(department) {
            var _this58 = this;

            console.log(department);
            var url = "".concat(this.usersUrl, "/department/update");
            return this.http.put(url, department, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return _this58.log("updated department id=".concat(department._id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateDepartment')));
          }
        }, {
          key: "deleteDepartment",
          value: function deleteDepartment(department) {
            var _this59 = this;

            var id = department._id;
            var url = "".concat(this.usersUrl, "/department/delete/").concat(id);
            return this.http["delete"](url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return _this59.log("deleted department id=".concat(id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteDepartment')));
          }
        }, {
          key: "addGrade",
          value: function addGrade(grade) {
            var _this60 = this;

            console.log(grade);
            var url = "".concat(this.usersUrl, "/grade/add");
            return this.http.post(url, grade, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (newGrade) {
              return _this60.log("added grade w/ id=".concat(newGrade._id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addGrade')));
          }
        }, {
          key: "updateGrade",
          value: function updateGrade(grade) {
            var _this61 = this;

            console.log(grade);
            var url = "".concat(this.usersUrl, "/grade/update");
            return this.http.put(url, grade, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return _this61.log("updated grade id=".concat(grade._id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateGrade')));
          }
        }, {
          key: "deleteGrade",
          value: function deleteGrade(grade) {
            var _this62 = this;

            var id = grade._id;
            var url = "".concat(this.usersUrl, "/grade/delete/").concat(id);
            return this.http["delete"](url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return _this62.log("deleted grade id=".concat(id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteGrade')));
          }
        }, {
          key: "addUnit",
          value: function addUnit(unit) {
            var _this63 = this;

            console.log(unit);
            var url = "".concat(this.usersUrl, "/unit/add");
            return this.http.post(url, unit, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (newUnit) {
              return _this63.log("added unit w/ id=".concat(newUnit._id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addUnit')));
          }
        }, {
          key: "updateUnit",
          value: function updateUnit(unit) {
            var _this64 = this;

            console.log(unit);
            var url = "".concat(this.usersUrl, "/unit/update");
            return this.http.put(url, unit, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return _this64.log("updated unit id=".concat(unit._id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateUnit')));
          }
        }, {
          key: "addProject",
          value: function addProject(project) {
            var _this65 = this;

            console.log(project);
            var url = "".concat(this.usersUrl, "/project/add");
            return this.http.post(url, project, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (newProject) {
              return _this65.log("added project w/ id=".concat(newProject._id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addProject')));
          }
        }, {
          key: "addGate",
          value: function addGate(gate) {
            var _this66 = this;

            console.log(gate);
            var url = "".concat(this.usersUrl, "/gate/add");
            return this.http.post(url, gate, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (newGate) {
              return _this66.log("added gate w/ id=".concat(newGate._id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addGate')));
          }
        }, {
          key: "updateGate",
          value: function updateGate(gate) {
            var _this67 = this;

            console.log(gate);
            var url = "".concat(this.usersUrl, "/gate/update");
            return this.http.put(url, gate, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return _this67.log("updated gate id=".concat(gate._id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateGate')));
          }
        }, {
          key: "updateProject",
          value: function updateProject(project) {
            var _this68 = this;

            console.log(project);
            var url = "".concat(this.usersUrl, "/project/update");
            return this.http.put(url, project, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return _this68.log("updated project id=".concat(project._id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateProject')));
          }
        }, {
          key: "deleteProject",
          value: function deleteProject(project) {
            var _this69 = this;

            var id = project._id;
            var url = "".concat(this.usersUrl, "/project/delete/").concat(id);
            return this.http["delete"](url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return _this69.log("deleted project id=".concat(id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteProject')));
          }
        }, {
          key: "getGrades",
          value: function getGrades() {
            var _this70 = this;

            var url = "".concat(this.usersUrl, "/grades");
            this.messageService.add('UserService: fetched grades');
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
              return _this70.log('fetched grades');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getGrades', [])));
          }
        }, {
          key: "getUser",
          value: function getUser(id) {
            var _this71 = this;

            var url = "".concat(this.usersUrl, "/user/").concat(id);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
              return _this71.log("fetched user id = ".concat(user._id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getUser id=".concat(id))));
          }
        }, {
          key: "addUser",
          value: function addUser(user) {
            var _this72 = this;

            console.log(user);
            var url = "".concat(this.usersUrl, "/register");
            return this.http.post(url, user, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (newUser) {
              return _this72.log("added user w/ id=".concat(newUser._id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addUser')));
          }
        }, {
          key: "updateUser",
          value: function updateUser(user) {
            var _this73 = this;

            var url = "".concat(this.usersUrl, "/user/update");
            return this.http.put(url, user, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (updatedUser) {
              return _this73.doUpdateUser(updatedUser);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateUser')));
          }
        }, {
          key: "doUpdateUser",
          value: function doUpdateUser(updatedUser) {
            this.log("updated user id=".concat(updatedUser._id)); // this.snackBarMessage(`Updated User ${updatedUser.name}`)

            this.storeUser(updatedUser);
          }
        }, {
          key: "addCreateForm",
          value: function addCreateForm(createForm) {
            var _this74 = this;

            console.log(createForm);
            var url = "".concat(this.usersUrl, "/gatepass/createForm/add");
            return this.http.post(url, createForm, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (newCreateForm) {
              return _this74.log("added create form");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addCreateForm')));
          }
        }, {
          key: "addGpArray",
          value: function addGpArray(gpArray) {
            var _this75 = this;

            console.log(gpArray);
            var url = "".concat(this.usersUrl, "/gatepass/GpArray/add");
            return this.http.post(url, gpArray, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (newgpArray) {
              return _this75.log("added GatePass Array w/ id=".concat(newgpArray._id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addGpArray')));
          }
        }, {
          key: "deleteGpArray",
          value: function deleteGpArray(gpArray) {
            var _this76 = this;

            var id = gpArray._id;
            var url = "".concat(this.usersUrl, "/gatepass/GpArray/delete/").concat(id);
            return this.http["delete"](url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (gpArray) {
              return _this76.log("deleted GatePass Number ".concat(gpArray.gatePassNo));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteGpArray')));
          }
        }, {
          key: "addGatePass",
          value: function addGatePass(gatePasses) {
            var _this77 = this;

            console.log(gatePasses);
            var url = "".concat(this.usersUrl, "/gatepass/add");
            return this.http.post(url, gatePasses, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (newGatePass) {
              return _this77.log("added GatePass");
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addGatePass')));
          } // getGpArrayById(id: string): Observable<GpArray> {
          //   const url = `${this.usersUrl}/gatepass/${id}`;
          //   return this.http.get<GpArray>(url).pipe(
          //     tap((gpArray: GpArray) => this.log(`fetched user id = ${gpArray._id}`)),
          //     catchError(this.handleError<GpArray>(`getGpArrayById id=${id}`))
          //   );
          // }

        }, {
          key: "loginUser",
          value: function loginUser(user) {
            var _this78 = this;

            console.log(user);
            var url = "".concat(this.usersUrl, "/login");
            return this.http.post(url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (userJwt) {
              return (// console.log('data: ',tokens)
                _this78.doLoginUser(userJwt)
              );
            } // this.log(`logged in user w/ empId=${data.user.empId}`)
            ), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('loginUser', [])));
          }
        }, {
          key: "doLoginUser",
          value: function doLoginUser(userJwt) {
            console.log(userJwt.user); // localStorage.setItem(this.loggedIn, userJwt.user)

            this.loggedIn = userJwt.user;
            localStorage.setItem('USER', JSON.stringify(this.loggedIn));
            var tokens;
            tokens = userJwt;
            this.storeTokens(tokens);
            this.snackBarMessage("Logged in successfully! Welcome ".concat(userJwt.user.name));
          }
        }, {
          key: "storeTokens",
          value: function storeTokens(tokens) {
            localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
            localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
          }
        }, {
          key: "logOutUser",
          value: function logOutUser() {
            var _this79 = this;

            console.log('logOutUser');
            var url = "".concat(this.usersUrl, "/logout");
            return this.http.post(url, {
              'refreshToken': this.getRefreshToken()
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
              return _this79.doLogoutUser();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('logOutUser')));
          }
        }, {
          key: "doLogoutUser",
          value: function doLogoutUser() {
            this.loggedIn = null;
            this.snackBarMessage('Logged out successfully');
            this.removeTokens();
          }
        }, {
          key: "removeTokens",
          value: function removeTokens() {
            localStorage.removeItem('USER');
            localStorage.removeItem(this.JWT_TOKEN);
            localStorage.removeItem(this.REFRESH_TOKEN);
            localStorage.removeItem('gatePassNo');
            localStorage.removeItem('filter');
          }
        }, {
          key: "refreshToken",
          value: function refreshToken() {
            var _this80 = this;

            var url = "".concat(this.usersUrl, "/refresh");
            return this.http.post(url, {
              'refreshToken': this.getRefreshToken()
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (tokens) {
              _this80.storeJwtToken(tokens.jwt);
            }));
          }
        }, {
          key: "getRefreshToken",
          value: function getRefreshToken() {
            return localStorage.getItem(this.REFRESH_TOKEN);
          }
        }, {
          key: "storeJwtToken",
          value: function storeJwtToken(jwt) {
            localStorage.setItem(this.JWT_TOKEN, jwt);
          }
        }, {
          key: "getJwtToken",
          value: function getJwtToken() {
            return localStorage.getItem(this.JWT_TOKEN);
          }
        }, {
          key: "searchUsers",
          value: function searchUsers(term, selectedAuthorization, selectedProject) {
            var _this81 = this;

            if (!term.trim()) {
              // if not search term, return empty hero array.
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
            }

            return this.http.get("".concat(this.usersUrl, "/user/search/").concat(term, "/").concat(selectedAuthorization, "/").concat(selectedProject)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (x) {
              return x.length ? _this81.log("found users matching \"".concat(term, "\"")) : _this81.log("no users matching \"".concat(term, "\""));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchUsers', [])));
          }
        }, {
          key: "searchGatePasses",
          value: function searchGatePasses(term, print, project) {
            var _this82 = this;

            if (!term.trim()) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
            }

            return this.http.get("".concat(this.usersUrl, "/gatepass/search/").concat(term, "/").concat(print, "/").concat(project)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (x) {
              return x.length ? _this82.log("found gate passes matching \"".concat(term, "\"")) : _this82.log("no gate passes matching \"".concat(term, "\""));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchGatePasses', [])));
          }
        }, {
          key: "log",
          value: function log(message) {
            this.messageService.add("UserService: ".concat(message));
          }
        }, {
          key: "handleError",
          value: function handleError() {
            var _this83 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              console.error(error);

              _this83.log("".concat(operation, " failed: ").concat(error.message));

              _this83.snackBarError(error);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
            };
          }
        }, {
          key: "snackBarMessage",
          value: function snackBarMessage(message) {
            this._snackBar.open("".concat(message), 'Ok', {
              duration: 2000
            });
          }
        }, {
          key: "snackBarError",
          value: function snackBarError(error) {
            this._snackBar.open("".concat(error.statusText), 'Ok', {
              duration: 2000
            });
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_message_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _message_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/token.interceptor.ts":
    /*!**************************************!*\
      !*** ./src/app/token.interceptor.ts ***!
      \**************************************/

    /*! exports provided: TokenInterceptor */

    /***/
    function srcAppTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
        return TokenInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/user/user.service */
      "./src/app/services/user/user.service.ts");

      var TokenInterceptor = /*#__PURE__*/function () {
        function TokenInterceptor(userService) {
          _classCallCheck(this, TokenInterceptor);

          this.userService = userService;
          this.isRefreshing = false;
          this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(TokenInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this84 = this;

            if (this.userService.getJwtToken()) {
              request = this.addToken(request, this.userService.getJwtToken());
            }

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
              if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && error.status === 401) {
                return _this84.handle401Error(request, next);
              } else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
              }
            }));
          }
        }, {
          key: "addToken",
          value: function addToken(request, token) {
            return request.clone({
              setHeaders: {
                'Authorization': "Bearer ".concat(token)
              }
            });
          }
        }, {
          key: "handle401Error",
          value: function handle401Error(request, next) {
            var _this85 = this;

            if (!this.isRefreshing) {
              this.isRefreshing = true;
              this.refreshTokenSubject.next(null);
              return this.userService.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (token) {
                _this85.isRefreshing = false;

                _this85.refreshTokenSubject.next(token.jwt);

                return next.handle(_this85.addToken(request, token.jwt));
              }));
            } else {
              return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (token) {
                return token != null;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (jwt) {
                return next.handle(_this85.addToken(request, jwt));
              }));
            }
          }
        }]);

        return TokenInterceptor;
      }();

      TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
        return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
      };

      TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TokenInterceptor,
        factory: TokenInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\gatepass application\GatePass\src\main.ts */
      "./src/main.ts");
      /***/
    },

    /***/
    1:
    /*!********************!*\
      !*** fs (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    2:
    /*!************************!*\
      !*** crypto (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    3:
    /*!************************!*\
      !*** stream (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map