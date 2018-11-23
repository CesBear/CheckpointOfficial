import React from 'react';
import { Footer } from 'react-materialize';

const FooterInfo = () => {
    return (
        <Footer  copyrights="Copyright 2018"
                moreLinks={
                    <a className="grey-text text-lighten-4 right" href="https://www.facebook.com/"> Visit us at:   <i className="fab fa-facebook-square"></i></a>
                }
                className='cyan lighten-1'
        >
            <h3 className="white-text">Le Cassetterie</h3>
            <p className="grey-text text-lighten-4 ">We love the 80's time and we want to approach our customers
                 by selling vintage cassettes types. We believe in all the music should be accessible to everyone
                without the artists lose money.</p>
        </Footer>
    );
};

export default FooterInfo;