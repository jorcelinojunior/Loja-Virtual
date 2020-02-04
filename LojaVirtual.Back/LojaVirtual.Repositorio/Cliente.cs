using LojaVirtual.Dominio.Entidades;
using LojaVirtual.Repositorio.Repositorios;
using System;
using System.Collections.Generic;
using System.Text;

namespace LojaVirtual.Repositorio
{
    public class Cliente
    {
        public Cliente()
        {
            var usuarioRepositorio = new UsuarioRepositorio();
            var produto            = new Produto();
            usuarioRepositorio.Adicionar(produto);
        }
    }
}
