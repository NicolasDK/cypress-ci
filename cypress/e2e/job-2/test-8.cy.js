
describe('empty spec 8', () => {
  it('passes 8', () => {
    
    cy.then(() => {
      expect('CI DATA').be.eq('CI DATA')
    })
  })
})
