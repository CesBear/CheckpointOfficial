import React, {Component} from 'react';
import { Table } from 'react-materialize';


class ModalTable extends Component {
    render() {
        return (
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th data-field="id">Artist</th>
                        <th data-field="album">Album Name</th>
                        <th data-field="name">Song Name</th>
                        <th data-field="price">Album Price</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>Deftones</td>
                        <td>White Pony</td>
                        <td>Digital Bath</td>
                        <td>$1.00</td>
                    </tr>
                    <tr>
                        <td>Means</td>
                        <td>To hell with motives</td>
                        <td>On the Broken</td>
                        <td>$0.99</td>
                    </tr>
                    <tr>
                        <td>Cumbia Kings</td>
                        <td>No se</td>
                        <td>Danzón chingón</td>
                        <td>$0.50</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ModalTable;