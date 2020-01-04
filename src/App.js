import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {
    // greeting: 'hello!',
    // movies : [
    //   { 
    //     title: 'Aladin',
    //     poster: 'https://post-phinf.pstatic.net/MjAxOTA1MjNfNTMg/MDAxNTU4NTg0MTA4OTMz.2gWQ96dWAvWyzVSNORepej3YHgGdgjBateq0GJ-8r80g.EXLjLV2nwMMEs9K4Aa6Pl9vW-xYYq5mbKuNA-gVNoTwg.JPEG/%EB%A9%94%EC%9D%B8%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg?type=w1200',
    //   },
    //   {
    //     title: 'Lion King',
    //     poster: 'https://pds.joins.com/news/component/htmlphoto_mmdata/201907/21/htm_201907211813485618.jpg',
    //   },
    // ],
  }

  // componentWillMount() {
  //   console.log('will mount');
  // }
  
  componentDidMount() {
    console.log('did mount');
    // setTimeout(() => {
    //   // this.setState({
    //   //   greeting: 'enjoy~'
    //   // })
    //   this.setState({
    //     movies: [
    //       // ...this.state.movies,
    //       { 
    //         title: 'Aladin',
    //         poster: 'https://post-phinf.pstatic.net/MjAxOTA1MjNfNTMg/MDAxNTU4NTg0MTA4OTMz.2gWQ96dWAvWyzVSNORepej3YHgGdgjBateq0GJ-8r80g.EXLjLV2nwMMEs9K4Aa6Pl9vW-xYYq5mbKuNA-gVNoTwg.JPEG/%EB%A9%94%EC%9D%B8%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg?type=w1200',
    //       },
    //       {
    //         title: 'Lion King',
    //         poster: 'https://pds.joins.com/news/component/htmlphoto_mmdata/201907/21/htm_201907211813485618.jpg',
    //       },
    //       {
    //         title: 'Beauty and Beast',
    //         poster: 'https://t1.daumcdn.net/movie/a0ecb5da1435edab622d7c23eb0c7ef447a569ba',
    //       }
    //     ]
    //   })
    // }, 5000);
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    //.then(json => console.log(json))
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        genres={movie.genres}
        synopsis={movie.synopsis}
        key={movie.id} />
    })
    return movies
  }

  render(){
    console.log('render');
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {/* {this.state.greeting} */}
        {/* {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })} */}
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
