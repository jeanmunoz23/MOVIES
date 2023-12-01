import { Component } from '@angular/core';
import { Movies } from '../../models/movies';
import { ToastrService } from 'ngx-toastr';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent {
  listMovies: Movies[] = [];

  constructor(
    private _movieService: MoviesService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.obtenerMovies();
    console.log(this.listMovies);
  }

  obtenerMovies() {
    this._movieService.getMovies().subscribe(
      (data) => {
        console.log(data);
        this.listMovies = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  eliminarMovie(id: any) {
    this._movieService.eliminarMovie(id).subscribe(
      (data) => {
        this.toastr.error(
          'La pelicula fue eliminado con exito',
          'Movie Eliminado'
        );
        this.obtenerMovies();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
