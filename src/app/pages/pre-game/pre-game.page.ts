import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Deck } from 'src/app/interfaces';
import { DataService } from 'src/app/services/data.service';
import { GamePage } from '../game/game.page';

@Component({
  selector: 'app-pre-game',
  templateUrl: './pre-game.page.html',
  styleUrls: ['./pre-game.page.scss'],
})
export class PreGamePage implements OnInit {
  decks: Array<Deck>;
  board_sizes = [2, 4, 6];

  deckid: number;
  user: string;
  boardSize: number;
  avatar: number;
  
  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private dataService: DataService
  ) { }
  async ngOnInit() {
    this.decks = (await this.dataService.getDecks()).decks;
  }

  selectDeck = (id) => this.deckid = id;

  selectAvatar = (selected) => this.avatar = selected;

  setSize = (size) => this.boardSize = size;
  
  startGame = async () => {
    console.log( this.user, this.avatar, this.boardSize, this.deckid );
    
    if (! (this.user && this.avatar && this.boardSize ))
      if( !( this.deckid < 0 ))
        return await this.presentAlert('Missing values!', 'Please enter all values before begin');
      
    const gameData = { 
      user:      this.user,
      avatar:    this.avatar, 
      boardSize: this.boardSize, 
      deck:      this.decks[this.deckid]
    };
    await this.presentModal(gameData);
  }

  async presentAlert(header, message) {
    const alert = await this.alertCtrl.create({
      header, message, buttons: ['OK']
    });
    await alert.present();
  }

  slideOpts = {
    slidesPerView: 3.8,
    freeMode: true
  };


  async presentModal(game) {
    const modal = await this.modalCtrl.create({
      component: GamePage,
      cssClass: 'my-custom-class',
      componentProps: { game }
    });
    return modal.present();
  }
}
