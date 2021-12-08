import { FolhaDePagamento } from './../../../models/folhaDePagamento';
import { FuncionarioService } from './../../../services/funcionario.service';
import { FolhaDePagamentoService } from './../../../services/folha-de-pagamento.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-folha',
  templateUrl: './cadastrar-folha.component.html',
  styleUrls: ['./cadastrar-folha.component.css']
})
export class CadastrarFolhaComponent implements OnInit {

    mes!: number;
    ano!: number;
    horas!: number;
    valorHora!: number;
    funcionarios!: Funcionario[];
    funcionarioId!: number;

  constructor(private router: Router, private folhaService:FolhaDePagamentoService, private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarioService.listar().subscribe((funcionarios) => {
        this.funcionarios = funcionarios;
    });
  }

  cadastrar(): void {
      let folhaDePagamento: FolhaDePagamento = {
          mes : this.mes,
          ano : this.ano,
          horas : this.horas,
          valorHora : this.valorHora,
          funcionarioId : this.funcionarioId,

      };

      this.folhaService.cadastrar(folhaDePagamento).subscribe((folhaDePagamento) => {
          console.log(folhaDePagamento);
          this.router.navigate(["folha/listar"]);
      })
  }

}
