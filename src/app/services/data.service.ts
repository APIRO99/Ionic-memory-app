import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Deck } from 'src/app/interfaces';

interface response {
  decks: Deck[]
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getDecks = () =>
    this.http.get<response>('/assets/data/deckMockResponse.json')
      .toPromise();
}