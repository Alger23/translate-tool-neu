declare namespace Neutralino {
  namespace os {
    const execCommand: (options: ExecCommandOptions) => Promise<CommandOutput>;
    const getEnvar: (options: GetEnvarOptions) => Promise<Envar>;
    const showDialogOpen: (options: DialogOpenOptions) => Promise<OpenDialogResponse>;
    const showDialogSave: (options: DislogSaveOptions) => Promise<OpenDialogResponse>;
    const showNotification: (options: NotificationOptions) => Promise<void>;
    const showMessageBox: (options: MessageBoxOptions) => Promise<MessageBoxResult>;
    const setTray: (options: TrayOptions) => Promise<void>;
  }
}

interface ExecCommandOptions {
  command: string;
}

interface CommandOutput {
  output: string;
}

interface GetEnvarOptions {
  key: string;
}

interface Envar {
  value: string;
}

interface DialogOpenOptions {
  title: string;
  isDirectoryMode: boolean;
  /**
   * @type {Array<string>} - ['js', 'ts', '*']
   */
  filter?: Array<string>;
}

interface DialogSaveOptions {
  title: string;
}

interface OpenDialogResponse {
  selectedEntry?: string;
  success?: boolean;
  error?: string;
}

interface NotificationOptions {
  summary: string;
  body: string;
}

interface MessageBoxOptions {
  title: string;
  content: string;
  type: 'WARN' | 'ERROR' | 'INFO' | 'QUESTION'
}

interface MessageBoxResult {
  yesButtonClicked: boolean;
}

interface TrayOptions {
  icon: string;
  menuItems: Array<{
    id: string;
    text: string;
    isDisabled: boolean;
    isChecked: boolean;
  }>
}
