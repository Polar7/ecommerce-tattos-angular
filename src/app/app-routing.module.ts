import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'inicio', component:},
  {path: 'productos', component:},
  {path: 'productos/tatuajes', component:},
  {path: 'productos/joyas', component:},
  {path: 'productos/camisetas', component:},
  {path: 'contacto', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
