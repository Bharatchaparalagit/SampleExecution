package utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

	public class TestBase {
	
	//init webdriver
	public static WebDriver driver;
	public static Properties prop;
	
	public TestBase(){
		
		try{
			prop=new Properties();
			FileInputStream fis = new FileInputStream("\\Users\\Saurya\\workspace\\Cnet\\Matilda\\src\\main\\java\\config\\config.properties");
			prop.load(fis);
		} catch(IOException e){
			e.getMessage();
	}
	
}
	
	public static void initialization(){
		String browserName = prop.getProperty("browser");
		
		if(browserName.equals("chrome")){
			System.setProperty("webdriver.chrome.driver", "C:\\BrowserDrivers\\chromedriver.exe");
			driver= new ChromeDriver();
		}else if(browserName.equals("firefox")){
			System.setProperty("webdriver.gecko.driver", "C:\\BrowserDrivers\\geckodriver.exe");
			driver= new FirefoxDriver();
		}else if(browserName.equals("IE")){
			System.setProperty("webdriver.ie.driver", "C:\\BrowserDrivers\\IEDriverServer.exe");
			driver= new InternetExplorerDriver();
			
		}
		
	
		final int TIMEOUT=20;
		final int PAGE_LOAD_TIMEOUT=30;
	
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		
		driver.get(prop.getProperty("url"));
	}
	
	public static WebDriver getDriver(){
		return driver;
		
	}
	
	public static void tearDown(){
		if(driver!=null){
			driver.close();
			driver.quit();
		}
		
	}
		
}
