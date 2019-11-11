import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class MovieList extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'GET_MOVIES'});
        this.props.dispatch({type: 'GET_GENRES'}); 
    }

getMovieDetails = (movie) => {
    console.log('Get ready to go to the details page!');
    this.props.dispatch({type: 'SET_DETAILS', payload: movie});
    console.log(movie);
        this.props.history.push('/details');
}

    render() {
        return (
            <div>
                <h3>Top Movies That You Should Watch!</h3>
                <div>
                {this.props.reduxState.movies.map( (movie) => <div>{movie.title}<img onClick={() => this.getMovieDetails(movie)} key={movie.id} src={movie.poster} alt="movie_image"/>{movie.description}</div>)}
                </div>

                <pre>{JSON.stringify(this.props.reduxState.movies)}</pre>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});


export default withRouter(connect(mapStateToProps)(MovieList));