import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from '../components/footer/footer';
import { LivrosDestaque } from '../components/livros-destaque/livros-destaque';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

providers: [
  { provide: LocationStrategy, useClass: HashLocationStrategy }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule, Footer, LivrosDestaque
  ]
})
export class ModuleModule { }
