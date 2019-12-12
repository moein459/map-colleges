import {Component, OnInit} from '@angular/core';
import {CollegeService} from '../../../services/college/college.service';
import {ActivatedRoute} from '@angular/router';
import {College} from '../../../models/college.model';

@Component({
	selector: 'app-college-detail',
	templateUrl: './college-detail.component.html',
	styleUrls: ['./college-detail.component.scss']
})
export class CollegeDetailComponent implements OnInit {
	collegeId: number;
	college: College;

	constructor(private collegeService: CollegeService, private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.collegeId = +this.route.snapshot.paramMap.get('id');
		this.getCollegeInfo();
	}

	getCollegeInfo() {
		this.collegeService.list().subscribe(value => {
			this.college = value.find(x => x.id === this.collegeId);
		});
	}
}
