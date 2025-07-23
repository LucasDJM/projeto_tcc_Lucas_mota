import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
    @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.querySelector('header');
    if (window.pageYOffset > 50) {
      header?.classList.add('sticky');
    } else {
      header?.classList.remove('sticky');
    }
  }

   isCollapsed = true;

  closeMenu() {
    const nav = document.getElementById('navbarNav');
    if (nav && nav.classList.contains('show')) {
      nav.classList.remove('show');
    }
  }
}
