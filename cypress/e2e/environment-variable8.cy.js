
describe('empty spec 8', () => {
  it('passes 8', () => {
    cy.then(() => {
      expect('CI NOT DATA').be.eq('CI DATA')
    })
  })
})
