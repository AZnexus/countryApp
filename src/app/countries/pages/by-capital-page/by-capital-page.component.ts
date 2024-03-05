import { Component } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: []
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {};

  searchByCapital(term: string): void {
    this.countriesService.searchCapital(term)
      .subscribe(countries => {
        console.log(countries); // delete this
        this.countries = countries;
      }); // Si no es posa el subscribe, tota peticio a un Observable no retornarà res.
  }
}
