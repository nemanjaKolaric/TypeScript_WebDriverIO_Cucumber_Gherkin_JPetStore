import actions from "../utils/actions"

class ItemsPage {

    get itemAngelfish() {
        return $('//*[.="Angelfish"]/preceding-sibling::td/a')
    }

    get addToCartItemLargeAngelfish() {
        return $('//*[normalize-space(text())="Large Angelfish"]/following-sibling::td[2]')
    }

    get quantityOfAngelFish() {
        return $('//*[normalize-space(text())="Large Angelfish"]/following-sibling::td[2]/input')
    }

    get priceOfAngelFish() {
        return $('//*[normalize-space(text())="Large Angelfish"]/following-sibling::td[3]')
    }

    get totalPrice() {
        return $('//*[@value="Update Cart"]/parent::td')
    }

    get updateCart() {
        return $('[name="updateCartQuantities"]')
    }

    public get proceedToCheckout() {
        return $('a.Button:nth-child(3)')
    }

    get itemBulldog() {
        return $('//*[.="Bulldog"]/preceding-sibling::td/a')
    }

    get addToCartMaleAdultBulldog() {
        return $('//*[normalize-space(text())="Male Adult Bulldog"]/following-sibling::td[2]')
    }

    get itemFinch() {
        return $('//*[.="Finch"]/preceding-sibling::td/a')
    }

    get addToCartAdultMaleFinch() {
        return $('//*[normalize-space(text())="Adult Male Finch"]/following-sibling::td[2]')
    }

    get priceOfMaleAdultBulldog() {
        return $('//*[normalize-space(text())="Male Adult Bulldog"]/following-sibling::td[3]')
    }

    get priceOfAdultMaleFinch() {
        return $('//*[normalize-space(text())="Adult Male Finch"]/following-sibling::td[3]')
    }

    get removeAdultMaleFinch() {
        return $('//*[normalize-space(text())="Adult Male Finch"]/following-sibling::td[5]')
    }
}
export default new ItemsPage()