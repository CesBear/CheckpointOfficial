import React from 'react';
import { Button, Icon } from 'react-materialize';

const HeroImg = () => {
    return (
        <div className='containerImage'>
            <img src='./cassette.jpg' alt='Cassette type' style={{width:'100%', height: '100%'}}/>
            <h1 className='top-left'>Find your favorite music <i className="fas fa-music"></i></h1>
            <div className="centered">
                <Button  node='a' href='/store' className='red' waves='yellow'>Buy Music!
                    <Icon left>music_video</Icon>
                </Button>
            </div>
        </div>
    )
};

export default HeroImg;