import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { NextPage } from '../next/next';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {
    
  }

  nextPage() {
    // this.navCtrl.push(NextPage, {
    //   'param1': 'hello there',
    //   'param2': 'this is another param'
    // });

    let newModal = this.modalCtrl.create(NextPage, {
      'param1': 'hello there',
      'param2': 'this is another param'
    });

    newModal.present();

    newModal.onWillDismiss( data => {
      if (data !== null) {
        console.log(data);

        data.newFunc();
      }
    })
  }
}
