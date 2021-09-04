import { createAction } from "redux-actions";

import Pokemon from "../../types/PokemonType";
import * as CONSTANTS from "./constants";

export const getPokemonsAction = createAction<number>(CONSTANTS.GET_POKEMONS);
export const getOnePokemonAction = createAction<string>(
  CONSTANTS.GET_ONE_POKEMON
);

export const getPokemonsActionStarts = createAction(
  CONSTANTS.GET_POKEMONS_STARTS
);
export const getPokemonsActionDone = createAction<Pokemon[]>(
  CONSTANTS.GET_POKEMONS_DONE
);
export const getPokemonsActionFailed = createAction<string>(
  CONSTANTS.GET_POKEMONS_FAILED
);
export const getOnePokemonActionDone = createAction<Pokemon>(
  CONSTANTS.GET_ONE_POKEMON_DONE
);
export const getOnePokemonActionFailed = createAction<string>(
  CONSTANTS.GET_ONE_POKEMON_FAILED
);
