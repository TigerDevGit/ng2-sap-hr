import { Component } from '@angular/core';

import {InfosService} from '../infos.service';

@Component({
	selector: 'organization',
	template: `
		<h1>Organization Component</h1>
		<div *ngIf="infos?.curEmpInfo?.it0001_tab">
			<h1>1 Exist!</h1>
			<ba-card *ngFor="let it1 of infos.curEmpInfo.it0001_tab">
				<h3>{{it1.date_start}}</h3>
				<h3>{{it1.date_end}}</h3>
				<h3>{{it1.company_code}}</h3>
				<h3>{{it1.personal_area}}</h3>
				<h3>{{it1.personal_subarea}}</h3>
				<h3>{{it1.employee_group}}</h3>
				<h3>{{it1.employee_subgroup}}</h3>
				<h3>{{it1.business_area}}</h3>
				<h3>{{it1.payrol_area}}</h3>
				<h3>{{it1.cost_center}}</h3>
				<h3>{{it1.last_first_name}}</h3>
				<h3>{{it1.organization_unit}}</h3>
				<h3>{{it1.organization_key}}</h3>
				<h3>{{it1.position}}</h3>
				<h3>{{it1.job_key}}</h3>
				<h3>{{it1.change_date}}</h3>
				<h3>{{it1.change_user}}</h3>
			</ba-card>
		</div>
	`,
})

export class OrganizationComponent {
	constructor(private infos: InfosService) {

	}
}