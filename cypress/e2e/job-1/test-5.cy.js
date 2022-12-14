
describe('empty spec 5', () => {
  it('passes 5', () => {
    cy.wait(5000)
    cy.then(() => {
      expect('CI DATA').be.eq('CI DATA')
    })
  })
})
