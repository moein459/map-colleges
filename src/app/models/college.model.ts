import {LatLng} from './lat-lng.model';

export interface College {
	id: number;
	latLng: LatLng;
	collegeType: number;
	title: string;
	telephone: string[];
	address: string;
	description: string;
	images: string[];
	features: string[];
	degree: number;
}
