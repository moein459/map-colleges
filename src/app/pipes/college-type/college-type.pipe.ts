import {Pipe, PipeTransform} from '@angular/core';
import {CollegeType} from '../../models/college-type.model';
import {CollegeService} from '../../services/college/college.service';

@Pipe({
	name: 'collegeType'
})
export class CollegeTypePipe implements PipeTransform {
	collegeTypes: CollegeType[];

	constructor(private collegeService: CollegeService) {

	}

	transform(value: any, ...args: any[]): any {
		this.collegeService.dataGet$.subscribe(value1 => {
			this.collegeTypes = value1.collegeTypes;
		});
		return value ? this.collegeTypes.find(x => x.id === value).title : '';
	}

}
