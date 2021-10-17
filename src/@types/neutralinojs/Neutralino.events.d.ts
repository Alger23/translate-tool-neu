declare namespace Neutralino {
  namespace events {
    const on: (eventName: NativeEventType, handler: (event: CustomEvent) => void) => Promise<void>;
    const off: (eventName: NativeEventType, handler: (event: CustomEvent) => void) => Promise<void>;
    const dispatch: (eventName: string, data: any) => Promise<void>;
  }
}

type NativeEventType = 'trayMenuItemClicked' | 'windowClose';
