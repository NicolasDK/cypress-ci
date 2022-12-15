
describe('empty spec 9', () => {
  it('passes 9', () => {
    cy.wait(1500)
    cy.then(() => {
      expect('CI NOT DATA').be.eq('CI DATA')
    })
  })
})
