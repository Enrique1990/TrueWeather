import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';
import Homepage1 from './Homepage1';


class Homepage extends React.Component {
    render() {
       return( 
            <div>
            <Header />
            <Homepage1 />
            <Footer />

        </div>
       );
    }
}

export default Homepage;