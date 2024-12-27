import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: {
    emailOrUserName: string;
    password: string;
  }): Observable<any> {
    return this.http.post('/api/login', credentials);
  }
}
