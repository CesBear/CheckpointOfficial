import React, { Component } from 'react';
import { CardTitle, Card, Col } from "react-materialize";
import ProductModal from "../ProductsModal";

class CardInfo extends Component {

    render() {
        return (
            <Col m={5} s={12}>
                <Card horizontal header={
                    <CardTitle image="./cassete_default.png">
                        <strong style={
                            {color: 'black'}
                        }
                        >
                            Deftones (aqui irá otro)
                        </strong>
                    </CardTitle>
                } actions={
                    [
                        <ProductModal/>
                    ]
                }>
                    <p> Aqui irá un metodo
                    </p>
                </Card>
            </Col>
        );
    }
}

export default CardInfo;