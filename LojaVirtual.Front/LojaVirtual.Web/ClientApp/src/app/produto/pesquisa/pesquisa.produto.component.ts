import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Model/produto';
import { ProdutoServico } from 'src/app/servicos/produto/produto.servico';
import { Router } from '@angular/router';
import { BaseUrlServico } from 'src/app/servicos/base-url/base-url.servico';

@Component({
  selector: 'app-pesquisa-produto',
  templateUrl: './pesquisa.produto.component.html'
})
export class PesquisaProdutoComponent implements OnInit {
  public produtos: Produto[];
  public hostname: string;

  ngOnInit(): void {}

  constructor(private produtoServico: ProdutoServico,private router: Router, private baseUrl: BaseUrlServico) {
    this.hostname = baseUrl.hostName;
    this.produtoServico.obterTodosProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
        },
        err => {
          console.log(err.error);
        }
      );
  }

  public adicionarProduto() {
    sessionStorage.removeItem('produtoSession');
    this.router.navigate(['/produto']);
  }

  public deletarProduto(produto: Produto) {
    const retorno = confirm('Deseja realmente deletar o produto selecionado?');
    if(retorno == true) {
      this.produtoServico.deletar(produto)
        .subscribe(
          products => {
            this.produtos = products;
          },
          err => {
            console.log(err.error);
          }
        );
    }
  }

  public editarProduto(produto: Produto) {
    sessionStorage.setItem('produtoSession', JSON.stringify(produto));
    this.router.navigate(['/produto']);
  }
}
