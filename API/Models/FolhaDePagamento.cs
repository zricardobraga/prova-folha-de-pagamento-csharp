using System;

namespace API.Models
{
    public class FolhaDePagamento
    {
        public int Id { get; set; }
        public int Mes { get; set; }
        public int Ano { get; set; }
        public int Horas { get; set; }
        public int ValorHora { get; set; }
        public Funcionario Funcionario { get; set; }
        public int FuncionarioId { get; set; }
        public DateTime CriadoEm { get; set; }

       public FolhaDePagamento() => CriadoEm = DateTime.Now;

    }
}

