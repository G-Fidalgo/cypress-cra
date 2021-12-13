export {};

it("should work Two", () => {
  cy.visit("https://www.amazon.es");
  cy.get('[id="nav-logo-sprites"]').should("contain", ".es");
});
