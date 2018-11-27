package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.MercuryMPage;
import utils.DriverFactory;

public class MercurySteps {

    MercuryMPage mercuryMPage = new MercuryMPage();
    DriverFactory dFactory = new DriverFactory();

    @Given("I am on Mercury Home page")
    public void launch_browser() {
        mercuryMPage.launchMercuryHomePage();
    }

    @When("^I click on Register option then enter (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*)")
    public void iClickOnRegisterButton(String fn, String ln, String ph, String add, String ccty, String stat, String pcode, String contry, String eml, String PWD, String cPWD) {
        mercuryMPage.findRegisterElem();
        mercuryMPage.fillRegistration( fn, ln, ph, add, ccty, stat, pcode, contry, eml, PWD, cPWD );
    }

    @Then("Register page Should be displayed")
    public void IamonRegisteredpage() {
        mercuryMPage.verifyRegistered();
    }

    @Given("I am on Mercury Signin page")
    public void IamonSignOnpage() {
        // mercuryMPage.launchMercuryHomePage();
        //mercuryMPage.FindsignonElem();
    }


    @When("I click on signIn and enter valid <.*> and <.*>")
    public void clickonsignin(String u, String p) throws Throwable {
        mercuryMPage.launchMercuryHomePage();
        mercuryMPage.signon( u, p );
    }

    @Then("I should be logged in")
    public void loggedin() {
        mercuryMPage.verifyloggedin();

    }
}





