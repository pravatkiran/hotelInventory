(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-supplier-supplier-module"],{

/***/ "./src/app/modules/supplier/supplier-form/supplier-form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/supplier/supplier-form/supplier-form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Hotel Inventory</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Add Supplier</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label>Supplier Name</ion-label>\n        <ion-input placeholder=\"supplier name\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Address</ion-label>\n        <ion-input placeholder=\"address\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Contact Number</ion-label>\n        <ion-input placeholder=\"contact number\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-button slot=\"end\" type=\"button\" color=\"primary\">Save</ion-button>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/modules/supplier/supplier-form/supplier-form.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/supplier/supplier-form/supplier-form.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VwcGxpZXIvc3VwcGxpZXItZm9ybS9zdXBwbGllci1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/supplier/supplier-form/supplier-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/supplier/supplier-form/supplier-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: SupplierFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierFormComponent", function() { return SupplierFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SupplierFormComponent = /** @class */ (function () {
    function SupplierFormComponent() {
    }
    SupplierFormComponent.prototype.ngOnInit = function () { };
    SupplierFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-supplier-form',
            template: __webpack_require__(/*! ./supplier-form.component.html */ "./src/app/modules/supplier/supplier-form/supplier-form.component.html"),
            styles: [__webpack_require__(/*! ./supplier-form.component.scss */ "./src/app/modules/supplier/supplier-form/supplier-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SupplierFormComponent);
    return SupplierFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/supplier/supplier-list/supplier-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/supplier/supplier-list/supplier-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n  <ion-card color=\"primary\">\n    <ion-card-header>\n      <ion-card-title>Suppliers</ion-card-title>\n    </ion-card-header>\n    <ion-list>\n      <ion-item>\n        <ion-label>S.No</ion-label>\n        <ion-label>Name</ion-label>\n        <ion-label>Address</ion-label>\n        <ion-label>Contact No</ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-list (click)=\"presentActionSheet()\">\n      <ion-item>\n        <ion-label>1</ion-label>\n        <ion-label>Divine</ion-label>\n        <ion-label>Bharatpur-27</ion-label>\n        <ion-label>480805350</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"add\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/modules/supplier/supplier-list/supplier-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/supplier/supplier-list/supplier-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VwcGxpZXIvc3VwcGxpZXItbGlzdC9zdXBwbGllci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/supplier/supplier-list/supplier-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/supplier/supplier-list/supplier-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: SupplierListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierListComponent", function() { return SupplierListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SupplierListComponent = /** @class */ (function () {
    function SupplierListComponent(actionSheetController) {
        this.actionSheetController = actionSheetController;
    }
    SupplierListComponent.prototype.ngOnInit = function () { };
    SupplierListComponent.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Actions',
                            buttons: [{
                                    text: 'View',
                                    icon: 'eye',
                                    handler: function () {
                                        console.log('View clicked');
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
    SupplierListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-supplier-list',
            template: __webpack_require__(/*! ./supplier-list.component.html */ "./src/app/modules/supplier/supplier-list/supplier-list.component.html"),
            styles: [__webpack_require__(/*! ./supplier-list.component.scss */ "./src/app/modules/supplier/supplier-list/supplier-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])
    ], SupplierListComponent);
    return SupplierListComponent;
}());



/***/ }),

/***/ "./src/app/modules/supplier/supplier-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/supplier/supplier-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SupplierRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierRoutingModule", function() { return SupplierRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _supplier_list_supplier_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./supplier-list/supplier-list.component */ "./src/app/modules/supplier/supplier-list/supplier-list.component.ts");
/* harmony import */ var _supplier_form_supplier_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./supplier-form/supplier-form.component */ "./src/app/modules/supplier/supplier-form/supplier-form.component.ts");





var supplierRoutes = [
    { path: '', component: _supplier_list_supplier_list_component__WEBPACK_IMPORTED_MODULE_3__["SupplierListComponent"] },
    { path: 'add', component: _supplier_form_supplier_form_component__WEBPACK_IMPORTED_MODULE_4__["SupplierFormComponent"] }
];
var SupplierRoutingModule = /** @class */ (function () {
    function SupplierRoutingModule() {
    }
    SupplierRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(supplierRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SupplierRoutingModule);
    return SupplierRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/supplier/supplier.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/supplier/supplier.module.ts ***!
  \*****************************************************/
/*! exports provided: SupplierModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierModule", function() { return SupplierModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _supplier_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./supplier-routing.module */ "./src/app/modules/supplier/supplier-routing.module.ts");
/* harmony import */ var _supplier_list_supplier_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./supplier-list/supplier-list.component */ "./src/app/modules/supplier/supplier-list/supplier-list.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _supplier_form_supplier_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./supplier-form/supplier-form.component */ "./src/app/modules/supplier/supplier-form/supplier-form.component.ts");








var SupplierModule = /** @class */ (function () {
    function SupplierModule() {
    }
    SupplierModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_supplier_list_supplier_list_component__WEBPACK_IMPORTED_MODULE_4__["SupplierListComponent"], _supplier_form_supplier_form_component__WEBPACK_IMPORTED_MODULE_7__["SupplierFormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _supplier_routing_module__WEBPACK_IMPORTED_MODULE_3__["SupplierRoutingModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ]
        })
    ], SupplierModule);
    return SupplierModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-supplier-supplier-module.js.map