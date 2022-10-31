import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';

import { CadastroCreateComponent } from './components/cadastro/cadastro-create/cadastro-create.component';
import { CadastroTabelaComponent } from './components/cadastro/cadastro-tabela/cadastro-tabela.component';
import { CadastroUpdateComponent } from './components/cadastro/cadastro-update/cadastro-update.component';
import { CadastroDeleteComponent } from './components/cadastro/cadastro-delete/cadastro-delete.component';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [ 
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    component: CadastroCreateComponent,
  },
  {
    path: 'cadastro/tabela',
    component: CadastroTabelaComponent,
  },
  {
    path: 'cadastro/update/:id',
    component: CadastroUpdateComponent,
  },
  {
    path: 'cadastro/delete/:id',
    component: CadastroDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
