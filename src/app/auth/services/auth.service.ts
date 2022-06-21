import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { RegisterRequest } from "../types/registerRequest.interface";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";
import { AuthResponse } from "../types/authResponse.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { LoginRequest } from "../types/loginRequest.interface";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  getUser(response: AuthResponse): CurrentUserInterface {
    return response.user
  }

  register(data: RegisterRequest): Observable<CurrentUserInterface> {
    // const url = 'https://conduit.productionready.io/api/users';
    const url = environment.apiUrl + '/users';
    return this.http.post<AuthResponse>(url, data)
      .pipe(map(this.getUser))
  }

  login(data: LoginRequest): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + 'user/login'
    return this.http.post<AuthResponse>(url, data)
      .pipe(map(this.getUser))
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user'
    return this.http.get(url).pipe(map(this.getUser))
  }
}
