import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MovieEdit extends Component {
    
    state = {
        updatedMovie: {
            title: '',
            description: '',
        }
    }

    handleBackToDetailsClick = () => {
        this.props.history.push('/details');
    }

    handleChange = (property) => (event) => {
        this.setState({
            updatedMovie: {
                ...this.state.updatedMovie,
                [property]: event.target.value
            }
        })
    }

    saveUpdate = () => {
        console.log('The save button was clicked!')
        this.props.dispatch({ type: 'UPDATE_DETAILS', payload: this.state.updatedMovie })
    }

    render() {
        return(
            <div>
              <>
                        <button onClick={this.handleBackToDetailsClick}>Cancel</button>
                        <button onClick={this.saveUpdate}>Save</button>
                        <br />
                        <input type="text" value={this.state.updatedMovie.title} onChange={this.handleChange('title')} />
                        <br />
                        <textarea type="text" value={this.state.updatedMovie.description} onChange={this.handleChange('description')} />
                    </>
            </div>
        )
    }

}


const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(MovieEdit));