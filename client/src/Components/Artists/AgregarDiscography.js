import React, {Component} from 'react';
import {Input, Row } from 'react-materialize';
import axios from 'axios';

class AgregarDiscography extends Component {

    constructor(props) {
        super(props);
        this.state = {
            albumName: '',
            tracks: '',
            year: '',
            price: '',
            productorName: '',
            description: '',
            _idArtist: this.props.match.params.id,
            artistName: ''
        }
    }

    async componentDidMount() {
        try {
            const respuesta = await axios.get('/api/artists/'+this.props.match.params.id);
            this.setState({ artistName: respuesta.data[0].name });
        }
        catch(error) {
            alert(error.message);
        }
    }

    handleChange = (event, propiedad) => {
        this.setState({
            [propiedad]: event.target.value
        })
    };

    enviar = async () => {
        try {
            const respuesta = await axios.post('/api/disco', this.state);
            window.Materialize.toast('Discography saved successfully.', 5*1000);
        }
        catch(error) {
            alert(error.message);
        }

    };

    render() {
        return (
            <div className="container">
                <div className="valign-wrapper">

                    <Row>
                        <h3>{ this.state.artistName }</h3>
                        <p> Insert a new album data below </p>
                        <Input
                            s={6}
                            label="Album Name"
                            type='text'
                            placeholder ="Parachutes"
                            value={ this.props.albumName }
                            onChange={ (e) => this.handleChange(e, 'albumName') }
                        />
                        <Input
                            s={3}
                            label="No. of Tracks"
                            type='number'
                            placeholder ='10'
                            value={ this.props.tracks }
                            onChange={ (e) => this.handleChange(e, 'tracks') }
                        />
                        <Input
                            s={3}
                            label="Year"
                            type='number'
                            placeholder ='1952'
                            value={ this.props.year }
                            onChange={ (e) => this.handleChange(e, 'year') }
                        />
                        <Input
                            s={6}
                            label="Producer Name"
                            type='text'
                            placeholder ='John Smith'
                            value={ this.props.productorName }
                            onChange={ (e) => this.handleChange(e, 'productorName') }
                        />
                        <Input
                            s={3}
                            label="Price"
                            type='number'
                            placeholder ='15.99'
                            value={ this.props.price }
                            onChange={ (e) => this.handleChange(e, 'price') }
                        />
                        <Input
                            s={12}
                            label="Description of the album"

                            type='textarea'
                            placeholder ='Description of the album'
                            value={ this.props.description }
                            onChange={ (e) => this.handleChange(e, 'description') }
                        />
                    </Row>
                </div>
                <button  className="btn waves-effect waves-light red"
                         type="submit"
                         name="action"
                         onClick={this.enviar}
                >
                    Enviar
                    <i className="material-icons right">send</i>
                </button>
                <br /><br />
            </div>
        );
    }
}

export default AgregarDiscography;
