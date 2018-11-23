import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Icon, Table, Preloader, Button, Modal } from 'react-materialize';
import * as artistsActions from '../../actions/artistsActions';
import AgregarArtista from "./AgregarArtista";

class Artists extends Component {

    componentDidMount() {
        if(!this.props.primer_get)
            this.props.traerArtistas();
    };

    desplegarArtistas = () => (

        <Table id='table' hoverable={true}>
            <thead>
                <tr >
                    <th>Artist Name</th>
                    <th>Country</th>
                    <th>Genre</th>
                    <th className='header-row'>Founded Year</th>
                    <th className='header-row'>Active</th>
                    <th >Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                  this.props.artists.map((elem) => (
                      <tr key={elem._id}>
                          <td>{elem.name}</td>
                          <td>{elem.country}</td>
                          <td>{elem.genre}</td>
                          <td className='header-row'>{elem.foundedYear}</td>
                          <td className='header-row'>{elem.active}</td>
                          <td>
                              <Link className='btn-small red'to={`/artists/${elem._id}/discography`}>
                                  <Icon>add</Icon>
                              </Link>
                          </td>
                          <td>
                              <Link className='btn-small red'to={`/artists/${elem._id}`}>
                                  <Icon>edit</Icon>
                              </Link>
                          </td>
                          <td>
                              <Modal
                                  header='No way back!'
                                  actions={
                                      <span>
                                          <Button className='red modal-close' waves='light' icon='close' title ='Do not Delete'/>
                                          <Button className='red modal-close'
                                                waves='light'
                                                icon='check_circle'
                                                title ='Yes'
                                                onClick={()=>
                                                {
                                                    this.props.borrarUsuario(elem._id);
                                                }
                                                }
                                          />
                                      </span>
                                  }
                                  trigger={
                                      <Button className='btn-small red' waves='red' icon='delete_outline'/>
                                  }>
                                  <p> Are you sure you want to delete this artist?   <i className="fas fa-trash-alt"></i></p>
                              </Modal>
                          </td>
                      </tr>
                  ))
                }
            </tbody>
        </Table>
    );

    desplegarError = () => (
        <h1 className="red-text">
            { this.props.error }
        </h1>
    );

    desplegarCargando = () => (
        <div className="center">
            <Preloader size='big'/>
        </div>
    );


   desplegarContenido = () => (
       (this.props.error) ? this.desplegarError() : this.desplegarArtistas()
   );

    render() {
        return (
            <div className="container bkg-img">
                <h3>Artists <i className="fas fa-microphone-alt"></i></h3>
                <p> If you as an Artist not listed below, please register in the button below.</p>
                <AgregarArtista/>
                {
                    (this.props.cargando) ? this.desplegarCargando() :this.desplegarContenido()
                }
                <br/>
                <br/>
             </div>
         );
     }
 }


 const mapStateToProps = ({ artistsReducer }) => {
     return artistsReducer;
 };

 export default connect(mapStateToProps, artistsActions)(Artists);
