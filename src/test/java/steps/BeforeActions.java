package steps;

import cucumber.api.java.Before;
import utils.TestBase;

public class BeforeActions extends TestBase{
	
	@Before
	public static void setUp(){
		
		TestBase.initialization();
	}

}
