
describe('empty spec 7', () => {
  it('passes 7', () => {
    cy.wait(5000)
    cy.then(() => {
      expect('CI NOT DATA').be.eq('CI DATA')
    })
  })
})
