import { Routes } from '@angular/router';
import { Aboutus } from './pages/aboutus/aboutus';
import { Contactus } from './pages/contactus/contactus';
import { Homepage } from './pages/homepage/homepage';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'aboutus', component: Aboutus },
  { path: 'contactus', component: Contactus },
  { path: '**', redirectTo: '' }
];
