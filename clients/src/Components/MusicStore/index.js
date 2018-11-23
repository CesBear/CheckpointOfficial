import React, {Component} from 'react';
import CardInfo from "./CardInfo";

class Store extends Component {

    render(){
        return (
            <div className='container'>
                <h3>Cassette Store!</h3>
                <p>Find all the artists and albums that you love with an affordable price</p>
                <br/>
                <div className='spacing'>
                    <CardInfo/>
                </div>
            </div>
        );
    }
}

export default Store;

