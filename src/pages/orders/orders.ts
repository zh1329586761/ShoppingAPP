import { AddressPage } from './../address/address';
import { LoginPage } from '../login/login';
import { StorageProvider } from './../../providers/storage/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { ToolsProvider } from "../../providers/tools/tools";
import { AddaddressPage } from "../addaddress/addaddress";
import { PaymentPage } from "../payment/payment";

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
  public leaveWord='';
  public address='';
  public allPrice=0;
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
     if (this.list) {
        //  调用计算总价的方法
    this.totalPrice();
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
    // console.log(this.userinfo);
    // console.log(this.address);
    // console.log(this.list);
      if (!this.userinfo) {
        this.navCtrl.push('LoginPage',{history:'order'})
      }else if(!this.address){
        alert("您还未选择收货地址")
      }else{
          let userinfo:any=this.userinfo;

          var uid:any=userinfo['_id'];
          var address:any=this.address['address'];
          var phone:any = this.address['phone'];
          var name:any=this.address['name'];
          var all_price =this.allPrice;
          var products:any=JSON.stringify(this.list);

          let json={
            uid:userinfo._id,
            salt:userinfo.salt,
            address:address,
            phone:phone,
            name:name,
            all_price:all_price
          }

          let sign =this.tools.sign(json);

          let api='api/doOrder';
          this.httpService.doPost(api,{
            uid:userinfo._id,
            salt:userinfo.salt,
            sign:sign,
            address:address,
            phone:phone,
            name:name,
            all_price:all_price,
            products:products
          },(data)=>{
            if (data.success) {
              console.log(data)
              // alert("成功")
              this.navCtrl.push(PaymentPage)
            } else {
              alert(data.message)
            }
           
          })
      }
  }

  totalPrice(){
    var tempAllPrice=0;
  
        for(let i=0;i<this.list.length;i++){
  
          if(this.list[i].checked==true){
  
            tempAllPrice+=this.list[i].product_count*this.list[i].product_price;
          }
  
        }
  
        this.allPrice=tempAllPrice;
  }
}

 