import FirstLoginPage from '../pages/FirstLoginPage'
import InventoryPage from '../pages/InventoryPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Navigate the shopCart')
.page `https://www.saucedemo.com/inventory.html`

test('Navigate the shopCart', async t =>{
    await FirstLoginPage.LoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)

    await t .wait(500)
            .click(InventoryPage.shopcart)
            .wait(1000)
        
})