import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { FolhaDePagamento } from "../models/folhaDePagamento";

@Injectable({
  providedIn: 'root'
})
export class FolhaDePagamentoService {

    private baseUrl = "http://localhost:5000/api/folha";

  constructor(private http: HttpClient) { }

listar(): Observable<FolhaDePagamento[]> {
    return this.http.get<FolhaDePagamento[]>(`${this.baseUrl}/listar`);
}
cadastrar(folha: FolhaDePagamento): Observable<FolhaDePagamento> {
    return this.http.post<FolhaDePagamento>(`${this.baseUrl}/cadastrar`, folha);
}
}
