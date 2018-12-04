import { NgModule, ErrorHandler, } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
// 自定义主页
import { CartPage } from '../pages/cart/cart';
import { CategoryPage } from '../pages/category/category';
import { UserPage } from '../pages/user/user';
// 登录
import { LoginPage } from '../pages/login/login';
// 注册
import { Register2Page } from '../pages/register2/register2';
import { RegisterPage } from '../pages/register/register';
import { RegisterpasswordPage } from '../pages/registerpassword/registerpassword';
import { RegistersignPage } from '../pages/registersign/registersign';
import { ProductlistPage } from '../pages/productlist/productlist';
import { PersonalPage } from '../pages/personal/personal';
import { OrdersPage } from '../pages/orders/orders';
import { AddressPage } from '../pages/address/address';
import { AddaddressPage } from '../pages/addaddress/addaddress';
import { EditaddressPage } from '../pages/editaddress/editaddress';
import { PaymentPage } from '../pages/payment/payment';
// ceshi
import { CeshiPage } from '../pages/ceshi/ceshi';

// 搜索页面
import { SearchPage } from '../pages/search/search';
// 商品详情
import { PcontentPage } from '../pages/pcontent/pcontent';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigProvider } from '../providers/config/config';
import { HttpServicesProvider } from '../providers/http-services/http-services';
import { StorageProvider } from '../providers/storage/storage';
import { ToolsProvider } from '../providers/tools/tools';


@NgModule({
  declarations: [
    MyApp,
    CartPage,
    CategoryPage,
    HomePage,
    TabsPage,
    UserPage,
    LoginPage,
    Register2Page,
    RegisterPage,
    RegisterpasswordPage,
    RegistersignPage,
    SearchPage,
    ProductlistPage,
    PcontentPage,
    CeshiPage,
    PersonalPage,
    OrdersPage,
    AddaddressPage,
    AddressPage,
    EditaddressPage,
    PaymentPage,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:'true',
      backButtonText:'',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CartPage,
    CategoryPage,
    HomePage,
    TabsPage,
    UserPage,
    LoginPage,
    Register2Page,
    RegisterPage,
    RegisterpasswordPage,
    RegistersignPage,
    SearchPage,
    ProductlistPage,
    PcontentPage,
    CeshiPage,
    PersonalPage,
    OrdersPage,
    AddaddressPage,
    AddressPage,
    EditaddressPage,
    PaymentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
    HttpServicesProvider,
    StorageProvider,
    ToolsProvider
  ]
})
export class AppModule {}
