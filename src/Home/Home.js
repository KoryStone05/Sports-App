import React, { Component } from 'react';
import axios from 'axios';
import NBA from '../NBA/NBA';

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