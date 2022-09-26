describe('empty spec', () => {
  it('passes', () => {
    cy.then(() => {
      expect(Cypress.env('MESSAGE')).be.eq('CI GET ENVIRONMENT WITH SUCCESS')
    })
  })
})