
Feature: Component of category listing

  As an user,
  I want see component of category listing

  Scenario Outline: User see components of category listing
    Given user navigates to coods homepage of 'https://staging-todayonline-sg.iprice.mx/'
    When user scrolls to the category section
    Then user should see "<category component>" displayed on the page
    Then total category name and category image must match

    Examples:
      | category component |
      | category heading   |
      | category image     |
      | category name      |
