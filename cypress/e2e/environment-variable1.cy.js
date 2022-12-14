
describe('empty spec 1', () => {
  it('passes', () => {
    cy.then(() => {
      expect('CI DATA').be.eq('CI DATA')
    })
  })
})
