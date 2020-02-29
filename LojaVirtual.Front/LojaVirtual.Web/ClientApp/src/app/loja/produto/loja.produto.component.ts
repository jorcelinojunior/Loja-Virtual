import { Component, OnInit } from '@angular/core';
import { ProdutoServico } from 'src/app/servicos/produto/produto.servico';
import { Produto } from 'src/app/Model/produto';
import { Router } from '@angular/router';
import { LojaCarrinhoCompras } from '../carrinho-compras/loja.carrinho-compras';

@Component({
  selector: 'app-loja-produto',
  templateUrl: './loja.produto.component.html',
  styleUrls: ['./loja.produto.component.css']
})

export class LojaProdutoComponent implements OnInit {
  public produto: Produto;
  public carrinhosCompras: LojaCarrinhoCompras;

  ngOnInit(): void {
    this.carrinhosCompras = new LojaCarrinhoCompras();
    const produtoDetalhe = sessionStorage.getItem('produtoDetalhe');
    if (produtoDetalhe) {
      this.produto = JSON.parse(produtoDetalhe);
    }
  }

  constructor(private produtoServico: ProdutoServico, private router: Router){

  }

  public comprar() {
    this.carrinhosCompras.adicionar(this.produto);
    this.router.navigate(['/loja-efetivar']);
  }
}

