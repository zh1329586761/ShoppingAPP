import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { AlertController } from 'ionic-angular';
import { StorageProvider  } from "../../providers/storage/storage";
import { Content } from 'ionic-angular';
import { isRightSide } from 'ionic-angular/umd/util/util';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  // 装饰器  this.content.scrollToTop();回到顶部
  @ViewChild(Content) content: Content;

  public flag=false;  /* 是否有关键词关键词开关 */
  public list=[];    /*  模拟商品数据 */
  public keywords='';  /*  搜索关键词 */
  public page=1;/* 分页默认为1 */
  public hasData=true; /* 是否有数据 */
  public historyList=[]; /* 历史纪录的数据 */
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public httpService:HttpServicesProvider,
    public config:ConfigProvider,
    public storage:StorageProvider,
    private alertCtrl: AlertController,
    ) {
      this.getHistory();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  // 点击历史纪录执行的方法
  goSearch(keywords){
    // console.log(keywords);
    this.keywords=keywords;
    this.getSearchList('');
  }

  getSearchList(infiniteScroll){
    if(!infiniteScroll){/*点击搜索按钮*/
      this.page=1;
      this.hasData=true;
      this.content.scrollToTop(0);/*回到顶部*/
      this.savehistory(); // 调用保存历史纪录的方法

    }
    // console.log(this.keywords) /* 检测是否触发 */

    var api ='api/plist?search='+this.keywords+'&page'+this.page;
    this.httpService.ruquestData(api,(data)=>{
      // console.log(data);
      if (this.page==1) { /* 第一页 替换数据 */
        this.list=data.result;
      } else {
        this.list=this.list.concat(data.result); /* 拼接数据 */
      }
      this.flag=true;   /* 显示商品列表 */

      if (infiniteScroll) {
        //  告诉ionic请求数据完成

        infiniteScroll.complete();

         /*没有数据停止上拉更新*/
         if (data.result<10) {
           this.hasData=false;
         }
        }
        this.page++;
    })
  }

 
  //加载更多
  doLoadMore(infiniteScroll){
    this.getSearchList(infiniteScroll)
  }


  savehistory(){
    // 1.localstorage获取历史纪录
    var history=this.storage.get('historyData')
    // 2.判断历史纪录是否存在
    if (history) {/*   有 */
      if (history.indexOf(this.keywords)==-1) {
        history.push(this.keywords)
        // 重新写入
        this.storage.set('historyData',history);
      } 
      
    } else {/* 以前没有 */
      this.historyList.push(this.keywords);
      // 写入到localstorage中
      this.storage.set('historyData',this.historyList)
    }
  }

  // 获取历史纪录
  getHistory(){
    var history=this.storage.get('historyData')
    if (history) {
      this.historyList=history;
    }
  }


  removeHistroy(keywords){
    let alert = this.alertCtrl.create({
      title: '确定要删除么？',
      message: '真的要删除这个历史纪录么？',
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            var index=this.historyList.indexOf(keywords);
            // console.log(index)
            this.historyList.splice(index,1);
            this.storage.set('historyData',this.historyList)
          }
        }
      ]
    });

    alert.present();


    // var index=this.historyList.indexOf(keywords);
    // // console.log(index)
    // this.historyList.splice(index,1)
  }


  
    
  
}

