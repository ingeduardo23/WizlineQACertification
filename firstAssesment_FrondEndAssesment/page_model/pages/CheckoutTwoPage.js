import { Selector } from 'testcafe'

class CheckoutTwoPage{
    constructor(){
        this.completeorder = Selector('.btn_action.cart_button')
        this.cancelorder = Selector('.cart_cancel_link')
    }
}

export default new CheckoutTwoPage()