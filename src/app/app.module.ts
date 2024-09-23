import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './pages/home/home.component';
import { SimpleCardComponent } from './components/simple-card/simple-card.component';
import { ClockModule } from './modules/clock/clock.module';

@NgModule({
  declarations: [
    HomeComponent,
    SimpleCardComponent
  ],
  imports: [
    BrowserModule,
    ClockModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
