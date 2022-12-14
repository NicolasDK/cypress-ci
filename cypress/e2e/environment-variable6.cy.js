
describe('empty spec 6', () => {
  it('passes', () => {
    cy.then(() => {
      expect('CI NOT DATA').be.eq('CI DATA')
    })
  })
})
