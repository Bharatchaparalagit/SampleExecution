package pages.locators;

import org.openqa.selenium.WebElement;
//import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.TestBase;

public class HomePage extends TestBase {
	
	//Initializing the page objects
		public HomePage(){
			PageFactory.initElements(driver, this);
		}
	
	@FindBy(how=How.XPATH,using= "//*[@id='filter']")
	public WebElement filterNavigator;
	
	@FindBy(how=How.ID,using="nav_filter_controls")
	public WebElement filterNavigatorClick;
	
	@FindBy(how=How.XPATH, using= "//*[@id='32ce5bb37f000001019feb946298246d']")
	public WebElement orderGuides;
	
	@FindBy(how=How.LINK_TEXT,using="End to End Deployment")
	public WebElement endToEndDeployment;
	
	@FindBy(how=How.ID,using="try_it_catalog")
	public WebElement tryItButton;
	
		
	public String verifyHomePageTitle(){
		return driver.getTitle();
	}
	
	public void filterSearchboxclick(String FilterValue){
		
		filterNavigator.sendKeys(FilterValue);
		
	}
	
	public void clickOrderGuides(){
		orderGuides.click();
	}
	
	public void clickEndToEndDeployment(){
		endToEndDeployment.click();
		
	}
	
	public void clickTryIt(){
		tryItButton.click();
	}
	
	/*public WebElement filterNavigator(){
		return filterNavigator;
	}
		
	public WebElement filterNavigatorClick(){
		return filterNavigatorClick;
	
	}
	
	public WebElement orderGuides(){
		return orderGuides;
	}
	
	public WebElement endToEndDeployment(){
		return endToEndDeployment;
	}
	
	public WebElement tryItButton(){
		return tryItButton;
	}
*/	
}