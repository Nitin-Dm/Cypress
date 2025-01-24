import { API_URL } from "./constants";
//making class to use it to call function in other file
class testapi{
    //making function that calls api
    callapi(){
        console.log("Here"); 
         cy.request(API_URL); //cypress way of communicating with api
    }
    //validating API status
    validateapi(){
        //calling function to call url
        this.callapi();
        cy.request('GET', API_URL+'/status').its('body').should('deep.equal', { status: 'OK' } );
        return cy.request('GET', API_URL+'/status')
       

    }

    logdata(){
        this.validateapi()
       .then((response)=>{
            cy.log(JSON.stringify(response.body))
            // cy.log("hello")
        })

    }

}

export default new testapi;