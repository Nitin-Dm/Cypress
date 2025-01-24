// describe("Testing API", () => {
//     it('validate API status', () => {
//         cy.request('GET', 'https://simple-books-api.glitch.me/status')
//             .its('body').should('deep.equal', { status: 'OK' })
//     })
//     it('Fetches a list of books', () => {
//         cy.request('GET', 'https://simple-books-api.glitch.me/books').then((response) => {
//             expect(response.status).to.eq(200);
//             expect(response.body).to.be.an('array');
//             expect(response.body[0]).to.have.property('id');
//             expect(response.body[0]).to.have.property('name');
//         });
//     });
//     it('log the data in console',()=>{
//         cy.request('GET','https://simple-books-api.glitch.me/status').then((response)=>{
//             cy.log(JSON.stringify(response.body))
            
//         })
//     })
// })

import testapi from '../support/api'

describe("Testing API",()=>{
 it('calling API',()=>{
    testapi.callapi();
 })
 it('validating API',()=>{
    testapi.validateapi();
 })
 it('logging the data in console', ()=>{
    testapi.logdata();
 })

   });