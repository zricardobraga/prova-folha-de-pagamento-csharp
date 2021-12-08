using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> builderOptions)
            : base(builderOptions)
        {
        }

        public DbSet<Funcionario> Funcionarios { get; set; }
        public DbSet<FolhaDePagamento> FolhasDePagamento { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            builder.UseInMemoryDatabase("conenctionString");
        }
    }
}