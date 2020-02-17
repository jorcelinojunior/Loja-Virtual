﻿using LojaVirtual.Dominio.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;

namespace LojaVirtual.Repositorio.Config
{
    public class UsuarioConfiguration : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.HasKey(u => u.Id);
            
            // Builder utiliza o padrão Fluent
            builder
                .Property(u => u.Nome)
                .IsRequired()
                .HasMaxLength(100);

            builder
                .Property(u => u.SobreNome)
                .IsRequired()
                .HasMaxLength(100);

            builder
                .Property(u => u.Email)
                .IsRequired()
                .HasMaxLength(50);

            builder
                .Property(u => u.Senha)
                .IsRequired()
                .HasMaxLength(800);

            builder
                .HasMany(u => u.Pedidos)
                .WithOne(p => p.Usuario);

            //builder.Property(u => u.Pedidos);
        }
    }
}
