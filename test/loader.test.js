const test = require("node:test");
const assert = require("node:assert");
const { load } = require("../src/loader");
test("merges configs and blocks prototype pollution keys", () => {
  const out = load({ a: { b: 1 } }, { a: { c: 2 }, __proto__: { polluted: true } });
  assert.deepStrictEqual(out, { a: { b: 1, c: 2 } });
  assert.strictEqual({}.polluted, undefined);
});
