import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Input, Modal, Row} from "react-materialize";
import * as artistsActions from '../../actions/artistsActions'
import {
    ARTIST_NAME,
    ARTIST_BIO,
    ARTIST_ACTIVE,
    ARTIST_COUNTRY,
    ARTIST_FOUNDED_YEAR,
    ARTIST_GENRE,
} from "../../types/artistsTypes";


class AgregarArtista extends Component {

    handleChange = (event, type) => this.props.cambiarInput(type, event.target.value);

    enviar = async () => {

        const {
            name,
            bio,
            country,
            active,
            foundedYear,
            genre,
            discography
        } = this.props;

        const valores = { name, bio, country, active, foundedYear, genre, discography };

        this.props.enviarForma(valores, this.props.artists);
    };

    render() {
        return (
            <div className="valign-wrapper">
                <Modal
                    header='Register Artist form'
                    trigger={
                        <button
                            className="btn waves-effect waves-light red"
                            type="submit"
                            name="action">Register
                            <i className="material-icons right">add</i>
                        </button>
                    }
                >
                    <Row>
                        <Input
                            s={6}
                            label="Name"
                            type='text'
                            placeholder ='Artist / Soloist'
                            value={this.props.artists.name}
                            onChange={
                                (event) => this.handleChange(event, ARTIST_NAME)
                            }
                            name="artist_name"
                        />
                        <Input
                            s={3}
                            label="Country"
                            placeholder ='México'
                            type='text'
                            value={this.props.artists.country}
                            onChange={
                                (event) => this.handleChange(event, ARTIST_COUNTRY)
                            }
                            name="artist_country"
                        />
                        <Input
                            s={3}
                            label="Genre"
                            type='text'
                            placeholder ='Metal'
                            value={this.props.artists.genre}
                            onChange={
                                (event) => this.handleChange(event, ARTIST_GENRE)
                            }
                            name="artist_genre"
                        />
                        <Input
                            s={6}
                            label="Still active?"
                            placeholder ='Yes / No'
                            type = 'text'
                            value={this.props.artists.active}
                            onChange={
                                (event) => this.handleChange(event, ARTIST_ACTIVE)
                            }
                            name ="artist_active"
                        />
                        <Input
                            s={6}
                            label="Founded Year?"
                            placeholder ='1975'
                            type = 'number'
                            value={this.props.artists.foundedYear}
                            onChange={
                                (event) => this.handleChange(event, ARTIST_FOUNDED_YEAR)
                            }
                            name="artist_founded_year"
                        />
                        <Input
                            s={12}
                            label="Bio"
                            type='textarea'
                            placeholder ='Bried artis biography '
                            value={this.props.artists.bio}
                            onChange={
                                (event) => this.handleChange(event, ARTIST_BIO)
                            }
                            name="artist_bio"
                        />
                    </Row>
                    <button  className="btn waves-effect waves-light red"
                             type="submit"
                             name="action"
                             onClick={this.enviar}
                             disabled={this.props.cargando}
                    >
                        Submit
                        <i className="material-icons right">send</i>
                    </button>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = ({ artistsReducer }) => {
    return artistsReducer;
};

export default connect(mapStateToProps, artistsActions)(AgregarArtista);