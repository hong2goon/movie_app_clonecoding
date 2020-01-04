// import React, { Component } from 'react';
import React from 'react';
import ProtoTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

// class Movie extends Component {
//   static protoTypes = {
//     title: ProtoTypes.string.isRequired,
//     poster: ProtoTypes.string,
//   };

//   render() {
//     return(
//       <div>
//         <h1>{this.props.title}</h1>
//         <MoviePoster poster={this.props.poster} />
//       </div>
//     );
//   }
// }

// class MoviePoster extends Component {
//   render() {
//     return(
//       <div>
//         <img src={this.props.poster} alt="" style={{ width: '100px' }}/>
//       </div>
//     )
//   }
// }

function Movie({poster, title, genres, synopsis}) {
  return(
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <div className="Movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis=' ...'
            trimRight
            basedOn='letters'
          />
        </div>
      </div>
    </div>
  )
}

function MoviePoster({poster, alt}) {
  return(
    <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
  )
}

function MovieGenre({genre}) {
  return(
    <span className="Movie__Genre">{genre}</span>
  )
}

Movie.ProtoTypes = {
  title: ProtoTypes.string.isRequired,
  poster: ProtoTypes.string.isRequired,
  genres: ProtoTypes.array.isRequired,
  synopsis: ProtoTypes.string.isRequired
}

MoviePoster.ProtoTypes = {
  poster: ProtoTypes.string.isRequired,
  alt: ProtoTypes.string.isRequired
}

MovieGenre.ProtoTypes = {
  genre: ProtoTypes.string.isRequired
}



export default Movie;

