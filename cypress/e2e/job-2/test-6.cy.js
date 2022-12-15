
describe('empty spec 6', () => {
  it('passes 6', () => {
    
    cy.then(() => {
      expect('CI NOT DATA').be.eq('CI DATA')
    })
  })
})
