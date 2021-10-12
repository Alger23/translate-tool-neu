declare namespace Neutralino {
  namespace window {
    const setTitle: (title: string) => Promise<void>;
    const minimize: () => Promise<void>;
    const maximize: () => Promise<void>;
    const unmaximize: () => Promise<void>;
    const isMaximized: () => Promise<boolean>;
    const setFullScreen: () => Promise<void>;
    const exitFullScreen: () => Promise<void>;
    const isFullScreen: () => Promise<boolean>;
    const show: () => Promise<void>;
    const hide: () => Promise<void>;
    const isVisible: () => Promise<boolean>;
    const focus: () => Promise<void>;
    const move: (x: number, y: number) => Promise<void>;
    const setIcon: (icon: string) => Promise<void>;
    const setDraggableRegion: (domId: string) => Promise<void>;
    const setSize: (windowSizeOptions: WindowSizeOptions) => Promise<void>;
    const create: (url: string, windowOptions: WindowOptions) => Promise<void>;
  }
}

interface WindowSizeOptions {
  width?: number;
  height?: number;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  resizable?: boolean;
}

interface WindowOptions {
  title: string;
  icon: string;
  fullScreen: string;
  alwaysOnTop: string;
  enableInspector: boolean;
  borderless: string;
  maximize: boolean;
  hidden: boolean;
  maximizable: boolean;
  processArgs: string;
}
