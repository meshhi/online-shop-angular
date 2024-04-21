import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Beat } from '../models/Beats';

@Injectable({
  providedIn: 'root',
})
export class BeatsService {
  private baseUrl: string = 'http://localhost:3000/beats';
  public errorMessage: string = "";
  constructor(public http: HttpClient) {}

  getBeats(): Observable<Beat[]> {
    return this.http.get<Beat[]>(this.baseUrl)
    .pipe(
      map((data: any) => {
        let beats = data;
        return beats;
      }),
      catchError(err => {
        console.log(this); 
        this.errorMessage = err.message;
        return [];
      })
    );
  }

  getBeat(id: number): Observable<Beat> {
    return this.http.get<Beat>(`${this.baseUrl}/${id}`)
    .pipe(
      catchError(err => {
        console.log(this); 
        this.errorMessage = err.message;
        return [];
      })
    );;
  }

  postBeat(beat: Beat): Observable<any> {
    return this.http.post<Beat>(`${this.baseUrl}/add`, beat)
    .pipe(
      catchError(err => {
        console.log(this); 
        this.errorMessage = err.message;
        return [];
      })
    );;
  }
}
