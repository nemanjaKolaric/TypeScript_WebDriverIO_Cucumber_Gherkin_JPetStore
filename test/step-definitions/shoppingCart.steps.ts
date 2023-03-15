import { Then, When } from "@wdio/cucumber-framework";
import homePage from "../pages/homePage";

When('user selects ten large angelfish', async () => {
    await homePage.orderTenLargeAngelfish()
})

Then('the total amount is correct', async () => {
    await homePage.expectedTotalAmount()
})

When('user order three products', async () => {
    await homePage.orderThreeItems()
})

When('user remove one product', async () => {
    await homePage.removeOneItemFromShoppingCart()
})