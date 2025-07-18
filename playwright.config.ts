import type {PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
    
    //testMatch: ["test/"],
    use: {
        baseURL: "https://www.saucedemo.com/",
        headless: true,
        screenshot: "on",
        //video: "on",
        trace: "on",
        launchOptions: {
            // slowMo: 1000
        },
    },
    timeout: 10 * 1000,
    retries: 0,
    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsonReport.json"
    }], ["html", {
        open: "never"
    }]]
};

export default config;