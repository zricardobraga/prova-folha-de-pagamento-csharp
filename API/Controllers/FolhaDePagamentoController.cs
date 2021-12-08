using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/folha")]
    [ApiController]
    public class FolhaDePagamentoController : ControllerBase
    {
        private readonly DataContext _context;

        public FolhaDePagamentoController(DataContext context)
        {
            _context = context;
        }

        //GET: api/folha/listar
        [Route("Listar")]
        public IActionResult List() => Ok(_context.FolhasDePagamento
        .Include(f => f.Funcionario)
        .ToList());

        //POST: api/folha/cadastrar
        [HttpPost]
        [Route("Cadastrar")]
        public IActionResult Create([FromBody] FolhaDePagamento folha)
        {
            folha.Funcionario = _context.Funcionarios.Find(folha.FuncionarioId);
            _context.FolhasDePagamento.Add(folha);
            _context.SaveChanges();
            return Created("Folha de pagamento cadastrada com sucesso", folha);
        }

    }
}