using LojaVirtual.Dominio.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;

namespace LojaVirtual.Repositorio.Config
{
    public class ItemPedidoConfiguration : IEntityTypeConfiguration<ItemPedido>
    {
        public void Configure(EntityTypeBuilder<ItemPedido> builder)
        {
            builder.HasKey(i => i.Id);

            builder
                .Property(i => i.ProdutoId)
                .IsRequired();

            builder
                .Property(i => i.Quantidade)
                .IsRequired();
        }
    }
}
