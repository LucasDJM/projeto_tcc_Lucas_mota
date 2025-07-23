import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { Livros } from "../../components/livros/livros";

@Component({
  selector: 'app-ebooks',
  imports: [Navbar, Footer, Livros],
  templateUrl: './ebooks.html',
  styleUrl: './ebooks.css'
})
export class Ebooks {

}
