/// <reference types="cypress"/>
export class EventDetailPage {

    book_Event_from_EventDetail(){
        cy.xpath("//a[.='Book Class']").click()
    }

    cancel_Event_from_EventDetail(){
        cy.xpath("//a[.='Cancel Event']").click()
    }

    confirm_Cancelation_from_EventDetail(){
        cy.get('.btn-success').click()
    }

    select_Back_To_Schedule(){
        cy.get('.back-button > a').click()
    }


}
