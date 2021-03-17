import { Selector, t} from 'testcafe'

class InventoryPage{
    constructor(){
        this.shopcart = Selector('.shopping_cart_link.fa-layers') //going to the shopping cart
        this.selectitems = Selector('.btn_primary.btn_inventory') //Add Items in inventory to shopping cart
        this.menuselect = Selector('#react-burger-menu-btn')//to open the menu
        this.logoutButton = Selector('#logout_sidebar_link')
    }
}

export default new InventoryPage()