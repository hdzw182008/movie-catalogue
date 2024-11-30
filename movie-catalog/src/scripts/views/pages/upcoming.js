import MovieDBSource from '../../data/movie-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const Upcoming = {
  async render(){
    return `
        <div class="content">
            <h2 class="content_heading">Upcoming in Cinema</h2>
            <div id="movies" class="movies">
                
            </div>
        </div>    `;
  },

  async afterRender(){
    //fungsi ini dipanggil setelah render
    const movies = await MovieDBSource.upcomingMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default Upcoming;