
describe('empty spec 10', () => {
  it('passes', () => {
    cy.then(() => {
      expect('CI NOT DATA').be.eq('CI DATA')
    })
  })
})
