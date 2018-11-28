import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { ConfigProvider } from '../../providers/config/config';
/**
 * Generated class for the ProductlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productlist',
  templateUrl: 'productlist.html',
})
export class ProductlistPage {  
  public list=[]; 
  public cid='';/* 获取空id */
  public page=1;/*  分页 */
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public httpService:HttpServicesProvider,
    public config:ConfigProvider,) {

    // for (let i = 1; i < 20; i++) {
    //   this.list.push({
    //     pic:'../../assets/imgs/pc'+i+'.jpg',
    //     title:'第'+i+'张'
    //   })
      
    // } 

    // 获取传值

    // console.log(this.navParams.get("cid"));
    this.cid=this.navParams.get("cid");
    this.getProductList('');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductlistPage');
  }

  getProductList(infiniteScroll){
    var api='api/plist?cid='+this.cid+'&page='+this.page;
    this.httpService.ruquestData(api,(data)=>{
       console.log(data);
       this.list=this.list.concat(data.result);  /*  数据拼接 */

       if (infiniteScroll) {
          //  告诉ionic请求数据完成
       infiniteScroll.complete();

       if(data.result.length<10){  /* 如果没数据了 就停止上拉刷新 */
        infiniteScroll.enable(false);
       }

       };
       this.page++;
     
    })
  }

  // 加载更多
    doloadmore(infiniteScroll) {
      this.getProductList(infiniteScroll) 

  }


}