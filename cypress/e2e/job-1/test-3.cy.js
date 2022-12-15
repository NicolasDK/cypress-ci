
describe('empty spec 3', () => {
  it('passes 3', () => {
    cy.wait(1500)
    cy.then(() => {
      expect('CI DATA').be.eq('CI DATA')
    })
  })
})
