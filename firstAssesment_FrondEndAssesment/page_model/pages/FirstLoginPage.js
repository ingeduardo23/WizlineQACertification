import { Selector, t } from 'testcafe'

class FirstLoginPage {
    constructor(){
        this.unameField = Selector('input[name="user-name"]')
        this.pswordField = Selector('input[name="password"]')
        this.loginButton = Selector('#login-button')
        this.errorBox = Selector('.error-button')
        
    }

    async LoginForm(username, password){
        await t.typeText(this.unameField, username,{paste:true})
        await t.typeText(this.pswordField, password,{paste:true})
        await t.click(this.loginButton)

    }
}

export default new FirstLoginPage()