import { Component,ViewChild,ElementRef,Renderer2 } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from "../../providers/storage/storage";

import {  CartPage} from "../cart/cart";
import { ConfigProvider } from '../../providers/config/config';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
/**
 * Generated class for the PcontentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pcontent',
  templateUrl: 'pcontent.html',
})
export class PcontentPage {
  public CartPage=CartPage;
  public tabs="plist"; /* 商品列表选中 */
  public item=[];  /*商品列表*/
  public num=1;
  public carts_num=0;
  @ViewChild('myattr') myattr:ElementRef;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public config:ConfigProvider,
    public httpservices:HttpServicesProvider,
    public storage:StorageProvider,) {
      // console.log(this.navParams.data.id) /* 测试打印数据 */
      this.requestData(this.navParams.data.id);

      // 计算购物车的数量
      this.carts_num=this.getCartsNum();
  }



  ionViewDidLoad() {
    this.bindEvent();
  }

  requestData(id){
    //http://39.108.159.135/api/pcontent?id=59f6a2d27ac40b223cfdcf81
    var api='api/pcontent?id='+id
    this.httpservices.ruquestData(api,(data)=>{
      // console.log(data);

      this.item=data.result;
    })
  }   

  bindEvent(){
    var attrDom=this.myattr.nativeElement;  /* 获取#myattr里所有信息 */
    attrDom.onclick=function(c) {
      // console.log(e.srcElement.nodeName);  /* 找到目标的标签是什么 如：DIV SPAN STRONG等 */
      // console.log(e.target)  /*  标签内的所有内容，class也包含 */
      if (c.srcElement.nodeName=='SPAN') {  /* 获取元素名称 */
        var ele=c.target;   /* 获取元素内所有信息 */
        var parentNode=ele.parentNode;  /* 获取当前元素的父节点 */
        var children=parentNode.children;   /* 获取当前元素父节点下面的所有子节点 */
        for (let i = 0; i < children.length; i++) {
          children[i].className=''; /* 设置其他元素样式都为空 */
          
        }
        ele.className='active'; /* 设置当前元素为有的 */
      }

    }

  }


  addCart(){
   
    var product_title=this.item['title'];
    var product_id=this.item['_id'];
    // console.log(product_id) 
    var product_pic=this.item['pic'];
    var product_price=this.item['price'];
    var product_count=this.num;  /*  商品数量 */
    
    // 获取商品属性
    var product_attr='';
    var attrDom=document.getElementById("myattr");
    // console.log(attrDom);
    var activeDom=attrDom.getElementsByClassName('active');
    // console.log(activeDom);




    for (let i = 0; i < activeDom.length; i++) {
      // product_attr+=activeDom[i].innerHTML;
      var str=activeDom[i].innerHTML.replace(/^\s+|\s+$/g,"");  /* 正则去掉前后空格 */
      product_attr+=str;
      
    }

    var json={
      'product_title':product_title,
      'product_id':product_id,
      product_pic,
      product_price,
      product_count,
      product_attr,
      checked:true  /*默认加入购物车 数据选中*/     
    }

    // console.log(json)

    // 加入购物车保存到localstorage 如果存在 当前数量+1  如果不存在就写入
    var storageData = this.storage.get('carts_data');
    if (storageData) { /* 有数据 */
      // 判断购物车里面有没有当前这条数据
      if (this.hasData(storageData,json.product_id)) {  /* 购物车有数据 */
        // 修改数量
        for (let i = 0; i < storageData.length; i++) {
          if (storageData[i].product_id==product_id) {
            storageData[i].product_count+=json.product_count;  /*以前的数量加上选择的数量*/
          }  
        }
      }else{ /* 购物车没有数据 */
        storageData.push(json);
      }
      // 重新写入数据
      this.storage.set('carts_data',storageData);

    }else{ /* 没有数据 第一次加入购物车*/
      var temp=[];
      temp.push(json);
      this.storage.set('carts_data',temp)
    }

    this.carts_num+=json.product_count;   /*点击加入购物车改变 购物车数量*/
  }

// addCart2(){

  //   //获取商品数据

  //   var product_title=this.item['title'];

  //   var product_id=this.item['_id'];

  //   var product_pic=this.item['pic'];

  //   var product_price=this.item['price'];

  //   var product_count=this.num;  /*商品数量*/


  //   //商品的属性
  //   var product_attr='';

  //   //es5 获取dom节点的方式
  //   var activeDom=document.querySelectorAll('#myattr .active');

  //   // console.log(activeDom);
  //   for(var i=0;i<activeDom.length;i++){
  //     product_attr+=activeDom[i].innerHTML;
  //   }

  //   var json={
  //     'product_title':product_title,
  //     'product_id':product_id,
  //     product_pic,  /*es6 属性的简写*/
  //     product_price,
  //     product_count,
  //     product_attr,
  //     checked:true  /*默认加入购物车 数据选中*/     
  //   }
  //   // console.log(json);

  //   //加入购物车保存到localstorage   如果存在 当前数量+1  如果不存在写入

  //   var storageData=this.storage.get('carts_data');

  //   if(storageData){  /*有数据*/

  //     //判断购物车里面有没有当前这条数据  
  //     if(this.hasData(storageData,json.product_id)){  /*购物车有数据*/

  //         //修改刚才购物车里面的数量
          
  //         for(var i=0;i<storageData.length;i++){
            
  //           if(storageData[i].product_id==product_id){
  //              storageData[i].product_count+=json.product_count;  /*以前的数量加上选择的数量*/
  //           }
  //         }
          

  //     }else{  /*购物车没有数据*/
  //       storageData.push(json);
  //     }
  //     //重新写入
  //     this.storage.set('carts_data',storageData);

      
  //   }else{  /*没有数据  第一次加入购物车*/

  //       var tempArr=[];

  //       tempArr.push(json);
  //       this.storage.set('carts_data',tempArr);

  //   }

  //   this.carts_num+=json.product_count;   /*点击加入购物车改变 购物车数量*/

  // }
  
  
  
  addNum(){  
      this.num+=1;  
  }
  cutNum(){
    
    if (this.num>1) {
      this.num-=1;
    }
  }


  hasData(storageData,product_id){
    if (storageData) {
      for (let i = 0; i < storageData.length; i++) {
        if (storageData[i].product_id==product_id) {
          return true;     
        }  
      }
    }
      return false;
    
  }

    //获取购物车数量
    getCartsNum(){
      var num=0;
      var storageData=this.storage.get('carts_data');

      if(storageData){
          for(var i=0;i<storageData.length;i++){
            
            num+=storageData[i].product_count;
          }
      }
      return num;

      
   }

}
