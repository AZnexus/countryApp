import { Component } from '@angular/core';

import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: []
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {};

  searchByCountryName(term: string): void {
    this.countriesService.searchCountry(term)
      .subscribe(countries => {
        this.countries = countries;
      }); // Si no es posa el subscribe, tota peticio a un Observable no retornarà res.
  }
}
