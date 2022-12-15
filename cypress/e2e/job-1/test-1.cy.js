
describe('empty spec 1', () => {
  it('passes 1', () => {
    cy.wait(1500)
    cy.then(() => {
      expect('CI DATA').be.eq('CI DATA')
    })
  })
})
