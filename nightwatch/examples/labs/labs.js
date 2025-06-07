module.exports = {
  before : function(browser) {
    console.log("starting tests");
  },
  
  after : function(browser) {
    console.log("tests complete");
    browser.end();
  },
  
  beforeEach : function(browser) {
    browser.window.maximize();
  },
  
  afterEach : function(browser) {
    console.log("test done, moving on");
  },

  'tdlschool' : function (browser) {
    browser.url('https://tdlschool.com/');
    browser
      .waitForElementVisible('input[name="email"]')
      .setValue('input[name="email"]','abcd@efgh')
      .waitForElementVisible('button[type="submit"]')
      .click('button[type="submit"]')
      .waitForElementVisible('.input__error');
    browser
      .assert.textContains('.input__error', 'email');
  },
  
  'github' : function (browser) {
    browser.url('https://github.com/');
    browser
      .waitForElementPresent('.HeaderMenu-link--sign-in')
      .click('.HeaderMenu-link--sign-in')
      .waitForElementVisible('#login_field')
      .setValue('#login_field','abcd@efgh')
      .waitForElementVisible('#password')
      .setValue('#password','abcd@efgh')
      .waitForElementVisible('[name="commit"]')
      .click('[name="commit"]')
      .waitForElementVisible('div[role="alert"]');

    browser
      .assert.textContains('div[role="alert"]', 'Incorrect username or password');
      
  },
  'step one' : function (browser) {
    browser.url('https://yahoo.com/');
    browser.isVisible({selector:'.consent-form', suppressNotFoundErrors: true},  res => {
      
      if(res.value === true) {
        browser.waitForElementVisible('button[name="reject"]');
        browser.click('button[name="reject"]');
        return;
      } 
     })

    browser
      .waitForElementVisible('#login-container')
      .click('#login-container')
      .waitForElementVisible('#login-body');

    browser
      .waitForElementVisible('#login-username')
      .sendKeys('#login-username', ['notEmail.com', browser.Keys.ENTER])
      .waitForElementVisible('[data-error]');

    browser
      .assert.textContains('[data-error]', 'email');

  },
  
  'step two' : function (browser) {
    browser.url('https://yahoo.com/');
    browser.isVisible({selector:'.consent-form', suppressNotFoundErrors: true}, res => {
      if(res.value === true) {
        browser.waitForElementVisible('button[name="reject"]');
        browser.click('button[name="reject"]');
        return;
      } 
     })

    browser
      .waitForElementVisible('#login-container')
      .click('#login-container')
      .waitForElementVisible('#login-body');

    browser
      .waitForElementVisible('#createacc')
      .click('#createacc')
      .waitForElementVisible('#usernamereg-firstName')
      .setValue('#usernamereg-firstName','Bob')
      .waitForElementVisible('#usernamereg-userId')
      .setValue('#usernamereg-userId','bob4324324234')
      .waitForElementVisible('#usernamereg-password')
      .setValue('#usernamereg-password','efdfds4324324234')
      .waitForElementVisible('#usernamereg-month')
      .setValue('#usernamereg-month','January')
      .waitForElementVisible('#usernamereg-day')
      .setValue('#usernamereg-day','3')
      .waitForElementVisible('#usernamereg-year')
      .setValue('#usernamereg-year','1983')
      .waitForElementVisible('.agree-checkbox-wrap')
      .click('.agree-checkbox-wrap')
      .waitForElementVisible('#reg-submit-button')
      .click('#reg-submit-button');

    browser
      .waitForElementVisible('[data-error]')
      .assert.textContains('[data-error]', 'last name');
  }
};
