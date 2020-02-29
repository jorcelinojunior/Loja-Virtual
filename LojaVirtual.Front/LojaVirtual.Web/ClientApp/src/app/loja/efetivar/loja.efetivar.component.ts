import { Component, OnInit} from '@angular/core';
import { ProdutoServico } from 'src/app/servicos/produto/produto.servico';
import { LojaCarrinhoCompras } from 'src/app/loja/carrinho-compras/loja.carrinho-compras';
import { Produto } from 'src/app/Model/produto';

@Component({
  selector: 'app-loja-efetivar',
  templateUrl: './loja.efetivar.component.html',
  styleUrls: ['./loja.efetivar.component.css']
})

export class LojaEfetivarComponent implements OnInit {
  public carrinhoCompras: LojaCarrinhoCompras;
  public produtos: Produto[];

  ngOnInit() {
    this.carrinhoCompras = new LojaCarrinhoCompras();
    this.produtos = this.carrinhoCompras.obterProdutos();
  }

  constructor(produtoServico: ProdutoServico) {

  }

  public atualizarPreco(produto: Produto, quantidade: number) {
    if (!produto.precoOriginal) {
      produto.precoOriginal = produto.preco;
    }
    if (quantidade < 1){
      quantidade = 1;
      produto.quantidade = 1;
    }
    produto.preco = produto.precoOriginal * quantidade;
    this.carrinhoCompras.atualizar(this.produtos);
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
  }



}
