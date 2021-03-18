import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { FlipCardFrontComponent } from './flip-card/flip-card-front';
import { FlipCardBackComponent } from './flip-card/flip-card-back';



@NgModule({
  declarations: [
    FlipCardComponent,
    FlipCardFrontComponent,
    FlipCardBackComponent
  ],
  exports:[
    FlipCardComponent,
    FlipCardFrontComponent,
    FlipCardBackComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
