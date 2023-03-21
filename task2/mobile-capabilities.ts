import data from "./data";

export {};
export const DEFAULT_PORT = 4723;
export const caps = {
    androidCaps: {
        appiumV2: true,
        'app': `${process.cwd()}/build/Monefy_Pro_v1.15.0.apk`,
        'platform': 'android',
        'device': 'emulator',
        'port': DEFAULT_PORT,
        'path': '/wd/hub',
        browser: '',
        desiredCapabilities: {
            'appPackage': data.packageName,
            'deviceName': process.env.DEVICE || 'Emulator',
            'platformName': process.env.PLATFORM || 'android',
            'platformVersion': process.env.OS_VERSION || '11.0',
            'automationName': process.env.ENGINE || 'UIAutomator2',
            'avd': process.env.UDID || 'Pixel_XL_API_30',
            'newCommandTimeout': 300000,
            'androidDeviceReadyTimeout': 300000,
            'androidInstallTimeout': 90000,
            'appWaitDuration': 300000,
            'autoGrantPermissions': true,
            'gpsEnabled': true,
            'isHeadless': false,
            'noReset': false,
            'noSign': true,
        }
    },
}
