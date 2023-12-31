import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: Country[] = [];
  public isLoaded: boolean = false;

  constructor(private countriesService: CountriesService) { }

  searchByname(term: string): void {
    this.isLoaded = true;
    this.countriesService.searchByName(term).subscribe(countries => {
      this.countries = countries;
      this.isLoaded = false;
    })
  }
}
