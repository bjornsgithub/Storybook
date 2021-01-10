import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    BrowserModule
  ],
  exports: [ButtonComponent]
})
export class ComponentsModule { }
