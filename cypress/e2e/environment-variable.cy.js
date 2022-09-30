import * as file from '../../cypress.env.json'

describe('empty spec', () => {
  it('passes', () => {
    cy.then(() => {
      // expect(Cypress.env('MESSAGE')).be.eq('CI DATA')
      expect(Cypress.env('MESSAGE')).be.eq('CI DATA')
    })
  })
})