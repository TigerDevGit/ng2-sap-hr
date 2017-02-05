import { Component } from '@angular/core';

import {InfosService} from '../infos.service';

@Component({
	selector: 'action',
	template: `
		<h1>Actin Component</h1>
		<div *ngIf="infos?.curEmpInfo?.it0000_tab">
			<h1>0 Exist!</h1>
			<ba-card *ngFor="let it0 of infos.curEmpInfo.it0000_tab">
				<h3>{{it0.date_start}}</h3>
				<h3>{{it0.date_end}}</h3>
				<h3>{{it0.action_type}}</h3>
				<h3>{{it0.reason_for_action}}</h3>
				<h3>{{it0.employment_status}}</h3>
				<h3>{{it0.change_date}}</h3>
				<h3>{{it0.change_user}}</h3>
			</ba-card>
		</div>
	`,
})

export class ActionComponent {
	constructor(private infos: InfosService) {

	}
}