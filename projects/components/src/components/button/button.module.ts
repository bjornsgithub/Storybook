import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }
