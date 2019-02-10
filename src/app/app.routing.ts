import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import home components
import { LoginComponent } from './login/login.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { ViewroomComponent } from './viewroom/viewroom.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';



const appRoutes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'bookingform', component: BookingformComponent },
{ path: 'viewroom', component: ViewroomComponent },
{ path: 'viewbooking', component: ViewbookingComponent },



// redirect to home page on load
{ path: '', component: LoginComponent, pathMatch: 'full'}];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);