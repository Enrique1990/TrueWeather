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
    position:'absolute',
    height : '75px',
    backgroundColor: '#e65c00',
    bottom:'-370px',
    width:'100%',
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