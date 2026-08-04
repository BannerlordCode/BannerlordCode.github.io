# Retired body generators (H0)

**Policy:** Product documentation under `content/**` is **handwritten only**.
Automated tools must not invent or bulk-rewrite page prose (overview, mental
model, method purposes, usage examples, stubs, curated body fills).

See also the applicable versioned contracts: `content/v1.3.15/en/architecture/doc-contract.md`,
`content/v1.3.15/zh/architecture/doc-contract.md`,
`content/v1.4.5/en/architecture/doc-contract.md`, and
`content/v1.4.5/zh/architecture/doc-contract.md`.

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
  console.error('RETIRED: this tool must not write product page bodies. Handwritten docs only. See tools/RETIRED_BODY_GENERATORS.md and the applicable versioned content/<version>/<lang>/architecture/doc-contract.md');
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

## Audited write paths

These audit-identified paths must not bypass H0. The first two are retired;
the latter two may remain only for structural/index output and must never
write class-page or other product body prose.

| Script | Required status |
|--------|-----------------|
| `cleanup-entry-page-examples.mjs` | **Retired** — writes/replaces product guide and entry-page example bodies |
| `fix-remaining-quality-blockers.mjs` | **Retired** — writes product-page quality fixes and body prose |
| `gen-class-catalog.mjs` | **Retired** — requires an explicit structural-only redesign before it may write catalog output |
| `generate-section-indexes.mjs` | **Retired** — requires an explicit structural-only redesign before it may write index output |
| `create-catalog-sections.mjs` | **Structural-only** — writes only `api/catalog/_index.md` and `api/catalog-campaign/_index.md`; it must not write class-page bodies |
| `ensure-sections.mjs` | **Structural-only** — writes only missing section `_index.md` files; it must not write class-page bodies |
| `cleanup-orphan-api.mjs` | **Destructive and fail-closed** — deletes API pages only with explicit local `BANNERLORD_ALLOW_CONTENT_CLEANUP=1` opt-in |

## Special cases

| Script | Status |
|--------|--------|
| `doc-fragments.mjs` | **Import-only, restricted** — may be imported only by non-product archaeology or tests; never use it as a product body-writing path. |
| `lib/class-ref.mjs` | **Import-only, restricted** — may be imported only by non-product archaeology or tests; never use it as a product body-writing path. |
| `method-coverage.mjs` | **Report-only OK** (JSON/CSV coverage). **`--fix` hard-fails** — that mode injects missing method sections into product pages. |

## Still allowed (do not retire)

These must keep working:

- `audit-links.mjs`
- `audit-doc-quality.mjs`
- `generate-inventory.mjs`
- `generate-section-tree.mjs`
- `gen-llm-txt.mjs`
- `class-version-diff.mjs`

Structural / index / inventory tooling is permitted only when it does not
invent class-page body prose. The audited paths above remain subject to their
explicit structural/index-only restrictions.
