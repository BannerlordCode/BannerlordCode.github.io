# ZH L4 Models Author Brief (Bannerlord docs loop)

You are a **hand-written documentation Author** for the BannerlordCode.github.io Zola site.
This is a STRICT no-machine-generated-prose task. You MUST read real source + call sites and write genuine human-quality docs.

## Workspace facts
- Docs site root: `C:\WorkSpace\Bannerlord\BannerlordCode.github.io`
- Source of truth (primary): `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.ComponentInterfaces\<Class>.cs` (and cross-check `bannerlord-1.3.15`, `bannerlord-1.3.0` for version notes)
- Managed node (for self-verification only): `/c/Users/ModerRAS/.workbuddy/binaries/node/versions/22.22.2/node.exe`
- ALL 8 target pages live in bucket `content/v1.3.15/zh/api/campaign-ext/` (rewrite the existing stub IN PLACE — preserve the URL).

## Structural gold references (READ THESE FIRST)
- Mirror the SHAPE and DEPTH of: `content/v1.3.15/zh/api/campaign-ext/PartySpeedModel.md` (a verified deep_pass L4 model page)
- Acceptance contract: `content/v1.3.15/zh/architecture/doc-contract.md` (§2 single-page acceptance; §4 forbidden patterns)

## Per-page acceptance (doc-contract §2) — ALL required
1. Frontmatter: `title`, `description` (description must be informative, not boilerplate).
2. Metadata block: Namespace / Module / Type / Base / 源文件路径 (absolute source path on this machine).
3. 一句话职责 (understandable without the class name).
4. 心智模型: lifecycle, who creates/holds it, which layer (Foundation/Campaign/Mission/UI/Save). These `*Model` classes are registered in `GameModels` (registered via `CampaignGameStarter`/`DefaultModels`) and accessed through `Campaign.Current.Models.<Name>` or `Campaign.Current.Models.GetModel<T>()`.
5. 何时用 / 何时不要用 — with the CORRECT alternative (e.g. read a model to compute a value; do NOT mutate model fields expecting persistence; do NOT call model tick math manually outside the daily tick).
6. 依赖图 — heading MUST be EXACTLY `## 依赖图` (no `（可点击）` suffix — it breaks the gate regex). Clickable links to: upstream types (Settlement/Town/Village, MobileParty, Clan, Campaign), downstream systems (daily tick, economy/loyalty panels), related Events/Behaviors/Actions/Models/Save points.
7. 风险段 (MUST fill if applicable): daily-tick phase timing, model swap (replacing via `GameModels`), null model when accessed before registration, mutating computed values, save/recalc interactions, UI reading stale values.
8. 成员说明: each mod-relevant public member = purpose + side-effect + when called (group by theme — e.g. 计算类 / 配置类). NO pure method-signature wall as the only body.
9. 最小真实示例 (1–2): real acquisition path — `Campaign.Current.Models.GetModel<XModel>()` or `Campaign.Current.Models.<Name>`; show a real `Calculate*`/`Get*` call with correct types (no `SomeValue`, no `service =`, no fake type names).
10. 导航块: `↑ 父级` (the bucket `_index`: `../`), `↔ 同级` (a few sibling real model pages in `../`), 相关类. Links must be RELATIVE and target EXISTING pages.
11. English page mirrors the SAME understanding (deferred to a later EN sync wave — but write ZH now; EN will be synced later).

## Link depth rules (campaign-ext LEAF page, served at `/v1.3.15/zh/api/campaign-ext/<Type>/`)
- Same-bucket sibling: `../SiblingName/`
- Cross-bucket: `../../bucket/TypeName/`
- Architecture page: `../../../architecture/PageName/`
- Bucket index: `../`
- Guide page: `../../../guide/PageName/`
- NEVER `../api/...` or absolute URLs.

## FORBIDDEN (auto-reject, doc-contract §4)
- 「阅读时先通过属性了解状态」/ 「`X` 是 TaleWorlds…下的公开类型」boilerplate
- Examples with `// ...`, `SomeValue`, `service = ...`, `IIScene` typo, wrong type names
- Only method-signature lists with no "何时调用"
- No dependency / no risk / no acquisition path
- Links to non-existent pages

## Self-verification (run before reporting done)
1. Boilerplate scan: `grep -rilE "阅读时先通过属性了解状态|是 TaleWorlds.*公开类型|SomeValue|service =|IIScene" <your file>` → expect NO matches.
2. Quality gate (CORRECT invocation — mirror your page OUTSIDE the docs site preserving `content/.../api/...` path, then pass a RELATIVE target from `tools/`):
   `node tools/audit-doc-quality.mjs _audit_l1/<your-mirror>` → expect **0 blockers** (ignore non-blocking `method-missing-example` false-positives from prose `###` subsections).
3. Confirm your page now satisfies deep_pass criteria (mental>80 chars, dep/see ≥2 links, real ```` ```csharp ```` example, overview>60 chars non-boilerplate, `**Namespace:**`+`**Type:**` metadata, zero stub patterns).
4. All outgoing links resolve to existing `.md`/`_index.md` (apply the depth rules above).

## Report back
State: file path, line count, source files read, the real API methods you documented (with correct signatures), boilerplate scan result, and self-verification outcome. Do NOT claim done if any gate failed — fix it.
