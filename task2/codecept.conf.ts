require('ts-node/register');
require('import-export');

const {caps} = require("./mobile-capabilities");

exports.config = {
  tests: './**/*Test.ts',
  output: './output',
  helpers: {
    Appium: caps.androidCaps,
  },
  include: {
    I: './steps_file.ts',
    androidHomeScreen: './android/screens/HomeScreen.ts'
  },
  mocha: {},
  name: 'monefy-codeceptjs',
  plugins: {}
}

