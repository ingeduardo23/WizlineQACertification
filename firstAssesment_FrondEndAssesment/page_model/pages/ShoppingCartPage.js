import { Selector } from 'testcafe'

class ShoppingCartPage{
    constructor(){
        this.shopitems = Selector('.btn_secondary') //back to the Inventory
        this.checkoutbutton = Selector('.checkout_button') //To checkout the order.

    }
}

export default new ShoppingCartPage()