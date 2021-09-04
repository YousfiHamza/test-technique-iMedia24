import React, { ReactElement } from "react";
import { Provider } from "react-redux";

import { render, screen, fireEvent } from "@testing-library/react";
import PokemonType from "../types/PokemonType";
import CardItem from "../components/card-item/card-item.component";
import createRootStore from "../redux/store/root.store";

const myPokemon: PokemonType = {
  name: "Pikachu",
  url: "url.com",
};

const store = createRootStore();

const renderWithProvider = (Component: ReactElement) =>
  render(<Provider store={store}>{Component}</Provider>);

describe("Card-Item normal display", () => {
  beforeEach(() => {
    renderWithProvider(<CardItem pokemon={myPokemon} />);
  });
  it("should display pokemon's name", async () => {
    const title = await screen.findByTestId("title");
    expect(title).toHaveTextContent(myPokemon.name);
  });
  it("should trigger the toogle", async () => {
    const handleToogleModal = jest.fn();
    const button = await screen.findByRole("button");
    expect(handleToogleModal).not.toHaveBeenCalled();
    fireEvent.click(button);
    expect(handleToogleModal).toHaveBeenCalledTimes(1);
  });
});
