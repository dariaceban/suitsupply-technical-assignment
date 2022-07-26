import { MainPage } from "./main-page.js";

export class CustomMadePage {
    constructor() {
        this.mainPage = new MainPage();
    }

    navigateToCoatConfiguratorPage() {
        cy.contains('Start designing').click()
        cy.get('[data-promo-id="page-journal-custom_made-fastest_tailors-cm_coat"]').click()
        this.mainPage.validateUrl('product=Coat')
        cy
            .get('[class="close border-solid body-small size-small shape-round icon-only background-light hydrated"]')
            .click() // improve this locator
    }
}