import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {MapCollegesComponent} from './components/_partials/map-colleges/map-colleges.component';
import {CollegeDetailComponent} from './components/_partials/college-detail/college-detail.component';


const routes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{
		path: 'home', component: HomePageComponent, children: [
			{path: '', component: MapCollegesComponent},
			{path: 'college/:id', component: CollegeDetailComponent},
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
