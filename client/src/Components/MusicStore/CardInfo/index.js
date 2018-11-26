import React, { Component } from 'react';
import { CardTitle, Card, Modal, Button } from "react-materialize";
import ModalTable from "../ProductsModal/Table";
import axios from 'axios';


class CardInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            discography: []
        }
    }

    async componentDidMount() {
        const discography = await axios.get('/api/disco/artist/'+this.props.artist_id);
        this.setState({
            discography: discography.data
        })
    }

    render() {
        return (
            <div>
                <Card
                    horizontal
                    header={
                        <CardTitle image="./cassete_default.png">
                            <strong style={{color: 'black'}}>
                                { this.props.name }
                            </strong>
                        </CardTitle>
                    }
                    actions={[
                        <div>
                            <Modal
                                header={
                                    <p>{ this.props.name }</p>
                                }
                                fixedFooter
                                trigger={
                                    <Button>Albums</Button>
                                }
                            >
                                <ModalTable discography={this.state.discography}/>
                            </Modal>
                        </div>
                    ]}
                >
                    <p>{ this.props.bio }</p>
                </Card>
            </div>
        );
    }
}


export default CardInfo;
