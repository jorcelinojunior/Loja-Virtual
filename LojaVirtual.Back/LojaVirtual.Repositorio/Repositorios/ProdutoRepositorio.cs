using LojaVirtual.Dominio.Contratos;
using LojaVirtual.Dominio.Entidades;
using LojaVirtual.Repositorio.Contexto;

namespace LojaVirtual.Repositorio.Repositorios
{
    public class ProdutoRepositorio : BaseRepositorio<Produto>, IProdutoRepositorio
    {
        public ProdutoRepositorio(LojaVirtualContexto lojaVirtualContexto) : base(lojaVirtualContexto)
        {
        }
    }
}
