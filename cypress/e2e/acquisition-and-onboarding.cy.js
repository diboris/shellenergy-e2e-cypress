import faker from 'faker'

describe('Acquisition and on-boarding', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('A user can request only energy when onboarding', () => {
        const kWh = faker.datatype.number({'min': 999, 'max': 9999})
        const houseAddress1 = {postal: '3011MH', house: '70'}
        const houseAddress2 = {postal: '2215PR', house: '23'}

        const houseNumber = faker.random.arrayElement([houseAddress1, houseAddress2])

        cy.intercept({
            method: 'GET',
            url: '/front/v1/addresses?zip=' + houseNumber.postal + '&house=' + houseNumber.house
        }).as('addresses')

        cy.get('#postalCode').type(houseNumber.postal)
        cy.get('#houseNumber').type(houseNumber.house)

        cy.wait('@addresses')

        cy.get('body').then(body => {
            // gas toggle existence depends on postal code
            const gasSelector = 'input[name="hasGas"]'
            if (body.find(gasSelector).length > 0) {
                cy.get(gasSelector).parent('label').click()
                cy.get('input[id="gas"]').should('not.exist')
            }
        })

        cy.get('#electricityOnPeak').type(kWh)
        cy.get('#electricityOffPeak').type(kWh)

        cy.get('button[type="submit"]').click()

        cy.get('h3[data-offer-type="true"]')
            .should('contain', 'Variabel contract')
            .and('have.length', 1)
    })
})
