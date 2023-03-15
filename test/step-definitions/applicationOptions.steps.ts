import { Given, Then, When } from "@wdio/cucumber-framework";
import homePage from "../pages/homePage";
import itemsPage from "../pages/itemsPage";
import actions from "../utils/actions";

When('user insert existing product in the search bar', async () => {
    await homePage.searchContent(`${process.env.FISH}`)
})

Then('the product has been found', async () => {
    await expect(itemsPage.searchedContent(`${process.env.FISH}`)).toBeDisplayed()
})

When('user insert non-existent product in the search bar', async () => {
    await homePage.searchContent(`${process.env.INVALID_WORD}`)
})

Then('the product does not exist', async () => {
    await expect(itemsPage.searchedContent(`${process.env.INVALID_WORD}`)).not.toBeDisplayed()
})

Given('user is on item page', async () => {
    await homePage.goToLoginPage()
    await homePage.fillLoginForm(`${process.env.USERNAME1}`, `${process.env.PASSWORD1}`)
    await actions.clickOn(homePage.birdsPageLink)
})

When('user click on back menu link', async () => {
    await actions.clickOn(itemsPage.returnToMainMenuLink)
})

Then('user is back on home page', async () => {
    expect(browser).toHaveUrl(`${process.env.BASE_URL}` + "/actions/Catalog.action")
})