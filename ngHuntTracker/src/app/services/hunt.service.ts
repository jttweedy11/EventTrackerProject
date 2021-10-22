import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Hunt } from '../models/hunt';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HuntService {
  //8086
  private baseUrl = 'http://localhost:8086/';
  private url = this.baseUrl + 'api/hunts';

  constructor(private http: HttpClient) {}

  index(): Observable<Hunt[]> {
    return this.http.get<Hunt[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('bad');
      })
    );
  }
}
