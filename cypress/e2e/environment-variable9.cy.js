
describe('empty spec 9', () => {
  it('passes', () => {
    cy.then(() => {
      expect('CI NOT DATA').be.eq('CI DATA')
    })
  })
})
