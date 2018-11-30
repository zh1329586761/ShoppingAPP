import { AddressPage } from './../address/address';
import { LoginPage } from './../login/login';
import { StorageProvider } from './../../providers/storage/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { ToolsProvider } from "../../providers/tools/tools";
import { AddaddressPage } from "../addaddress/addaddress";
/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {
   
  public list=[];
  public userinfo='';
  public LoginPage=LoginPage;
  public AddressPage=AddressPage;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public storage:StorageProvider,
     public httpService:HttpServicesProvider,
     public config:ConfigProvider,
     public tools:ToolsProvider,

     ) {
  }

  ionViewDidEnter(){
    // 获取订单信息
    this.list=this.storage.get('orders_data');
    console.log(this.list)
    // 获取用户信息
    this.userinfo=this.tools.getUserInfo();
  }
  
}
