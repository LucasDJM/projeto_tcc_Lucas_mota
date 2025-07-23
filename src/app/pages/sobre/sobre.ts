import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { SobreMim } from "../../components/sobre-mim/sobre-mim";

@Component({
  selector: 'app-sobre',
  imports: [Navbar, Footer, SobreMim],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css'
})
export class Sobre {

}
