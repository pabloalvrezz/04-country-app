import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, delay, map, Observable, of } from 'rxjs'

import { Country } from '../interfaces/country'

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  // metodo que usaremos para reutilizarlo y llamarlo en otros metodos
  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        // en caso de que suceda algun error en vez de devolver un observable
        // devolveremos un objeto vacio
        catchError(error => of([])),
        delay(2000),
      )
  }
  // metodo que usaremos para buscar el pais por el codigo de este
  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;

    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null)),
        delay(2000),
      );
  }



  // metodo que usaremos para buscar los paises por la capital de estos
  searchCapital(busqueda: string): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${busqueda}`

    return this.getCountriesRequest(url)
  }

  // metodo que usaremos para buscar los paises por el nombre de estos
  searchByName(busqueda: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${busqueda}`

    return this.getCountriesRequest(url)
  }

  // metodo que usaremos para buscar los paises por la region
  searchRegion(region: string): Observable<Country[]> {

    const urlRegion = `${this.apiUrl}/region/${region}`

    return this.getCountriesRequest(urlRegion)
  }
}
