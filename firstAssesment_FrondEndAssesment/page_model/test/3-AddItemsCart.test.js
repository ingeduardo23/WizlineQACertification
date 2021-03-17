import FirstLoginPage from '../pages/FirstLoginPage'
import InventoryPage from '../pages/InventoryPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Add single Item and Multiple Items')
.page `https://www.saucedemo.com/cart.html`

test('Add a Single item in the Shopping Cart', async t =>{
    await FirstLoginPage.LoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    await t
        .click(InventoryPage.selectitems)
        .wait(500)
        .click(InventoryPage.shopcart)
        .wait(500)
        //.click(ShoppingCartPage.shopitems)
        //.wait(500)
        
})

test('Add multiple Items in the Shopping Cart', async t =>{
    await FirstLoginPage.LoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)

    await t
        .click(InventoryPage.selectitems)
        .wait(700)
        .click(InventoryPage.selectitems)
        .wait(700)
        .click(InventoryPage.selectitems)
        .wait(700)
        .click(InventoryPage.shopcart)
        .wait(1500)
        
})