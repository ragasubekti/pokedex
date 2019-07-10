import {
  GET_POKEMON_TYPE,
  GET_POKEMON_TYPE_SUCCESS,
  GET_POKELIST_AND_RESET,
  GET_POKELIST_SUCCESS
} from "../actions";
import { API_URL } from "../../constants";
import axios from "axios";

export const getPokemonTypes = () => async dispatch => {
  dispatch({
    type: GET_POKEMON_TYPE
  });
  try {
    const response = await axios.get(`${API_URL}/type/`);

    const { data } = response;

    dispatch({
      type: GET_POKEMON_TYPE_SUCCESS,
      payload: {
        data: data.results
      }
    });
  } catch (e) {}
};

export const getPokemonByType = type => async dispatch => {
  dispatch({
    type: GET_POKELIST_AND_RESET
  });

  try {
    const response = await axios.get(`${API_URL}/type/${type}`);

    const { data } = response;

    dispatch({
      type: GET_POKELIST_SUCCESS,
      payload: {
        total: data.pokemon.length,
        hasNext: false,
        data: data.pokemon.map(item => item.pokemon)
      }
    });
  } catch (e) {}
};
