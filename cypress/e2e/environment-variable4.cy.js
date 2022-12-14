
describe('empty spec 4', () => {
  it('passes', () => {
    cy.then(() => {
      expect(Cypress.env('MESSAGE')).be.eq('CI DATA')
    })
  })
})
