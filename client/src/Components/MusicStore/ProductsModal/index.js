import React, {Component} from 'react';
import {Modal, Button} from 'react-materialize';
import ModalTable from "./Table";


class ProductModal extends Component {
    render() {
        return (
            <div>
                <Modal
                    header={<p>Test</p>}
                    fixedFooter
                    trigger={
                        <Button>Check the Albums</Button>
                    }>
                    <ModalTable/>
                </Modal>
            </div>
        );
    }
}

export default ProductModal;