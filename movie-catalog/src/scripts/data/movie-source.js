import API_ENDPOINT from '../globals/api-endpoint';

class MovieDBSource{
  static async nowPlayingMovies(){
    const response = await fetch(API_ENDPOINT.NOW_PLAYING);
    const responseJSON = await response.json();
    return responseJSON.results;
  }

  static async upcomingMovies(){
    const response = await fetch(API_ENDPOINT.UPCOMING);
    const responseJSON = await response.json();
    return responseJSON.results;
  }

  static async detailMovie(id){
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default MovieDBSource;