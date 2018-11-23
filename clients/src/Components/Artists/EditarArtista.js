import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Input, Button} from "react-materialize";
import * as artistsActions from '../../actions/artistsActions';
import {
    EDIT_ARTIST_ACTIVE,
    EDIT_ARTIST_BIO,
    EDIT_ARTIST_COUNTRY,
    EDIT_ARTIST_FOUNDED_YEAR,
    EDIT_ARTIST_GENRE,
    EDIT_ARTIST_NAME,
} from "../../types/artistsTypes";

class EditarArtista extends Component {

    componentDidMount() {
        this.props.llamarEditado(this.props.match.params.id);
    }

    handleChange = (event, type) => this.props.cambiarEditado(type, event.target.value);

    enviar = async () => {
        let {
            name,
            country,
            genre,
            active,
            foundedYear,
            bio,
        } = this.props.edit_artist;
        foundedYear = parseInt(foundedYear);
        const valores = { name, country, genre, active, foundedYear, bio };
        console.log(valores);
        this.props.enviarEditado(this.props.edit_artist._id, valores, this.props.artists);
    };


    render() {
        return (
            <div className='container'>
                <h3>Edit Artist Data <i className="fas fa-pen-square"></i></h3>
                <div className="row">
                <Input
                    s={6}
                    label="Name"
                    type='text'
                    placeholder = "Band Name / Soloist"
                    value={this.props.edit_artist.name}
                    onChange={
                        (event) => this.handleChange(event, EDIT_ARTIST_NAME)
                    }
                    name="edit_artist_name"
                />
                <Input
                    s={3}
                    label="Country"
                    placeholder = "México"
                    value={this.props.edit_artist.country}
                    onChange={
                        (event) => this.handleChange(event, EDIT_ARTIST_COUNTRY)
                    }
                    name="edit_artist_country"
                />
                <Input
                    s={3}
                    label="Genre"
                    type='text'
                    placeholder = "Folk"
                    value={this.props.edit_artist.genre}
                    onChange={
                        (event) => this.handleChange(event, EDIT_ARTIST_GENRE)
                    }
                    name="edit_artist_genre"
                />
                <Input
                    s={6}
                    label="Still active?"
                    placeholder = "Yes / No"
                    type='text'
                    value={this.props.edit_artist.active}
                    onChange={
                        (event) => this.handleChange(event, EDIT_ARTIST_ACTIVE)
                    }
                    name ="edit_artist_active"
                />
                <Input
                    s={6}
                    label="Founded Year?"
                    placeholder = "1979"
                    type='number'
                    value={this.props.edit_artist.foundedYear}
                    onChange={
                        (event) => this.handleChange(event, EDIT_ARTIST_FOUNDED_YEAR)
                    }
                    name="edit_artist_founded_year"
                />
                <Input
                    s={12}
                    label="Bio"
                    type='text'
                    placeholder = "Bio details or some kind of history"
                    value={this.props.edit_artist.bio}
                    onChange={
                        (event) => this.handleChange(event, EDIT_ARTIST_BIO)
                    }
                    name="edit_artist_bio"
                />
                </div>
                <div className="row">
                    <Button
                        className='green modal-close col s6 m4 offset-m2 ' waves='light'
                        onClick={this.enviar}
                        disabled={this.props.cargando}
                    >
                        Guardar
                    </Button>

                    <Link to={`/artists`}>
                        <Button
                            className='red col s6 m4' waves='light'
                        >
                            Regresar
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}



const mapStateToProps = ({ artistsReducer }) => {
    return artistsReducer;
};
export default connect(mapStateToProps, artistsActions)(EditarArtista);