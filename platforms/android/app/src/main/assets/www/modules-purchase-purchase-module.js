(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-purchase-purchase-module"],{

/***/ "./src/app/modules/purchase/purchase-add/purchase-add.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/purchase/purchase-add/purchase-add.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Hotel Inventory</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Add Purchase</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label>Supplier Name</ion-label>\n        <ion-input placeholder=\"supplier name\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Purchase Date</ion-label>\n        <ion-input placeholder=\"purchase date\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Bill Number</ion-label>\n        <ion-input placeholder=\"bill number\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-button slot=\"end\" type=\"button\" color=\"primary\">Save</ion-button>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/modules/purchase/purchase-add/purchase-add.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/purchase/purchase-add/purchase-add.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVyY2hhc2UvcHVyY2hhc2UtYWRkL3B1cmNoYXNlLWFkZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/purchase/purchase-add/purchase-add.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/purchase/purchase-add/purchase-add.component.ts ***!
  \*************************************************************************/
/*! exports provided: PurchaseAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseAddComponent", function() { return PurchaseAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PurchaseAddComponent = /** @class */ (function () {
    function PurchaseAddComponent() {
    }
    PurchaseAddComponent.prototype.ngOnInit = function () { };
    PurchaseAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchase-add',
            template: __webpack_require__(/*! ./purchase-add.component.html */ "./src/app/modules/purchase/purchase-add/purchase-add.component.html"),
            styles: [__webpack_require__(/*! ./purchase-add.component.scss */ "./src/app/modules/purchase/purchase-add/purchase-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PurchaseAddComponent);
    return PurchaseAddComponent;
}());



/***/ }),

/***/ "./src/app/modules/purchase/purchase-list/purchase-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/purchase/purchase-list/purchase-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n  <ion-card color=\"primary\">\n    <ion-card-header>\n      <ion-card-title>Purchase List</ion-card-title>\n    </ion-card-header>\n    <ion-list>\n      <ion-item>\n        <ion-label>Supplier Name</ion-label>\n        <ion-label>Date</ion-label>\n        <ion-label>Bill No</ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-list (click) = \"presentActionSheet()\">\n      <ion-item>\n        <ion-label>Divine</ion-label>\n        <ion-label>2019-06-16</ion-label>\n        <ion-label>124</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"add\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/modules/purchase/purchase-list/purchase-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/purchase/purchase-list/purchase-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVyY2hhc2UvcHVyY2hhc2UtbGlzdC9wdXJjaGFzZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/purchase/purchase-list/purchase-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/purchase/purchase-list/purchase-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: PurchaseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseListComponent", function() { return PurchaseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PurchaseListComponent = /** @class */ (function () {
    function PurchaseListComponent(actionSheetController, _router) {
        this.actionSheetController = actionSheetController;
        this._router = _router;
    }
    PurchaseListComponent.prototype.ngOnInit = function () { };
    PurchaseListComponent.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Actions',
                            buttons: [{
                                    text: 'View',
                                    icon: 'eye',
                                    handler: function () {
                                        console.log('View clicked');
                                        _this._router.navigateByUrl('/purchase/view');
                                    }
                                }, {
                                    text: 'Delete',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        console.log('Delete clicked');
                                    }
                                }, {
                                    text: 'Edit',
                                    icon: 'create',
                                    handler: function () {
                                        console.log('Edit clicked');
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PurchaseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchase-list',
            template: __webpack_require__(/*! ./purchase-list.component.html */ "./src/app/modules/purchase/purchase-list/purchase-list.component.html"),
            styles: [__webpack_require__(/*! ./purchase-list.component.scss */ "./src/app/modules/purchase/purchase-list/purchase-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PurchaseListComponent);
    return PurchaseListComponent;
}());



/***/ }),

/***/ "./src/app/modules/purchase/purchase-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/purchase/purchase-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PurchaseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseRoutingModule", function() { return PurchaseRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _purchase_list_purchase_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchase-list/purchase-list.component */ "./src/app/modules/purchase/purchase-list/purchase-list.component.ts");
/* harmony import */ var _purchase_view_purchase_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./purchase-view/purchase-view.component */ "./src/app/modules/purchase/purchase-view/purchase-view.component.ts");
/* harmony import */ var _purchase_add_purchase_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./purchase-add/purchase-add.component */ "./src/app/modules/purchase/purchase-add/purchase-add.component.ts");






var purchaseRoutes = [
    { path: '', component: _purchase_list_purchase_list_component__WEBPACK_IMPORTED_MODULE_3__["PurchaseListComponent"] },
    { path: 'view', component: _purchase_view_purchase_view_component__WEBPACK_IMPORTED_MODULE_4__["PurchaseViewComponent"] },
    { path: 'add', component: _purchase_add_purchase_add_component__WEBPACK_IMPORTED_MODULE_5__["PurchaseAddComponent"] }
];
var PurchaseRoutingModule = /** @class */ (function () {
    function PurchaseRoutingModule() {
    }
    PurchaseRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(purchaseRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PurchaseRoutingModule);
    return PurchaseRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/purchase/purchase-view/purchase-view.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/purchase/purchase-view/purchase-view.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Hotel Inventory</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Purchase Detail</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                Supplier Name\n              </ion-col>\n              <ion-col>\n                Divine akjfgluop ;jdgla,dgoplakdjg ;kahdg\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Date & Time\n              </ion-col>\n              <ion-col>Thu Jul 18, 16:40</ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Bill No.\n              </ion-col>\n              <ion-col>\n                123424\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Product Lists\n              </ion-col>\n              <ion-col>\n                <ion-list>\n                  <ion-item>\n                    <ion-label>\n                      <h3>Demo</h3>\n                      <h3>Demo</h3>\n                      <h3>Demo</h3>\n                      <h3>Demo</h3>\n                      <h3>Demo</h3>\n                      <h3>Demo</h3>\n                      <h3>Demo</h3>\n                      <h3>Demo</h3>\n                      <h3>Demo</h3>\n                      <h3>Demo</h3>\n                      <h3>Demo</h3>\n                    </ion-label>\n                  </ion-item>\n                </ion-list>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/modules/purchase/purchase-view/purchase-view.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/purchase/purchase-view/purchase-view.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVyY2hhc2UvcHVyY2hhc2Utdmlldy9wdXJjaGFzZS12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/purchase/purchase-view/purchase-view.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/purchase/purchase-view/purchase-view.component.ts ***!
  \***************************************************************************/
/*! exports provided: PurchaseViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseViewComponent", function() { return PurchaseViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PurchaseViewComponent = /** @class */ (function () {
    function PurchaseViewComponent() {
    }
    PurchaseViewComponent.prototype.ngOnInit = function () { };
    PurchaseViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchase-view',
            template: __webpack_require__(/*! ./purchase-view.component.html */ "./src/app/modules/purchase/purchase-view/purchase-view.component.html"),
            styles: [__webpack_require__(/*! ./purchase-view.component.scss */ "./src/app/modules/purchase/purchase-view/purchase-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PurchaseViewComponent);
    return PurchaseViewComponent;
}());



/***/ }),

/***/ "./src/app/modules/purchase/purchase.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/purchase/purchase.module.ts ***!
  \*****************************************************/
/*! exports provided: PurchaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseModule", function() { return PurchaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _purchase_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchase-routing.module */ "./src/app/modules/purchase/purchase-routing.module.ts");
/* harmony import */ var _purchase_list_purchase_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./purchase-list/purchase-list.component */ "./src/app/modules/purchase/purchase-list/purchase-list.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _purchase_view_purchase_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./purchase-view/purchase-view.component */ "./src/app/modules/purchase/purchase-view/purchase-view.component.ts");
/* harmony import */ var _purchase_add_purchase_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./purchase-add/purchase-add.component */ "./src/app/modules/purchase/purchase-add/purchase-add.component.ts");









var PurchaseModule = /** @class */ (function () {
    function PurchaseModule() {
    }
    PurchaseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_purchase_list_purchase_list_component__WEBPACK_IMPORTED_MODULE_4__["PurchaseListComponent"], _purchase_view_purchase_view_component__WEBPACK_IMPORTED_MODULE_7__["PurchaseViewComponent"], _purchase_add_purchase_add_component__WEBPACK_IMPORTED_MODULE_8__["PurchaseAddComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _purchase_routing_module__WEBPACK_IMPORTED_MODULE_3__["PurchaseRoutingModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ]
        })
    ], PurchaseModule);
    return PurchaseModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-purchase-purchase-module.js.map