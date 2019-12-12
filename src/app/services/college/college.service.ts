import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {College} from '../../models/college.model';
import {filter, find} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class CollegeService {

	constructor(private http: HttpClient) {
	}

	list(): Observable<College[]> {
		return this.http.get<College[]>('./data.json');
	}

	get(id: number): Observable<College> {
		return this.http.get<College>('./data.json');
	}
}
