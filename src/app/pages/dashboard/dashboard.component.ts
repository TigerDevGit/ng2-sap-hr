import {Component} from '@angular/core';

import {InfosService} from './infos.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {
	curView: string;
  constructor(private infos: InfosService) {

  }

  newEmp() {
  	this.curView = 'action';
  }

  setView(val: string) {
  	this.curView = val;
  }
}
