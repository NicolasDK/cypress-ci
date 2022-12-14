
describe('empty spec 4', () => {
  it('passes 4', () => {
    cy.wait(5000)
    cy.then(() => {
      expect('CI DATA').be.eq('CI DATA')
    })
  })
})
