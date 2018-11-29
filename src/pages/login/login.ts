import { OrdersPage } from './../orders/orders';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from "../register/register";

import { HttpServicesProvider } from "../../providers/http-services/http-services";
import { StorageProvider } from "../../providers/storage/storage";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public userinfo={
    username:'',
    password:'',
  }
  public history;
  public RegisterPage=RegisterPage;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage:StorageProvider,
              public httpservices:HttpServicesProvider,) {

   this.history=this.navParams.get("history");


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginQustion(){
    console.log('登录成功啦');
  }

  doLogin(){
    // 1、获取this.userinfo的表单信息
    // console.log(this.userinfo);
    if (this.userinfo.username.length<6) {
      alert("用户名不合法")
    } else {
        var api='api/doLogin'
        this.httpservices.doPost(api,this.userinfo,(data)=>{
          console.log(data)

          if (data.success) {
                // alert("登录成功")
                this.storage.set('userinfo',data.userinfo[0]);
                if (this.history=="order ") {  
                  this.navCtrl.pop()        
                  // 返回到上一个页面
                }else{
                  this.navCtrl.popToRoot();/* 回到根页面 */
                }
          } else {
            alert(data.message)
          }
        })
    }   

  }
}
