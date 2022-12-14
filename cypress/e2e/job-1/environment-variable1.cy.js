
describe('empty spec 1', () => {
  it('passes 1', () => {
    cy.then(() => {
      expect('CI DATA').be.eq('CI DATA')
    })
  })
})
