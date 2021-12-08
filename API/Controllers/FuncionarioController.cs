    using API.Data;
    using API.Models;
    using Microsoft.AspNetCore.Mvc;
    using System;
    using System.Linq;

namespace API.Controllers
{

    [Route("api/funcionario")]
    [ApiController]
    public class FuncionarioController : ControllerBase
    {
        private readonly DataContext _context;

        public FuncionarioController(DataContext context)
        {
            _context = context;
        }
        //POST: api/funcionario/cadastrar
        [HttpPost]
        [Route("Cadastrar")]
        public IActionResult Create([FromBody] Funcionario funcionario)
        {

                _context.Funcionarios.Add(funcionario);
                _context.SaveChanges();
                return Created("Funcionario adicionado com sucesso!", funcionario);

        }
        
        //GET: api/funcionario/listar
        [Route("Listar")]
        public IActionResult List() => Ok(_context.Funcionarios.ToList());
    }
}