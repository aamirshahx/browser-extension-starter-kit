export interface Message {
  id: string;
  type: MessageType;
  source: string;
  payload: string;
}

export enum MessageType {
  Inititize,
  Loaded,
  Ping,
  DOMLoaded,
  Response,
  UncaughtError,
  DispatchWrapper,
  MessageInQueye,
}

export interface MessageResponse {
  id: string;
  error?: Error;
}

// export const message_source = 'extension_background';
