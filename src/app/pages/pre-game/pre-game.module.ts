import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreGamePageRoutingModule } from './pre-game-routing.module';

import { PreGamePage } from './pre-game.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreGamePageRoutingModule,
    ComponentsModule
  ],
  declarations: [PreGamePage]
})
export class PreGamePageModule {}
