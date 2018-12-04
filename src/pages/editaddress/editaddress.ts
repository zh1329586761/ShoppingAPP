import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToolsProvider } from "../../providers/tools/tools";
import { ConfigProvider } from '../../providers/config/config';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
/**
 * Generated class for the EditaddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editaddress',
  templateUrl: 'editaddress.html',
})
export class EditaddressPage {
  public  addressList=[]
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public tools:ToolsProvider,
     public Config:ConfigProvider,
     public httpservices:HttpServicesProvider,) {
    
  }

  ionViewWillEnter() {
    this.addressList=this.navParams.get('item')
  
  }

  editAddress(){
    // 修改
    if (this.addressList.name!=''||this.addressList.phone!=''||this.addressList.address!='') {
        let userinfo = this.tools.getUserInfo();
        let json={
          id:this.addressList._id,
          uid:userinfo._id,
          salt:userinfo.salt,
          name:this.addressList.name,
          phone:this.addressList.phone,
          address:this.addressList.address
        }
        console.log(json)
        let sign = this.tools.sign(json);/* 生成签名 */
        let api='api/editAddress';
        this.httpservices.doPost(api,{
          id:this.addressList._id,
          uid:userinfo._id,
          sign:sign,
          name:this.addressList.name,
          phone:this.addressList.phone,
          address:this.addressList.address
        },(data)=>{
            console.log(data)
            if (data.success) {
              this.navCtrl.pop();
            } else {
              alert(data.message)
            }
        })
    }else{
      alert("收货地址错误咯")
    }
  }
}
