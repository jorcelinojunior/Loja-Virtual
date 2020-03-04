import { Component, OnInit} from '@angular/core';
import { ProdutoServico } from 'src/app/servicos/produto/produto.servico';
import { LojaCarrinhoCompras } from 'src/app/loja/carrinho-compras/loja.carrinho-compras';
import { Produto } from 'src/app/Model/produto';
import { Pedido } from 'src/app/Model/pedido';
import { UsuarioServico } from 'src/app/servicos/usuario/usuario.servico';
import { ItemPedido } from 'src/app/Model/itemPedido';
import { PedidoServico } from 'src/app/servicos/pedido/pedido.servico';
import { Router } from '@angular/router';
import { BaseUrlServico } from 'src/app/servicos/base-url/base-url.servico';

@Component({
  selector: 'app-loja-efetivar',
  templateUrl: './loja.efetivar.component.html',
  styleUrls: ['./loja.efetivar.component.css']
})

export class LojaEfetivarComponent implements OnInit {
  public carrinhoCompras: LojaCarrinhoCompras;
  public produtos: Produto[];
  public total: number;
  public _usuarioServico: UsuarioServico;
  public hostname: string;

  ngOnInit() {
    this.carrinhoCompras = new LojaCarrinhoCompras();
    this.produtos = this.carrinhoCompras.obterProdutos();
    this.atualizarTotal();
  }

  constructor(
    private usuarioServico: UsuarioServico,
    private pedidoServico: PedidoServico,
    private router: Router,
    private baseUrl: BaseUrlServico) {
      this.hostname = baseUrl.hostName;
  }

  public atualizarPreco(produto: Produto, quantidade: number) {
    if (!produto.precoOriginal) {
      produto.precoOriginal = produto.preco;
    }
    if (quantidade < 1 ) {
      quantidade = 1;
      produto.quantidade = 1;
    }
    produto.preco = produto.precoOriginal * quantidade;
    this.carrinhoCompras.atualizar(this.produtos);
    this.atualizarTotal();

  }

  public stepDown(produto: Produto) {
    if (produto.quantidade > 1) {
      produto.quantidade--;
      this.atualizarPreco(produto, produto.quantidade);
    }
  }

  public stepUp(produto: Produto) {
    produto.quantidade++;
    this.atualizarPreco(produto, produto.quantidade);
  }

  public remover(produto: Produto) {
    this.carrinhoCompras.removerProduto(produto);
    this.produtos = this.carrinhoCompras.obterProdutos();
    this.atualizarTotal();

  }

  public atualizarTotal() {
    this.total = this.produtos.reduce((acumulador, produto) => acumulador + produto.preco, 0);
  }

  public efetivarCompra() {
    const pedido = this.criarPedido();
    this.pedidoServico.efetivarCompra(pedido)
      .subscribe(
        pedidoId => {
          sessionStorage.setItem('pedidoId', pedidoId.toString());
          this.produtos = [];
          this.carrinhoCompras.limparCarrinhoCompras();
          this.router.navigate(['compra-realizada-sucesso']);
        },
        err => {
          console.log(err.error);
        }
      )

  }

  public criarPedido(): Pedido {
    const pedido               = new Pedido();
    pedido.usuarioId           = this.usuarioServico.usuario.id;
    pedido.cep                 = '38405142';
    pedido.cidade              = 'Uberlandia';
    pedido.estado              = 'MG';
    pedido.enderecoCompleto    = 'Av. Rondon Pacheco';
    pedido.numeroEndereco      = '5620';
    pedido.formaPagamentoId    = 1;
    pedido.dataPrevisaoEntrega = new Date();

    this.produtos = this.carrinhoCompras.obterProdutos();
    for (const produto of this.produtos) {
      const itemPedido = new ItemPedido();
      itemPedido.produtoId = produto.id;

      if ( !produto.quantidade ) {
        produto.quantidade = 1;
      }
      itemPedido.quantidade = produto.quantidade;

      pedido.itensPedido.push(itemPedido);
    }

    return pedido;
  }


}
