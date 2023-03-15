Feature: Login functionality

    Scenario: Login with valid credentials
        Given user is on login page
        When user insert valid credentials
        Then user is logged in

    Scenario: Login with invalid password
        Given user is on login page
        When user insert valid username and invalid password
        Then fail message is shown

    Scenario: Login with invalid username
        Given user is on login page
        When user insert invalid username and valid password
        Then fail message is shown

    Scenario: Login with empty form fields
        Given user is on login page
        When user leave empty username and password fields
        Then user is not logged in

    Scenario: Login with empty username field
        Given user is on login page
        When user leave empty username field and insert valid password
        Then user is not logged in

    Scenario: Login with empty password field
        Given user is on login page
        When user insert valid username and leave empty password field
        Then user is not logged in

    Scenario: User is able to log out
        Given user is on home page
        When user click on sign out button
        Then user is signed out