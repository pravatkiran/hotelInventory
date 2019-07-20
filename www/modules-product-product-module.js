(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-product-product-module"],{

/***/ "./src/app/modules/product/product-form/product-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/product/product-form/product-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Hotel Inventory</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Add Product</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label>Product Title</ion-label>\n        <ion-input placeholder=\"Product title\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label> Measurement Scale</ion-label>\n        <ion-input placeholder=\"measurement scale\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Category</ion-label>\n        <ion-input placeholder=\"category\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-button slot=\"end\" type=\"button\" color=\"primary\">Save</ion-button>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/modules/product/product-form/product-form.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/product/product-form/product-form.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdC9wcm9kdWN0LWZvcm0vcHJvZHVjdC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/product/product-form/product-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/product/product-form/product-form.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent() {
    }
    ProductFormComponent.prototype.ngOnInit = function () { };
    ProductFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-form',
            template: __webpack_require__(/*! ./product-form.component.html */ "./src/app/modules/product/product-form/product-form.component.html"),
            styles: [__webpack_require__(/*! ./product-form.component.scss */ "./src/app/modules/product/product-form/product-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/product/product-list/product-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/product/product-list/product-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n  <ion-card >\n    <ion-card-header color=\"primary\">\n      <ion-card-title>Products</ion-card-title>\n    </ion-card-header>\n    <ion-list>\n      <ion-item>\n        <ion-label >S.No.</ion-label>\n        <ion-label >Title</ion-label>\n        <ion-label >Scale</ion-label>\n        <ion-label >Category</ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-item (click)= 'presentActionSheet()'>\n        <ion-label>1</ion-label>\n        <ion-label>Tuborg</ion-label>\n        <ion-label>Cartoon</ion-label>\n        <ion-label>Beer</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"add\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/modules/product/product-list/product-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/product/product-list/product-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/product/product-list/product-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/product/product-list/product-list.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(actionSheetController) {
        this.actionSheetController = actionSheetController;
    }
    ProductListComponent.prototype.ngOnInit = function () { };
    ProductListComponent.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Actions',
                            buttons: [{
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
                                    role: 'cancel',
                                    icon: 'close',
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
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/modules/product/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.scss */ "./src/app/modules/product/product-list/product-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/modules/product/product-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/product/product-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/modules/product/product-list/product-list.component.ts");
/* harmony import */ var _product_form_product_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-form/product-form.component */ "./src/app/modules/product/product-form/product-form.component.ts");
/* harmony import */ var _raw_material_list_raw_material_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./raw-material-list/raw-material-list.component */ "./src/app/modules/product/raw-material-list/raw-material-list.component.ts");
/* harmony import */ var _raw_material_form_raw_material_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./raw-material-form/raw-material-form.component */ "./src/app/modules/product/raw-material-form/raw-material-form.component.ts");







var productRoutes = [
    { path: '', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"] },
    { path: 'add', component: _product_form_product_form_component__WEBPACK_IMPORTED_MODULE_4__["ProductFormComponent"] },
    { path: 'raw-material', component: _raw_material_list_raw_material_list_component__WEBPACK_IMPORTED_MODULE_5__["RawMaterialListComponent"] },
    { path: 'raw-material/add', component: _raw_material_form_raw_material_form_component__WEBPACK_IMPORTED_MODULE_6__["RawMaterialFormComponent"] }
];
var ProductRoutingModule = /** @class */ (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(productRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/product/product.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/product/product.module.ts ***!
  \***************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/modules/product/product-routing.module.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/modules/product/product-list/product-list.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _product_form_product_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-form/product-form.component */ "./src/app/modules/product/product-form/product-form.component.ts");
/* harmony import */ var _raw_material_list_raw_material_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./raw-material-list/raw-material-list.component */ "./src/app/modules/product/raw-material-list/raw-material-list.component.ts");
/* harmony import */ var _raw_material_form_raw_material_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./raw-material-form/raw-material-form.component */ "./src/app/modules/product/raw-material-form/raw-material-form.component.ts");










var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"], _product_form_product_form_component__WEBPACK_IMPORTED_MODULE_7__["ProductFormComponent"], _raw_material_list_raw_material_list_component__WEBPACK_IMPORTED_MODULE_8__["RawMaterialListComponent"], _raw_material_form_raw_material_form_component__WEBPACK_IMPORTED_MODULE_9__["RawMaterialFormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _product_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductRoutingModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/modules/product/raw-material-form/raw-material-form.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/product/raw-material-form/raw-material-form.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Hotel Inventory</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Add Raw Material</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label>Raw Material Title</ion-label>\n        <ion-input placeholder=\"raw material title\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Measurement Scale</ion-label>\n        <ion-input placeholder=\"measurement scale\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Category</ion-label>\n        <ion-input placeholder=\"category\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-button type=\"button\" color=\"primary\" slot=\"end\">Save</ion-button>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/modules/product/raw-material-form/raw-material-form.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/product/raw-material-form/raw-material-form.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdC9yYXctbWF0ZXJpYWwtZm9ybS9yYXctbWF0ZXJpYWwtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/product/raw-material-form/raw-material-form.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/product/raw-material-form/raw-material-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RawMaterialFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawMaterialFormComponent", function() { return RawMaterialFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RawMaterialFormComponent = /** @class */ (function () {
    function RawMaterialFormComponent() {
    }
    RawMaterialFormComponent.prototype.ngOnInit = function () { };
    RawMaterialFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-raw-material-form',
            template: __webpack_require__(/*! ./raw-material-form.component.html */ "./src/app/modules/product/raw-material-form/raw-material-form.component.html"),
            styles: [__webpack_require__(/*! ./raw-material-form.component.scss */ "./src/app/modules/product/raw-material-form/raw-material-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RawMaterialFormComponent);
    return RawMaterialFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/product/raw-material-list/raw-material-list.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/product/raw-material-list/raw-material-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<ion-content>\n  <ion-card color=\"primary\">\n    <ion-card-header>\n      <ion-card-title>Raw Materials</ion-card-title>\n    </ion-card-header>\n    <ion-item>\n      <ion-label>S.No</ion-label>\n      <ion-label>Title</ion-label>\n      <ion-label>Scale</ion-label>\n      <ion-label>Category</ion-label>\n    </ion-item>\n    <ion-item (click)=\"presentActionSheet()\">\n      <ion-label>1</ion-label>\n      <ion-label>Chicken</ion-label>\n      <ion-label>Kg</ion-label>\n      <ion-label>Meat</ion-label>\n    </ion-item>\n  </ion-card>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"add\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/modules/product/raw-material-list/raw-material-list.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/product/raw-material-list/raw-material-list.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdC9yYXctbWF0ZXJpYWwtbGlzdC9yYXctbWF0ZXJpYWwtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/product/raw-material-list/raw-material-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/product/raw-material-list/raw-material-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RawMaterialListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawMaterialListComponent", function() { return RawMaterialListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var RawMaterialListComponent = /** @class */ (function () {
    function RawMaterialListComponent(actionSheetController) {
        this.actionSheetController = actionSheetController;
    }
    RawMaterialListComponent.prototype.ngOnInit = function () { };
    RawMaterialListComponent.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Action',
                            buttons: [{
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
                                    role: 'cancel',
                                    icon: 'close',
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
    RawMaterialListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-raw-material-list',
            template: __webpack_require__(/*! ./raw-material-list.component.html */ "./src/app/modules/product/raw-material-list/raw-material-list.component.html"),
            styles: [__webpack_require__(/*! ./raw-material-list.component.scss */ "./src/app/modules/product/raw-material-list/raw-material-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])
    ], RawMaterialListComponent);
    return RawMaterialListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-product-product-module.js.map