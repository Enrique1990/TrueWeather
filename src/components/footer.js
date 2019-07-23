import React from 'react';
import ReactDOM from 'react-dom';

const WeatherText = {
    color: 'white',
    fontSize: '30px',
    display:'inline',
    position: 'relative',
    top:'19px',
    left:'136px'
}


const footerclass = {
    height : '75px',
    backgroundColor: '#0d0d0d',
    top: '395px',
}


class Footer extends React.Component {

    render() {
        return ( 
        <footer style={footerclass}>
            <h3 style={WeatherText}>Kike&copy;2019 techlaunch</h3>


        </footer>
        );
    }
}

export default Footer;