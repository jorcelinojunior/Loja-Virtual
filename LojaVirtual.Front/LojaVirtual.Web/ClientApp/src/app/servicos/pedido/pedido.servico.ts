import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pedido } from 'src/app/Model/pedido';
import { Observable } from 'rxjs';
import { BaseUrlServico } from '../base-url/base-url.servico';

@Injectable({
  providedIn: 'root',
})

export class PedidoServico {
  public _baseUrl: string;
  constructor (private http: HttpClient, private baseUrl: BaseUrlServico) {
    this._baseUrl = baseUrl.hostName;
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
}

  public efetivarCompra(pedido: Pedido): Observable<number> {
    return this.http.post<number>(this._baseUrl + 'api/pedido', JSON.stringify(pedido), { headers: this.headers });
  }
}
