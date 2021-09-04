import { AnyAction } from "redux";

import PokemonModel from "../../types/PokemonType";
import * as CONSTANTS from "../actions/constants";

export type PokemonsState = {
  pokemons: PokemonModel[];
  isLoading: boolean;
  errorMsg: string | null;
  errorMsgOne: string | null;
  selectedPokemon: any;
};

export type PokemonState = PokemonModel;

const initialState: PokemonsState = {
  pokemons: [],
  isLoading: false,
  errorMsg: null,
  errorMsgOne: null,
  selectedPokemon: undefined,
};

export default function pokemonReducer(
  state = initialState,
  action: AnyAction
): PokemonsState {
  switch (action.type) {
    case CONSTANTS.GET_POKEMONS_STARTS:
      return {
        ...state,
        isLoading: true,
        errorMsg: null,
        errorMsgOne: null,
      };
    case CONSTANTS.GET_POKEMONS_DONE:
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.payload] || [],
        isLoading: false,
        selectedPokemon: undefined,
      };
    case CONSTANTS.GET_ONE_POKEMON_DONE:
      return {
        ...state,
        selectedPokemon: action.payload || {},
        isLoading: false,
      };
    case CONSTANTS.GET_POKEMONS_FAILED:
      return {
        ...state,
        pokemons: [],
        isLoading: false,
        errorMsg: action.payload,
        selectedPokemon: undefined,
      };
    case CONSTANTS.GET_ONE_POKEMON_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMsgOne: action.payload,
        selectedPokemon: undefined,
      };
    default:
      return state;
  }
}
