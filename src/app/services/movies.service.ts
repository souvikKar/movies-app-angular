import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=d26f9de0ba54545a5c436f23ab44a8a2');
  }
}
