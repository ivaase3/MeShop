(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_item_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/item/item.component */ "./src/app/pages/item/item.component.ts");






const app_routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'item/:id', component: _pages_item_item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(app_routes, { useHash: true })
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(app_routes, { useHash: true })
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_info_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/info-page.service */ "./src/app/services/info-page.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");







class AppComponent {
    constructor(_infoPage, _products) {
        this._infoPage = _infoPage;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_info_page_service__WEBPACK_IMPORTED_MODULE_1__["InfoPageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_info_page_service__WEBPACK_IMPORTED_MODULE_1__["InfoPageService"] }, { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_item_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/item/item.component */ "./src/app/pages/item/item.component.ts");
/* harmony import */ var _pages_new_item_new_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/new-item/new-item.component */ "./src/app/pages/new-item/new-item.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _pages_item_item_component__WEBPACK_IMPORTED_MODULE_8__["ItemComponent"],
        _pages_new_item_new_item_component__WEBPACK_IMPORTED_MODULE_9__["NewItemComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _pages_item_item_component__WEBPACK_IMPORTED_MODULE_8__["ItemComponent"],
                    _pages_new_item_new_item_component__WEBPACK_IMPORTED_MODULE_9__["NewItemComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cargando");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "animateTransform", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Espere por favor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ver");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/item/", product_r3.cod, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(", product_r3.url, "); ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r3.precio, "\u20AC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.categoria);
} }
function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_3_div_1_Template, 15, 7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.productsService.productos);
} }
class HomeComponent {
    constructor(productsService) {
        this.productsService = productsService;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 2, consts: [["id", "sect-services", 1, "sect-services"], [1, "container"], ["align", "center", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["align", "center"], ["title", "0", 1, "loader", "loader--style1"], ["version", "1.1", "id", "loader-1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "40px", "height", "40px", "viewBox", "0 0 40 40", "enable-background", "new 0 0 40 40", 0, "xml", "space", "preserve"], ["opacity", "0.2", "fill", "#000", "d", "M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n                  s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n                  c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"], ["fill", "#000", "d", "M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n                  C22.32,8.481,24.301,9.057,26.013,10.047z"], ["attributeType", "xml", "attributeName", "transform", "type", "rotate", "from", "0 20 20", "to", "360 20 20", "dur", "0.5s", "repeatCount", "indefinite"], [1, "row"], ["class", "col-md-3 col-sm-6", 4, "ngFor", "ngForOf"], [1, "col-md-3", "col-sm-6"], [3, "routerLink"], [1, "services-item", "animated", "fadeIn"], ["href", "#", 1, "services-item-image"], ["aria-hidden", "true"], [1, ""], [1, "services-item-price"], ["aria-hidden", "true", 1, "fa", "fa-tags"], ["href", "#", 1, "button"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 10, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productsService.cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.productsService.cargando);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".sect-services[_ngcontent-%COMP%] {\r\n    background-color: #efefef;\r\n  }\r\n  .sect-services[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n  }\r\n  .services-item[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding-bottom: 32px;\r\n    border: 5px #153b83 solid;\r\n    transition: transform 0.5s ease;\r\n    text-align: center;\r\n    background-color: #fff;\r\n  }\r\n  .services-item[_ngcontent-%COMP%]   a.services-item-image[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  .services-item[_ngcontent-%COMP%]:hover {\r\n    box-shadow: rgba(0, 0, 0, 0.959) 0 0 32px;\r\n    z-index: 4;\r\n    transform: scale(1.05);\r\n    border-color: #09ff00;\r\n  }\r\n  .services-item[_ngcontent-%COMP%]:hover   a.services-item-image[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  .services-item[_ngcontent-%COMP%]:hover   a.services-item-image[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    opacity: 4;\r\n  }\r\n  .services-item[_ngcontent-%COMP%]:hover   a.services-item-image[_ngcontent-%COMP%]::before {\r\n    opacity: 0.7;\r\n  }\r\n  .services-item[_ngcontent-%COMP%]:hover   .services-item-stars[_ngcontent-%COMP%] {\r\n    color: #ffcc00;\r\n  }\r\n  .services-item[_ngcontent-%COMP%]:hover   .services-item-stars[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    margin: 0 5px;\r\n  }\r\n  .services-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    font-size: 1.25em;\r\n    margin-bottom: 10px;\r\n  }\r\n  .services-item-image[_ngcontent-%COMP%] {\r\n    min-height: 190px;\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n  .services-item-image[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    color: #fff;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-left: -10px;\r\n    margin-top: -10px;\r\n    opacity: 0;\r\n    transition: all 0.5s ease;\r\n  }\r\n  .services-item-image[_ngcontent-%COMP%]::before {\r\n    position: absolute;\r\n    content: \" \";\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n  \r\n    opacity: 0;\r\n    transition: all 0.5s ease;\r\n  }\r\n  .services-item-stars[_ngcontent-%COMP%] {\r\n    font-size: 0.6875em;\r\n    color: #b4b4b4;\r\n  }\r\n  .services-item-stars[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    margin-left: 1px;\r\n    transition: all 0.5s ease;\r\n  }\r\n  .services-item-price[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n    margin-bottom: 26px;\r\n    font-size: 1.0625em;\r\n    font-family: \"RobotoBold\", sans-serif;\r\n  }\r\n  .services-item-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 1.75em;\r\n  }\r\n  .services-item-price[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    color: #ffcc00;\r\n    font-size: 1.125em;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFHekIsK0JBQStCO0lBRS9CLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUVFLHlDQUF5QztJQUN6QyxVQUFVO0lBR1Ysc0JBQXNCO0lBQ3RCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBRVYseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLE9BQU87O0lBRVAsVUFBVTtJQUVWLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGdCQUFnQjtJQUVoQix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHFDQUFxQztFQUN2QztFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdC1zZXJ2aWNlcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG4gIH1cclxuICAuc2VjdC1zZXJ2aWNlcyAuY29sLW1kLTMge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgLnNlcnZpY2VzLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcbiAgICBib3JkZXI6IDVweCAjMTUzYjgzIHNvbGlkO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjVzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjVzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gMC41cyBlYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLnNlcnZpY2VzLWl0ZW0gYS5zZXJ2aWNlcy1pdGVtLWltYWdlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuc2VydmljZXMtaXRlbTpob3ZlciB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMCAwIDMycHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuOTU5KSAwIDAgMzJweDtcclxuICAgIHotaW5kZXg6IDQ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICBib3JkZXItY29sb3I6ICMwOWZmMDA7XHJcbiAgfVxyXG4gIC5zZXJ2aWNlcy1pdGVtOmhvdmVyIGEuc2VydmljZXMtaXRlbS1pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnNlcnZpY2VzLWl0ZW06aG92ZXIgYS5zZXJ2aWNlcy1pdGVtLWltYWdlIC5mYSB7XHJcbiAgICBvcGFjaXR5OiA0O1xyXG4gIH1cclxuICAuc2VydmljZXMtaXRlbTpob3ZlciBhLnNlcnZpY2VzLWl0ZW0taW1hZ2U6OmJlZm9yZSB7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gIC5zZXJ2aWNlcy1pdGVtOmhvdmVyIC5zZXJ2aWNlcy1pdGVtLXN0YXJzIHtcclxuICAgIGNvbG9yOiAjZmZjYzAwO1xyXG4gIH1cclxuICAuc2VydmljZXMtaXRlbTpob3ZlciAuc2VydmljZXMtaXRlbS1zdGFycyAuZmEge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICB9XHJcbiAgLnNlcnZpY2VzLWl0ZW0gaDQge1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAuc2VydmljZXMtaXRlbS1pbWFnZSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxOTBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5zZXJ2aWNlcy1pdGVtLWltYWdlIC5mYSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICB9XHJcbiAgLnNlcnZpY2VzLWl0ZW0taW1hZ2U6OmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICBcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIH1cclxuICAuc2VydmljZXMtaXRlbS1zdGFycyB7XHJcbiAgICBmb250LXNpemU6IDAuNjg3NWVtO1xyXG4gICAgY29sb3I6ICNiNGI0YjQ7XHJcbiAgfVxyXG4gIC5zZXJ2aWNlcy1pdGVtLXN0YXJzIC5mYSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICB9XHJcbiAgLnNlcnZpY2VzLWl0ZW0tcHJpY2Uge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjZweDtcclxuICAgIGZvbnQtc2l6ZTogMS4wNjI1ZW07XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9Cb2xkXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5zZXJ2aWNlcy1pdGVtLXByaWNlIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxLjc1ZW07XHJcbiAgfVxyXG4gIC5zZXJ2aWNlcy1pdGVtLXByaWNlIC5mYSB7XHJcbiAgICBjb2xvcjogI2ZmY2MwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcclxuICB9XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/item/item.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/item/item.component.ts ***!
  \**********************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " contactar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.product.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.product.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.product.precio, " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.product.vendedor);
} }
class ItemComponent {
    constructor(route, productsService) {
        this.route = route;
        this.productsService = productsService;
    }
    ngOnInit() {
        this.route.params
            .subscribe(parametros => {
            //loading
            this.productsService.getProducto(parametros.id)
                .subscribe((product) => {
                this.id = parametros.id;
                this.product = product;
                console.log(product);
            });
        });
    }
}
ItemComponent.ɵfac = function ItemComponent_Factory(t) { return new (t || ItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"])); };
ItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemComponent, selectors: [["app-item"]], decls: 1, vars: 1, consts: [["class", "container-fluid", 4, "ngIf"], [1, "container-fluid"], [1, "content-wrapper"], [1, "item-container"], [1, "container"], [1, "col-md-12"], [1, "product", "col-md-3", "service-image-left"], ["id", "item-display", "src", "assets/img/logo.png", "alt", "item"], [1, "col-md-7"], [1, "product-title"], [1, "product-desc"], [1, "product-price"], [1, "product-seller"], [1, "btn-group", "cart"], ["type", "button", 1, "btn", "btn-success"]], template: function ItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ItemComponent_div_0_Template, 21, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".gold[_ngcontent-%COMP%]{\r\n\tcolor: #FFBF00;\r\n}\r\n\r\n\r\n\r\n.product[_ngcontent-%COMP%]{\r\n\tborder: 1px solid #dddddd;\r\n\theight: 321px;\r\n}\r\n\r\n.product[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\r\n\tmax-width: 230px;\r\n}\r\n\r\n.product-rating[_ngcontent-%COMP%]{\r\n\tfont-size: 20px;\r\n\tmargin-bottom: 25px;\r\n}\r\n\r\n.product-title[_ngcontent-%COMP%]{\r\n\tfont-size: 20px;\r\n}\r\n\r\n.product-desc[_ngcontent-%COMP%]{\r\n\tfont-size: 14px;\r\n}\r\n\r\n.product-price[_ngcontent-%COMP%]{\r\n\tfont-size: 22px;\r\n}\r\n\r\n.product-seller[_ngcontent-%COMP%]{\r\n\tcolor: #74DF00;\r\n\tfont-size: 20px;\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.product-info[_ngcontent-%COMP%]{\r\n\t\tmargin-top: 50px;\r\n}\r\n\r\n\r\n\r\n.content-wrapper[_ngcontent-%COMP%] {\r\n\tmax-width: 1140px;\r\n\tbackground: #fff;\r\n\tmargin: 0 auto;\r\n\tmargin-top: 25px;\r\n\tmargin-bottom: 10px;\r\n\tborder: 0px;\r\n\tborder-radius: 0px;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]{\r\n\tmax-width: 1140px;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.view-wrapper[_ngcontent-%COMP%] {\r\n\tfloat: right;\r\n\tmax-width: 70%;\r\n\tmargin-top: 25px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n\tpadding-left: 0px;\r\n\tpadding-right: 0px;\r\n\tmax-width: 100%;\r\n}\r\n\r\n\r\n\r\n.service1-items[_ngcontent-%COMP%] {\r\n\tpadding: 0px 0 0px 0;\r\n\tfloat: left;\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tmax-width: 100%;\r\n\theight: 321px;\r\n\twidth: 130px;\r\n}\r\n\r\n.service1-item[_ngcontent-%COMP%] {\r\n\theight: 107px;\r\n\twidth: 120px;\r\n\tdisplay: block;\r\n\tfloat: left;\r\n\tposition: relative;\r\n\tpadding-right: 20px;\r\n\tborder-right: 1px solid #DDD;\r\n\tborder-top: 1px solid #DDD;\r\n\tborder-bottom: 1px solid #DDD;\r\n}\r\n\r\n.service1-item[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n\tmax-height: 110px;\r\n\tmax-width: 110px;\r\n\topacity: 0.6;\r\n\ttransition: all .2s ease-in;\r\n\t-o-transition: all .2s ease-in;\r\n\t-moz-transition: all .2s ease-in;\r\n\t-webkit-transition: all .2s ease-in;\r\n}\r\n\r\n.service1-item[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:hover {\r\n\tcursor: pointer;\r\n\topacity: 1;\r\n}\r\n\r\n.service-image-left[_ngcontent-%COMP%] {\r\n\tpadding-right: 50px;\r\n}\r\n\r\n.service-image-right[_ngcontent-%COMP%] {\r\n\tpadding-left: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaXRlbS9pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MsY0FBYztBQUNmOztBQUVBOzs2Q0FFNkM7O0FBRTdDO0NBQ0MseUJBQXlCO0NBQ3pCLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7NkNBRTZDOztBQUU3QztDQUNDLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjs7QUFFQTs7NkNBRTZDOztBQUU3QztDQUNDLG9CQUFvQjtDQUNwQixXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsYUFBYTtDQUNiLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osY0FBYztDQUNkLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLDRCQUE0QjtDQUM1QiwwQkFBMEI7Q0FDMUIsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osMkJBQTJCO0NBQzNCLDhCQUE4QjtDQUM5QixnQ0FBZ0M7Q0FDaEMsbUNBQW1DO0FBQ3BDOztBQUVBO0NBQ0MsZUFBZTtDQUNmLFVBQVU7QUFDWDs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5nb2xke1xyXG5cdGNvbG9yOiAjRkZCRjAwO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0XHRQUk9EVUNUU1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4ucHJvZHVjdHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG5cdGhlaWdodDogMzIxcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0PmltZ3tcclxuXHRtYXgtd2lkdGg6IDIzMHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1yYXRpbmd7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXRpdGxle1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnByb2R1Y3QtZGVzY3tcclxuXHRmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXByaWNle1xyXG5cdGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLnByb2R1Y3Qtc2VsbGVye1xyXG5cdGNvbG9yOiAjNzRERjAwO1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbmZve1xyXG5cdFx0bWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cdFx0XHRcdFx0VklFV1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4uY29udGVudC13cmFwcGVyIHtcclxuXHRtYXgtd2lkdGg6IDExNDBweDtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdG1hcmdpbi10b3A6IDI1cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRib3JkZXI6IDBweDtcclxuXHRib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWR7XHJcblx0bWF4LXdpZHRoOiAxMTQwcHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi52aWV3LXdyYXBwZXIge1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRtYXgtd2lkdGg6IDcwJTtcclxuXHRtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDBweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblx0XHRcdFx0SVRFTSBcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLnNlcnZpY2UxLWl0ZW1zIHtcclxuXHRwYWRkaW5nOiAwcHggMCAwcHggMDtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAzMjFweDtcclxuXHR3aWR0aDogMTMwcHg7XHJcbn1cclxuXHJcbi5zZXJ2aWNlMS1pdGVtIHtcclxuXHRoZWlnaHQ6IDEwN3B4O1xyXG5cdHdpZHRoOiAxMjBweDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmbG9hdDogbGVmdDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0cGFkZGluZy1yaWdodDogMjBweDtcclxuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjREREO1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjREREO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREO1xyXG59XHJcblxyXG4uc2VydmljZTEtaXRlbSA+IGltZyB7XHJcblx0bWF4LWhlaWdodDogMTEwcHg7XHJcblx0bWF4LXdpZHRoOiAxMTBweDtcclxuXHRvcGFjaXR5OiAwLjY7XHJcblx0dHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbjtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbjtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbjtcclxufVxyXG5cclxuLnNlcnZpY2UxLWl0ZW0gPiBpbWc6aG92ZXIge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uc2VydmljZS1pbWFnZS1sZWZ0IHtcclxuXHRwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uc2VydmljZS1pbWFnZS1yaWdodCB7XHJcblx0cGFkZGluZy1sZWZ0OiA1MHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-item',
                templateUrl: './item.component.html',
                styleUrls: ['./item.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/new-item/new-item.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/new-item/new-item.component.ts ***!
  \******************************************************/
/*! exports provided: NewItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewItemComponent", function() { return NewItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NewItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewItemComponent.ɵfac = function NewItemComponent_Factory(t) { return new (t || NewItemComponent)(); };
NewItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewItemComponent, selectors: [["app-new-item"]], decls: 2, vars: 0, template: function NewItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "new-item works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy1pdGVtL25ldy1pdGVtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-item',
                templateUrl: './new-item.component.html',
                styleUrls: ['./new-item.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/info-page.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/info-page.service.ts ***!
  \***********************************************/
/*! exports provided: InfoPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageService", function() { return InfoPageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class InfoPageService {
    constructor(http) {
        this.http = http;
        this.info = {};
        this.cargada = false;
        //LEER JSON
        this.http.get('assets/data/data-page.json')
            .subscribe((resp) => {
            this.cargada = true;
            this.info = resp;
        });
    }
}
InfoPageService.ɵfac = function InfoPageService_Factory(t) { return new (t || InfoPageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
InfoPageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InfoPageService, factory: InfoPageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoPageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ProductsService {
    constructor(http) {
        this.http = http;
        this.cargando = true;
        this.productos = [];
        this.cargarProductos();
    }
    cargarProductos() {
        return new Promise((resolve, reject) => {
            this.http.get('https://meshop-4b04c.firebaseio.com/productos.json')
                .subscribe((resp) => {
                this.productos = resp;
                this.cargando = false;
                resolve();
            });
        });
    }
    getProducto(id) {
        return this.http.get(`https://meshop-4b04c.firebaseio.com/productos/${id}.json`);
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_info_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/info-page.service */ "./src/app/services/info-page.service.ts");



class FooterComponent {
    constructor(infoPageService) {
        this.infoPageService = infoPageService;
        this.anio = new Date().getFullYear();
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_info_page_service__WEBPACK_IMPORTED_MODULE_1__["InfoPageService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 31, vars: 7, consts: [[1, "footer"], [1, "social-area"], ["target", "_blank", "title", "Facebook", 1, "shr-btn-facebook", 3, "href"], [1, "fa", "fa-facebook"], ["target", "_blank", "title", "Instagram", 1, "shr-btn-instagram", 3, "href"], [1, "fa", "fa-instagram"], ["target", "_blank", "title", "twitter", 1, "shr-btn-behance", 3, "href"], [1, "fa", "fa-twitter"], ["target", "_blank", "title", "email", 1, "shr-btn-envelope", 3, "href"], [1, "fa", "fa-envelope"], [1, "credits"], [1, "footer-white"], ["src", "assets/img/logo.png", "alt", "Logo", 1, "slice-footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.infoPageService.info.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.infoPageService.info.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.infoPageService.info.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailTo:", ctx.infoPageService.info.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9", ctx.anio, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.infoPageService.info.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.infoPageService.info.email, "");
    } }, styles: [".footer[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    min-height: 260px;\r\n    background: #000000;\r\n    padding: 10px 0;\r\n    z-index: 1;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%] {\r\n    margin-top: 90px;\r\n    width: 40%;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    z-index: 1;\r\n    display: block;\r\n    width: 100%;\r\n    padding: 0;\r\n    text-align: right;\r\n    position: absolute;\r\n    right: 7%;\r\n    box-sizing: border-box;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    text-align: center;\r\n    line-height: 0;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    color: #ffffff;\r\n    text-decoration: none;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-left: 20px;\r\n    padding: 0 20px;\r\n    text-align: center;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .shr-btn-facebook[_ngcontent-%COMP%]:hover {\r\n    color: #3b5998;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .shr-btn-instagram[_ngcontent-%COMP%]:hover {\r\n    color: #3f729b;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .shr-btn-behance[_ngcontent-%COMP%]:hover {\r\n    color: #1769ff;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .shr-btn-soundcloud[_ngcontent-%COMP%]:hover {\r\n    color: #f76700;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .social-area[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .credits[_ngcontent-%COMP%] {\r\n    font-weight: normal;\r\n    position: absolute;\r\n    width: 100%;\r\n    color: #474747;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-size: 20px;\r\n    line-height: 1px;\r\n    padding: 0;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   .credits[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    font-size: 20px;\r\n    line-height: 1px;\r\n    padding: 0;\r\n    left: 9%;\r\n  }\r\n  .footer-white[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-weight: normal;\r\n  }\r\n  .slice-footer[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    height: 135px;\r\n    margin-top: -45px;\r\n  }\r\n  .fa[_ngcontent-%COMP%] {\r\n      display: inline-block;\r\n      font: normal normal normal 14px/1 FontAwesome;\r\n      font-size: inherit;\r\n      text-rendering: auto;\r\n      -webkit-font-smoothing: antialiased;\r\n      -moz-osx-font-smoothing: grayscale;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsVUFBVTtFQUNaO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsY0FBYztJQUNkLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFVBQVU7RUFDWjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsUUFBUTtFQUNWO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtFQUNuQjtFQUNBO01BQ0kscUJBQXFCO01BQ3JCLDZDQUE2QztNQUM3QyxrQkFBa0I7TUFDbEIsb0JBQW9CO01BQ3BCLG1DQUFtQztNQUNuQyxrQ0FBa0M7RUFDdEMiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDI2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIC5mb290ZXIgLnNvY2lhbC1hcmVhIHtcclxuICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuICAuZm9vdGVyIC5zb2NpYWwtYXJlYSB1bCB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA3JTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5mb290ZXIgLnNvY2lhbC1hcmVhIHVsIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gIH1cclxuICAuZm9vdGVyIC5zb2NpYWwtYXJlYSB1bCBsaSBhIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIC5mb290ZXIgLnNvY2lhbC1hcmVhIHVsIGxpIGEgaSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZm9vdGVyIC5zaHItYnRuLWZhY2Vib29rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjM2I1OTk4O1xyXG4gIH1cclxuICAuZm9vdGVyIC5zaHItYnRuLWluc3RhZ3JhbTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzNmNzI5YjtcclxuICB9XHJcbiAgLmZvb3RlciAuc2hyLWJ0bi1iZWhhbmNlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTc2OWZmO1xyXG4gIH1cclxuICAuZm9vdGVyIC5zaHItYnRuLXNvdW5kY2xvdWQ6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmNzY3MDA7XHJcbiAgfVxyXG4gIC5mb290ZXIgLnNvY2lhbC1hcmVhIHVsIGxpIGEgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuZm9vdGVyIC5jcmVkaXRzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjNDc0NzQ3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAuZm9vdGVyIC5jcmVkaXRzIHAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxlZnQ6IDklO1xyXG4gIH1cclxuICAuZm9vdGVyLXdoaXRlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcbiAgLnNsaWNlLWZvb3RlciB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEzNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTQ1cHg7XHJcbiAgfVxyXG4gIC5mYSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xyXG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return [{ type: src_app_services_info_page_service__WEBPACK_IMPORTED_MODULE_1__["InfoPageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_info_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/info-page.service */ "./src/app/services/info-page.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function HeaderComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "if");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(infoPageService) {
        this.infoPageService = infoPageService;
        this.numeros = false;
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_info_page_service__WEBPACK_IMPORTED_MODULE_1__["InfoPageService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 24, vars: 2, consts: [["id", "navbar", 1, "header"], [1, "container"], [1, "logo"], ["routerLink", "home"], ["src", "assets/img/logo.png", "width", "100", "height", "100"], [1, "navigation"], ["routerLink", "about"], [4, "ngIf"], [1, "row"], [1, "span12"], ["id", "custom-search-form", 1, "form-search", "form-horizontal", "pull-right"], [1, "input-append", "span12"], ["type", "text", "placeholder", "Search", 1, "search-query"], ["type", "submit", 1, "btn"], [1, "icon-search"], ["routerLink", "#"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "subir producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_li_15_Template, 3, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.infoPageService.info.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.numeros);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".header[_ngcontent-%COMP%] {\r\n  padding: 10px 16px;\r\n  background: #143ca1;\r\n  color: #000;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n}   .darkHeader[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  background-color: #000;\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 99;\r\n} .darkHeader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #2ec4b6 !important;\r\n}  ul[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n} .content[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n} .container[_ngcontent-%COMP%] {\r\n  width: 1170px;\r\n  margin: 0 auto;\r\n} .sticky[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n} .sticky[_ngcontent-%COMP%]    + .content[_ngcontent-%COMP%] {\r\n  padding-top: 102px;\r\n} .logo[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  float: left;\r\n} .navigation[_ngcontent-%COMP%] {\r\n  float: right;\r\n} .navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  display: inline-block;\r\n  margin-right: 20px;\r\n  margin-top: 10px;\r\n} .navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n} .navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n} .nav-home[_ngcontent-%COMP%]:after {\r\n  border-top: 2px solid #9f4f5c;\r\n  display: block;\r\n  width: 45px;\r\n  content: \"\";\r\n  margin: 8px auto 0;\r\n}  .w3l_header[_ngcontent-%COMP%] {\r\n  font-size: 3em;\r\n  color: #262c38;\r\n  letter-spacing: 1px;\r\n  position: relative;\r\n  font-weight: 600;\r\n  text-align: center;\r\n} .welcome-to-travel[_ngcontent-%COMP%] {\r\n  margin-bottom: 50px;\r\n} .wthree_head_section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  text-align: center;\r\n  margin: 20px auto;\r\n  width: 60%;\r\n  color: #5e5e5e;\r\n  line-height: 1.8em;\r\n} .w3l_header[_ngcontent-%COMP%]:after {\r\n  border-top: 2px solid #9f4f5c;\r\n  display: block;\r\n  width: 81px;\r\n  content: \"\";\r\n  margin: 8px auto 0;\r\n} .about-grid1[_ngcontent-%COMP%] {\r\n  background: url(https://bestjquery.com/tutorial/product-grid/demo9/images/img-2.jpg)\r\n    no-repeat center;\r\n  background-size: cover;\r\n  min-height: 450px;\r\n  border: 1px solid #d6d6d6;\r\n} .about-grid2[_ngcontent-%COMP%] {\r\n  padding: 0em 0 0 4em;\r\n} .about-subgrid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  text-transform: capitalize;\r\n  font-size: 1.8em;\r\n  font-weight: bold;\r\n  font-style: italic;\r\n  margin: 0;\r\n} .about-subgrid[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 2.2em;\r\n  text-transform: uppercase;\r\n  color: #000;\r\n  margin: 0.5em 0;\r\n  display: inline-block;\r\n  border-right: 5px double #9f4f5c;\r\n  padding-right: 10px;\r\n} .about-subgrid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  font-weight: 800;\r\n  font-size: 1em;\r\n  padding-left: 27px;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n} .about-subgrid[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  font-size: 1.5em;\r\n  text-transform: capitalize;\r\n  margin: 1em 0;\r\n  border: 2px solid #9f4f5c;\r\n  display: inline-block;\r\n  padding: 5px 10px;\r\n  width: 50%;\r\n} ul.w3l-about-list[_ngcontent-%COMP%] {\r\n  padding: 0em 0 0 2em;\r\n} ul.w3l-about-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  list-style-type: square;\r\n  font-size: 1.2em;\r\n  color: #000;\r\n  line-height: 2;\r\n  letter-spacing: 0.5px;\r\n  font-style: italic;\r\n  font-weight: 600;\r\n}  .middle-w3l[_ngcontent-%COMP%] {\r\n  background: url(http://lorempixel.com/1920/1920/city/9/) no-repeat fixed;\r\n  background-size: cover;\r\n  padding: 10em 0 8em;\r\n} .middle-left-w3l[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  width: 70%;\r\n  float: right;\r\n} .middle-left-w3l[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 40px;\r\n  line-height: 1.4;\r\n} .middle-left-w3l[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  margin: 10px 0 20px;\r\n} .readmore-w3-agileits.about-read[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  background: #9f4f5c;\r\n  margin-top: 30px;\r\n  border-radius: 4px;\r\n} .readmore-w3-agileits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  border: 1px solid #fff;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  font-size: 15px;\r\n  letter-spacing: 1px;\r\n  padding: 12px 30px;\r\n  transition: 0.5s all;\r\n}  .wthree_services[_ngcontent-%COMP%] {\r\n  background: #2ec4b6;\r\n  padding: 5em 0;\r\n  margin-bottom: 50px;\r\n} h3.title[_ngcontent-%COMP%] {\r\n  color: #272525;\r\n  font-size: 45px;\r\n  text-align: center;\r\n  font-style: italic;\r\n  margin-bottom: 50px;\r\n  position: relative;\r\n} h3.title[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  background: #9f4f5c;\r\n  position: absolute;\r\n  width: 110px;\r\n  height: 2px;\r\n  bottom: -25%;\r\n  left: 45%;\r\n} .wthree_services_left_grid1[_ngcontent-%COMP%] {\r\n  width: 65px;\r\n  height: 65px;\r\n  background: #9f4f5c;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n} .wthree_services_left_grid1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 28px;\r\n  color: #fff;\r\n  line-height: 2.3;\r\n} .wthree_services_left_grid_left[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n} .wthree_services_left_grid_left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 24px;\r\n  color: #fff;\r\n  letter-spacing: 1px;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Amaranth\", sans-serif;\r\n}  .footer[_ngcontent-%COMP%] {\r\n  padding: 4em 0;\r\n  background-color: #151414;\r\n} .footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 25px;\r\n  margin-bottom: 16px;\r\n  letter-spacing: 1px;\r\n} p.footer-one-w3ls[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n} .footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 25px;\r\n  margin-bottom: 16px;\r\n  letter-spacing: 1px;\r\n} p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Open Sans\", sans-serif;\r\n  font-size: 15px;\r\n  letter-spacing: 1px;\r\n  line-height: 1.9;\r\n  color: #999;\r\n} .footer-grids[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n} .footer-grids[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 12px;\r\n  font-size: 15px;\r\n  color: #000;\r\n  outline: none;\r\n  border: none;\r\n  background: #fff;\r\n  letter-spacing: 1px;\r\n} .footer-grids[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\r\n  width: 46%;\r\n  font-size: 16px;\r\n  color: #fff;\r\n  display: inherit;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n  outline: none;\r\n  padding: 12px;\r\n  border: none;\r\n  letter-spacing: 1px;\r\n  background: #9f4f5c;\r\n  -webkit-transition: 0.5s all;\r\n  margin-top: 20px;\r\n} .social-w3l[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  float: left;\r\n  width: 26%;\r\n} .social-w3l[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-weight: 600;\r\n  margin: 1.5em 0em 1.8em;\r\n  text-align: center;\r\n} .social-w3l[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  width: 35px;\r\n  height: 35px;\r\n  padding: 4px 0 0 0px;\r\n  background: #2ec4b6;\r\n  transform: rotate(45deg);\r\n  line-height: 2em;\r\n} .social-w3r[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: block;\r\n} .social-w3r[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  letter-spacing: 1px;\r\n  margin: 22px 0;\r\n  display: inline-block;\r\n} .social-w3l[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  transform: rotate(-45deg);\r\n  font-size: 16px;\r\n  line-height: 30px;\r\n} .copy-section[_ngcontent-%COMP%] {\r\n  padding: 1.5em 0;\r\n  background: #000;\r\n  text-align: center;\r\n} .copy-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  color: #fff;\r\n  letter-spacing: 2px;\r\n} .copy-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #9f4f5c;\r\n} #custom-search-form[_ngcontent-%COMP%] {\r\n  margin:0;\r\n  margin-top: 5px;\r\n  padding: 0;\r\n} #custom-search-form[_ngcontent-%COMP%]   .search-query[_ngcontent-%COMP%] {\r\n  padding-right: 3px;\r\n  padding-right: 4px \\9;\r\n  padding-left: 3px;\r\n  padding-left: 4px \\9;\r\n  \r\n\r\n  margin-bottom: 0;\r\n  border-radius: 3px;\r\n} #custom-search-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  background: none;\r\n  \r\n  padding: 2px 5px;\r\n  margin-top: 2px;\r\n  position: relative;\r\n  left: -28px;\r\n  \r\n  margin-bottom: 0;\r\n  border-radius: 3px;\r\n} .search-query[_ngcontent-%COMP%]:focus    + button[_ngcontent-%COMP%] {\r\n  z-index: 3;   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCLEVBQUUsa0dBQWtHLEVBQ3BHLHdGQUF3RixFQUN4RjtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLE1BQU07RUFDTixXQUFXO0VBQ1gsV0FBVztBQUNiLEVBRUE7RUFDRSx5QkFBeUI7QUFDM0IsRUFFQSxxQkFBcUIsRUFDckI7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaLEVBQ0E7RUFDRSxhQUFhO0FBQ2YsRUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCLEVBQ0E7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFdBQVc7QUFDYixFQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCLEVBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiLEVBQ0E7RUFDRSxZQUFZO0FBQ2QsRUFDQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQixFQUNBO0VBQ0UsV0FBVztBQUNiLEVBQ0E7RUFDRSxxQkFBcUI7QUFDdkIsRUFDQTtFQUNFLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEIsRUFFQSxvQkFBb0IsRUFDcEI7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQixFQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCLEVBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQixFQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtBQUNwQixFQUNBO0VBQ0U7b0JBQ2tCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCLEVBQ0E7RUFDRSxvQkFBb0I7QUFDdEIsRUFDQTtFQUNFLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsU0FBUztBQUNYLEVBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckIsRUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCLEVBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsVUFBVTtBQUNaLEVBQ0E7RUFDRSxvQkFBb0I7QUFDdEIsRUFDQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQixFQUVBLG1EQUFtRCxFQUNuRDtFQUNFLHdFQUF3RTtFQUN4RSxzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCLEVBQ0E7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7QUFDZCxFQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIsRUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckIsRUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCLEVBQ0E7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFFbEIsb0JBQW9CO0FBQ3RCLEVBRUEsZUFBZSxFQUNmO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxtQkFBbUI7QUFDckIsRUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCLEVBQ0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0FBQ1gsRUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCLEVBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQUNsQixFQUNBO0VBQ0UsVUFBVTtBQUNaLEVBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUNWLG1DQUFtQztBQUNyQyxFQUVBLGFBQWEsRUFDYjtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0IsRUFDQTs7RUFFRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckIsRUFDQTtFQUNFLGVBQWU7QUFDakIsRUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQixFQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiLEVBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIsRUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckIsRUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQixFQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxVQUFVO0FBQ1osRUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQixFQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEIsRUFDQTtFQUNFLGNBQWM7QUFDaEIsRUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHFCQUFxQjtBQUN2QixFQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIsRUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCLEVBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtBQUNyQixFQUNBO0VBQ0UsY0FBYztBQUNoQixFQUNBO0VBQ0UsUUFBUTtFQUNSLGVBQWU7RUFDZixVQUFVO0FBQ1osRUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrRUFBa0U7O0VBRWxFLGdCQUFnQjtFQUdoQixrQkFBa0I7QUFDcEIsRUFFQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrRUFBa0U7RUFDbEUsZ0JBQWdCO0VBR2hCLGtCQUFrQjtBQUNwQixFQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIvKntwYWRkaW5nOjEwcHggMHB4O2JhY2tncm91bmQ6IzI4MmUzYzt9Ki8ge1xyXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICBiYWNrZ3JvdW5kOiAjMTQzY2ExO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59IC8qcG9zaXRpb246IGZpeGVkO3otaW5kZXg6IDk7d2lkdGg6IDEwMCU7dG9wOiAwO31wb3N0aW9uIGZpeGVkIHdpdGhvdXQgc3RyaWN5IHBvc3Rpb246Zml4ZWQgc3RhcnQqL1xyXG4vKiBUaGUgc3RpY2t5IGNsYXNzIGlzIGFkZGVkIHRvIHRoZSBuYXZiYXIgd2l0aCBKUyB3aGVuIGl0IHJlYWNoZXMgaXRzIHNjcm9sbCBwb3NpdGlvbiAqL1xyXG4uZGFya0hlYWRlciB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiA5OTtcclxufVxyXG5cclxuLmRhcmtIZWFkZXIgYSB7XHJcbiAgY29sb3I6ICMyZWM0YjYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLypzdHJpY3kgY29udGVudCBlbmQqL1xyXG51bCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDExNzBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uc3RpY2t5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5zdGlja3kgKyAuY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDEwMnB4O1xyXG59XHJcbi5sb2dvIHtcclxuICB3aWR0aDogMjAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5uYXZpZ2F0aW9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLm5hdmlnYXRpb24gdWwgbGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5uYXZpZ2F0aW9uIHVsIGxpIGEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5uYXZpZ2F0aW9uIHVsIGxpIGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ubmF2LWhvbWU6YWZ0ZXIge1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjOWY0ZjVjO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA0NXB4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgbWFyZ2luOiA4cHggYXV0byAwO1xyXG59XHJcblxyXG4vKndlbGNvbWUgdG8gVHJhdmVsKi9cclxuLnczbF9oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogM2VtO1xyXG4gIGNvbG9yOiAjMjYyYzM4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi53ZWxjb21lLXRvLXRyYXZlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG4ud3RocmVlX2hlYWRfc2VjdGlvbiBwIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgY29sb3I6ICM1ZTVlNWU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG59XHJcbi53M2xfaGVhZGVyOmFmdGVyIHtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgIzlmNGY1YztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogODFweDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIG1hcmdpbjogOHB4IGF1dG8gMDtcclxufVxyXG4uYWJvdXQtZ3JpZDEge1xyXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2Jlc3RqcXVlcnkuY29tL3R1dG9yaWFsL3Byb2R1Y3QtZ3JpZC9kZW1vOS9pbWFnZXMvaW1nLTIuanBnKVxyXG4gICAgbm8tcmVwZWF0IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDY7XHJcbn1cclxuLmFib3V0LWdyaWQyIHtcclxuICBwYWRkaW5nOiAwZW0gMCAwIDRlbTtcclxufVxyXG4uYWJvdXQtc3ViZ3JpZCBwIHtcclxuICBjb2xvcjogIzAwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LXNpemU6IDEuOGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmFib3V0LXN1YmdyaWQgaDIge1xyXG4gIGZvbnQtc2l6ZTogMi4yZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW46IDAuNWVtIDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yaWdodDogNXB4IGRvdWJsZSAjOWY0ZjVjO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmFib3V0LXN1YmdyaWQgc3BhbiB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDI3cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5hYm91dC1zdWJncmlkIGg1IHtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIG1hcmdpbjogMWVtIDA7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzlmNGY1YztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG51bC53M2wtYWJvdXQtbGlzdCB7XHJcbiAgcGFkZGluZzogMGVtIDAgMCAyZW07XHJcbn1cclxudWwudzNsLWFib3V0LWxpc3QgbGkge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vKmJhbm5lci0gZml4ZWQgdHJhdmVsIHBlcmZlY3Rpb24tLWNzcy1pbWFnZS1zdHlsZSovXHJcbi5taWRkbGUtdzNsIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cDovL2xvcmVtcGl4ZWwuY29tLzE5MjAvMTkyMC9jaXR5LzkvKSBuby1yZXBlYXQgZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwYWRkaW5nOiAxMGVtIDAgOGVtO1xyXG59XHJcbi5taWRkbGUtbGVmdC13M2wge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5taWRkbGUtbGVmdC13M2wgaDQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG59XHJcbi5taWRkbGUtbGVmdC13M2wgcCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMjBweDtcclxufVxyXG4ucmVhZG1vcmUtdzMtYWdpbGVpdHMuYWJvdXQtcmVhZCBhIHtcclxuICBiYWNrZ3JvdW5kOiAjOWY0ZjVjO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5yZWFkbW9yZS13My1hZ2lsZWl0cyBhIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgcGFkZGluZzogMTJweCAzMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbn1cclxuXHJcbi8qb3VyIHNlcnZpY2VzKi9cclxuLnd0aHJlZV9zZXJ2aWNlcyB7XHJcbiAgYmFja2dyb3VuZDogIzJlYzRiNjtcclxuICBwYWRkaW5nOiA1ZW0gMDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbmgzLnRpdGxlIHtcclxuICBjb2xvcjogIzI3MjUyNTtcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5oMy50aXRsZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZDogIzlmNGY1YztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvdHRvbTogLTI1JTtcclxuICBsZWZ0OiA0NSU7XHJcbn1cclxuLnd0aHJlZV9zZXJ2aWNlc19sZWZ0X2dyaWQxIHtcclxuICB3aWR0aDogNjVweDtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgYmFja2dyb3VuZDogIzlmNGY1YztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLnd0aHJlZV9zZXJ2aWNlc19sZWZ0X2dyaWQxIGkge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBsaW5lLWhlaWdodDogMi4zO1xyXG59XHJcbi53dGhyZWVfc2VydmljZXNfbGVmdF9ncmlkX2xlZnQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLnd0aHJlZV9zZXJ2aWNlc19sZWZ0X2dyaWRfbGVmdCBoMyB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiQW1hcmFudGhcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLyoybmQgZm9vdGVyKi9cclxuLmZvb3RlciB7XHJcbiAgcGFkZGluZzogNGVtIDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTQxNDtcclxufVxyXG4uZm9vdGVyIGgzLFxyXG4uZm9vdGVyIGgyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbnAuZm9vdGVyLW9uZS13M2xzIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmZvb3RlciBoMyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5wIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBsaW5lLWhlaWdodDogMS45O1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcbi5mb290ZXItZ3JpZHMgZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uZm9vdGVyLWdyaWRzIGZvcm0gaW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuLmZvb3Rlci1ncmlkcyBmb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIHdpZHRoOiA0NiU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBiYWNrZ3JvdW5kOiAjOWY0ZjVjO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBhbGw7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uc29jaWFsLXczbCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMjYlO1xyXG59XHJcbi5zb2NpYWwtdzNsIHVsIGxpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbjogMS41ZW0gMGVtIDEuOGVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc29jaWFsLXczbCB1bCBsaSBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHBhZGRpbmc6IDRweCAwIDAgMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMyZWM0YjY7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIGxpbmUtaGVpZ2h0OiAyZW07XHJcbn1cclxuLnNvY2lhbC13M3IgdWwgbGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5zb2NpYWwtdzNyIHVsIGxpIGEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgbWFyZ2luOiAyMnB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5zb2NpYWwtdzNsIHVsIGxpIGEgaSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuLmNvcHktc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMS41ZW0gMDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29weS1zZWN0aW9uIHAge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcbi5jb3B5LXNlY3Rpb24gYSB7XHJcbiAgY29sb3I6ICM5ZjRmNWM7XHJcbn1cclxuI2N1c3RvbS1zZWFyY2gtZm9ybSB7XHJcbiAgbWFyZ2luOjA7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbiNjdXN0b20tc2VhcmNoLWZvcm0gLnNlYXJjaC1xdWVyeSB7XHJcbiAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweCBcXDk7XHJcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHggXFw5O1xyXG4gIC8qIElFNy04IGRvZXNuJ3QgaGF2ZSBib3JkZXItcmFkaXVzLCBzbyBkb24ndCBpbmRlbnQgdGhlIHBhZGRpbmcgKi9cclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbiNjdXN0b20tc2VhcmNoLWZvcm0gYnV0dG9uIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICAvKiogYmVsb3dzIHN0eWxlcyBhcmUgd29ya2luZyBnb29kICovXHJcbiAgcGFkZGluZzogMnB4IDVweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IC0yOHB4O1xyXG4gIC8qIElFNy04IGRvZXNuJ3QgaGF2ZSBib3JkZXItcmFkaXVzLCBzbyBkb24ndCBpbmRlbnQgdGhlIHBhZGRpbmcgKi9cclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLnNlYXJjaC1xdWVyeTpmb2N1cyArIGJ1dHRvbiB7XHJcbiAgei1pbmRleDogMzsgICBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: src_app_services_info_page_service__WEBPACK_IMPORTED_MODULE_1__["InfoPageService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\curso\MeShop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map