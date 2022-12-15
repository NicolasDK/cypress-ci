
describe('empty spec 2', () => {
  it('passes 2', () => {
    cy.wait(500)
    cy.then(() => {
      expect('CI DATA').be.eq('CI DATA')
    })
  })
})
