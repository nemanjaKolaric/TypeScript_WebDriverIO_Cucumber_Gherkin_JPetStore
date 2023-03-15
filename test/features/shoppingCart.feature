Feature: Shopping Cart functionality

    Scenario: User can order a larger quantity of one product
        Given user is on home page
        When user selects ten large angelfish
        Then the total amount is correct

    Scenario: User can order three different products
        Given user is on home page
        When user order three products
        Then the total amount is correct

    Scenario: User can remove one product from the shopping cart
        Given user is on home page
        When user order three and remove one product from shopping cart
        Then the total amount is correct