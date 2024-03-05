import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError, of } from 'rxjs';

import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  // Els codis de cerca son practicament identics. L'unica diferencia està en una seccio de la url. S'hauria d'unificar

  searchCountryByAlphaCode(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${term}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([])) // No es tractarà l'error. Es mostra directament l'error per consola.
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    );
  }

  searchRegion(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    );
  }
}
