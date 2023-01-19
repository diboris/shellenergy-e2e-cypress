import faker from 'faker'

describe('In-life', () => {

    beforeEach(() => {
        cy.visit('https://account.shellenergy.nl/s/login/')
    })

    it('Only registered user can login to his account', () => {
        const email = faker.internet.email()
        const password = faker.internet.password()

        cy.xpath('//*[@name="email"]').type(email)
        cy.xpath('//*[@name="password"]').type(password)
        cy.xpath('//*[@type="submit"]').click()
        cy.xpath('//*[@id="help-message-8"]').invoke('text')
            .should('eq', 'Oeps, dit klopt niet!')
    })
})
