// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  // 公共请求数据地址前缀
  public apiUrl="http://jd.itying.com/";

  constructor() {
    console.log('Hello ConfigProvider Provider');
  }

   
}
