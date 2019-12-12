import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { HeaderComponent } from './components/_partials/header/header.component';
import { FooterComponent } from './components/_partials/footer/footer.component';
import { MapCollegesComponent } from './components/_partials/map-colleges/map-colleges.component';
import {HttpClientModule} from '@angular/common/http';
import { CollegeDetailComponent } from './components/_partials/college-detail/college-detail.component';
import {CarouselModule} from 'ngx-bootstrap';

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		HeaderComponent,
		FooterComponent,
		MapCollegesComponent,
		CollegeDetailComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		CarouselModule,
		LeafletModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
