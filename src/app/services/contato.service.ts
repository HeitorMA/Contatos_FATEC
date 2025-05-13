import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contato } from '../types/contato';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  apiUrl = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Contato[]>(this.apiUrl);
  }

  save(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.apiUrl, contato);
  }

  update(contato: Contato): Observable<Contato> {
    return this.http.patch<Contato>(`${this.apiUrl}/${contato.id}`, contato);
  }

  delete(contato: Contato): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${contato.id}`);
  }
}
