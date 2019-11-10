import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetails extends Component {

    render() {
        return (
            <div>
                {this.props.reduxState.detailsReducer.title}
            </div>
        )
    }


}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(MovieDetails);