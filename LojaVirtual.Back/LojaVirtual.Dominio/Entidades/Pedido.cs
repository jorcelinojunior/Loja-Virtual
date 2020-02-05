using LojaVirtual.Dominio.ObjetoDeValor;
using System;
using System.Collections.Generic;
using System.Linq;

namespace LojaVirtual.Dominio.Entidades
{
    public class Pedido : Entidade
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }
        public int UsuarioId { get; set; }
        public virtual Usuario Usuario { get; set; }
        public DateTime DataPrevisaoEntrega { get; set; }
        public string CEP { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string EnderecoCompleto { get; set; }
        public int NumeroEndereco { get; set; }
        public int FormaPagamentoId { get; set; }
        public FormaPagamento FormaPagamento { get; set; }
        /// <summary>
        /// Pedido dever ter pelo menos um 'item de pedido'
        /// ou muitos 'itens de pedidos'
        /// </summary>
        public ICollection<ItemPedido> ItensPedido{ get; set; }

        public override void Validate()
        {
            LimparMensagemValidacao();

            if (!ItensPedido.Any())
                AdicionarCritica("'Pedido' não pode ficar sem 'Item de pedido'.");

            if(string.IsNullOrEmpty(CEP))
                AdicionarCritica("'CEP' não pode ficar vazio.");
        }
    }
}
