import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert ,AlertController} from 'ionic-angular';
import { AddaddressPage } from "../addaddress/addaddress";
import { ToolsProvider } from "../../providers/tools/tools";
import { ConfigProvider } from '../../providers/config/config';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { EditaddressPage } from '../editaddress/editaddress';
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
  constructor(
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public tools:ToolsProvider,
    public Config:ConfigProvider,
    public httpservices:HttpServicesProvider,
   
    ) {
  }

  ionViewWillEnter(){
    this.userinfo=this.tools.getUserInfo();
    
   this.getAddresslist();
  }
  // 获取当前用户的收货地址
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
  
  // 改变收货地址
  changeAddress(id){
    // alert(id);
    // 签名
    let userinfo:any=this.userinfo;

    let json={
      uid:userinfo._id,
      salt:userinfo.salt,
      id:id,
    }

    let sign=this.tools.sign(json)
    
    var api='api/changeDefaultAddress'

    this.httpservices.doPost(api,{
      uid:userinfo._id,
      sign:sign,
      id:id,
    },(data)=>{
      // console.log(data)
      if (data.success) {
        this.navCtrl.pop();
      } else {
        alert(data.message)
      }
    })
  }

  deleteAddress(key,id){
    let that:any=this;
    let alert = this.alertCtrl.create({
      title: '警告',
      message: '您确定要删除么?',
      buttons: [
        {
          text: '取消',
          role: '取消',
          handler: () => {
            console.log('取消删除');
          }
        },
        {
          text: '确定',
          handler: () => {
            console.log('删除成功');
            console.log(key,id)
            that.deleteAddressAction(key,id);
          }
        }
      ]
    });
    alert.present();
  }


  deleteAddressAction(key,address_id){
    let userinfo:any=this.userinfo;

    let json={
      uid:userinfo['_id'],
      salt:userinfo['salt'],
      id:address_id
    }

    let sign = this.tools.sign(json)
    let api='api/deleteAddress'

    this.httpservices.doPost(api,{
      uid:userinfo['_id'],
      sign:sign,
      id:address_id
    },
    (data)=>{
      // console.log(data)
      if (data.success=true) {
        this.list.splice(key,1)
      } else {
        alert(data.message);
      }
    })
  }

  editAddress(item){
    
    this.navCtrl.push(EditaddressPage,{
      item:item
    })
  }
}
