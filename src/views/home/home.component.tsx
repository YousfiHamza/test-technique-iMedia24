import React, { useState } from "react";
import "./home.styles.css";

import CardList from "../../components/card-list/card-list.component";
import Pagination from "../../components/pagination/pagination.component";
import SearchBar from "../../components/search/search.component";
import usePokemons from "../../hooks/usePokemons";

const Home = () => {
  const [page, setPage] = useState<number>(1);

  const { status, data } = usePokemons(page);

  return (
    <div className="home-container">
      <SearchBar />
      <Pagination page={page} setPage={setPage} />
      <CardList status={status} pokemons={data?.data.results} />
    </div>
  );
};

export default Home;
