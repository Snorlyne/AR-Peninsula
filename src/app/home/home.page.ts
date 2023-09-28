import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ArZonePage } from '../ar-zone/ar-zone.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

  }

  async openAR() {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: ArZonePage,
      backdropDismiss: true,
    });

    return await modal.present();
  }

}
