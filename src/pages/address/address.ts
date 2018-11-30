import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddaddressPage } from "../addaddress/addaddress";
import { ToolsProvider } from "../../providers/tools/tools";
import { ConfigProvider } from '../../providers/config/config';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {
  public list=[];
  public AddaddressPage=AddaddressPage;
  public userinfo='';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public tools:ToolsProvider,
    public Config:ConfigProvider,
    public httpservices:HttpServicesProvider,
   
    ) {
  }

  ionViewDidEnter(){
    // this.userinfo=this.tools.getUserInfo();
   this.getAddresslist();
  }

  getAddresslist(){

    // 签名
    // this.navCtrl.push(AddaddressPage);
    var userinfo=this.tools.getUserInfo();
    // let userinfo:any=this.userinfo;

    let json={
      uid:userinfo._id,
      salt:userinfo.salt,

    }
    
    let sign=this.tools.sign(json);

    // 请求数据
    var api='api/addressList?uid='+userinfo._id+'&sign='+sign;
   
    this.httpservices.ruquestData(api,(data)=>{
      console.log(data);
      // console.log(api+"这是api的数据");
        if (data.success) {
            this.list=data.result;
        }else{
          alert(data.message);
        }
    })
  }
  
  
 
}
