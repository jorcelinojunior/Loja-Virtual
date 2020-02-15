using LojaVirtual.Dominio.Contratos;
using LojaVirtual.Dominio.Entidades;
using LojaVirtual.Repositorio.Contexto;
using System.Linq;

namespace LojaVirtual.Repositorio.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<Usuario>, IUsuarioRepositorio
    {
        public UsuarioRepositorio(LojaVirtualContexto lojaVirtualContexto) : base(lojaVirtualContexto)
        {
        }

        public Usuario Obter(string email, string senha)
        {
            return LojaVirtualContexto.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }
    }
}
