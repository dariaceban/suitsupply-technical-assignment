import { MainPage } from "./main-page.js";

export class SummaryPage {
    constructor() {
        this.mainPage = new MainPage();
    }

    validateSelectedFabric(fabric) {
        cy.get('[data-code="fabric"]').find('[class="name"]').should('have.text', `${fabric}`)
    }

    validateSelectedStyle(field, value) {
        cy.get(`[data-code="${field}"]`).find('[class="main-detail"]').should('have.text', `${value}`)
    }

    validateSelectedSize(size) {
        cy.get('[data-type="sizePassport"]').find('[class="body-medium"]').should('have.text', `${size}`)
    }
}