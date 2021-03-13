import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Deck } from 'src/app/interfaces';

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
    private alertCtrl: AlertController
  ) { }
  async ngOnInit() {
    // const res = this.dataService.getDecks();
    // this.decks = res.list;
  }

  selectDeck = (id) => this.deckid = id;

  selectAvatar = (selected) => this.avatar = selected;

  setSize = (size) => this.boardSize = size;
  
  // startGame = async () => {
    
  //   if (! (this.user && this.avatar && this.category ))
  //     return await this.presentAlert('Missing values!', 'Please enter all values before begin')



  //   let res = await this.dataService.getQuestions(this.category);

  //   if (res.response_code === 0) {
  //     console.log(this.user, this.avatar, this.category);
  //     await this.presentModal(res.results, this.user, this.avatar, this.findCategory(this.category))
  //   } else {
  //     await this.presentAlert('Oppps!', 'Something went wrong, please try again')
  //   }
  // }

  async presentAlert(header, message) {
    const alert = await this.alertCtrl.create({
      header, message, buttons: ['OK']
    });
    await alert.present();
  }


  // async presentModal(questions, user, avatar, category) {
  //   const modal = await this.modalCtrl.create({
  //     component: GameModalPage,
  //     cssClass: 'my-custom-class',
  //     componentProps: { questions, user, avatar, category }
  //   });
  //   return modal.present();
  // }
}
