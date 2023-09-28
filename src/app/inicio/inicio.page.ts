import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { ArZonePage } from '../ar-zone/ar-zone.page';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openModalTULUM() {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: ArZonePage,
      backdropDismiss: true,
      animated: true,
    });

    return await modal.present();
  }

}
