import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root',
})

export class BaseUrlServico {
  public hostName: string;

  constructor() {
    // this.hostName = 'https://localhost:5001/';
    this.hostName = 'https://localhost:44321/';
  }
}
