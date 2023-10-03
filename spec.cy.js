import Login from "../PageObjects/HRMS_Login"
describe('Orange HRMS Test', () => {

  //before(function(){

    //cy.fixture('example').then(function(data){
      //this.data=data
    //})

  //})
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.fixture('example').then( (data)=>{

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type(data.username).wait(6000)    
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password).wait(6000)          
    cy.get('.oxd-button').should('be.visible').click().wait(6000)
    cy.get(':nth-child(6) > .oxd-main-menu-item').should('be.visible').click().wait(3000)
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click({position: 'center'}).clear().type('1995-04-05').wait(3000)
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').should('be.visible').click({force:true}).wait(3000)
    cy.get('.oxd-userdropdown-tab > .oxd-icon').should('be.visible').click().wait(3000)
    cy.get(':nth-child(4) > .oxd-userdropdown-link').should('be.visible').click().wait(3000)
   })
})
it.only('HRMS', () =>  {

  cy.visit('https://opensource-demo.orangehrmlive.com/')
  cy.fixture('example').then( (data)=>{
  const ln=new Login();
  ln.EnterUsername(data.username) // Useraname
  ln.EnterPassword(data.password) // Password
  ln.ClickSignin();               // Sign in
  ln.ClickMyInfo();               // My Info menu
  ln.EnterDOB(data.DOB)           // Date of Birth
  ln.ClickSaveBtn({force:true})   // Save 
  ln.ClickDropdown();
  ln.ClickLogoutBtn();            // Logout
})
})
})