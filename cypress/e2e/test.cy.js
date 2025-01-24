describe("First Test on cypress", ()=>{
    it('Test 1', ()=>{
      cy.visit('https://www.saucedemo.com/v1/')
      cy.get('#user-name').should('be.visible').click() //hello world
      .type('standard_user')
      cy.get('#password').should('be.visible').click()
      .type('secret_sauce')
      cy.xpath("//input[contains(@id, 'login-button')]").should('be.visible').click()
      for (let index = 0; index < 5; index++) {
        cy.get('.btn_inventory').eq(index).click()
      }
    })
  })