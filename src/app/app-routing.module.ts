import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { DosComponent } from './components/dos/dos.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { CarsComponent } from './components/cars/cars.component';
import { TurnComponent } from './components/turn/turn.component';

const routes: Routes = [ //cre aqui las rutas
  {
    path:'',//direccion de la ruta
    component:BaseComponent
  },
  {
    path:'dos',
    component:DosComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'cars',
    component:CarsComponent
  },
  {
    path:'turn',
    component:TurnComponent
  }
  //por cada compoenente se crea su importacion
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
