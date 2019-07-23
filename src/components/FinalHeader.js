import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../images/weather-logo.png';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import sky from '../images/sky.jpg';
import { relative } from 'path';

const fireball = {
    width: '100px',
    opacity: 7,
    borderRadius:'10px',
    padding: '0px  50px'

}
const h1Style = {
    position:'relative',
    top: '25px',
     margin: '-1px',
     left:'275px',
     color:'white'
}


const headerclass = {
    
    height: '100px',
    backgroundColor: '#e65c00',
    display: 'flex'
}

class Header extends React.Component {
    render() {
        return( 
        <header style={headerclass}>
            <Link to = "/"><img style={fireball} src={logo} /></Link>
            <h1 style ={h1Style}> The Weather App </h1>


        </header>
        );    
    }
}

export default Header;