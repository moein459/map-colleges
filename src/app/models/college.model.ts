import {LatLng} from './lat-lng.model';
import {CollegeType} from './college-type.enum';

export interface College {
	id: number;
	latLng: LatLng;
	collegeType: CollegeType;
	title: string;
	telephone: string[];
	address: string;
	description: string;
	images: string[];
	features: string[];
}
