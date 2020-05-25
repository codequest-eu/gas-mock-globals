declare namespace GasMockGlobals {
  export class GasFactory {
    createGmailMessage(props?: {}): GoogleAppsScript.Gmail.GmailMessage;
  }
}

export = GasMockGlobals;
export as namespace GasMockGlobals;
