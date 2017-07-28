import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  users:Array<any> = [
    {"index"  :1,
     "name"   :"李易峰",
     "theme"  :"1987了",
     "place"  :"广州",
     "price1" :480,
     "price2" :880,
     "price3" :1280,
     "tic_sta":"在售"},
    {"index"  :2,
     "name"   :"周杰伦",
     "theme"  :"前世情人",
     "place"  :"广州",
     "price1" :480,
     "price2" :880,
     "price3" :1280,
     "tic_sta":"在售"},
    {"index"  :3,
     "name"   :"张学友",
     "theme"  :"她来听我演唱会",
     "place"  :"广州",
     "price1" :680,
     "price2" :1080,
     "price3" :1480,
     "tic_sta":"在售"},
    {"index"  :4,
     "name"   :"陈奕迅",
     "theme"  :"浮夸",
     "place"  :"佛山",
     "price1" :680,
     "price2" :880,
     "price3" :1280,
     "tic_sta":"在售"},
    {"index"  :5,
     "name"   :"张杰",
     "theme"  :"他不懂",
     "place"  :"深圳",
     "price1" :480,
     "price2" :880,
     "price3" :1280,
     "tic_sta":"售罄"}
  ]
deleteLast(){
  this.users.pop()
}
saveNewUser(){
  this.users.push({
     "index"  :6,
     "name"   :"待定",
     "theme"  :"待定",
     "place"  :"待定",
     "price1" :"待定",
     "price2" :"待定",
     "price3" :"待定",
     "tic_sta":"敬请期待"
  })
}
sortByAsccending(){
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.users.sort(function (a, b) { 
    if (a.index > b.index) {  
        return 1; 
} 
    if (a.index < b.index) { 
        return -1; 
} 
// a 必须等于 b 
    return 0; 
}); 
}
sortByDesccending(){
// 参考MDN Array操作的API文档 Array相关方法
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.users.sort(function (a, b) { 
    if (a.index > b.index) { 
        return -1; 
    } 
    if (a.index < b.index) { 
        return 1; 
    } 
    // a 必须等于 b 
    return 0; 
    }); 

    }
sortByRadom(){
// 参考MDN Array操作的API文档 Math相关方法
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.users.sort(function (a, b) { 
    if (a.index * Math.random() > b.index * Math.random()) { 
        return 1; 
    } 
    else { 
        return -1; 
    } 
    }); 

} 

  constructor(meta: Meta, title: Title) {
    title.setTitle('My Home Page');

    meta.addTags([ 
      {
        name: 'author', content: 'Wendy'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  ngOnInit() {
  }

}