import { fakeData } from "../test-data/fakeData"
import actions from "../utils/actions"

class OrderPage {

    public get cardType() {
        return $('[name="order.cardType"]')
    }

    public get creditNumber() {
        return $('[name="order.creditCard"]')
    }

    public get expiryDate() {
        return $('[name="order.expiryDate"]')
    }

    public get firstName() {
        return $('[name="order.billToFirstName"]')
    }

    public get lastName() {
        return $('[name="order.billToLastName"]')
    }

    public get adress1() {
        return $('[name="order.billAddress1"]')
    }

    public get adress2() {
        return $('[name="order.billAddress2"]')
    }

    public get city() {
        return $('[name="order.billCity"]')
    }

    public get state() {
        return $('[name="order.billState"]')
    }

    public get zipCode() {
        return $('[name="order.billZip"]')
    }

    public get country() {
        return $('[name="order.billCountry"]')
    }

    public get continue() {
        return $('[name="newOrder"]')
    }

    public get confirm() {
        return $('.Button')
    }

    public get confirmOrder() {
        return $('//li[.="Thank you, your order has been submitted."]')
    }

    async newOrderForm() {
        await actions.clickOn(this.cardType)
        await browser.keys("\uE015, \uE007")
        await actions.typeIn(this.creditNumber, fakeData.creditCardNumber)
        await actions.typeIn(this.expiryDate, "05/2022")
        await actions.typeIn(this.firstName, fakeData.firstName)
        await actions.typeIn(this.lastName, fakeData.lastName)
        await actions.typeIn(this.adress1, fakeData.adress)
        await actions.typeIn(this.adress2, fakeData.adress)
        await actions.typeIn(this.city, fakeData.city)
        await actions.typeIn(this.state, fakeData.state)
        await actions.typeIn(this.zipCode, fakeData.zip)
        await actions.typeIn(this.country, fakeData.country)
    }
}
export default new OrderPage()