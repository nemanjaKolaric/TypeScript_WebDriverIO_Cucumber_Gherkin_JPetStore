Feature: Checkout functionality

    Scenario: User successfully orders the product
        Given user is on home page
        When user buys one item
        Then the item has been purchased