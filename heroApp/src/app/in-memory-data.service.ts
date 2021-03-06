import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
  { id: 11, name: 'Dr Strange' },
  { id: 12, name: 'Iron Man' },
  { id: 13, name: 'Amanda' },
  { id: 14, name: 'Thor' },
  { id: 15, name: 'Batman' },
  { id: 16, name: 'Spider Man' },
  { id: 17, name: 'Super Man' },
  { id: 18, name: 'Black Widow' },
  { id: 19, name: 'Captain America' },
  { id: 20, name: 'Black Panther' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}