import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public authenticated: boolean = false;

  constructor(private httpClient: HttpClient) {}

  public login(email: string, password: string): Observable<any> {
    const url = `${environment.baseUrlBackend}/sessions`;
    this.authenticated = true;
    return this.httpClient
      .post(url, { email, password }, { responseType: 'json' })
      .pipe(
        map((data) => this.setTokenLocalStorage(data)),
        catchError((err) => {
          this.logout();
          throw 'Falha ao efetuar login.';
        })
      );
  }

  public getToken(): string | null {
    return localStorage.getItem(environment.token);
  }

  private setTokenLocalStorage(response: any): void {
    const { type, token, _ } = response;
    localStorage.setItem(environment.token, token);
  }

  public logout(): void {
    localStorage.removeItem(environment.token);
    this.authenticated = false;
  }

  public isAuthenticated(): boolean {
    return this.authenticated;
  }
}
