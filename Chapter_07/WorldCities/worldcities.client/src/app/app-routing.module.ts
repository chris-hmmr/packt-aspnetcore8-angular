import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import {CitiesComponent} from "./cities/cities.component";
import { CityEditComponent} from "./cities/city-edit.component";
import {CountriesComponent} from "./countries/countries.component";
import {CountryEditComponent} from "./countries/country-edit.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'cities', component: CitiesComponent },
  { path: 'city/:id', component: CityEditComponent },
  { path: 'city', component: CityEditComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'country', component: CountryEditComponent},
  { path: 'country/:id', component: CountryEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
