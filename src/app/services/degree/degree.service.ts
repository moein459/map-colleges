import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DegreeService {
	currentDegree = new BehaviorSubject<number[]>(null);

	constructor() {
	}
}
