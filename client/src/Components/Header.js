import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

const Header = (props) => (
        <Navbar id='header' className='cyan lighten-1'
                brand ={
                    <img src="./LeCassette.png" className='cassette' alt='logo'/>
                }
                right
        >

            <NavItem className="left">
                <li>
                    <a href="/"><i className="material-icons left" title='Home'>home</i>Home</a>
                </li>
                <li>
                    <a href="/artists"><i className="material-icons left" title='An Artist? add your music'>music_note</i>Artist Library</a>
                </li>
                <li>
                    <a href="/store"><i className="material-icons left" title='Go to the Shop!'>shop_two</i>Music Shop</a>
                </li>
                <li>
                    <a href="/about-us"><i className="left fas fa-user-astronaut"></i>About</a>
                </li>
            </NavItem>
        </Navbar>
);

export default Header
