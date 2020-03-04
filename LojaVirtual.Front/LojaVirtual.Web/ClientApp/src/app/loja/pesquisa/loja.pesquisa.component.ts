import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Model/produto';
import { ProdutoServico } from 'src/app/servicos/produto/produto.servico';
import { Router } from '@angular/router';
import { BaseUrlServico } from 'src/app/servicos/base-url/base-url.servico';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.pesquisa.component.html',
  styleUrls: ['./loja.pesquisa.component.css']
})

export class LojaPesquisaComponent implements OnInit {
  public produtos: Produto[];
  public hostname: string;
  ngOnInit(): void {}

  constructor(private produtoServico: ProdutoServico, private router: Router, private baseUrl: BaseUrlServico) {
    this.hostname = baseUrl.hostName;
    this.produtoServico.obterTodosProdutos()
      .subscribe(
        prodReturned => {
          this.produtos = prodReturned;
        },
        err => {
          console.log(err.error);
        }
      );
  }

  public abrirProduto(produto: Produto) {
    sessionStorage.setItem('produtoDetalhe', JSON.stringify(produto));
    this.router.navigate(['loja-produto']);
  }
}
