import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { StorageProvider } from "../storage/storage";

/*
  Generated class for the ToolsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToolsProvider {
  

  constructor(
    public http:Http,
    public storage:StorageProvider,
    
    ) {
    console.log('Hello ToolsProvider Provider');
  }
  
  getUserIfo(){
    var userinfo=this.storage.get("userinfo");
    return userinfo;
  }
}
