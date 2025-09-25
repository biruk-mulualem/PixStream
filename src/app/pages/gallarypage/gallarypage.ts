import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { Footercard } from '../../components/footercard/footercard';

@Component({
  selector: 'app-gallarypage',
  standalone: true,
  imports: [CommonModule, Header, Footercard],
  templateUrl: './gallarypage.html',
  styleUrls: ['./gallarypage.css'] // <-- corrected
})
export class Gallarypage {
  galleryItems = [
    { image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d', title: 'Beautiful Landscape', description: 'A breathtaking view of nature.' },
    { image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', title: 'City Vibes', description: 'The city lights up at night.' },
    { image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702', title: 'Adventure', description: 'Exploring the unknown.' },
    { image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f', title: 'Serenity', description: 'Calm and peaceful moments.' },
    /* ...repeat or add more unique items as needed... */
        { image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d', title: 'Beautiful Landscape', description: 'A breathtaking view of nature.' },
    { image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', title: 'City Vibes', description: 'The city lights up at night.' },
    { image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702', title: 'Adventure', description: 'Exploring the unknown.' },
    { image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f', title: 'Serenity', description: 'Calm and peaceful moments.' },
    /* ...repeat or add more unique items as needed... */
        { image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d', title: 'Beautiful Landscape', description: 'A breathtaking view of nature.' },
    { image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', title: 'City Vibes', description: 'The city lights up at night.' },
    { image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702', title: 'Adventure', description: 'Exploring the unknown.' },
    { image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f', title: 'Serenity', description: 'Calm and peaceful moments.' },
    /* ...repeat or add more unique items as needed... */
        { image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d', title: 'Beautiful Landscape', description: 'A breathtaking view of nature.' },
    { image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', title: 'City Vibes', description: 'The city lights up at night.' },
    { image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702', title: 'Adventure', description: 'Exploring the unknown.' },
    { image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f', title: 'Serenity', description: 'Calm and peaceful moments.' },
    /* ...repeat or add more unique items as needed... */    { image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d', title: 'Beautiful Landscape', description: 'A breathtaking view of nature.' },
    { image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', title: 'City Vibes', description: 'The city lights up at night.' },
    { image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702', title: 'Adventure', description: 'Exploring the unknown.' },
    { image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f', title: 'Serenity', description: 'Calm and peaceful moments.' },
    /* ...repeat or add more unique items as needed... */
        { image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d', title: 'Beautiful Landscape', description: 'A breathtaking view of nature.' },
    { image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', title: 'City Vibes', description: 'The city lights up at night.' },
    { image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702', title: 'Adventure', description: 'Exploring the unknown.' },
    { image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f', title: 'Serenity', description: 'Calm and peaceful moments.' },
    /* ...repeat or add more unique items as needed... */
        { image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d', title: 'Beautiful Landscape', description: 'A breathtaking view of nature.' },
    { image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', title: 'City Vibes', description: 'The city lights up at night.' },
    { image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702', title: 'Adventure', description: 'Exploring the unknown.' },
    { image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f', title: 'Serenity', description: 'Calm and peaceful moments.' },
    /* ...repeat or add more unique items as needed... */
  ];
}
