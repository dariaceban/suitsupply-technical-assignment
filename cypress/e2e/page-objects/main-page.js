export class MainPage {
    navigateToMainPage() {
        cy.viewport('macbook-16')
        cy.visit('/')
    }

    acceptCookies() {
        cy.contains('I Agree').click()
        cy.get('[class="btn-close cookies__close-btn js-decline-country-change"]').click()
    }

    navigateToCustomMadePage() {
        cy
            .get('[class="hero-display-subtitle-design cm-link"]')
            .eq(1)
            .scrollIntoView()
            .should('be.visible')
            .click()
        cy.url().should('include', 'custom-made.html')
    }
}