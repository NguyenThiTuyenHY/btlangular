import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SliderComponent],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }
