import {
    LLAMAR_ARTISTS,
    EXITOSO_ARTISTS,
    EDIT_ARTIST,
    FALLO_ARTISTS,
    ARTIST_NAME,
    ARTIST_COUNTRY,
    ARTIST_GENRE,
    ARTIST_BIO,
    ARTIST_FOUNDED_YEAR,
    ARTIST_ACTIVE,
    EDIT_ARTIST_BIO,
    EDIT_ARTIST_NAME,
    EDIT_ARTIST_ACTIVE,
    EDIT_ARTIST_COUNTRY,
    EDIT_ARTIST_FOUNDED_YEAR,
    EDIT_ARTIST_GENRE,
    EMPTY_ARTIST_FORM,
    PRIMER_GET,
    DELETE_ARTIST
} from '../types/artistsTypes';

const INITIAL_STATE = {
    artists: [],
    cargando: false,
    primer_get: false,
    error: '',
    name: '',
    country: '',
    genre: '',
    active: '',
    foundedYear: '',
    bio: '',
    edit_artist: {
        name: '',
        country: '',
        genre: '',
        active: '',
        foundedYear: '',
        bio: ''
    }
};
export default (state = INITIAL_STATE, action) =>
{

    switch (action.type)
    {
        case EMPTY_ARTIST_FORM: return { ...state, name: '', cargando: false, error: '', country:'', genre:'',active:'',foundedYear:'', bio:''};
        case LLAMAR_ARTISTS: return { ...state, error: '', cargando: true };
        case EXITOSO_ARTISTS: return { ...state, error: '', cargando: false, artists: action.payload };
        case FALLO_ARTISTS: return { ...state, error: action.payload, cargando: false };
        case DELETE_ARTIST: return {...state, error:'', cargando: false};

        case ARTIST_NAME: return { ...state, name: action.payload };
        case ARTIST_BIO: return { ...state, bio: action.payload };
        case ARTIST_COUNTRY: return { ...state, country: action.payload };
        case ARTIST_ACTIVE: return { ...state, active: action.payload };
        case ARTIST_FOUNDED_YEAR: return { ...state, foundedYear: action.payload };
        case ARTIST_GENRE: return { ...state, genre: action.payload };


        case EDIT_ARTIST_NAME: return { ...state, edit_artist: { ...state.edit_artist, name: action.payload }};
        case EDIT_ARTIST_BIO: return { ...state, edit_artist: { ...state.edit_artist, bio: action.payload }};
        case EDIT_ARTIST_COUNTRY: return { ...state, edit_artist: {...state.edit_artist, country: action.payload }};
        case EDIT_ARTIST_ACTIVE: return { ...state, edit_artist: {...state.edit_artist, active: action.payload }};
        case EDIT_ARTIST_FOUNDED_YEAR: return { ...state, edit_artist: {...state.edit_artist, foundedYear: action.payload }};
        case EDIT_ARTIST_GENRE: return { ...state,edit_artist: {...state.edit_artist, genre: action.payload }};
        case EDIT_ARTIST: return {...state, edit_artist: action.payload, cargando: false, error:''};

        case PRIMER_GET: return {...state, primer_get:true};
        default: return state;
    }
}