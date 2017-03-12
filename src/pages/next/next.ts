import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-next',
  templateUrl: 'next.html'
})
export class NextPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController) {
    console.log(navParams.get('param1'));
    console.log(navParams.get('param2'));
  }

  goBack() {
    this.viewCtrl.dismiss({
      'asdf': 'hows it goin',
      'newFunc': function() {
        console.log('i am a function');
      }
    });
  }
}
