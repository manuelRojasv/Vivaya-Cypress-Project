/// <reference types="cypress"/>
export class HomePage {

    go_Home(){
        cy.get('.brand').click()
    }

    select_Login(){
        const login = cy.get('.login-link').click()
        return this
    }

    fill_Email(value){
        
        const typing = cy.get('#loginform-email').type(value)
        return this
    }

    fill_Password(value){

        const typing = cy.get('#loginform-password').type(value)
        return this

    
    }

    submit_Credentials(){
        cy.get('.form-group.text-center > .btn').click()
        return this
    }

    logout_Account(){
        cy.get('.uname').click({ force: true })
        cy.get('.logout').click({ force: true })
    }

    select_Guide_from_Home(){
        cy.xpath("//div[@class='homepage-guides']//a[@href='/guides/1598']/p[@class='name']").click()
    }

    select_First_Event_Upcoming_Section(){
        cy.get('#w0 > div > div > div.event-list-item.vertical-align.slick-slide.slick-current.slick-active > div.det-item.i-action').click()
        
    }

    join_Event_From_Home(){
        cy.get('.join-event').click()
    }

}