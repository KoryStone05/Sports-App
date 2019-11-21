import React, { Component } from 'react';
import axios from 'axios';
import NCAABBHeader from '../NCAABBHeader/NCAABBHeader';

class NCAABasketball extends Component {

    constructor(props) {
        super(props);
        this.state = { gameData: [] }
    }

    getNCAAGamesInProgress = (name) => {
        const _this = this;

        axios({
            method: 'GET',
            url: 'https://api.sportsdata.io/v3/cbb/scores/json/AreAnyGamesInProgress',
            params: {
                Season: 2020,
                StartYear: 2019,
                EndYear: 2020
            }
        })
        .then(function(response) {
            _this.setState({ gameData: response.data.data || [] });
        })
        .catch(function(error) {
            console.log(error);
        });
    }


        showGameData() {

            console.log(this.state.gameData);
            if (this.state.gameData > 0) {
                return (
                    <div>
                        <p>{this.state.gameData.Season}</p>
                    </div>
                );
            }
        }

    render() {
        return(
            <div>
                <NCAABBHeader />
                {this.showGameData()}
            </div>
        );
    }
}

export default NCAABasketball;