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

       [HttpPost]
        [Route("Create")]
        public IActionResult Create([FromBody] Funcionario funcionario)
        {
            try
            {
                _context.Funcionario.Add(funcionario);
                _context.SaveChanges();
                return Created("Funcionario adicionado com sucesso!", funcionario);
            }
            catch(Exception ex)
            {
                throw;
            }
        }

        [Route("List")]
        public IActionResult List() => Ok(_context.Funcionario.ToList());
    }
}