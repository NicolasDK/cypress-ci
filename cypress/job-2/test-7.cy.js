
describe('empty spec 7', () => {
  it('passes 7', () => {
    cy.wait(500)
    cy.then(() => {
      expect('CI NOT DATA').be.eq('CI DATA')
    })
  })
})
