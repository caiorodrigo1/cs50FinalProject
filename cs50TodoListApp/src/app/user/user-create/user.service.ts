import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  public authenticated: boolean = false;

  constructor(private httpClient: HttpClient) {}

  public register(
    name: string,
    email: string,
    password: string
  ): Observable<any> {
    const url = `${environment.baseUrlBackend}/users`;
    return this.httpClient.post(
      url,
      { name, email, password },
      { responseType: 'json' }
    );
  }
}
