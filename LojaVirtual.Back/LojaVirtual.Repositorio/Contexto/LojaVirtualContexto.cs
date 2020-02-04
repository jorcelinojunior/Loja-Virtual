using JetBrains.Annotations;
using LojaVirtual.Dominio.Entidades;
using LojaVirtual.Dominio.ObjetoDeValor;
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
        
    }
}
