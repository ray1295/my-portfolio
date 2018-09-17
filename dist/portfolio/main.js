(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { AppComponent } from './app.component';
var routes = [
    // { path: '', component: AppComponent },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n    <!-- Sidenav content -->\r\n    <mat-sidenav mode=\"side\" opened>\r\n        <a class=\"logo-container\" routerLink=\"/\">\r\n            <img class=\"logo-ra\" src=\"../assets/images/ra-logo.png\" alt=\"Raymond Alake logo\">\r\n        </a>\r\n        <a routerLink=\"/\" class=\"side-links\" matTooltip=\"Home\" matTooltipPosition=\"right\">\r\n            <i class=\"material-icons\">home</i>\r\n        </a>\r\n        <a routerLink=\"/projects\" class=\"side-links\" matTooltip=\"Projects\" matTooltipPosition=\"right\">\r\n            <i class=\"material-icons\">dashboard</i>\r\n        </a>\r\n    </mat-sidenav>\r\n    <!-- End of sidenav content -->\r\n\r\n    <!-- Body content -->\r\n    <mat-sidenav-content>\r\n        <!-- Router view goes here -->\r\n        <router-outlet></router-outlet>\r\n    </mat-sidenav-content>\r\n    <!-- End of body content -->\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 320px) {\n  .logo-container {\n    margin-bottom: 40px;\n    display: inline-block; }\n  .logo-ra {\n    width: 32px;\n    height: 32px; }\n  .sidenav-container {\n    position: absolute !important;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: #eee; }\n  .mat-drawer {\n    width: 60px;\n    padding: 20px 0;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    text-align: center;\n    background-color: #fafafa; }\n  .mat-drawer-content {\n    padding: 0 1rem;\n    background-color: #fafafa; }\n  mat-sidenav a.side-links {\n    color: #444444;\n    width: 35px;\n    height: 35px;\n    display: inline-block;\n    margin: 20px 10px; }\n  mat-sidenav i {\n    vertical-align: text-top;\n    line-height: 1.25 !important; } }\n\n@media only screen and (min-width: 600px) {\n  .mat-drawer {\n    padding: 40px 0; }\n  .mat-drawer-content {\n    padding: 0 5%; }\n  .logo-container {\n    margin-bottom: 80px; } }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Decorator
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["routingComponents"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"intro\">\r\n    <h1 class=\"name-title\">\r\n        {{firstName}}\r\n        <br> {{lastName}}\r\n    </h1>\r\n\r\n    <span class=\"lead-categories\">HTML 5</span>\r\n    <span class=\"lead-categories\">CSS 3</span>\r\n    <span class=\"lead-categories\">SASS</span>\r\n    <span class=\"lead-categories\">JavaScript</span>\r\n    <span class=\"lead-categories\">Angular</span>\r\n    <span class=\"lead-categories\">TDD / BDD</span>\r\n    <span class=\"lead-categories\">Git</span>\r\n    <span class=\"lead-categories\">Bootstrap</span>\r\n    <span class=\"lead-categories\">BEM</span>\r\n    <span class=\"lead-categories\">Pair Programming</span>\r\n    <span class=\"lead-categories\">Affinity</span>\r\n    <span class=\"lead-categories\">UI / UX Design</span>\r\n    <span class=\"lead-categories\">Web Development / Design</span>\r\n    <span class=\"lead-categories\">Responsive Development / Design</span>\r\n\r\n    <p class=\"lead-text\">\r\n        London, UK based Frontend Web Developer currently enjoying designing and building beautifully simple things\r\n        that make a difference.\r\n        \r\n        <br><br>\r\n\r\n        Have a project you'd like to discuss? Lets chat \r\n        <a href=\"mailto:ralake95@gmail.com?Subject=Hello%20Raymond\" class=\"lead-email\" target=\"_top\">\r\n            <strong>ralake95@gmail.com</strong>\r\n        </a>\r\n    </p>\r\n\r\n    <div class=\"social-link--container\">\r\n        <a href=\"https://github.com/ray1295\" target=\"_blank\"><i class=\"fab fa-github\"></i></a>\r\n        <a href=\"https://www.linkedin.com/in/raymond-alake-98522488/\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i></a>\r\n        <a href=\"../../assets/raymondalake.pdf\" download><i class=\"fas fa-file-alt\"></i></a>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"about\">\r\n    <img src=\"../../assets/logos/ra-logo-3d.png\" alt=\"RA-Logo-3D\">\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 320px) {\n  .intro {\n    position: absolute;\n    top: 10%; }\n  .lead-text {\n    font-size: 0.8rem;\n    margin-top: 1rem; }\n  .lead-categories {\n    background-color: #444444;\n    color: white;\n    border-radius: 3px;\n    padding: 4px 8px;\n    margin: 2px;\n    font-size: 12px;\n    line-height: 1.5;\n    display: inline-flex;\n    justify-content: space-evenly; }\n  .lead-email {\n    text-decoration: underline; }\n  .about {\n    top: 55%;\n    padding: 10px 5% 0 0;\n    position: absolute; }\n    .about img {\n      width: 100%; }\n  .about h2 {\n    font-weight: 600;\n    font-size: 1rem;\n    line-height: 150%; }\n  .social-link--container i {\n    font-size: 32px;\n    margin-right: 24px; } }\n\n@media only screen and (min-width: 600px) {\n  .intro {\n    position: fixed; }\n  .about {\n    top: 66%; }\n  .name-title {\n    margin-top: 0; }\n  .about h2 {\n    font-size: 1.414rem; }\n  .lead-text {\n    font-size: 1.2rem; } }\n\n@media only screen and (min-width: 1024px) {\n  .intro {\n    width: 40%; }\n  .about {\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    width: 50%;\n    height: 50%;\n    margin-bottom: 5%; } }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.firstName = 'Raymond';
        this.lastName = 'Alake';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"project-h1\">Projects</h1>\r\n<h3>\r\n    Since beginning my journey as a developer nearly 2 years ago, I've done remote work, consulted for a startup, and collaborated with talented people to create digital products.\r\n    I strive to create and design joyful and timeless experiences connecting products to users. <br><br>\r\n    When I'm not coding, learning or pushing pixels , you'll find me working out at the gym or catching some much-needed rest.</h3>\r\n<br>\r\n<div class=\"project-container\">\r\n\r\n    <!-- Hiveli Project tile-->\r\n    <div class=\"project-tile\">\r\n        <div class=\"tile-container\">\r\n            <div class=\"project-assetCon\">\r\n                <div id=\"hiveliindicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n                    <ol class=\"carousel-indicators\">\r\n                        <li data-target=\"#hiveliindicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n                        <li data-target=\"#hiveliindicators\" data-slide-to=\"1\"></li>\r\n                        <li data-target=\"#hiveliindicators\" data-slide-to=\"2\"></li>\r\n                    </ol>\r\n                    <div class=\"carousel-inner\">\r\n                        <div class=\"carousel-item active\">\r\n                            <img class=\"d-block w-100\" src=\"../../assets/images/hiveliscreengrab.png\" alt=\"First slide\">\r\n                        </div>\r\n                        <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"../../assets/images/hiveliscreengrab2.png\" alt=\"Second slide\">\r\n                        </div>\r\n                        <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"../../assets/images/hiveliscreengrab3.png\" alt=\"Third slide\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- Carousel left Inidcators -->\r\n                    <a class=\"carousel-control-prev\" href=\"#hiveliindicators\" role=\"button\" data-slide=\"prev\">\r\n                        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                        <span class=\"sr-only\">Previous</span>\r\n                    </a>\r\n                    <!-- End carousel left Inidcators -->\r\n\r\n                    <!-- Carousel Right  Inidcators -->\r\n                    <a class=\"carousel-control-next\" href=\"#hiveliindicators\" role=\"button\" data-slide=\"next\">\r\n                        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                        <span class=\"sr-only\">Next</span>\r\n                    </a>\r\n                    <!-- End carousel right Inidcators -->\r\n\r\n                </div>\r\n            </div>\r\n            <!-- Project description cotainer -->\r\n            <div class=\"project-desCon\">\r\n                <!-- Project description name & img -->\r\n                <h2 class=\"des-name\">Hiveli</h2>\r\n                <p>Aug 2016 - present</p>\r\n                <div class=\"project-des\">\r\n                    <!-- Project programming languages used list -->\r\n                    <span class=\"lead-categories\">Angular JS</span>\r\n                    <span class=\"lead-categories\">JavaScript ES6</span>\r\n                    <span class=\"lead-categories\">CSS3 - SASS</span>\r\n                    <span class=\"lead-categories\">HTML5</span>\r\n                    <span class=\"lead-categories\">UI / UX</span>\r\n                    <span class=\"lead-categories\">Angular 5</span>\r\n                    <hr>\r\n                    <!-- Project description -->\r\n                    <p>Hiveli is an online user-to-events matching platform that falls into the social, business and travel category.  The primary strategy taken by the product team to achieve adoption is to transform the traditional conception (lengthy description, images) of events on the internet and present to the masses a new method of visualising events. </p>\r\n                    <!-- Project website view button -->\r\n                    <a href=\"http://www.hiveli.co.uk/\" target=\"_blank\"><button mat-stroked-button>View Website</button></a>\r\n                </div>\r\n            </div>\r\n            <!-- End project description cotainer -->\r\n        </div>\r\n    </div>\r\n    <!-- End Hiveli Project tile-->\r\n\r\n    <!-- Mochunks Project tile-->\r\n    <div class=\"project-tile\">\r\n        <div class=\"tile-container\">\r\n            <div class=\"project-assetCon\">\r\n                <div id=\"mochunksindicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n                    <ol class=\"carousel-indicators\">\r\n                        <li data-target=\"#mochunksindicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n                        <li data-target=\"#mochunksindicators\" data-slide-to=\"1\"></li>\r\n                        <li data-target=\"#mochunksindicators\" data-slide-to=\"2\"></li>\r\n                    </ol>\r\n                    <div class=\"carousel-inner\">\r\n                        <div class=\"carousel-item active\">\r\n                            <img class=\"d-block w-100\" src=\"../../assets/images/mochunksscreengrab1.png\" alt=\"First slide\">\r\n                        </div>\r\n                        <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"../../assets/images/mochunksscreengrab2.png\" alt=\"Second slide\">\r\n                        </div>\r\n                        <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"../../assets/images/mochunksscreengrab3.png\" alt=\"Third slide\">\r\n                        </div>\r\n                    </div>\r\n                    <a class=\"carousel-control-prev\" href=\"#mochunksindicators\" role=\"button\" data-slide=\"prev\">\r\n                        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                        <span class=\"sr-only\">Previous</span>\r\n                    </a>\r\n                    <a class=\"carousel-control-next\" href=\"#mochunksindicators\" role=\"button\" data-slide=\"next\">\r\n                        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                        <span class=\"sr-only\">Next</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"project-desCon\">\r\n                <h2 class=\"des-name\">Mochunks</h2>\r\n                <p>Aug 2017 - Sep 2017</p>\r\n                <div class=\"project-des\">\r\n                    <span class=\"lead-categories\">CSS3</span>\r\n                    <span class=\"lead-categories\">HTML5</span>\r\n                    <span class=\"lead-categories\">JavaScript</span>\r\n                    <span class=\"lead-categories\">UI / UX Architecture</span>\r\n                    <hr>\r\n                    <p>MoChunks Tv is the home of the MoChunks Show. An innovative talk show featuring chunks of lifestyle, fashion, entertainment and relationships. Recently, the brand has expanded from just a talk show to an online Tv channel as more productions have been created to be added to and compliment the existing idea.</p>\r\n                    <a href=\"https://www.mochunks.com/\" target=\"_blank\"><button mat-stroked-button>View Website</button></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- End Mochunks Project tile-->\r\n\r\n    <!-- Circlearn Project tile-->\r\n    <div class=\"project-tile\">\r\n        <div class=\"tile-container row\">\r\n            <div class=\"project-assetCon col-sm-6\">\r\n                <div id=\"circlearnindicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n                    <ol class=\"carousel-indicators\">\r\n                        <li data-target=\"#circlearnindicators\" data-slide-to=\"1\" class=\"active\"></li>\r\n                        <li data-target=\"#circlearnindicators\" data-slide-to=\"2\"></li>\r\n                    </ol>\r\n                    <div class=\"carousel-inner\">\r\n                        <div class=\"carousel-item active\">\r\n                            <img class=\"d-block w-100\" src=\"../../assets/images/circlearnscreengrab2.png\" alt=\"First slide\">\r\n                        </div>\r\n                        <div class=\"carousel-item\">\r\n                            <img class=\"d-block w-100\" src=\"../../assets/images/circlearnscreengrab1.png\" alt=\"Second slide\">\r\n                        </div>\r\n                    </div>\r\n                    <a class=\"carousel-control-prev\" href=\"#circlearnindicators\" role=\"button\" data-slide=\"prev\">\r\n                        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                        <span class=\"sr-only\">Previous</span>\r\n                    </a>\r\n                    <a class=\"carousel-control-next\" href=\"#circlearnindicators\" role=\"button\" data-slide=\"next\">\r\n                        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                        <span class=\"sr-only\">Next</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"project-desCon col-sm-6\">\r\n                <h2 class=\"des-name\">Circlearn</h2>\r\n                <p>Aug 2018 - present</p>\r\n                <div class=\"project-des\">\r\n                    <span class=\"lead-categories\">CSS3 - SASS</span>\r\n                    <span class=\"lead-categories\">HTML5</span>\r\n                    <span class=\"lead-categories\">Angular 5</span>\r\n                    <span class=\"lead-categories\">JavaScript ES6</span>\r\n                    <span class=\"lead-categories\">NgRX</span>\r\n                    <span class=\"lead-categories\">UI / UX Architecture</span>\r\n                    <hr>\r\n                    <p> \r\n                        A grade and timetable organisational tool that helps university students remain on top of work, grades and social life. \r\n                        <br> \r\n                        A personal project being creatred from scratch. \r\n                    </p>\r\n                    <a href=\"https://www.cirlearn.co.uk\"><button mat-stroked-button>View Website</button></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- End Circlearn Project tile-->\r\n\r\n</div>\r\n\r\n<!--<button class=\"scroll\" (click)=\"scrollWin()\">-->\r\n    <!--<i class=\"material-icons\">-->\r\n        <!--keyboard_arrow_up-->\r\n    <!--</i>-->\r\n<!--</button>-->\r\n"

/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 320px) {\n  .project-h1 {\n    margin-top: 2em; }\n  .project-container {\n    margin-bottom: 5%; }\n  .project-tile {\n    width: 100%;\n    height: 400px;\n    position: relative;\n    display: inline-block;\n    overflow: hidden;\n    margin-top: 2%; }\n  .tile-container {\n    height: 100%;\n    display: flex;\n    justify-content: space-evenly; }\n  .project-assetCon {\n    width: 60%;\n    height: 100%; }\n    .project-assetCon .carousel-item {\n      height: 400px; }\n    .project-assetCon img {\n      height: 100%; }\n  .project-desCon {\n    width: 40%;\n    height: 100%;\n    padding: 0 20px; }\n    .project-desCon .des-name {\n      margin: 0;\n      font-weight: 600; }\n    .project-desCon .project-des {\n      position: absolute;\n      bottom: 0; }\n    .project-desCon span {\n      margin-bottom: 10px; } }\n\n@media only screen and (min-width: 600px) {\n  .project-h1 {\n    margin-top: 2em; }\n  .scroll {\n    position: fixed;\n    bottom: 30px;\n    right: 40px;\n    border: 1px solid;\n    display: -webkit-box;\n    border-radius: 50%;\n    background: transparent; }\n    .scroll i {\n      font-size: 32px;\n      line-height: 1.3; } }\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    // scrollWin() {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth"
    //   });
    // }
    ProjectsComponent.prototype.ngOnInit = function () { };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Richmond\projects\my-portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map