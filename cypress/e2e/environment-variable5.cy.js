
describe('empty spec 5', () => {
  it('passes', () => {
    cy.then(() => {
      expect(Cypress.env('MESSAGE')).be.eq('CI DATA')
    })
  })
})
