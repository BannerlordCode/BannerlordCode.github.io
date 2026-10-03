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
| `generate-section-indexes.mjs` | **Structural-only, marker-scoped** — see "Narrow exception: `_index.md` marker block" below. Retired *for body output*; re-authorised *only* for the mechanical child listing inside `<!-- BEGIN SECTION INDEX --> … <!-- END SECTION INDEX -->`, under the external guard |
| `nav-section-index.mjs` | **Structural-only, marker-scoped** — same scope, same guard. It MUST **call** `assertStructuralScope()`; it must not self-certify |
| `create-catalog-sections.mjs` | **Structural-only** — writes only `api/catalog/_index.md` and `api/catalog-campaign/_index.md`; it must not write class-page bodies |
| `ensure-sections.mjs` | **Structural-only** — writes only missing section `_index.md` files; it must not write class-page bodies |
| `cleanup-orphan-api.mjs` | **Destructive and fail-closed** — deletes API pages only with explicit local `BANNERLORD_ALLOW_CONTENT_CLEANUP=1` opt-in |

## Narrow exception: `_index.md` marker block

**This is a modification of the hard premise, not an explanation of it.** The
wording of the premise in `tools/lib/content-write-freeze.mjs` is unchanged by
this section; the exception is registered here, alongside it.

Two scripts are registered as structural-only, marker-scoped writers:
`generate-section-indexes.mjs` and `nav-section-index.mjs`.

| Field | Rule |
|---|---|
| **Allowed scope** | Only the mechanical child-page listing between `<!-- BEGIN SECTION INDEX -->` and `<!-- END SECTION INDEX -->`. Nothing else. |
| **Forbidden** | Any line outside the marker block — prose, mental-model sections, hand-written links. Any file that is not `_index.md`. Any deletion or rewrite of an existing hand-written link; additive-only. |
| **Guard** | `assertStructuralScope()`, supplied by lead-4 in `tools/lib/content-write-freeze.mjs` (lead-4's file; nobody on this line may edit it). The writer **calls** it. Non-zero exit on scope violation. A writer self-certifying its own compliance is not an acceptable guard. |
| **Ordering** | The guard must land first. Do not run the writer until lead-4's allowlist entry is on disk. |
| **Idempotence** | Two consecutive runs; the second produces zero changes, proven by `git diff`. |
| **Dry-run** | `--dry-run` report must be produced and read by a human before any write. The report must state `deleted_lines = 0` and `rewritten_lines = 0` explicitly. If either is non-zero, the run is forbidden. |

**Why this holds only for `_index.md`.** The test is *"does this content carry
author judgement?"*, not *"is this Markdown?"*. A bucket `_index.md` child
listing is mechanical: its correct content is uniquely determined by which files
exist in the directory, and two different authors would produce identical output.
The hard premise protects the opposite thing — prose, mental models, method
purposes and examples all carry author judgement, and those stay forbidden.

> Do not generalise this test. "Has no author judgement" is a property of the
> *content*, not a blanket exemption for a file type. Any future automation must
> answer that question first; "yes" means it is out of scope immediately.

**Relation to the earlier retirement.** `generate-section-indexes.mjs` was retired
by a bulk rename-freeze across 45 `content/`-writing scripts (see `git log
--follow`, commit `df15c2ff8e`). That freeze was an accident-guard, **not** a
finding that this script had corrupted `_index.md`. This registration is
therefore best read as the structural-only repair of that script.

**Duplicate markers.** Three files currently carry `BEGIN=2 / END=1`
(`content/v1.3.15/en/api/campaign-ext/_index.md`,
`content/v1.3.15/zh/api/campaign-ext/_index.md`,
`content/v1.4.5/zh/api/campaign-ext/_index.md`). Readers must tolerate this
deterministically (first BEGIN to first END) **and report it explicitly**;
writers must not delete the extra marker. Removal is a separate decision.

Navigation shape and link syntax for this exception live in
`tools/_NAV-ARCHITECTURE.md` §7. That file is third-tier documentation; this
table is the policy registration, and `tools/lib/content-write-freeze.mjs` is the
guard.

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
