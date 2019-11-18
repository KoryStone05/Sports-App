import React, { Component } from 'react';

class NCAABBHeader extends Component {

    constructor(props) {
        super(props)
        this.state = { textFieldValue: '' }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ textFieldValue: event.target.value })
    }

    handleChange(event) {
        this.setState({ textFieldValue: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.getNCAAGamesInProgress(this.state.textFieldValue);
        this.setState({ textFieldValue: '' });

    }
    render() {
        return(
            <div className='NCAAHeader'>
                <h1 className='NCAA'>NCAA Men's Basketball</h1>
                <div>
                    <p className='NCAASeason'><u>Season</u></p>
                </div>
            </div>
        );
    }
}

export default NCAABBHeader;