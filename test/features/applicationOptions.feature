Feature: Application options functionality

    Scenario: User can find existing product using the search bar
        Given user is on home page
        When user insert existing product in the search bar
        Then the product has been found

    Scenario: User cannot find non-existent product using the search bar
        Given user is on home page
        When user insert non-existent product in the search bar
        Then the product does not exist

    Scenario:User can go back to home page using "Return to Main Menu" link
        Given user is on item page
        When user click on back menu link
        Then user is back on home page