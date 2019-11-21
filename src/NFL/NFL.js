import React, { Component } from 'react';
import games from './NFLGames';
import './NFL.css';
class NFL extends Component{
    constructor(props) {
        super(props);
        this.state = {
            noonGames: games[0].dayTime,
            noonTeams: games[0].teams,
            afternoonGames: games[1].dayTime,
            afternoonTeams: games[1].teams,
            lateAfternoonGames: games[2].dayTime,
            lateAfternoonTeams: games[2].teams,
            eveningGames: games[3].dayTime,
            eveningTeams: games[3].teams,
            mondayGames: games[4].dayTime,
            mondayTeams: games[4].teams

        }
    }

    getGameDaySchedule(){
        return games
    };

    render(){
    
        return(
            <div>
                <h1 className='nflHeader'>NFL</h1>
                <h1 className='nflGamesHeader'>This Week's Games</h1>
                <div className='thisWeekGames'>
                    <div className='gameDataContainerOneNFL'>
                        <div className='dayTime'>{this.state.noonGames}</div>
                        <div className='teams'>{this.state.noonTeams[0]}</div>
                        <div className='teams'>{this.state.noonTeams[1]}</div>
                        <div className='teams'>{this.state.noonTeams[2]}</div>
                        <div className='teams'>{this.state.noonTeams[3]}</div>
                        <div className='teams'>{this.state.noonTeams[4]}</div>
                        <div className='teams'>{this.state.noonTeams[5]}</div>
                        <div className='teams'>{this.state.noonTeams[6]}</div>
                        <div className='teams'>{this.state.noonTeams[7]}</div>
                    </div>
                    <div className='gameDataContainerTwoNFL'>
                        <div className='dayTime'>{this.state.afternoonGames}</div>
                        <div className='teams'>{this.state.afternoonTeams}</div>
                    </div>
                    <div className='gameDataContainerThreeNFL'>
                        <div className='dayTime'>{this.state.lateAfternoonGames}</div>
                        <div className='teams'>{this.state.lateAfternoonTeams[0]}</div>
                        <div className='teams'>{this.state.lateAfternoonTeams[1]}</div>
                    </div>
                    <div className='gameDataContainerFourNFL'>
                        <div className='dayTime'>{this.state.eveningGames}</div>
                        <div className='teams'>{this.state.eveningTeams}</div>
                    </div>
                    <div className='gameDataContainerFiveNFL'>
                        <div className='dayTime'>{this.state.mondayGames}</div>
                        <div className='teams'>{this.state.mondayTeams}</div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default NFL;