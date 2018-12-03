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
  public address='';
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public storage:StorageProvider,
     public httpService:HttpServicesProvider,
     public config:ConfigProvider,
     public tools:ToolsProvider,

     ) {
  }

  ionViewDidEnter(){
  
  }

  ionViewWillEnter(){
     // 获取用户信息
     this.userinfo=this.tools.getUserInfo();
     // 获取订单信息
     this.list=this.storage.get('orders_data');
    //  console.log(this.list)
   
     if (this.userinfo) {
      this.getDefaultAddress();
     } 
  }
  
  // 获取默认收货地址
  getDefaultAddress(){
    let userinfo:any=this.userinfo;
    let json={
      uid:userinfo['_id'],
      salt:userinfo.salt
    }
    let sign =this.tools.sign(json);

    // 请求数据
    let api='api/oneAddressList?uid='+userinfo['_id']+'&sign='+sign;
    this.httpService.ruquestData(api,(data)=>{
      console.log(data)
      if (data.suceess=true) {
        console.log(data.result)
        this.address=data.result[0];
      } else {
        this.address=''
      }
    })
  }
  // 去结算
  goPayment(){
    alert("余额不足")
  }
}

 