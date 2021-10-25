import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Hunt } from '../models/hunt';
import { catchError } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class HuntService {
  //8086
  private baseUrl = 'http://localhost:8086/';
  private url = this.baseUrl + 'api/hunts';
  private createUrl = this.url + '/create';
  private deleteUrl = this.url + '/delete/';

  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  index(): Observable<Hunt[]> {
    return this.http.get<Hunt[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('bad');
      })
    );
  }
  create(hunt: Hunt) {
    //hunt.eventDate = this.datePipe.transform(Date.now(), 'shortDate');
    return this.http.post(this.createUrl, hunt).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Creation of Hunt unsuccessful');
      })
    );
  }
  destroy(id: number) {
    return this.http.delete(this.deleteUrl + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Hunt delete not working');
      })
    );
  }
  show(huntId: number): Observable<Hunt> {
    return this.http.get<Hunt>(this.url + '/' + huntId).pipe(
      catchError((err: any)=> {
        console.log(err);
        return throwError('No search Results');
      })
    );
  }
  update(hunt: Hunt) {
    return this.http.put<Hunt>(`${this.url}/${hunt.id}`,hunt).pipe(
      catchError((err: any)=> {
        console.log(err);
        return throwError('Hunt update uns')
      })
    )
  }
}
