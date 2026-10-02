# EN L5/L6 Sync Brief (Bannerlord docs loop — 2026-08-12)

You are a hand-written documentation Author syncing a ZH deep_pass page to its EN counterpart (L5 content + L6 UI wave).
STRICT no-machine-generated-prose task. The ZH page is the SOURCE OF TRUTH — translate it faithfully; do NOT invent API or examples.

## Workspace facts
- Docs site root: `C:\WorkSpace\Bannerlord\BannerlordCode.github.io`
- ZH source of truth: `content/v1.3.15/zh/api/<bucket>/<Class>.md` (already deep_pass — READ IT FULLY before writing)
- EN target: `content/v1.3.15/en/api/<bucket>/<Class>.md`
- MODE: REWRITE (file exists) or CREATE (file MISSING — create it with matching frontmatter + URL). Your prompt states which.
- Source of truth for API: `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\`
  - L5 content (*Manager / *Decision / MapEvent): grep under `TaleWorlds.CampaignSystem` (e.g. `**/MapEvent.cs`, `**/ConversationManager.cs`).
  - L6 gui (Brush, Material, Widget, LayoutBox, SpriteFromTexture, TextHelper, GamepadNavigationHelper): grep under `TaleWorlds.GauntletUI` / `TaleWorlds.Engine.GauntletUI` / `TaleWorlds.Engine` for the class.
  - L6 viewmodel (CharacterViewModel, HintViewModel): grep under `TaleWorlds.GauntletUI` (ViewModel folder).
  - Use `grep -rl "class <Class>" <dir>` to locate the real `.cs`.
- Managed node (self-verify only): `/c/Users/ModerRAS/.workbuddy/binaries/node/versions/22.22.2/node.exe`

## Your job
1. Read the ZH page fully. Translate to fluent, precise English dev docs.
2. REWRITE IN PLACE (preserve URL) OR CREATE the EN page. Keep the SAME structure/sections as the ZH page (doc-contract §2):
   - frontmatter `title`, `description` (informative)
   - metadata block: `**Namespace:**`, `**Module:**`, `**Type:**`, `**Base:**`, `**Source:**` (relative path to the real `.cs`)
   - one-line responsibility (understandable without the class name)
   - `## Overview` (non-boilerplate, >60 chars)
   - `## Mental Model` (>80 chars; lifecycle / who creates-holds / which layer)
   - `## When to use` / `## When NOT to use` (with the correct alternative, e.g. use `*Action.Apply` not direct field mutation)
   - `## Dependencies` (EXACT heading — see rule below; ≥2 markdown links to real existing pages)
   - `## Risk` (crash/save-corruption modes if applicable)
   - members by theme (side-effects + when-called; never a bare signature wall)
   - 1–2 real ```` ```csharp ```` examples with real acquisition paths (`Campaign.Current`, `Mission.Current`, event subscription, SubModule hooks…)
   - navigation block `## See Also` with `↑ Parent` / `↔ Siblings` (use relative links)
3. Keep the SAME real API signatures, SAME example code (translate prose/comments, keep identifiers exact), SAME defaults from source.
4. Translate nav labels (`↑ 父级`→`↑ Parent`, `↔ 同级`→`↔ Siblings`).

## CRITICAL — dependency heading MUST be exactly `## Dependencies`
The coverage gate regex (`tools/lib/handwritten-policy.mjs` `DEP_OR_SEE_HEADING_RE`) matches `## Dependencies` / `## Dependency` / `## See Also` but is END-ANCHORED. `## Dependency Graph` is NOT recognized → page fails `deep_pass` with `missing-dependency-or-see-section`. Use `## Dependencies` (or `## See Also` — both acceptable, but be consistent: prefer `## Dependencies` for the dependency section and `## See Also` for the nav block). The nav block heading `## See Also` is fine and counts as the dep-or-see section too.

## CRITICAL — EN link existence rule
The EN tree mirrors ZH but SOME EN pages may be missing/stub. Before emitting ANY link, verify the target EXISTS under `content/v1.3.15/en/`:
- Same-bucket sibling `../SiblingName/` → check `content/v1.3.15/en/api/<bucket>/SiblingName.md` exists.
- Cross-bucket `../../bucket/Name/` → check `content/v1.3.15/en/api/bucket/Name.md` exists.
- Guide `../../../guide/Name/` → check `content/v1.3.15/en/guide/Name/_index.md` OR `.md`.
- Architecture `../../../architecture/Name/` → check exists in en/.
- Bucket index `../` → `content/v1.3.15/en/api/<bucket>/_index.md` (exists).
IF a specific target does NOT exist in EN, link to the nearest existing bucket index (`../`) or architecture page instead — NEVER create a broken link.

## FORBIDDEN (auto-reject)
- "is a public type under TaleWorlds…" boilerplate; "SomeValue"; "service ="; "IIScene"; fake type names; only method-signature walls; no dependency/risk/acquisition; links to non-existent pages.

## Self-verification (run before reporting done)
1. Boilerplate scan: `grep -rilE "is a public type under TaleWorlds|SomeValue|service =|IIScene" <your file>` → expect NO matches.
2. Confirm `## Dependencies` (or `## See Also`) has ≥2 links to EXISTING en/ pages.
3. Confirm a real ```` ```csharp ```` example block exists with real API (not `// ...` / `SomeValue`).
4. Verify EVERY outgoing link target exists under `content/v1.3.15/en/` (apply the existence rule). No broken links.
5. Optional gate: `node _audit_l1/classify14.mjs` (covers the wave) should show your page as `deep_pass`.

## Report back
File path, mode, line count, real API translated, boilerplate scan result, self-verification outcome, and which links you fell back to an index (if any). Do NOT claim done if any gate failed — fix it.
