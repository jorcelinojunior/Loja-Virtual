using LojaVirtual.Dominio.Contratos;
using LojaVirtual.Dominio.Entidades;
using LojaVirtual.Repositorio.Contexto;

namespace LojaVirtual.Repositorio.Repositorios
{
    public class PedidoRepositorio : BaseRepositorio<Pedido>, IPedidoRepositorio
    {
        public PedidoRepositorio(LojaVirtualContexto lojaVirtualContexto) : base(lojaVirtualContexto)
        {
        }
    }
}
