import { Routes } from '@angular/router';
import { Aboutus } from './pages/aboutus/aboutus';
import { Contactus } from './pages/contactus/contactus';
import { Homepage } from './pages/homepage/homepage';


export const routes: Routes = [
  { path: '', component: Homepage },       // localhost:4200/
  { path: 'about', component: Aboutus },   // localhost:4200/about
  { path: 'contact', component: Contactus }, // localhost:4200/contact
  { path: '**', redirectTo: '' } // catch-all, redirect unknown routes to home
];
