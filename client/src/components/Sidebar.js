import React, { Component, PropTypes } from 'react';
import { pushState } from 'redux-router';
import { connect } from 'react-redux';

class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.navInbox = this.navInbox.bind(this);
        this.navFilters = this.navFilters.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
    }

    navInbox() {
        this.props.dispatch(pushState(null, 'inbox'));
    }

    navFilters() {
        this.props.dispatch(pushState(null, 'filters'));
    }

    render() {
        return (
                <div className="sidebar">
                    <span>Mailbox</span>

                    <ul>
                        <li onClick={this.navInbox}>
                          <i className="fa fa-inbox"></i> &nbsp; Inbox
                        </li>
                        <li onClick={this.navFilters}>
                          <i className="fa fa-filter"></i> &nbsp; Filters
                        </li>
                    </ul>
                </div>
                )
    }

}

Sidebar.propTypes = {
};

function mapStateToProps(state) {
    return {};
}

export default connect(
mapStateToProps)(Sidebar);
