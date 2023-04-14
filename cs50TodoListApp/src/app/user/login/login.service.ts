// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, catchError, map } from 'rxjs';
// import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root',
// })
// export class LoginService {
//   constructor(private httpClient: HttpClient) {}

//   public login(email: string, password: string): Observable<any> {
//     const url = `${environment.baseUrlBackend}/login`;

//     return this.httpClient
//       .post(url, { email, password }, { responseType: 'json' })
//       .pipe(
//         map((data) => this.setTokenLocalStorage(data)),
//         catchError((err) => {
//           this.removeTokenLocalStorage();
//           throw 'Login failed.';
//         })
//       );
//   }

//   public getToken(): string | null {
//     return localStorage.getItem(environment.token);
//   }

//   private setTokenLocalStorage(response: any) {
//     const { type, token, _ } = response;
//     localStorage.setItem(environment.token, token);
//   }

//   private removeTokenLocalStorage(): void {
//     localStorage.removeItem(environment.token);
//   }
// }

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  public login(email: string, password: string): Observable<any> {
    const url = `${environment.baseUrlBackend}/sessions`;

    return this.httpClient
      .post(url, { email, password }, { responseType: 'json' })
      .pipe(
        map((data) => this.setTokenLocalStorage(data)),
        catchError((err) => {
          this.removerTokenLocalStorage();
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

  private removerTokenLocalStorage(): void {
    localStorage.removeItem(environment.token);
  }
}
