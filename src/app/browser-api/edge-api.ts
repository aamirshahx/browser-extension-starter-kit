import {BrowserApi} from './browser-api';
import {Message} from '../communication/message';

export class EdgeApi extends BrowserApi {
  constructor() {
    super();
    console.log('init edge api');
  }

  onMessage(message: Message): any {
    console.log(message.payload);
  }
}
