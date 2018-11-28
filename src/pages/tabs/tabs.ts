import { Component } from '@angular/core';


import { HomePage } from '../home/home';
// 自定义界面
import { CartPage } from '../cart/cart';
import { CategoryPage } from '../category/category';
import { UserPage } from '../user/user';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CategoryPage;
  tab3Root = CartPage;
  tab4Root = UserPage;
  

  constructor() {

  }
}
