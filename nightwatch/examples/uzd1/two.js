describe('second example', function() {

  it('scenario two', function(browser) {
    const page = browser.page.demo();
    const facility = 'Hongkong CURA Healthcare Center';
    const date = '01/01/2026';
    const comment = 'Appointment in 2026';
    const program = 'Medicare';
    
    page
      .navigate()
      .waitForElementVisible('@apptBtn')
      .click('@apptBtn');

    page.loginWithDemoAccount();

    page
      .waitForElementVisible('@facilityComb')
      .setValue('@facilityComb', facility)
      .click('@medicareRadio')
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
      .assert.textEquals('@readmisConf', 'No')
      .assert.textEquals('@dateConf', date)
      .assert.textEquals('@commentConf', comment)
      .assert.textEquals('@programConf', program);


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
