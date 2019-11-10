import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'GET_MOVIES'})
    }

    render() {
        return (
            <div>
                <h3>Top Movies That You Should Watch!</h3>
                <div>
                {this.props.reduxState.movies.map( (movie) => <div>{movie.title}<img src={movie.poster} alt="movie_image"/>{movie.description}</div>)}
                </div>

                <pre>{JSON.stringify(this.props.reduxState.plantList)}</pre>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps)(MovieList);