using LojaVirtual.Dominio.Contratos;
using LojaVirtual.Dominio.Entidades;
using LojaVirtual.Repositorio.Contexto;

namespace LojaVirtual.Repositorio.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<Usuario>, IUsuarioRepositorio
    {
        public UsuarioRepositorio(LojaVirtualContexto lojaVirtualContexto) : base(lojaVirtualContexto)
        {
        }
    }
}
