import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { BookingformComponent } from './bookingform/bookingform.component';
import { ViewroomComponent } from './viewroom/viewroom.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookingformComponent,
    ViewroomComponent,
    ViewbookingComponent
  ],
  imports: [
    BrowserModule,
    routing 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
