using LojaVirtual.Dominio.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;

namespace LojaVirtual.Repositorio.Config
{
    public class PedidoConfiguration : IEntityTypeConfiguration<Pedido>
    {
        public void Configure(EntityTypeBuilder<Pedido> builder)
        {
            builder.HasKey(p => p.Id);

            builder
                .Property(p => p.DataPedido)
                .IsRequired();

            builder
                .Property(p => p.DataPrevisaoEntrega)
                .IsRequired();

            builder
                .Property(p => p.CEP)
                .IsRequired()
                .HasMaxLength(10);

            builder
                .Property(p => p.Cidade)
                .IsRequired()
                .HasMaxLength(30);

            builder
                .Property(p => p.Estado)
                .IsRequired()
                .HasMaxLength(25);

            builder
                .Property(p => p.NumeroEndereco)
                .IsRequired();

            //builder.HasOne(p => p.Usuario);
        }
    }
}
