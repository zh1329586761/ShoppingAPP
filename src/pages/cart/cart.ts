import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConfigProvider } from "../../providers/config/config";
import { StorageProvider } from "../../providers/storage/storage";
/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  public list=[];
  public allPrice=0;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public config:ConfigProvider,
              public storage:StorageProvider) {
  }

  ionViewDidEnter(){
   this.getCartData();
  }

  getCartData(){
    var cartsData=this.storage.get('carts_data');
    console.log(cartsData)
    if (cartsData) {
      this.list=cartsData;

    } else {
       this.list=[];
    }
    this.totalPrice();
  }

  changeCarts(){
    console.log(this.list);
    this.totalPrice();

  }

  totalPrice(){
    var tempAllprice=0;
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].checked==true) {
        tempAllprice+=this.list[i].product_count*this.list[i].product_price;
      }
      this.allPrice=tempAllprice;
    }
  }

}
