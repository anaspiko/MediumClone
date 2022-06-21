import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PersistanceService } from "./persistance.service";

@Injectable()
export class AuthIntercetor implements HttpInterceptor {

  constructor(private persistanceService: PersistanceService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.persistanceService.get('accessToken')
    request = request.clone({
      setHeaders: {
        Authorizaton: token ? `Token ${token}` : ''
      }
    })
    return next.handle(request)
  }
}
