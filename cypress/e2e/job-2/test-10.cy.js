
describe('empty spec 10', () => {
  it('passes 10', () => {
    cy.wait(1500)
    cy.then(() => {
      expect('CI NOT DATA').be.eq('CI DATA')
    })
  })
})
