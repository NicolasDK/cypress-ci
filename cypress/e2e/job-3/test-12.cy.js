
describe('empty spec 12', () => {
  it('passes 12', () => {
    
    cy.then(() => {
      expect('CI DATA').be.eq('CI DATA')
    })
  })
})
