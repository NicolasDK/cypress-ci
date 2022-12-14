
describe('empty spec 5', () => {
  it('passes', () => {
    cy.then(() => {
      expect('CI DATA').be.eq('CI DATA')
    })
  })
})
