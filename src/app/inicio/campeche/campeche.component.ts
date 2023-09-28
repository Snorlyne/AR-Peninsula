import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ArZonePage } from 'src/app/ar-zone/ar-zone.page';

@Component({
  selector: 'app-campeche',
  templateUrl: './campeche.component.html',
  styleUrls: ['./campeche.component.scss']
})
export class CampecheComponent {
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
