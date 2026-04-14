import { Component, OnInit } from '@angular/core';


declare var bootstrap: any;

@Component({
  selector: 'app-cookies-modal',
  imports: [],
  templateUrl: './cookies-modal.html',
  styleUrl: './cookies-modal.css'
})
export class CookiesModal implements OnInit{
  ngOnInit(): void {
   /* const aceitou = localStorage.getItem('cookieConsent');
    if (!aceitou) {
      const modal = new bootstrap.Modal(document.getElementById('cookieModal')!);
      modal.show();*/
     const forcarExibicao = true; // <- coloque como true só durante a apresentação
  const aceitou = localStorage.getItem('cookieConsent');

  if (forcarExibicao || !aceitou) {
    const modal = new bootstrap.Modal(document.getElementById('cookieModal')!);
    modal.show();

    }
  }

  aceitarCookies(): void {
    localStorage.setItem('cookieConsent', 'true');
    const modalEl = document.getElementById('cookieModal');
    const modal = bootstrap.Modal.getInstance(modalEl!);
    modal?.hide();
  }
}
