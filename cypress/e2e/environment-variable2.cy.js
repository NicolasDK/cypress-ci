
describe('empty spec 2', () => {
  it('passes', () => {
    cy.then(() => {
      expect('CI DATA').be.eq('CI DATA')
    })
  })
})
