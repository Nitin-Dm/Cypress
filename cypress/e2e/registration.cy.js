import RegistrationPage from '../support/registration';
import { BASE_URL } from '../support/constants';
import users from '../fixtures/user.json';


//making a test suite
describe('validating if we can register multiple users', () => {
  //making a testcase
  it('Registers multiple users', () => {
    //navigating to website
    cy.visit(BASE_URL); // Use the constant for the URL
    //looping through user in user.json fixture file
    users.forEach((user) => {
      RegistrationPage.navigateToRegistration(); //calling function
      RegistrationPage.fillRegistrationForm(user); //calling function
      RegistrationPage.submitForm(); //calling function
      RegistrationPage.validateRegistration(); //calling function
      RegistrationPage.logout(); //calling function
    });
  });
});
