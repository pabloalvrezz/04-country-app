import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

// se define una constante con las rutas que se usaran en nuestra pagina
const routes: Routes = [
  {
    // si el usuario va a la direccion y quiere mostrar el home se lo mostraremos
    path: '',
    component: HomePageComponent
  },
  {
    // si el usuario va a la direccion y quiere mostrar el about se lo mostraremos
    path: 'about',
    component: AboutPageComponent
  },
  {
    // si el usuario va a la direccion y quiere mostrar el contact se lo mostraremos
    path: 'contact',
    component: ContactPageComponent
  },
  {
    // en caso de que el usuario ponga cualquier ruta lo redireccionaremos al home
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],

  exports: [
    RouterModule,
  ]
})


export class AppRoutingModule { }
