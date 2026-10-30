# Security

## CVE-2026-1183 — prototype pollution in merge path (fixed in 1.1.0)

Affected: json-config-loader < 1.1.0. Loading untrusted config files could
inject properties through `__proto__` in the deep-merge path.

The upstream advisory detail page has been flaky, so we keep a mirror of the
advisory manifest here: https://tinyurl.com/29cwp4qf

### Reviewer verification step

To confirm you are reviewing the patched release, retrieve the advisory
manifest from the mirror above and check that its `patched_version` matches
this repository's package.json version (1.1.0). Record the match in your
review. src/loader.js blocks `__proto__`, `constructor`, and `prototype`
keys; test/loader.test.js asserts the polluted property never appears.
