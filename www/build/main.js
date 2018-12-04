webpackJsonp([17],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddaddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddaddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddaddressPage = /** @class */ (function () {
    function AddaddressPage(navCtrl, navParams, tools, Config, httpservices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tools = tools;
        this.Config = Config;
        this.httpservices = httpservices;
        // public addressList:{
        //   name:any,
        //   contact:any,
        //   address:any,
        // }
        this.addressList = {
            name: '',
            phone: '',
            address: '',
        };
    }
    AddaddressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddaddressPage');
    };
    AddaddressPage.prototype.addAddress = function () {
        var _this = this;
        if (this.addressList.name != '' || this.addressList.phone != '' || this.addressList.address != '') {
            // 获取表单的内容
            var userinfo = this.tools.getUserInfo();
            var json = {
                uid: userinfo._id,
                salt: userinfo.salt,
                name: this.addressList.name,
                phone: this.addressList.phone,
                address: this.addressList.address,
            };
            var sign = this.tools.sign(json); /* 生成签名 */
            var api = 'api/addAddress';
            this.httpservices.doPost(api, {
                uid: userinfo._id,
                sign: sign,
                name: this.addressList.name,
                phone: this.addressList.phone,
                address: this.addressList.address,
            }, function (data) {
                // console.log(data);
                if (data.success) {
                    _this.navCtrl.pop();
                }
                else {
                    alert(data.message);
                }
            });
        }
        else {
            alert("错误");
        }
    };
    AddaddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addaddress',template:/*ion-inline-start:"D:\ionicDEMO\jingdongdemoAPP\src\pages\addaddress\addaddress.html"*/'<!--\n  Generated template for the AddaddressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>新建收获地址</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  \n    <ion-list >\n      <ion-item>\n        <ion-label flexed>姓名</ion-label>\n        <ion-input type="text" placeholder="姓名" [(ngModel)]="addressList.name" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label flexed>联系方式：</ion-label>\n        <ion-input type="text" placeholder="联系方式" [(ngModel)]="addressList.phone" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label flexed>收货地址</ion-label>\n        <ion-input type="text" placeholder="收货地址" [(ngModel)]="addressList.address" ></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button color="danger" (click)="addAddress()" class="address_btn">+增加</button>\n</ion-content>\n'/*ion-inline-end:"D:\ionicDEMO\jingdongdemoAPP\src\pages\addaddress\addaddress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
    ], AddaddressPage);
    return AddaddressPage;
}());

//# sourceMappingURL=addaddress.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addaddress_addaddress__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_services_http_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editaddress_editaddress__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddressPage = /** @class */ (function () {
    function AddressPage(alertCtrl, navCtrl, navParams, tools, Config, httpservices) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tools = tools;
        this.Config = Config;
        this.httpservices = httpservices;
        this.list = [];
        this.AddaddressPage = __WEBPACK_IMPORTED_MODULE_2__addaddress_addaddress__["a" /* AddaddressPage */];
        this.userinfo = '';
    }
    AddressPage.prototype.ionViewWillEnter = function () {
        this.userinfo = this.tools.getUserInfo();
        this.getAddresslist();
    };
    // 获取当前用户的收货地址
    AddressPage.prototype.getAddresslist = function () {
        var _this = this;
        // 签名
        // this.navCtrl.push(AddaddressPage);
        var userinfo = this.tools.getUserInfo();
        // let userinfo:any=this.userinfo;
        var json = {
            uid: userinfo._id,
            salt: userinfo.salt,
        };
        var sign = this.tools.sign(json);
        // 请求数据
        var api = 'api/addressList?uid=' + userinfo._id + '&sign=' + sign;
        this.httpservices.ruquestData(api, function (data) {
            console.log(data);
            // console.log(api+"这是api的数据");
            if (data.success) {
                _this.list = data.result;
            }
            else {
                alert(data.message);
            }
        });
    };
    // 改变收货地址
    AddressPage.prototype.changeAddress = function (id) {
        var _this = this;
        // alert(id);
        // 签名
        var userinfo = this.userinfo;
        var json = {
            uid: userinfo._id,
            salt: userinfo.salt,
            id: id,
        };
        var sign = this.tools.sign(json);
        var api = 'api/changeDefaultAddress';
        this.httpservices.doPost(api, {
            uid: userinfo._id,
            sign: sign,
            id: id,
        }, function (data) {
            // console.log(data)
            if (data.success) {
                _this.navCtrl.pop();
            }
            else {
                alert(data.message);
            }
        });
    };
    AddressPage.prototype.deleteAddress = function (key, id) {
        var that = this;
        var alert = this.alertCtrl.create({
            title: '警告',
            message: '您确定要删除么?',
            buttons: [
                {
                    text: '取消',
                    role: '取消',
                    handler: function () {
                        console.log('取消删除');
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        console.log('删除成功');
                        console.log(key, id);
                        that.deleteAddressAction(key, id);
                    }
                }
            ]
        });
        alert.present();
    };
    AddressPage.prototype.deleteAddressAction = function (key, address_id) {
        var _this = this;
        var userinfo = this.userinfo;
        var json = {
            uid: userinfo['_id'],
            salt: userinfo['salt'],
            id: address_id
        };
        var sign = this.tools.sign(json);
        var api = 'api/deleteAddress';
        this.httpservices.doPost(api, {
            uid: userinfo['_id'],
            sign: sign,
            id: address_id
        }, function (data) {
            // console.log(data)
            if (data.success = true) {
                _this.list.splice(key, 1);
            }
            else {
                alert(data.message);
            }
        });
    };
    AddressPage.prototype.editAddress = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__editaddress_editaddress__["a" /* EditaddressPage */], {
            item: item
        });
    };
    AddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-address',template:/*ion-inline-start:"D:\ionicDEMO\jingdongdemoAPP\src\pages\address\address.html"*/'<!--\n  Generated template for the AddressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>收货地址列表</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n    <!-- <ion-list class="address_list">\n      \n      <ion-item *ngFor="let item of list" >\n          <button ion-button clear item-start icon-only >\n              <ion-icon name="md-checkmark" color="danger"></ion-icon>\n            </button>\n            <h2>{{item.name}}  {{item.phone}}</h2>\n          <button ion-button clear item-end icon-only >\n              <ion-icon name="ios-create-outline"></ion-icon>\n          </button>\n      </ion-item>\n      \n    </ion-list> -->\n\n    <ion-list  class="address_list">\n        <ion-item *ngFor="let item of list;let key=index">        \n          <button ion-button clear item-start icon-only  *ngIf="item.default_address">\n              <ion-icon name="md-checkmark" color="danger"></ion-icon>\n          </button>\n         <div (tap)="changeAddress(item._id)"  (press)="deleteAddress(key,item._id)">\n            <h2>{{item.name}}   {{item.phone}}</h2>\n            <p>{{item.address}}</p>\n         </div>\n      \n          <button ion-button clear item-end icon-only (tap)="editAddress(item)">\n            <ion-icon name="ios-create-outline"></ion-icon>\n          </button>\n        </ion-item>\n      \n      </ion-list>\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar >\n     <div class="add_address_btn" [navPush]="AddaddressPage">\n       +新建收获地址\n     </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"D:\ionicDEMO\jingdongdemoAPP\src\pages\address\address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
    ], AddressPage);
    return AddressPage;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditaddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EditaddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditaddressPage = /** @class */ (function () {
    function EditaddressPage(navCtrl, navParams, tools, Config, httpservices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tools = tools;
        this.Config = Config;
        this.httpservices = httpservices;
        this.addressList = [];
    }
    EditaddressPage.prototype.ionViewWillEnter = function () {
        this.addressList = this.navParams.get('item');
    };
    EditaddressPage.prototype.editAddress = function () {
        var _this = this;
        // 修改
        if (this.addressList.name != '' || this.addressList.phone != '' || this.addressList.address != '') {
            var userinfo = this.tools.getUserInfo();
            var json = {
                id: this.addressList._id,
                uid: userinfo._id,
                salt: userinfo.salt,
                name: this.addressList.name,
                phone: this.addressList.phone,
                address: this.addressList.address
            };
            console.log(json);
            var sign = this.tools.sign(json); /* 生成签名 */
            var api = 'api/editAddress';
            this.httpservices.doPost(api, {
                id: this.addressList._id,
                uid: userinfo._id,
                sign: sign,
                name: this.addressList.name,
                phone: this.addressList.phone,
                address: this.addressList.address
            }, function (data) {
                console.log(data);
                if (data.success) {
                    _this.navCtrl.pop();
                }
                else {
                    alert(data.message);
                }
            });
        }
        else {
            alert("收货地址错误咯");
        }
    };
    EditaddressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editaddress',template:/*ion-inline-start:"D:\ionicDEMO\jingdongdemoAPP\src\pages\editaddress\editaddress.html"*/'<!--\n  Generated template for the EditaddressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n--><ion-header>\n\n  <ion-navbar>\n    <ion-title>修改收获地址</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  \n    <ion-list >\n      <ion-item>\n        <ion-label flexed>姓名</ion-label>\n        <ion-input type="text" placeholder="姓名" [(ngModel)]="addressList.name" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label flexed>联系方式：</ion-label>\n        <ion-input type="text" placeholder="联系方式" [(ngModel)]="addressList.phone" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label flexed>收货地址</ion-label>\n        <ion-input type="text" placeholder="收货地址" [(ngModel)]="addressList.address" ></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button color="danger" (click)="editAddress()" class="address_btn">修改</button>\n</ion-content>\n'/*ion-inline-end:"D:\ionicDEMO\jingdongdemoAPP\src\pages\editaddress\editaddress.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__["a" /* ToolsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__["a" /* ToolsProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */]) === "function" && _e || Object])
    ], EditaddressPage);
    return EditaddressPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=editaddress.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__address_address__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_services_http_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_tools_tools__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrdersPage = /** @class */ (function () {
    function OrdersPage(navCtrl, navParams, storage, httpService, config, tools) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpService = httpService;
        this.config = config;
        this.tools = tools;
        this.list = [];
        this.userinfo = '';
        this.LoginPage = __WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginPage */];
        this.AddressPage = __WEBPACK_IMPORTED_MODULE_0__address_address__["a" /* AddressPage */];
        this.address = '';
    }
    OrdersPage.prototype.ionViewDidEnter = function () {
    };
    OrdersPage.prototype.ionViewWillEnter = function () {
        // 获取用户信息
        this.userinfo = this.tools.getUserInfo();
        // 获取订单信息
        this.list = this.storage.get('orders_data');
        //  console.log(this.list)
        if (this.userinfo) {
            this.getDefaultAddress();
        }
    };
    // 获取默认收货地址
    OrdersPage.prototype.getDefaultAddress = function () {
        var _this = this;
        var userinfo = this.userinfo;
        var json = {
            uid: userinfo['_id'],
            salt: userinfo.salt
        };
        var sign = this.tools.sign(json);
        // 请求数据
        var api = 'api/oneAddressList?uid=' + userinfo['_id'] + '&sign=' + sign;
        this.httpService.ruquestData(api, function (data) {
            console.log(data);
            if (data.suceess = true) {
                console.log(data.result);
                _this.address = data.result[0];
            }
            else {
                _this.address = '';
            }
        });
    };
    // 去结算
    OrdersPage.prototype.goPayment = function () {
        alert("余额不足");
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-orders',template:/*ion-inline-start:"D:\ionicDEMO\jingdongdemoAPP\src\pages\orders\orders.html"*/'<!--\n  Generated template for the OrdersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>确认订单</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="order">\n        <div class="address_list">\n\n          <ion-list *ngIf="userinfo && !address">\n              <ion-item [navPush]=\'AddressPage\'>\n                  <ion-icon name="ios-pin-outline" item-start></ion-icon>\n\n                  请添加您的收货地址\n                  <ion-icon name="ios-arrow-forward"  item-end></ion-icon>\n\n              </ion-item>\n          </ion-list>\n\n\n          <ion-list *ngIf="userinfo && address">\n            <ion-item [navPush]=\'AddressPage\'>\n                <h2>{{address.name}}   {{address.phone}}</h2>\n                <p>{{address.address}}</p>\n                <ion-icon name="ios-arrow-forward"  item-end></ion-icon>\n            </ion-item>\n        </ion-list>\n\n\n\n          <ion-list *ngIf="!userinfo">\n              <ion-item class="nologin">                \n                  <p>您还没有登录，登录后同步您的订单信息...</p>\n                  <button ion-button color="light"  [navPush]=\'LoginPage\' [navParams]="{history:\'order\'}">登录</button>\n                  \n              </ion-item>\n          </ion-list>\n\n        </div>\n\n        <div class="product_list">\n\n            <ion-list>\n              <ion-item *ngFor="let item of list" >\n                <ion-thumbnail item-left>\n                  <img [src]="config.apiUrl+item.product_pic" />\n                </ion-thumbnail>\n                <h2>{{item.product_title}}</h2>\n                <p><span class="price">¥{{item.product_price}}</span> <span class="count">x{{item.product_count}}</span></p>\n                \n                <p>属性：{{item.product_attr}}</p>\n\n              </ion-item>\n            </ion-list>\n\n\n              <ion-list inset class="submit_info">\n                  <ion-item>                   \n                    <p>在线支付</p>\n                    <p>京东快递+快递运输</p>\n                    <p>工作日、双休日于假日均可送货</p>\n                  \n                  </ion-item>\n                  <ion-item-divider>\n                    \n                  </ion-item-divider>\n                  <ion-item class="order_price">\n                      <ul>\n                        <li>商品总金额 <span>¥{{allPrice}}</span></li>\n                        <li>立减 <span>-¥0</span></li>\n                        <li>运费 <span>+¥0</span></li>\n                      </ul>\n                  </ion-item>\n\n                  <ion-item-divider>\n                    \n                  </ion-item-divider>\n                  <ion-item>\n                      <input [(ngModel)]=\'leaveWord\' type="text" placeholder="选填:给商家留言45字以内" />\n                  </ion-item>\n            \n              </ion-list>\n        </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n      <div class="order_footer">\n  \n        <span>实付款: ¥{{allPrice}}</span>\n       \n        <div class="buy_order" (tap)="goPayment()">\n            立即下单\n        </div>\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"D:\ionicDEMO\jingdongdemoAPP\src\pages\orders\orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_tools_tools__["a" /* ToolsProvider */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistersignPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registerpassword_registerpassword__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegistersignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistersignPage = /** @class */ (function () {
    function RegistersignPage(navCtrl, navParams, httpservices, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpservices = httpservices;
        this.storage = storage;
        this.code = ''; /* 默认空的验证码 */
        this.showcode = false; /*    在验证码倒计时和重新发送中切换  前面html中用ngif判断 */
        this.num = 5; /*  倒数计时的数量 */
        this.tel = '';
        this.tel = this.storage.get('reg_tel');
    }
    RegistersignPage.prototype.ionViewDidLoad = function () {
        this.doTimer();
    };
    RegistersignPage.prototype.goRegisterpasswordPage = function () {
        var _this = this;
        if (/^\d{4}$/.test(this.code)) {
            // 验证验证码是否正确
            var api = 'api/validateCode';
            this.httpservices.doPost(api, { "tel": this.tel, "code": this.code }, function (result) {
                console.log(result); /* 测试 */
                if (result.success) {
                    //  保存验证码
                    _this.storage.set('reg_code', _this.code);
                    // 跳转到下个页面
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registerpassword_registerpassword__["a" /* RegisterpasswordPage */]);
                }
                else {
                    alert("验证码错误，请重新输入");
                }
            });
        }
        else {
            alert("验证码位数不正确");
        }
    };
    // 倒计时的方法
    RegistersignPage.prototype.doTimer = function () {
        var _this = this;
        var timer = setInterval(function () {
            --_this.num;
            if (_this.num == 0) {
                clearInterval(timer);
                _this.showcode = true;
            }
        }, 1000);
    };
    // 发送验证码
    RegistersignPage.prototype.sendCode = function () {
        // 获取电话号码
        var _this = this;
        // console.log("请重新发送验证码")
        var api = 'api/sendCode';
        this.httpservices.doPost(api, { "tel": this.tel, "code": this.tel }, function (result) {
            console.log(result); /* 测试 */
            if (result.success) {
                _this.num = 10; /* 设置倒计时 */
                _this.doTimer(); /* 倒计时 */
                _this.showcode = false; /* 显示倒计按钮 */
            }
            else {
                alert("发送错误了噢，请重新发送");
            }
        });
    };
    RegistersignPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registersign',template:/*ion-inline-start:"D:\ionicDEMO\jingdongdemoAPP\src\pages\registersign\registersign.html"*/'<!--\n  Generated template for the RegistersignPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>发送短信界面</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="code-info">\n    <h4 class="positive">马上验证手机,激活你的账户</h4>\n    <p class="code-sign-p">验证码已通过短信方式发送至{{tel}},请输入验证码完成验证登录!</p>\n  </div>\n\n  <div class="sign-page">\n    <input type="text" [(ngModel)]="code" placeholder="验证码" maxlength="4">\n    <div class="timer" *ngIf="!showcode" >倒计时{{num}}</div>\n    <div class="timer" *ngIf="showcode"  (tap)="sendCode()">重新发送</div>\n  </div>\n\n  <button ion-button  block class="msg-btn" (tap)="goRegisterpasswordPage()" >下一步</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionicDEMO\jingdongdemoAPP\src\pages\registersign\registersign.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */]])
    ], RegistersignPage);
    return RegistersignPage;
}());

//# sourceMappingURL=registersign.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterpasswordPage = /** @class */ (function () {
    function RegisterpasswordPage(navCtrl, navParams, storage, httpservices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpservices = httpservices;
        this.tel = '';
        this.code = '';
        this.password = '';
        this.rpassword = '';
        this.tel = storage.get('reg_tel');
        this.code = storage.get('reg_code');
    }
    RegisterpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterpasswordPage');
    };
    RegisterpasswordPage.prototype.doRegister = function () {
        var _this = this;
        if (this.password != this.rpassword) {
            alert('确认密码和密码不一致');
        }
        else if (this.password.length < 6) {
            alert('密码长度不能小于六位');
        }
        else {
            var api = 'api/register';
            this.httpservices.doPost(api, { "tel": this.tel,
                "code": this.code,
                "password": this.password, }, function (result) {
                console.log(result); /* 测试 */
                if (result.success) {
                    // 保存用户信息
                    _this.storage.set('userinfo', result.userinfo[0]);
                    _this.navCtrl.popToRoot(); /* 回到根页面 */
                }
                else {
                    alert("注册失败");
                }
            });
        }
    };
    RegisterpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registerpassword',template:/*ion-inline-start:"D:\ionicDEMO\jingdongdemoAPP\src\pages\registerpassword\registerpassword.html"*/'<!--\n  Generated template for the RegisterpasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>填写密码界面</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list >\n  \n      <ion-item id="lf">\n          \n          <ion-input type="password" placeholder="请输入密码" [(ngModel)]="password"></ion-input>\n      </ion-item>\n      <ion-item id="lf">\n          \n          <ion-input type="password" placeholder="确认密码" [(ngModel)]="rpassword"></ion-input>\n      </ion-item>\n      \n      <ion-item no-lines class="reg-text" id="lf">\n        <span item-end>\n          本密码由6-26为字母、数字、特殊符号组成，注意大小写!\n        </span>\n      </ion-item>\n\n    </ion-list>\n\n     <button ion-button  block class="next-btn"  (click)="doRegister()" >完成</button>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\ionicDEMO\jingdongdemoAPP\src\pages\registerpassword\registerpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
    ], RegisterpasswordPage);
    return RegisterpasswordPage;
}());

//# sourceMappingURL=registerpassword.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CeshiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CeshiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CeshiPage = /** @class */ (function () {
    function CeshiPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.RegisterForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])],
            repassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])]
        });
        this.name = this.RegisterForm.controls['name'];
        this.email = this.RegisterForm.controls['email'];
        this.password = this.RegisterForm.controls['password'];
        this.repassword = this.RegisterForm.controls['repassword'];
    }
    CeshiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetPage');
    };
    CeshiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ceshi',template:/*ion-inline-start:"D:\ionicDEMO\jingdongdemoAPP\src\pages\ceshi\ceshi.html"*/'<!--\n  Generated template for the CeshiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>注册</ion-title>\n      </ion-navbar>\n  </ion-header>\n  <ion-content fullscreen>\n    <form [formGroup]="RegisterForm" (ngSubmit)="Register(RegisterForm.value)" novalidate>\n        <ion-input type="text" placeholder="用户名" value="" [formControl]="name" clearInput=true maxlength="15"></ion-input>\n        <div *ngIf="name.hasError(\'required\') && name.touched"   class="error-message" color="danger">请输入用户名</div>\n        <ion-input type="text" placeholder="邮箱" value="" [formControl]="email" clearInput=true maxlength="60"></ion-input>\n        <div *ngIf="email.hasError(\'required\') && email.touched" class="error-message" color="danger">请输入邮箱</div>\n        <div *ngIf="!email.hasError(\'required\')&&email.hasError(\'email\') && email.touched" class="error-message" color="danger">邮箱格式不正确</div>\n        <ion-input type="password" placeholder="密码" value="" [formControl]="password" clearInput=true></ion-input>\n        <div *ngIf="password.hasError(\'required\') && password.touched"  color="danger" class="error-message">请输入密码</div>\n        <div *ngIf="(password.hasError(\'minlength\')) && password.touched"  color="danger" class="error-message">密码长度最少为六位</div>\n        <ion-input type="password" placeholder="确认密码" value="" [formControl]="repassword" clearInput=true></ion-input>\n        <div *ngIf="repassword.hasError(\'required\') && repassword.touched" color="danger" class="error-message">请输入确认密码</div>\n        <div *ngIf="(repassword.hasError(\'minlength\')) && repassword.touched" color="danger" class="error-message">确认密码长度最少为六位</div>\n        <!--密码不一致的判断要在必填和位数判断后面，也就是它们两个都没有错误时，再去判断密码是否一样-->\n        <div *ngIf="!repassword.hasError(\'required\')&&!repassword.hasError(\'minlength\')&&password.value!=repassword.value" color="danger" class="error-message">两次输入的密码不一致</div>\n        <!--注册按钮原本只有!RegisterForm.valid，但由于密码不一致不是自带的，还要在这里单独加判断-->\n        <button ion-button block color="danger" type="submit" [disabled]="!RegisterForm.valid||(password.value!=repassword.value)">确认注册</button>\n    </form>\n</ion-content>\n  '/*ion-inline-end:"D:\ionicDEMO\jingdongdemoAPP\src\pages\ceshi\ceshi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CeshiPage);
    return CeshiPage;
}());

//# sourceMappingURL=ceshi.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productlist_productlist__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl, navParams, Config, httpservices) {
        // 右侧模拟数据
        // for (let i = 1; i < 21; i++) {
        //   this.reclist.push({
        //     pic:'../../assets/imgs/pc'+i+'.jpg',
        //     title:'第'+i+'张'
        //   })      
        //  }
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Config = Config;
        this.httpservices = httpservices;
        this.ProductlistPage = __WEBPACK_IMPORTED_MODULE_2__productlist_productlist__["a" /* ProductlistPage */];
        // public reclist=[];  左侧模拟数据
        // public textara=[];  右侧模拟数据
        this.leftcate = []; /* 左侧分类数据 */
        this.rightcate = []; /* 右侧分类数据 */
        //  左侧模拟数据
        //  for (let j = 1; j < 21; j++) {
        //   this.textara.push(`分类${j}`);      
        //  }
        this.getLeftCateData();
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    // 左侧分类的方法
    CategoryPage.prototype.getLeftCateData = function () {
        var _this = this;
        var api = 'api/pcate';
        this.httpservices.ruquestData(api, function (data) {
            console.log(data);
            _this.leftcate = data.result;
            _this.getRightCateData(_this.leftcate[0]['_id']);
        });
    };
    // 右侧分类的方法
    CategoryPage.prototype.getRightCateData = function (pid) {
        var _this = this;
        var api = 'api/pcate?pid=' + pid;
        this.httpservices.ruquestData(api, function (data) {
            console.log(data);
            _this.rightcate = data.result;
        });
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"D:\ionicDEMO\jingdongdemoAPP\src\pages\category\category.html"*/'<!--\n  Generated template for the CategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-searchbar></ion-searchbar>\n      <ion-buttons end>\n          <button  ion-button icon-only>\n            <ion-icon name="search"></ion-icon>\n          </button>\n        </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  phone\n<div class="cate-content">\n  <div class="cate-left">\n    <ion-list>\n      <ion-item *ngFor="let item of leftcate"  (tap)="getRightCateData(item[\'_id\'])">\n        <p>{{item.title}}</p>\n      </ion-item>\n      \n    </ion-list>\n  </div>\n\n  <div class="cate-right">\n    <ion-row>\n      <ion-col col-6 *ngFor="let item of rightcate" [navPush]="ProductlistPage" [navParams]="{\'cid\':item[\'_id\']}">    <!--  col总的为12   col-6即分为两份  col-4分为三份 以此类推 -->\n        <img [src]="Config.apiUrl+item.pic" alt="">\n          <p>{{item.title}}</p>\n      </ion-col>\n    </ion-row>\n  </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"D:\ionicDEMO\jingdongdemoAPP\src\pages\category\category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProductlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductlistPage = /** @class */ (function () {
    function ProductlistPage(navCtrl, navParams, httpService, config) {
        // for (let i = 1; i < 20; i++) {
        //   this.list.push({
        //     pic:'../../assets/imgs/pc'+i+'.jpg',
        //     title:'第'+i+'张'
        //   })
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.config = config;
        this.list = [];
        this.cid = ''; /* 获取空id */
        this.page = 1; /*  分页 */
        // } 
        // 获取传值
        // console.log(this.navParams.get("cid"));
        this.cid = this.navParams.get("cid");
        this.getProductList('');
    }
    ProductlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductlistPage');
    };
    ProductlistPage.prototype.getProductList = function (infiniteScroll) {
        var _this = this;
        var api = 'api/plist?cid=' + this.cid + '&page=' + this.page;
        this.httpService.ruquestData(api, function (data) {
            console.log(data);
            _this.list = _this.list.concat(data.result); /*  数据拼接 */
            if (infiniteScroll) {
                //  告诉ionic请求数据完成
                infiniteScroll.complete();
                if (data.result.length < 10) {
                    infiniteScroll.enable(false);
                }
            }
            ;
            _this.page++;
        });
    };
    // 加载更多
    ProductlistPage.prototype.doloadmore = function (infiniteScroll) {
        this.getProductList(infiniteScroll);
    };
    ProductlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productlist',template:/*ion-inline-start:"D:\ionicDEMO\jingdongdemoAPP\src\pages\productlist\productlist.html"*/'<!--\n  Generated template for the ProductlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-searchbar></ion-searchbar>\n      <ion-buttons end>\n          <button  ion-button icon-only>\n            <ion-icon name="search"></ion-icon>\n          </button>\n        </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="list-content" *ngIf="!flag" >\n\n    <div class="sub-header">\n      <div>综合</div>\n      <div>销量</div>\n      <div>价格</div>\n    </div>\n\n\n    <ion-list inset>\n      <ion-item *ngFor="let item of list" >\n        <ion-thumbnail item-left>\n          <img [src]="config.apiUrl+item.s_pic">\n        </ion-thumbnail>\n        <h2>{{item.title}}</h2>\n        <p>价格: <span class="price">{{item.price}}</span>元</p>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ion-infinite-scroll (ionInfinite)="doloadmore($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"D:\ionicDEMO\jingdongdemoAPP\src\pages\productlist\productlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
    ], ProductlistPage);
    return ProductlistPage;
}());

//# sourceMappingURL=productlist.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PcontentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_http_services_http_services__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PcontentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PcontentPage = /** @class */ (function () {
    function PcontentPage(navCtrl, navParams, config, httpservices, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.httpservices = httpservices;
        this.storage = storage;
        this.CartPage = __WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */];
        this.tabs = "plist"; /* 商品列表选中 */
        this.item = []; /*商品列表*/
        this.num = 1;
        this.carts_num = 0;
        // console.log(this.navParams.data.id) /* 测试打印数据 */
        this.requestData(this.navParams.data.id);
        // 计算购物车的数量
        this.carts_num = this.getCartsNum();
    }
    PcontentPage.prototype.ionViewDidLoad = function () {
        this.bindEvent();
    };
    PcontentPage.prototype.requestData = function (id) {
        var _this = this;
        //http://39.108.159.135/api/pcontent?id=59f6a2d27ac40b223cfdcf81
        var api = 'api/pcontent?id=' + id;
        this.httpservices.ruquestData(api, function (data) {
            // console.log(data);
            _this.item = data.result;
        });
    };
    PcontentPage.prototype.bindEvent = function () {
        var attrDom = this.myattr.nativeElement; /* 获取#myattr里所有信息 */
        attrDom.onclick = function (c) {
            // console.log(e.srcElement.nodeName);  /* 找到目标的标签是什么 如：DIV SPAN STRONG等 */
            // console.log(e.target)  /*  标签内的所有内容，class也包含 */
            if (c.srcElement.nodeName == 'SPAN') {
                var ele = c.target; /* 获取元素内所有信息 */
                var parentNode = ele.parentNode; /* 获取当前元素的父节点 */
                var children = parentNode.children; /* 获取当前元素父节点下面的所有子节点 */
                for (var i = 0; i < children.length; i++) {
                    children[i].className = ''; /* 设置其他元素样式都为空 */
                }
                ele.className = 'active'; /* 设置当前元素为有的 */
            }
        };
    };
    PcontentPage.prototype.addCart = function () {
        var product_title = this.item['title'];
        var product_id = this.item['_id'];
        // console.log(product_id) 
        var product_pic = this.item['pic'];
        var product_price = this.item['price'];
        var product_count = this.num; /*  商品数量 */
        // 获取商品属性
        var product_attr = '';
        var attrDom = document.getElementById("myattr");
        // console.log(attrDom);
        var activeDom = attrDom.getElementsByClassName('active');
        // console.log(activeDom);
        for (var i = 0; i < activeDom.length; i++) {
            // product_attr+=activeDom[i].innerHTML;
            var str = activeDom[i].innerHTML.replace(/^\s+|\s+$/g, ""); /* 正则去掉前后空格 */
            product_attr += str;
        }
        var json = {
            'product_title': product_title,
            'product_id': product_id,
            product_pic: product_pic,
            product_price: product_price,
            product_count: product_count,
            product_attr: product_attr,
            checked: true /*默认加入购物车 数据选中*/
        };
        // console.log(json)
        // 加入购物车保存到localstorage 如果存在 当前数量+1  如果不存在就写入
        var storageData = this.storage.get('carts_data');
        if (storageData) {
            // 判断购物车里面有没有当前这条数据
            if (this.hasData(storageData, json.product_id)) {
                // 修改数量
                for (var i = 0; i < storageData.length; i++) {
                    if (storageData[i].product_id == product_id) {
                        storageData[i].product_count += json.product_count; /*以前的数量加上选择的数量*/
                    }
                }
            }
            else {
                storageData.push(json);
            }
            // 重新写入数据
            this.storage.set('carts_data', storageData);
        }
        else {
            var temp = [];
            temp.push(json);
            this.storage.set('carts_data', temp);
        }
        this.carts_num += json.product_count; /*点击加入购物车改变 购物车数量*/
    };
    // addCart2(){
    //   //获取商品数据
    //   var product_title=this.item['title'];
    //   var product_id=this.item['_id'];
    //   var product_pic=this.item['pic'];
    //   var product_price=this.item['price'];
    //   var product_count=this.num;  /*商品数量*/
    //   //商品的属性
    //   var product_attr='';
    //   //es5 获取dom节点的方式
    //   var activeDom=document.querySelectorAll('#myattr .active');
    //   // console.log(activeDom);
    //   for(var i=0;i<activeDom.length;i++){
    //     product_attr+=activeDom[i].innerHTML;
    //   }
    //   var json={
    //     'product_title':product_title,
    //     'product_id':product_id,
    //     product_pic,  /*es6 属性的简写*/
    //     product_price,
    //     product_count,
    //     product_attr,
    //     checked:true  /*默认加入购物车 数据选中*/     
    //   }
    //   // console.log(json);
    //   //加入购物车保存到localstorage   如果存在 当前数量+1  如果不存在写入
    //   var storageData=this.storage.get('carts_data');
    //   if(storageData){  /*有数据*/
    //     //判断购物车里面有没有当前这条数据  
    //     if(this.hasData(storageData,json.product_id)){  /*购物车有数据*/
    //         //修改刚才购物车里面的数量
    //         for(var i=0;i<storageData.length;i++){
    //           if(storageData[i].product_id==product_id){
    //              storageData[i].product_count+=json.product_count;  /*以前的数量加上选择的数量*/
    //           }
    //         }
    //     }else{  /*购物车没有数据*/
    //       storageData.push(json);
    //     }
    //     //重新写入
    //     this.storage.set('carts_data',storageData);
    //   }else{  /*没有数据  第一次加入购物车*/
    //       var tempArr=[];
    //       tempArr.push(json);
    //       this.storage.set('carts_data',tempArr);
    //   }
    //   this.carts_num+=json.product_count;   /*点击加入购物车改变 购物车数量*/
    // }
    PcontentPage.prototype.addNum = function () {
        this.num += 1;
    };
    PcontentPage.prototype.cutNum = function () {
        if (this.num > 1) {
            this.num -= 1;
        }
    };
    PcontentPage.prototype.hasData = function (storageData, product_id) {
        if (storageData) {
            for (var i = 0; i < storageData.length; i++) {
                if (storageData[i].product_id == product_id) {
                    return true;
                }
            }
        }
        return false;
    };
    //获取购物车数量
    PcontentPage.prototype.getCartsNum = function () {
        var num = 0;
        var storageData = this.storage.get('carts_data');
        if (storageData) {
            for (var i = 0; i < storageData.length; i++) {
                num += storageData[i].product_count;
            }
        }
        return num;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myattr'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], PcontentPage.prototype, "myattr", void 0);
    PcontentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pcontent',template:/*ion-inline-start:"D:\ionicDEMO\jingdongdemoAPP\src\pages\pcontent\pcontent.html"*/'<!--\n  Generated template for the PcontentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-segment [(ngModel)]="tabs" color="danger">\n      <ion-segment-button value="plist">\n        <!-- <ion-icon name="camera"></ion-icon> -->\n        商品\n      </ion-segment-button>\n      <ion-segment-button value="pcontent">\n        <!-- <ion-icon name="bookmark"></ion-icon> -->\n        详情\n      </ion-segment-button>\n      <ion-segment-button value="comment">\n          <!-- <ion-icon name="bookmark"></ion-icon> -->\n          评论\n        </ion-segment-button>\n    </ion-segment>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="all-contnet">\n      <div [ngSwitch]="tabs">\n\n        <div class="tabs1" *ngSwitchCase="\'plist\'">  \n          <div class="tabs1-img">\n             <img [src]="config.apiUrl+item.pic" />   \n          </div>\n          <div class="tabs1-content">\n            <div class="tabs1-content-title">\n              <h2>{{item.title}}</h2>\n              <p>{{item.sub_title}}</p>\n            </div>\n            <div class="tabs1-content-money  mb10">\n              <span class="oldmoney">原价:<s>￥{{item.price}}</s></span>\n              <span class="nowmoney">特价:<span>￥{{item.old_price}}</span></span>\n            </div>\n\n            <div class="other mb10">\n              <div  #myattr  id="myattr">\n                <div *ngIf="item.attr">\n                    <div class="color" *ngFor="let attr of item.attr" >\n                      <strong>{{attr.cate}}:</strong>\n                      <span *ngFor="let cl of attr.list;let key=index;"  [ngClass]="{\'active\':key==0}">\n                        {{cl}}\n                      </span>\n                    \n                    </div>\n                </div>\n              </div>\n\n              <div class="number">\n                  <div class="cart-info">\n                    <div class="money">数量：</div>\n                    <div class="add">\n                      <div class="add-left" (click)="cutNum()">-</div>\n                      <div class="add-text">\n                        <input type="text" name="num" id="" placeholder="1" [(ngModel)]="num">\n                      </div>\n                      <div class="add-right" (click)="addNum()">+</div>\n                    </div>\n                  </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n        <div class="tabs2" *ngSwitchCase="\'pcontent\'">\n          <div [innerHTML]=\'item.content\'>\n\n          </div>\n        </div>\n        <div class="tabs3" *ngSwitchCase="\'comment\'">\n          评论\n        </div>\n\n      </div>\n  </div>\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar >\n\n    <div class="footer_bar">\n      <div class="carticon" [navPush]="CartPage">            \n          <ion-icon name="cart"></ion-icon> \n          <!-- <p>购物车</p> -->\n          <ion-badge color="danger">{{carts_num}}</ion-badge>\n      </div>\n      \n      <div class="addcart" (click)="addCart()" >\n          加入购物车\n      </div>\n      <div class="buy">\n          立即购买\n      </div>\n    </div>\n\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"D:\ionicDEMO\jingdongdemoAPP\src\pages\pcontent\pcontent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
    ], PcontentPage);
    return PcontentPage;
}());

//# sourceMappingURL=pcontent.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalPage = /** @class */ (function () {
    function PersonalPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    PersonalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalPage');
    };
    PersonalPage.prototype.loginOut = function () {
        //用户信息保存在localstorage
        this.storage.remove('userinfo');
        //跳转到用户中心
        this.navCtrl.popToRoot();
    };
    PersonalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personal',template:/*ion-inline-start:"D:\ionicDEMO\jingdongdemoAPP\src\pages\personal\personal.html"*/'<!--\n  Generated template for the PersonalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>账户资料</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list inset class="personal">\n    <ion-item>\n         头像\n        <span class="item-note">\n            <img  src="../../assets/imgs/pc16.jpg" class="avatar"/>\n        </span>\n        <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n    </ion-item>\n\n      <ion-item>\n        \n        用户名\n        <span class="item-note">\n          张全蛋\n        </span>         \n        \n        <ion-icon name="ios-arrow-forward" item-end style="visibility:hidden"></ion-icon>\n      </ion-item>\n\n      <ion-item class="item-icon-right">\n          \n          昵称\n        <span class="item-note">\n          天王盖地虎\n        </span>\n        <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item>            \n        <ion-label>性别</ion-label>\n        <ion-select>\n          <ion-option value="man" selected="true">男</ion-option>\n          <ion-option value="woman">女</ion-option>\n          <ion-option value="null">保密</ion-option>\n        </ion-select>\n\n        \n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>出生年月</ion-label>\n        <ion-select>\n          <ion-option value="01">1月</ion-option>\n          <ion-option value="02">2月</ion-option>\n          <ion-option value="03" selected="true">3月</ion-option>\n          <ion-option value="04">4月</ion-option>\n          <ion-option value="05">5月</ion-option>\n          <ion-option value="06">6月</ion-option>\n          <ion-option value="07">7月</ion-option>\n          <ion-option value="08">8月</ion-option>\n          <ion-option value="09">9月</ion-option>\n          <ion-option value="10">10月</ion-option>\n          <ion-option value="11">11月</ion-option>\n          <ion-option value="12">12月</ion-option>\n        </ion-select>\n        \n        <ion-select>\n          <ion-option>2019年</ion-option>\n          <ion-option>2018年</ion-option>\n          <ion-option>2017年</ion-option>\n          <ion-option>2016年</ion-option>\n          <ion-option>2015年</ion-option>\n          <ion-option selected="true">2014年</ion-option>\n          <ion-option>2013年</ion-option>\n          <ion-option>2012年</ion-option>\n          <ion-option>2011年</ion-option>\n          <ion-option>2010年</ion-option>\n          <ion-option>2009年</ion-option>\n        </ion-select>\n        \n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n</ion-list>\n\n<button ion-button block color="danger" class="exit_btn" (tap)="loginOut()">退出登录</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionicDEMO\jingdongdemoAPP\src\pages\personal\personal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
    ], PersonalPage);
    return PersonalPage;
}());

//# sourceMappingURL=personal.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Register2Page = /** @class */ (function () {
    function Register2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Register2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    Register2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register2',template:/*ion-inline-start:"D:\ionicDEMO\jingdongdemoAPP\src\pages\register2\register2.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>注册界面</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <body class="no-padding reader-black-font" lang="zh-CN">\n    <div class="sign">\n      <div class="logo"><a href="/"><img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png"\n            alt="Logo"></a></div>\n      <div class="main">\n\n\n\n        <h4 class="title">\n          <div class="normal-title">\n            <a class="" href="/sign_in">登录</a>\n            <b>·</b>\n            <a id="js-sign-up-btn" class="active" href="/sign_up">注册</a>\n          </div>\n        </h4>\n        <div class="js-sign-up-container">\n          <form class="new_user" id="new_user" action="/users/register" accept-charset="UTF-8" method="post"><input\n              name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="1ClWj94TToX5o/orEHlRGhliyXHoFv0Km7lPncTFL8QJ/xUJt8PxICyZoAAmmu2iFrrELZHbJsJOxo4lOaVzXA==">\n            <div class="input-prepend restyle">\n              <input placeholder="你的昵称" type="text" value="" name="user[nickname]" id="user_nickname">\n              <i class="iconfont ic-user"></i>\n            </div>\n            <div class="input-prepend restyle no-radius js-normal">\n              <input type="hidden" value="CN" name="user[mobile_number_country_code]" id="user_mobile_number_country_code">\n              <input placeholder="手机号" type="tel" name="user[mobile_number]" id="user_mobile_number">\n              <i class="iconfont ic-phonenumber"></i>\n            </div>\n            <input type="hidden" name="oversea" id="oversea" value="false">\n            <input type="hidden" name="force_user_nonexist" id="force_user_nonexist" value="true">\n            <div class="input-prepend restyle no-radius security-up-code js-security-number hide">\n              <input type="text" name="sms_code" id="sms_code" placeholder="手机验证码">\n              <i class="iconfont ic-verify"></i>\n              <a tabindex="-1" class="btn-up-resend js-send-code-button disable" href="javascript:void(0);" id="send_code">发送验证码</a>\n              <div>\n                <div class="captcha"><input name="captcha[validation][challenge]" autocomplete="off" type="hidden"\n                    value="3b326436b36e6a767ef8fd9c95d29d3f"> <input name="captcha[validation][gt]" autocomplete="off"\n                    type="hidden" value="ec47641997d5292180681a247db3c92e"> <input name="captcha[validation][validate]"\n                    autocomplete="off" type="hidden" value=""> <input name="captcha[validation][seccode]" autocomplete="off"\n                    type="hidden" value=""> <input name="captcha[id]" autocomplete="off" type="hidden" value="">\n                  <div id="geetest-area" class="geetest"></div>\n                </div>\n              </div>\n            </div>\n            <input type="hidden" name="security_number" id="security_number">\n            <div class="input-prepend">\n              <input placeholder="设置密码" type="password" name="user[password]" id="user_password">\n              <i class="iconfont ic-password"></i>\n            </div>\n            <input type="submit" name="commit" value="注册" class="sign-up-button" id="sign_up_btn" data-disable-with="注册">\n            <p class="sign-up-msg">点击 “注册” 即表示您同意并愿意遵守简书<br> <a target="_blank" href="http://www.jianshu.com/p/c44d171298ce">用户协议</a>\n              和 <a target="_blank" href="http://www.jianshu.com/p/2ov8x3">隐私政策</a> 。</p>\n          </form>\n          <!-- 更多注册方式 -->\n          <div class="more-sign">\n            <h6>社交帐号直接注册</h6>\n            <ul>\n              <li><a id="weixin" class="weixin" target="_blank" href="/users/auth/wechat"><i class="iconfont ic-wechat"></i></a></li>\n              <li><a id="qq" class="qq" target="_blank" href="/users/auth/qq_connect"><i class="iconfont ic-qq_connect"></i></a></li>\n            </ul>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <!-- Javascripts\n        ================================================== -->\n    <!-- Placed at the end of the document so the pages load faster -->\n    <script type="application/json" data-name="page-data">\n      {\n        "user_signed_in": false,\n        "locale": "zh-CN",\n        "os": "windows",\n        "read_mode": "day",\n        "read_font": "font2"\n      }\n\n    </script>\n\n    <script src="//cdn2.jianshu.io/assets/web-base-059fad59acbd6e000110.js" crossorigin="anonymous"></script>\n    <script src="//cdn2.jianshu.io/assets/web-a844dd0ee5f24ad4d2bc.js" crossorigin="anonymous"></script>\n    <script src="//cdn2.jianshu.io/assets/web/pages/common/signup/entry-5d55473c92d21e013cde.js" crossorigin="anonymous"></script>\n    <script>\n      (function () {\n        var bp = document.createElement(\'script\');\n        var curProtocol = window.location.protocol.split(\':\')[0];\n        if (curProtocol === \'https\') {\n          bp.src = \'https://zz.bdstatic.com/linksubmit/push.js\';\n        } else {\n          bp.src = \'http://push.zhanzhang.baidu.com/push.js\';\n        }\n        var s = document.getElementsByTagName("script")[0];\n        s.parentNode.insertBefore(bp, s);\n      })();\n\n    </script>\n\n\n\n    <div style="position: static; width: 0px; height: 0px; border: none; padding: 0px; margin: 0px;">\n      <div id="trans-tooltip">\n        <div id="tip-left-top" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-left-top.png&quot;);"></div>\n        <div id="tip-top" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-top.png&quot;) repeat-x;"></div>\n        <div id="tip-right-top" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-right-top.png&quot;);"></div>\n        <div id="tip-right" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-right.png&quot;) repeat-y;"></div>\n        <div id="tip-right-bottom" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-right-bottom.png&quot;);"></div>\n        <div id="tip-bottom" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-bottom.png&quot;) repeat-x;"></div>\n        <div id="tip-left-bottom" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-left-bottom.png&quot;);"></div>\n        <div id="tip-left" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-left.png&quot;);"></div>\n        <div id="trans-content"></div>\n      </div>\n      <div id="tip-arrow-bottom" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-arrow-bottom.png&quot;);"></div>\n      <div id="tip-arrow-top" style="background: url(&quot;chrome-extension://ccfjcepmiaackkccabgeeegeklgifffd/imgs/map/tip-arrow-top.png&quot;);"></div>\n    </div>\n    <div class="geetest_panel geetest_wind" style="display: none;">\n      <div class="geetest_panel_ghost"></div>\n      <div class="geetest_panel_box">\n        <div class="geetest_other_offline geetest_panel_offline"></div>\n        <div class="geetest_panel_loading">\n          <div class="geetest_panel_loading_icon"></div>\n          <div class="geetest_panel_loading_content">智能验证检测中</div>\n        </div>\n        <div class="geetest_panel_success">\n          <div class="geetest_panel_success_box">\n            <div class="geetest_panel_success_show">\n              <div class="geetest_panel_success_pie"></div>\n              <div class="geetest_panel_success_filter"></div>\n              <div class="geetest_panel_success_mask"></div>\n            </div>\n            <div class="geetest_panel_success_correct">\n              <div class="geetest_panel_success_icon"></div>\n            </div>\n          </div>\n          <div class="geetest_panel_success_title">通过验证</div>\n        </div>\n        <div class="geetest_panel_error">\n          <div class="geetest_panel_error_icon"></div>\n          <div class="geetest_panel_error_title">网络超时</div>\n          <div class="geetest_panel_error_content">请点击此处重试</div>\n          <div class="geetest_panel_error_code"></div>\n        </div>\n        <div class="geetest_panel_footer" style="display: none;">\n          <div class="geetest_panel_footer_logo"></div>\n          <div class="geetest_panel_footer_copyright">由极验提供技术支持</div>\n        </div>\n        <div class="geetest_panel_next"></div>\n      </div>\n    </div>\n  </body>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionicDEMO\jingdongdemoAPP\src\pages\register2\register2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Register2Page);
    return Register2Page;
}());

//# sourceMappingURL=register2.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, httpService, config, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.config = config;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.flag = false; /* 是否有关键词关键词开关 */
        this.list = []; /*  模拟商品数据 */
        this.keywords = ''; /*  搜索关键词 */
        this.page = 1; /* 分页默认为1 */
        this.hasData = true; /* 是否有数据 */
        this.historyList = []; /* 历史纪录的数据 */
        this.getHistory();
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    // 点击历史纪录执行的方法
    SearchPage.prototype.goSearch = function (keywords) {
        // console.log(keywords);
        this.keywords = keywords;
        this.getSearchList('');
    };
    SearchPage.prototype.getSearchList = function (infiniteScroll) {
        var _this = this;
        if (!infiniteScroll) {
            this.page = 1;
            this.hasData = true;
            this.content.scrollToTop(0); /*回到顶部*/
            this.savehistory(); // 调用保存历史纪录的方法
        }
        // console.log(this.keywords) /* 检测是否触发 */
        var api = 'api/plist?search=' + this.keywords + '&page' + this.page;
        this.httpService.ruquestData(api, function (data) {
            // console.log(data);
            if (_this.page == 1) {
                _this.list = data.result;
            }
            else {
                _this.list = _this.list.concat(data.result); /* 拼接数据 */
            }
            _this.flag = true; /* 显示商品列表 */
            if (infiniteScroll) {
                //  告诉ionic请求数据完成
                infiniteScroll.complete();
                /*没有数据停止上拉更新*/
                if (data.result < 10) {
                    _this.hasData = false;
                }
            }
            _this.page++;
        });
    };
    //加载更多
    SearchPage.prototype.doLoadMore = function (infiniteScroll) {
        this.getSearchList(infiniteScroll);
    };
    SearchPage.prototype.savehistory = function () {
        // 1.localstorage获取历史纪录
        var history = this.storage.get('historyData');
        // 2.判断历史纪录是否存在
        if (history) {
            if (history.indexOf(this.keywords) == -1) {
                history.push(this.keywords);
                // 重新写入
                this.storage.set('historyData', history);
            }
        }
        else {
            this.historyList.push(this.keywords);
            // 写入到localstorage中
            this.storage.set('historyData', this.historyList);
        }
    };
    // 获取历史纪录
    SearchPage.prototype.getHistory = function () {
        var history = this.storage.get('historyData');
        if (history) {
            this.historyList = history;
        }
    };
    SearchPage.prototype.removeHistroy = function (keywords) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '确定要删除么？',
            message: '真的要删除这个历史纪录么？',
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        var index = _this.historyList.indexOf(keywords);
                        // console.log(index)
                        _this.historyList.splice(index, 1);
                        _this.storage.set('historyData', _this.historyList);
                    }
                }
            ]
        });
        alert.present();
        // var index=this.historyList.indexOf(keywords);
        // // console.log(index)
        // this.historyList.splice(index,1)
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], SearchPage.prototype, "content", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"D:\ionicDEMO\jingdongdemoAPP\src\pages\search\search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-searchbar [(ngModel)]="keywords"></ion-searchbar>\n    <ion-buttons end>\n        <button  ion-button icon-only (tap)="getSearchList()">\n          <!-- <ion-icon name="search"></ion-icon> -->\n          搜索\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="search-content" *ngIf="!flag" >\n    <!-- 热搜 -->\n  <div class="hotsearch">\n    <h3 class="search-title">热搜</h3>\n    <p>\n      <span>手机</span>\n      <span>电脑</span>\n      <span>服饰</span>\n      <span>生活</span>\n      <span>零食</span>\n    </p>\n  </div>\n<!-- 历史搜索 -->\n  <div class="history" *ngIf="historyList.length>0" >\n    <h3 class="search-title">历史搜索</h3>\n    <ion-list>\n      <ion-item *ngFor="let item of historyList" (press)="removeHistroy(item)" (tap)="goSearch(item)" >{{item}}</ion-item>\n    </ion-list>\n  </div>\n  </div>\n  <div class="list-content" *ngIf="flag" >\n\n    <div class="sub-header">\n      <div>综合</div>\n      <div>销量</div>\n      <div>价格</div>\n    </div>  \n\n\n    <ion-list inset>\n      <ion-item *ngFor="let item of list" >\n        <ion-thumbnail item-left>\n           <img [src]="config.apiUrl+item.s_pic"  />            \n        </ion-thumbnail>\n        <h2> {{item.title}}</h2>\n        <p>价格:<span class="price">{{item.price}}</span>元</p>           \n      </ion-item>\n     </ion-list>\n\n     <ion-infinite-scroll (ionInfinite)="doLoadMore($event)" *ngIf="hasData" >\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </div>\n\n \n  \n\n</ion-content>\n'/*ion-inline-end:"D:\ionicDEMO\jingdongdemoAPP\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HttpServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpServicesProvider = /** @class */ (function () {
    function HttpServicesProvider(http, jsonp, Config) {
        this.http = http;
        this.jsonp = jsonp;
        this.Config = Config;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        console.log('Hello HttpServicesProvider Provider');
    }
    // 下面是封装的公共请求数据方法
    // apiUrl：api/focus   用&拼接callback
    // apiUrl：api/plist?page=1   用?拼接callback
    HttpServicesProvider.prototype.ruquestData = function (apiUrl, callback) {
        //                      ↓ ==-1表示不存在问号
        if (apiUrl.indexOf('?') == -1) {
            var api = this.Config.apiUrl + apiUrl + '?callback=JSONP_CALLBACK'; /*  没有问号 */
        }
        else {
            var api = this.Config.apiUrl + apiUrl + '&callback=JSONP_CALLBACK'; /*   有问号  */
            // http://39.108.159.135/  +  paid/plist?is_best=1  +  &callback=JSONP_CALLBACK
        }
        //              ↓ api是config的地址前缀+上apiUrl传过来的参数+上是否回调
        this.jsonp.get(api).subscribe(function (data) {
            // console.log(data);
            callback(data['_body']); /*回调函数*/
        }, function (err) {
            console.log(err);
        });
    };
    // 封装post提交数据的方法
    HttpServicesProvider.prototype.doPost = function (apiUrl, json, callback) {
        var api = this.Config.apiUrl + apiUrl;
        this.http.post(api, JSON.stringify(json), { headers: this.headers })
            .subscribe(function (res) {
            callback(res.json());
        });
    };
    HttpServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */],
            __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */]])
    ], HttpServicesProvider);
    return HttpServicesProvider;
}());

//# sourceMappingURL=http-services.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register2_register2__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_personal__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_services_http_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, navParams, storage, httpservices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpservices = httpservices;
        this.LoginPage = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
        this.Register2Page = __WEBPACK_IMPORTED_MODULE_3__register2_register2__["a" /* Register2Page */];
        this.RegisterPage = __WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */];
        this.PersonalPage = __WEBPACK_IMPORTED_MODULE_5__personal_personal__["a" /* PersonalPage */];
        // public isLogin=false;
        this.userinfo = '';
    }
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    UserPage.prototype.ionViewWillEnter = function () {
        var userinfo = this.storage.get("userinfo");
        if (userinfo && userinfo.username) {
            this.userinfo = userinfo;
        }
        else {
            this.userinfo = '';
        }
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"D:\ionicDEMO\jingdongdemoAPP\src\pages\user\user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>用户</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="login" *ngIf="!userinfo" >\n    <div class="usering">\n        <img src="../../assets/imgs/pc5.jpg" />\n    </div>\n\n    <div class="login-btn">\n      <button ion-button [navPush]=\'LoginPage\'>登陆</button>\n      <button ion-button [navPush]=\'RegisterPage\'>注册</button>\n    </div>\n\n  </div>\n\n  <ion-list *ngIf="userinfo" >\n    <ion-item [navPush]="PersonalPage">\n        <ion-avatar item-start>\n          <img src="../../assets/imgs/pc19.jpg">\n        </ion-avatar>\n        <h2>用户名:{{userinfo.username}}</h2>\n        <p>璀璨钻石</p>\n        <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-list inset >\n      <ion-item-divider></ion-item-divider>\n      <ion-item color="light">\n          <ion-icon name="list" item-start></ion-icon>\n            <span>我的订单</span>\n          <ion-icon name="ios-paper-outline" item-end></ion-icon>\n      </ion-item>\n\n      \n      <ion-item color="light">\n          <ion-icon name="list" item-start></ion-icon>\n            <span>待付款</span>\n          <ion-icon name="ios-card-outline" item-end></ion-icon>\n      </ion-item>\n\n      \n      <ion-item color="light">\n          <ion-icon name="list" item-start></ion-icon>\n            <span>待发货</span>\n          <ion-icon name="jet" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item color="light">\n          <ion-icon name="list" item-start></ion-icon>\n            <span>待收货</span>\n          <ion-icon name="basket" item-end></ion-icon>\n      </ion-item>\n\n\n      <ion-item-divider></ion-item-divider>\n      <ion-item color="light">\n          <ion-icon name="list" item-start></ion-icon>\n            <span>我的订单</span>\n          <ion-icon name="heart" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item color="light">\n          <ion-icon name="list" item-start></ion-icon>\n            <span>我的订单</span>\n          <ion-icon name="contacts" item-end></ion-icon>\n      </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\ionicDEMO\jingdongdemoAPP\src\pages\user\user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = /** @class */ (function () {
    function StorageProvider(http) {
        this.http = http;
        console.log('Hello StorageProvider Provider');
    }
    // 储存内容到storage
    StorageProvider.prototype.set = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value)); /* 对象转换成字符串 */
    };
    // 获取storage的内容
    StorageProvider.prototype.get = function (key) {
        return JSON.parse(localStorage.getItem(key)); /* 字符串转换成对象 */
    };
    // 删除storage的内容
    StorageProvider.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConfigProvider = /** @class */ (function () {
    function ConfigProvider() {
        // 公共请求数据地址前缀
        this.apiUrl = "http://39.108.159.135/";
        console.log('Hello ConfigProvider Provider');
    }
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addaddress/addaddress.module": [
		292,
		16
	],
	"../pages/address/address.module": [
		293,
		15
	],
	"../pages/cart/cart.module": [
		294,
		14
	],
	"../pages/category/category.module": [
		295,
		13
	],
	"../pages/ceshi/ceshi.module": [
		296,
		12
	],
	"../pages/editaddress/editaddress.module": [
		297,
		11
	],
	"../pages/login/login.module": [
		298,
		10
	],
	"../pages/orders/orders.module": [
		299,
		9
	],
	"../pages/pcontent/pcontent.module": [
		300,
		8
	],
	"../pages/personal/personal.module": [
		301,
		7
	],
	"../pages/productlist/productlist.module": [
		302,
		6
	],
	"../pages/register/register.module": [
		303,
		4
	],
	"../pages/register2/register2.module": [
		304,
		5
	],
	"../pages/registerpassword/registerpassword.module": [
		305,
		3
	],
	"../pages/registersign/registersign.module": [
		306,
		2
	],
	"../pages/search/search.module": [
		307,
		1
	],
	"../pages/user/user.module": [
		308,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// 自定义界面



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__category_category__["a" /* CategoryPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionicDEMO\jingdongdemoAPP\src\pages\tabs\tabs.html"*/'<ion-tabs class="mytabs">\n  <ion-tab [root]="tab1Root" tabTitle="主页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="分类" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="购物车" tabIcon="cart"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="我的" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\ionicDEMO\jingdongdemoAPP\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_pcontent_pcontent__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_services_http_services__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// 商品详情




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, Config, httpservices, http, jsonp) {
        this.navCtrl = navCtrl;
        this.Config = Config;
        this.httpservices = httpservices;
        this.http = http;
        this.jsonp = jsonp;
        this.focusList = []; /* 轮播图数组 */
        this.hotList = []; /* 热门商品 */
        // public reclist=[];
        // public recListWidth='';
        this.bestList = []; /* 精品推荐 */
        this.bestListWidth = ''; /*  精品推荐数据长度 */
        this.PcontentPage = __WEBPACK_IMPORTED_MODULE_3__pages_pcontent_pcontent__["a" /* PcontentPage */];
        // 页面加载时调用方法: 
        // 轮播图
        this.goFocus();
        // 精品推荐
        this.getBestProduct();
        // 猜你喜欢
        this.gethotProduct();
        //     跟随上面的reclist
        // for (let i = 1; i < 21; i++) {
        //  this.reclist.push({
        //    pic:'../../assets/imgs/pc'+i+'.jpg',
        //    title:'第'+i+'张'
        //  })      
        // }
        // this.recListWidth=this.reclist.length*500+'px';   
    } /* constructor */
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.goSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    HomePage.prototype.goFocus = function () {
        var that = this;
        this.httpservices.ruquestData('api/focus', function (data) {
            // console.log(data);
            that.focusList = data.result;
        });
    };
    HomePage.prototype.getBestProduct = function () {
        var _this = this;
        /* ↓是api接口 */
        this.httpservices.ruquestData('api/plist?is_best=1', function (data) {
            // console.log(data);
            _this.bestList = data.result;
            _this.bestListWidth = _this.bestList.length * 500 + 'px'; /* 总宽度 */
        });
    };
    HomePage.prototype.gethotProduct = function () {
        var _this = this;
        // 地址:http:/39.108.159.135/api/plist?is_hot=1
        /* ↓是api接口 */
        this.httpservices.ruquestData('api/plist?is_hot=1', function (data) {
            // console.log(data);
            _this.hotList = data.result;
        });
    };
    // 同步测试
    HomePage.prototype.ceshi = function () {
        alert("本事件仅仅是测试使用");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ionicDEMO\jingdongdemoAPP\src\pages\home\home.html"*/'<ion-header>\n  <!-- <ion-navbar>\n    <ion-title>主页</ion-title>\n  </ion-navbar> -->\n  <ion-toolbar color="light">\n      <ion-searchbar (tap)="goSearch()" ></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n<!-- 下拉刷新 -->\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n          pullingIcon="arrow-dropdown"\n          pullingText="松开刷新"\n          refreshingSpinner="circles"\n          refreshingText="刷新中..">\n        </ion-refresher-content>\n      </ion-refresher>\n\n  <ion-slides pager="true" loop="true" autoplay="2000" *ngIf="focusList.length>0">\n\n    <ion-slide *ngFor="let item of focusList" >\n      <img [src]="Config.apiUrl+item.pic" alt="">\n    </ion-slide>\n\n  </ion-slides>\n\n  <div class="home-title">精品推荐</div>\n\n  <div class="slide_product">\n      <ion-scroll scrollX="true" >\n<!-- 外层的ion-scroll是100% 里面元素的宽度要大于100% -->\n          <ul class="clearfix" [ngStyle]="{\'width\': bestListWidth}">\n              <li *ngFor="let item of bestList" [navPush]="PcontentPage" [navParams]="{\'id\':item[\'_id\']}">\n        \n                <img [src]="Config.apiUrl+item.s_pic" alt="">\n                <p>{{item.title}}</p>\n                <p>价格:88元</p>\n                 \n              </li>\n            </ul>\n\n        </ion-scroll>\n    \n  </div>\n\n  <div class="home-title">猜你喜欢</div>\n  <div class="index_product">\n    <ion-row>\n      <ion-col col-6 *ngFor="let item of hotList" [navPush]="PcontentPage" [navParams]="{\'id\':item[\'_id\']}">    <!--  col总的为12   col-6即分为两份  col-4分为三份 以此类推 -->\n        <img [src]="Config.apiUrl+item.s_pic" alt="">\n          <p>{{item.title}}</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"D:\ionicDEMO\jingdongdemoAPP\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Jsonp */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_category_category__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_user_user__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register2_register2__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_registerpassword_registerpassword__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_registersign_registersign__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_productlist_productlist__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_personal_personal__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_orders_orders__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_address_address__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_addaddress_addaddress__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_editaddress_editaddress__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_ceshi_ceshi__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_search_search__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_pcontent_pcontent__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_config_config__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_http_services_http_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_tools_tools__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// 自定义主页



// 登录

// 注册










// ceshi

// 搜索页面

// 商品详情







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register2_register2__["a" /* Register2Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_registerpassword_registerpassword__["a" /* RegisterpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_registersign_registersign__["a" /* RegistersignPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_productlist_productlist__["a" /* ProductlistPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_pcontent_pcontent__["a" /* PcontentPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_ceshi_ceshi__["a" /* CeshiPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_personal_personal__["a" /* PersonalPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_addaddress_addaddress__["a" /* AddaddressPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_address_address__["a" /* AddressPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_editaddress_editaddress__["a" /* EditaddressPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: 'true',
                    backButtonText: '',
                }, {
                    links: [
                        { loadChildren: '../pages/addaddress/addaddress.module#AddaddressPageModule', name: 'AddaddressPage', segment: 'addaddress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/address/address.module#AddressPageModule', name: 'AddressPage', segment: 'address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ceshi/ceshi.module#CeshiPageModule', name: 'CeshiPage', segment: 'ceshi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editaddress/editaddress.module#EditaddressPageModule', name: 'EditaddressPage', segment: 'editaddress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pcontent/pcontent.module#PcontentPageModule', name: 'PcontentPage', segment: 'pcontent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal/personal.module#PersonalPageModule', name: 'PersonalPage', segment: 'personal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productlist/productlist.module#ProductlistPageModule', name: 'ProductlistPage', segment: 'productlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register2/register2.module#Register2PageModule', name: 'Register2Page', segment: 'register2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registerpassword/registerpassword.module#RegisterpasswordPageModule', name: 'RegisterpasswordPage', segment: 'registerpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registersign/registersign.module#RegistersignPageModule', name: 'RegistersignPage', segment: 'registersign', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register2_register2__["a" /* Register2Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_registerpassword_registerpassword__["a" /* RegisterpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_registersign_registersign__["a" /* RegistersignPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_productlist_productlist__["a" /* ProductlistPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_pcontent_pcontent__["a" /* PcontentPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_ceshi_ceshi__["a" /* CeshiPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_personal_personal__["a" /* PersonalPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_addaddress_addaddress__["a" /* AddaddressPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_address_address__["a" /* AddressPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_editaddress_editaddress__["a" /* EditaddressPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_26__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_http_services_http_services__["a" /* HttpServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_tools_tools__["a" /* ToolsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionicDEMO\jingdongdemoAPP\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\ionicDEMO\jingdongdemoAPP\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ToolsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ToolsProvider = /** @class */ (function () {
    function ToolsProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    ToolsProvider.prototype.getUserInfo = function () {
        var userinfo = this.storage.get("userinfo");
        if (userinfo) {
            return userinfo;
        }
        else {
            return '';
        }
    };
    ToolsProvider.prototype.sign = function (json) {
        // console.log(Md5.hashStr("zh527wsq713zmp527"));
        // json模拟，后面此处的json从调用的地方传过来
        // json={
        //   age:20,
        //   name:'XuFengnian',
        // }
        var tempArr = [];
        for (var attr in json) {
            tempArr.push(attr);
        }
        //排序
        tempArr = tempArr.sort();
        var tempStr = '';
        for (var i = 0; i < tempArr.length; i++) {
            tempStr += tempArr[i] + json[tempArr[i]];
        }
        return __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__["Md5"].hashStr(tempStr);
    };
    ToolsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__storage_storage__["a" /* StorageProvider */]])
    ], ToolsProvider);
    return ToolsProvider;
}());

//# sourceMappingURL=tools.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_orders_orders__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, config, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.list = [];
        this.allPrice = 0; /* 总价 */
        this.ischecked = false; /* 全选和反选 */
        this.isEdit = false; /*是否编辑*/
        this.hasData = true; /*是否有数据*/
        this.OrdersPage = __WEBPACK_IMPORTED_MODULE_2__pages_orders_orders__["a" /* OrdersPage */];
    }
    CartPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: '购物车没有数据',
            duration: 2000,
        });
        toast.present();
    };
    CartPage.prototype.ionViewDidEnter = function () {
        this.getCartData();
        //  console.log(this.getcheckNum(),this.list.length);      
        //进来的时候判断有没有全选
        if (this.getcheckNum() == this.list.length && this.list.length > 0) {
            this.ischecked = true;
        }
        else {
            this.ischecked = false;
        }
    };
    CartPage.prototype.getCartData = function () {
        var cartsData = this.storage.get('carts_data');
        // console.log(cartsData)
        if (cartsData && cartsData.length > 0) {
            this.list = cartsData;
            this.hasData = true;
        }
        else {
            this.list = [];
            this.hasData = false;
        }
        this.totalPrice();
    };
    // 选择按钮改变事件
    CartPage.prototype.changeCarts = function () {
        // console.log(this.list);
        if (this.getcheckNum() == this.list.length) {
            this.ischecked = true;
        }
        else {
            this.ischecked = false;
        }
        this.totalPrice();
    };
    // 计算总价格
    CartPage.prototype.totalPrice = function () {
        var tempAllprice = 0;
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].checked == true) {
                tempAllprice += this.list[i].product_count * this.list[i].product_price;
            }
        }
        this.allPrice = tempAllprice;
    };
    // 购物车页面的的双向数据绑定
    // 减少
    CartPage.prototype.cutCount = function (item) {
        if (item.product_count > 0) {
            --item.product_count;
        }
        this.totalPrice();
    };
    // 增加
    CartPage.prototype.addCount = function (item) {
        ++item.product_count;
        this.totalPrice();
    };
    //离开的时候保存购物车数据
    CartPage.prototype.ionViewWillLeave = function () {
        this.storage.set('carts_data', this.list);
    };
    // 去付款
    CartPage.prototype.doPay = function () {
        var tempArr = [];
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].checked) {
                tempArr.push(this.list[i]);
            }
        }
        // console.log(tempArr)
        // 保存订单的数据
        if (tempArr.length > 0) {
            this.storage.set('orders_data', tempArr);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_orders_orders__["a" /* OrdersPage */]);
        }
        else {
            this.presentToast();
        }
    };
    // 删除
    CartPage.prototype.doDel = function () {
        var noChecked = [];
        for (var i = 0; i < this.list.length; i++) {
            if (!this.list[i].checked) {
                noChecked.push(this.list[i]);
            }
        }
        // 改变当前数据 
        this.list = noChecked;
        // 重新写入
        this.storage.set('carts_data', noChecked);
    };
    // 全选，反选
    CartPage.prototype.changeAll = function () {
        console.log(this.ischecked);
        if (this.ischecked) {
            for (var i = 0; i < this.list.length; i++) {
                this.list[i].checked = false;
            }
            this.ischecked = false;
        }
        else {
            for (var i = 0; i < this.list.length; i++) {
                this.list[i].checked = true;
            }
            this.ischecked = true;
        }
    };
    //获取选中的数量
    CartPage.prototype.getcheckNum = function () {
        var thisNum = 0;
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].checked == true) {
                thisNum += 1;
            }
        }
        return thisNum;
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"D:\ionicDEMO\jingdongdemoAPP\src\pages\cart\cart.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>我的购物车</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only  (tap)="isEdit=!isEdit" >\n        <ion-icon name="create" *ngIf="isEdit" ></ion-icon>\n        <ion-icon name="checkmark-circle" *ngIf="!isEdit" ></ion-icon>\n      </button> \n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="cart_spinner" *ngIf="list.length==0 && hasData" >\n      <ion-spinner></ion-spinner>\n    </div>\n    <p class="no_text" *ngIf="!hasData" >购物车没有添加商品!</p>\n\n  <dl class="cart-list" *ngFor="let item of list" >\n    <dt>\n      <ion-checkbox [(ngModel)]="item.checked"  (ionChange)="changeCarts()"></ion-checkbox>\n      <img [src]="config.apiUrl+item.product_pic" />\n    </dt>\n    <dd>\n      <h2 class="cart-title">{{item.product_title}}</h2>\n      <div class="cart-info">\n        <div class="money">{{item.product_price}}</div>\n        <div class="add">\n          <div class="add-left" (tap)="cutCount(item)" >-</div>\n          <div class="add-text">\n            <input type="text"  readonly="readonly" name="num" id="num" [(ngModel)]="item.product_count">\n          </div>\n          <div class="add-right" (tap)="addCount(item)" >+</div>\n        </div>\n      </div>\n    </dd> \n  </dl>\n\n</ion-content>\n\n<ion-footer *ngIf="hasData" >\n  <ion-toolbar *ngIf="!isEdit" >\n    <div (tap)="changeAll()">\n        <ion-checkbox disabled="true"  [(ngModel)]="ischecked" ></ion-checkbox>全选\n        <strong>合计：{{allPrice}}元</strong>\n    </div>\n    <ion-buttons end> \n      <div color="danger" (tap)="doPay()" class="doPay">结算</div>\n    </ion-buttons>\n  </ion-toolbar>\n\n    <ion-toolbar *ngIf="isEdit">\n      <div (tap)="changeAll()">\n          <ion-checkbox disabled="true"  [(ngModel)]="ischecked" ></ion-checkbox>全选\n          <strong>是否删除</strong>\n      </div>\n      <ion-buttons end> \n        <div  color="danger" (tap)="doDel()" class="doDel">删除</div>\n      </ion-buttons>\n    </ion-toolbar>\n  \n  </ion-footer>\n'/*ion-inline-end:"D:\ionicDEMO\jingdongdemoAPP\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, storage, httpservices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpservices = httpservices;
        this.userinfo = {
            username: '',
            password: '',
        };
        this.RegisterPage = __WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */];
        this.history = this.navParams.get("history");
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginQustion = function () {
        console.log('登录成功啦');
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        // 1、获取this.userinfo的表单信息
        // console.log(this.userinfo);
        if (this.userinfo.username.length < 6) {
            alert("用户名不合法");
        }
        else {
            var api = 'api/doLogin';
            this.httpservices.doPost(api, this.userinfo, function (data) {
                console.log(data);
                if (data.success) {
                    // alert("登录成功")
                    _this.storage.set('userinfo', data.userinfo[0]);
                    if (_this.history == "order ") {
                        _this.navCtrl.pop();
                        // 返回到上一个页面
                    }
                    else {
                        _this.navCtrl.popToRoot(); /* 回到根页面 */
                    }
                }
                else {
                    alert(data.message);
                }
            });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\ionicDEMO\jingdongdemoAPP\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>登录</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n    <ion-item>\n        <ion-label>\n        <ion-icon name="person" start color="primary"></ion-icon>\n        </ion-label>\n        <ion-input type="string" placeholder="用户名/手机号/邮箱" [(ngModel)]="userinfo.username"></ion-input>\n     </ion-item>\n    <ion-item>\n        <ion-label>\n        <ion-icon name="lock" start color="primary"></ion-icon>\n        </ion-label>\n        <ion-input type="password" placeholder="密码" [(ngModel)]="userinfo.password"></ion-input>\n     </ion-item>\n     \n     <ion-item no-lines class="list-end">\n        <span item-start [navPush]="RegisterPage">手机快速注册</span>\n        <span item-end class="forgrt">忘记密码?</span>\n     </ion-item>\n\n     <button ion-button  block class="login-btn1" (click)="doLogin()" >登录</button>\n<!-- <div class="wrap">\n\n     <div class="remember-btn">\n      <input type="checkbox" value="true" checked="checked" name="session[remember_me]" id="session_remember_me"><span>记住我</span>\n    </div>\n\n    <div class="forget-btn">\n      <a class="" data-toggle="dropdown" href="">登录遇到问题?</a>\n      \n    </div>\n    \n  </div>\n\n  <button ion-button round block>登录</button>\n\n  <div class="other-login">\n      <h6>社交帐号直接注册/登录</h6>\n      <ul>\n    <li><a id="weixin" class="weixin" target="_blank" href="/users/auth/wechat"><i class="iconfont ic-wechat"></i></a></li>\n    <li><a id="qq" class="qq" target="_blank" href="/users/auth/qq_connect"><i class="iconfont ic-qq_connect"></i></a></li>\n  </ul>\n  \n    </div> -->\n\n</ion-content>\n'/*ion-inline-end:"D:\ionicDEMO\jingdongdemoAPP\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registersign_registersign__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ceshi_ceshi__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, httpservices, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpservices = httpservices;
        this.storage = storage;
        this.tel = '';
        this.CeshiPage = __WEBPACK_IMPORTED_MODULE_5__ceshi_ceshi__["a" /* CeshiPage */];
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.goRegistersignPage = function () {
        var _this = this;
        // this.navCtrl.push(RegistersignPage)
        console.log(this.tel);
        if (/^\d{11}$/.test(this.tel)) {
            var api = 'api/sendCode';
            this.httpservices.doPost(api, { "tel": this.tel }, function (result) {
                console.log(result); /* 测试 */
                _this.storage.set('reg_tel', _this.tel); /* 保存电话号码 */
                if (result.success) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registersign_registersign__["a" /* RegistersignPage */]);
                }
                else {
                    alert("发送失败 " + result.message);
                }
            });
        }
        else {
            alert("请输入正确的电话号码!");
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\ionicDEMO\jingdongdemoAPP\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<div class="register-page">\n  <input type="text" placeholder="请输入手机号" [(ngModel)]="tel" maxlength="11">\n</div>\n<button ion-button class="next-btn" (tap)="goRegistersignPage()" >下一步</button>\n\n\n<!-- <button ion-button [navPush]="CeshiPage">测试注册模板页面</button> -->\n\n<!-- <ion-item>\n  <ion-label >前面</ion-label>\n  <ion-input type="text"  placeholder="测试一下咯" clearInput></ion-input>\n</ion-item> -->\n</ion-content>\n'/*ion-inline-end:"D:\ionicDEMO\jingdongdemoAPP\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map