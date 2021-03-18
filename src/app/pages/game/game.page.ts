import { Component, Input, OnInit } from '@angular/core';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { Observable, Subscription, timer } from 'rxjs';
import { Deck, Game } from 'src/app/interfaces';
import { LocalStorageService } from 'src/app/services/local-storage.service';

interface GameData {
  user: string;
  avatar: number;
  boardSize: number;
  deck: Deck;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  @Input() game: GameData;
  timecounter: Observable<number> = timer(0, 1000);
  timeSubscription: Subscription;

  moves: number = 0;
  time: number = 0;
  pairsFound: number = 0;
  firstmove = true;
  pairs: number;
  previousSelected: any;
  canplay = true;
  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private modalController: ModalController,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() { 
    this.pairs = ( this.game.boardSize * this.game.boardSize ) / 2;

    this.timeSubscription = this.timecounter.subscribe(ellapsedCycles => {
      this.time++;
    })
  }




  handleMove = async (item) => {
    if (!this.canplay) return;
    if (!item.flipped) {
      return;
    }

    if (this.firstmove) {
      item.flipped = false;
      this.previousSelected = item;
      this.firstmove = false;
      return;
    }

    this.moves++;
    this.firstmove = true;
    item.flipped = false;

    if (item.imgid == this.previousSelected.imgid) {
      this.pairsFound++;
      if (this.pairs == this.pairsFound) {
        this.timeSubscription.unsubscribe();
        await this.presentAlert();
      }
    } else {
      this.canplay = false;
      await this.presentToast("opps, try again", 2000);
      await setTimeout(() => {
        item.flipped = true;
        this.previousSelected.flipped = true;
        this.canplay = true;
      }, 2000);
    }
  } 


  closeModal = () => {
    const game: Game = {
      userId: this.game.user,
      boardSize: this.game.boardSize,
      avatar: `./assets/img/avatars/av${this.game.avatar}.jpg`,
      time: this.time,
      moves: this.moves,
      id:0,
    }
    this.localStorageService.saveNewGame(game);
    this.modalController.dismiss();
  }



/**************************** Style ****************************/
  
  imageMargin = (boardSize) => {
    return (boardSize == 2) ? '30px 0px'
      : (boardSize == 4)    ? '15px 0px' : '5px 0px'
  }

/***************************************************************/



/**************************** utils ****************************/

  async presentToast(message, duration) {
    const toast = await this.toastController.create({
      message, duration
    });
    return toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Game finished :)',
      message: `Congragulations!, you finished with ${this.moves} moves in ${this.time} seconds.`,
      buttons: [{
          text: 'Ok',
          handler: () => this.closeModal()
        }
      ]
    });

    await alert.present();
  }

/***************************************************************/

}
