import { Component, OnInit } from '@angular/core';
import { FolhaDePagamento } from 'src/app/models/folhaDePagamento';
import { FolhaDePagamentoService } from 'src/app/services/folha-de-pagamento.service';

@Component({
  selector: 'app-listar-folha',
  templateUrl: './listar-folha.component.html',
  styleUrls: ['./listar-folha.component.css']
})
export class ListarFolhaComponent implements OnInit {

    folhas: FolhaDePagamento[] = [];

    colunasExibidas: String[] = [
        "id",
        "funcionarioNome",
        "funcionarioCpf",
        "mes",
        "ano",
        "horas",
        "valorHora",
        // "salarioBruto",
        // "ir",
        // "inss",
        // "fgts",
        // "salarioLiquido",
    ];

  constructor(private service: FolhaDePagamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((folhas) => {
        this.folhas = folhas;
    });
  }

}
