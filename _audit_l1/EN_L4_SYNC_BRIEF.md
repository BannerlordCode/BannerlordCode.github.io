# EN L4 Models Sync Brief (Bannerlord docs loop)

You are a hand-written documentation Author syncing a ZH deep_pass page to its EN counterpart.
This is a STRICT no-machine-generated-prose task. The ZH page is the SOURCE OF TRUTH — translate it faithfully; do NOT invent API or examples.

## Workspace facts
- Docs site root: `C:\WorkSpace\Bannerlord\BannerlordCode.github.io`
- ZH source of truth: `content/v1.3.15/zh/api/campaign-ext/<Class>.md` (already deep_pass — read it)
- EN target (REWRITE IN PLACE, preserve URL): `content/v1.3.15/en/api/campaign-ext/<Class>.md`
- Source of truth for API: `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.ComponentInterfaces\<Class>.cs`
- Managed node (self-verify only): `/c/Users/ModerRAS/.workbuddy/binaries/node/versions/22.22.2/node.exe`

## Your job
1. Read the ZH page fully. Translate to fluent, precise English dev docs.
2. Rewrite the EN page IN PLACE preserving URL. Keep the SAME structure/sections as the ZH page (doc-contract §2: frontmatter title/description, metadata Namespace/Module/Type/Base/源文件路径, one-line responsibility, mental model, when-to-use/when-not, dependency section (ZH `## 依赖图` → EN `## Dependencies`, EXACT heading — see line 17), risk section, members by theme with side-effects+when-called, 1–2 real ```` ```csharp ```` examples, navigation block).
3. Keep the SAME real API signatures, SAME real example code (translate comments/prose, keep identifiers exact), SAME default values from source.
4. Translate headings/section labels to English (e.g. `↑ 父级` → `↑ Parent`, `↔ 同级` → `↔ Siblings`). IMPORTANT: the dependency section heading MUST be exactly `## Dependencies` (NOT `## Dependency Graph`). The coverage gate regex (`tools/lib/handwritten-policy.mjs` `DEP_OR_SEE_HEADING_RE`) matches `## Dependencies` / `## Dependency` / `## See Also` but is END-ANCHORED, so `## Dependency Graph` is NOT recognized → page fails `deep_pass` with `missing-dependency-or-see-section`. Use `## Dependencies`.

## CRITICAL — EN link existence rule
The EN tree mirrors ZH structure but SOME EN pages may be missing/stub. Before emitting ANY link, verify the target EXISTS under `content/v1.3.15/en/`:
- Same-bucket sibling `../SiblingName/` → check `content/v1.3.15/en/api/campaign-ext/SiblingName.md` exists.
- Cross-bucket `../../bucket/Name/` → check `content/v1.3.15/en/api/bucket/Name.md` exists.
- Guide `../../../guide/Name/` → check `content/v1.3.15/en/guide/Name/_index.md` OR `.md` exists. EN guide pages are often missing.
- Architecture `../../../architecture/Name/` → check exists in en/.
- Bucket index `../` → `content/v1.3.15/en/api/campaign-ext/_index.md` (exists).
IF a specific target does NOT exist in EN, link to the nearest existing bucket index (`../`) or architecture page instead — NEVER create a broken link. Prefer linking to existing EN pages; only fall back to index when the page is absent.

## FORBIDDEN (auto-reject)
- "is a public type under TaleWorlds…" boilerplate; "SomeValue"; "service ="; "IIScene"; fake type names; only method-signature walls; no dependency/risk/acquisition; links to non-existent pages.

## Self-verification (run before reporting done)
1. Boilerplate scan: `grep -rilE "is a public type under TaleWorlds|SomeValue|service =|IIScene" <your file>` → expect NO matches.
2. Quality gate (CORRECT invocation — mirror your page OUTSIDE the docs site preserving `content/.../api/...` path, then pass a RELATIVE target from `tools/`):
   `node tools/audit-doc-quality.mjs _audit_l1/<your-mirror>` → expect **0 blockers**.
3. Confirm deep_pass criteria met (mental>80 chars, dep/see ≥2 links, real ```` ```csharp ```` example, overview>60 non-boilerplate, `**Namespace:**`+`**Type:**`, zero stub patterns).
4. Verify EVERY outgoing link target exists under `content/v1.3.15/en/` (apply the existence rule above). No broken links.

## Report back
File path, line count, real API translated, boilerplate scan result, self-verification outcome, and which links you had to fall back to an index (if any). Do NOT claim done if any gate failed — fix it.
