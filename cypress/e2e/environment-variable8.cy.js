
describe('empty spec 8', () => {
  it('passes', () => {
    cy.then(() => {
      expect('CI NOT DATA').be.eq('CI DATA')
    })
  })
})
