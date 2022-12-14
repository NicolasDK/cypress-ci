
describe('empty spec 7', () => {
  it('passes', () => {
    cy.then(() => {
      expect('CI NOT DATA').be.eq('CI DATA')
    })
  })
})
