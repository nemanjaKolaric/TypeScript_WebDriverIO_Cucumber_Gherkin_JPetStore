import actions from "../utils/actions"

class ItemsPage {

    public get itemAngelfish() {
        return $('//*[.="Angelfish"]/preceding-sibling::td/a')
    }

    public get addToCartItemLargeAngelfish() {
        return $('//*[normalize-space(text())="Large Angelfish"]/following-sibling::td[2]')
    }

    public get quantityOfAngelFish() {
        return $('//*[normalize-space(text())="Large Angelfish"]/following-sibling::td[2]/input')
    }

    public get priceOfAngelFish() {
        return $('//*[normalize-space(text())="Large Angelfish"]/following-sibling::td[3]')
    }

    public get totalPrice() {
        return $('//*[@value="Update Cart"]/parent::td')
    }

    public get updateCart() {
        return $('[name="updateCartQuantities"]')
    }

    public get proceedToCheckout() {
        return $('a.Button:nth-child(3)')
    }

    public get itemBulldog() {
        return $('//*[.="Bulldog"]/preceding-sibling::td/a')
    }

    public get addToCartMaleAdultBulldog() {
        return $('//*[normalize-space(text())="Male Adult Bulldog"]/following-sibling::td[2]')
    }

    public get itemFinch() {
        return $('//*[.="Finch"]/preceding-sibling::td/a')
    }

    public get addToCartAdultMaleFinch() {
        return $('//*[normalize-space(text())="Adult Male Finch"]/following-sibling::td[2]')
    }

    public get priceOfMaleAdultBulldog() {
        return $('//*[normalize-space(text())="Male Adult Bulldog"]/following-sibling::td[3]')
    }

    public get priceOfAdultMaleFinch() {
        return $('//*[normalize-space(text())="Adult Male Finch"]/following-sibling::td[3]')
    }

    public get removeAdultMaleFinch() {
        return $('//*[normalize-space(text())="Adult Male Finch"]/following-sibling::td[5]')
    }

    public get returnToMainMenuLink(){
        return $('#BackLink')
    }

    async searchedContent(content) {
        return $('//*[.="' + content + '"]')
    }
}
export default new ItemsPage()