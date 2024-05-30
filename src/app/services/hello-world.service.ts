import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IResponse } from '../../models/result.model';
import { Pokemon } from '../../models/pokemon.model';

@Injectable({
    providedIn: 'root'
})
export class HelloWorldService {
    constructor(private http: HttpClient) {}

    getPokemons(): Observable<Pokemon[]> {
        return this.http.get<IResponse>('https://pokeapi.co/api/v2/pokemon?limit=100')
        .pipe(
            map((response) => response.results ?? [])
        );
    }
}