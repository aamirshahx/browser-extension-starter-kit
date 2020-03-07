import {BrowserApi} from './browser-api';
import {Message} from '../communication/message';

export class FirefoxApi extends BrowserApi {
  constructor() {
    super();
    console.log('init firefox api');
  }

  onMessage(message: Message): any {
    console.log(message.payload);
  }
}
