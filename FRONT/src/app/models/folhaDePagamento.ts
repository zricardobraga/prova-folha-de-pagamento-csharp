import { Funcionario } from "./funcionario";

export interface FolhaDePagamento {
    folhaId?: number;
    mes: number;
    ano: number;
    horas: number;
    valorHora: number;
    funcionario?: Funcionario;
    funcionarioId: number;
    CriadoEm?: Date;
}
