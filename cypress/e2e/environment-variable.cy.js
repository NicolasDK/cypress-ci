describe('empty spec', () => {
  it('passes', () => {
    cy.then(() => {
      console.log('###############################')
      console.log('SECRET: ' + Cypress.env('MESSAGE'))
      console.log('###############################')
      
      cy.log('cy ###############################')
      cy.log('cy SECRET: ' + Cypress.env('MESSAGE'))
      cy.log('cy ###############################')

      expect(Cypress.env('MESSAGE')).be.eq('CI GET ENVIRONMENT WITH SUCCESS')
    })
  })
})