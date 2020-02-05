using JetBrains.Annotations;
using LojaVirtual.Dominio.Entidades;
using LojaVirtual.Dominio.ObjetoDeValor;
using LojaVirtual.Repositorio.Config;
using Microsoft.EntityFrameworkCore;

namespace LojaVirtual.Repositorio.Contexto
{
    public class LojaVirtualContexto : DbContext
    {

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<ItemPedido> ItensPedidos { get; set; }
        public DbSet<FormaPagamento> FormaPagamento { get; set; }

        public LojaVirtualContexto(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /// Classes de mapeamento aqui...
            modelBuilder.ApplyConfiguration(new UsuarioConfiguration());
            modelBuilder.ApplyConfiguration(new ProdutoConfiguration());
            modelBuilder.ApplyConfiguration(new PedidoConfiguration());
            modelBuilder.ApplyConfiguration(new ItemPedidoConfiguration());
            modelBuilder.ApplyConfiguration(new FormaPagamentoConfiguration());

            // Adicionando carga de formas de pagamento ao banco de dados 
            modelBuilder.Entity<FormaPagamento>().HasData(new FormaPagamento() { Id = 1, Nome = "Boleto", Descricao = "Descrição do Boleto aqui." });
            modelBuilder.Entity<FormaPagamento>().HasData(new FormaPagamento() { Id = 2, Nome = "Cartão de Crédito", Descricao = "Descrição do Cartão de Crédito aqui." });
            modelBuilder.Entity<FormaPagamento>().HasData(new FormaPagamento() { Id = 3, Nome = "Depósito", Descricao = "Descrição do Depósito aqui." });

            base.OnModelCreating(modelBuilder);
        }
    }
}
