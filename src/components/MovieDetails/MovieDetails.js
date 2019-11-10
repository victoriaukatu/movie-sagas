import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetails extends Component {

    render() {
        return (
            <div>
              <h2>{this.props.reduxState.detailsReducer.title}</h2>
                {this.props.reduxState.detailsReducer.description}
            </div>
        )
    }


}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(MovieDetails);