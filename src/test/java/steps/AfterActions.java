package steps;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import utils.TestBase;

public class AfterActions {
	
	@After
	public static void teardown(Scenario scenario){
		
		WebDriver driver= TestBase.getDriver();
		System.out.println(scenario.isFailed());
			if (scenario.isFailed()){
				byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
				scenario.embed(screenshotBytes, "image/png");
			}
		
		TestBase.tearDown();
		
	}

}
