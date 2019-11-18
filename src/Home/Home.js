import React, { Component } from 'react';
import axios from 'axios';
import NBA from '../NBA/NBA';
import NCAABasketball from '../NCAABasketball/NCAABasketball';

class Home extends Component {
    render() {
        return(
            <div>
                <NCAABasketball />
                <NBA />

            </div>
        );
    }
}

export default Home;