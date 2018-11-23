import React from 'react';
import { Table } from 'react-materialize';

const ModalTable = (props) => {

    const desplegar = () => (
        props.discography.map((disk, index) => (
            <tr>
                <td>{ disk.albumName }</td>
                <td>{ disk.tracks }</td>
                <td>{ disk.year }</td>
                <td>{ disk.price }</td>
            </tr>
        ))
    );

    return (
        <Table>
            <thead>
                <tr>
                    <th>Album Name</th>
                    <th>Tracks</th>
                    <th>Year</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody>
                { desplegar() }
            </tbody>
        </Table>
    );
};

export default ModalTable;