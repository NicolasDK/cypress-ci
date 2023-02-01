
describe('empty spec 10', () => {
  it('passes 10', () => {
    
    cy.then(() => {
      expect('CI DATA').be.eq('CI DATA')
    })
  })
})
