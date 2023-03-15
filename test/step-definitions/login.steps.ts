import { Given, Then, When } from "@wdio/cucumber-framework";
import homePage from "../pages/homePage";
import { fakeData } from "../test-data/fakeData";
import actions from "../utils/actions";

Given('user is on login page', async () => {
    await homePage.goToLoginPage()
})

When('user insert valid credentials', async () => {
    await homePage.fillLoginForm(`${process.env.USERNAME1}`, `${process.env.PASSWORD1}`)
})

Then('user is logged in', async () => {
    await expect(homePage.signOutButton && homePage.myAccountButton).toBeDisplayed()
})

When('user insert valid username and invalid password', async () => {
    await homePage.fillLoginForm(`${process.env.USERNAME1}`, fakeData.password)
})

Then('fail message is shown', async () => {
    await expect(homePage.failMessage).toBeDisplayed()
})

When('user insert invalid username and valid password', async () => {
    await homePage.fillLoginForm(fakeData.username, `${process.env.PASSWORD1}`)
})

When('user leave empty username and password fields', async () => {
    await homePage.fillLoginForm("", "")
})

Then('user is not logged in', async () => {
    await expect(homePage.signOutButton && homePage.myAccountButton).not.toBeDisplayed()
})

When('user leave empty username field and insert valid password', async () => {
    await homePage.fillLoginForm("", `${process.env.PASSWORD1}`)
})

When('user insert valid username and leave empty password field', async () => {
    await homePage.fillLoginForm(`${process.env.USERNAME1}`, "")
})

When('user click on sign out button', async () => {
    await actions.clickOn(homePage.signOutButton)
})

Then('user is signed out', async () => {
    await expect(homePage.signInButton).toBeDisplayed()
})