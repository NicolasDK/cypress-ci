
describe('empty spec 8', () => {
  it('passes 8', () => {
    cy.wait(5000)
    cy.then(() => {
      expect('CI NOT DATA').be.eq('CI DATA')
    })
  })
})
