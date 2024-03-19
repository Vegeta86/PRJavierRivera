import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, concatMap, of, range, toArray, map, throwError } from 'rxjs';
import { Resp, Result } from '../interfaces/GetCharactersResponse';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Result[]> {
    return this.http.get<Resp>(`${this.baseUrl}/character`).pipe(
      concatMap((data: Resp) => {
        const pages = data.info.pages;
        return range(1, pages);
      }),
      concatMap(page => this.http.get<Resp>(`${this.baseUrl}/character?page=${page}`)),
      toArray(),
      map((responses: Resp[]) => {
        const allCharacters: Result[] = [];
        responses.forEach(response => {
          allCharacters.push(...response.results);
        });
        localStorage.setItem('characters', JSON.stringify(allCharacters));
        return allCharacters;
      })
    );
  }

  addCharacter(character: Result) {
    const characters = JSON.parse(localStorage.getItem('characters') ?? '') || [];
    characters.push(character);
    localStorage.setItem('characters', JSON.stringify(characters));
    return of(character);
  }

  updateCharacter(id: number, updatedCharacter: Result) {
    let characters = JSON.parse(localStorage.getItem('characters') || '') || [];
    characters = characters.map((character: { id: number; }) => character.id === id ? updatedCharacter : character);
    localStorage.setItem('characters', JSON.stringify(characters));
    return of(updatedCharacter);
  }

  deleteCharacter(id: number) {
    let characters = JSON.parse(localStorage.getItem('characters') || '') || [];
    characters = characters.filter((character: { id: number; }) => character.id !== id);
    localStorage.setItem('characters', JSON.stringify(characters));
    return of(null);
  }

  getRandomCharacterImage(): Observable<string> {
    const characters = JSON.parse(localStorage.getItem('characters') || '') || [];
    if (characters.length === 0) {
      return throwError('No characters found');
    }
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    return of(randomCharacter.image);
  }
}
