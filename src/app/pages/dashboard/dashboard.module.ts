import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { InfosService } from './infos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2AutoCompleteModule
  ],
  declarations: [
    Dashboard
  ],
  providers: [
    InfosService
  ]
})
export class DashboardModule {}
