interface EhAPI {
  set_account: (account: string, domain: string) => void;
  execute: (command: string) => void;
  render_form: (formId: string) => void;
}

declare global {
  interface Window {
    EhAPI: EhAPI;
  }
}