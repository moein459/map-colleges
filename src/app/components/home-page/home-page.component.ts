import {Component, HostBinding, OnInit} from '@angular/core';
import {circle, latLng, marker, polygon, tileLayer} from 'leaflet';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
	@HostBinding('class') classed = 'd-flex flex-column h-100';

	constructor() {
	}

	ngOnInit() {
	}

}
