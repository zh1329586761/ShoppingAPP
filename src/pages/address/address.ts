import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddaddressPage } from "../addaddress/addaddress";
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
  public AddaddressPage=AddaddressPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressPage');
  }

  goaddaddress(){
    this.navCtrl.push(AddaddressPage);
  }
 
}
