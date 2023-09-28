import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ar-zone',
  templateUrl: './ar-zone.page.html',
  styleUrls: ['./ar-zone.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArZonePage implements OnInit {
  @Input() recurso: any;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

  }

  close(){
    this.modalCtrl.dismiss();
  }

}
