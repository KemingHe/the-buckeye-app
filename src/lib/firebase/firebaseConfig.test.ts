import { describe, expect, it } from "vitest";

import firebaseConfig from "./firebaseConfig";

describe("firebaseConfig", () => {
  it("returns a firebase config object with the correct properties", () => {
    expect(firebaseConfig.apiKey).toBeTypeOf("string");
    expect(firebaseConfig.authDomain).toBeTypeOf("string");
    expect(firebaseConfig.projectId).toBeTypeOf("string");
    expect(firebaseConfig.storageBucket).toBeTypeOf("string");
    expect(firebaseConfig.messagingSenderId).toBeTypeOf("string");
    expect(firebaseConfig.appId).toBeTypeOf("string");
  });
});
