import FirstLoginPage from '../pages/FirstLoginPage'
import InventoryPage from '../pages/InventoryPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import CheckoutOnePage from '../pages/CheckoutOnePage'
import CheckoutTwoPage from '../pages/CheckoutTwoPage'
import { CREDENTIALS } from '../data/Constants'
import { Role } from '../data/Roles'

fixture('Login to the first page testing / Logout')
    .page `https://www.saucedemo.com`
  

test('Login with a valid user', async t =>{
    await FirstLoginPage.LoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.wait(1500)
               
})

test('Login with a invalid user', async t =>{
    await FirstLoginPage.LoginForm(CREDENTIALS.PROBLEM_USER.PASSWORD, CREDENTIALS.PROBLEM_USER.PASSWORD)
    
    await t.expect(FirstLoginPage.errorBox.exists).ok()
    await t.expect(FirstLoginPage.errorBox.innerText).contains('')
          .wait(100)
})

test('Logout from product page', async t =>{
    await FirstLoginPage.LoginForm(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    await t
            .click(InventoryPage.menuselect)
            .wait(1500)
            .click(InventoryPage.logoutButton)
            .wait(1500)
})