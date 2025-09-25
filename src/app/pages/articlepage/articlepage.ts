import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footercard } from '../../components/footercard/footercard';
@Component({
  selector: 'app-articlepage',
  imports: [Header,Footercard],
  templateUrl: './articlepage.html',
  styleUrl: './articlepage.css'
})
export class Articlepage {

}
