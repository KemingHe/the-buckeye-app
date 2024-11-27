import { describe, expect, it } from "vitest";

import { firebaseAdminConfig } from "./firebaseAdminConfig";

describe("firebaseAdminConfig", () => {
  it("returns a firebase admin config object with the correct properties", () => {
    expect(firebaseAdminConfig.projectId).toBeTypeOf("string");
    expect(firebaseAdminConfig.privateKey).toBeTypeOf("string");
    expect(firebaseAdminConfig.clientEmail).toBeTypeOf("string");
  });
});
