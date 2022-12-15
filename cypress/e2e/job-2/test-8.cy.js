
describe('empty spec 8', () => {
  it('passes 8', () => {
    cy.wait(1500)
    cy.then(() => {
      expect('CI NOT DATA').be.eq('CI DATA')
    })
  })
})
