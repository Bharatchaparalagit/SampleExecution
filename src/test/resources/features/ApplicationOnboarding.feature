@Deployment
Feature: Acceptance testing to validate the Application Onboarding
  Validate whether the application onboarding flow is working fine with acceptance criteria

  @Deployment-Orderflow
  Scenario Outline: Validate the Application onboarding order flow
    Given User is on the Login page of the application
    And Switch to mainframeone
    And Verify Login Page title
    Then User enters the username and password as "<Username>" and "<Password>"
    And User clicks on login button
    And Verify User is on homepage by validating the title
    Then User navigates to Filter Navigator search box and enter "<FilterValue>"
    And Switch to mainframetwo
    And User clicks on the Order Guides link
    And User clicks on the End to End Deployment link
    And User clicks on the Try It button.
    Then Verify the user is in Describe Needs page
    And User select the project "<Project>"
    And Switch to mainframethree
    And User select the "<Environment Information>" and "<Environment Type>"
    And User enters the "<Environment Name>"
    And User select the platform "<Cloud Platform>"
    And User select the existing key pair radio button and enter the "<keypair>"
    Then User select the webserver checkbox
    And User select the containerized platform for web server as "<Containerized platform>"
    And User select Container Platform "<ContainerPlatform>"
    And User select Application Type "<ApplicationType>"
    Then User select the Database server checkbox
    And User select the containerized platform for Database server as "<Containerized platform>"
    And User select the container platform "<ContainerPlatform>"
    And Click Choose options button
    Then Verify the user is in webserver deployment page
    And User enters "<service Requested>"
    And user enter "<cluster name>"
    And user enter operating system to be installed "<Operating system>"
    And User enter server size "<ServerSizeRequested>"
    And User select the additional storage "<Storage>"
    And user enter the Storage type "<StorageType>" Bucket name "<BucketName>" and EC2 Mount path "<Ec2MountPath>"
    And User selects the use existing network radiobutton
    And User select the existing network "<NetworkName>"
    And User select the use existing security group radiobutton
    And user select the security group "<security group>"
    And user selects the info "<Monitoring>"
    And User select the "<AutoScaling>"
    And User select the Metric Type as "<MetricType>" and Units "<Units>"
    And user clicks the Next tab button
    Then Verify the Database server Deployment text is displayed
    And user select the service Requested "<ServiceRequested>"
    And user enter cluster "<cluster name>"
    And user enter operating system to install "<Operating system>"
    And User enter server size requested "<ServerSizeRequested>"
    And User selects the additional storage "<Storage>"
    And user enters the Storage type "<StorageType>" Bucket name "<BucketName>" and EC2 Mount path "<Ec2MountPath>"
    And User select the use existing network radiobutton
    And User selects the existing network "<NetworkName>"
    And User selects the use existing security group radiobutton
    And user selects the security group "<security group>"
    And user selects the "<Monitoring>"
    And User selected the "<AutoScaling>"
    And User selects the Metric Type as "<MetricType>" and Units "<Units>"
    And user clicks on Next tab button
    Then verify the Application deployment tab is displayed
    And user enter the Application Name "<ApplicatioName>"
    And user select the Build from repo radio button
    Then User clicks checkout button
    Then verify the user is in shopping cart page
    And user clicks order now button
    Then verify the user is in order status page
    And click on request number link
    Then verify the request is approved
    And Click on RITM Numbers and approve all RITM Numbers created for the request order
    Then verify the state is changed to closed complete
    And Switch to multiple window
    And user goes to filter navigation and search the cmdb_ci_server list table "<CMDBTable>"
    Then user verify the webserver is displayed
    Then user verify the Database server is displayed
    Then User verify the application server is displayed
    And User click on Menu dropdown and clicks logout
    Then Verify user is logged out from the application

    Examples:
    	| Username |	Password |
    	|	qa.user  |	Cnet123$ |