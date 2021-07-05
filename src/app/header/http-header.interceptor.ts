import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req=req.clone({
      
      setHeaders:{
        "x-rapidapi-key": "aa9922cd72msha3269b9729044e2p125c30jsnc285c77716a4",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "permissions-policy": "interest-cohort=()"
      
      },
      setParams: {
        key: 'd3d65821c7da4c3baa07379977a29eaf',
        //page:"28700"
        //filter:"action"
      }
    });
    return next.handle(req);
  }
}
