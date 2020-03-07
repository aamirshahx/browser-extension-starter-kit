import {BrowserApi} from './browser-api';
import {Message} from '../communication/message';

export class ChromeApi extends BrowserApi {
  constructor() {
    super();
    console.log('init chrome api');
  }
  onMessage(message: Message): any {
    console.log(message.payload);
  }
}
