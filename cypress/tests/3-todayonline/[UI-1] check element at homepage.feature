
Feature: Component of category listing

  As an user,
  I want see component of category listing

  Scenario: User see components of category listing
    Given user navigates to coods homepage of 'https://staging-todayonline-sg.iprice.mx/'
    When user scrolls to the category section
    Then user should see all title and image of category should be equal to table:
      | category_name             |
      | Electronics               |
      | Food & Grocery            |
      | Beauty & Health           |
      | Fashion                   |
      | Home & Living             |
      | Travel & Hotels           |
      | Sports & Outdoors         |
      | Finance & Insurance       |
      | Kids & Toys               |
      | 9.9 Sale                  |
      | 10.10 Sale                |
      | 11.11 Sale                |
      | 12.12 Sale                |
      | Christmas & Year End Sale |
      | Ramadan & Raya Sale       |
      | Chinese New Year          |
      | GSS 2021                  |