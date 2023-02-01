
describe('empty spec 11', () => {
  it('passes 11', () => {
    
    cy.then(() => {
      expect('CI DATA').be.eq('CI NOT DATA')
    })
  })
})
