import React, { Component } from 'react';
import axios from 'axios';
class NFL extends Component{
    getStats = () => {
        axios({
            method: 'GET',
            url: 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php'
        })
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error, 'YOU SUCK');
        });
    }

    render(){
        this.getStats();

        return(
            <div>
                <h1>NFL</h1>

            </div>
        );
    }
}

export default NFL;