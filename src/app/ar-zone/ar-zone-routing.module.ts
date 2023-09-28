import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArZonePage } from './ar-zone.page';

const routes: Routes = [
  {
    path: '',
    component: ArZonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArZonePageRoutingModule {}
