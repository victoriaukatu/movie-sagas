import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MovieEdit from '../MovieEdit/MovieEdit';

class MovieDetails extends Component {

    handleBackToListClick = () => {
        this.props.history.push('/');
    }

    switchToEdit = () => {
        this.setState({
            mode: false,
            updatedMovie: this.props.reduxState.detailsReducer
        })
        this.props.history.push('/edit')
    }


    render() {
        return (
            <div>
                <button onClick={this.handleBackToListClick}>Back to List</button>
                <button onClick={this.switchToEdit}>Edit</button>
                <h2>{this.props.reduxState.detailsReducer.title}</h2>
                {this.props.reduxState.detailsReducer.description}
            </div>
        )
    }

}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(MovieDetails));