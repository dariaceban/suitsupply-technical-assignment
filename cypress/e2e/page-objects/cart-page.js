import { MainPage } from "./main-page.js";

export class CartPage {
    constructor() {
        this.mainPage = new MainPage();
    }

    addToCart() {
        cy.get('[data-button-type="aux-end"]').click()
    }
}