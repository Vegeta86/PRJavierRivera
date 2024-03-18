import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncateOriginPipe } from './truncate-origin.pipe';



@NgModule({
  declarations: [
    TruncateOriginPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TruncateOriginPipe
  ]
})
export class PipesModule { }
