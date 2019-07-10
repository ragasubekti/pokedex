import axios from "axios";
import { API_URL } from "../constants";

export const GET_POKELIST = `GET_POKELIST`;
export const GET_POKELIST_AND_RESET = `GET_POKELIST_AND_RESET`;
export const GET_POKELIST_SUCCESS = `GET_POKELIST_SUCCESS`;

export const GET_POKEMON_DETAIL = `GET_POKEMON_DETAIL`;
export const GET_POKEMON_DETAIL_SUCCESS = `GET_POKEMON_DETAIL_SUCCESS`;

export const GET_POKEMON_TYPE = `GET_POKEMON_TYPE`;
export const GET_POKEMON_TYPE_SUCCESS = `GET_POKEMON_TYPE_SUCCESS`;
export const GET_POKEMON_TYPE_FAIL = `GET_POKEMON_TYPE_FAIL`;

export const GET_POKEMON_DETAIL_PAGE = `GET_POKEMON_DETAIL_PAGE`;
export const GET_POKEMON_DETAIL_PAGE_SUCCESS = `GET_POKEMON_DETAIL_PAGE_SUCCESS`;

export const SET_FILTER = `SET_FILTER`;

export const getPokemonDetailPage = name => dispatch => {
  dispatch({
    type: GET_POKEMON_DETAIL_PAGE
  });
};
