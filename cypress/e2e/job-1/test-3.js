
describe('empty spec 3', () => {
  it('passes 3', () => {
    cy.then(() => {
      expect('CI DATA').be.eq('CI DATA')
    })
  })
})
