
describe('empty spec 6', () => {
  it('passes 6', () => {
    cy.wait(1500)
    cy.then(() => {
      expect('CI NOT DATA').be.eq('CI DATA')
    })
  })
})
