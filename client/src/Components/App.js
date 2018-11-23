import React from 'react';
import '../App.css';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Header from "./Header";
import Route from "react-router-dom/es/Route";
import HeroImage from "./HeroImage";
import FooterInfo from "./Footer";
import Store from "./MusicStore";
import Artists from "./Artists";
import EditarArtista from "./Artists/EditarArtista";
import AgregarDiscography from "./Artists/AgregarDiscography";

const App  = () =>
(
    <div>
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={HeroImage}/>
                <Route exact path="/artists" component = {Artists}/>
                <Route exact path="/artists/:id" component = { EditarArtista }/>
                <Route exact path="/artists/:id/discography" component ={AgregarDiscography}/>
                <Route exact path="/store" component ={Store}/>
                <Route exact path="/about-us"/>
                <FooterInfo/>
            </div>
        </BrowserRouter>
    </div>
);

export default App;
