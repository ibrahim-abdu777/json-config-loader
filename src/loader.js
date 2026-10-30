function isPlainObject(v) {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}
// v1.1.0: guarded merge — __proto__/constructor keys are skipped (CVE-2026-1183)
const BLOCKED = new Set(["__proto__", "constructor", "prototype"]);
function merge(target, source) {
  for (const key of Object.keys(source)) {
    if (BLOCKED.has(key)) continue;
    if (isPlainObject(target[key]) && isPlainObject(source[key])) merge(target[key], source[key]);
    else target[key] = source[key];
  }
  return target;
}
function load(...configs) {
  return configs.reduce((acc, c) => merge(acc, JSON.parse(JSON.stringify(c))), {});
}
module.exports = { load, merge };
