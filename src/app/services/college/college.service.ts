import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {College} from '../../models/college.model';
import {Data} from '../../models/data.model';
import {Degree} from '../../models/degree.model';
import {CollegeType} from '../../models/college-type.model';
import {filter} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class CollegeService {
	data: Data;
	private dataGet = new BehaviorSubject<Data>(null);
	dataGet$ = this.dataGet.asObservable().pipe(filter(x => x != null));

	constructor(private http: HttpClient) {
		this.getData();
	}

	getData() {
		this.http.get<Data>('./data.json').subscribe(value => {
			this.data = value;
			this.dataGet.next(value);
		});
	}

	getCollege(id: number): College {
		return this.data.colleges.find(x => x.id === id);
	}

	getColleges(degree?: number[]): College[] {
		return this.data.colleges.filter(x => degree == null || degree.some(z => z === x.degree));
	}

	getDegrees(): Degree[] {
		return this.data.degrees;
	}

	getCourseTypes(): CollegeType[] {
		return this.data.collegeTypes;
	}
}
