import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistersignPage } from '../registersign/registersign';
import { HttpServicesProvider } from "../../providers/http-services/http-services";
import { ThrowStmt } from '@angular/compiler';

import { StorageProvider } from "../../providers/storage/storage";
import { CeshiPage } from "../ceshi/ceshi";
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public tel='';
  public CeshiPage=CeshiPage;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpservices:HttpServicesProvider,
              public storage:StorageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  goRegistersignPage(){
    // this.navCtrl.push(RegistersignPage)
    console.log(this.tel)

        if(/^\d{11}$/.test(this.tel)){

          var api='api/sendCode'
          this.httpservices.doPost(api,{"tel":this.tel},(result)=>{
            console.log(result)/* 测试 */
            this.storage.set('reg_tel',this.tel);  /* 保存电话号码 */
            if(result.success){  /* 判断如果成功就跳转到下个界面  验证验证码*/
              this.navCtrl.push(RegistersignPage)
            }else{
              alert("发送失败 "+result.message)
            }
          })
        }else{
          alert("请输入正确的电话号码!")
        }
  }
}
