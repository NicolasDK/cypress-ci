
describe('empty spec 4', () => {
  it('passes', () => {
    cy.then(() => {
      expect('CI DATA').be.eq('CI DATA')
    })
  })
})
