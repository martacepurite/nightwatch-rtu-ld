describe('third example', function() {

  it('scenario three', function(browser) {
    const page = browser.page.demo();
    const facility = 'Tokyo CURA Healthcare Center';
    const date = '15/07/2025';
    const comment = 'Appointment in July';
    const program = 'None';
    
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
      .waitForElementVisible('@noneRadio')
      .click('@noneRadio')
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
      .assert.textEquals('@commentConf', comment);


    page.logout();

    page
      .waitForElementNotPresent('@summaryView');

    page.expect.element('body').text.to.not.contain(facility);
    page.expect.element('body').text.to.not.contain(date);
    page.expect.element('body').text.to.not.contain(comment);
    page.expect.element('body').text.to.not.contain(program);

    browser.end();

  }); 
});
