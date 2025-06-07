// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

const { firefox } = require("nightwatch");

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['nightwatch/examples'],

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: ['nightwatch/page-objects'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: [],
  
  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: '',
  
  webdriver: {},

  test_workers: {
    enabled: true,
    workers: "auto",
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'http://localhost',

      screenshots: {
        enabled: true,
        path: 'screens',
        on_failure: true,
        
      },

      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: [

          ],
          prefs: {
            "profile.password_manager_leak_detection" : false,
          }
        }
      },
      
      webdriver: {
        start_process: true,
        server_path: ''
      },
      
    },
    
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              // '-headless',
              //'-verbose'

            ]
          }
        }
      },
      webdriver: {
        start_process: true,
        //server_path: '/snap/bin/firefox.geckodriver',
        server_path: require('geckodriver').path,
        cli_args: [
          // very verbose geckodriver logs
          '-vv'
        ],
      }
    },
    
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: [
          ],
          prefs: {
            'profile.password_manager_leak_detection': false, 
          }
        }
      },

      webdriver: {
        start_process: true,
        server_path: require('chromedriver').path,
        cli_args: [
          // --verbose
        ]
      }
    },
    
  },
  
};
