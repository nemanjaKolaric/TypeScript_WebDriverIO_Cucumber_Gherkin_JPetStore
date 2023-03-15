Feature: Checkout functionality

    Scenario: User is able to buy one item
        Given user is on home page
        When user buys one item
        Then the item has been purchased