
describe('empty spec 11', () => {
  it('passes 11', () => {
    
    cy.then(() => {
      expect('CI NOT DATA').be.eq('CI DATA')
    })
  })
})
