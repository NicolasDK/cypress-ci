
describe('empty spec 4', () => {
  it('passes 4', () => {
    
    cy.then(() => {
      expect('CI DATA').be.eq('CI DATA')
    })
  })
})
