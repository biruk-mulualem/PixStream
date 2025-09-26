
// import { Aboutuscard } from '../../../components/admindashboard/aboutuscard/aboutuscard';
// import { Articlecard } from '../../../components/admindashboard/articlecard/articlecard';
// import { Audiocard } from '../../../components/admindashboard/audiocard/audiocard';
// import { Contactuscard } from '../../../components/admindashboard/contactuscard/contactuscard';
// import { Gallerycard } from '../../../components/admindashboard/gallerycard/gallerycard';
// import { Header } from '../../../components/admindashboard/header/header';
// import { Sidebar } from '../../../components/admindashboard/sidebar/sidebar';
// import { Videocard } from '../../../components/admindashboard/videocard/videocard';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admindashboard',
    imports: [CommonModule, FormsModule],  // <-- currently only these two
  templateUrl: './admindashboard.html',
  styleUrls: ['./admindashboard.css']  // <-- corrected here
})
export class Admindashboard {
  uploadItems = ['Video', 'Gallery', 'Audio', 'Article'];
  selectedItem = this.uploadItems[0];
  userMenuOpen = false;
  sidebarClosed = true; // Start closed on small screens

  selectItem(item: string) {
    this.selectedItem = item;
  }

  toggleUserMenu() {
    this.userMenuOpen = !this.userMenuOpen;
  }

  toggleSidebar() {
    this.sidebarClosed = !this.sidebarClosed;
  }

  closeSidebarOnMobile() {
    if (window.innerWidth <= 480) {
      this.sidebarClosed = true;
    }
  }
}
