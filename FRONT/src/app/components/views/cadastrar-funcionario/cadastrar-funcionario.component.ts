import { FuncionarioService } from './../../../services/funcionario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {

nome!: string;
cpf!: string;

  constructor(private router: Router, private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {}

  cadastrarFuncionario(): void {
    let funcionario: Funcionario = {
        nome : this.nome,
        cpf : this.cpf,
    };
    this.funcionarioService.cadastrar(funcionario).subscribe((funcionario) => {
    //   console.log(funcionario);
      this.router.navigate(["funcionario/listar"]);
    });
  }

}
