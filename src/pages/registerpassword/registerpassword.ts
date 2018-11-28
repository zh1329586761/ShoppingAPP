import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServicesProvider } from "../../providers/http-services/http-services";




import { StorageProvider } from "../../providers/storage/storage";
/**
 * Generated class for the RegisterpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registerpassword',
  templateUrl: 'registerpassword.html',
})
export class RegisterpasswordPage {
  public tel='';
  public code = '';
  public password='';
  public rpassword='';
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage:StorageProvider,
              public httpservices:HttpServicesProvider,) {
                this.tel=storage.get('reg_tel')
                this.code=storage.get('reg_code')


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterpasswordPage');
  }


  doRegister(){
    if (this.password!=this.rpassword) {
      alert('确认密码和密码不一致');
    }else if(this.password.length<6){
      alert('密码长度不能小于六位');
    }
    
    else {
      var api='api/register';
      this.httpservices.doPost(api,{"tel":this.tel,
                                    "code":this.code,
                                  "password":this.password,},(result)=>{
        console.log(result)/* 测试 */
          if (result.success) {
            // 保存用户信息
            this.storage.set('userinfo',result.userinfo[0]);
            this.navCtrl.popToRoot();/* 回到根页面 */
          } else {
            alert("注册失败")
          }
        

      })    
     }
    }


}