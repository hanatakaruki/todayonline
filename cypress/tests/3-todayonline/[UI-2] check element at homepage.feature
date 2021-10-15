
Feature: Component of category listing

  As an user,
  I want see component of category listing

  Scenario: User see components of category listing
    Given user navigates to coods homepage of 'https://staging-todayonline-sg.iprice.mx/'
    When user scrolls to the category section
    Then the "Browse Categories" should be visible
    Then the "title of category" should be visible
    Then the "images of category" should be visible
    Then total title of category and images of category should be equal