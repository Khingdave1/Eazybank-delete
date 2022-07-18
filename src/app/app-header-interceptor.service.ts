import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiHeaderInterceptorService implements HttpInterceptor {
  constructor() { }
  // constructor(private service: AppModuleService) {
  //   let loginInfo: any = {
  //     loginId: 'ApiLogin',
  //     password: 'abc@123',
  //   };

  //      this.service.generateJWToken(loginInfo).subscribe((result) => {
  //       console.log('JWT_TOKEN_KEY', result.responseResult);
  //       sessionStorage.setItem(JWT_TOKEN_KEY, result.responseResult);
  //     });
  // }


  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add auth header with jwt if account is logged in and request is to the api url


    const token = sessionStorage.getItem('JWT_TOKEN_KEY');

    if (token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }

    return next.handle(request);
  }

}
