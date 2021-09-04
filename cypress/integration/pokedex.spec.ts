// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("Propoer Home Page Display", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the header", () => {
    cy.get(".header-container").should("be.visible");
    cy.get(".logo").should("be.visible");
  });

  it("should display the list of pokemons fully", () => {
    cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon?limit=24&offset=0", {
      statusCode: 200,
      fixture: "allPokemons",
    }).as("fetchAll");

    cy.wait("@fetchAll");

    cy.get(".card-title").should("have.length", 24);
  });

  it("should display the Modal with the details", () => {
    cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon?limit=24&offset=0", {
      statusCode: 200,
      fixture: "allPokemons",
    }).as("fetchAll");

    cy.wait("@fetchAll");

    cy.get(".button-container").first().click();
  });

  it("should close the modal the Modal", () => {
    cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon?limit=24&offset=0", {
      statusCode: 200,
      fixture: "allPokemons",
    }).as("fetchAll");

    cy.wait("@fetchAll");

    cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon/1/", {
      statusCode: 200,
      fixture: "onePokemon",
    }).as("fetchOne");

    cy.get(".button-container").first().click();

    cy.wait("@fetchOne");

    cy.contains("CLOSE").click();

    cy.contains("CLOSE").should("not.exist");
  });
});
