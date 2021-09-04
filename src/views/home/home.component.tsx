import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./home.styles.css";

import CardList from "../../components/card-list/card-list.component";

import { RootStore } from "../../redux/store/root.store";
import { getPokemonsAction } from "../../redux/actions/pokemon.actions";

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const dispatch = useDispatch();
  const { isLoading, pokemons, errorMsg } = useSelector(
    (state: RootStore) => state.pokemons
  );

  useEffect(() => {
    dispatch(getPokemonsAction(page));
  }, [dispatch, page]);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="home-container">
      <CardList isLoading={isLoading} pokemons={pokemons} errorMsg={errorMsg} />
    </div>
  );
};

export default Home;
