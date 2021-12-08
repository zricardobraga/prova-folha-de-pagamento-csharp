import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarFolhaComponent } from './components/views/cadastrar-folha/cadastrar-folha.component';
import { CadastrarFuncionarioComponent } from './components/views/cadastrar-funcionario/cadastrar-funcionario.component';
import { ListarFolhaComponent } from './components/views/listar-folha/listar-folha.component';
import { ListarFuncionarioComponent } from './components/views/listar-funcionario/listar-funcionario.component';

const routes: Routes = [
    {
        path: "funcionario/cadastrar",
        component: CadastrarFuncionarioComponent,
    },
    {
        path: "funcionario/listar",
        component: ListarFuncionarioComponent,
    },

    {
        path: "folha/listar",
        component: ListarFolhaComponent,
    },
    {
        path: "folha/cadastrar",
        component: CadastrarFolhaComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
