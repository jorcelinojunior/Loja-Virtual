import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra-sucesso',
  templateUrl: './compra-sucesso.component.html',
  styleUrls: ['./compra-sucesso.component.css']
})

export class CompraSucessoComponent implements OnInit {
  public pedidoId: string;

  ngOnInit(): void {
    this.pedidoId = sessionStorage.getItem('pedidoId');
  }

}
