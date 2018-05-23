package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.TestBase;

public class LoginPage extends TestBase {
	
	//Initializing the page objects
	
		public LoginPage(){
			PageFactory.initElements(driver, this);
					
		}
	
	@FindBy(how=How.ID,using ="gsft_main")
	public WebElement switchToMainframe;
	
	@FindBy(how=How.XPATH,using =".//*[@id='user_name']")
	public WebElement userName;
	
	@FindBy(how=How.XPATH,using =".//*[@id='user_password']")
	public WebElement passWord;
	
	@FindBy(how=How.XPATH,using =".//*[@id='sysverb_login']")	
	public WebElement loginButton;
	
	//Actions
	
	public void switchToMainframe(){
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

