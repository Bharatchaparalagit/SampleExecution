package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.TestBase;

public class LoginPage extends TestBase {
	
	@FindBy(how=How.ID,using ="gsft_main")
	public WebElement switchToMainframe;
	
	@FindBy(how=How.ID,using ="user_name")
	public WebElement userName;
	
	@FindBy(how=How.ID,using ="user_password")
	public WebElement passWord;
	
	@FindBy(how=How.ID,using ="sysverb_login")
	public WebElement loginButton;
	
	
	
	//Initializing the page objects
	
	public LoginPage(){
		PageFactory.initElements(driver, this);
				
	}
	
	//Actions
	
	public static void switchToMainframe(){
		driver.switchTo().frame("gsft_main");
		
	}
	
	public String validateLoginPageTite(){
		return driver.getTitle();
	}
	
	public void enterUserName(String Username){
	
		userName.sendKeys(Username);
	}
	
	public void enterPassword(String Password){
	
		passWord.sendKeys(Password);
	}
	
	public HomePage clickLoginButton(){
	
		loginButton.click();
		
		return new HomePage();
	}
}	
	/*public WebElement userName(){
		return userName;
	}
	
	public WebElement passWord(){
		return passWord;
	}
	
	public WebElement loginButton(){
		return loginButton;
	}
	*/

