import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarFuncionarioComponent } from './components/views/cadastrar-funcionario/cadastrar-funcionario.component';
import { ListarFuncionarioComponent } from './components/views/listar-funcionario/listar-funcionario.component';

const routes: Routes = [
    {
        path: "funcionario/cadastrar",
        component: CadastrarFuncionarioComponent,
    },
    {
        path: "funcionario/listar",
        component: ListarFuncionarioComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
