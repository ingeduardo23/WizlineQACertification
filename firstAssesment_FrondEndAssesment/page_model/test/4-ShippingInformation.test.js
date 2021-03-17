import FirstLoginPage from '../pages/FirstLoginPage'
import InventoryPage from '../pages/InventoryPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import CheckoutOnePage from '../pages/CheckoutOnePage'
import CheckoutTwoPage from '../pages/CheckoutTwoPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Missing Mail Information / Complete Mail information')
.page `https://www.saucedemo.com/cart.html`



test('Continue with Missing Mail Information', async t =>{
    await FirstLoginPage.LoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
   
    await t
        .click(InventoryPage.selectitems)
        .wait(300)
        .click(InventoryPage.selectitems)
        .wait(300)
        .click(InventoryPage.shopcart)
        .wait(700)
        .click(ShoppingCartPage.checkoutbutton)
        .wait(300)
        .typeText(CheckoutOnePage.firstname,CREDENTIALS.SHIPPINGUSER.FNAME,{paste:true})
        .typeText(CheckoutOnePage.lastname,CREDENTIALS.SHIPPINGUSER.LNAME,{paste:true})
        .wait(300)
        .click(CheckoutOnePage.continuebutton)

    await t.expect(CheckoutOnePage.errormessage.exists).ok()
    await t.expect(CheckoutOnePage.errormessage.innerText).contains('')
          .wait(700)
        
})

test('Continue with the complete Mail Information', async t =>{
    await FirstLoginPage.LoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    
    await t
        .click(InventoryPage.selectitems)
        .wait(300)
        .click(InventoryPage.selectitems)
        .wait(300)
        .click(InventoryPage.shopcart)
        .wait(700)
        .click(ShoppingCartPage.checkoutbutton)
        .wait(300)
        .typeText(CheckoutOnePage.firstname,CREDENTIALS.SHIPPINGUSER.FNAME,{paste:true})
        .typeText(CheckoutOnePage.lastname,CREDENTIALS.SHIPPINGUSER.LNAME,{paste:true})
        .typeText(CheckoutOnePage.zipcode, CREDENTIALS.SHIPPINGUSER.ZCODE,{paste:true})
        .click(CheckoutOnePage.continuebutton)
        .wait(500)
})