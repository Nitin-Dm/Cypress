import LoginPage from '../support/loginpage';
import { BASE_URL } from '../support/constants';
import users from '../fixtures/user.json';

describe('Login Tests', () => {
  it('Logs in with registered users', () => {
    cy.visit(BASE_URL); // Use the constant for the URL
    users.forEach((user) => {
      LoginPage.performLogin(user); // Pass the user and their index
      LoginPage.logout();
    });
  });
});
