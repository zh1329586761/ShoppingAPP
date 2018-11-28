import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterpasswordPage } from '../registerpassword/registerpassword';
import { HttpServicesProvider } from "../../providers/http-services/http-services";


import { StorageProvider } from "../../providers/storage/storage";
/**
 * Generated class for the RegistersignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registersign',
  templateUrl: 'registersign.html',
})
export class RegistersignPage {
  public code='';  /* 默认空的验证码 */
  public showcode=false;/*    在验证码倒计时和重新发送中切换  前面html中用ngif判断 */
  public num=5;  /*  倒数计时的数量 */
  public tel= '';
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public httpservices:HttpServicesProvider,
              public storage:StorageProvider) {

                this.tel=this.storage.get('reg_tel');
  }
  

  ionViewDidLoad() {
    this.doTimer();
  }

  goRegisterpasswordPage(){
    if(/^\d{4}$/.test(this.code)) {
      // 验证验证码是否正确
    var api='api/validateCode';
    this.httpservices.doPost(api,{"tel":this.tel,"code":this.code},(result)=>{
      console.log(result)/* 测试 */
      
      if(result.success){  /* 判断如果成功就跳转到下个界面  验证验证码*/
        
        //  保存验证码
         this.storage.set('reg_code',this.code);
         // 跳转到下个页面
         this.navCtrl.push(RegisterpasswordPage);

      }else{
        alert("验证码错误，请重新输入")
      }
    })
   } else {
     alert("验证码位数不正确")
   }
   

  }
  // 倒计时的方法
  doTimer(){
    var timer=setInterval(()=> {
      --this.num;
      if (this.num==0) {
        clearInterval(timer);
        this.showcode=true;
      }

    },1000)
  }


// 发送验证码
  sendCode(){
    
    // 获取电话号码
      
   
      // console.log("请重新发送验证码")

      var api='api/sendCode'
      this.httpservices.doPost(api,{"tel":this.tel,"code":this.tel},(result)=>{
        console.log(result)/* 测试 */
        
        if(result.success){  /* 判断如果成功就跳转到下个界面  验证验证码*/
           this.num=10; /* 设置倒计时 */
           this.doTimer(); /* 倒计时 */
           this.showcode=false;  /* 显示倒计按钮 */
        }else{
          alert("发送错误了噢，请重新发送")
        }
      })
    
  }
  

}
