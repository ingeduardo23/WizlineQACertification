import { Selector } from 'testcafe'

class CheckoutOnePage{
    constructor(){
        this.firstname = Selector('#first-name')
        this.lastname = Selector('#last-name')
        this.zipcode = Selector('#postal-code')
        this.errormessage = Selector('.error-button')
        this.continuebutton = Selector('.cart_button')
    }
}

export default new CheckoutOnePage()