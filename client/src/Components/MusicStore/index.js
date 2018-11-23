import React, {Component} from 'react';
import CardInfo from "./CardInfo";
import { connect } from 'react-redux';
import * as artistsActions from '../../actions/artistsActions'

class Store extends Component {

    componentDidMount() {
        if(!this.props.primer_get)
            this.props.traerArtistas();
    }

    desplegarCards = () => (
        this.props.artists.map((artist, index) => (
            <div className="col s12 m6">
                <CardInfo name={artist.name} bio={artist.bio} artist_id={artist._id} />
                <br />
            </div>
        ))
    );

    render(){
        return (
            <div className='container'>
                <h3>Cassette Store!</h3>
                <p>Find all the artists and albums that you love with an affordable price</p>
                <br/>
                <div className='row'>
                    { this.desplegarCards() }
                </div>
            </div>
        );
    }
}

 const mapStateToProps = ({ artistsReducer }) => {
     return artistsReducer;
 };

 export default connect(mapStateToProps, artistsActions)(Store);

