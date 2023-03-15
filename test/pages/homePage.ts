import actions from "../utils/actions"
import itemsPage from "./itemsPage"
import orderPage from "./orderPage"

export let totalAmount;
export let expectedTotalAmount;

class HomePage {

    public get enterTheStore() {
        return $('//a[.="Enter the Store"]')
    }

    public get signInButton() {
        return $('//a[.="Sign In"]')
    }

    public get username() {
        return $('[name="username"]')
    }

    public get password() {
        return $('[name="password"]')
    }

    public get loginButton() {
        return $('[name="signon"]')
    }

    public get signOutButton() {
        return $('//a[.="Sign Out"]')
    }

    public get myAccountButton() {
        return $('//*[.="My Account"]')
    }

    public get failMessage() {
        return $('.messages')
    }

    public get fishPageLink() {
        return $('//descendant::*[@id="SidebarContent"]/a[1]')
    }

    public get dogsPageLink() {
        return $('//descendant::*[@id="SidebarContent"]/a[2]')
    }

    public get catsPageLink() {
        return $('//descendant::*[@id="SidebarContent"]/a[3]')
    }

    public get reptilesPageLink() {
        return $('//descendant::*[@id="SidebarContent"]/a[4]')
    }

    public get birdsPageLink() {
        return $('//descendant::*[@id="SidebarContent"]/a[5]')
    }

    public get returnToMainMenuLink() {
        return $('#BackLink')
    }

    async goToLoginPage() {
        await browser.url(`${process.env.BASE_URL}`)
        await actions.clickOn(this.enterTheStore)
        await actions.clickOn(this.signInButton)
    }

    async fillLoginForm(username: string, password: string) {
        await actions.typeIn(this.username, username)
        await actions.typeIn(this.password, password)
        await actions.clickOn(this.loginButton)
    }

    async completeCheckout() {
        await actions.clickOn(this.fishPageLink)
        await actions.clickOn(itemsPage.itemAngelfish)
        await actions.clickOn(itemsPage.addToCartItemLargeAngelfish)
        await actions.typeIn(itemsPage.quantityOfAngelFish, 1)
        await actions.clickOn(itemsPage.updateCart)
        await actions.clickOn(itemsPage.proceedToCheckout)
        await orderPage.newOrderForm()
        await actions.clickOn(orderPage.continue)
        await actions.clickOn(orderPage.confirm)
    }

    async orderTenLargeAngelfish() {
        await actions.clickOn(this.fishPageLink)
        await actions.clickOn(itemsPage.itemAngelfish)
        await actions.clickOn(itemsPage.addToCartItemLargeAngelfish)
        await actions.typeIn(itemsPage.quantityOfAngelFish, 10)
        await actions.clickOn(itemsPage.updateCart)

        const textPrice = await itemsPage.priceOfAngelFish.getText()
        const largeAngelFishPrice = parseFloat(textPrice.replace("$", ""))
        totalAmount = (largeAngelFishPrice * 10).toFixed(2)
    }

    async expectedTotalAmount() {
        const expectedTotalAmountText = await itemsPage.totalPrice.getText()
        expectedTotalAmount = (parseFloat(expectedTotalAmountText.replace("Sub Total: $", ""))).toFixed(2)
        expect(expectedTotalAmount).toEqual(totalAmount)
    }

    async orderThreeItems() {
        await actions.clickOn(this.fishPageLink)
        await actions.clickOn(itemsPage.itemAngelfish)
        await actions.clickOn(itemsPage.addToCartItemLargeAngelfish)
        const textLargeAngelFishPrice = await itemsPage.priceOfAngelFish.getText()
        const largeAngelFishPrice = parseFloat(textLargeAngelFishPrice.replace("$", ""))
        await actions.clickOn(this.returnToMainMenuLink)

        await actions.clickOn(this.dogsPageLink)
        await actions.clickOn(itemsPage.itemBulldog)
        await actions.clickOn(itemsPage.addToCartMaleAdultBulldog)
        const textMaleAdultBulldog = await itemsPage.priceOfMaleAdultBulldog.getText()
        const maleAdultBulldogPrice = parseFloat(textMaleAdultBulldog.replace("$", ""))
        await actions.clickOn(this.returnToMainMenuLink)

        await actions.clickOn(this.birdsPageLink)
        await actions.clickOn(itemsPage.itemFinch)
        await actions.clickOn(itemsPage.addToCartAdultMaleFinch)
        const textAdultMaleFinch = await itemsPage.priceOfAdultMaleFinch.getText()
        const adultMaleFinchPrice = parseFloat(textAdultMaleFinch.replace("$", ""))
        totalAmount = (largeAngelFishPrice + maleAdultBulldogPrice + adultMaleFinchPrice).toFixed(2)
    }

    async removeOneItemFromShoppingCart() {
        await this.orderThreeItems()

        const textAdultMaleFinch = await itemsPage.priceOfAdultMaleFinch.getText()
        const adultMaleFinchPrice = parseFloat(textAdultMaleFinch.replace("$", ""))
        
        await actions.clickOn(itemsPage.removeAdultMaleFinch);
        totalAmount = (totalAmount - adultMaleFinchPrice).toFixed(2)
    }
}
export default new HomePage()