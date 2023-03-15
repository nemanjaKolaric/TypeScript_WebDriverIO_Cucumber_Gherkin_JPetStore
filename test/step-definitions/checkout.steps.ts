import { Given, Then, When } from "@wdio/cucumber-framework";
import homePage from "../pages/homePage";
import orderPage from "../pages/orderPage";
import { fakeData } from "../test-data/fakeData";

Given('user is on home page', async () => {
    await homePage.goToLoginPage()
    await homePage.fillLoginForm(`${process.env.USERNAME1}`, `${process.env.PASSWORD1}`)
});

When('user buys one item', async () => {
    await homePage.completeCheckout()
});

Then('the item has been purchased', async () => {
    await expect(orderPage.confirmOrder).toBeDisplayed()
});