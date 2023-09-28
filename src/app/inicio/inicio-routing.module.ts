import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';
import { QrooComponent } from './qroo/qroo.component';
import { YucatanComponent } from './yucatan/yucatan.component';
import { CampecheComponent } from './campeche/campeche.component';

const routes = [
  {
    path: '',
    children: [
      {
      path: '',
      component: InicioPage,
      data: {
        title: 'Mapas'
      }
    },
      {
        path: 'qroo',
        component: QrooComponent,
        data: {
          title: 'Quintana_Roo'
        }
      },
      {
        path: 'campeche',
        component: CampecheComponent,
        data: {
          title: 'Campeche'
        }
      },
        {
        path: 'yucatan',
        component: YucatanComponent,
        data: {
          title: 'Yucatan'
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
