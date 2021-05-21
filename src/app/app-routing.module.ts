import { ListaTecnicasComponent } from './lista-tecnicas/lista-tecnicas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { InicioComponent } from './inicio/inicio.component';
import { SRTComponent } from './srt/srt.component';
import { InicioTextoComponent } from './inicio-texto/inicio-texto.component';
import { ContatoComponent } from './contato/contato.component';
import { TecnicaComponent } from './tecnica/tecnica.component';


const routes: Routes = [
  
  {
    path: "inicio",
    component: InicioComponent
  },  
  {
    path: "srt",
    component: SRTComponent,
    children:[
      {
        path: "inicio",
        component: InicioTextoComponent
      },
      {
        path: "comecar",
        component: MeuPrimeiroComponent
      },
      {
        path: "lista",
        component: ListaTecnicasComponent
      },
      {
        path: "contato",
        component: ContatoComponent
      },
      {
        path: ":tecnica",
        component: TecnicaComponent
      }
    ]
  },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
