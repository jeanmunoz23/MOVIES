import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../models/movies';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  url = 'http://localhost:4000/api/movies/';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarMovie(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarMovie(movies: Movies): Observable<any> {
    return this.http.post(this.url, movies);
  }

  obtenerMovie(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
