
describe('empty spec 15', () => {
  it('passes 15', () => {
    
    cy.then(() => {
      expect('CI DATA').be.eq('CI DATA')
    })
  })
})
