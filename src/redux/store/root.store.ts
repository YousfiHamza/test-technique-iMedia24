import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import pokemonReducer, { PokemonsState } from '../reducer/pokemon.reducer'
import rootSaga from '../saga/root.saga'

export interface RootStore {
  pokemons: PokemonsState
}

function createRootStore() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    combineReducers({
      pokemons: pokemonReducer
    }),
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export default createRootStore
