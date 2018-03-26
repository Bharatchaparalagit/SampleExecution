$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/ApplicationOnboarding.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate the Application Onboarding",
  "description": "Validate whether the application onboarding flow is working fine with acceptance testing",
  "id": "acceptance-testing-to-validate-the-application-onboarding",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Application-Onboarding"
    }
  ]
});
formatter.before({
  "duration": 6242180546,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Validate the Application onboarding order flow",
  "description": "",
  "id": "acceptance-testing-to-validate-the-application-onboarding;validate-the-application-onboarding-order-flow",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Application-Onboarding-flow"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the Login page of the application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Switch to mainframeone",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify Login Page title is ServiceNow",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters the username and password as \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify User is on homepage by validating the title",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User navigates to Filter Navigator search box and enter \"\u003cFilterValue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Switch to mainframetwo",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on the Order Guides link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User clicks on the End to End Deployment link",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clicks on the Try It button.",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify the user is in Describe Needs page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User select the project \"\u003cProject\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Switch to mainframethree",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User select the \"\u003cEnvironment Information\u003e\" and \"\u003cEnvironment Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters the \"\u003cEnvironment Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User select the \"\u003cCloud Platform\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User select the existing key pair radio button and enter the \"\u003ckeypair\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User select the webserver checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User select the containerized platform for web server as \"\u003cContainerized platform\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User select Container Platform \"\u003cContainerPlatform\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User select Application Type \"\u003cApplicationType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User select the Database server checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User select the containerized platform for Database server as \"\u003cContainerized platform\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User select the container platform \"\u003cContainerPlatform\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Click Choose options button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Verify the user is in webserver deployment page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "User enters \"\u003cservice Requested\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user enter \"\u003ccluster name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user enter operating system to be installed \"\u003cOperating system\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User enter server size \"\u003cServerSizeRequested\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User select the additional storage \"\u003cStorage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user enter the Storage type \"\u003cStorageType\u003e\" Bucket name \"\u003cBucketName\u003e\" and EC2 Mount path \"\u003cEc2MountPath\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User selects the use existing network radiobutton",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User select the existing network \"\u003cNetworkName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User select the use existing security group radiobutton",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user select the security group \"\u003csecurity group\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user select the \"\u003cMonitoring\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User select the \"\u003cAuto Scaling\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User select the Metric Type as \"\u003cMetricType\u003e\" and Units \"\u003cUnits\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user clicks the Next tab button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Verify the Database server Deployment text is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "user select the service Requested \"\u003cServiceRequested\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "user enter \"\u003ccluster name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user enter operating system to be installed \"\u003cOperating system\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User enter server size \"\u003cServerSizeRequested\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User select the additional storage \"\u003cStorage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "user enter the Storage type \"\u003cStorageType\u003e\" Bucket name \"\u003cBucketName\u003e\" and EC2 Mount path \"\u003cEc2MountPath\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "User selects the use existing network radiobutton",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User select the existing network \"\u003cNetworkName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User select the use existing security group radiobutton",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "user select the security group \"\u003csecurity group\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user selects the \"\u003cMonitoring\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User selected the \"\u003cAuto Scaling\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User select the Metric Type as \"\u003cMetricType\u003e\" and Units \"\u003cUnits\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "user clicks the Next tab button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "verify the Application deployment tab is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "user enter the Application Name \"\u003cApplicatioName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "user select the Build from repo radio button",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User clicks checkout button",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "verify the user is in shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "user clicks order now button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "verify the user is in order status page",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "click on request number link",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "verify the request is approved",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Click on RITM Numbers and approve all RITM Numbers created for the request order",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "verify the state is changed to closed complete",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "Switch to multiple window",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "user goes to filter navigation and search the cmdb_ci_server list table \"\u003cCMDBTable\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "user verify the webserver is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "user verify the Database server is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "User verify the application server is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "User click on Menu dropdown and clicks logout",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Verify user is logged out from the application",
  "keyword": "Then "
});
formatter.match({
  "location": "ApplicationOnboardingSteps.User_is_on_the_Login_page_of_the_application()"
});
formatter.result({
  "duration": 6038488458,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.switch_to_mainframeone()"
});
formatter.result({
  "duration": 39080,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.verify_Login_Page_title_is_ServiceNow()"
});
formatter.result({
  "duration": 35528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cUsername\u003e",
      "offset": 42
    },
    {
      "val": "\u003cPassword\u003e",
      "offset": 59
    }
  ],
  "location": "ApplicationOnboardingSteps.user_enters_the_username_and_password_as_and(String,String)"
});
formatter.result({
  "duration": 3831911,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 36318,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.verify_User_is_on_homepage_by_validating_the_title()"
});
formatter.result({
  "duration": 27633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cFilterValue\u003e",
      "offset": 57
    }
  ],
  "location": "ApplicationOnboardingSteps.user_navigates_to_Filter_Navigator_search_box_and_enter(String)"
});
formatter.result({
  "duration": 75004,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.switch_to_mainframetwo()"
});
formatter.result({
  "duration": 28423,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.user_clicks_on_the_Order_Guides_link()"
});
formatter.result({
  "duration": 38292,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.user_clicks_on_the_End_to_End_Deployment_link()"
});
formatter.result({
  "duration": 29212,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.user_clicks_on_the_Try_It_button()"
});
formatter.result({
  "duration": 27633,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.verify_the_user_is_in_Describe_Needs_page()"
});
formatter.result({
  "duration": 35923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cProject\u003e",
      "offset": 25
    }
  ],
  "location": "ApplicationOnboardingSteps.user_select_the_project(String)"
});
formatter.result({
  "duration": 88031,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.switch_to_mainframethree()"
});
formatter.result({
  "duration": 27633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cEnvironment Information\u003e",
      "offset": 17
    },
    {
      "val": "\u003cEnvironment Type\u003e",
      "offset": 49
    }
  ],
  "location": "ApplicationOnboardingSteps.user_select_the_and(String,String)"
});
formatter.result({
  "duration": 92768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cEnvironment Name\u003e",
      "offset": 17
    }
  ],
  "location": "ApplicationOnboardingSteps.user_enters_the(String)"
});
formatter.result({
  "duration": 59608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cCloud Platform\u003e",
      "offset": 17
    }
  ],
  "location": "ApplicationOnboardingSteps.user_select_the(String)"
});
formatter.result({
  "duration": 65135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003ckeypair\u003e",
      "offset": 62
    }
  ],
  "location": "ApplicationOnboardingSteps.user_select_the_existing_key_pair_radio_button_and_enter_the(String)"
});
formatter.result({
  "duration": 63162,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.user_select_the_webserver_checkbox()"
});
formatter.result({
  "duration": 25659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cContainerized platform\u003e",
      "offset": 58
    }
  ],
  "location": "ApplicationOnboardingSteps.user_select_the_containerized_platform_for_web_server_as(String)"
});
formatter.result({
  "duration": 71056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cContainerPlatform\u003e",
      "offset": 32
    }
  ],
  "location": "ApplicationOnboardingSteps.user_select_Container_Platform(String)"
});
formatter.result({
  "duration": 58819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cApplicationType\u003e",
      "offset": 30
    }
  ],
  "location": "ApplicationOnboardingSteps.user_select_Application_Type(String)"
});
formatter.result({
  "duration": 95532,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.user_select_the_Database_server_checkbox()"
});
formatter.result({
  "duration": 35133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cContainerized platform\u003e",
      "offset": 63
    }
  ],
  "location": "ApplicationOnboardingSteps.user_select_the_containerized_platform_for_Database_server_as(String)"
});
formatter.result({
  "duration": 108558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cContainerPlatform\u003e",
      "offset": 36
    }
  ],
  "location": "ApplicationOnboardingSteps.user_select_the_container_platform(String)"
});
formatter.result({
  "duration": 76583,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.click_Choose_options_button()"
});
formatter.result({
  "duration": 37897,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.verify_the_user_is_in_webserver_deployment_page()"
});
formatter.result({
  "duration": 3719010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cservice Requested\u003e",
      "offset": 13
    }
  ],
  "location": "ApplicationOnboardingSteps.user_enters(String)"
});
formatter.result({
  "duration": 92768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003ccluster name\u003e",
      "offset": 12
    }
  ],
  "location": "ApplicationOnboardingSteps.user_enter(String)"
});
formatter.result({
  "duration": 112901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cOperating system\u003e",
      "offset": 45
    }
  ],
  "location": "ApplicationOnboardingSteps.user_enter_operating_system_to_be_installed(String)"
});
formatter.result({
  "duration": 90005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cServerSizeRequested\u003e",
      "offset": 24
    }
  ],
  "location": "ApplicationOnboardingSteps.user_enter_server_size(String)"
});
formatter.result({
  "duration": 82899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cStorage\u003e",
      "offset": 36
    }
  ],
  "location": "ApplicationOnboardingSteps.user_select_the_additional_storage(String)"
});
formatter.result({
  "duration": 89610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cStorageType\u003e",
      "offset": 29
    },
    {
      "val": "\u003cBucketName\u003e",
      "offset": 57
    },
    {
      "val": "2",
      "offset": 77
    },
    {
      "val": "\u003cEc2MountPath\u003e",
      "offset": 91
    }
  ],
  "location": "ApplicationOnboardingSteps.user_enter_the_Storage_type_Bucket_name_and_EC_Mount_path(String,String,int,String)"
});
formatter.result({
  "duration": 1800489,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.user_selects_the_use_existing_network_radiobutton()"
});
formatter.result({
  "duration": 35923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cNetworkName\u003e",
      "offset": 34
    }
  ],
  "location": "ApplicationOnboardingSteps.user_select_the_existing_network(String)"
});
formatter.result({
  "duration": 298042,
  "status": "passed"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.user_select_the_use_existing_security_group_radiobutton()"
});
formatter.result({
  "duration": 47766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003csecurity group\u003e",
      "offset": 32
    }
  ],
  "location": "ApplicationOnboardingSteps.user_select_the_security_group(String)"
});
formatter.result({
  "duration": 90794,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cAuto Scaling\u003e",
      "offset": 17
    }
  ],
  "location": "ApplicationOnboardingSteps.user_select_the(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cMetricType\u003e",
      "offset": 32
    },
    {
      "val": "\u003cUnits\u003e",
      "offset": 57
    }
  ],
  "location": "ApplicationOnboardingSteps.user_select_the_Metric_Type_as_and_Units(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.user_clicks_the_Next_tab_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.verify_the_Database_server_Deployment_text_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cServiceRequested\u003e",
      "offset": 35
    }
  ],
  "location": "ApplicationOnboardingSteps.user_select_the_service_Requested(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003ccluster name\u003e",
      "offset": 12
    }
  ],
  "location": "ApplicationOnboardingSteps.user_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cOperating system\u003e",
      "offset": 45
    }
  ],
  "location": "ApplicationOnboardingSteps.user_enter_operating_system_to_be_installed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cServerSizeRequested\u003e",
      "offset": 24
    }
  ],
  "location": "ApplicationOnboardingSteps.user_enter_server_size(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cStorage\u003e",
      "offset": 36
    }
  ],
  "location": "ApplicationOnboardingSteps.user_select_the_additional_storage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cStorageType\u003e",
      "offset": 29
    },
    {
      "val": "\u003cBucketName\u003e",
      "offset": 57
    },
    {
      "val": "2",
      "offset": 77
    },
    {
      "val": "\u003cEc2MountPath\u003e",
      "offset": 91
    }
  ],
  "location": "ApplicationOnboardingSteps.user_enter_the_Storage_type_Bucket_name_and_EC_Mount_path(String,String,int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.user_selects_the_use_existing_network_radiobutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cNetworkName\u003e",
      "offset": 34
    }
  ],
  "location": "ApplicationOnboardingSteps.user_select_the_existing_network(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.user_select_the_use_existing_security_group_radiobutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003csecurity group\u003e",
      "offset": 32
    }
  ],
  "location": "ApplicationOnboardingSteps.user_select_the_security_group(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cMonitoring\u003e",
      "offset": 18
    }
  ],
  "location": "ApplicationOnboardingSteps.user_selects_the(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cMetricType\u003e",
      "offset": 32
    },
    {
      "val": "\u003cUnits\u003e",
      "offset": 57
    }
  ],
  "location": "ApplicationOnboardingSteps.user_select_the_Metric_Type_as_and_Units(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.user_clicks_the_Next_tab_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.verify_the_Application_deployment_tab_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cApplicatioName\u003e",
      "offset": 33
    }
  ],
  "location": "ApplicationOnboardingSteps.user_enter_the_Application_Name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.user_select_the_Build_from_repo_radio_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.user_clicks_checkout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.verify_the_user_is_in_shopping_cart_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.user_clicks_order_now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.verify_the_user_is_in_order_status_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.click_on_request_number_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.verify_the_request_is_approved()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.click_on_RITM_Numbers_and_approve_all_RITM_Numbers_created_for_the_request_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.verify_the_state_is_changed_to_closed_complete()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.switch_to_multiple_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cCMDBTable\u003e",
      "offset": 73
    }
  ],
  "location": "ApplicationOnboardingSteps.user_goes_to_filter_navigation_and_search_the_cmdb_ci_server_list_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.user_verify_the_webserver_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.user_verify_the_Database_server_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.user_verify_the_application_server_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.user_click_on_Menu_dropdown_and_clicks_logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplicationOnboardingSteps.verify_user_is_logged_out_from_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1151621999,
  "status": "passed"
});
});