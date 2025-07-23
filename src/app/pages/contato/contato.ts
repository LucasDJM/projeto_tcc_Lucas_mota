import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { FomrContato } from "../../components/fomr-contato/fomr-contato";

@Component({
  selector: 'app-contato',
  imports: [Navbar, Footer, FomrContato],
  templateUrl: './contato.html',
  styleUrl: './contato.css'
})
export class Contato {

}
