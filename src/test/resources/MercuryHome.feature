Feature: Mercury Home Page

@Homepage
    Scenario Outline: Enter details for registration
      Given  I am on Mercury Home page
      When   I click on Register option then enter <fname> and <lname> and <Phone> and <Add1> and <City> and <State> and <postalcode> and <Country> and <Email> and <Pswrd1> and <cpwd>
      Then   Register page Should be displayed
      Examples:
      |fname|lname | Phone | Add1 |City | State | postalcode | Country |Email| Pswrd1| cpwd |
  |shravanthi| Thuma| 7466977028| 55HR| London|Kent| DA68JQ   |United Kingdom  |sraavanthi.thuma@gmail.com| shrav| shrav|



@Login
  Scenario Outline: Login with valid credentials
     Given I am on Mercury Home page
     When  I click on signIn and enter valid <username> and <pwd>
     Then  I should be logged in
     Examples:
      |username | pwd|
      |sraavanthi.thuma@gmail.com| shrav |



