describe('first example', function() {

  it('scenario one', function(browser) {
    const page = browser.page.demo();
    const facility = 'Seoul CURA Healthcare Center';
    const program = 'Medicaid';
    const date = '02/06/2025';
    const comment = 'This is a test appointment';
    
    page
      .navigate()
      .waitForElementVisible('@apptBtn')
      .click('@apptBtn');

    page.loginWithDemoAccount();

    page
      .waitForElementVisible('@facilityComb')
      .setValue('@facilityComb', facility)
      .waitForElementVisible('@readmisChk')
      .click('@readmisChk')
      .click('@medicaidRadio')
      .waitForElementVisible('@calendarText')
      .sendKeys('@calendarText', date)
      .waitForElementVisible('@commentText')
      .sendKeys('@commentText', comment)
      .waitForElementVisible('@bookBtn')
      .click('@bookBtn')
      .waitForElementVisible('@summaryView')
      .waitForElementVisible('@facilityConf');

    page
      .assert.textEquals('@facilityConf', facility)
      .assert.textEquals('@readmisConf', 'Yes')
      .assert.textEquals('@dateConf', date)
      .assert.textEquals('@commentConf', comment)
      .assert.textEquals('@programConf', program);


    page.logout();

    page
      .waitForElementNotPresent('@summaryView');

    page.expect.element('body').text.to.not.contain(facility);
    page.expect.element('body').text.to.not.contain(program);
    page.expect.element('body').text.to.not.contain(date);
    page.expect.element('body').text.to.not.contain(comment);

    browser.end();

  }); 
});
