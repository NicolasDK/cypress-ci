
describe('empty spec 3', () => {
  it('passes', () => {
    cy.then(() => {
      expect(Cypress.env('MESSAGE')).be.eq('CI DATA')
    })
  })
})
