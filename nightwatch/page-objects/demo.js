const pageCommands = {
  loginWithDemoAccount: function () {
    return this.waitForElementVisible('@usernameField')
      .setValue('@usernameField','John Doe')
      .waitForElementVisible('@passwordField')
      .setValue('@passwordField', 'ThisIsNotAPassword')
      .waitForElementVisible('@loginBtn')
      .click('@loginBtn');
  },
  logout: function () {
    return this.waitForElementVisible('@sideMenu')
      .click('@sideMenu')
      .waitForElementVisible('@logoutBtn')
      .click('@logoutBtn')
      .waitForElementNotPresent('@summaryView', 5000);
  }
};

module.exports = {
  url: 'https://katalon-demo-cura.herokuapp.com',
  commands: [pageCommands],
  elements: {
    apptBtn: {
      selector: '#btn-make-appointment'
    },
    usernameField: {
      selector: '#txt-username'
    },
    passwordField: {
      selector: '#txt-password'
    },
    loginBtn: {
      selector: '#btn-login'
    },
    facilityComb: {
      selector: '#combo_facility'
    },
    readmisChk: {
      selector: '#chk_hospotal_readmission'
    },
    medicaidRadio: {
      selector: '#radio_program_medicaid'
    },
    medicareRadio: {
      selector: '#radio_program_medicare'
    },
    noneRadio: {
      selector: '#radio_program_none'
    },
    calendarText: {
      selector: '#txt_visit_date'
    },
    commentText: {
      selector: '#txt_comment',
    },
    bookBtn: {
      selector: '#btn-book-appointment',
    },
    summaryView: {
      selector: '#summary',
    },
    facilityConf: {
      selector: '#facility',
    },
    readmisConf: {
      selector: '#hospital_readmission',
    },
    programConf: {
      selector: '#program',
    },
    dateConf: {
      selector: '#visit_date',
    },
    commentConf: {
      selector: '#comment',
    },
    sideMenu: {
      selector: '#menu-toggle',
    },
    logoutBtn: {
      selector: 'a[href$="logout"]'
    },
  }
};
