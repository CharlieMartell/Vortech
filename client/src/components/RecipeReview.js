import React, { Component, PropsTypes } from 'react';

class RecipeReview extends Component {
    
    constructor(props) {
        super(props);
    }

    render () {
        return (
                    <div>
                        Name:
                        <input type="text" />
                        <button>Finish</button>
                    </div>
               );
    }

}

RecipeReview.propTypes = {
}

function mapStateToProps(state) {
    return {}
}

export default connect(
mapStateToProps)(RecipeReview);
