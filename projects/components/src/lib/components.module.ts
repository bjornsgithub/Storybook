import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ButtonComponent, HeaderComponent],
  imports: [
    BrowserModule
  ],
  exports: [ButtonComponent]
})
export class ComponentsModule { }
