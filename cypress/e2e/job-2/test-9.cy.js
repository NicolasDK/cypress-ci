
describe('empty spec 9', () => {
  it('passes 9', () => {
    
    cy.then(() => {
      expect('CI DATA').be.eq('CI DATA')
    })
  })
})
