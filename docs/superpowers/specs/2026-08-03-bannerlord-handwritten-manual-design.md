# Bannerlord Handwritten Manual Design

**Goal:** Make BannerlordCode.github.io a task-oriented, source-backed developer manual whose business documentation is handwritten, navigable as a reciprocal tree, and explicit about lifecycle, dependencies, and crash/save boundaries.

## Scope

The authoritative semantic source is `bannerlord-1.4.5/Bannerlord.Source`; `bannerlord-1.3.15` supplies the core comparison baseline and `bannerlord-1.3.0` is used only where its source is present. The site keeps one main conceptual manual with version notes instead of cloning a stub forest for every version. Chinese is the primary authored language and English mirrors the same understanding.

The program is intentionally dependency-ordered:

1. H0 establishes the handwritten contract, inventory/coverage reports, retired body-generation guards, and repeatable quality gates.
2. H1 establishes task-first module indexes, reciprocal tree navigation, the developer roadmap, and crash-boundary topics.
3. H2 authoritatively documents the L0-L1 runtime hubs before expanding into entities, Actions, Models, content, UI, module examples, and the long tail.

The current implementation cycle delivers the missing H0 tooling contracts, synchronized structural data, and a manually authored L0-L1 seed set. It does not claim R1 completion until the H3-H10 waves and the final evidence package pass.

## Architecture

The Zola content tree remains the URL source of truth. `data/section-tree.json` records discovered section routes; `data/navigation.json` records curated labels, groups, parent links, and children; `data/page-navigation.json` records leaf parent/previous/next/related routes. Templates consume these artifacts but do not invent routes.

The audit layer is split by responsibility:

- `tools/lib/handwritten-policy.mjs` classifies a page as a deep handwritten page, a family-entry page, a noise page, or a stub and extracts declared type identities.
- `tools/lib/report-meta.mjs` makes generated JSON reports reproducible and supports `--check` without rewriting canonical files.
- `tools/audit-navigation.mjs` verifies section-tree counts and reciprocal parent/child edges.
- `tools/generate-page-navigation.mjs` deterministically emits leaf parent/previous/next data and supports a read-only stale check.
- The quality and link auditors remain read-only gates. Retired body generators fail closed and never become a product path.

Business pages are authored from source signatures plus real call sites. Every deep page includes the contract fields: informative frontmatter, metadata, duty, mental model, when/when-not guidance, clickable dependencies, risk boundaries, key member timing and side effects, real acquisition examples, and parent/sibling/related navigation. Family pages must explain the shared contract and give a handwritten purpose and timing for every covered type.

## Data Flow

```text
source trees -> generate-inventory (JSON only)
content pages -> handwritten-policy -> coverage report
content sections -> section-tree -> navigation/page-navigation audits
Markdown + templates -> zola build -> rendered link audit
```

No arrow in this flow writes prose into `content/**`.

## Failure Handling

The coverage report must fail when its shared policy module is absent, when a scoped output is not explicit, or when `--require-complete` still sees gaps. Navigation gates fail on missing route nodes, asymmetric parent/child edges, stale section counts, or stale page-navigation output. Quality gates reject formulaic purposes, fake examples, missing acquisition paths, and contradictory placeholder language. A nonzero audit is reported as a concrete gap, never converted into a completion claim.

## Verification Contract

The H0/H1/H2 cycle is successful only when all of these are freshly observed:

- `npm run test:tools` exits 0.
- `npm run audit:links` prints `BROKEN_LINKS=0`.
- `npm run audit:quality` prints `Blockers: 0`.
- `npm run audit:coverage` emits a machine-readable report and a nonzero gap count is treated as expected until later waves, not hidden.
- `npm run audit:navigation`, `npm run audit:section-tree`, and `npm run audit:page-navigation` exit 0.
- `zola build` exits 0 when the local Zola binary can resolve the repository path.
- Manual scenario review can answer the five roadmap questions using only the authored pages and links.

Known environmental constraint for this workspace: the available Zola binary currently fails to canonicalize the `R:` root, so the build command must be retried from a drive-local or supported path before a build-pass claim is made.

