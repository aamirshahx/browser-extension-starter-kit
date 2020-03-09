import { BrowserApiFactory } from './browser-api/browser-api-factory';
import { Browser, BrowserApi, detectBrowser } from './browser-api/browser-api';

const scriptInjection = new Set<string>();

const inject = (fn: (element: HTMLScriptElement) => void) => {
  const script = document.createElement('script');
  fn(script);
  document.documentElement.appendChild(script);
  script.parentNode.removeChild(script);
};

const injectScript = (path: string) => {
  if (scriptInjection.has(path)) {
    return;
  }

  const browser: Browser = detectBrowser();
  const browserApi: BrowserApi = BrowserApiFactory.getBrowserApi(browser);
  inject(script => script.src = browserApi.getURL(path));
  scriptInjection.add(path);
};

console.log('Hello World');
if (document instanceof HTMLDocument) {
  injectScript('//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js');
  // send message to background to load extension
  // inject backend files
  // inject content files
}
