import {Message} from '../communication/message';

export enum Browser {
  Chrome = 'Chrome',
  Edge = 'Edge',
  Firefox = 'Firefox'
}

export abstract class BrowserApi {
  abstract onMessage(message: Message): any;
}
