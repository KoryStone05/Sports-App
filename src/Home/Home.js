import React, { Component } from 'react';
import axios from 'axios';
import NBA from '../NBA/NBA';
import NCAABasketball from '../NCAABasketball/NCAABasketball';
import NFL from '../NFL/NFL';

class Home extends Component {
    render() {
        return(
            <div>
                <NBA />

            </div>
        );
    }
}

export default Home;