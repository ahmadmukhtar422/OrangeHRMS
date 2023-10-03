class Login
{
    LocateUsername = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    LocatePassword = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    LocateSignin = 'button'
    LocateMyInfo = ':nth-child(6) > .oxd-main-menu-item'
    LocateDOB =    ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'
    LocateSaveBtn = ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button'
    LocateDropdown = '.oxd-userdropdown-tab > .oxd-icon'
    LocateLogoutBtn = ':nth-child(4) > .oxd-userdropdown-link'

  EnterUsername(username){
    cy.get(this.LocateUsername).type(username).should('be.visible')
    cy.wait(6000)
  }
  EnterPassword(password){
    cy.get(this.LocatePassword).type(password).should('be.visible')
    cy.wait(6000)
  }
  ClickSignin(){
    cy.get(this.LocateSignin).click().should('be.visible')
    cy.wait(6000)
  }
  ClickMyInfo(){
    cy.get(this.LocateMyInfo).click().should('be.visible')
    cy.wait(6000)
  }
  EnterDOB(dob){
    cy.get(this.LocateDOB).type(dob).should('be.visible')
    cy.wait(6000)
  }
  ClickSaveBtn(){
    cy.get(this.LocateSaveBtn).click().should('be.visible')
    cy.wait(6000)
  }
  ClickDropdown(){
    cy.get(this.LocateDropdown).click().should('be.visible')
    cy.wait(6000)
  }
  ClickLogoutBtn(){
    cy.get(this.LocateLogoutBtn).click().should('be.visible')
    cy.wait(6000)
  }
}
export default Login
