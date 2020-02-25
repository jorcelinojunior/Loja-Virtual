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
        protected void LimparMensagemValidacao()
        {
            mensagemValidacao.Clear();
        }
        protected void AdicionarCritica(string mensagem)
        {
            mensagemValidacao.Add(" *" + mensagem);
        }
        public string ObterMensagensValidacao()
        {
            return string.Join("\n", mensagemValidacao);
        }
        public bool EhValido {
            get { return !mensagemValidacao.Any(); }
        }
    }
}
