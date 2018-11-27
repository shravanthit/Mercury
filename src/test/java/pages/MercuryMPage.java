package pages;

import gherkin.lexer.Id;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.internal.FindsByCssSelector;
import org.openqa.selenium.remote.server.handler.SendKeys;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import utils.DriverFactory;

public class MercuryMPage {

    WebDriver driver = DriverFactory.driver;
    DriverFactory dFactory = new DriverFactory();
    DriverFactory visible = new DriverFactory();

    @FindBy(xpath = ("//*[contains(text(), 'REGISTER')]"))
    public WebElement register;

    @FindBy(name = "firstName")
    WebElement fName;

    @FindBy(name = "lastName")
    WebElement lName;

    @FindBy(name = "phone")
    WebElement phone;

    @FindBy(id = "userName")
    public WebElement userName;

    @FindBy(name = "address1")
    WebElement address1;

    @FindBy(name = "city")
    WebElement city;

    @FindBy(name = "state")
    WebElement state;

    @FindBy(name = "postalCode")
    WebElement postalCode;

    @FindBy(name = "country")
    WebElement country;

    @FindBy(id = "email")
    public WebElement email;

    @FindBy(name = "password")
    WebElement password;

    @FindBy(name = "confirmPassword")
    WebElement cPassword;

    @FindBy(name = "register")
    WebElement submit;

    @FindBy(xpath = ("//*[contains(text(), 'SIGN-OFF')]"))
    WebElement Signoff;

    @FindBy(name = "passCount")
    WebElement passengerCount;

    @FindBy(xpath = ("//*[contains(text(), 'SIGN-ON')]"))
    WebElement SignOn;

    @FindBy(name = "login")
    WebElement Login;

    public MercuryMPage() {
        PageFactory.initElements( driver, this );
    }

    public void launchMercuryHomePage() {
        driver.get( "http://newtours.demoaut.com/" );
    }

    public void findRegisterElem(){
        dFactory.waitingforelement( register, driver );
        register.click();
        }

    public void fillRegistration(String fname, String lname, String Phone, String Add1, String City, String State, String postalcode, String Country, String Email, String Pswrd1, String cpwd) {
        dFactory.waitingforelement(fName,driver);
        fName.sendKeys( fname );
        lName.sendKeys( lname );
        phone.sendKeys( Phone );
        address1.sendKeys( (CharSequence) Add1 );
        city.sendKeys( City );
        state.sendKeys( State );
        postalCode.sendKeys( postalcode );
        country.sendKeys( Country );
        email.sendKeys( Email );
        password.sendKeys( Pswrd1 );
        cPassword.sendKeys( cpwd );
        submit.click();

    }

    public void verifyRegistered(){
        dFactory.verifyIsElementIsDisplayed(Signoff,driver);
}
/*public void FindsignonElem(){
    dFactory.waitingforelement( SignOn, driver );
    SignOn.click();
}*/
public void signon(String username, String pwd){
    dFactory.waitingforelement(SignOn,driver);
    SignOn.click();
    userName.click();
    userName.sendKeys(username);
    password.click();
    password.sendKeys(pwd );
    Login.click();
}
public void verifyloggedin()
{
    dFactory.verifyIsElementIsDisplayed( passengerCount,driver);
}
}
