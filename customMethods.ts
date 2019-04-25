import chai from "chai";

declare global {
  namespace Chai {
    interface Assertion {
      trimmed: Assertion
    }
  }
}

export function registerCustomMethods() {
  function trimmedMethod() {
    // do nothing
  }

  function trimmedChainableMethod() {
    // @ts-ignore
    this._obj = this._obj.trim();
  }

  (chai as any).Assertion.addChainableMethod("trimmed", trimmedMethod, trimmedChainableMethod);
}
