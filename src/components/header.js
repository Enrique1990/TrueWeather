import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../images/Miami-Heat-Logo.jpg';

const fireball = {
    width: '207px',
    opacity: 7,
    borderRadius:'10px',
    padding: '70px  50px'

}


const headerclass = {
    heigth: '100px',
    backgroundColor: '#0d0d0d',
}

class Header extends React.Component {
    render() {
        return( 
        <header style={headerclass}>
            <img style={fireball} src={logo} />


        </header>
        );    
    }
}

export default Header;