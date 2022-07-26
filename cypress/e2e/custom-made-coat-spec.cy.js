/// <reference types="Cypress" />

import { MainPage } from './page-objects/main-page.js'
import { CustomMadePage } from './page-objects/custom-made-page.js'

describe('Custom Made Configurator', () => {

  const mainPage = new MainPage()
  const customMadePage = new CustomMadePage()

  beforeEach(() => {
    mainPage.navigateToMainPage()
    mainPage.acceptCookies()
  })

  it('As an anonymous user I can add Custom Made Coat to the shopping cart', () => {
    // navigate to CM page
    mainPage.navigateToCustomMadePage()

    // navigate to Coat CM Configurator page
    customMadePage.navigateToCoatConfiguratorPage()

    // step 1 - Fabric
    cy.get('[data-code="FabricSection"]').should('have.class', 'active-nav visited')
    cy.contains('Filter').click()
    cy.get('[data-node-name="Fall/Winter"]').check({ force: true })
    cy.get('[data-node-name="Wool Alpaca Polyamide"]').check({ force: true })
    cy.wait(2000)
    cy.contains('Blue Herringbone Wool Alpaca Polyamide').click()
    cy.contains('Next').click()

    // step 2 - Style
    cy.get('[data-code="CoatSection"]').should('have.class', 'active-nav visited')

    cy.get('[aria-label="Fit"]').click()
    cy.contains('Bleecker').click()
    cy.contains('Apply').click()

    cy.get('[aria-label="Lining"]').click()
    cy.contains('Light Grey (3220)').click()
    cy.contains('Apply').click()

    cy.get('[aria-label="Buttons"]').click()
    cy.contains('Brown & Light Brown (BOHA3-F)').click()

    cy.contains('Apply').click()

    cy.contains('Next').click()

    // step 3 - Size
    cy.get('[data-code="SizeSection"]').should('have.class', 'active-nav visited')

    cy.contains('Get started').click() // Get Started button
    cy.get('[aria-label="Select size"]').click() // Select Size "dropdown"

    cy.contains('48').click() //  Actual size button

    cy.wait(2000)
    cy
      .get('[class="main-btn"]')
      .find('[aria-label="Select size"]')
      .click({ force: true }) //  Select Size button

    cy.wait(2000)

    cy
      .get('[aria-label="Save & Continue"]')
      .click({ force: true }) //  Save & Continue button

    cy.contains('Apply').click()

    // step 4 - Summary
    cy.get('[data-code="SummarySection"]').should('have.class', 'active-nav visited')

    // validate selected Fabric
    cy.get('[data-code="fabric"]').find('[class="name"]').should('have.text', 'Blue Herringbone Wool Alpaca Polyamide')

    // validate selected Style
    cy.get('[data-code="fit"]').find('[class="main-detail"]').should('have.text', 'Bleecker')
    cy.get('[data-code="sidePocket"]').find('[class="main-detail"]').should('have.text', 'Flap')
    cy.get('[data-code="waistline"]').find('[class="main-detail"]').should('have.text', 'No Belt')
    cy.get('[data-code="length"]').find('[class="main-detail"]').should('have.text', 'Thigh Length (Standard)')
    cy.get('[data-code="lining"]').find('[class="main-detail"]').should('have.text', 'Light Grey (3220)')
    cy.get('[data-code="buttons"]').find('[class="main-detail"]').should('have.text', 'Brown & Light Brown (BOHA3-F)')

    // validate selected Size
    cy.get('[data-type="sizePassport"]').find('[class="body-medium"]').should('have.text', '48')

    // add to cart
    cy.get('[data-button-type="aux-end"]').click()

    // step 5 - Cart
    cy.url().should('include', 'cart')
  })
})