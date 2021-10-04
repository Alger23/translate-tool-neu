declare namespace Neutralino {
  namespace debug {
    const log: ({type: LogType, message: string}) => Promise<void>;
  }
}

type LogType = 'INFO' | 'WARN' | 'ERROR';
