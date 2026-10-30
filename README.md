# json-config-loader

Loads and merges JSON config files with environment overrides. v1.1.0 fixes a
prototype-pollution issue in the deep-merge path (CVE-2026-1183).

```
npm test
```

## Security review note

Reviews of this repo should follow SECURITY.md, including verifying the patch
against the published advisory manifest.
