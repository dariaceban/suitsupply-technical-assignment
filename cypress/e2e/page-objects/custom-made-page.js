export class CustomMadePage {

    navigateToCoatConfiguratorPage() {
        cy.contains('Start designing').click()
        cy.get('[data-promo-id="page-journal-custom_made-fastest_tailors-cm_coat"]').click()
        cy.url().should('include', 'product=Coat')
        cy
            .get('[class="close border-solid body-small size-small shape-round icon-only background-light hydrated"]')
            .click() // improve this locator
    }
}