using LojaVirtual.Dominio.Entidades;

namespace LojaVirtual.Dominio.Contratos
{
    public interface IUsuarioRepositorio : IBaseRepositorio<Usuario>
    {
        Usuario Obter(string email, string senha);
    }
}
