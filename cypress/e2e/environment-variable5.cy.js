
describe('empty spec 5', () => {
  it('passes 5', () => {
    cy.then(() => {
      expect('CI DATA').be.eq('CI DATA')
    })
  })
})
