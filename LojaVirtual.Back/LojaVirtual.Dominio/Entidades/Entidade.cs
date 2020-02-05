using System.Collections.Generic;
using System.Linq;

namespace LojaVirtual.Dominio.Entidades
{
    public abstract class Entidade
    {
        private List<string> _mensagensValidacao { get; set; }
        private List<string> mensagemValidacao
        {
            get { return _mensagensValidacao ?? ( _mensagensValidacao = new List<string>()); }    
        }

        public abstract void Validate();
        protected bool EhValido {
            get { return !mensagemValidacao.Any(); }
        }
        protected void LimparMensagemValidacao()
        {
            mensagemValidacao.Clear();
        }
        protected void AdicionarCritica(string mensagem)
        {
            mensagemValidacao.Add("Crítica: " + mensagem);
        }
    }
}
