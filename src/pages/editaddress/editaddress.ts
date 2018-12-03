import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewWillLoad() {
    this.addressList=this.navParams.get('item')
  }

  editAddress(){
    // 修改
  }
}
