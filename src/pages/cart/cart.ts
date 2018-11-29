import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrdersPage } from '../../pages/orders/orders';
import { ToastController } from 'ionic-angular';

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
  public allPrice=0;/* 总价 */
  ischecked=false;/* 全选和反选 */
  public isEdit=false;   /*是否编辑*/

  public hasData=true;   /*是否有数据*/
  public OrdersPage=OrdersPage;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public config:ConfigProvider,
              public storage:StorageProvider,
              public toastCtrl: ToastController,
              ) {
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: '购物车没有数据',
      duration: 2000,
    });
    toast.present();
  }

  ionViewDidEnter(){
   this.getCartData();
  //  console.log(this.getcheckNum(),this.list.length);      
      //进来的时候判断有没有全选
      if(this.getcheckNum()==this.list.length && this.list.length>0){      
        this.ischecked=true;
      }else{
        this.ischecked=false;
      }    
  }

  getCartData(){
    var cartsData=this.storage.get('carts_data');
    // console.log(cartsData)
    if (cartsData && cartsData.length>0) {
      this.list=cartsData;
      this.hasData=true;
    } else {
       this.list=[];
       this.hasData=false;
    }
    this.totalPrice();
  }

  // 选择按钮改变事件
  changeCarts(){
    // console.log(this.list);
    
    
    if(this.getcheckNum()==this.list.length){

      this.ischecked=true;
    }else{
      this.ischecked=false;
    }

    this.totalPrice();  
  }

  // 计算总价格
  totalPrice(){
    var tempAllprice=0;
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].checked==true) {
        tempAllprice+=this.list[i].product_count*this.list[i].product_price;
      }     
    }
    this.allPrice=tempAllprice;
  }

  // 购物车页面的的双向数据绑定
  // 减少
  cutCount(item){
    if (item.product_count>0) {
      --item.product_count;
    }
    this.totalPrice();
  }
  // 增加
  addCount(item){
    ++item.product_count;
    this.totalPrice();
  }

    //离开的时候保存购物车数据
  ionViewWillLeave(){
   this.storage.set('carts_data',this.list);
  }
// 去付款
  doPay(){
    var tempArr=[];

      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].checked) {
          tempArr.push(this.list[i])
        }
        
      }
      // console.log(tempArr)
      // 保存订单的数据
      if (tempArr.length>0) {
      this.storage.set('orders_data',tempArr)
      this.navCtrl.push(OrdersPage)
    }else{
      this.presentToast();
    }
  }

// 删除
  doDel(){
    var noChecked=[];

    for (let i = 0; i < this.list.length; i++) {
      if (!this.list[i].checked) {
        noChecked.push(this.list[i])
      }
      
    }
    // 改变当前数据 
    this.list=noChecked;
    // 重新写入
    this.storage.set('carts_data',noChecked);
}
  


  // 全选，反选
  changeAll(){
     console.log(this.ischecked);


      if(this.ischecked){ /*选中*/

         for(let i=0;i<this.list.length;i++){
            this.list[i].checked=false;   
         }

         this.ischecked=false;


      }else{
         for(let i=0;i<this.list.length;i++){          
            this.list[i].checked=true;              
         }
         this.ischecked=true; 
      }
  }

//获取选中的数量
  getcheckNum(){
    let thisNum=0;
    for(let i=0;i<this.list.length;i++){          
      if(this.list[i].checked==true){
        thisNum+=1;
      }
  }
    return thisNum;
  }

 


}
