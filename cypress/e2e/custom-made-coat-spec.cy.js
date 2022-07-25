/// <reference types="Cypress" />

describe('Custom Made Configurator', () => {
  beforeEach(() => {
    cy.visit('https://suitsupply.com/en-nl/')
    cy.contains('I Agree').click()
    cy.get('[class="btn-close cookies__close-btn js-decline-country-change"]').click()
  })

  it('As an anonymous user I can add Custom Made Coat to the shopping cart', () => {
    // navigate to CM page
    cy
      .get('[class="hero-display-subtitle-design cm-link"]')
      .eq(1)
      .scrollIntoView()
      .should('be.visible')
      .click()
    cy.url().should('include', 'custom-made.html')

    // navigate to Coat CM Configurator page
    cy.contains('Start designing').click()
    cy.get('[data-promo-id="page-journal-custom_made-fastest_tailors-cm_coat"]').click()
    cy.url().should('include', 'product=Coat')
    cy
      .get('[class="close border-solid body-small size-small shape-round icon-only background-light hydrated"]')
      .click()

    // step 1 - Fabric
    cy.get('[data-code="FabricSection"]').should('have.class', 'active-nav visited')
    cy.contains('Filter').click()
    cy.get('[data-node-name="Fall/Winter"]').check({ force: true })
    cy.get('[data-node-name="Wool Alpaca Polyamide"]').check({ force: true })
    cy.contains('Blue Herringbone Wool Alpaca Polyamide').click()
    cy.contains('Next').click()

    // step 2 - Style

    // step 3 - Size

    // step 4 - Summary
  })
})