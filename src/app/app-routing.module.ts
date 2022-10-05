import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { GraficasComponent } from './components/graficas/graficas.component';

const routes: Routes = [

  {
    path: 'categoria',
    component: CategoriaComponent
  },
  {
    path: 'categoria/:idCategoria',
    component: CategoriaComponent
  },
  {
    path: 'graficas',
    component: GraficasComponent
  },
  {
    path: '',
    component: CategoriaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
