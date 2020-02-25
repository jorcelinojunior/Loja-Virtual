using System;

namespace LojaVirtual.Dominio.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public Decimal Preco { get; set; }
        public string NomeArquivo { get; set; }

        public override void Validate()
        {
            if(string.IsNullOrEmpty(Nome))
                AdicionarCritica("Nome do produto não pode estar vazio.");

            if (string.IsNullOrEmpty(Descricao))
                AdicionarCritica("Descrição do produto não pode estar vazio.");
        }
    }
}
