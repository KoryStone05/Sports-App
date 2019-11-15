import React, { Component } from 'react';
import axios from 'axios';

class NBA extends Component {

    constructor(props) {
        super(props);
        this.state = { team: [] }
    }

    componentDidMount() {
        this.getTeamByName();
    }

    getTeamByName = () => {
        const _this = this;

        axios({
            method: 'GET',
            url: 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php'
        })
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        });
    }

    render() {

        this.getTeamByName();

        return(
            <h1>NBA</h1>
        );
    }
}

export default NBA;