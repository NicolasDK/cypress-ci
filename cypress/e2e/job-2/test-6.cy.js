
describe('empty spec 6', () => {
  it('passes 6', () => {
    cy.wait(5000)
    cy.then(() => {
      expect('CI NOT DATA').be.eq('CI DATA')
    })
  })
})
