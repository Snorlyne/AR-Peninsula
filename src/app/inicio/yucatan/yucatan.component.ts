import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ArZonePage } from 'src/app/ar-zone/ar-zone.page';

@Component({
  selector: 'app-yucatan',
  templateUrl: './yucatan.component.html',
  styleUrls: ['./yucatan.component.scss']
})
export class YucatanComponent {
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async ModalAR(recurso: number) {
    const modal: HTMLIonModalElement = await this.modalCtrl.create({
      component: ArZonePage,
      backdropDismiss: true,
      animated: true,
      componentProps: { recurso: recurso }
    });

    return await modal.present();
  }
  
}
