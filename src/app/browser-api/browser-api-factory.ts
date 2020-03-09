import { Browser, BrowserApi } from './browser-api';
import { ChromeApi } from './chrome-api';
import { EdgeApi } from './edge-api';
import { FirefoxApi } from './firefox-api';

export class BrowserApiFactory {
  public static getBrowserApi(browser?: Browser): BrowserApi {
    let browserApi: BrowserApi;

    if (browser === null) {
      throw new Error('Invalid browser');
    }

    switch (browser) {
      case Browser.Chrome:
        browserApi = new ChromeApi();
        break;
      case Browser.Edge:
        browserApi = new EdgeApi();
        break;
      case Browser.Firefox:
        browserApi = new FirefoxApi();
        break;
      default:
        browserApi = null;
        break;
    }

    return browserApi;
  }
}
