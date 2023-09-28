import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArZonePageRoutingModule } from './ar-zone-routing.module';

import { ArZonePage } from './ar-zone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArZonePageRoutingModule
  ],
  declarations: [ArZonePage]
})
export class ArZonePageModule {}
