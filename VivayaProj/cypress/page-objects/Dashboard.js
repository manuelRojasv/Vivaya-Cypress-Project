///<reference types="cypress"/>

export class Dashboard{

    select_Edit_Event(){
        cy.xpath("//*[contains(text(), 'Edit Event')]").click()
    }

    go_to_Dashboard_From_Menu(){
        //cy.get('.uname').click()
        cy.get('#accountNav > ul > li > ul > li:nth-child(1) > a').click({ force: true })
    }

    press_Start_Event_Button(){
        const startEventButton = cy.get('#fbStart').click()
        return this
    }

    add_NewEvent(){
        const newEvent = cy.get(':nth-child(3) > .btn').click()
        return this

    }


    add_Workshop(){
        const selectWorkshop = cy.get('[href="/events/workshop/create"]').click()
        return this
    }

    add_One_One(){
        const selectOnetoOne = cy.get('[href="/events/1-on-1/create"]').click()
        return this
    }

    add_Class(){
        const selectClass = cy.get('[href="/events/class/create"]').click()
        return this
    }

    add_Seminar_Event(){
        const addSeminarEvent = cy.get('[href="/events/seminar/create"]').click()
        return this
    }

    close_NewEvent_Modal(){
        const closeNewEvent = cy.get('#modalHeader > .close').click()
        return this
    }

    cancel_Created_Event(){
        cy.get('.cancel-event').click()
        cy.get('.btn-success').click()

    }

    cancel_Several_Events_AtOnce(){
        cy.contains('Cancel Event').click({ multiple: true})
        //cy.get('.cancel-event').click({ multiple: true})
        cy.get('.btn-success').click()
        
    }

    cancel_Event_As_Seeker(){
        cy.get('p > .btn').click()
    }

    confirm_Cancelation_From_Dashboard(){
        cy.get('.btn-success').click()
    }

    //Guide Dashboard Elements

    select_UpcomingEvents(){
         
        cy.get(':nth-child(3) > :nth-child(1) > .btn').click()
    }

    select_One_One_Availability(){
        cy.get(':nth-child(2) > .btn').click()
    }

    select_Add_Seminar(){
        cy.get(':nth-child(4) > .btn').click()
    }

    select_View_FullClass_History(){
        cy.get('.quick-links > :nth-child(2) > :nth-child(1) > a').click()
    }

    select_View_Public_Profile(){
        cy.get('.quick-links > :nth-child(3) > :nth-child(1) > a').click()
    }

    select_Contact_Vivaya(){
        cy.get('.quick-links > :nth-child(4) > :nth-child(1) > a').click()
    }

    select_Write_Blog(){
        cy.get('.quick-links > :nth-child(2) > :nth-child(2) > a').click()
    }

    select_Edit_My_Offerings(){
        cy.get('.quick-links > :nth-child(3) > :nth-child(2) > a').click()
    }

    select_Update_LInsurance(){
        cy.get('.quick-links > :nth-child(4) > :nth-child(2) > a').click()
    }

    select_Edit_Password(){
        cy.get('.quick-links > :nth-child(3) > :nth-child(3) > a').click()
    }

    select_Edit_Contact_Info(){
        cy.get('.quick-links > :nth-child(4) > :nth-child(3) > a').click()
    }

    select_Edit_Profile_Left_Section(){
        cy.get('.profile-box > [href="/account"]').click()
    }

    select_Public_Profile_Left_Section(){
        cy.get('.public-profile-link').click()
    }

    select_Seeker_Account_Left_Section(){
        cy.get('[href="/signup/add-seeker-account-from-guide"]').click()
    }

    //Seeker Dashboard Elements

    select_Book_More(){
        cy.get('.col-sm-4 > .btn').click()
    }

    select_Shopping_Cart(){
        cy.get('.quick-links > :nth-child(3) > :nth-child(1) > a').click()
    }

    selec_Membership_Cancellation(){
        cy.get('.cancel-payment').click()
    }

    select_My_Password(){
        cy.get('.quick-links > :nth-child(2) > :nth-child(2) > a').click()
    }

    select_Contact_Vivaya_Seeker(){
        cy.get('.quick-links > :nth-child(3) > :nth-child(2) > a').click()
    }

    select_My_Account_Seeker(){
        cy.get('.quick-links > :nth-child(2) > :nth-child(3) > a').click()
    }

    select_Payment_Info(){
        cy.get(':nth-child(3) > :nth-child(3) > a').click()
    }

    select_Edit_Profile_Left_Section_Seeker(){
        cy.get('.profile-box > .btn').click()
    
    }

    select_My_Referral(){
        cy.get('#referral-status-link').click()
    }

    select_My_Referral_From_Menu(){
        cy.get('#modal-btn-referral').click({force:true})
    }


}