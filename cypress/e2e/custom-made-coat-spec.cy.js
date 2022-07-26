/// <reference types="Cypress" />

import { MainPage } from './page-objects/main-page.js'
import { CustomMadePage } from './page-objects/custom-made-page.js'
import { CoatConfiguratorPage } from './page-objects/coat-configurator-page.js'
import { SummaryPage } from './page-objects/summary-page.js'

describe('Custom Made Configurator', () => {

  const mainPage = new MainPage()
  const customMadePage = new CustomMadePage()
  const coatConfiguratorPage = new CoatConfiguratorPage()
  const summaryPage = new SummaryPage()

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
    coatConfiguratorPage.validateSection('FabricSection')
    coatConfiguratorPage.selectFabricByFilter('Fall/Winter', 'Wool Alpaca Polyamide', 'Blue Herringbone Wool Alpaca Polyamide')
    mainPage.clickButtonByName('Next')

    // step 2 - Style
    coatConfiguratorPage.validateSection('CoatSection')
    coatConfiguratorPage.selectStyle('Fit', 'Bleecker')
    coatConfiguratorPage.selectStyle('Lining', 'Light Grey (3220)')
    coatConfiguratorPage.selectStyle('Buttons', 'Brown & Light Brown (BOHA3-F)')
    mainPage.clickButtonByName('Next')

    // step 3 - Size
    coatConfiguratorPage.validateSection('SizeSection')
    coatConfiguratorPage.selectSize('48')

    // step 4 - Summary
    coatConfiguratorPage.validateSection('SummarySection')

    // validate selected Fabric
    summaryPage.validateSelectedFabric('Blue Herringbone Wool Alpaca Polyamide')

    // validate selected Style
    summaryPage.validateSelectedStyle('fit', 'Bleecker')
    summaryPage.validateSelectedStyle('sidePocket', 'Flap')
    summaryPage.validateSelectedStyle('waistline', 'No Belt')
    summaryPage.validateSelectedStyle('length', 'Thigh Length (Standard)')
    summaryPage.validateSelectedStyle('lining', 'Light Grey (3220)')
    summaryPage.validateSelectedStyle('buttons', 'Brown & Light Brown (BOHA3-F)')

    // validate selected Size
    summaryPage.validateSelectedSize('48')

    // add to cart
    cy.get('[data-button-type="aux-end"]').click()

    // step 5 - Cart
    cy.url().should('include', 'cart')
  })
})