import {Component, NgZone, OnInit} from '@angular/core';
import {latLng, marker, tileLayer} from 'leaflet';
import {CollegeService} from '../../../services/college/college.service';
import {College} from '../../../models/college.model';
import {Router} from '@angular/router';

@Component({
	selector: 'app-map-colleges',
	templateUrl: './map-colleges.component.html',
	styleUrls: ['./map-colleges.component.scss']
})
export class MapCollegesComponent implements OnInit {
	colleges: College[];

	options = {
		layers: [
			tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'})
		],
		zoom: 13,
		height: 800,
		center: latLng(33.9850, 51.4100)
	};

	layersControl = {
		baseLayers: {
			'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'}),
			'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'})
		},
		// overlays: {
		// 	'Big Circle': circle([46.95, -122], {radius: 5000}),
		// 	'Big Square': polygon([[46.8, -121.55], [46.9, -121.55], [46.9, -121.7], [46.8, -121.7]])
		// }
	};

	layers = [
		// marker([33.9850, 51.4100]).on('click', () => {
		// }).bindPopup('<p>' + 'هنرستان شهید بهشتی' + '</p>'),
		// marker([33.9900, 51.4500]).on('click', () => {
		// }).bindPopup('<p>' + 'دبیرستان شهید محتشمی' + '</p>'),
	];

	constructor(private collegeService: CollegeService, private router: Router, private ngZone: NgZone) {
	}

	ngOnInit() {
		this.getColleges();
	}

	getColleges() {
		this.collegeService.list().subscribe(value => {
			this.colleges = value;
			this.colleges.forEach(x => this.layers.push(marker([x.latLng.latitude, x.latLng.longitude]).on('click', () => {
				this.ngZone.run(() => {
					this.router.navigate(['/home/college', x.id]);
				});
			})));
		});
	}
}
