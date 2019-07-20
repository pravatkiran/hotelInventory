(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-sales-sales-module"],{

/***/ "./src/app/modules/sales/sales-list/sales-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/sales/sales-list/sales-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n  <ion-card color=\"primary\">\n    <ion-card-header>\n      <ion-card-title>Sales</ion-card-title>\n    </ion-card-header>\n    <ion-list>\n      <ion-item>\n        <ion-label>Date</ion-label>\n        <ion-label>Amount</ion-label>\n        <!-- <ion-label>Description</ion-label> -->\n        <ion-label>Status</ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item>\n        <ion-label>2019-07-18 14:45</ion-label>\n        <ion-label>5000</ion-label>\n        <!-- <ion-label></ion-label> -->\n        <ion-label>Paid</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

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


var SalesListComponent = /** @class */ (function () {
    function SalesListComponent() {
    }
    SalesListComponent.prototype.ngOnInit = function () { };
    SalesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sales-list',
            template: __webpack_require__(/*! ./sales-list.component.html */ "./src/app/modules/sales/sales-list/sales-list.component.html"),
            styles: [__webpack_require__(/*! ./sales-list.component.scss */ "./src/app/modules/sales/sales-list/sales-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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




var saleRoutes = [
    { path: '', component: _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_3__["SalesListComponent"] }
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







var SalesModule = /** @class */ (function () {
    function SalesModule() {
    }
    SalesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_4__["SalesListComponent"]],
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