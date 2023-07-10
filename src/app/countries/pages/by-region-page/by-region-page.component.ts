import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Europe', 'Oceania', 'Asia'];
  public selectedRegion?: Region;

  public isLoaded: boolean = false;

  constructor(private countriesService: CountriesService) { }

  searchRegion(region: Region): void {
    this.selectedRegion = region

    this.isLoaded = true;
    this.countriesService.searchRegion(region).subscribe(countries => {
      this.countries = countries;
      this.isLoaded = false;
    })
  }
}
