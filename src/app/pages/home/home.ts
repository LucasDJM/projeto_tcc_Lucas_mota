import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from "../../components/footer/footer";
import { CtaWattpad } from "../../components/cta-wattpad/cta-wattpad";
import { BannerCarousel } from "../../components/banner-carousel/banner-carousel";
import { SobreDestaque } from "../../components/sobre-destaque/sobre-destaque";
import { LivrosDestaque } from "../../components/livros-destaque/livros-destaque";

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer, CtaWattpad, BannerCarousel, SobreDestaque, LivrosDestaque],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
