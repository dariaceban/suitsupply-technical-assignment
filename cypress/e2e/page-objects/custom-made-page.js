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
            .get('[class="ss-tooltip"]')
            .find('[class="button"]')
            .click()
    }
}