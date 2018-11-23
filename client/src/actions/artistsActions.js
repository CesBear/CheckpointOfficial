import axios from 'axios';
import {
    LLAMAR_ARTISTS,
    FALLO_ARTISTS,
    EXITOSO_ARTISTS,
    PRIMER_GET,
    EDIT_ARTIST,
    DELETE_ARTIST, EMPTY_ARTIST_FORM,
} from '../types/artistsTypes';

export const traerArtistas = () => async (dispatch) =>
{
    dispatch({ type: LLAMAR_ARTISTS });

    try {
        const response = await axios.get('/api/artists');
        response.data.reverse();
        dispatch({ type: EXITOSO_ARTISTS, payload: response.data });
        dispatch({ type: PRIMER_GET});
    }
    catch(error) {
        dispatch({ type: FALLO_ARTISTS, payload: error.message });
    }
};

export const cambiarInput = (type, valor) => async (dispatch) => {
    dispatch({type, payload: valor})
};

export const enviarForma = (valores, artists) => async (dispatch) => {
    dispatch ({type: LLAMAR_ARTISTS});

    try {
        const response = await axios.post('/api/artists', valores);
        artists.unshift(response.data);
        dispatch({
            type: EXITOSO_ARTISTS,
            payload: artists
        });
        window.Materialize.toast('Artist saved successfully.', 5*1000);
    }
    catch(error) {
        dispatch({type: FALLO_ARTISTS, payload: error.message});
        window.Materialize.toast('Error please try later.', 5*1000, 'red');    }

};

export const llamarEditado = (id) => async (dispatch) => {

    dispatch ({type: LLAMAR_ARTISTS});
    try {
        const response = await axios.get(`/api/artists/${id}`);
        dispatch ({ type: EDIT_ARTIST, payload: response.data[0] })
    }
    catch(error) {
        dispatch({type: FALLO_ARTISTS, payload: error.message});
        window.Materialize.toast('Try later.', 5*1000, 'red');
    }
};

export const cambiarEditado = (type, valor) => async (dispatch) => {
    dispatch ({ type: type, payload: valor})
};

export const enviarEditado = (id, valores, artists) => async (dispatch) => {
    dispatch ({type: LLAMAR_ARTISTS});

    try {
        const response = await axios.put(`/api/artists/${id}`, valores);
        artists.unshift(response.data);
        dispatch({
            type: EXITOSO_ARTISTS,
            payload: artists
        });
        dispatch({
            type: EMPTY_ARTIST_FORM,
            payload: artists
        });
        window.Materialize.toast('Artist updated successfully.', 5*1000);

    }
    catch(error) {
        dispatch({type: FALLO_ARTISTS, payload: error.message});
        window.Materialize.toast('Artist was not updated.', 5*1000, 'red');
    }
};

export const borrarUsuario = (id) => async (dispatch) => {
    dispatch ({type: DELETE_ARTIST});
    try {
        const response = await axios.delete(`/api/artists/${id}`);
        window.Materialize.toast('Artist Deleted Successfully.', 5*1000);
        window.location.reload()
    }
    catch(error) {
        dispatch({type: FALLO_ARTISTS, payload: error.message});
        window.Materialize.toast('Cannot delete artist try again later.', 5*1000, 'red');
    }
};