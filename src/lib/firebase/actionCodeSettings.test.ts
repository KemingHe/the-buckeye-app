import { describe, expect, it } from "vitest";

import * as settings from "./actionCodeSettings";

describe("actionCodeSettings", () => {
  it("exports the correct firebase client action code settings object", () => {
    const actionCodeSettings = settings.actionCodeSettings;
    expect(actionCodeSettings.url).toBeTypeOf("string");
    expect(actionCodeSettings.handleCodeInApp).toBe(true);
  });

  it("exports the correct firebase client local storage key", () => {
    expect(settings.FB_CLIENT_LOCAL_STORAGE_KEY).toBe(
      "firebaseClientAuthEmail"
    );
  });
});
