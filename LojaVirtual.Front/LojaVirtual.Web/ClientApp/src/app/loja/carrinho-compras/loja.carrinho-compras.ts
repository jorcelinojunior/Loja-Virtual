import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Model/produto';

export class LojaCarrinhoCompras implements OnInit {

  public produtos: Produto[] = [];

  ngOnInit(): void {}

  public adicionar(produto: Produto) {
    const produtoLocalStorage = localStorage.getItem('produtoLocalStorage');
    if (!produto.quantidade) {
      produto.quantidade = 1;
    } else {
      produto.quantidade++;
    }
    if (!produtoLocalStorage) {
      // se não existir nada dentro do localStorage
      this.produtos.push(produto);
    } else {
      this.produtos = JSON.parse(produtoLocalStorage);
      this.produtos.push(produto);
    }

    localStorage.setItem('produtoLocalStorage', JSON.stringify(this.produtos));
  }

  public obterProdutos(): Produto[] {
    const produtoLocalStorage = localStorage.getItem('produtoLocalStorage');
    if (produtoLocalStorage) {
      return JSON.parse(produtoLocalStorage);
    }
    return this.produtos;
  }

  public removerProduto(produto: Produto) {
    const produtoLocalStorage = localStorage.getItem('produtoLocalStorage');
    if (produtoLocalStorage) {
      this.produtos = JSON.parse(produtoLocalStorage);
      this.produtos = this.produtos.filter(p => p.id != produto.id);
      localStorage.setItem(
        'produtoLocalStorage',
        JSON.stringify(this.produtos)
      );
    }
  }

  public atualizar(produtos: Produto[]) {
    localStorage.setItem('produtoLocalStorage', JSON.stringify(produtos));
  }

  public temItensCarrinhoCompras() {
    const itens = this.obterProdutos();

    return itens.length > 0;
  }

  public limparCarrinhoCompras() {
    // localStorage.removeItem('produtoLocalStorage');
    localStorage.setItem('produtoLocalStorage','');
  }
}
