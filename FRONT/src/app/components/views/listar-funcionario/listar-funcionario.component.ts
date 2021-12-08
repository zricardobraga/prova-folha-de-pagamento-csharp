import { Funcionario } from './../../../models/funcionario';
import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  colunasExibidas: String[] = [
    "id",
    "nome",
    "cpf",
    "criadoEm",
];

  constructor(private service: FuncionarioService) { }

  ngOnInit(): void {
      this.service.listar().subscribe((funcionario) => {
          this.funcionarios = funcionario;
          console.log(this.funcionarios);
      });
  }
}
