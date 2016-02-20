import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class EmailBody extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch, email } = this.props;
    }

    componentWillRecieveProps(nextProps) {
        if(nextProps.email.id !== this.props.email.id) {
            const { dispatch, email } = nextProps;
        }
    }

    render () {

        var subject = this.props.email.subject;
        var body = this.props.email.body;

        return (
                <div>
                    <h2>{subject}</h2>
                    <p>{body}</p>
                </div>
               );
    }
}

EmailBody.propTypes = {
    email: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
    const email = state.email.emails[state.email.selectedEmail];

    return {
        email
    }
}


export default connect(
mapStateToProps)(EmailBody);
