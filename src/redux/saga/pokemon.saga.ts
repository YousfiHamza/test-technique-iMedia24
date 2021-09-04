import { AnyAction } from "redux";
import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import PokemontModel from "../../types/PokemonType";
import {
  getPokemonsActionStarts,
  getPokemonsActionDone,
  getPokemonsActionFailed,
  getOnePokemonActionDone,
  getOnePokemonActionFailed,
} from "../actions/pokemon.actions";
import * as CONSTANTS from "../actions/constants";
import { fetchAllPokemons, fetchPokemon } from "../apis/api-factory";

function* getPokemons(action: AnyAction) {
  try {
    const page: number = action.payload;
    yield put(getPokemonsActionStarts());
    const response: AxiosResponse = yield call(fetchAllPokemons, page);
    const pokemons: PokemontModel[] = response.data.results;
    yield put(getPokemonsActionDone(pokemons));
  } catch {
    yield put(getPokemonsActionFailed("Error Fetching All the Pokemons ..."));
  }
}

function* getOnePokemon(action: AnyAction) {
  try {
    const id: string = action.payload;
    yield put(getPokemonsActionStarts());
    const response: AxiosResponse = yield call(fetchPokemon, id);
    const pokemon: PokemontModel = response.data;
    yield put(getOnePokemonActionDone(pokemon));
  } catch {
    yield put(getOnePokemonActionFailed("Error Fetching this POKEMON !"));
  }
}

export default function* roomsSaga() {
  yield takeLatest(CONSTANTS.GET_POKEMONS, getPokemons);
  yield takeLatest(CONSTANTS.GET_ONE_POKEMON, getOnePokemon);
}
