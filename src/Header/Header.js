import React, { Component } from 'react';

class Header extends Component {

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
        this.props.getHomeTeamByNameHandler(this.state.textFieldValue);
        this.setState({ textFieldValue: '' });

    }


    render() {
        return(
            <div>
                <div className='nbaHeader'>
                <div>
                    <h1 className='nba'>NBA</h1>
                    <div>
                        <p className='nbaGames'><u>Today's Games</u></p>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Header;