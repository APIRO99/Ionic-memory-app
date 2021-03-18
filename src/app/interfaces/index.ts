export interface Deck {
  id: number;
  title: string;
  photos: Array<string>;
}

export interface Game {
  id: number;
  time: number;
  moves: number;
  avatar: string;
  userId: string;
  boardSize: number;
}