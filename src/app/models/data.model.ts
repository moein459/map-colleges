import {Degree} from './degree.model';
import {College} from './college.model';
import {CollegeType} from './college-type.model';

export interface Data {
	degrees: Degree[];
	colleges: College[];
	collegeTypes: CollegeType[];
}
