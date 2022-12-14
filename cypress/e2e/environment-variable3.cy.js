
describe('empty spec 3', () => {
  it('passes', () => {
    cy.then(() => {
      expect('CI DATA').be.eq('CI DATA')
    })
  })
})
