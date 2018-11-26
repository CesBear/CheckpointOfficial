import {
    DISCOGRAPHY_ALBUM_NAME,
    DISCOGRAPHY_TRACKS,
    DISCOGRAPHY_YEAR,
    DISCOGRAPHY_PRODUCER_NAME,
    DISCOGRAPHY_PRICE,
    DISCOGRAPHY_DESCRIPTION,
    EMPTY_DISCOGRAPHY_FORM,
    LLAMAR_DISCOGRAPHY,
    FALLO_DISCOGRAPHY,
    EXITOSO_DISCOGRAPHY,
    PRIMER_GET,
    DELETE_DISCOGRAPHY,
    EDIT_DISCOGRAPHY_ALBUM_NAME,
    EDIT_DISCOGRAPHY_TRACKS,
    EDIT_DISCOGRAPHY_YEAR,
    EDIT_DISCOGRAPHY_PRODUCER_NAME,
    EDIT_DISCOGRAPHY_PRICE,
    EDIT_DISCOGRAPHY_DESCRIPTION, EDIT_DISCOGRAPHY

}
    from '../types/discographyTypes';

const INITIAL_STATE = {
    discography: [],
    albumName:'',
    tracks:'',
    price:'',
    producerName: '',
    description: '',
    year:'',
    edit_discography: {
        albumName:'',
        tracks:'',
        price:'',
        producerName: '',
        description: '',
        year:'',
    },
    cargando: false,
    primer_get: false,
    error: '',
};
export default (state = INITIAL_STATE, action) =>
{

    switch (action.type)
    {
        case EMPTY_DISCOGRAPHY_FORM: return { ...state, albumName: '', cargando: false, error: '', tracks:'', year:'', producerName:'',description:'', price:''};
        case LLAMAR_DISCOGRAPHY: return { ...state, error: '', cargando: true };
        case EXITOSO_DISCOGRAPHY: return { ...state, error: '', cargando: false, discography: action.payload };
        case FALLO_DISCOGRAPHY: return { ...state, error: action.payload, cargando: false };
        case DELETE_DISCOGRAPHY: return {...state, error:'', cargando: false};

        case DISCOGRAPHY_ALBUM_NAME: return { ...state, albumName: action.payload };
        case DISCOGRAPHY_TRACKS: return { ...state, bio: action.payload };
        case DISCOGRAPHY_PRICE: return { ...state, country: action.payload };
        case DISCOGRAPHY_DESCRIPTION: return { ...state, active: action.payload };
        case DISCOGRAPHY_PRODUCER_NAME: return { ...state, foundedYear: action.payload };
        case DISCOGRAPHY_YEAR: return { ...state, year: action.payload };


        case EDIT_DISCOGRAPHY_ALBUM_NAME: return { ...state, edit_discography: { ...state.edit_discography, albumName: action.payload }};
        case EDIT_DISCOGRAPHY_TRACKS: return { ...state, edit_discography: { ...state.edit_discography, tracks: action.payload }};
        case EDIT_DISCOGRAPHY_YEAR: return { ...state, edit_discography: {...state.edit_discography, year: action.payload }};
        case EDIT_DISCOGRAPHY_PRODUCER_NAME: return { ...state, edit_discography: {...state.edit_discography, producerName: action.payload }};
        case EDIT_DISCOGRAPHY_PRICE: return { ...state, edit_discography: {...state.edit_discography, price: action.payload }};
        case EDIT_DISCOGRAPHY_DESCRIPTION: return { ...state,edit_discography: {...state.edit_discography, description: action.payload }};
        case EDIT_DISCOGRAPHY: return {...state, edit_discography: action.payload, cargando: false, error:''};

        case PRIMER_GET: return {...state, primer_get:true};
        default: return state;
    }
}