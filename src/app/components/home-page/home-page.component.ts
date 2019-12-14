import {Component, HostBinding, OnInit} from '@angular/core';
import {circle, latLng, marker, polygon, tileLayer} from 'leaflet';
import {CollegeService} from '../../services/college/college.service';
import {Degree} from '../../models/degree.model';
import {FormControl} from '@angular/forms';
import {DegreeService} from '../../services/degree/degree.service';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
	@HostBinding('class') classed = 'd-flex flex-column h-100';
	degrees: Degree[];

	degreeSelect = new FormControl(null);

	constructor(private collegeService: CollegeService, private degreeService: DegreeService) {
	}

	ngOnInit() {
		this.getDegrees();

		this.degreeSelect.valueChanges.subscribe(value => {
			this.degreeService.currentDegree.next(value);
		});
	}

	getDegrees() {
		this.collegeService.dataGet$.subscribe(value => {
			this.degrees = this.collegeService.getDegrees();
		});
	}
}
