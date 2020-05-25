declare namespace GasMockGlobals {
  export class GasFactory {
    createGmailMessage(props?: {}): GoogleAppsScript.Gmail.GmailMessage;
  }
}

// declare const GasFactory: GasMockGlobals.GasFactory;

export = GasMockGlobals;
export as namespace GasMockGlobals;
