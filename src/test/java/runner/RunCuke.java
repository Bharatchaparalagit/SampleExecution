package runner;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.testng.annotations.BeforeClass;

import com.cucumber.listener.ExtentCucumberFormatter;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = {"src/test/resources/features/ApplicationOnboarding.feature"} ,
				monochrome = true,
				glue = "steps",
				dryRun = false,
				tags = "@Application-Onboarding",
				plugin= {"html:target/site/cucumber-report-html",
						"json:target/cucumber.json",
						"pretty:target/cucumber-pretty.txt",
						"usage:target/cucumber-usage.json",
		  				"com.cucumber.listener.ExtentCucumberFormatter:ExtentReport/report.html"})
public class RunCuke extends AbstractTestNGCucumberTests{
	

	@BeforeClass
	public static void setup(){
		//Initiates the extent report and generate the output
		SimpleDateFormat sdf = new SimpleDateFormat ("ddMMyyyy_hhmmss");
		Date curDate = new Date();
		String strDate=sdf.format(curDate);
		String fileName = System.getProperty("C:\\Users\\cnet20\\eclipse-workspace\\Matilda\\target\\Extent_Reports\\" + strDate +".html");
		File newFile = new File(fileName);
		ExtentCucumberFormatter.initiateExtentCucumberFormatter(newFile,false);
		
		ExtentCucumberFormatter.loadConfig(new File("src/test/resources/extent-config.xml"));
		
		ExtentCucumberFormatter.addSystemInfo("Browser Name", "Chrome");
		ExtentCucumberFormatter.addSystemInfo("Browser Version", "v65.0");
		
	}
}
