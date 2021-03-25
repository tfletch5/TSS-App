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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (isLoggedIn) {
            console.log('isLoggedIn', isLoggedIn);
            if (!isLoggedIn) {
                _this.router.navigate(['/home']);
                return false;
            }
            return true;
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401 || err.status === 403) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });





/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = localStorage.getItem('token');
        if (currentUser && token) {
            request = request.clone({
                setHeaders: {
                    'x-access-token': token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/ambassador.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/ambassador.service.ts ***!
  \*************************************************/
/*! exports provided: AmbassadorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmbassadorService", function() { return AmbassadorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AmbassadorService = /** @class */ (function () {
    function AmbassadorService(http) {
        this.http = http;
    }
    AmbassadorService.prototype.getAmbassadors = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/ambassadors")
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    AmbassadorService.prototype.getAmbassador = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/ambassadors/" + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    AmbassadorService.prototype.addAmbassador = function (form) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/ambassadors", form)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    AmbassadorService.prototype.updateAmbassador = function (form, id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.patch(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/ambassadors/" + id, form)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    AmbassadorService.prototype.deleteAmbassador = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/ambassadors/" + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    AmbassadorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AmbassadorService);
    return AmbassadorService;
}());



/***/ }),

/***/ "./src/app/_services/attendee.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/attendee.service.ts ***!
  \***********************************************/
/*! exports provided: AttendeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendeeService", function() { return AttendeeService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AttendeeService = /** @class */ (function () {
    function AttendeeService(http) {
        this.http = http;
    }
    AttendeeService.prototype.getAttendees = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/attendees")
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return reject(err); });
        });
    };
    AttendeeService.prototype.getAttendee = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/attendees/" + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return reject(err); });
        });
    };
    AttendeeService.prototype.addAttendee = function (form) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/attendees", form)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return reject(err); });
        });
    };
    AttendeeService.prototype.updateAttendee = function (form) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.patch(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/attendees", form)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return reject(err); });
        });
    };
    AttendeeService.prototype.deleteAttendee = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/attendees/" + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return reject(err); });
        });
    };
    AttendeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AttendeeService);
    return AttendeeService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.admin = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.loggedIn$ = this.loggedIn.asObservable();
        this.admin$ = this.admin.asObservable();
        if (localStorage.getItem('loggedIn')) {
            this.loggedIn.next(true);
        }
        else {
            localStorage.clear();
            this.router.navigate(['/home']);
        }
    }
    Object.defineProperty(AuthenticationService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "isAdmin", {
        get: function () {
            return this.admin.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    AuthenticationService.prototype.setAdminState = function (state) {
        this.admin.next(state);
    };
    // Get the token
    AuthenticationService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    // Set the token
    AuthenticationService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    // 
    AuthenticationService.prototype.getTokenExpirationDate = function (token) {
        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_5__(token);
        if (decoded.exp === undefined)
            return null;
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    AuthenticationService.prototype.isTokenExpired = function (token) {
        if (!token)
            token = this.getToken();
        if (!token)
            return true;
        var date = this.getTokenExpirationDate(token);
        if (date === undefined)
            return false;
        return date.valueOf() <= new Date().valueOf();
    };
    // Log a user in
    AuthenticationService.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.put(_config__WEBPACK_IMPORTED_MODULE_4__["cfg"].apiUrl + "/login", credentials)
                .subscribe(function (data) {
                console.log('login data', data);
                var rs = data;
                if (rs['success']) {
                    _this.saveData(rs['data']);
                    _this.loggedIn.next(true);
                }
                resolve(rs);
            }, function (err) { return resolve(err.error); });
        });
    };
    // Register a user
    AuthenticationService.prototype.register = function (form) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["cfg"].apiUrl + "/register", form).subscribe(function (data) {
                var rs = data;
                _this.saveData(rs['data']);
                _this.loggedIn.next(true);
                resolve(rs);
            }, function (err) { return reject(err.error); });
        });
    };
    AuthenticationService.prototype.refreshToken = function (form) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_4__["cfg"].apiUrl + "/token", form).subscribe(function (data) {
                localStorage.setItem('token', data['token]']);
            });
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.clear();
        this.loggedIn.next(false);
        this.admin.next(false);
        this.router.navigate(['/home']);
    };
    // Save login session
    AuthenticationService.prototype.saveData = function (data) {
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('loggedIn', '1');
        return;
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/event.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/event.service.ts ***!
  \********************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
    }
    EventService.prototype.getEvents = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/events")
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    EventService.prototype.getEvent = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/events/" + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    EventService.prototype.addEvent = function (form) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/events", form)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    EventService.prototype.updateEvent = function (form, id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.patch(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/events/" + id, form)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    EventService.prototype.deleteEvent = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/events/" + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    EventService.prototype.purchaseEvent = function (payment) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/stripe/charges", payment)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    EventService.prototype.saveTransaction = function (transaction) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/transactions", transaction)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AuthenticationService, UserService, AttendeeService, EventService, LocationService, MemberService, MembershipService, PlaceService, SurveyService, AmbassadorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });

/* harmony import */ var _attendee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attendee.service */ "./src/app/_services/attendee.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttendeeService", function() { return _attendee_service__WEBPACK_IMPORTED_MODULE_2__["AttendeeService"]; });

/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event.service */ "./src/app/_services/event.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return _event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]; });

/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location.service */ "./src/app/_services/location.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return _location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"]; });

/* harmony import */ var _member_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./member.service */ "./src/app/_services/member.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return _member_service__WEBPACK_IMPORTED_MODULE_5__["MemberService"]; });

/* harmony import */ var _membership_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./membership.service */ "./src/app/_services/membership.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MembershipService", function() { return _membership_service__WEBPACK_IMPORTED_MODULE_6__["MembershipService"]; });

/* harmony import */ var _place_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./place.service */ "./src/app/_services/place.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlaceService", function() { return _place_service__WEBPACK_IMPORTED_MODULE_7__["PlaceService"]; });

/* harmony import */ var _survey_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./survey.service */ "./src/app/_services/survey.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SurveyService", function() { return _survey_service__WEBPACK_IMPORTED_MODULE_8__["SurveyService"]; });

/* harmony import */ var _ambassador_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ambassador.service */ "./src/app/_services/ambassador.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AmbassadorService", function() { return _ambassador_service__WEBPACK_IMPORTED_MODULE_9__["AmbassadorService"]; });













/***/ }),

/***/ "./src/app/_services/location.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/location.service.ts ***!
  \***********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationService = /** @class */ (function () {
    function LocationService(http) {
        this.http = http;
    }
    LocationService.prototype.getLocations = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/locations")
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    LocationService.prototype.getLocation = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/locations/" + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    LocationService.prototype.addLocation = function (form) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/locations", form)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    LocationService.prototype.updateLocation = function (form, id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.patch(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/locations/" + id, form)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    LocationService.prototype.deleteLocation = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/locations/" + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    LocationService.prototype.getPlacesByLocation = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/locations/" + id + "/places")
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    LocationService.prototype.getEventsByLocation = function (id, user) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/locations/" + id + "/events/" + user)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    LocationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/app/_services/member.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/member.service.ts ***!
  \*********************************************/
/*! exports provided: MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return MemberService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemberService = /** @class */ (function () {
    function MemberService(http) {
        this.http = http;
    }
    MemberService.prototype.getMembers = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/members")
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    MemberService.prototype.getMember = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/members/" + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    MemberService.prototype.addMember = function (form) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/members", form)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    MemberService.prototype.updateMember = function (member) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.patch(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/members/" + member.user_id, { membership_id: member.membership_id })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    MemberService.prototype.deleteMember = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/members/" + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    MemberService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], MemberService);
    return MemberService;
}());



/***/ }),

/***/ "./src/app/_services/membership.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/membership.service.ts ***!
  \*************************************************/
/*! exports provided: MembershipService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipService", function() { return MembershipService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MembershipService = /** @class */ (function () {
    function MembershipService(http) {
        this.http = http;
    }
    MembershipService.prototype.getMemberships = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/memberships")
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return resolve(err.error); });
        });
    };
    MembershipService.prototype.getMembership = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/memberships/" + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    MembershipService.prototype.addMembership = function (form) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/stripe/products", {
                name: form.name,
                type: 'service',
                statement_descriptor: "TSS - " + form.name,
                metadata: {
                    cost: form.cost,
                    frequency: form.frequency
                }
            }).subscribe(function (data) {
                var prod = data['data'];
                _this.http.post(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/stripe/plans", {
                    product: prod.id,
                    nickname: prod.name,
                    currency: 'usd',
                    interval: prod.metadata.frequency,
                    amount: prod.metadata.cost,
                }).subscribe(function (data) {
                    var plan = data['data'];
                    form.product_id = plan.product;
                    form.plan_id = plan.id;
                    _this.http.post(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/memberships", form)
                        .subscribe(function (data) {
                        resolve(data);
                    }, function (err) { return resolve(err.error); });
                }, function (err) { return resolve(err.error); });
            }, function (err) { return resolve(err.error); });
        });
    };
    MembershipService.prototype.updateMembership = function (form, id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.patch(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/memberships/" + id, form)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    MembershipService.prototype.deleteMembership = function (id, product, plan) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/stripe/plans/" + plan).subscribe(function (data) {
                console.log("Delete Plan: ", data['data']);
                _this.http.delete(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/stripe/products/" + product).subscribe(function (data) {
                    console.log("Delete Product: ", data['data']);
                    _this.http.delete(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/memberships/" + id)
                        .subscribe(function (data) {
                        resolve(data);
                    }, function (err) { return resolve(err.error); });
                }, function (err) { return resolve(err.error); });
            }, function (err) { return resolve(err.error); });
        });
    };
    MembershipService.prototype.changeMembership = function (membership) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.patch(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/stripe/subscriptions/" + membership.current_subscription, membership)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log('Change Membership:', err); });
        });
    };
    MembershipService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MembershipService);
    return MembershipService;
}());



/***/ }),

/***/ "./src/app/_services/place.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/place.service.ts ***!
  \********************************************/
/*! exports provided: PlaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceService", function() { return PlaceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlaceService = /** @class */ (function () {
    function PlaceService(http) {
        this.http = http;
    }
    PlaceService.prototype.getPlaces = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/places")
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    PlaceService.prototype.getPlace = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/places/" + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    PlaceService.prototype.addPlace = function (form) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/places", form)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    PlaceService.prototype.updatePlace = function (form, id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.patch(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/places/" + id, form)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    PlaceService.prototype.deletePlace = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/places/" + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    PlaceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], PlaceService);
    return PlaceService;
}());



/***/ }),

/***/ "./src/app/_services/survey.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/survey.service.ts ***!
  \*********************************************/
/*! exports provided: SurveyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyService", function() { return SurveyService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurveyService = /** @class */ (function () {
    function SurveyService(http) {
        this.http = http;
    }
    SurveyService.prototype.getSurveys = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/surveys")
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    SurveyService.prototype.getSurvey = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/surveys/" + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    SurveyService.prototype.addSurvey = function (form) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/surveys", form)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    SurveyService.prototype.updateSurvey = function (form, id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.patch(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/surveys/" + id, form)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    SurveyService.prototype.deleteSurvey = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/surveys/" + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return console.log(err); });
        });
    };
    SurveyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], SurveyService);
    return SurveyService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    // Verify ambassador code
    UserService.prototype.checkCode = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/code/" + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return resolve(err.error); });
        });
    };
    // Get locations for home page
    UserService.prototype.getLocations = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/getlocations")
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return resolve(err.error); });
        });
    };
    // Get Users
    UserService.prototype.getUsers = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/users")
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return resolve(err.error); });
        });
    };
    // Get specific user
    UserService.prototype.getUser = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/users/" + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return resolve(err.error); });
        });
    };
    // Add a user
    UserService.prototype.addUser = function (form) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/users", form)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return resolve(err.error); });
        });
    };
    // Update a user
    UserService.prototype.updateUser = function (form, id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.patch(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/users/" + id, form)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return resolve(err.error); });
        });
    };
    // Delete a user
    UserService.prototype.deleteUser = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/users/" + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return resolve(err.error); });
        });
    };
    // Get Events by User
    UserService.prototype.getEventsByUser = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/users/" + id + "/events")
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return resolve(err.error); });
        });
    };
    // Subscription to a membership
    UserService.prototype.subscribeToMembership = function (customer_id, plan_id) {
        var _this = this;
        return new Promise(function (resolve) {
            var sub = {
                customer: customer_id,
                items: [{ plan: plan_id }]
            };
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/stripe/subscriptions", sub)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return resolve(err.error); });
        });
    };
    UserService.prototype.getMembership = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/users/" + id + "/membership")
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return resolve(err.error); });
        });
    };
    UserService.prototype.attachSource = function (source) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_config__WEBPACK_IMPORTED_MODULE_2__["cfg"].apiUrl + "/stripe/sources", source)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) { return resolve(err.error); });
        });
    };
    // Save login session
    UserService.prototype.saveData = function (data) {
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        localStorage.setItem('authenticated', '1');
        return;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    color: #c5c2c2;\n    margin: 50px;\n}\n\n.about li {\n    list-style: none;\n    padding: 10px 0px;\n    line-height: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgY29sb3I6ICNjNWMyYzI7XG4gICAgbWFyZ2luOiA1MHB4O1xufVxuXG4uYWJvdXQgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-lg-center\">\n        <div>\n            <h3>About The Secret Society</h3>\n        </div>\n    </div>\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col\">\n            <p>Based in Los Angeles, the Secret Society is a group of taste makers and lifestyle purveyors from across America who have converged to provide first-class residents of each major city a safe haven to escape the drudgery of a mundane social\n                life. It's our mission to provide a choice selection of individuals with an exclusive and upscale environment to relax, network, mix and mingle. We have sought out the cities top power brokers, trendsetters, professionals, socially progressive\n                and artistically inclined to join our preferential network. All we ask of our patrons is trust.</p>\n            <ul class=\"about\">\n                <li>\n                    <fa-icon [icon]=\"faGraduationCap\" size=\"lg\"></fa-icon> - TRUST THAT: Your identity will be protected.</li>\n                <li>\n                    <fa-icon [icon]=\"faGraduationCap\" size=\"lg\"></fa-icon> - TRUST THAT: You will find our events to be thrilling.</li>\n                <li>\n                    <fa-icon [icon]=\"faGraduationCap\" size=\"lg\"></fa-icon> - TRUST THAT: You will meet interesting people from all walks of life and backgrounds.</li>\n                <li>\n                    <fa-icon [icon]=\"faGraduationCap\" size=\"lg\"></fa-icon> - TRUST THAT: You will be assured that our events will be safe and exclusive.</li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.faGraduationCap = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGraduationCap"];
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/ambassadors/ambassadors.component.css":
/*!*******************************************************!*\
  !*** ./src/app/ambassadors/ambassadors.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n    color: #000;\n    padding: 30px;\n    background-color: #fff;\n    margin-top: 0px;\n}\n\n.add-row {\n    padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW1iYXNzYWRvcnMvYW1iYXNzYWRvcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9hbWJhc3NhZG9ycy9hbWJhc3NhZG9ycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmFkZC1yb3cge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/ambassadors/ambassadors.component.html":
/*!********************************************************!*\
  !*** ./src/app/ambassadors/ambassadors.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <h3>Ambassadors</h3>\n    </div>\n    <div class=\"row add-row\">\n        <div class=\"col\"></div>\n        <div class=\"col text-right\">\n            <button class=\"btn btn-success\" (click)=\"open(contentNew, null)\"><fa-icon [icon]=\"faPlusCircle\"></fa-icon> Add New Ambassadors</button>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <table class=\"table table-striped table-light table-hover\">\n            <thead>\n                <tr>\n                    <!-- <th scope=\"col\">ID</th> -->\n                    <th scope=\"col\">FIRST</th>\n                    <th scope=\"col\">LAST</th>\n                    <th scope=\"col\">PHONE</th>\n                    <th scope=\"col\">EMAIL</th>\n                    <th scope=\"col\">CODE</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let amb of ambassadors\">\n                    <!-- <th scope=\"row\">{{ amb.id }}</th> -->\n                    <td>{{ amb.first }}</td>\n                    <td>{{ amb.last }}</td>\n                    <td>{{ amb.phone }}</td>\n                    <td>{{ amb.email }}</td>\n                    <td>{{ amb.code }}</td>\n                    <td>\n                        <button class=\"btn btn-info\" (click)=\"open(contentEdit, amb)\">\n                            <fa-icon [icon]=\"faEdit\"></fa-icon>\n                        </button>&nbsp;\n                        <button class=\"btn btn-danger\" (click)=\"open(contentDelete, amb)\">\n                            <fa-icon [icon]=\"faTrash\"></fa-icon>\n                        </button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<ng-template #contentDelete let-modal>\n    <div class=\"modal-header bg-danger\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Delete Confirmation</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            Are you sure you want to delete <strong>{{ modamb.first }} {{modamb.last}}</strong>?\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"delete(modamb.id); modal.close()\">Yes</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">No</button>\n    </div>\n</ng-template>\n\n\n<ng-template #contentEdit let-modal>\n    <div class=\"modal-header bg-info\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ modamb.first }} {{ modamb.last }}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <form [formGroup]=\"ambassadorForm\" (ngSubmit)=\"onUpdate(modamb.id)\">\n\n                <!-- First Name -->\n                <div class=\"form-group\">\n                    <label>First Name</label>\n                    <input type=\"text\" formControlName=\"first\" class=\"form-control\" [value]=\"modamb.first\" required />\n                </div>\n\n                <!-- Last Name -->\n                <div class=\"form-group\">\n                    <label>Last Name</label>\n                    <input type=\"text\" formControlName=\"last\" class=\"form-control\" [value]=\"modamb.last\" required />\n                </div>\n\n                <!-- Phone field -->\n                <div class=\"form-group\">\n                    <label>Phone</label>\n                    <input type=\"text\" formControlName=\"phone\" class=\"form-control\" [value]=\"modamb.phone\" required />\n                </div>\n\n                <!-- Email field -->\n                <div class=\"form-group\">\n                    <label>Email</label>\n                    <input type=\"text\" formControlName=\"email\" class=\"form-control\" [value]=\"modamb.email\" required />\n                </div>\n\n                <!-- Create event button -->\n                <div class=\"form-group\">\n                    <button class=\"btn btn-outline-primary\">Update Ambassador</button>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Done</button>\n    </div>\n</ng-template>\n\n\n<!-- Create New Modal -->\n<ng-template #contentNew let-modal>\n    <div class=\"modal-header bg-success\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Create an Ambassador</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <form [formGroup]=\"ambassadorForm\" (ngSubmit)=\"onSubmit()\">\n\n                <!-- First Name -->\n                <div class=\"form-group\">\n                    <label>First Name</label>\n                    <input type=\"text\" formControlName=\"first\" class=\"form-control\" required />\n                </div>\n\n                <!-- Last Name -->\n                <div class=\"form-group\">\n                    <label>Last Name</label>\n                    <input type=\"text\" formControlName=\"last\" class=\"form-control\" required />\n                </div>\n\n                <!-- Phone field -->\n                <div class=\"form-group\">\n                    <label>Phone</label>\n                    <input type=\"text\" formControlName=\"phone\" class=\"form-control\" required />\n                </div>\n\n                <!-- Email field -->\n                <div class=\"form-group\">\n                    <label>Email</label>\n                    <input type=\"text\" formControlName=\"email\" class=\"form-control\" required />\n                </div>\n\n                <!-- Create event button -->\n                <div class=\"form-group\">\n                    <button class=\"btn btn-outline-primary\" *ngIf=\"ambassadorForm.valid\">Create Ambassador</button>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Cancel</button>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/ambassadors/ambassadors.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ambassadors/ambassadors.component.ts ***!
  \******************************************************/
/*! exports provided: AmbassadorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmbassadorsComponent", function() { return AmbassadorsComponent; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AmbassadorsComponent = /** @class */ (function () {
    function AmbassadorsComponent(ambassador, modalService, formBuilder) {
        this.ambassador = ambassador;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrash"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEdit"];
        this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlusCircle"];
    }
    AmbassadorsComponent.prototype.ngOnInit = function () {
        this.getAmbassadors();
        this.ambassadorForm = this.formBuilder.group({
            first: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            last: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    AmbassadorsComponent.prototype.getAmbassadors = function () {
        var _this = this;
        this.ambassador.getAmbassadors().then(function (data) { return _this.ambassadors = data['items']; });
    };
    AmbassadorsComponent.prototype.delete = function (id) {
        var _this = this;
        this.ambassador.deleteAmbassador(id).then(function (data) {
            console.log(data);
            _this.getAmbassadors();
        });
    };
    AmbassadorsComponent.prototype.open = function (content, item) {
        if (item != null) {
            this.modamb = item;
        }
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(function (result) { });
    };
    AmbassadorsComponent.prototype.onSubmit = function () {
        var _this = this;
        var form = this.ambassadorForm.value;
        console.log(form);
        this.ambassador.addAmbassador(form).then(function (data) {
            if (data['success']) {
                _this.modalService.dismissAll();
                _this.getAmbassadors();
            }
            else {
                console.log("no", data);
            }
        });
    };
    AmbassadorsComponent.prototype.onUpdate = function (id) {
        var _this = this;
        var form = this.ambassadorForm.value;
        for (var prop in form) {
            if (form.hasOwnProperty(prop) && !form[prop]) {
                delete form[prop];
            }
        }
        this.ambassador.updateAmbassador(form, id).then(function (data) {
            if (data['success']) {
                _this.modalService.dismissAll();
                _this.getAmbassadors();
            }
            else {
                console.log("no", data);
            }
        });
    };
    AmbassadorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ambassadors',
            template: __webpack_require__(/*! ./ambassadors.component.html */ "./src/app/ambassadors/ambassadors.component.html"),
            styles: [__webpack_require__(/*! ./ambassadors.component.css */ "./src/app/ambassadors/ambassadors.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_0__["AmbassadorService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AmbassadorsComponent);
    return AmbassadorsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n}\n\n.nav-item>button,\n.drop>button {\n    color: rgb(161, 161, 161);\n}\n\n.nav-item>button:hover,\n.drop>button:hover {\n    color: rgb(255, 255, 255);\n}\n\n#main-menu {\n    background-color: #fff;\n    position: absolute;\n    z-index: 999;\n}\n\n#main {\n    width: 100%;\n    height: 75%;\n}\n\n.about li {\n    /* list-style: none; */\n    padding: 5px 0px;\n    line-height: 2em;\n}\n\n.footer {\n    background-color: #000;\n    color: #ccc;\n    font-size: .7em;\n    padding: 30px;\n    position: relative;\n    bottom: 0;\n    width: 100%;\n}\n\n.footer a {\n    color: rgb(80, 182, 241);\n    font-size: 1em;\n    cursor: pointer;\n}\n\n.footer a:hover {\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0FBQ2I7O0FBRUE7O0lBRUkseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXG5ib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubmF2LWl0ZW0+YnV0dG9uLFxuLmRyb3A+YnV0dG9uIHtcbiAgICBjb2xvcjogcmdiKDE2MSwgMTYxLCAxNjEpO1xufVxuXG4ubmF2LWl0ZW0+YnV0dG9uOmhvdmVyLFxuLmRyb3A+YnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4jbWFpbi1tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG59XG5cbiNtYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDc1JTtcbn1cblxuLmFib3V0IGxpIHtcbiAgICAvKiBsaXN0LXN0eWxlOiBub25lOyAqL1xuICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbn1cblxuLmZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBjb2xvcjogI2NjYztcbiAgICBmb250LXNpemU6IC43ZW07XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9vdGVyIGEge1xuICAgIGNvbG9yOiByZ2IoODAsIDE4MiwgMjQxKTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb290ZXIgYTpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\n    <app-header></app-header>\n    <router-outlet></router-outlet>\n    <div class=\"footer text-center\">\n        <div class=\"container\">\n            <div class=\"row justify-content-center py-4\">\n                <div class=\"col-sm-12 col-md-2\">\n                    <a class=\"footer-link\" (click)=\"open(contentAbout);\">ABOUT TSS</a>\n                </div>\n                <div class=\"col-sm-12 col-md-2\">\n                    <a class=\"footer-link\" (click)=\"open(contentHow);\">HOW IT WORKS</a>\n                </div>\n                <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2\">\n                    <a class=\"footer-link\" href=\"mailto:sales@thesecretsociety.us?subject=Customer question from site\">CONTACT US</a>\n                </div>\n            </div>\n        </div>\n        <div>THE SECRET SOCIETY &copy; 2021</div>\n    </div>\n</div>\n\n\n\n\n<ng-template #contentAbout let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">About The Secret Society</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <div class=\"row justify-content-md-center\">\n                <div class=\"col\">\n                    <p>Based in Los Angeles, the Secret Society is a group of taste makers and lifestyle purveyors from across America who have converged to provide first-class residents of each major city a safe haven to escape the drudgery of a mundane\n                        social life. It's our mission to provide a choice selection of individuals with an exclusive and upscale environment to relax, network, mix and mingle. We have sought out the cities top power brokers, trendsetters, professionals,\n                        socially progressive and artistically inclined to join our preferential network. All we ask of our patrons is trust.</p>\n                    <ul class=\"about\">\n                        <li>TRUST THAT: Your identity will be protected.</li>\n                        <li>TRUST THAT: You will find our events to be thrilling.</li>\n                        <li>TRUST THAT: You will meet interesting people from all walks of life and backgrounds.</li>\n                        <li>TRUST THAT: You will be assured that our events will be safe and exclusive.</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Done</button>\n    </div>\n</ng-template>\n\n<ng-template #contentHow let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">How The Secret Society Works</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <div class=\"row justify-content-md-center col\">\n                <ul class=\"about\">\n                    <li>You have been presented with a membership card because one of our representatives felt you were the kind of socialite we would like to welcome into our network.</li>\n                    <li>Your temporary membership card is activated by visiting our site and entering the access code on your card.</li>\n                    <li>You will be taken to another screen which will ask for some additional information about you and for you to set up a username and password. After this, you will gain access to our private event listings.</li>\n                    <li>Please fill out our survey so that we can learn more about you and so that we may provide you with a better experience. The survey is encouraged but not mandatory. </li>\n                    <li>\n                        <p>Select the upcoming event you would like to attend and either pay for a single guest ticket or join the Secret Society as a member. </p>\n                        <p>The first event that you attend will be complimentary. If you would like to bring a guest, please send us an email to, guestlist@thesecretsociety.us, with there name, number and email address and we will register an account for\n                            them as well. ( Please remember that this event will count for the first complimentary event for your guest as well. ) </p>\n                    </li>\n                    <li>\n                        <p>Even if you select not to purchase a membership, your guest membership enables you to still attend events at a guest's premium.</p>\n                        <p>You will be added to our private email list and are welcome to attend selected events on an ala carte basis.</p>\n                    </li>\n                    <li>We strive to provide a rich, fulfilling experience for our members and strongly encourage you to consider making the investment to become a Secret Society member.</li>\n                    <li>Bring your TSS card and a valid state-issued driver's license, I.D. or passport to the event with you.</li>\n                    <li>Bring your cellular device with you for ticket processing and membership verification.</li>\n                </ul>\n\n                <p>All purchases are processed through Stripe which is a secured credit card processing platform. Patrons who sign up as members will be automatically billed monthly by our system.</p>\n                <p>For any questions do not hesitate to email us at info@thesecretsociety.us. One of our representatives will respond within 24 hours.</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Done</button>\n    </div>\n</ng-template>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(modalService) {
        this.modalService = modalService;
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHome"];
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCog"];
        this.faGraduationCap = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGraduationCap"];
    }
    AppComponent.prototype.open = function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(function (result) { });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
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
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm2015/ngx-editor.js");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/fesm2015/ngx-stripe.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _ambassadors_ambassadors_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ambassadors/ambassadors.component */ "./src/app/ambassadors/ambassadors.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _attendees_attendees_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./attendees/attendees.component */ "./src/app/attendees/attendees.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _how_how_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./how/how.component */ "./src/app/how/how.component.ts");
/* harmony import */ var _locations_locations_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./locations/locations.component */ "./src/app/locations/locations.component.ts");
/* harmony import */ var _members_members_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./members/members.component */ "./src/app/members/members.component.ts");
/* harmony import */ var _memberships_memberships_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./memberships/memberships.component */ "./src/app/memberships/memberships.component.ts");
/* harmony import */ var _places_places_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./places/places.component */ "./src/app/places/places.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _surveys_surveys_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./surveys/surveys.component */ "./src/app/surveys/surveys.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _viewevents_viewevents_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./viewevents/viewevents.component */ "./src/app/viewevents/viewevents.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [
                _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"],
                _ambassadors_ambassadors_component__WEBPACK_IMPORTED_MODULE_17__["AmbassadorsComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
                _attendees_attendees_component__WEBPACK_IMPORTED_MODULE_19__["AttendeesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"],
                _events_events_component__WEBPACK_IMPORTED_MODULE_21__["EventsComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
                _how_how_component__WEBPACK_IMPORTED_MODULE_24__["HowComponent"],
                _locations_locations_component__WEBPACK_IMPORTED_MODULE_25__["LocationsComponent"],
                _members_members_component__WEBPACK_IMPORTED_MODULE_26__["MembersComponent"],
                _memberships_memberships_component__WEBPACK_IMPORTED_MODULE_27__["MembershipsComponent"],
                _places_places_component__WEBPACK_IMPORTED_MODULE_28__["PlacesComponent"],
                _surveys_surveys_component__WEBPACK_IMPORTED_MODULE_30__["SurveysComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_31__["UsersComponent"],
                _viewevents_viewevents_component__WEBPACK_IMPORTED_MODULE_32__["VieweventsComponent"]
            ],
            imports: [
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_0__["AngularEditorModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploadModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_9__["NgxEditorModule"],
                ngx_stripe__WEBPACK_IMPORTED_MODULE_10__["NgxStripeModule"].forRoot('sk_live_ZmZLzymNNX8wJCzoc4MbWKTi00F3qzMsuW'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_29__["Routing"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(),
            ],
            providers: [
                _guards__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"],
                _services__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
                _services__WEBPACK_IMPORTED_MODULE_13__["AmbassadorService"],
                _services__WEBPACK_IMPORTED_MODULE_13__["AttendeeService"],
                _services__WEBPACK_IMPORTED_MODULE_13__["EventService"],
                _services__WEBPACK_IMPORTED_MODULE_13__["LocationService"],
                _services__WEBPACK_IMPORTED_MODULE_13__["MemberService"],
                _services__WEBPACK_IMPORTED_MODULE_13__["MembershipService"],
                _services__WEBPACK_IMPORTED_MODULE_13__["PlaceService"],
                _services__WEBPACK_IMPORTED_MODULE_13__["SurveyService"],
                _services__WEBPACK_IMPORTED_MODULE_13__["UserService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_15__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_15__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ambassadors_ambassadors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ambassadors/ambassadors.component */ "./src/app/ambassadors/ambassadors.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _locations_locations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locations/locations.component */ "./src/app/locations/locations.component.ts");
/* harmony import */ var _members_members_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./members/members.component */ "./src/app/members/members.component.ts");
/* harmony import */ var _memberships_memberships_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./memberships/memberships.component */ "./src/app/memberships/memberships.component.ts");
/* harmony import */ var _places_places_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./places/places.component */ "./src/app/places/places.component.ts");
/* harmony import */ var _surveys_surveys_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./surveys/surveys.component */ "./src/app/surveys/surveys.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _how_how_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./how/how.component */ "./src/app/how/how.component.ts");
/* harmony import */ var _viewevents_viewevents_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./viewevents/viewevents.component */ "./src/app/viewevents/viewevents.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");



// import { AttendeesComponent } from './attendees/attendees.component';












var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'ambassadors', component: _ambassadors_ambassadors_component__WEBPACK_IMPORTED_MODULE_2__["AmbassadorsComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'events', component: _events_events_component__WEBPACK_IMPORTED_MODULE_3__["EventsComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'locations', component: _locations_locations_component__WEBPACK_IMPORTED_MODULE_4__["LocationsComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'members', component: _members_members_component__WEBPACK_IMPORTED_MODULE_5__["MembersComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'memberships', component: _memberships_memberships_component__WEBPACK_IMPORTED_MODULE_6__["MembershipsComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'places', component: _places_places_component__WEBPACK_IMPORTED_MODULE_7__["PlacesComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'surveys', component: _surveys_surveys_component__WEBPACK_IMPORTED_MODULE_8__["SurveysComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'viewevents', component: _viewevents_viewevents_component__WEBPACK_IMPORTED_MODULE_12__["VieweventsComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'how', component: _how_how_component__WEBPACK_IMPORTED_MODULE_11__["HowComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/attendees/attendees.component.css":
/*!***************************************************!*\
  !*** ./src/app/attendees/attendees.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F0dGVuZGVlcy9hdHRlbmRlZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/attendees/attendees.component.html":
/*!****************************************************!*\
  !*** ./src/app/attendees/attendees.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  attendees works!\n</p>\n"

/***/ }),

/***/ "./src/app/attendees/attendees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/attendees/attendees.component.ts ***!
  \**************************************************/
/*! exports provided: AttendeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendeesComponent", function() { return AttendeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AttendeesComponent = /** @class */ (function () {
    function AttendeesComponent() {
    }
    AttendeesComponent.prototype.ngOnInit = function () {
    };
    AttendeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attendees',
            template: __webpack_require__(/*! ./attendees.component.html */ "./src/app/attendees/attendees.component.html"),
            styles: [__webpack_require__(/*! ./attendees.component.css */ "./src/app/attendees/attendees.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AttendeesComponent);
    return AttendeesComponent;
}());



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: cfg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cfg", function() { return cfg; });
var cfg = {
    // API Url
    apiUrl: window.location.hostname == 'localhost' ? 'http://localhost:3100' : 'https://api.thesecretsociety.us',
    img_path: window.location.hostname == 'localhost' ? 'http://localhost:3100' : 'https://api.thesecretsociety.us',
    // Formats date correctly
    dateConverter: function (startdate) {
        return startdate.month + '/' + startdate.day + '/' + startdate.year;
    },
    // Formats time correctly
    timeConverter: function (starttime) {
        var minute = (starttime.minute < 10) ? "0" + starttime.minute : starttime.minute;
        if (starttime.hour > 12) {
            return (starttime.hour - 12) + ':' + minute + " " + "PM";
        }
        else {
            return starttime.hour + ':' + minute + " " + "AM";
        }
    },
    // States
    states: [
        { id: "AL", name: "Alabama" },
        { id: "AK", name: "Alaska" },
        { id: "AZ", name: "Arizona" },
        { id: "AR", name: "Arkansas" },
        { id: "CA", name: "California" },
        { id: "CO", name: "Colorado" },
        { id: "CT", name: "Connecticut" },
        { id: "DE", name: "Delaware" },
        { id: "DC", name: "District Of Columbia" },
        { id: "FL", name: "Florida" },
        { id: "GA", name: "Georgia" },
        { id: "HI", name: "Hawaii" },
        { id: "ID", name: "Idaho" },
        { id: "IL", name: "Illinois" },
        { id: "IN", name: "Indiana" },
        { id: "IA", name: "Iowa" },
        { id: "KS", name: "Kansas" },
        { id: "KY", name: "Kentucky" },
        { id: "LA", name: "Louisiana" },
        { id: "ME", name: "Maine" },
        { id: "MD", name: "Maryland" },
        { id: "MA", name: "Massachusetts" },
        { id: "MI", name: "Michigan" },
        { id: "MN", name: "Minnesota" },
        { id: "MS", name: "Mississippi" },
        { id: "MO", name: "Missouri" },
        { id: "MT", name: "Montana" },
        { id: "NE", name: "Nebraska" },
        { id: "NV", name: "Nevada" },
        { id: "NH", name: "New Hampshire" },
        { id: "NJ", name: "New Jersey" },
        { id: "NM", name: "New Mexico" },
        { id: "NY", name: "New York" },
        { id: "NC", name: "North Carolina" },
        { id: "ND", name: "North Dakota" },
        { id: "OH", name: "Ohio" },
        { id: "OK", name: "Oklahoma" },
        { id: "OR", name: "Oregon" },
        { id: "PA", name: "Pennsylvania" },
        { id: "RI", name: "Rhode Island" },
        { id: "SC", name: "South Carolina" },
        { id: "SD", name: "South Dakota" },
        { id: "TN", name: "Tennessee" },
        { id: "TX", name: "Texas" },
        { id: "UT", name: "Utah" },
        { id: "VT", name: "Vermont" },
        { id: "VA", name: "Virginia" },
        { id: "WA", name: "Washington" },
        { id: "WV", name: "West Virginia" },
        { id: "WI", name: "Wisconsin" },
        { id: "WY", name: "Wyoming" }
    ]
};


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n    color: white;\n    font-size: 1em;\n}\n\nh3 {\n    font-size: 1.5em;\n    /* padding-bottom: 20px; */\n}\n\nh4 {\n    font-size: .9em;\n    text-decoration: underline;\n}\n\nh5 {\n    font-size: .8em;\n    text-decoration: underline;\n}\n\n.btn-link {\n    color: #000 !important;\n}\n\n.tabs {\n    background-color: #000 !important;\n}\n\na {\n    color: #999 !important;\n}\n\n.nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-link.active {\n    color: #fff !important;\n    background-color: #000 !important;\n}\n\n.container-fluid {\n    color: #000;\n    padding: 30px;\n    background-color: #fff;\n    margin-top: 0px;\n}\n\n.tab-account,\n.tab-membership,\n.tab-survey {\n    padding: 20px;\n}\n\nform.checkout {\n    max-width: 500px;\n    margin: 2rem auto;\n    text-align: center;\n    border: 2px solid #eee;\n    border-radius: 8px;\n    padding: 1rem 2rem;\n    background: white;\n    font-family: monospace;\n    color: #525252;\n    font-size: 1.1rem;\n}\n\nform.checkout button {\n    padding: 0.5rem 1rem;\n    color: white;\n    background: coral;\n    border: none;\n    border-radius: 4px;\n    margin-top: 1rem;\n}\n\nform.checkout button:active {\n    background: rgb(165, 76, 43);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7OztJQUdJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxZW07XG59XG5cbmgzIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIC8qIHBhZGRpbmctYm90dG9tOiAyMHB4OyAqL1xufVxuXG5oNCB7XG4gICAgZm9udC1zaXplOiAuOWVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5oNSB7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uYnRuLWxpbmsge1xuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbi50YWJzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbmEge1xuICAgIGNvbG9yOiAjOTk5ICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssXG4ubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi50YWItYWNjb3VudCxcbi50YWItbWVtYmVyc2hpcCxcbi50YWItc3VydmV5IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG5mb3JtLmNoZWNrb3V0IHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICBjb2xvcjogIzUyNTI1MjtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuZm9ybS5jaGVja291dCBidXR0b24ge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiBjb3JhbDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbmZvcm0uY2hlY2tvdXQgYnV0dG9uOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDE2NSwgNzYsIDQzKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid dashboard\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h3>Dashboard</h3>\n            <p class=\"text-muted\">Your local market: {{ user.location_name }}</p>\n        </div>\n    </div>\n\n    <div class=\"row mt-3\">\n        <div class=\"col-sm-12 col-md-12\">\n            <ul ngbNav #nav=\"ngbNav\" class=\"nav-tabs\">\n                <li ngbNavItem>\n                    <a ngbNavLink>Your Events</a>\n                    <ng-template ngbNavContent>\n                        <div class=\"row tab-events\">\n                            <div class=\"col-sm-12 col-lg-3 mt-3\" *ngIf=\"uevents.length === 0\">You have no events.</div>\n                            <div class=\"row listevents\" *ngIf=\"uevents.length > 0\">\n                                <div class=\"col-sm-12 col-lg-3\" *ngFor=\"let event of uevents\">\n                                    <figure class=\"figure mt-3\">\n                                        <img [src]=\"img_path + event?.url\" [alt]=\"event?.name\" class=\"figure-img img-fluid rounded\" (click)=\"open(contentEvent, event, 'event')\">\n                                        <figcaption class=\"figure-caption\">{{ event?.name }} <small>( {{ event?.location }} )</small></figcaption>\n                                    </figure>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </li>\n                <li ngbNavItem>\n                    <a ngbNavLink>Account Info</a>\n                    <ng-template ngbNavContent>\n                        <div class=\"row tab-account\">\n                            <div class=\"col\">\n                                <h4>Customer</h4>\n                                <p>{{ user?.first_name || \"First Name\" }} {{ user?.last_name || \"Last Name\" }} <span class=\"badge badge-primary\"> {{ user?.userlevel }} </span></p>\n\n                                <h4>Address</h4>\n                                <p>{{ user?.address || \"Street Address\" }}<br/> {{ user?.city || \"City\" }}, {{ user?.state || \"State\" }} {{user?.zip || \"Zip\"}}</p>\n\n                                <h4>Email</h4>\n                                <p>{{ user?.email || \"Email\" }}</p>\n\n                                <h4>Phone</h4>\n                                <p>{{ user?.phone || \"Phone\" }}</p>\n                            </div>\n                            <div class=\"col text-right\">\n                                <button class=\"btn btn-info btn-sm\" (click)=\"open(contentAddress)\">\n                                    <fa-icon [icon]=\"faEdit\"></fa-icon>\n                                    Edit Account Info\n                                </button>\n                            </div>\n                        </div>\n                    </ng-template>\n                </li>\n                <li ngbNavItem>\n                    <a ngbNavLink>Membership</a>\n                    <ng-template ngbNavContent>\n                        <div class=\"row tab-membership\">\n                            <div class=\"col\">\n                                <h4>Membership</h4>\n                                <p>{{ member?.name }}</p>\n\n                                <h4>Description</h4>\n                                <p [innerHTML]=\"member?.description\"></p>\n\n                                <h4>Frequency</h4>\n                                <p>{{ member?.frequency }}</p>\n\n                                <h4>Cost</h4>\n                                <p>{{ member?.cost | currency }}</p>\n                            </div>\n                            <div class=\"col text-right\">\n                                <button class=\"btn btn-info btn-sm\" (click)=\"open(contentMembership)\">\n                                    <fa-icon [icon]=\"faEdit\"></fa-icon>\n                                    Change Membership\n                                </button>\n                            </div>\n                        </div>\n                    </ng-template>\n                </li>\n                <li ngbNavItem>\n                    <a ngbNavLink>Survey</a>\n                    <ng-template ngbNavContent>\n                        <div class=\"row tab-survey\">\n                            <div class=\"col\">\n                                <h4>Ethnicity</h4>\n                                <p>{{ survey?.ethnicity }}</p>\n\n                                <h4>Gender</h4>\n                                <p>{{ survey?.gender }}</p>\n\n                                <h4>Income</h4>\n                                <p>{{ survey?.income }}</p>\n\n                                <h4>Employment</h4>\n                                <p>{{ survey?.employment }}</p>\n\n                                <h4>Sports</h4>\n                                <p>{{ survey?.sports }}</p>\n\n                                <h4>Travel</h4>\n                                <p>{{ survey?.travel }}</p>\n                            </div>\n                            <div class=\"col\">\n                                <h4>Fashion</h4>\n                                <p>{{ survey?.fashion }}</p>\n\n                                <h4>Technology</h4>\n                                <p>{{ survey?.technology }}</p>\n\n                                <h4>Arts</h4>\n                                <p>{{ survey?.arts }}</p>\n\n                                <h4>Fitness</h4>\n                                <p>{{ survey?.fitness }}</p>\n\n                                <h4>Food</h4>\n                                <p>{{ survey?.food }}</p>\n\n                                <h4>Interest</h4>\n                                <p>{{ survey?.interest }}</p>\n\n                                <!-- <h4>Listen</h4>\n                                <p>{{ survey?.listen }}</p> -->\n                            </div>\n                            <div class=\"col text-right\">\n                                <button class=\"btn btn-info btn-sm\" (click)=\"open(contentSurvey)\">\n                                    <fa-icon [icon]=\"faEdit\"></fa-icon> Edit Survey\n                                </button>\n                            </div>\n                        </div>\n                    </ng-template>\n                </li>\n            </ul>\n            <div [ngbNavOutlet]=\"nav\"></div>\n        </div>\n    </div>\n\n</div>\n\n<!-- Edit Address -->\n<ng-template #contentAddress let-modal>\n    <div class=\"modal-header\">\n        <h2 class=\"modal-title text-dark\" id=\"modal-basic-title\">Account Info</h2>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <form [formGroup]=\"addressForm\" (ngSubmit)=\"onUpdateUser(user.id)\">\n\n                <!-- Address field -->\n                <div class=\"form-group\">\n                    <label>Address</label>\n                    <input type=\"text\" formControlName=\"address\" [value]=\"user?.address\" class=\"form-control\" />\n                </div>\n\n                <!-- City field -->\n                <div class=\"form-group\">\n                    <label>City</label>\n                    <input type=\"text\" formControlName=\"city\" [value]=\"user.city\" class=\"form-control\" />\n                </div>\n\n                <div class=\"form-group\">\n                    <label>State</label>\n                    <select class=\"form-control\" formControlName=\"state\" [value]=\"user.state\">\n                        <option value=\"{{state.id}}\" *ngFor=\"let state of states\">{{state.name}}</option>\n                    </select>\n                </div>\n\n                <!-- Cost Per field -->\n                <div class=\"form-group\">\n                    <label>Zip</label>\n                    <input type=\"text\" formControlName=\"zip\" [value]=\"user.zip\" class=\"form-control\" />\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Email</label>\n                    <input type=\"text\" formControlName=\"email\" [value]=\"user.email\" class=\"form-control\" />\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Phone</label>\n                    <input type=\"text\" formControlName=\"phone\" [value]=\"user.phone\" class=\"form-control\" />\n                </div>\n\n                <div class=\"form-group\">\n                    <label cfor=\"birthday\">Birthday</label>\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" formControlName=\"birthday\" placeholder=\"mm/dd/yyyy\" name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\" required>\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\"><fa-icon [icon]=\"faCalendar\"></fa-icon></button>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Create event button -->\n                <div class=\"form-group\">\n                    <button class=\"btn btn-outline-primary\">Update Address</button>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Done</button>\n    </div>\n</ng-template>\n\n<!-- Edit Membership -->\n<ng-template #contentMembership let-modal>\n    <div class=\"modal-header\">\n        <h2 class=\"modal-title text-dark\" id=\"modal-basic-title\">Membership Info</h2>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\n                <ngb-panel class=\"tabs\" id=\"{{membership.id}}\" *ngFor=\"let membership of memberships\">\n                    <ng-template ngbPanelTitle>{{ membership.name }}</ng-template>\n                    <ng-template ngbPanelContent>\n                        <div class=\"row\">\n                            <div class=\"col\" [innerHTML]=\"membership.description\"></div>\n                            <div class=\"col\">\n                                <h5>Membership Cost</h5>\n                                <p>{{ membership.cost | currency }}</p>\n                                <h5>Payment Frequency</h5>\n                                <p>{{ membership.frequency }}</p>\n                                <button class=\"btn btn-primary\" (click)=\"open(contentConfirmMembership, membership, 'membership')\">Select this Membership</button>\n\n                            </div>\n                        </div>\n                    </ng-template>\n                </ngb-panel>\n            </ngb-accordion>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Done</button>\n    </div>\n</ng-template>\n\n<!-- Edit Survey -->\n<ng-template #contentSurvey let-modal>\n    <div class=\"modal-header\">\n        <h2 class=\"modal-title text-dark\" id=\"modal-basic-title\">Survey</h2>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <form [formGroup]=\"surveyForm\" (ngSubmit)=\"onUpdateSurvey()\">\n\n                <div class=\"form-group\">\n                    <label for=\"ethnicity\">Ethnicity</label>\n                    <select formControlName=\"ethnicity\" class=\"form-control\" [value]=\"survey?.ethnicity\">\n                        <option value=\"\"></option>\n                        <option value=\"African American\">African American</option>\n                        <option value=\"White\">White</option>\n                        <option value=\"Hispanic\">Hispanic</option>\n                        <option value=\"Asian\">Asian</option>\n                        <option value=\"Other\">Other</option>\n                    </select>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"gender\">Gender</label>\n                    <select formControlName=\"gender\" class=\"form-control\" [value]=\"survey?.gender\">\n                        <option value=\"\"></option>\n                        <option value=\"Male\">Male</option>\n                        <option value=\"Female\">Female</option>\n                    </select>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"income\">Median Household Income</label>\n                    <select formControlName=\"income\" class=\"form-control\" [value]=\"survey?.income\">\n                        <option value=\"\"></option>\n                        <option value=\"$10,000 - $20,000\">$10,000 - $20,000</option>\n                        <option value=\"$21,000 - $35,000\">$21,000 - $35,000</option>\n                        <option value=\"$36,000 - $50,000\">$36,000 - $50,000</option>\n                        <option value=\"$51,000 - $80,000\">$51,000 - $80,000</option>\n                        <option value=\"$81,00 - $100,000\">$81,00 - $100,000</option>\n                        <option value=\"Over $100,000\">Over $100,000</option>\n                    </select>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"employment\">Employment</label>\n                    <select formControlName=\"employment\" class=\"form-control\" [value]=\"survey?.employment\">\n                        <option value=\"\"></option>\n                        <option value=\"Banking\">Banking</option>\n                        <option value=\"Education\">Education</option>\n                        <option value=\"Media\">Media/Entertainment/Arts</option>\n                        <option value=\"Self\">Self-Employed</option>\n                        <option value=\"IT\">Information Technology</option>\n                        <option value=\"Medical\">Medical Field</option>\n                        <option value=\"State\">State Employee</option>\n                        <option value=\"Health\">Health and Beauty</option>\n                        <option value=\"Real Estate\">Real Estate/Construction</option>\n                        <option value=\"Service\">Service/Hospitality</option>\n                        <option value=\"Other\">Other</option>\n                    </select>\n                </div>\n\n                <legend>Interest</legend>\n\n                <!-- Select Basic -->\n                <div class=\"form-group\">\n                    <label for=\"sports\">Sports</label>\n                    <select formControlName=\"sports\" class=\"form-control\" [value]=\"survey?.sports\">\n                        <option value=\"\"></option>\n                        <option value=\"None\">None</option>\n                        <option value=\"Baseball\">Baseball</option>\n                        <option value=\"Basketball\">Basketball</option>\n                        <option value=\"Football\">Football</option>\n                        <option value=\"Golf\">Golf</option>\n                        <option value=\"Tennis\">Tennis</option>\n                        <option value=\"Running\">Running</option>\n                        <option value=\"Cycling\">Cycling</option>\n                    </select>\n                </div>\n\n                <!-- Select Basic -->\n                <div class=\"form-group\">\n                    <label for=\"travel\">Travel</label>\n                    <select formControlName=\"travel\" class=\"form-control\" [value]=\"survey?.travel\">\n                        <option value=\"\"></option>\n                        <option value=\"None\">None</option>\n                        <option value=\"Vacations\">Vacation Excursions</option>\n                        <option value=\"Tourisms\">International Tourism</option>\n                        <option value=\"Travel\">Conventions &amp; Business Travel</option>\n                    </select>\n                </div>\n\n                <!-- Select Basic -->\n                <div class=\"form-group\">\n                    <label for=\"fashion\">Fashion</label>\n                    <select formControlName=\"fashion\" class=\"form-control\" [value]=\"survey?.fashion\">\n                        <option value=\"\"></option>\n                        <option value=\"None\">None</option>\n                        <option value=\"Clothes\">Designer Clothes</option>\n                        <option value=\"Jewelry\">Jewelry</option>\n                        <option value=\"Shoes\">Shoes</option>\n                        <option value=\"Fragrances\">Fine Fragrances &amp; Cosmetics</option>\n                        <option value=\"Urban Wear\">Urban Wear</option>\n                    </select>\n                </div>\n\n                <!-- Select Basic -->\n                <div class=\"form-group\">\n                    <label for=\"technology\">Technology</label>\n                    <select formControlName=\"technology\" class=\"form-control\" [value]=\"survey?.technology\">\n                        <option value=\"\"></option>\n                        <option value=\"None\">None</option>\n                        <option value=\"Software\">Computers &amp; Software</option>\n                        <option value=\"Cellphone\">Cell Phones</option>\n                        <option value=\"Internet\">Web Surfing/Internet</option>\n                        <option value=\"Communication\">Wireless Communication</option>\n                    </select>\n                </div>\n\n                <!-- Select Basic -->\n                <div class=\"form-group\">\n                    <label for=\"arts\">Arts &amp; Entertainment</label>\n                    <select formControlName=\"arts\" class=\"form-control\" [value]=\"survey?.arts\">\n                        <option value=\"\"></option>\n                        <option value=\"None\">None</option>\n                        <option value=\"Literatture\">Literature</option>\n                        <option value=\"Art\">Art Galleries</option>\n                        <option value=\"Performing Arts\">Performing Arts</option>\n                        <option value=\"Video Games\">Video Games</option>\n                        <option value=\"Automobiles\">Automobiles</option>\n                        <option value=\"Museums\">Museums</option>\n                        <option value=\"Night Clubs\">Night Clubs</option>\n                        <option value=\"Movies\">Movies/Films</option>\n                        <option value=\"Bookstore\">Bookstore</option>\n                        <option value=\"Motorcycles\">Motorcycles</option>\n                    </select>\n                </div>\n\n                <!-- Select Basic -->\n                <div class=\"form-group\">\n                    <label for=\"health\">Health, Beauty, Fitness</label>\n                    <select formControlName=\"fitness\" class=\"form-control\" [value]=\"survey?.fitness\">\n                        <option value=\"\"></option>\n                        <option value=\"None\">None</option>\n                        <option value=\"Beautician\">Beautician/Esthetician</option>\n                        <option value=\"Manicurist\">Manicurist</option>\n                        <option value=\"Barber\">Barber Shops</option>\n                        <option value=\"Fitness\">Fitness Clubs</option>\n                        <option value=\"Nutrition\">Nutrition</option>\n                    </select>\n                </div>\n\n                <!-- Select Basic -->\n                <div class=\"form-group\">\n                    <label for=\"food\">Food &amp; Libations</label>\n                    <select formControlName=\"food\" class=\"form-control\" [value]=\"survey?.food\">\n                        <option value=\"\"></option>\n                        <option value=\"None\">None</option>\n                        <option value=\"Dining\">Dining Out</option>\n                        <option value=\"Cigars\">Cigars &amp; Cigarettes</option>\n                        <option value=\"Fine Wine\">Fine Wines &amp; Alcohol</option>\n                    </select>\n                </div>\n\n                <!-- Select Basic -->\n                <div class=\"form-group\">\n                    <label for=\"interest\">What Type of Events Interest You Most?</label>\n                    <select formControlName=\"interest\" class=\"form-control\" [value]=\"survey?.interest\">\n                        <option value=\"\"></option>\n                        <option value=\"None\">None</option>\n                        <option value=\"Dining\">Dining Out</option>\n                        <option value=\"Cigars\">Cigars &amp; Cigarettes</option>\n                        <option value=\"Fine Wine\">Fine Wine &amp; Alcohol</option>\n                        <option value=\"Concerts\">Concerts</option>\n                        <option value=\"Comedy\">Comedy</option>\n                        <option value=\"Live Music\">Live Music</option>\n                    </select>\n                </div>\n                <div class=\"form-group\">\n                    <button class=\"btn btn-outline-primary\">Save Survey</button>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Done</button>\n    </div>\n</ng-template>\n\n<!-- Event View -->\n<ng-template #contentEvent let-modal>\n    <div class=\"modal-header\">\n        <h2 class=\"modal-title text-dark\" id=\"modal-basic-title\">{{ modevent?.name }}</h2>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <img class=\"img\" width=\"100%\" [src]=\"img_path + modevent?.url\" onerror=\"this.src='https://placeimg.com/640/480/people'\" />\n                </div>\n                <div class=\"col\">\n                    <p><strong>Date:</strong><br/> {{ modevent?.event_date }}</p>\n                    <p><strong>Time:</strong><br/> {{ modevent?.start_time }} - {{ modevent?.end_time }}</p>\n                    <p>\n                        <strong>Venue:</strong> <br/> {{ modevent?.place }} <br/> {{ modevent?.place_address }} <br/> {{ modevent?.place_city }}, {{ modevent?.place_state }} {{ modevent?.place_zip }} <br/> {{ modevent?.place_phone }}\n                        <br/><a [href]=\"modevent?.website\" target=\"_blank\">{{ modevent?.website }}</a>\n                    </p>\n                </div>\n            </div>\n            <div class=\"row py-3\">\n                <div class=\"col\">\n                    <strong><u>Event Description</u></strong>\n                    <p [innerHTML]=\"modevent?.description\"></p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Done</button>\n    </div>\n</ng-template>\n\n<!-- Preview event flyer -->\n<ng-template #contentPreview let-modal>\n    <div class=\"modal-header\">\n        <h2 class=\"modal-title text-dark\" id=\"modal-basic-title\">{{ modevent.name }}</h2>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <img class=\"img\" width=\"100%\" [src]=\"img_path + modevent?.url\" onerror=\"this.src='https://placeimg.com/640/480/people'\" />\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Done</button>\n    </div>\n</ng-template>\n\n<ng-template #contentConfirmMembership let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title text-dark\" id=\"modal-basic-title\">Membership Confirmation</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <div class=\"row center\">\n                Are you sure you want to subscribe to &nbsp;<strong>{{ modmem.name }}</strong>?\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"openHandler(modmem)\">Yes</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">No</button>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(auth, formBuilder, memberservice, membership, modalService, surveyservice, toastr, userservice) {
        var _this = this;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.memberservice = memberservice;
        this.membership = membership;
        this.modalService = modalService;
        this.surveyservice = surveyservice;
        this.toastr = toastr;
        this.userservice = userservice;
        this.faCalendar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCalendar"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEdit"];
        this.img_path = _config__WEBPACK_IMPORTED_MODULE_4__["cfg"].img_path;
        this.uevents = [];
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        if (this.user['userlevel'] == 'admin')
            this.auth.setAdminState(true);
        var csurvey = JSON.parse(localStorage.getItem('survey'));
        if (csurvey)
            this.survey = csurvey;
        else
            this.getSurvey();
        var cmember = JSON.parse(localStorage.getItem('member'));
        if (cmember)
            this.member = cmember;
        else
            this.getMember();
        this.states = _config__WEBPACK_IMPORTED_MODULE_4__["cfg"].states;
        this.getEvents();
        this.configHandler();
        this.membership.getMemberships().then(function (data) { return _this.memberships = data['items']; });
        this.addressForm = this.formBuilder.group({ address: '', city: '', state: '', zip: '', email: '', phone: '', birthday: '' });
        this.surveyForm = this.formBuilder.group({ ethnicity: '', gender: '', income: '', employment: '', birthday: '', sports: '', travel: '', fashion: '', technology: '', arts: '', fitness: '', food: '', interest: '', listen: '' });
    }
    DashboardComponent.prototype.getUser = function () {
        var _this = this;
        this.userservice.getUser(this.user.id).then(function (data) {
            if (data['success']) {
                localStorage.setItem('user', JSON.stringify(data['data']));
                _this.user = data['data'];
            }
        }).catch(function (e) { return console.log(e.error); });
    };
    DashboardComponent.prototype.getSurvey = function () {
        var _this = this;
        this.surveyservice.getSurvey(this.user.id).then(function (data) {
            if (data['success']) {
                localStorage.setItem('survey', JSON.stringify(data['data']));
                _this.survey = data['data'];
            }
        }).catch(function (e) { return console.log(e.error); });
    };
    DashboardComponent.prototype.getMember = function () {
        var _this = this;
        this.memberservice.getMember(this.user.id).then(function (data) {
            if (data['success']) {
                localStorage.setItem('member', JSON.stringify(data['data']));
                _this.member = data['data'];
            }
        }).catch(function (e) { return console.log(e.error); });
    };
    DashboardComponent.prototype.getEvents = function () {
        var _this = this;
        this.userservice.getEventsByUser(this.user.id).then(function (data) {
            console.log("Events: ", data);
            if (data['success']) {
                localStorage.setItem('uevents', JSON.stringify(data['data']));
                _this.uevents = data['data'];
            }
            else {
                _this.uevents = [];
            }
        }).catch(function (e) { return console.log(e.error); });
    };
    DashboardComponent.prototype.open = function (content, item, type) {
        if (item != null) {
            if (type == 'event')
                this.modevent = item;
            if (type == 'membership')
                this.modmem = item;
        }
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(function (result) { });
    };
    DashboardComponent.prototype.onUpdateSurvey = function () {
        var _this = this;
        var form = this.surveyForm.value;
        for (var prop in form) {
            if (form.hasOwnProperty(prop) && !form[prop]) {
                delete form[prop];
            }
        }
        this.surveyservice.updateSurvey(form, this.user.id).then(function (data) {
            if (data['success']) {
                _this.modalService.dismissAll();
                _this.getSurvey();
                _this.showSuccess(data['message'], "Survey Update.");
            }
            else {
                _this.showFailure(data['message'], "Survey Update Failed.");
            }
        }).catch(function (e) { return console.log(e.error); });
    };
    DashboardComponent.prototype.onUpdateUser = function (id) {
        var _this = this;
        var form = this.addressForm.value;
        for (var prop in form) {
            if (form.hasOwnProperty(prop) && !form[prop]) {
                delete form[prop];
            }
        }
        if (form['birthday'])
            form.birthday = _config__WEBPACK_IMPORTED_MODULE_4__["cfg"].dateConverter(form.birthday);
        this.userservice.updateUser(form, id).then(function (data) {
            if (data['success']) {
                localStorage.setItem('user', JSON.stringify(data['data']));
                _this.user = data['data'];
                _this.modalService.dismissAll();
                _this.getUser();
                _this.showSuccess(data['message'], "Account Update");
            }
            else {
                _this.showFailure(data['message'], "Account Update Failure.");
            }
        })
            .catch(function (e) { return console.log(e.error); });
    };
    DashboardComponent.prototype.configHandler = function () {
        var _this = this;
        this.handler = StripeCheckout.configure({
            key: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].stripeKey,
            image: 'https://thesecretsociety.us/assets/imgs/SECRET_SOCIETY_MAIN.jpg',
            locale: 'auto',
            source: function (source) {
                console.log("Source: ", source);
                var src = {
                    customer_id: _this.user.customer_id,
                    source_id: source.id,
                    subscription_id: _this.member.subscription_id,
                    plan_id: _this.thismembership.plan_id,
                };
                _this.userservice.attachSource(src).then(function (data) {
                    if (data['success']) {
                        var membership = {
                            user_id: _this.user.id,
                            membership_id: _this.thismembership.id
                        };
                        _this.memberservice.updateMember(membership).then(function (data) {
                            if (data['success']) {
                                _this.getMember();
                                _this.modalService.dismissAll();
                                _this.showSuccess(data['message'], "Membership Updated.");
                            }
                            else {
                                _this.showFailure(data['message'], "Membership Update Failed.");
                            }
                        });
                    }
                    else {
                        _this.showFailure(data['message'], "Membership Update Failed.");
                    }
                });
            }
        });
    };
    DashboardComponent.prototype.openHandler = function (membership) {
        this.thismembership = membership;
        this.handler.open({
            name: membership.name,
            description: "Subscribing to membership: " + membership.name,
            amount: membership.cost * 100
        });
    };
    DashboardComponent.prototype.showSuccess = function (msg, title) {
        this.toastr.success(msg, title);
    };
    DashboardComponent.prototype.showFailure = function (msg, title) {
        this.toastr.error(msg, title);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_5__["MemberService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["MembershipService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _services__WEBPACK_IMPORTED_MODULE_5__["SurveyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/events/events.component.css":
/*!*********************************************!*\
  !*** ./src/app/events/events.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n    color: #000;\n    padding: 30px;\n    background-color: #fff;\n    margin-top: 0px;\n}\n\n.add-row {\n    padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9ldmVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5hZGQtcm93IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/events/events.component.html":
/*!**********************************************!*\
  !*** ./src/app/events/events.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <h3>Events</h3>\n    </div>\n    <div class=\"row add-row\">\n        <div class=\"col\"></div>\n        <div class=\"col text-right\">\n            <button class=\"btn btn-success\" (click)=\"open(contentNew, null)\"><fa-icon [icon]=\"faPlusCircle\"></fa-icon> Add New Event</button>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <table class=\"table table-light table-striped table-hover\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">FLYER</th>\n                    <th scope=\"col\">NAME</th>\n                    <th scope=\"col\">WHEN</th>\n                    <th scope=\"col\">LOCATION</th>\n                    <th scope=\"col\">PLACE</th>\n                    <th scope=\"col\">COST</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let event of events\">\n                    <td><img (click)=\"open(contentPreview, event)\" class=\"img-thumbnail\" width=\"50\" height=\"50\" [src]=\"img_path + event?.url\" onerror=\"this.src='https://placeimg.com/640/480/people'\" /></td>\n                    <td (click)=\"open(contentView, event)\">{{ event.name }}</td>\n                    <td>\n                        {{ event.event_date }}<br/>{{ event.start_time }} - {{ event.end_time }}\n                    </td>\n                    <td>{{ event.location }}</td>\n                    <td>{{ event.place }}</td>\n                    <td>{{ event.cost | currency }}</td>\n                    <td>\n                        <button class=\"btn btn-info\" (click)=\"open(contentEdit, event)\">\n                            <fa-icon [icon]=\"faEdit\"></fa-icon>\n                        </button>&nbsp;\n                        <button class=\"btn btn-danger\" (click)=\"open(contentDelete, event)\">\n                            <fa-icon [icon]=\"faTrash\"></fa-icon>\n                        </button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<!-- Create New Modal -->\n<ng-template #contentNew let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title text-dark\" id=\"modal-basic-title\">Create an Event</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <form [formGroup]=\"eventForm\" (ngSubmit)=\"onSubmit()\">\n\n                <!-- Event Location -->\n                <div class=\"form-group\">\n                    <label>Location</label>\n                    <select class=\"form-control\" formControlName=\"location_id\" #l (change)=\"getPlacesByLocation(l.value)\" required>\n                        <option value=\"\">Select a location</option>\n                        <option value=\"{{location.id}}\" *ngFor=\"let location of locations\">{{location.name}}</option>\n                    </select>\n                </div>\n\n                <!-- Event Name -->\n                <div class=\"form-group\">\n                    <label>Name</label>\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\" required />\n                </div>\n\n                <!-- Event Desription -->\n                <div class=\"form-group\">\n                    <label>Description</label>\n                    <angular-editor formControlName=\"description\" [config]=\"editorConfig\"></angular-editor>\n                </div>\n\n                <!-- Event date -->\n                <div class=\"form-group\">\n                    <label>Event Date</label>\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" formControlName=\"event_date\" placeholder=\"mm/dd/yyyy\" name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\" required>\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\"><fa-icon [icon]=\"faCalendar\"></fa-icon></button>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Start and End time -->\n                <div class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <label>Start Time</label>\n                            <ngb-timepicker formControlName=\"start_time\" [meridian]=\"meridian\" required></ngb-timepicker>\n                        </div>\n                        <div class=\"col\">\n                            <label>End Time</label>\n                            <ngb-timepicker formControlName=\"end_time\" [meridian]=\"meridian\" required></ngb-timepicker>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Flyer upload -->\n                <div class=\"form-group\">\n                    <label>Upload Event Flyer</label>\n                    <div class=\"input-group\">\n                        <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n                        <div class=\"input-group-append\">\n                            <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                                Upload an Image\n                            </button>\n                        </div>\n                        <div class=\"input-group\">\n                            <img *ngIf=\"previewflyer\" [src]=\"img_path + previewflyer\" width=\"200\" height=\"200\" />\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Cost field -->\n                <div class=\"form-group\">\n                    <label>Cost</label>\n                    <input type=\"text\" formControlName=\"cost\" class=\"form-control\" required />\n                </div>\n\n                <!-- Event Place -->\n                <div class=\"form-group\">\n                    <label>Place</label>\n                    <select class=\"form-control\" formControlName=\"place_id\" required>\n                        <option value=\"\">Select a place</option>\n                        <option value=\"{{place.id}}\" *ngFor=\"let place of places\">{{place.name}}</option>\n                    </select>\n                </div>\n\n                <!-- Create event button -->\n                <div class=\"form-group\">\n                    <button class=\"btn btn-outline-primary\" *ngIf=\"eventForm.valid\">Create Event</button>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Cancel</button>\n    </div>\n</ng-template>\n\n<!-- Delete Modal -->\n<ng-template #contentDelete let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Delete Confirmation</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            Are you sure you want to delete <strong>{{ modevent.name }}</strong>?\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"delete(modevent.id); modal.close()\">Yes</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">No</button>\n    </div>\n</ng-template>\n\n<ng-template #contentView let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ modevent.name }}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\n                            <span aria-hidden=\"true\">&times;</span>\n                          </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <img class=\"img\" width=\"100%\" [src]=\"img_path + modevent?.url\" onerror=\"this.src='https://placeimg.com/640/480/people'\" />\n                </div>\n                <div class=\"col\">\n                    Date:<br/> {{ modevent.event_date }} <br/><br/> Time:\n                    <br/> {{ modevent.start_time }} - {{ modevent.end_time }}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col\" [innerHTML]=\"modevent.description\">\n                    Description:\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Done</button>\n    </div>\n</ng-template>\n\n<ng-template #contentPreview let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">View Event</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <img class=\"img\" width=\"100%\" [src]=\"img_path + modevent?.url\" onerror=\"this.src='https://placeimg.com/640/480/people'\" />\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Done</button>\n    </div>\n</ng-template>\n\n<!-- Update Event information -->\n<ng-template #contentEdit let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ modevent.name }}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <form [formGroup]=\"eventForm\" (ngSubmit)=\"onUpdate(modevent.id)\">\n\n                <!-- Event Location -->\n                <div class=\"form-group\">\n                    <label>Location</label>\n                    <select class=\"form-control\" formControlName=\"location_id\" #l (change)=\"getPlacesByLocation(l.value)\" [value]=\"modevent.location_id\" required>\n                        <option value=\"{{location.id}}\" *ngFor=\"let location of locations\">{{location.name}}</option>\n                    </select>\n                </div>\n\n                <!-- Event Name -->\n                <div class=\"form-group\">\n                    <label>Name</label>\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\" [value]=\"modevent.name\" required />\n                </div>\n\n                <!-- Event Desription -->\n                <div class=\"form-group\">\n                    <label>Description</label>\n                    <angular-editor [placeholder]=\"description\" formControlName=\"description\" [config]=\"editorConfig\"></angular-editor>\n                </div>\n\n                <!-- Event date -->\n                <div class=\"form-group\">\n                    <label>Event Date</label>\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" formControlName=\"event_date\" placeholder=\"mm/dd/yyyy\" name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\" [value]=\"modevent.event_date\" required>\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\"><fa-icon [icon]=\"faCalendar\"></fa-icon></button>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Start and End time -->\n                <div class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <label>Start Time</label>\n                            <ngb-timepicker formControlName=\"start_time\" [meridian]=\"meridian\" required></ngb-timepicker>\n                        </div>\n                        <div class=\"col\">\n                            <label>End Time</label>\n                            <ngb-timepicker formControlName=\"end_time\" [meridian]=\"meridian\" required></ngb-timepicker>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Flyer upload -->\n                <div class=\"form-group\">\n                    <label>Upload Event Flyer</label>\n                    <div class=\"input-group\">\n                        <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n                        <div class=\"input-group-append\">\n                            <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                                        Upload an Image\n                                    </button>\n                        </div>\n                        <div class=\"input-group\">\n                            <img *ngIf=\"previewflyer\" [src]=\"previewflyer\" width=\"200\" height=\"200\" />\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Cost field -->\n                <div class=\"form-group\">\n                    <label>Cost</label>\n                    <input type=\"text\" formControlName=\"cost\" class=\"form-control\" [value]=\"modevent.cost\" required />\n                </div>\n\n                <!-- Event Place -->\n                <div class=\"form-group\">\n                    <label>Place</label>\n                    <select class=\"form-control\" formControlName=\"place_id\" required>\n                                <option value=\"{{place.id}}\" *ngFor=\"let place of places\">{{place.name}}</option>\n                            </select>\n                </div>\n\n                <!-- Create event button -->\n                <div class=\"form-group\">\n                    <button class=\"btn btn-outline-primary\">Update Event</button>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Done</button>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/events/events.component.ts":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm2015/ngx-editor.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EventsComponent = /** @class */ (function () {
    function EventsComponent(event, formBuilder, location, modalService, toastr) {
        this.event = event;
        this.formBuilder = formBuilder;
        this.location = location;
        this.modalService = modalService;
        this.toastr = toastr;
        this.faCalendar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendar"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEdit"];
        this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlusCircle"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTrash"];
        this.img_path = _config__WEBPACK_IMPORTED_MODULE_8__["cfg"].img_path;
        this.meridian = true;
        this.time = { hour: 13, minute: 30 };
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: 'auto',
            minHeight: '0',
            maxHeight: 'auto',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' }
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
            sanitize: true,
            toolbarPosition: 'top',
            toolbarHiddenButtons: [
                ['bold', 'italic'],
                ['fontSize']
            ]
        };
    }
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        var token = localStorage.getItem('token');
        this.editor = new ngx_editor__WEBPACK_IMPORTED_MODULE_1__["Editor"]();
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({ url: _config__WEBPACK_IMPORTED_MODULE_8__["cfg"].apiUrl + "/upload?token=" + token, itemAlias: 'photo' });
        this.getEvents();
        this.location.getLocations().then(function (data) {
            _this.locations = data['items'];
        });
        this.eventForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            description: '',
            event_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            start_time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            end_time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            event_flyer: '',
            place_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            cost: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            location_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var results = JSON.parse(response);
            if (results.success) {
                _this.photo_uid = results.data.uid;
                _this.previewflyer = _this.img_path + results.data.url;
                console.log("%c Photo UID: " + _this.previewflyer, "color: blue");
            }
        };
    };
    EventsComponent.prototype.toggleMeridian = function () {
        this.meridian = !this.meridian;
    };
    EventsComponent.prototype.getEvents = function () {
        var _this = this;
        this.event.getEvents().then(function (data) {
            console.log(data['items']);
            _this.events = data['items'];
        });
    };
    EventsComponent.prototype.delete = function (id) {
        var _this = this;
        this.event.deleteEvent(id).then(function (data) {
            console.log(data);
            _this.getEvents();
        });
    };
    EventsComponent.prototype.open = function (content, item) {
        if (item != null) {
            this.modevent = item;
        }
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(function (result) { });
    };
    EventsComponent.prototype.onSubmit = function () {
        var _this = this;
        var form = this.eventForm.value;
        form.event_date = _config__WEBPACK_IMPORTED_MODULE_8__["cfg"].dateConverter(form.event_date);
        form.start_time = _config__WEBPACK_IMPORTED_MODULE_8__["cfg"].timeConverter(form.start_time);
        form.end_time = _config__WEBPACK_IMPORTED_MODULE_8__["cfg"].timeConverter(form.end_time);
        form.event_flyer = this.photo_uid;
        this.event.addEvent(form).then(function (data) {
            if (data['success']) {
                _this.modalService.dismissAll();
                _this.showSuccess(data['message'], "Create Event");
                _this.getEvents();
            }
            else {
                _this.showFailure(data['message'], "Create Event");
            }
        });
    };
    EventsComponent.prototype.onUpdate = function (id) {
        var _this = this;
        var form = this.eventForm.value;
        form.event_flyer = this.photo_uid;
        for (var prop in form) {
            if (form.hasOwnProperty(prop) && !form[prop]) {
                delete form[prop];
            }
        }
        if (form.event_date)
            form.event_date = _config__WEBPACK_IMPORTED_MODULE_8__["cfg"].dateConverter(form.event_date);
        if (form.start_time)
            form.start_time = _config__WEBPACK_IMPORTED_MODULE_8__["cfg"].timeConverter(form.start_time);
        if (form.end_time)
            form.end_time = _config__WEBPACK_IMPORTED_MODULE_8__["cfg"].timeConverter(form.end_time);
        this.event.updateEvent(form, id).then(function (data) {
            if (data['success']) {
                _this.modalService.dismissAll();
                _this.showSuccess(data['message'], "Update Event");
                _this.getEvents();
            }
            else {
                _this.showFailure(data['message'], "Update Event");
            }
        });
    };
    EventsComponent.prototype.getPlacesByLocation = function (id) {
        var _this = this;
        this.location.getPlacesByLocation(id).then(function (places) { return _this.places = places['data']; });
    };
    EventsComponent.prototype.showSuccess = function (msg, title) {
        this.toastr.success(msg, title);
    };
    EventsComponent.prototype.showFailure = function (msg, title) {
        this.toastr.error(msg, title);
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/events/events.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["EventService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services__WEBPACK_IMPORTED_MODULE_2__["LocationService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item>button,\n.drop>button {\n    color: rgb(161, 161, 161);\n}\n\n.nav-item>button:hover,\n.drop>button:hover {\n    color: rgb(255, 255, 255);\n}\n\n#main-menu {\n    background-color: #fff;\n    position: absolute;\n    z-index: 999;\n}\n\n#admin-menu {\n    background-color: #fff;\n    position: absolute;\n    z-index: 999;\n}\n\n.about li {\n    list-style: none;\n    padding: 5px 0px;\n    line-height: 2em;\n}\n\n.btn-outline-dark,\n.btn-outline-light {\n    border: none;\n}\n\n.dropdown-toggle {\n    width: 300px;\n    display: block;\n}\n\n.dropdown-menu {\n    top: -5px;\n}\n\n.css-dropdown .css-dropdown-menu {\n    margin-top: -5px;\n    display: none;\n}\n\n.css-dropdown:hover .css-dropdown-menu {\n    display: block;\n    position: absolute;\n    z-index: 999;\n}\n\n.admin-dropdown .admin-dropdown-menu {\n    margin-top: -5px;\n    display: none;\n}\n\n.admin-dropdown:hover .admin-dropdown-menu {\n    display: block;\n    position: absolute;\n    z-index: 999;\n}\n\n.admin-dropdown-menu {\n    border: 1px solid #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1pdGVtPmJ1dHRvbixcbi5kcm9wPmJ1dHRvbiB7XG4gICAgY29sb3I6IHJnYigxNjEsIDE2MSwgMTYxKTtcbn1cblxuLm5hdi1pdGVtPmJ1dHRvbjpob3Zlcixcbi5kcm9wPmJ1dHRvbjpob3ZlciB7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuI21haW4tbWVudSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk5O1xufVxuXG4jYWRtaW4tbWVudSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk5O1xufVxuXG4uYWJvdXQgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4IDBweDtcbiAgICBsaW5lLWhlaWdodDogMmVtO1xufVxuXG4uYnRuLW91dGxpbmUtZGFyayxcbi5idG4tb3V0bGluZS1saWdodCB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uZHJvcGRvd24tdG9nZ2xlIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgICB0b3A6IC01cHg7XG59XG5cbi5jc3MtZHJvcGRvd24gLmNzcy1kcm9wZG93bi1tZW51IHtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jc3MtZHJvcGRvd246aG92ZXIgLmNzcy1kcm9wZG93bi1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk5O1xufVxuXG4uYWRtaW4tZHJvcGRvd24gLmFkbWluLWRyb3Bkb3duLW1lbnUge1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFkbWluLWRyb3Bkb3duOmhvdmVyIC5hZG1pbi1kcm9wZG93bi1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk5O1xufVxuXG4uYWRtaW4tZHJvcGRvd24tbWVudSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" *ngIf=\"isAuthenticated\">\n    <a class=\"navbar-brand\" href=\"#\">\n        <fa-icon [icon]=\"faHome\" size=\"lg\"></fa-icon>\n        {{ title }}\n    </a>\n\n    <!-- <a class=\"btn btn-outline-dark css-dropdown\">\n        <span class=\"navbar-toggler-icon\"></span>\n        <div class=\"css-dropdown-menu bg-white\">\n            <p><button class=\"dropdown-item\" routerLink=\"/dashboard\">Dashboard</button></p>\n            <div class=\"dropdown-divider\"></div>\n            <p><button class=\"dropdown-item\" routerLink=\"/viewevents\">View Events</button></p>\n            <div class=\"dropdown-divider\"></div>\n            <p><button class=\"dropdown-item\" (click)=\"logout()\">Logout</button></p>\n        </div>\n    </a> -->\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarScroll\" aria-controls=\"navbarScroll\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarScroll\">\n        <ul class=\"navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll\" style=\"max-height: 100px;\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" href=\"/dashboard\">My Account <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/viewevents\">View Events</a>\n            </li>\n            <li class=\"nav-item dropdown\" *ngIf=\"isAdmin\">\n                <div ngbDropdown class=\"d-inline-block\">\n                    <a class=\"nav-link\" id=\"manageDropdown\" ngbDropdownToggle>\n                        <fa-icon [icon]=\"faCog\" size=\"lg\"></fa-icon>\n                    </a>\n                    <div ngbDropdownMenu aria-labelledby=\"manageDropdown\">\n                        <button ngbDropdownItem routerLink=\"/ambassadors\">Ambassadors</button>\n                        <button ngbDropdownItem routerLink=\"/events\">Events</button>\n                        <button ngbDropdownItem routerLink=\"/locations\">Locations</button>\n                        <button ngbDropdownItem routerLink=\"/members\">Members</button>\n                        <button ngbDropdownItem routerLink=\"/memberships\">Memeberships</button>\n                        <button ngbDropdownItem routerLink=\"/places\">Places</button>\n                        <button ngbDropdownItem routerLink=\"/surveys\">Surveys</button>\n                        <button ngbDropdownItem routerLink=\"/users\">Users</button>\n                    </div>\n                </div>\n            </li>\n        </ul>\n        <div class=\"d-flex\">\n            <fa-icon class=\"nav-link\" [icon]=\"faLock\" size=\"lg\" (click)=\"logout()\"></fa-icon>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth) {
        var _this = this;
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHome"];
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCog"];
        this.faLock = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLock"];
        this.faGraduationCap = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGraduationCap"];
        this.title = 'TSS';
        this.auth = auth;
        auth.loggedIn$.subscribe(function (status) {
            _this.isAuthenticated = status;
        });
        auth.admin$.subscribe(function (status) {
            _this.isAdmin = status;
        });
    }
    HeaderComponent.prototype.logout = function () {
        this.auth.logout();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-page {\n    color: white;\n    height: 100%;\n}\n\n.page-title {\n    color: #fff;\n}\n\n.content {\n    color: #fff;\n}\n\n.responsive {\n    width: 70% !important;\n    min-width: 500px;\n    height: 100%;\n    padding-top: 30px;\n}\n\n.center-block {\n    padding-top: 3%;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.form-box {\n    margin-top: 50px;\n}\n\n.code-box {\n    margin: 10px auto;\n}\n\n.code-box-button {\n    padding: 8px 9px 5px;\n    background: #CCD;\n    border-bottom-right-radius: 5px;\n    border-top-right-radius: 5px;\n    border-left: 1px solid #999;\n}\n\n.email-input {\n    padding: 15px 13px;\n}\n\n.go-btn {\n    background: none;\n    border: none;\n}\n\n.togglebtn {\n    margin-bottom: 20px;\n}\n\n.signup {\n    margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1wYWdlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFnZS10aXRsZSB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5jb250ZW50IHtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLnJlc3BvbnNpdmUge1xuICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLmNlbnRlci1ibG9jayB7XG4gICAgcGFkZGluZy10b3A6IDMlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmZvcm0tYm94IHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uY29kZS1ib3gge1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG4uY29kZS1ib3gtYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA4cHggOXB4IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0NEO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM5OTk7XG59XG5cbi5lbWFpbC1pbnB1dCB7XG4gICAgcGFkZGluZzogMTVweCAxM3B4O1xufVxuXG4uZ28tYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLnRvZ2dsZWJ0biB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNpZ251cCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n    <div>\n        <img class=\"responsive center-block\" src=\"../assets/imgs/tss_main.jpg\">\n    </div>\n\n    <div class=\"col-sm-12 form-box\">\n\n        <div class=\"row\" *ngIf=\"showCode\">\n            <div class=\"input-group col-md-offset-3 col-md-6 code-box\">\n                <input #code type=\"text\" class=\"form-control input-lg ng-pristine ng-untouched ng-valid\" placeholder=\"Enter Your Code\" (keyup)=\"checkCode(code.value)\" aria-invalid=\"false\">\n                <div class=\"input-group-addon code-box-button\">\n                    <button type=\"button\" class=\"loginbtn btn\" [className]=\"foundCode ? 'btn-light go-btn' : 'btn-success  go-btn'\" (click)=\"goCode()\" [disabled]=\"!foundCode\">\n                        <fa-icon [icon]=\"faArrowCircleRight\" size=\"2x\"></fa-icon>\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" *ngIf=\"showLogin\">\n            <div class=\"row\">\n                <div class=\"input-group col-md-offset-3 col-md-6 code-box\">\n                    <input type=\"text\" class=\"form-control input-lg email-input\" formControlName=\"email\" placeholder=\"Email Address\">\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"input-group col-md-offset-3 col-md-6 code-box\">\n                    <input type=\"password\" class=\"form-control input-lg\" formControlName=\"password\" placeholder=\"Password\">\n                    <div class=\"input-group-addon code-box-button\">\n                        <button class=\"btn btn-light go-btn\">\n                        <fa-icon [icon]=\"faArrowCircleRight\" size=\"2x\"></fa-icon>\n                    </button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"col-sm-12 mt-4 loginType text-center\" *ngIf=\"!showSignup\"><button class=\"btn btn-light togglebtn\" (click)=\"toggleForm()\">{{ loginType }}</button></div>\n\n    <div class=\"container\" *ngIf=\"showSignup\">\n        <div class=\"row\">\n            <div class=\"col-md-12 page-title\">\n                <h3 class=\"text-center\">Create an Account</h3>\n            </div>\n        </div>\n\n        <div class=\"row content\">\n            <div class=\"container text-default\">\n\n                <div class=\"col-sm-8 col-sm-offset-2 signup\">\n\n                    <form [formGroup]=\"signupForm\" (ngSubmit)=\"register()\">\n                        <div class=\"form-group\">\n                            <label>Closet Major City</label>\n                            <select class=\"form-control\" formControlName=\"location_id\">\n                            <option value=\"{{location.id}}\" *ngFor=\"let location of locations\">{{location.name}}</option>\n                        </select>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>First Name</label>\n                            <input type=\"text\" formControlName=\"first_name\" class=\"form-control\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Last Name</label>\n                            <input type=\"text\" formControlName=\"last_name\" class=\"form-control\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Email</label>\n                            <input type=\"text\" formControlName=\"email\" class=\"form-control\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Password</label>\n                            <input type=\"password\" formControlName=\"password\" class=\"form-control\" />\n                        </div>\n                        <div class=\"form-group\">\n                            <button class=\"btn btn-primary\">Register</button>\n                        </div>\n                    </form>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
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
    function HomeComponent(user, auth, formBuilder, router, toastr) {
        this.user = user;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastr = toastr;
        this.faArrowCircleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowCircleRight"];
        this.showCode = true;
        this.showLogin = false;
        this.showSignup = false;
        this.loginType = "Member Login";
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('loggedin'))
            this.router.navigate(['/viewevents']);
        this.signupForm = this.formBuilder.group({
            code: '',
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            userlevel: '',
            location_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ambassador_id: ''
        });
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)])],
        });
        this.user.getLocations().then(function (data) {
            _this.locations = data['items'];
        });
    };
    HomeComponent.prototype.toggleForm = function () {
        if (this.showCode) {
            this.showCode = false;
            this.showLogin = true;
            this.loginType = "Enter Code";
        }
        else {
            this.showCode = true;
            this.showLogin = false;
            this.loginType = "Member Login";
        }
    };
    HomeComponent.prototype.checkCode = function (code) {
        var _this = this;
        if (code) {
            this.user.checkCode(code).then(function (data) {
                if (data['success']) {
                    _this.foundCode = data['data'];
                }
                else {
                    _this.foundCode = "";
                }
            });
        }
    };
    HomeComponent.prototype.goCode = function () {
        this.showCode = false;
        this.showSignup = true;
    };
    HomeComponent.prototype.register = function () {
        var _this = this;
        var form = this.signupForm.value;
        form.code = this.foundCode.code;
        form.ambassador_id = this.foundCode.id;
        form.userlevel = "user";
        this.auth.register(form).then(function (data) {
            if (data['success']) {
                _this.router.navigate(['/viewevents']);
            }
            else {
                _this.showFailure(data['message']);
            }
        }).catch(function (e) {
            _this.showFailure(e.error['message']);
        });
    };
    /**
     * Login the user into app
     */
    HomeComponent.prototype.login = function () {
        var _this = this;
        console.log("logging in");
        this.auth.login(this.loginForm.value).then(function (data) {
            if (data['success']) {
                _this.router.navigate(['/viewevents']);
            }
            else {
                _this.showFailure(data['message']);
            }
        })
            .catch(function (e) {
            _this.showFailure(e.error['message']);
        });
    };
    HomeComponent.prototype.showSuccess = function (message) {
        this.toastr.success(message);
    };
    HomeComponent.prototype.showFailure = function (message) {
        this.toastr.error(message);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/how/how.component.css":
/*!***************************************!*\
  !*** ./src/app/how/how.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    color: #c5c2c2;\n    margin: 50px;\n}\n\n.about li {\n    list-style: none;\n    padding: 10px 0px;\n    line-height: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG93L2hvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hvdy9ob3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGNvbG9yOiAjYzVjMmMyO1xuICAgIG1hcmdpbjogNTBweDtcbn1cblxuLmFib3V0IGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/how/how.component.html":
/*!****************************************!*\
  !*** ./src/app/how/how.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-lg-center\">\n        <div>\n            <h3>How It Works</h3>\n        </div>\n    </div>\n    <div class=\"row justify-content-md-center col\">\n        <ul class=\"about\">\n            <li>\n                <fa-icon [icon]=\"faGraduationCap\" size=\"lg\"></fa-icon> - You have been presented with a membership card because one of our representatives felt you were the kind of socialite we would like to welcome into our network.</li>\n            <li>\n                <fa-icon [icon]=\"faGraduationCap\" size=\"lg\"></fa-icon> - Your temporary membership card is activated by visiting our site, clicking \"register\" and entering the access code on your card.</li>\n            <li>\n                <fa-icon [icon]=\"faGraduationCap\" size=\"lg\"></fa-icon> - You will be taken to another screen which will ask for some additional information about you. After this, you will gain access to our private event listings.</li>\n            <li>\n                <fa-icon [icon]=\"faGraduationCap\" size=\"lg\"></fa-icon> - Select the upcoming event you would like to attend and either pay for a single guest ticket or join the Secret Society as a member. Even if you select not to purchase a membership, your temporary membership enables you to\n                still attend events at a guest's premium. We strive to provide a rich, fulfilling experience for our members and strongly encourage you to consider making the investment to become a Secret Society member.</li>\n            <li>\n                <fa-icon [icon]=\"faGraduationCap\" size=\"lg\"></fa-icon> - Bring your NSS card and a valid state-issued driver's license, I.D. or passport to the event with you.</li>\n            <li>\n                <fa-icon [icon]=\"faGraduationCap\" size=\"lg\"></fa-icon> - Bring your cellular device with you for ticket processing and membership verification.</li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/how/how.component.ts":
/*!**************************************!*\
  !*** ./src/app/how/how.component.ts ***!
  \**************************************/
/*! exports provided: HowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowComponent", function() { return HowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HowComponent = /** @class */ (function () {
    function HowComponent() {
        this.faGraduationCap = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGraduationCap"];
    }
    HowComponent.prototype.ngOnInit = function () {
    };
    HowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-how',
            template: __webpack_require__(/*! ./how.component.html */ "./src/app/how/how.component.html"),
            styles: [__webpack_require__(/*! ./how.component.css */ "./src/app/how/how.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HowComponent);
    return HowComponent;
}());



/***/ }),

/***/ "./src/app/locations/locations.component.css":
/*!***************************************************!*\
  !*** ./src/app/locations/locations.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n    color: #000;\n    padding: 30px;\n    background-color: #fff;\n    margin-top: 0px;\n}\n\n.add-row {\n    padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb25zL2xvY2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9ucy9sb2NhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5hZGQtcm93IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/locations/locations.component.html":
/*!****************************************************!*\
  !*** ./src/app/locations/locations.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <h3>Locations</h3>\n    </div>\n    <div class=\"row add-row\">\n        <div class=\"col\"></div>\n        <div class=\"col text-right\">\n            <button class=\"btn btn-success\" (click)=\"open(contentNew, null)\"><fa-icon [icon]=\"faPlusCircle\"></fa-icon> Add New Location</button>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <table class=\"table table-light table-striped table-hover\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">ID</th>\n                    <th scope=\"col\">NAME</th>\n                    <!-- <th scope=\"col\">LOGO</th> -->\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let loc of locations\">\n                    <th scope=\"row\">{{ loc.id }}</th>\n                    <td>{{ loc.name }}</td>\n                    <!-- <td><img class=\"img-thumbnail\" [src]=\"loc.logo\" /></td> -->\n                    <td>\n                        <button class=\"btn btn-info\" (click)=\"open(contentEdit, loc)\">\n                            <fa-icon [icon]=\"faEdit\"></fa-icon>\n                        </button>&nbsp;\n                        <button class=\"btn btn-danger\" (click)=\"open(contentDelete, loc)\">\n                            <fa-icon [icon]=\"faTrash\"></fa-icon>\n                        </button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<ng-template #contentNew let-modal>\n    <div class=\"modal-header bg-success\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Add a Location</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <form [formGroup]=\"locationForm\" (ngSubmit)=\"onSubmit()\">\n\n                <!-- Event Name -->\n                <div class=\"form-group\">\n                    <label>Name</label>\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\" required />\n                </div>\n\n                <!-- Create event button -->\n                <div class=\"form-group\">\n                    <button class=\"btn btn-outline-primary\" *ngIf=\"locationForm.valid\">Create Location</button>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Cancel</button>\n    </div>\n</ng-template>\n\n<ng-template #contentDelete let-modal>\n    <div class=\"modal-header bg-danger\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Delete Confirmation</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            Are you sure you want to delete <strong>{{ modloc.name }}</strong>?\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"delete(modloc.id); modal.close()\">Yes</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">No</button>\n    </div>\n</ng-template>\n\n<!-- <ng-template #contentView let-modal>\n                <div class=\"modal-header bg-primary\">\n                    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ moduser.first_name }} {{ moduser.last_name }}</h4>\n                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                                    <span aria-hidden=\"true\">&times;</span>\n                                  </button>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"col\">\n                                Address<br/> {{ moduser.address }}<br/> {{ moduser.city }}, {{ moduser.state }} {{ moduser.zip}}<br/> {{ moduser.phone }} <br/> {{ moduser.email }}\n                            </div>\n                            <div class=\"col\">\n                                City: {{ moduser.location }}<br/> Ambassador: {{ moduser.ambassador }}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Done</button>\n                </div>\n            </ng-template> -->\n\n<ng-template #contentEdit let-modal>\n    <div class=\"modal-header bg-info\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ modloc.name }}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <form [formGroup]=\"locationForm\" (ngSubmit)=\"onUpdate(modloc.id)\">\n\n                <!-- Event Name -->\n                <div class=\"form-group\">\n                    <label>Name</label>\n                    <input type=\"text\" formControlName=\"name\" [value]=\"modloc.name\" class=\"form-control\" required />\n                </div>\n\n                <!-- Create event button -->\n                <div class=\"form-group\">\n                    <button class=\"btn btn-outline-primary\">Update Location</button>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Done</button>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/locations/locations.component.ts":
/*!**************************************************!*\
  !*** ./src/app/locations/locations.component.ts ***!
  \**************************************************/
/*! exports provided: LocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsComponent", function() { return LocationsComponent; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LocationsComponent = /** @class */ (function () {
    function LocationsComponent(location, modalService, formBuilder) {
        this.location = location;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrash"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEdit"];
        this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlusCircle"];
        this.URL = 'http://localhost:3100/upload';
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({ url: this.URL, itemAlias: 'photo' });
    }
    LocationsComponent.prototype.ngOnInit = function () {
        this.getLocations();
        this.locationForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            logo: ''
        });
    };
    LocationsComponent.prototype.getLocations = function () {
        var _this = this;
        this.location.getLocations().then(function (data) { return _this.locations = data['items']; });
    };
    LocationsComponent.prototype.delete = function (id) {
        var _this = this;
        this.location.deleteLocation(id).then(function (data) {
            console.log(data);
            _this.getLocations();
        });
    };
    LocationsComponent.prototype.open = function (content, item) {
        if (item != null) {
            this.modloc = item;
        }
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(function (result) { });
    };
    LocationsComponent.prototype.onSubmit = function () {
        var _this = this;
        var form = this.locationForm.value;
        console.log(form);
        this.location.addLocation(form).then(function (data) {
            if (data['success']) {
                _this.modalService.dismissAll();
                _this.getLocations();
            }
            else {
                console.log("no", data);
            }
        });
    };
    LocationsComponent.prototype.onUpdate = function (id) {
        var _this = this;
        var form = this.locationForm.value;
        for (var prop in form) {
            if (form.hasOwnProperty(prop) && !form[prop]) {
                delete form[prop];
            }
        }
        this.location.updateLocation(form, id).then(function (data) {
            if (data['success']) {
                _this.modalService.dismissAll();
                _this.getLocations();
            }
            else {
                console.log("no", data);
            }
        });
    };
    LocationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-locations',
            template: __webpack_require__(/*! ./locations.component.html */ "./src/app/locations/locations.component.html"),
            styles: [__webpack_require__(/*! ./locations.component.css */ "./src/app/locations/locations.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_0__["LocationService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], LocationsComponent);
    return LocationsComponent;
}());



/***/ }),

/***/ "./src/app/members/members.component.css":
/*!***********************************************!*\
  !*** ./src/app/members/members.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n    color: #000;\n    padding: 30px;\n    background-color: #fff;\n    margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9tZW1iZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/members/members.component.html":
/*!************************************************!*\
  !*** ./src/app/members/members.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <h3>Members</h3>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\"></div>\n        <div class=\"col\"></div>\n    </div>\n\n    <div class=\"row\">\n        <table class=\"table table-light table-striped table-hover\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">CODE</th>\n                    <th scope=\"col\">USER</th>\n                    <th scope=\"col\">NAME</th>\n                    <th scope=\"col\">STATUS</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let mem of members\">\n                    <td>{{ mem.code }}</td>\n                    <td>{{ mem.user }}</td>\n                    <td>{{ mem.name }}</td>\n                    <td>{{ mem.status }}</td>\n                    <!-- <td>\n                        <button class=\"btn btn-info\" (click)=\"open(contentEdit, mem)\">\n                            <fa-icon [icon]=\"faEdit\"></fa-icon>\n                        </button>&nbsp;\n                        <button class=\"btn btn-danger\" (click)=\"open(contentDelete, mem)\">\n                            <fa-icon [icon]=\"faTrash\"></fa-icon>\n                        </button>\n                    </td> -->\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<!-- <ng-template #contentDelete let-modal>\n    <div class=\"modal-header bg-danger\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Delete Confirmation</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            Are you sure you want to delete <strong>{{ modmem.user }}</strong>'s membership?\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"delete(modmem.id); modal.close()\">Yes</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">No</button>\n    </div>\n</ng-template> -->\n\n<!-- <ng-template #contentView let-modal>\n        <div class=\"modal-header bg-primary\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ moduser.first_name }} {{ moduser.last_name }}</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                            <span aria-hidden=\"true\">&times;</span>\n                          </button>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        Address<br/> {{ moduser.address }}<br/> {{ moduser.city }}, {{ moduser.state }} {{ moduser.zip}}<br/> {{ moduser.phone }} <br/> {{ moduser.email }}\n                    </div>\n                    <div class=\"col\">\n                        City: {{ moduser.location }}<br/> Ambassador: {{ moduser.ambassador }}\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Done</button>\n        </div>\n    </ng-template>\n    \n    <ng-template #contentEdit let-modal>\n        <div class=\"modal-header bg-info\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ moduser.first_name }} {{ moduser.last_name }}</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                                <span aria-hidden=\"true\">&times;</span>\n                              </button>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        Address<br/> {{ moduser.address }}<br/> {{ moduser.city }}, {{ moduser.state }} {{ moduser.zip}}<br/> {{ moduser.phone }} <br/> {{ moduser.email }}\n                    </div>\n                    <div class=\"col\">\n                        City: {{ moduser.location }}<br/> Ambassador: {{ moduser.ambassador }}\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Done</button>\n        </div>\n    </ng-template> -->"

/***/ }),

/***/ "./src/app/members/members.component.ts":
/*!**********************************************!*\
  !*** ./src/app/members/members.component.ts ***!
  \**********************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MembersComponent = /** @class */ (function () {
    function MembersComponent(member, modalService) {
        this.member = member;
        this.modalService = modalService;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrash"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEdit"];
    }
    MembersComponent.prototype.ngOnInit = function () {
        this.getMembers();
    };
    MembersComponent.prototype.getMembers = function () {
        var _this = this;
        this.member.getMembers().then(function (data) { return _this.members = data['items']; });
    };
    MembersComponent.prototype.delete = function (id) {
        var _this = this;
        this.member.deleteMember(id).then(function (data) {
            console.log(data);
            _this.getMembers();
        });
    };
    MembersComponent.prototype.open = function (content, item) {
        this.modmem = item;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(function (result) { });
    };
    MembersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-members',
            template: __webpack_require__(/*! ./members.component.html */ "./src/app/members/members.component.html"),
            styles: [__webpack_require__(/*! ./members.component.css */ "./src/app/members/members.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["MemberService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], MembersComponent);
    return MembersComponent;
}());



/***/ }),

/***/ "./src/app/memberships/memberships.component.css":
/*!*******************************************************!*\
  !*** ./src/app/memberships/memberships.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnNoaXBzL21lbWJlcnNoaXBzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/memberships/memberships.component.html":
/*!********************************************************!*\
  !*** ./src/app/memberships/memberships.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <h3>Memberships</h3>\n    </div>\n    <div class=\"row add-row\">\n        <div class=\"col\"></div>\n        <div class=\"col text-right\">\n            <button class=\"btn btn-success\" (click)=\"open(contentNew, null)\"><fa-icon [icon]=\"faPlusCircle\"></fa-icon> Add New Membership</button>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <table class=\"table table-light table-hover table-striped\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">ID</th>\n                    <th scope=\"col\">NAME</th>\n                    <th scope=\"col\">DESCRIPTION</th>\n                    <th scope=\"col\">COST</th>\n                    <th scope=\"col\">FREQUENCY</th>\n                    <th scope=\"col\">COST PER</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let mem of memberships\">\n                    <th scope=\"row\">{{ mem.id }}</th>\n                    <td>{{ mem.name }}</td>\n                    <td [innerHTML]=\"mem.description\"></td>\n                    <td>{{ mem.cost | currency }}</td>\n                    <td>{{ mem.frequency }}</td>\n                    <td>{{ mem.cost_per_event | percent }}</td>\n                    <td>\n                        <button class=\"btn btn-info\" (click)=\"open(contentEdit, mem)\">\n                            <fa-icon [icon]=\"faEdit\"></fa-icon>\n                        </button>&nbsp;\n                        <button class=\"btn btn-danger\" (click)=\"open(contentDelete, mem)\">\n                            <fa-icon [icon]=\"faTrash\"></fa-icon>\n                        </button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<ng-template #contentDelete let-modal>\n    <div class=\"modal-header bg-danger\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Delete Confirmation</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            Are you sure you want to delete <strong>{{ modmem.name }}</strong>?\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"delete(modmem.id, modmem.product_id, modmem.plan_id); modal.close()\">Yes</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">No</button>\n    </div>\n</ng-template>\n\n<!-- Edit Membership -->\n<ng-template #contentEdit let-modal>\n    <div class=\"modal-header bg-info\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ modmem.name }}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <form [formGroup]=\"membershipForm\" (ngSubmit)=\"onUpdate(modmem.id)\">\n\n                <!-- First Name -->\n                <div class=\"form-group\">\n                    <label>Name</label>\n                    <input type=\"text\" formControlName=\"name\" [value]=\"modmem.name\" class=\"form-control\" required />\n                </div>\n\n                <!-- Event Desription -->\n                <div class=\"form-group\">\n                    <label>Description</label>\n                    <div class=\"NgxEditor__Wrapper\">\n                        <ngx-editor-menu [editor]=\"editor\"> </ngx-editor-menu>\n                        <ngx-editor\n                            [editor]=\"editor\"\n                            formControlName=\"description\"\n                            [placeholder]=\"description\"\n                        ></ngx-editor>\n                    </div>\n                </div>\n\n                <!-- Cost field -->\n                <div class=\"form-group\">\n                    <label>Cost</label>\n                    <input type=\"text\" formControlName=\"cost\" [value]=\"modmem.cost\" class=\"form-control\" required />\n                </div>\n\n                <!-- Frequency -->\n                <div class=\"form-group\">\n                    <label>Frequency</label>\n                    <select class=\"form-control\" formControlName=\"frequency\" [value]=\"modmem.frequency\" required>\n                        <option value=\"{{freq.id}}\" *ngFor=\"let freq of frequencies\">{{freq.name}}</option>\n                    </select>\n                </div>\n\n                <!-- Cost Per field -->\n                <div class=\"form-group\">\n                    <label>Cost Per Event</label>\n                    <input type=\"text\" formControlName=\"cost_per_event\" [value]=\"modmem.cost_per_event\" class=\"form-control\" required />\n                </div>\n\n                <!-- Create event button -->\n                <div class=\"form-group\">\n                    <button class=\"btn btn-outline-primary\">Update Membership</button>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Done</button>\n    </div>\n</ng-template>\n\n<!-- Create New Modal -->\n<ng-template #contentNew let-modal>\n    <div class=\"modal-header bg-success\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Create Membership</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <form [formGroup]=\"membershipForm\" (ngSubmit)=\"onSubmit()\">\n\n                <!-- First Name -->\n                <div class=\"form-group\">\n                    <label>Name</label>\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\" required />\n                </div>\n\n                <!-- Event Desription -->\n                <div class=\"form-group\">\n                    <label>Description</label>\n                    <angular-editor [placeholder]=\"description\" formControlName=\"description\" [config]=\"editorConfig\"></angular-editor>\n                </div>\n\n                <!-- Cost field -->\n                <div class=\"form-group\">\n                    <label>Cost</label>\n                    <input type=\"text\" formControlName=\"cost\" class=\"form-control\" placeholder=\"100.00\" required />\n                </div>\n\n                <!-- Frequency -->\n                <div class=\"form-group\">\n                    <label>Frequency</label>\n                    <select class=\"form-control\" formControlName=\"frequency\" required>\n                        <option value=\"{{freq.id}}\" *ngFor=\"let freq of frequencies\">{{freq.name}}</option>\n                    </select>\n                </div>\n\n                <!-- Cost Per field -->\n                <div class=\"form-group\">\n                    <label>Cost Per Event</label>\n                    <input type=\"text\" formControlName=\"cost_per_event\" class=\"form-control\" required />\n                </div>\n\n                <!-- Create event button -->\n                <div class=\"form-group\">\n                    <button class=\"btn btn-outline-primary\" *ngIf=\"membershipForm.valid\">Create Membership</button>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Cancel</button>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/memberships/memberships.component.ts":
/*!******************************************************!*\
  !*** ./src/app/memberships/memberships.component.ts ***!
  \******************************************************/
/*! exports provided: MembershipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipsComponent", function() { return MembershipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm2015/ngx-editor.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MembershipsComponent = /** @class */ (function () {
    function MembershipsComponent(membership, modalService, formBuilder, toastr) {
        this.membership = membership;
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEdit"];
        this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlusCircle"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrash"];
        this.frequencies = [
            { id: 'month', name: 'monthly' },
            { id: 'year', name: 'annually' }
        ];
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: 'auto',
            minHeight: '0',
            maxHeight: 'auto',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ]
        };
    }
    MembershipsComponent.prototype.ngOnInit = function () {
        this.editor = new ngx_editor__WEBPACK_IMPORTED_MODULE_1__["Editor"]();
        this.getMemberships();
        this.membershipForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cost: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            frequency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cost_per_event: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    MembershipsComponent.prototype.getMemberships = function () {
        var _this = this;
        this.membership.getMemberships().then(function (data) { return _this.memberships = data['items']; });
        console.log(this.memberships);
    };
    MembershipsComponent.prototype.delete = function (id, product, plan) {
        var _this = this;
        this.membership.deleteMembership(id, product, plan).then(function (data) {
            if (data['success']) {
                _this.showSuccess(data['message'], "Delete Membership");
                _this.getMemberships();
            }
            else {
                _this.showFailure(data['message'], "Delete Membership");
            }
        });
    };
    MembershipsComponent.prototype.open = function (content, item) {
        if (item != null) {
            this.modmem = item;
        }
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(function (result) { });
    };
    MembershipsComponent.prototype.onSubmit = function () {
        var _this = this;
        var form = this.membershipForm.value;
        console.log(form);
        this.membership.addMembership(form).then(function (data) {
            if (data['success']) {
                _this.modalService.dismissAll();
                _this.getMemberships();
            }
            else {
                console.log("Create Membership", data);
            }
        });
    };
    MembershipsComponent.prototype.onUpdate = function (id) {
        var _this = this;
        var form = this.membershipForm.value;
        for (var prop in form) {
            if (form.hasOwnProperty(prop) && !form[prop]) {
                delete form[prop];
            }
        }
        this.membership.updateMembership(form, id).then(function (data) {
            if (data['success']) {
                _this.modalService.dismissAll();
                _this.getMemberships();
            }
            else {
                console.log("no", data);
            }
        });
    };
    MembershipsComponent.prototype.showSuccess = function (msg, title) {
        this.toastr.success(msg, title);
    };
    MembershipsComponent.prototype.showFailure = function (msg, title) {
        this.toastr.error(msg, title);
    };
    MembershipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-memberships',
            template: __webpack_require__(/*! ./memberships.component.html */ "./src/app/memberships/memberships.component.html"),
            styles: [__webpack_require__(/*! ./memberships.component.css */ "./src/app/memberships/memberships.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_6__["MembershipService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], MembershipsComponent);
    return MembershipsComponent;
}());



/***/ }),

/***/ "./src/app/places/places.component.css":
/*!*********************************************!*\
  !*** ./src/app/places/places.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9wbGFjZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/places/places.component.html":
/*!**********************************************!*\
  !*** ./src/app/places/places.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <h3>Places</h3>\n    </div>\n    <div class=\"row add-row\">\n        <div class=\"col\"></div>\n        <div class=\"col text-right\">\n            <button class=\"btn btn-success\" (click)=\"open(contentNew, null)\"><fa-icon [icon]=\"faPlusCircle\"></fa-icon> Add New Place</button>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <table class=\"table table-light table-striped table-hover\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">ID</th>\n                    <th scope=\"col\">LOCATION</th>\n                    <th scope=\"col\">NAME</th>\n                    <th scope=\"col\">ADDRESS</th>\n                    <th scope=\"col\">PHONE</th>\n                    <th scope=\"col\">WEBSITE</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let place of places\">\n                    <th scope=\"row\">{{ place.id }}</th>\n                    <td>{{ place.location }}</td>\n                    <td>{{ place.name }}</td>\n                    <td>\n                        {{ place.address }}<br/> {{ place.city }}, {{ place.state }} {{ place.zip }}\n                    </td>\n                    <td>{{ place.phone }}</td>\n                    <td>{{ place.website }}</td>\n                    <td>\n                        <button class=\"btn btn-info\" (click)=\"open(contentEdit, place)\">\n                            <fa-icon [icon]=\"faEdit\"></fa-icon>\n                        </button>&nbsp;\n                        <button class=\"btn btn-danger\" (click)=\"open(contentDelete, place)\">\n                            <fa-icon [icon]=\"faTrash\"></fa-icon>\n                        </button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<ng-template #contentDelete let-modal>\n    <div class=\"modal-header bg-danger\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Delete Confirmation</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            Are you sure you want to delete <strong>{{ modplace.name }}</strong>?\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"delete(modplace.id); modal.close()\">Yes</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">No</button>\n    </div>\n</ng-template>\n\n<!-- <ng-template #contentView let-modal>\n        <div class=\"modal-header bg-primary\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ moduser.first_name }} {{ moduser.last_name }}</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                            <span aria-hidden=\"true\">&times;</span>\n                          </button>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        Address<br/> {{ moduser.address }}<br/> {{ moduser.city }}, {{ moduser.state }} {{ moduser.zip}}<br/> {{ moduser.phone }} <br/> {{ moduser.email }}\n                    </div>\n                    <div class=\"col\">\n                        City: {{ moduser.location }}<br/> Ambassador: {{ moduser.ambassador }}\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Done</button>\n        </div>\n    </ng-template> -->\n\n<ng-template #contentEdit let-modal>\n    <div class=\"modal-header bg-info\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ modplace.name }}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                                <span aria-hidden=\"true\">&times;</span>\n                              </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <form [formGroup]=\"placeForm\" (ngSubmit)=\"onUpdate(modplace.id)\">\n\n                <!-- Place Location -->\n                <div class=\"form-group\">\n                    <label>Location</label>\n                    <select class=\"form-control\" formControlName=\"location_id\" [value]=\"modplace.location_id\" required>\n                        <option value=\"{{location.id}}\" *ngFor=\"let location of locations\">{{location.name}}</option>\n                    </select>\n                </div>\n\n                <!-- Name -->\n                <div class=\"form-group\">\n                    <label>Name</label>\n                    <input type=\"text\" formControlName=\"name\" [value]=\"modplace.name\" class=\"form-control\" required />\n                </div>\n\n                <!-- Address field -->\n                <div class=\"form-group\">\n                    <label>Address</label>\n                    <input type=\"text\" formControlName=\"address\" [value]=\"modplace.address\" class=\"form-control\" required />\n                </div>\n\n                <!-- City field -->\n                <div class=\"form-group\">\n                    <label>City</label>\n                    <input type=\"text\" formControlName=\"city\" [value]=\"modplace.city\" class=\"form-control\" required />\n                </div>\n\n                <div class=\"form-group\">\n                    <label>State</label>\n                    <select class=\"form-control\" formControlName=\"state\" [value]=\"modplace.state\" required>\n                        <option value=\"{{state.id}}\" *ngFor=\"let state of states\">{{state.name}}</option>\n                    </select>\n                </div>\n\n                <!-- Cost Per field -->\n                <div class=\"form-group\">\n                    <label>Zip</label>\n                    <input type=\"text\" formControlName=\"zip\" [value]=\"modplace.zip\" class=\"form-control\" required />\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Phone</label>\n                    <input type=\"text\" formControlName=\"phone\" [value]=\"modplace.phone\" class=\"form-control\" required />\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Website</label>\n                    <input type=\"text\" formControlName=\"website\" [value]=\"modplace.website\" class=\"form-control\" required />\n                </div>\n\n                <!-- Create event button -->\n                <div class=\"form-group\">\n                    <button class=\"btn btn-outline-primary\">Update Place</button>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Done</button>\n    </div>\n</ng-template>\n\n<!-- Create New Modal -->\n<ng-template #contentNew let-modal>\n    <div class=\"modal-header bg-success\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Create a Place</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <form [formGroup]=\"placeForm\" (ngSubmit)=\"onSubmit()\">\n\n                <!-- Event Location -->\n                <div class=\"form-group\">\n                    <label>Location</label>\n                    <select class=\"form-control\" formControlName=\"location_id\" required>\n                            <option value=\"{{location.id}}\" *ngFor=\"let location of locations\">{{location.name}}</option>\n                        </select>\n                </div>\n\n                <!-- First Name -->\n                <div class=\"form-group\">\n                    <label>Name</label>\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\" required />\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Address</label>\n                    <input type=\"text\" formControlName=\"address\" class=\"form-control\" required />\n                </div>\n\n                <!-- Cost field -->\n                <div class=\"form-group\">\n                    <label>City</label>\n                    <input type=\"text\" formControlName=\"city\" class=\"form-control\" required />\n                </div>\n\n                <div class=\"form-group\">\n                    <label>State</label>\n                    <select class=\"form-control\" formControlName=\"state\" required>\n                            <option value=\"{{state.id}}\" *ngFor=\"let state of states\">{{state.name}}</option>\n                        </select>\n                </div>\n\n                <!-- Cost Per field -->\n                <div class=\"form-group\">\n                    <label>Zip</label>\n                    <input type=\"text\" formControlName=\"zip\" class=\"form-control\" required />\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Phone</label>\n                    <input type=\"text\" formControlName=\"phone\" class=\"form-control\" />\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Website</label>\n                    <input type=\"text\" formControlName=\"website\" class=\"form-control\" />\n                </div>\n\n                <!-- Create event button -->\n                <div class=\"form-group\">\n                    <button class=\"btn btn-outline-primary\" *ngIf=\"placeForm.valid\">Create a Place</button>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Cancel</button>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/places/places.component.ts":
/*!********************************************!*\
  !*** ./src/app/places/places.component.ts ***!
  \********************************************/
/*! exports provided: PlacesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesComponent", function() { return PlacesComponent; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config */ "./src/app/config.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlacesComponent = /** @class */ (function () {
    function PlacesComponent(place, modalService, location, formBuilder) {
        this.place = place;
        this.modalService = modalService;
        this.location = location;
        this.formBuilder = formBuilder;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTrash"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEdit"];
        this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlusCircle"];
    }
    PlacesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPlaces();
        this.location.getLocations().then(function (data) {
            _this.locations = data['items'];
        });
        this.states = _config__WEBPACK_IMPORTED_MODULE_0__["cfg"].states;
        this.placeForm = this.formBuilder.group({
            location_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            phone: '',
            website: ''
        });
    };
    PlacesComponent.prototype.getPlaces = function () {
        var _this = this;
        this.place.getPlaces().then(function (data) { return _this.places = data['items']; });
    };
    PlacesComponent.prototype.delete = function (id) {
        var _this = this;
        this.place.deletePlace(id).then(function (data) {
            console.log(data);
            _this.getPlaces();
        });
    };
    PlacesComponent.prototype.open = function (content, item) {
        if (item != null) {
            this.modplace = item;
        }
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(function (result) { });
    };
    PlacesComponent.prototype.onSubmit = function () {
        var _this = this;
        var form = this.placeForm.value;
        console.log(form);
        this.place.addPlace(form).then(function (data) {
            if (data['success']) {
                _this.modalService.dismissAll();
                _this.getPlaces();
            }
            else {
                console.log("no", data);
            }
        });
    };
    PlacesComponent.prototype.onUpdate = function (id) {
        var _this = this;
        var form = this.placeForm.value;
        for (var prop in form) {
            if (form.hasOwnProperty(prop) && !form[prop]) {
                delete form[prop];
            }
        }
        this.place.updatePlace(form, id).then(function (data) {
            if (data['success']) {
                _this.modalService.dismissAll();
                _this.getPlaces();
            }
            else {
                console.log("no", data);
            }
        });
    };
    PlacesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-places',
            template: __webpack_require__(/*! ./places.component.html */ "./src/app/places/places.component.html"),
            styles: [__webpack_require__(/*! ./places.component.css */ "./src/app/places/places.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["PlaceService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _services__WEBPACK_IMPORTED_MODULE_2__["LocationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], PlacesComponent);
    return PlacesComponent;
}());



/***/ }),

/***/ "./src/app/surveys/surveys.component.css":
/*!***********************************************!*\
  !*** ./src/app/surveys/surveys.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleXMvc3VydmV5cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/surveys/surveys.component.html":
/*!************************************************!*\
  !*** ./src/app/surveys/surveys.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <h3>Surveys</h3>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\"></div>\n        <div class=\"col\"></div>\n    </div>\n\n    <div class=\"row\">\n        <table class=\"table table-light table-striped table-hover\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">USER</th>\n                    <th scope=\"col\">ETHNICITY</th>\n                    <th scope=\"col\">GENDER</th>\n                    <th scope=\"col\">INCOME</th>\n                    <th scope=\"col\">EMPLOYMENT</th>\n                    <th scope=\"col\">SPORTS</th>\n                    <th scope=\"col\">TRAVEL</th>\n                    <th scope=\"col\">FASHION</th>\n                    <th scope=\"col\">TECHNOLOGY</th>\n                    <th scope=\"col\">ARTS</th>\n                    <th scope=\"col\">FITNESS</th>\n                    <th scope=\"col\">FOOD</th>\n                    <th scope=\"col\">INTEREST</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let survey of surveys\">\n                    <td>{{ survey.user }}</td>\n                    <td>{{ survey.ethnicity }}</td>\n                    <td>{{ survey.gender }}</td>\n                    <td>{{ survey.income }}</td>\n                    <td>{{ survey.employment }}</td>\n                    <td>{{ survey.sports }}</td>\n                    <td>{{ survey.travel }}</td>\n                    <td>{{ survey.fashion }}</td>\n                    <td>{{ survey.technology }}</td>\n                    <td>{{ survey.arts }}</td>\n                    <td>{{ survey.fitness }}</td>\n                    <td>{{ survey.food }}</td>\n                    <td>{{ survey.interest }}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/surveys/surveys.component.ts":
/*!**********************************************!*\
  !*** ./src/app/surveys/surveys.component.ts ***!
  \**********************************************/
/*! exports provided: SurveysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveysComponent", function() { return SurveysComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SurveysComponent = /** @class */ (function () {
    function SurveysComponent(survey, modalService) {
        this.survey = survey;
        this.modalService = modalService;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrash"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEdit"];
    }
    SurveysComponent.prototype.ngOnInit = function () {
        this.getSurveys();
    };
    SurveysComponent.prototype.getSurveys = function () {
        var _this = this;
        this.survey.getSurveys().then(function (data) { return _this.surveys = data['items']; });
    };
    SurveysComponent.prototype.delete = function (id) {
        var _this = this;
        this.survey.deleteSurvey(id).then(function (data) {
            console.log(data);
            _this.getSurveys();
        });
    };
    SurveysComponent.prototype.open = function (content, user) {
        this.modsurvey = user;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(function (result) { });
    };
    SurveysComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-surveys',
            template: __webpack_require__(/*! ./surveys.component.html */ "./src/app/surveys/surveys.component.html"),
            styles: [__webpack_require__(/*! ./surveys.component.css */ "./src/app/surveys/surveys.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["SurveyService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], SurveysComponent);
    return SurveysComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <h3>Users</h3>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\"></div>\n        <div class=\"col\"></div>\n    </div>\n\n    <div class=\"row\">\n        <table class=\"table table-light table-striped table-hover\">\n            <thead>\n                <tr>\n                    <!-- <th scope=\"col\">ID</th> -->\n                    <!-- <th scope=\"col\">CODE</th> -->\n                    <th scope=\"col\">USER LEVEL</th>\n                    <th scope=\"col\">NAME</th>\n                    <!-- <th scope=\"col\">ADDRESS</th> -->\n                    <th scope=\"col\">EMAIL</th>\n                    <th scope=\"col\">PHONE</th>\n                    <!-- <th scope=\"col\">BIRTHDAY</th> -->\n                    <th scope=\"col\">LOCATION</th>\n                    <th scope=\"col\">AMBASSADOR</th>\n                    <!-- <th scope=\"col\"></th> -->\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let user of users\">\n                    <!-- <th scope=\"row\">{{ user.id }}</th> -->\n                    <td>{{ user.userlevel }}</td>\n                    <td (click)=\"open(contentView, user)\">{{ user.first_name }} {{ user.last_name }}</td>\n                    <!-- <td>\n                        {{ user.address }}<br/> {{ user.city }}, {{ user.state }} {{ user.zip }}\n                    </td> -->\n                    <td>{{ user.email }}</td>\n                    <td>{{ user.phone }}</td>\n                    <!-- <td>{{ user.birthday }}</td> -->\n                    <td>{{ user.location }}</td>\n                    <td>{{ user.ambassador }}</td>\n                    <!-- <td>\n                        <button class=\"btn btn-info\" (click)=\"open(contentEdit, user)\">\n                            <fa-icon [icon]=\"faEdit\"></fa-icon>\n                        </button>&nbsp;\n                        <button class=\"btn btn-danger\" (click)=\"open(contentDelete, user)\">\n                            <fa-icon [icon]=\"faTrash\"></fa-icon>\n                        </button>\n                    </td> -->\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n\n\n<ng-template #contentDelete let-modal>\n    <div class=\"modal-header bg-danger\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Delete Confirmation</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            Are you sure you want to delete <strong>{{ moduser.first_name }} {{ moduser.last_name }}</strong>?\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"delete(moduser.id); modal.close()\">Yes</button>\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">No</button>\n    </div>\n</ng-template>\n\n<ng-template #contentView let-modal>\n    <div class=\"modal-header bg-primary\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ moduser.first_name }} {{ moduser.last_name }}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    Address<br/> {{ moduser.address }}<br/> {{ moduser.city }}, {{ moduser.state }} {{ moduser.zip}}<br/> {{ moduser.phone }} <br/> {{ moduser.email }}\n                </div>\n                <div class=\"col\">\n                    City: {{ moduser.location }}<br/> Ambassador: {{ moduser.ambassador }}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Done</button>\n    </div>\n</ng-template>\n\n<ng-template #contentEdit let-modal>\n    <div class=\"modal-header bg-info\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ moduser.first_name }} {{ moduser.last_name }}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                            <span aria-hidden=\"true\">&times;</span>\n                          </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    Address<br/> {{ moduser.address }}<br/> {{ moduser.city }}, {{ moduser.state }} {{ moduser.zip}}<br/> {{ moduser.phone }} <br/> {{ moduser.email }}\n                </div>\n                <div class=\"col\">\n                    City: {{ moduser.location }}<br/> Ambassador: {{ moduser.ambassador }}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close()\">Done</button>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersComponent = /** @class */ (function () {
    function UsersComponent(user, modalService) {
        this.user = user;
        this.modalService = modalService;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrash"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEdit"];
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.user.getUsers().then(function (data) { return _this.users = data['items']; });
    };
    UsersComponent.prototype.edit = function (user) {
    };
    UsersComponent.prototype.delete = function (id) {
        var _this = this;
        this.user.deleteUser(id).then(function (data) {
            console.log(data);
            _this.getUsers();
        });
    };
    UsersComponent.prototype.open = function (content, user) {
        this.moduser = user;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(function (result) { });
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["UserService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/viewevents/viewevents.component.css":
/*!*****************************************************!*\
  !*** ./src/app/viewevents/viewevents.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    width: 100%;\n}\n\nul {\n    list-style: none;\n    padding: 0px;\n    background-color: #fff;\n}\n\nul>li {\n    /* background-color: #f0f0f0; */\n    /* border-bottom: 1px solid #ccc; */\n    /* padding-top: 20px; */\n}\n\nul>li>p {\n    padding: 15px;\n    margin-bottom: 0px;\n}\n\n.listevents {\n    margin-right: -30px;\n    margin-left: -30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld2V2ZW50cy92aWV3ZXZlbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixtQ0FBbUM7SUFDbkMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC92aWV3ZXZlbnRzL3ZpZXdldmVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG51bD5saSB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDsgKi9cbiAgICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYzsgKi9cbiAgICAvKiBwYWRkaW5nLXRvcDogMjBweDsgKi9cbn1cblxudWw+bGk+cCB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5saXN0ZXZlbnRzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC0zMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/viewevents/viewevents.component.html":
/*!******************************************************!*\
  !*** ./src/app/viewevents/viewevents.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <h3>List of Events</h3>\n    </div>\n\n    <div class=\"row listevents\">\n        <div class=\"col-sm-12 col-lg-3 mt-3\" *ngIf=\"events.length === 0\">You have no events.</div>\n        <div class=\"col-sm-12 col-lg-3\" *ngFor=\"let event of events\">\n            <figure class=\"figure mt-3\">\n                <img [src]=\"img_path + event?.url\" [alt]=\"event?.name\" class=\"figure-img img-fluid rounded\" (click)=\"open(contentEvent, event)\" onerror=\"this.src='https://placeimg.com/640/480/people'\">\n                <figcaption class=\"figure-caption\">{{ event?.name }} <small>( {{ event?.location }} )</small></figcaption>\n            </figure>\n        </div>\n    </div>\n</div>\n\n<ng-template #contentEvent let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title mt-3 mb-4 text-dark\">{{ viewevent?.name }}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.close()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <img [src]=\"img_path + viewevent?.url\" [alt]=\"viewevent?.name\" onerror=\"this.src='https://placeimg.com/640/480/people'\">\n        <h4 class=\"mt-3\">{{ viewevent?.name }}</h4>\n        <div class=\"row pt-3\">\n            <div class=\"col start\">\n                <strong><u>Event Date</u></strong><br/> <small>{{ viewevent?.event_date }}</small><br/>\n                <strong><u>Event Times</u></strong><br/> <small>{{ viewevent?.start_time }} - {{ viewevent?.end_time }}</small><br/>\n                <strong><u>Event Cost</u><br/></strong> <small>{{ viewevent?.cost | currency }}</small>\n            </div>\n            <div class=\"col\">\n                <p>\n                    <strong>Venue:</strong> <br/> {{ viewevent?.place }} <br/> {{ viewevent?.place_address }} <br/> {{ viewevent?.place_city }}, {{ viewevent?.place_state }} {{ viewevent?.place_zip }} <br/> {{ viewevent?.place_phone }}\n                    <br/><a [href]=\"viewevent?.website\" target=\"_blank\">{{ viewevent?.website }}</a>\n                </p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col pt-3\">\n                <strong><u>Event Description</u></strong>\n                <p [innerHTML]=\"viewevent?.description\"></p>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button *ngIf=\"(membership != 1 || firstevent) && !viewevent.going\" type=\"button\" class=\"btn btn-outline-dark btn-success\" (click)=\"rsvp(viewevent)\">RSVP</button>\n        <button *ngIf=\"membership == 1 && !firstevent && !viewevent.going\" type=\"button\" class=\"btn btn-outline-success btn-success\" (click)=\"openHandler(viewevent)\">Purchase a Ticket</button>\n        <button *ngIf=\"viewevent.going\" type=\"button\" class=\"btn btn-outline-success btn-success\" (click)=\"modal.close()\">Your are Going</button>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/viewevents/viewevents.component.ts":
/*!****************************************************!*\
  !*** ./src/app/viewevents/viewevents.component.ts ***!
  \****************************************************/
/*! exports provided: VieweventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VieweventsComponent", function() { return VieweventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VieweventsComponent = /** @class */ (function () {
    function VieweventsComponent(attendService, event, location, modalService, userService, toastr) {
        this.attendService = attendService;
        this.event = event;
        this.location = location;
        this.modalService = modalService;
        this.userService = userService;
        this.toastr = toastr;
        this.events = [];
        this.firstevent = true;
        this.img_path = _config__WEBPACK_IMPORTED_MODULE_4__["cfg"].img_path;
        this.payment = false;
    }
    VieweventsComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.getEvents();
        this.firstEvent();
        this.getMembership();
        this.configHandler();
    };
    VieweventsComponent.prototype.configHandler = function () {
        var _this = this;
        this.handler = StripeCheckout.configure({
            key: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].stripeKey,
            image: 'https://thesecretsociety.us/assets/imgs/SECRET_SOCIETY_MAIN.jpg',
            locale: 'auto',
            token: function (token) {
                var payment = {
                    amount: _this.thisevent.cost + "00",
                    currency: 'usd',
                    description: "Purchasing ticket for " + _this.thisevent.name,
                    receipt_email: _this.user.email,
                    source: token.id
                };
                _this.event.purchaseEvent(payment).then(function (data) {
                    if (data['success']) {
                        var results = data['data'];
                        var transaction = {
                            charge_id: results.id,
                            customer_id: _this.user.customer_id,
                            amount: results.amount,
                            amount_refunded: results.amount_refunded,
                            balance_trans: results.balance_transaction,
                            captured: results.captured,
                            currency: results.currency,
                            description: results.description,
                            failure_code: results.failure_code,
                            failure_message: results.failure_message,
                            paid: results.paid,
                            refunded: results.refunded,
                            refund_url: results.refunds.url,
                            source_id: results.source.id,
                            last4: results.source.last4,
                            status: results.status
                        };
                        _this.event.saveTransaction(transaction).then(function (data) {
                            _this.rsvp({ id: _this.thisevent.id });
                            _this.getEvents();
                            _this.modalService.dismissAll();
                            _this.showSuccess(data['message']);
                        });
                    }
                    else {
                        _this.showFailure(data['message']);
                    }
                });
            }
        });
    };
    VieweventsComponent.prototype.openHandler = function (event) {
        this.thisevent = event;
        this.handler.open({
            name: event.name,
            description: "Purchasing ticket for " + event.name,
            amount: event.cost + "00"
        });
    };
    VieweventsComponent.prototype.getEvents = function () {
        var _this = this;
        this.location.getEventsByLocation(this.user.location, this.user.id).then(function (data) {
            _this.events = data['items'];
        });
    };
    VieweventsComponent.prototype.firstEvent = function () {
        var _this = this;
        this.userService.getEventsByUser(this.user.id).then(function (data) {
            if (data['success']) {
                _this.firstevent = false;
            }
        }).catch(function (e) { return console.log(e.error); });
    };
    VieweventsComponent.prototype.getMembership = function () {
        var _this = this;
        this.userService.getMembership(this.user.id).then(function (data) {
            var member = data['data'];
            _this.membership = member.membership_id;
        });
    };
    VieweventsComponent.prototype.rsvp = function (event) {
        var _this = this;
        var attend = {
            event_id: event.id,
            user_id: this.user.id
        };
        this.attendService.addAttendee(attend).then(function (data) {
            if (data['success']) {
                _this.firstEvent();
                _this.getEvents();
                _this.modalService.dismissAll();
                _this.showSuccess(data['message']);
            }
            else {
                _this.showFailure(data['message']);
            }
        });
    };
    VieweventsComponent.prototype.purchase = function (event) {
        this.payment = true;
    };
    VieweventsComponent.prototype.open = function (content, item) {
        this.viewevent = item;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(function (result) { });
    };
    VieweventsComponent.prototype.showSuccess = function (message) {
        this.toastr.success(message);
    };
    VieweventsComponent.prototype.showFailure = function (message) {
        this.toastr.error(message);
    };
    VieweventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewevents',
            template: __webpack_require__(/*! ./viewevents.component.html */ "./src/app/viewevents/viewevents.component.html"),
            styles: [__webpack_require__(/*! ./viewevents.component.css */ "./src/app/viewevents/viewevents.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AttendeeService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["EventService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["LocationService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _services__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], VieweventsComponent);
    return VieweventsComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    stripeKey: 'pk_test_Nn9KAQ9fcAS9o3z92rshDOc2'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tonyfletcher/Apps/mean-master-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map