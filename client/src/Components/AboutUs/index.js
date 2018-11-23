import React from 'react';
import { Card, CardTitle, Row, Col} from 'react-materialize';

const AboutUs = (props) =>
    (
    <div className= 'container'>
        <h3>About Us</h3>

            <Row>
                <Col s={12} m={3}>
                    <Card header={
                        <CardTitle reveal image={"./ale.png"}
                                   waves='light'
                        />}
                          title="Ale"
                          reveal={
                              <p>Joven talentoza y con experiencia!. Actualmente desarrollando en Intel como Front-End Engineer...</p>
                          }>
                    </Card>
                </Col>

                <Col s={12} m={3}>
                    <Card header={<CardTitle reveal image={"./jc.png"} waves='light'/>}
                          title="JC"
                          reveal={<p>Con antecedentes en áreas de la salud y administración de sistemas de salud.
                              Actualmente trabajando en Secretaría de Salud Jalisco.</p>}>
                    </Card>
                </Col>
                <Col s={12} m={3}>
                <Card header={
                    <CardTitle reveal image={"./Ces.png"}
                               waves='light'
                    />}
                      title="Cesar"
                      reveal={
                          <p>Tester de profesión pero Dev de corazón, actualmente está en transición de SDET hacia FullStack Engineer</p>
                      }>
                </Card>
            </Col>
                <Col s={12} m={3}>
                <Card header={<CardTitle reveal image={"./Checo.png"} waves='light'/>}
                      title="Checo"
                      reveal={<p> Gran Ingeniero con espiritú viajero. Actualmente esta en un proyecto implementanto SAP pero su pasión también es
                              el Front.
                      </p>}>
                </Card>
            </Col>
        </Row>
    </div>
);
export default AboutUs;