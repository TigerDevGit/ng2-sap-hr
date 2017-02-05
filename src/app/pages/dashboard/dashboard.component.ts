import {Component} from '@angular/core';

import {InfosService} from './infos.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  constructor(private infos: InfosService) {

  }

}
