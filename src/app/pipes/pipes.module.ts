import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './sort.pipe';
import { BoardSortPipe } from './board-sort.pipe';



@NgModule({
  declarations: [SortPipe, BoardSortPipe],
  exports: [SortPipe, BoardSortPipe],
  imports: [CommonModule]
})
export class PipesModule { }
