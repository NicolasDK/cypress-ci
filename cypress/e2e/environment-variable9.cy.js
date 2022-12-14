
describe('empty spec 9', () => {
  it('passes', () => {
    cy.then(() => {
      expect(Cypress.env('MESSAGE')).be.eq('CI DATA')
    })
  })
})
