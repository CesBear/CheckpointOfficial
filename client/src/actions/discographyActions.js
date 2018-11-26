import axios from 'axios';

import {
    LLAMAR_DISCOGRAPHY,
    FALLO_DISCOGRAPHY,
    EXITOSO_DISCOGRAPHY

} from '../types/discographyTypes';

export const cambiarInput = (type, valor) => async (dispatch) => {
    dispatch({type, payload: valor})
};

export const enviarDiscographyForma = (id, valores, discography) => async (dispatch) => {
    dispatch ({type: LLAMAR_DISCOGRAPHY});

    try {
        const response = await axios.post(`/api/artists/${id}/discography'`, valores);
        discography.unshift(response.data);
        dispatch({
            type: EXITOSO_DISCOGRAPHY,
            payload: discography
        });
        window.Materialize.toast('Artist saved successfully.', 5*1000);
    }
    catch(error) {
        dispatch({type: FALLO_DISCOGRAPHY, payload: error.message});
        window.Materialize.toast('Error please try later.', 5*1000, 'red');    }

};
