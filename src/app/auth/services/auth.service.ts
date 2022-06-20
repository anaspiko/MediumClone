import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { RegisterRequest } from "../types/registerRequest.interface";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";
import { AuthResponse } from "../types/authResponse.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: RegisterRequest): Observable<CurrentUserInterface> {
    // const url = 'https://conduit.productionready.io/api/users';
    const url = environment.apiUrl + '/users';
    return this.http.post<AuthResponse>(url, data).pipe(map((response:
      AuthResponse) => response.user))
  }
}
