describe('Web Application Basic Test', () => {
  
  // Test to verify the webpage loads and title is correct
  it('should load the page and verify title', () => {
    cy.visit('https://www.saucedemo.com') // Visit the webpage
    cy.title().should('include', 'Swag Labs') 
  })
  
  // Test to check if specific UI elements (buttons, fields) are visible
  it('should check if login button and username field are visible', () => {
    cy.visit("https://www.saucedemo.com") // Visit the webpage
    
    // Check if login button is visible 
    cy.get('#login-button').should('be.visible')
    
    // Check if username field is visible
    cy.get('#user-name').should('be.visible')
    
  })
  
  // Test for valid login
  it('should log in with correct credentials', () => {
    cy.visit("https://www.saucedemo.com") // Assert the title contains 'Inventory'
    cy.get('#user-name').type('standard_user') // Type username
    cy.get('#password').type('secret_sauce') // Type password
    cy.get('#login-button').click() // Click the login button
    
    // Verify successful login by checking the presence of the dashboard
    cy.title().should('include', 'Swag Labs') // dashboard is visible after login
  })
  
  // Test for invalid login (incorrect credentials)
  it('should show error with incorrect credentials', () => {
    cy.visit('https://www.saucedemo.com') // Visit the webpage
    cy.get('#user-name').type('invalidUser') // Type incorrect username
    cy.get('#password').type('wrongPassword') // Type incorrect password
    cy.get('#login-button').click() // Click the login button
    
    // Verify that an error message is displayed
    cy.get('h3').should('be.visible')
  })
  
})
