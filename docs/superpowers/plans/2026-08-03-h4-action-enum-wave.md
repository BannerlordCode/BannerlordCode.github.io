# H4 Action Detail Enum Wave

> **For agentic workers:** This is a documentation-only wave. Read the versioned doc contract before editing content. Do not use body generators or signature-to-prose tools.

**Goal:** Replace the eight remaining v1.3.15 Action detail/enum stub pairs with source-backed Chinese and English pages that explain their event contract and safe timing.

**Architecture:** Each enum page remains at its existing URL and is written as a focused contract page. The page connects the enum to its owning Action, the public event that carries it, the downstream behavior/listener boundary, and the actual `CampaignEvents` acquisition path. The 1.4.5 source is the usage authority; the 1.3.15 source supplies the versioned enum declaration and any compatibility note.

**Tech Stack:** Markdown, Zola routes, Node.js handwritten classifier and link/quality audits.

## Global Constraints

- All body prose is handwritten after reading source and call sites.
- Do not use `generate-class-docs`, `gen-class-ref`, `batch-gen-stubs`, `doc-fragments`, or any signature-to-prose writer.
- Every page has informative frontmatter, metadata, a mental model, timing guidance, dependencies, risks, a real C# listener/acquisition example, and reciprocal navigation.
- Preserve existing URLs and use route-relative links that pass `node tools/audit-links.mjs`.
- Keep Chinese and English semantically parallel.
- R1 remains incomplete while the coverage gap is nonzero; no completion claim.

## Write Set

The only content files in this wave are the following eight bilingual pairs:

- `ChangeKingdomActionDetail.md`
- `ChangeOwnerOfSettlementDetail.md`
- `ChangeRelationDetail.md`
- `EndCaptivityDetail.md`
- `MakePeaceDetail.md`
- `ShipOwnerChangeDetail.md`
- `SiegeAftermath.md` (nested `SiegeAftermathAction.SiegeAftermath` enum)
- `TeleportationDetail.md`

All files live under `content/v1.3.15/{zh,en}/api/campaign-ext/`.

## Acceptance and QA

1. Each of the 16 files has no generated-description or placeholder pattern and classifies as `deep_pass`.
2. Every enum value is named with its owning Action and the public `Apply*` or event path that selects/carries it.
3. Every page names at least one real `CampaignEvents` event signature and one downstream behavior or dispatcher consumer.
4. Every example obtains state from a real Campaign/settlement/party/event path; no `SomeValue`, `service = ...`, or empty ellipsis example.
5. `node tools/audit-links.mjs` reports `BROKEN_LINKS=0`.
6. Refresh v1.3.15 zh/en handwritten and R1 reports serially; verify the eight types are no longer stub/gap evidence where identity matching permits it.
7. Run `npm test`, `npm run audit:quality`, `npm run audit:body-writers`, `npm run audit:navigation`, `npm run audit:section-tree`, and `npm run audit:page-navigation`.
8. Run `zola build` separately and report its actual result; the R: mount has previously failed Zola canonical-path resolution, so do not infer success from other gates.
