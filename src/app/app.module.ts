import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './pages/home/home.component';
import { SimpleCardComponent } from './components/simple-card/simple-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    SimpleCardComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
