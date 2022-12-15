
describe('empty spec 13', () => {
  it('passes 13', () => {
    
    cy.then(() => {
      expect('CI DATA').be.eq('CI DATA')
    })
  })
})
