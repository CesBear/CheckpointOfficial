import React, {Component} from 'react';
import {Input, Row } from 'react-materialize'

class AgregarDiscography extends Component {

    render() {
        return (
            <div className="container">
                <div className="valign-wrapper">

                    <Row>
                        <h3>Artist name</h3>
                        <p> Insert a new album data below </p>
                        <Input
                            s={6}
                            label="Album Name"
                            type='text'
                            placeholder ="Parachutes"
                        />
                        <Input
                            s={3}
                            label="No. of Tracks"
                            type='number'
                            placeholder ='10'
                        />
                        <Input
                            s={3}
                            label="Year"
                            type='number'
                            placeholder ='1952'
                        />
                        <Input
                            s={6}
                            label="Producer Name"
                            type='text'
                            placeholder ='John Smith'
                        />
                        <Input
                            s={3}
                            label="Price"
                            type='number'
                            placeholder ='$15.99'
                        />
                        <Input
                            s={12}
                            label="Description of the album"

                            type='textarea'
                            placeholder ='Description of the album'
                        />
                    </Row>
                </div>
            </div>
        );
    }
}

export default AgregarDiscography;
