Cypress.on('uncaught:exception', (err, runnable, promise) => {
    if (promise) {
        return false
    }
})