import { Routes } from '@angular/router';

export const routes: Routes = [
     {
    path: 'home',
    pathMatch: 'full',
    loadComponent:() => {return import('./pages/home/home').then(c => c.Home)}
    }, 

    {
    path: 'ebooks',
    pathMatch: 'full',
    loadComponent:() => {return import('./pages/ebooks/ebooks').then(c => c.Ebooks)}
    }, 

     {
    path: 'contato',
    pathMatch: 'full',
    loadComponent:() => {return import('./pages/contato/contato').then(c => c.Contato)}
    }, 

      {
    path: 'sobre',
    pathMatch: 'full',
    loadComponent:() => {return import('./pages/sobre/sobre').then(c => c.Sobre)}
    }, 
    
];
