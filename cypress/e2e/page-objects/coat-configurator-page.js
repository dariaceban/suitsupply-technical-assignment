import { MainPage } from "./main-page.js";

export class CoatConfiguratorPage {
    constructor() {
        this.mainPage = new MainPage();
    }

    validateSection(sectionName) {
        cy.get(`[data-code="${sectionName}"]`).should('have.class', 'active-nav visited')
    }

    selectFabricByFilter(season, material, fabric) {
        cy.contains('Filter').click()
        cy.get(`[data-node-name="${season}"]`).check({ force: true })
        cy.get(`[data-node-name="${material}"]`).check({ force: true })
        cy.wait(2000)
        cy.contains(`${fabric}`).click()
    }

    selectStyle(field, value) {
        cy.get(`[aria-label="${field}"]`).click()
        cy.contains(`${value}`).click()
        this.mainPage.clickButtonByName('Apply')
    }

    selectSize(size) {
        this.mainPage.clickButtonByName('Get started')
        cy.get('[aria-label="Select size"]').click() // Select Size "dropdown"
        this.mainPage.clickButtonByName(size)
        cy
            .get('[class="main-btn"]')
            .find('[aria-label="Select size"]')
            .click({ force: true }) //  Select Size button

        cy.wait(2000)
        cy
            .get('[aria-label="Save & Continue"]')
            .click({ force: true }) //  Save & Continue button
        this.mainPage.clickButtonByName('Apply')
    }
}