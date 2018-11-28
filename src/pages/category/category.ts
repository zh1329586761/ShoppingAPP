import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductlistPage } from '../productlist/productlist';

import { ConfigProvider } from '../../providers/config/config';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { shiftInitState } from '@angular/core/src/view';
/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  public ProductlistPage=ProductlistPage;

  // public reclist=[];  左侧模拟数据
  // public textara=[];  右侧模拟数据

  public leftcate=[]; /* 左侧分类数据 */
  public rightcate=[];  /* 右侧分类数据 */

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public Config:ConfigProvider,
              public httpservices:HttpServicesProvider,
              ) {
    // 右侧模拟数据
    // for (let i = 1; i < 21; i++) {
    //   this.reclist.push({
    //     pic:'../../assets/imgs/pc'+i+'.jpg',
    //     title:'第'+i+'张'
    //   })      
    //  }
     
    //  左侧模拟数据
    //  for (let j = 1; j < 21; j++) {
    //   this.textara.push(`分类${j}`);      
    //  }

     this.getLeftCateData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  

  // 左侧分类的方法
  getLeftCateData(){
    var api='api/pcate';
    this.httpservices.ruquestData(api,(data)=>{
    console.log(data);
    this.leftcate=data.result;

    this.getRightCateData(this.leftcate[0]['_id']); 
    })
  }

  // 右侧分类的方法
  getRightCateData(pid){
    var api='api/pcate?pid='+pid;
    this.httpservices.ruquestData(api,(data)=>{
    console.log(data);
    this.rightcate=data.result;
    })
  }


}

  
