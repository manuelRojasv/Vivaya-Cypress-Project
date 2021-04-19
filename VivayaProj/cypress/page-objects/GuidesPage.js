/// <reference types="cypress"/>
export class GuidesPage {

    select_Guide_Tab(){

        cy.get('#mainNav > :nth-child(3) > a').click()
    }

    select_Guide_Tab_when_Login(){
        cy.get('#mainNav > :nth-child(2) > a').click()
    }

    select_Guide_Tab_when_Logout(){
        cy.get('#mainNav > :nth-child(3) > a').click()
    }

    perform_a_Search(guideName){
        
        cy.get('#guidesearch-q').type(guideName)
        cy.get('.col-lg-4 > .btn').click()
    }

}