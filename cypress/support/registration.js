class RegistrationPage {
    navigateToRegistration() {
      cy.get('#loginPanel > :nth-child(3) > a').click();
    }
    //making a function to fill all fields
    fillRegistrationForm(user) {
      cy.get('#customer\\.firstName').type(user.firstname);
      cy.get('#customer\\.lastName').type(user.lastname);
      cy.get('#customer\\.address\\.street').type(user.address);
      cy.get('#customer\\.address\\.city').type(user.city);
      cy.get('#customer\\.address\\.state').type(user.state);
      cy.get('#customer\\.address\\.zipCode').type(user.zipcode);
      cy.get('#customer\\.phoneNumber').type(user.phone);
      cy.get('#customer\\.ssn').type(user.ssn);
  
      //generate a unique username
      cy.generateUniqueUsername(user.username, 0).then((uniqueUsername) => {
        cy.get('#customer\\.username').type(uniqueUsername); // Pass the generated username
      });
  
      cy.get('#customer\\.password').type(user.password);
      cy.get('#repeatedPassword').type(user.password);
    }
    //making a function that completes registration by clicking submit button
    submitForm() {
      cy.get("input[value='Register']").click();
    }
    //making a function that validates successfull message when account is made
    validateRegistration() {
      cy.contains('Your account was created successfully. You are now logged in.').should('be.visible');
    }
    //making a funtion that clicks on logout button after successfull login
    logout() {
      cy.get("a[href*='logout.htm']").click();
    }
  }
  //export the class to use it in anyother page
  export default new RegistrationPage();
  