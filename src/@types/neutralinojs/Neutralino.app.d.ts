declare namespace Neutralino {
  const init: () => Promise<void>;

  namespace app {
    const exit: (exitCode?: number) => Promise<void>;
    const killProcess: () => Promise<void>;
    const keepAlive: () => Promise<void>;
    const getConfig: () => Promise<any>;
    const open: (options: OpenActionOptions) => Promise<void>;
  }
}

interface OpenActionOptions {
  url: string;
}
