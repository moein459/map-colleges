import {Component, NgZone, OnInit} from '@angular/core';
import {icon, latLng, marker, tileLayer} from 'leaflet';
import {CollegeService} from '../../../services/college/college.service';
import {College} from '../../../models/college.model';
import {Router} from '@angular/router';
import {DegreeService} from '../../../services/degree/degree.service';

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
			'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 18,
				attribution: '...'
			}),
			'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
				maxZoom: 18,
				attribution: '...'
			})
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

	constructor(private collegeService: CollegeService, private router: Router, private ngZone: NgZone, private degreeService: DegreeService) {
	}

	ngOnInit() {
		this.getColleges();

		this.degreeService.currentDegree.subscribe(value => {
			if (this.colleges) {
				this.colleges = this.collegeService.getColleges(value);
				this.setMarkers();
			}
		});
	}

	getColleges() {
		this.collegeService.dataGet$.subscribe(value => {
			this.colleges = value.colleges;
			this.setMarkers();
		});
	}

	setMarkers() {
		this.layers.length = 0;
		this.colleges.forEach(college => {
			const degree = this.collegeService.getDegrees().find(x => x.id === college.degree);
			this.layers.push(marker([college.latLng.latitude, college.latLng.longitude],
				{
					icon: icon({
						iconSize: [25, 41],
						iconAnchor: [13, 41],
						iconUrl: degree.iconUrl ? degree.iconUrl : 'assets/marker-icon.png',
						shadowUrl: degree.shadowUrl ? degree.shadowUrl : 'assets/marker-shadow.png',
						className: 'marker-red'
					})
				}).bindTooltip('<p>' + college.title + '</p>', {
				direction: 'top',
				zoomAnimation: true,
				offset: [130, -50]
			})
				.on('click', () => {
					this.ngZone.run(() => {
						this.router.navigate(['/home/college', college.id]);
					});
				}));
		});
	}
}
