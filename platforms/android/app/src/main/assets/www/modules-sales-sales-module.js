(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-sales-sales-module"],{

/***/ "./src/app/modules/sales/sales-list/sales-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/sales/sales-list/sales-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n  <ion-card color=\"primary\">\n    <ion-card-header>\n      <ion-card-title>Sales</ion-card-title>\n    </ion-card-header>\n    <ion-list>\n      <ion-item>\n        <ion-label>Date</ion-label>\n        <ion-label>Amount</ion-label>\n        <ion-label>Status</ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item (click)=\"presentActionSheet()\">\n        <ion-label>2019-07-18 14:45</ion-label>\n        <ion-label>1780</ion-label>\n        <ion-label>Paid</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/modules/sales/sales-list/sales-list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/sales/sales-list/sales-list.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2FsZXMvc2FsZXMtbGlzdC9zYWxlcy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/sales/sales-list/sales-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/sales/sales-list/sales-list.component.ts ***!
  \******************************************************************/
/*! exports provided: SalesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesListComponent", function() { return SalesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SalesListComponent = /** @class */ (function () {
    function SalesListComponent(actionSheetController, _router) {
        this.actionSheetController = actionSheetController;
        this._router = _router;
    }
    SalesListComponent.prototype.ngOnInit = function () { };
    SalesListComponent.prototype.presentActionSheet = function () {
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
                                        _this._router.navigateByUrl('/sales/view');
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
    SalesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sales-list',
            template: __webpack_require__(/*! ./sales-list.component.html */ "./src/app/modules/sales/sales-list/sales-list.component.html"),
            styles: [__webpack_require__(/*! ./sales-list.component.scss */ "./src/app/modules/sales/sales-list/sales-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SalesListComponent);
    return SalesListComponent;
}());



/***/ }),

/***/ "./src/app/modules/sales/sales-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/sales/sales-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SalesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesRoutingModule", function() { return SalesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-list/sales-list.component */ "./src/app/modules/sales/sales-list/sales-list.component.ts");
/* harmony import */ var _sales_view_sales_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sales-view/sales-view.component */ "./src/app/modules/sales/sales-view/sales-view.component.ts");





var saleRoutes = [
    { path: '', component: _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_3__["SalesListComponent"] },
    { path: 'view', component: _sales_view_sales_view_component__WEBPACK_IMPORTED_MODULE_4__["SalesViewComponent"] }
];
var SalesRoutingModule = /** @class */ (function () {
    function SalesRoutingModule() {
    }
    SalesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(saleRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SalesRoutingModule);
    return SalesRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/sales/sales-view/sales-view.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/sales/sales-view/sales-view.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Hotel Inventory</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Sale Details</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col>Date</ion-col>\n              <ion-col>2019-07-18 14:45</ion-col>\n            </ion-row>\n            <hr>\n            <ion-list style=\"margin-left: 15px\">\n              <ion-row>\n                <ion-col>Ordered Items</ion-col>\n                <ion-col>Rate</ion-col>\n                <ion-col>Quantity</ion-col>\n                <ion-col>Scale</ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col><h4>Tuborg</h4></ion-col>\n                <ion-col><h4>340</h4></ion-col>\n                <ion-col><h4>4</h4></ion-col>\n                <ion-col><h4>Pcs</h4></ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col><h4>Potato Chips</h4></ion-col>\n                <ion-col><h4>20</h4></ion-col>\n                <ion-col><h4>4</h4></ion-col>\n                <ion-col><h4>Pcs</h4></ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col><h4> Veg. Chowmin</h4></ion-col>\n                <ion-col><h4>80</h4></ion-col>\n                <ion-col><h4>4</h4></ion-col>\n                <ion-col><h4>Plate</h4></ion-col>\n              </ion-row>\n            </ion-list>\n            <hr>\n            <ion-row>\n              <ion-col>Status</ion-col>\n              <ion-col>Paid</ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>Total Amount</ion-col>\n              <ion-col>1780</ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>Customer Name</ion-col>\n              <ion-col>Ram</ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/modules/sales/sales-view/sales-view.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/sales/sales-view/sales-view.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2FsZXMvc2FsZXMtdmlldy9zYWxlcy12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/sales/sales-view/sales-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/sales/sales-view/sales-view.component.ts ***!
  \******************************************************************/
/*! exports provided: SalesViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesViewComponent", function() { return SalesViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SalesViewComponent = /** @class */ (function () {
    function SalesViewComponent() {
    }
    SalesViewComponent.prototype.ngOnInit = function () { };
    SalesViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sales-view',
            template: __webpack_require__(/*! ./sales-view.component.html */ "./src/app/modules/sales/sales-view/sales-view.component.html"),
            styles: [__webpack_require__(/*! ./sales-view.component.scss */ "./src/app/modules/sales/sales-view/sales-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SalesViewComponent);
    return SalesViewComponent;
}());



/***/ }),

/***/ "./src/app/modules/sales/sales.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/sales/sales.module.ts ***!
  \***********************************************/
/*! exports provided: SalesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesModule", function() { return SalesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sales_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-routing.module */ "./src/app/modules/sales/sales-routing.module.ts");
/* harmony import */ var _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sales-list/sales-list.component */ "./src/app/modules/sales/sales-list/sales-list.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _sales_view_sales_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sales-view/sales-view.component */ "./src/app/modules/sales/sales-view/sales-view.component.ts");








var SalesModule = /** @class */ (function () {
    function SalesModule() {
    }
    SalesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_4__["SalesListComponent"], _sales_view_sales_view_component__WEBPACK_IMPORTED_MODULE_7__["SalesViewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _sales_routing_module__WEBPACK_IMPORTED_MODULE_3__["SalesRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]
            ]
        })
    ], SalesModule);
    return SalesModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-sales-sales-module.js.map