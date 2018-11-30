
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
// 商品详情
import { PcontentPage } from '../../pages/pcontent/pcontent';
import {Http,Jsonp} from "@angular/http";

import { ConfigProvider } from '../../providers/config/config';
import { HttpServicesProvider } from '../../providers/http-services/http-services';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public  focusList=[];  /* 轮播图数组 */
  public  hotList=[];  /* 热门商品 */

  // public reclist=[];
  // public recListWidth='';

  public bestList=[];  /* 精品推荐 */
  public bestListWidth=''; /*  精品推荐数据长度 */

  public  PcontentPage= PcontentPage;
 
  constructor(public navCtrl: NavController,
              public Config:ConfigProvider,
              public httpservices:HttpServicesProvider,
              private http:Http,
              private jsonp:Jsonp,
              ) {
                

  // 页面加载时调用方法: 
  // 轮播图
  this.goFocus();
  // 精品推荐
  this.getBestProduct()
  // 猜你喜欢
  this.gethotProduct()
    
    //     跟随上面的reclist
    // for (let i = 1; i < 21; i++) {
    //  this.reclist.push({
    //    pic:'../../assets/imgs/pc'+i+'.jpg',
    //    title:'第'+i+'张'
    //  })      
    // }
    // this.recListWidth=this.reclist.length*500+'px';   


  } /* constructor */
  
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  
  goSearch(){
    this.navCtrl.push(SearchPage)
  }

  goFocus(){
    var that=this;
    this.httpservices.ruquestData('api/focus',function(data){
      // console.log(data);
      that.focusList=data.result;
    })
  }

  getBestProduct(){
                                     /* ↓是api接口 */
    this.httpservices.ruquestData('api/plist?is_best=1',(data)=>{
      // console.log(data);
      this.bestList=data.result;
      this.bestListWidth=this.bestList.length*500+'px';     /* 总宽度 */
    })
  }
  gethotProduct(){
    // 地址:http:/39.108.159.135/api/plist?is_hot=1
                                     /* ↓是api接口 */
    this.httpservices.ruquestData('api/plist?is_hot=1',(data)=>{
      // console.log(data);
      this.hotList=data.result;
    })
  }

  // 同步测试
  ceshi(){
    alert("本事件仅仅是测试使用")
  }
}