$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MercuryHome.feature");
formatter.feature({
  "line": 1,
  "name": "Mercury Home Page",
  "description": "",
  "id": "mercury-home-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Enter details for registration",
  "description": "",
  "id": "mercury-home-page;enter-details-for-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Homepage"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on Mercury Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Register option then enter \u003cfname\u003e and \u003clname\u003e and \u003cPhone\u003e and \u003cAdd1\u003e and \u003cCity\u003e and \u003cState\u003e and \u003cpostalcode\u003e and \u003cCountry\u003e and \u003cEmail\u003e and \u003cPswrd1\u003e and \u003ccpwd\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Register page Should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "mercury-home-page;enter-details-for-registration;",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "Phone",
        "Add1",
        "City",
        "State",
        "postalcode",
        "Country",
        "Email",
        "Pswrd1",
        "cpwd"
      ],
      "line": 9,
      "id": "mercury-home-page;enter-details-for-registration;;1"
    },
    {
      "cells": [
        "shravanthi",
        "Thuma",
        "7466977028",
        "55HR",
        "London",
        "Kent",
        "DA68JQ",
        "United Kingdom",
        "sraavanthi.thuma@gmail.com",
        "shrav",
        "shrav"
      ],
      "line": 10,
      "id": "mercury-home-page;enter-details-for-registration;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3509300762,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Enter details for registration",
  "description": "",
  "id": "mercury-home-page;enter-details-for-registration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Homepage"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on Mercury Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Register option then enter shravanthi and Thuma and 7466977028 and 55HR and London and Kent and DA68JQ and United Kingdom and sraavanthi.thuma@gmail.com and shrav and shrav",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Register page Should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MercurySteps.launch_browser()"
});
formatter.result({
  "duration": 1295617154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shravanthi",
      "offset": 38
    },
    {
      "val": "Thuma",
      "offset": 53
    },
    {
      "val": "7466977028",
      "offset": 63
    },
    {
      "val": "55HR",
      "offset": 78
    },
    {
      "val": "London",
      "offset": 87
    },
    {
      "val": "Kent",
      "offset": 98
    },
    {
      "val": "DA68JQ",
      "offset": 107
    },
    {
      "val": "United Kingdom",
      "offset": 118
    },
    {
      "val": "sraavanthi.thuma@gmail.com",
      "offset": 137
    },
    {
      "val": "shrav",
      "offset": 168
    },
    {
      "val": "shrav",
      "offset": 178
    }
  ],
  "location": "MercurySteps.iClickOnRegisterButton(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3878587726,
  "status": "passed"
});
formatter.match({
  "location": "MercurySteps.IamonRegisteredpage()"
});
formatter.result({
  "duration": 55497597,
  "status": "passed"
});
formatter.after({
  "duration": 165942655,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Login with valid credentials",
  "description": "",
  "id": "mercury-home-page;login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on Mercury Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on signIn and enter valid \u003cusername\u003e and \u003cpwd\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "mercury-home-page;login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "pwd"
      ],
      "line": 20,
      "id": "mercury-home-page;login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "sraavanthi.thuma@gmail.com",
        "shrav"
      ],
      "line": 21,
      "id": "mercury-home-page;login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2459707775,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Login with valid credentials",
  "description": "",
  "id": "mercury-home-page;login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on Mercury Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on signIn and enter valid sraavanthi.thuma@gmail.com and shrav",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "MercurySteps.launch_browser()"
});
formatter.result({
  "duration": 1144204945,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "MercurySteps.loggedin()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 147437415,
  "status": "passed"
});
});