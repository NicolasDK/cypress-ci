
describe('empty spec 2', () => {
  it('passes', () => {
    cy.then(() => {
      expect(Cypress.env('MESSAGE')).be.eq('CI DATA')
    })
  })
})
