import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-homepage',
  imports: [Header],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css']
})
export class Homepage implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      let currentSlide = 0;
      const slides = document.querySelectorAll('.hero-slide') as NodeListOf<HTMLElement>;

      slides[currentSlide].classList.add('active');

      setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
      }, 5000); // 5 seconds per slide
    }
  }
}
