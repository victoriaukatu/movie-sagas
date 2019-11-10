import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class MovieDetails extends Component {
    handleBackToListClick = () => {
        this.props.history.push('/'); 
      }

    render() {
        return (
            <div>
                <button onClick={this.handleBackToListClick}>Back to List</button>
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