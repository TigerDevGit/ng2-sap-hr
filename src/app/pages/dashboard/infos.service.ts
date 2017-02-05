import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class InfosService {
	md_emp_list: Array<Emp>;
	md_pa40: Object;
	md_it0000: Res_it0000;
	md_it0001: Object;
	md_it0002: Object;
	md_it0006: Object;

	curEmpName: any;
	curEmpInfo: any;

	constructor(private http: Http) {		
		this.getMasterDataFromServer();
	}

	getPersonalInfo(val: number) {
		let s = val + "";
		while (s.length < 8) s = "0" + s;

		this.http.get('http://103.16.71.249:8000/vallis/pa/ID' + s).map(res => res.json()).subscribe(info => {
			console.log(info.pernr);
			console.log(this.getName(info.pernr));
			this.curEmpInfo = info;
			this.curEmpName = this.getName(info.pernr);
		});
	}

	getName(pernr: string) {
		for(let emp of this.md_emp_list) {
			if(emp.pernr == pernr) {
				return emp;
			}
		}
		return false;
	}

	getMD0(field: string, value: string): string {
		// let arr = this.md_it0000.md0000.table_action_type;

		// for (let i of arr) {
		// 	if(i.action_type == value) {
		// 		return i.action_type_txt;
		// 	}
		// }
		return value
	}

	getMasterDataFromServer() {
		this.http.get('http://103.16.71.249:8000/vallis/md/employee').map(res => res.json()).subscribe(info => {
			console.log("NameMD", info);
			this.md_emp_list = info.md_employee.table_employee_list;
		});
		this.http.get('http://103.16.71.249:8000/vallis/md/pa40/EN').map(res => res.json()).subscribe(info => {
			console.log("pa40", info);
			this.md_pa40 = info.pa40;
		});

		this.http.get('http://103.16.71.249:8000/vallis/md/it0000/EN').map(res => res.json()).subscribe(info => {
			console.log("it0000 Master Data", info);
			this.md_it0000 = info.md0000;
		});
		this.http.get('http://103.16.71.249:8000/vallis/md/it0001/EN').map(res => res.json()).subscribe(info => {
			console.log("it0001 Master Data", info);
			this.md_it0001 = info.md0001;
		});
		this.http.get('http://103.16.71.249:8000/vallis/md/it0002/EN').map(res => res.json()).subscribe(info => {
			console.log("it0002 Master Data", info);
			this.md_it0002 = info.md0002;
		});
		this.http.get('http://103.16.71.249:8000/vallis/md/it0006/EN').map(res => res.json()).subscribe(info => {
			console.log("it0006 Master Data", info);
			this.md_it0006 = info.md0006;
		});
	}
}

interface Res_it0000 {
	msgtype: string;
	message: string;
	details: string;
	md0000: md0000;
}

interface md0000 {
	table_action_type: Array<action_type>;
	table_reason: Array<Object>;
	table_employment_stat: Array<Object>;
}

interface action_type {
	action_type: string;
	action_type_txt: string;
}

interface Emp {
	pernr: string;
	firstname: string;
	lastname: string;
}