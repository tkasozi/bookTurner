import { Component, Injectable, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';


@Injectable()
class BaseComponent implements OnInit{
  constructor(public navCtrl: NavController){}
  
  lastPage() {
    // Let's navigate from TabsPage to Page1
    this.navCtrl.pop();
  }
  nextPage(){}
  ngOnInit(){}
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage extends BaseComponent {
  lastPage() { this.navCtrl.goToRoot }
  nextPage() {
    this.navCtrl.push(ContentPage1)
  }
  title = "A BookTurner";
}

@Component({
  selector: 'content-page',
  templateUrl:'../content-page.html'
})
export class ContentPage1 extends BaseComponent{
  goTo(choice){
    switch(choice){
      case "intro":
      this.navCtrl.push(Introduction);
      break;
      case "chp1":
      this.navCtrl.push(Chapter2);
      break;
      case "chp2":
      this.navCtrl.push(Chapter3);
      break;
      default:
    }
  }
  nextPage() {
    this.navCtrl.push(Introduction);
  }
  title = "Table of Content";
  page = "I";
}

@Component({
  selector:'page1',
  templateUrl:'../page1.html' 
})
export class Introduction extends BaseComponent{
  nextPage() {
    this.navCtrl.push(Chapter2);
  }
  title = "Introduction";
  page = "1";
}

@Component({
  selector:'page2',
  templateUrl:'../page2.html' 
})
export class Chapter2 extends BaseComponent{
  nextPage() {
    this.navCtrl.push(Chapter3);
  }
  title = "The Told Story";
  page = "2";
}

@Component({
  selector:'page3',
  templateUrl:'../page3.html' 
})
export class Chapter3 extends BaseComponent{
  title = "The Last Chapter";
  page = "2";
}
