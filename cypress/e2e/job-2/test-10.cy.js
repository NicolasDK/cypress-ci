
describe('empty spec 10', () => {
  it('passes 10', () => {
    cy.then(() => {
      expect('CI NOT DATA').be.eq('CI DATA')
    })
  })
})
