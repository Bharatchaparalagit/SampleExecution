package steps;
import static org.testng.Assert.assertEquals;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.locators.HomePage;
import pages.locators.LoginPage;
import utils.TestBase;

public class ApplicationOnboardingSteps extends TestBase {
		
	LoginPage loginpage = new LoginPage();
	HomePage homepage = new HomePage();
		
	@Given("User is on the Login page of the application$")
	public void User_is_on_the_Login_page_of_the_application() throws Throwable {
	    BeforeActions.setUp();
				
	}

	@And("^Switch to mainframeone$")
	public void switch_to_mainframeone() throws Throwable {
		loginpage.switchToMainframe();
		
	}

	@And("^Verify Login Page title$")
	public void verify_Login_Page_title() throws Throwable {
	   String loginPageTitle = loginpage.validateLoginPageTite();
	    assertEquals("ServiceNow",loginPageTitle);
	}

	@Then("^User enters the username and password as \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_the_username_and_password_as_and(String Username, String Password) throws Throwable {
		loginpage.userName.clear();
	    loginpage.enterUserName(Username);
	    loginpage.passWord.clear();
	    loginpage.enterPassword(Password);
		
	}

	@And("^User clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
	    loginpage.clickLoginButton();
	}

	@And("^Verify User is on homepage by validating the title$")
	public void verify_User_is_on_homepage_by_validating_the_title() throws Throwable {
	  String homePageTitle =  homepage.verifyHomePageTitle();
	  assertEquals("System Administration | ServiceNow",homePageTitle);
	}

	@Then("^User navigates to Filter Navigator search box and enter \"([^\"]*)\"$")
	public void user_navigates_to_Filter_Navigator_search_box_and_enter(String arg1) throws Throwable {
	    
	}

	@And("^Switch to mainframetwo$")
	public void switch_to_mainframetwo() throws Throwable {
	    
	}

	@And("^User clicks on the Order Guides link$")
	public void user_clicks_on_the_Order_Guides_link() throws Throwable {
	    
	}

	@And("^User clicks on the End to End Deployment link$")
	public void user_clicks_on_the_End_to_End_Deployment_link() throws Throwable {
	    
	}

	@And("^User clicks on the Try It button\\.$")
	public void user_clicks_on_the_Try_It_button() throws Throwable {
	    
	}

	@Then("^Verify the user is in Describe Needs page$")
	public void verify_the_user_is_in_Describe_Needs_page() throws Throwable {
	    
	}

	@Then("^User select the project \"([^\"]*)\"$")
	public void user_select_the_project(String arg1) throws Throwable {
	    
	}

	@And("^Switch to mainframethree$")
	public void switch_to_mainframethree() throws Throwable {
	    
	}

	@And("^User select the \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_select_the_and(String arg1, String arg2) throws Throwable {
	    
	}

	@And("^User enters the \"([^\"]*)\"$")
	public void user_enters_the(String arg1) throws Throwable {
	    
	}

	@And("^User select the platform \"([^\"]*)\"$")
	public void user_select_the_platform(String arg1) throws Throwable {
	    
	}

	@And("^User select the existing key pair radio button and enter the \"([^\"]*)\"$")
	public void user_select_the_existing_key_pair_radio_button_and_enter_the(String arg1) throws Throwable {
	    
	}

	@Then("^User select the webserver checkbox$")
	public void user_select_the_webserver_checkbox() throws Throwable {
	    
	}

	@And("^User select the containerized platform for web server as \"([^\"]*)\"$")
	public void user_select_the_containerized_platform_for_web_server_as(String arg1) throws Throwable {
	    
	}

	@And("^User select Container Platform \"([^\"]*)\"$")
	public void user_select_Container_Platform(String arg1) throws Throwable {
	    
	}

	@And("^User select Application Type \"([^\"]*)\"$")
	public void user_select_Application_Type(String arg1) throws Throwable {
	    
	}

	@Then("^User select the Database server checkbox$")
	public void user_select_the_Database_server_checkbox() throws Throwable {
	    
	}

	@And("^User select the containerized platform for Database server as \"([^\"]*)\"$")
	public void user_select_the_containerized_platform_for_Database_server_as(String arg1) throws Throwable {
	    
	}

	@And("^User select the container platform \"([^\"]*)\"$")
	public void user_select_the_container_platform(String arg1) throws Throwable {
	    
	}

	@And("^Click Choose options button$")
	public void click_Choose_options_button() throws Throwable {
	    
	}

	@Then("^Verify the user is in webserver deployment page$")
	public void verify_the_user_is_in_webserver_deployment_page() throws Throwable {
	    
	}

	@And("^User enters \"([^\"]*)\"$")
	public void user_enters(String arg1) throws Throwable {
	    
	}

	@And("^user enter \"([^\"]*)\"$")
	public void user_enter(String arg1) throws Throwable {
	    
	}

	@And("^user enter operating system to be installed \"([^\"]*)\"$")
	public void user_enter_operating_system_to_be_installed(String arg1) throws Throwable {
	    
	}

	@And("^User enter server size \"([^\"]*)\"$")
	public void user_enter_server_size(String arg1) throws Throwable {
	    
	}

	@And("^User select the additional storage \"([^\"]*)\"$")
	public void user_select_the_additional_storage(String arg1) throws Throwable {
	    
	}

	@And("^user enter the Storage type \"([^\"]*)\" Bucket name \"([^\"]*)\" and EC(\\d+) Mount path \"([^\"]*)\"$")
	public void user_enter_the_Storage_type_Bucket_name_and_EC_Mount_path(String arg1, String arg2, int arg3, String arg4) throws Throwable {
	    
	}

	@And("^User selects the use existing network radiobutton$")
	public void user_selects_the_use_existing_network_radiobutton() throws Throwable {
	    
	}

	@And("^User select the existing network \"([^\"]*)\"$")
	public void user_select_the_existing_network(String arg1) throws Throwable {
	    
	}

	@And("^User select the use existing security group radiobutton$")
	public void user_select_the_use_existing_security_group_radiobutton() throws Throwable {
	    
	}

	@And("^user select the security group \"([^\"]*)\"$")
	public void user_select_the_security_group(String arg1) throws Throwable {
	    
	}

	@And("^user selects the info \"([^\"]*)\"$")
	public void user_selects_the_info(String arg1) throws Throwable {
	    
	}
	
	@And("^user select the \"([^\"]*)\"$")
	public void user_select_the(String arg1) throws Throwable {
	   
	}

	@And("^User select the Metric Type as \"([^\"]*)\" and Units \"([^\"]*)\"$")
	public void user_select_the_Metric_Type_as_and_Units(String arg1, String arg2) throws Throwable {
	    
	}

	@And("^user clicks the Next tab button$")
	public void user_clicks_the_Next_tab_button() throws Throwable {
	    
	}

	@Then("^Verify the Database server Deployment text is displayed$")
	public void verify_the_Database_server_Deployment_text_is_displayed() throws Throwable {
	    
	}

	@And("^user select the service Requested \"([^\"]*)\"$")
	public void user_select_the_service_Requested(String arg1) throws Throwable {
	    
	}
	
	@And("^user enter cluster \"([^\"]*)\"$")
	public void user_enter_cluster(String arg1) throws Throwable {
	    
	}

	@And("^user enter operating system to install \"([^\"]*)\"$")
	public void user_enter_operating_system_to_install(String arg1) throws Throwable {
	    
	}

	@And("^User enter server size requested \"([^\"]*)\"$")
	public void user_enter_server_size_requested(String arg1) throws Throwable {
	    
	}

	@And("^User selects the additional storage \"([^\"]*)\"$")
	public void user_selects_the_additional_storage(String arg1) throws Throwable {
	    
	}

	@And("^user enters the Storage type \"([^\"]*)\" Bucket name \"([^\"]*)\" and EC(\\d+) Mount path \"([^\"]*)\"$")
	public void user_enters_the_Storage_type_Bucket_name_and_EC_Mount_path(String arg1, String arg2, int arg3, String arg4) throws Throwable {
	    
	}

	@And("^User select the use existing network radiobutton$")
	public void user_select_the_use_existing_network_radiobutton() throws Throwable {
	    
	}

	@And("^User selects the existing network \"([^\"]*)\"$")
	public void user_selects_the_existing_network(String arg1) throws Throwable {
	    
	}

	@And("^User selects the use existing security group radiobutton$")
	public void user_selects_the_use_existing_security_group_radiobutton() throws Throwable {
	    
	}

	@And("^user selects the security group \"([^\"]*)\"$")
	public void user_selects_the_security_group(String arg1) throws Throwable {
	    
	}

	@And("^user selects the \"([^\"]*)\"$")
	public void user_selects_the(String arg1) throws Throwable {
	    
	}
	
	@And("^user selected the \"([^\"]*)\"$")
	public void user_selected_the(String arg1) throws Throwable {
	   
	}

	@And("^User selects the Metric Type as \"([^\"]*)\" and Units \"([^\"]*)\"$")
	public void user_selects_the_Metric_Type_as_and_Units(String arg1, String arg2) throws Throwable {
	    
	}

	@And("^user clicks on Next tab button$")
	public void user_clicks_on_Next_tab_button() throws Throwable {
	    
	}

	@Then("^verify the Application deployment tab is displayed$")
	public void verify_the_Application_deployment_tab_is_displayed() throws Throwable {
	    
	}

	@And("^user enter the Application Name \"([^\"]*)\"$")
	public void user_enter_the_Application_Name(String arg1) throws Throwable {
	    
	}

	@And("^user select the Build from repo radio button$")
	public void user_select_the_Build_from_repo_radio_button() throws Throwable {
	    
	}

	@Then("^User clicks checkout button$")
	public void user_clicks_checkout_button() throws Throwable {
	    
	}

	@Then("^verify the user is in shopping cart page$")
	public void verify_the_user_is_in_shopping_cart_page() throws Throwable {
	    
	}

	@And("^user clicks order now button$")
	public void user_clicks_order_now_button() throws Throwable {
	    
	}

	@Then("^verify the user is in order status page$")
	public void verify_the_user_is_in_order_status_page() throws Throwable {
	    
	}

	@And("^click on request number link$")
	public void click_on_request_number_link() throws Throwable {
	    
	}

	@Then("^verify the request is approved$")
	public void verify_the_request_is_approved() throws Throwable {
	    
	}

	@And("^Click on RITM Numbers and approve all RITM Numbers created for the request order$")
	public void click_on_RITM_Numbers_and_approve_all_RITM_Numbers_created_for_the_request_order() throws Throwable {
	    
	}

	@Then("^verify the state is changed to closed complete$")
	public void verify_the_state_is_changed_to_closed_complete() throws Throwable {
	    
	}

	@And("^Switch to multiple window$")
	public void switch_to_multiple_window() throws Throwable {
	    
	}

	@And("^user goes to filter navigation and search the cmdb_ci_server list table \"([^\"]*)\"$")
	public void user_goes_to_filter_navigation_and_search_the_cmdb_ci_server_list_table(String arg1) throws Throwable {
	    
	}

	@Then("^user verify the webserver is displayed$")
	public void user_verify_the_webserver_is_displayed() throws Throwable {
	    
	}

	@Then("^user verify the Database server is displayed$")
	public void user_verify_the_Database_server_is_displayed() throws Throwable {
	    
	}

	@Then("^User verify the application server is displayed$")
	public void user_verify_the_application_server_is_displayed() throws Throwable {
	    	}

	@And("^User click on Menu dropdown and clicks logout$")
	public void user_click_on_Menu_dropdown_and_clicks_logout() throws Throwable {
	    
	}

	@Then("^Verify user is logged out from the application$")
	public void verify_user_is_logged_out_from_the_application() throws Throwable {
	    
	}


}
