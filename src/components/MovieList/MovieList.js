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
                {this.props.reduxState.movies.map( (movie) => <div>{this.props.reduxState.movie.title}{this.props.reduxState.movie.poster}{this.props.reduxState.movie.description}</div>)}
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