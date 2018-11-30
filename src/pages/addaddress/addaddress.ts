import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToolsProvider } from "../../providers/tools/tools";
import { ConfigProvider } from '../../providers/config/config';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
/**
 * Generated class for the AddaddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addaddress',
  templateUrl: 'addaddress.html',
})
export class AddaddressPage {
  // public addressList:{
  //   name:any,
  //   contact:any,
  //   address:any,

  // }
  public addressList={
    name:'',
    phone:'', 
    address:'',

  }
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public tools:ToolsProvider,
     public Config:ConfigProvider,
     public httpservices:HttpServicesProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddaddressPage');
  }

  addAddress(){
    if (this.addressList.name!=''||this.addressList.phone!=''||this.addressList.address!='') {
      
    
        // 获取表单的内容
        let userinfo = this.tools.getUserInfo();

        let json={
          uid:userinfo._id,
          salt:userinfo.salt,
          name:this.addressList.name,
          phone:this.addressList.phone,
          address:this.addressList.address,

        }

        let sign = this.tools.sign(json);  /* 生成签名 */

          var api='api/addAddress'
          this.httpservices.doPost(api,{
            uid:userinfo._id,
            sign:sign,
            name:this.addressList.name,
            phone:this.addressList.phone,
            address:this.addressList.address,
          },(data)=>{
              // console.log(data);
              if (data.success) {
                this.navCtrl.pop();
              } else {
                alert(data.message);
              }
          })
      }else{
          alert("错误")
      }
  }
}
