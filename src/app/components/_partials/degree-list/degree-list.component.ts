import {Component, OnInit} from '@angular/core';
import {Degree} from '../../../models/degree.model';
import {CollegeService} from '../../../services/college/college.service';

@Component({
	selector: 'app-degree-list',
	templateUrl: './degree-list.component.html',
	styleUrls: ['./degree-list.component.scss']
})
export class DegreeListComponent implements OnInit {
	degrees: Degree[];

	constructor(private collegeService: CollegeService) {
	}

	ngOnInit() {
		this.getDegrees();
	}

	getDegrees() {
		this.collegeService.dataGet$.subscribe(value => {
			this.degrees = value.degrees;
		});
	}
}
