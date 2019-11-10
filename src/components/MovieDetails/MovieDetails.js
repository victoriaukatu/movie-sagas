import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class MovieDetails extends Component {

    state = {
        mode: true,
        updatedMovie: {
            title: '',
            description: '',
        }
    }
//
    handleChange = (property) => (event) => {
        this.setState({
            updatedMovie: {
                ...this.state.updatedMovie,
                [property]: event.target.value
            }
        })
    }

    switchToEdit = () => {
        this.setState({
            mode: false,
            updatedMovie: this.props.reduxState.detailsReducer
        })
    }

    saveUpdate = () => {
        this.props.dispatch({type: 'UPDATE_DETAILS', payload: this.state.updatedMovie})
        this.setState({
            mode: true
        })
    }
//
    handleBackToListClick = () => {
        this.props.history.push('/'); 
      }

    render() {
        return (
            <div>
              {this.state.mode &&   
              <>
              <button onClick={this.handleBackToListClick}>Back to List</button>
                <button onClick={this.switchToEdit}>Edit</button>
              <h2>{this.props.reduxState.detailsReducer.title}</h2>
                {this.props.reduxState.detailsReducer.description}
                </>
              }

            {this.state.mode === false &&   
              <>
              <button onClick={this.handleBackToListClick}>Back to List</button>
                <button>Edit</button>
                <input type="text" value={this.state.updatedMovie.title} onChange={this.handleChange('title')}/>
                <textarea type="text" value={this.state.updatedMovie.description} onChange={this.handleChange('description')}/>
                </>
              }
            </div>
        )
    }


}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(MovieDetails));