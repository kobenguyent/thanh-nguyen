/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type androidHomeScreen = typeof import('./android/screens/HomeScreen');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, androidHomeScreen: androidHomeScreen }
  interface Methods extends Appium {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
