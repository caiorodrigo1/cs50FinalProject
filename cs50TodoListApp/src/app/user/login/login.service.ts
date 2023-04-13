import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  public login(email: string, password: string): Observable<any> {
    const url = 'url';

    return this.httpClient
      .post(url, { email, password }, { responseType: 'json' })
      .pipe(map((data) => this.setTokenLocalStorage(data)));
  }
}
