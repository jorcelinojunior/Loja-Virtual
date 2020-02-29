import { Component, OnInit } from '@angular/core';
import { ProdutoServico } from 'src/app/servicos/produto/produto.servico';

@Component({
  selector: 'app-loja-produto',
  templateUrl: './loja.produto.component.html',
  styleUrls: ['./loja.produto.component.css']
})

export class LojaProdutoComponent implements OnInit{
  ngOnInit(): void {

  }

  constructor(private produtoServico: ProdutoServico){

  }
}

