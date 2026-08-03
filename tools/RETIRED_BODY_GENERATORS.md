# Retired body generators (H0)

**Policy:** Product documentation under `content/**` is **handwritten only**.
Automated tools must not invent or bulk-rewrite page prose (overview, mental
model, method purposes, usage examples, stubs, curated body fills).

See also: `architecture/doc-contract.md` (when present).

## Emergency override (forbidden for product)

```text
BANNERLORD_ALLOW_RETIRED_BODY_GEN=1
```

This env var can bypass the hard-fail for local archaeology only. It is
**forbidden** for product builds, CI, and any commit that touches `content/**`.

## Hard-fail pattern

At the top of each retired CLI (after imports):

```js
// H0 RETIRED: body generation forbidden — handwritten docs only
// Emergency override BANNERLORD_ALLOW_RETIRED_BODY_GEN=1 is forbidden for product builds.
if (process.env.BANNERLORD_ALLOW_RETIRED_BODY_GEN !== '1') {
  console.error('RETIRED: this tool must not write product page bodies. Handwritten docs only. See tools/RETIRED_BODY_GENERATORS.md and architecture/doc-contract.md');
  process.exit(1);
}
```

## Retired scripts

| Script | Why retired |
|--------|-------------|
| `generate-class-docs.mjs` | Bulk-writes class reference pages from inventory/stubs |
| `gen-class-ref.mjs` | Generates zh/en class reference bodies from source |
| `batch-gen-stubs.mjs` | Batch driver for `gen-class-ref.mjs` |
| `enhance-stubs.mjs` | Rewrites stub files with extracted signatures/prose |
| `regenerate-method-purposes.mjs` | Bulk-rewrites method purpose lines |
| `normalize-method-purposes.mjs` | Bulk-normalizes generated method purposes |
| `populate-curated-content.mjs` | Auto-fills curated overview/mental/usage entries |
| `bulk-fix-mental-models.mjs` | Bulk-rewrites mental-model paragraphs |
| `improve-stub-quality.mjs` | Regenerates purposes and placeholder examples |
| `create-v145-stubs.mjs` | Creates version stub pages (body generation path) |
| `curate-class-docs.mjs` | Applies curated + heuristic body rewrites |
| `enrich-area-mental-models.mjs` | Replaces overview/mental-model boilerplate |
| `normalize-generated-examples.mjs` | Rewrites generated usage examples |
| `fix-boilerplate-purposes.mjs` | Bulk-rewrites boilerplate method purposes |
| `bulk-fix-stubs.mjs` | Bulk-rewrites acquisition stubs / examples |
| `bulk-fix-generic-method-purposes.mjs` | Bulk-rewrites remaining generic purposes |
| `gen-catalog-stubs.mjs` | Generates catalog-based stub pages |
| `fix-entry-examples.mjs` | Rewrites product guide and entry-page examples |
| `fix-placeholder-examples.mjs` | Rewrites product examples and removes placeholders |
| `fix-zh-execute-placeholder.mjs` | Rewrites generated method-purpose placeholders |
| `gen-actions-index.mjs` | Generates signature-derived Actions reference prose |
| `improve-base-overviews.mjs` | Rewrites base-class overview/mental models |
| `fix-purpose-warnings.mjs` | Second-pass purpose prose rewrites |
| `fix-generic-purpose-warnings.mjs` | Generic-purpose warning rewrites |
| `final-polish.mjs` | Auto-fills descriptions and mental-model prose |

## Special cases

| Script | Status |
|--------|--------|
| `doc-fragments.mjs` | **Export-only library** — not runnable as main. Comment-retired: must not gain a product write path. Still importable for reference/heuristics by non-product tooling. |
| `method-coverage.mjs` | **Report-only OK** (JSON/CSV coverage). **`--fix` hard-fails** — that mode injects missing method sections into product pages. |

## Still allowed (do not retire)

These must keep working:

- `audit-links.mjs`
- `audit-doc-quality.mjs`
- `generate-inventory.mjs`
- `generate-section-tree.mjs`
- `gen-llm-txt.mjs`
- `class-version-diff.mjs`

Structural / index / inventory tooling that does not invent class-page body
prose is out of scope for this retirement list.
