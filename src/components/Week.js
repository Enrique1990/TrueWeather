import React from 'react';
import ReactDOM from 'react-dom';
import FinalHeader from './FinalHeader';
import Week1 from './Week1';
import FinalFooter from './FinalFooter';



class Week extends React.Component {
    render() {
       return( 
            <div>
            <FinalHeader />
            <Week1 />
            <FinalFooter />

        </div>
       );
    }
}

export default Week;