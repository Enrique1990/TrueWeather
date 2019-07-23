import React from 'react';
import ReactDOM from 'react-dom';

// import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const divStyle = {
    backgroundColor: 'red',
    color:'white'
}
const h1Style = {
    padding: '30px'
}

class Homepage1 extends React.Component {
    render(){
        return(
            <div style ={divStyle}>
                <h1 style ={h1Style}>Season 2019-2020</h1>


            </div>
        );
    }
}

export default Homepage1;