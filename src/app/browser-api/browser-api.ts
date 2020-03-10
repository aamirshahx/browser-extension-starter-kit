import { Message } from '../../communication/message';
import { browser } from 'webextension-polyfill-ts';

export enum Browser {
  Chrome = 'chrome',
  Edge = 'edge',
  Firefox = 'firefox'
}

export function detectBrowser(): Browser {
  const ua: string = navigator.userAgent.toLowerCase();
  if (ua.includes('edg/')) {
    return Browser.Edge;
  } else if (ua.includes('firefox/')) {
    return Browser.Firefox;
  } else if (ua.includes('chrome/')) {
    return Browser.Chrome;
  }
}

export abstract class BrowserApi {
  getURL(path: string): string {
    return browser.runtime.getURL(path);
  }

  abstract onMessage(message: Message): any;
}
