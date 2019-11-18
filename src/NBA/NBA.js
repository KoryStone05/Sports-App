import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import NCAABBHeader from '../NCAABBHeader/NCAABBHeader';

class NBA extends Component {

    constructor(props) {
        super(props);
        this.state = { gameData: [] }
    }

    componentDidMount() {
        this.getHomeTeamByName();
    }

    getHomeTeamByName = (name) => {
        const _this = this;

        axios({
            method: 'GET',
            url: 'https://www.balldontlie.io/api/v1/games',
            params: {
                start_date: '2019-11-18',
                end_date: '2019-11-18',
                per_page: 15
            }
        })
        .then(function(response){
            _this.setState({ gameData: response.data.data || [] });
            
        })
        .catch(function(error){
            console.log(error);
        });
    }

    showGameData() {

        console.log(this.state.gameData);
        if (this.state.gameData.length > 0) {
            return (
                <div>
                    <div className='gameDataContainerOne'>
                    <p className='visitorTeam'>{this.state.gameData[0].visitor_team.full_name}</p>
                    <p className='visitorScore'>{this.state.gameData[0].visitor_team_score}</p>
                    <div className='gameDataStatusContainer'>
                        <p>{this.state.gameData[0].status}</p>
                    </div>
                    <p className='homeScore'>{this.state.gameData[0].home_team_score}</p>
                    <p className='homeTeam'>{this.state.gameData[0].home_team.full_name}</p>
                    </div>

                    <div className='gameDataContainerTwo'>
                    <p className='visitorTeam'>{this.state.gameData[1].visitor_team.full_name}</p>
                    <p className='visitorScore'>{this.state.gameData[1].visitor_team_score}</p>
                    <div className='gameDataStatusContainer'>
                        <p>{this.state.gameData[1].status}</p>
                    </div>
                    <p className='homeScore'>{this.state.gameData[1].home_team_score}</p>
                    <p className='homeTeam'>{this.state.gameData[1].home_team.full_name}</p>
                    </div>

                    <div className='gameDataContainerThree'>
                    <p className='visitorTeam'>{this.state.gameData[2].visitor_team.full_name}</p>
                    <p className='visitorScore'>{this.state.gameData[2].visitor_team_score}</p>
                    <div className='gameDataStatusContainer'>
                        <p>{this.state.gameData[2].status}</p>
                    </div>
                    <p className='homeScore'>{this.state.gameData[2].home_team_score}</p>
                    <p className='homeTeam'>{this.state.gameData[2].home_team.full_name}</p>
                    </div>

                    <div className='gameDataContainerFour'>
                    <p className='visitorTeam'>{this.state.gameData[3].visitor_team.full_name}</p>
                    <p className='visitorScore'>{this.state.gameData[3].visitor_team_score}</p>
                    <div className='gameDataStatusContainer'>
                        <p>{this.state.gameData[3].status}</p>
                    </div>
                    <p className='homeScore'>{this.state.gameData[3].home_team_score}</p>
                    <p className='homeTeam'>{this.state.gameData[3].home_team.full_name}</p>
                    </div>

                    <div className='gameDataContainerFive'>
                    <p className='visitorTeam'>{this.state.gameData[4].visitor_team.full_name}</p>
                    <p className='visitorScore'>{this.state.gameData[4].visitor_team_score}</p>
                    <div className='gameDataStatusContainer'>
                        <p>{this.state.gameData[4].status}</p>
                    </div>
                    <p className='homeScore'>{this.state.gameData[4].home_team_score}</p>
                    <p className='homeTeam'>{this.state.gameData[4].home_team.full_name}</p>
                    </div>

                    <div className='gameDataContainerSix'>
                    <p className='visitorTeam'>{this.state.gameData[5].visitor_team.full_name}</p>
                    <p className='visitorScore'>{this.state.gameData[5].visitor_team_score}</p>
                    <div className='gameDataStatusContainer'>
                        <p>{this.state.gameData[5].status}</p>
                    </div>
                    <p className='homeScore'>{this.state.gameData[5].home_team_score}</p>
                    <p className='homeTeam'>{this.state.gameData[5].home_team.full_name}</p>
                    </div>

                </div>
                
            );
        }
    }

    render() {
        return(
            <div>
                <Header 
                    getHomeTeamByNameHandler={this.getHomeTeamByName}
                />
                {this.showGameData()}
            </div>
        );
    }
}

export default NBA;