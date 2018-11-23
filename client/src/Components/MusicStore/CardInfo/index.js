import React, { Component } from 'react';
import { CardTitle, Card, Col } from "react-materialize";
import ProductModal from "../ProductsModal";

class CardInfo extends Component {

    render() {
        return (
            <Col m={7} s={12}>
                <Card horizontal header={
                    <CardTitle image="./cassete_default.png">
                        <strong style={
                            {color: 'black'}
                        }
                        >
                            Deftones
                        </strong>
                    </CardTitle>
                } actions={
                    [
                        <ProductModal/>
                    ]
                }>
                    <p> Band from USA and commited to update the gnre about Rock and R&B
                    </p>
                </Card>
            </Col>
        );
    }
}

export default CardInfo;