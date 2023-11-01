import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApikeyInterceptor implements HttpInterceptor {
  private BASE_PATH = 'https://v3.football.api-sports.io';
  private API_KEY = '4f3c80ba15dbba6e884ee4751e6019f7';

  constructor() {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (req.url.indexOf(this.BASE_PATH) !== -1) {
      const reqWithApiKey = req.clone({
        setHeaders: { 'x-apisports-key': this.API_KEY },
      });
      return next.handle(reqWithApiKey);
    }
    return next.handle(req);
  }
}
