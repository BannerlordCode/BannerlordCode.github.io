# ZH Leaf Entity/Manager Author Brief (Bannerlord docs loop — L9 long-tail)

You are a **hand-written documentation Author** for the BannerlordCode.github.io (Zola) site.
This is a STRICT no-machine-generated-prose task: you MUST read real source + call sites and write genuine human-quality docs. Do NOT use any retired body-generator script.

## Workspace facts
- Docs site root: `C:\WorkSpace\Bannerlord\BannerlordCode.github.io`
- Source of truth (primary): `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\` — locate the real `.cs` via `grep -rl "public class <Class>" <bin dir>` (also try `public abstract class` / `public sealed class`). Cross-check `bannerlord-1.3.15`, `bannerlord-1.3.0` for version notes.
- Managed node (self-verify only): `/c/Users/ModerRAS/.workbuddy/binaries/node/versions/22.22.2/node.exe`
- Your target page EXISTS as a stub — **REWRITE IN PLACE** (preserve the URL). A frontmatter + metadata block may already be present; keep/improve it (fix the `description` if it says "自动生成类参考").

## Structural gold references (READ THESE FIRST)
- `content/v1.3.15/zh/api/campaign/Hero.md` (verified deep_pass entity page) — mirror SHAPE and DEPTH.
- `content/v1.3.15/zh/api/mission/Mission.md` (verified deep_pass mission-layer page) — also good shape reference.
- Acceptance contract: `content/v1.3.15/zh/architecture/doc-contract.md` (§2 single-page acceptance; §4 forbidden patterns).

## Per-page acceptance (doc-contract §2) — ALL required
1. Frontmatter: `title`, `description` (informative, NOT boilerplate like "X 的自动生成类参考").
2. Metadata block: Namespace / Module / Type / Base / 源文件路径 (relative path to the real `.cs` under `bannerlord-1.4.5/Bannerlord.Source/bin`).
3. 一句话职责 (understandable without the class name).
4. 心智模型: lifecycle, who creates/holds it, which layer (Foundation/Campaign/Mission/UI/Save). For entities: how it relates to `Campaign`/`MapEvent`/`Hero`/`MobileParty`. For managers: how it's obtained (e.g. `Campaign.Current.<X>` or a static accessor) and what it coordinates.
5. 何时用 / 何时不要用 — with the CORRECT alternative (e.g. use `*Action.Apply` not direct field mutation; read a manager, don't recreate it).
6. 依赖图 — heading MUST be EXACTLY `## 依赖图` (no `（可点击）` suffix, no `：...` suffix — the gate regex is end-anchored and will miss it). Clickable links to: upstream types, downstream systems, related Events/Behaviors/Actions/Models/Save points.
7. 风险段 (MUST fill if applicable): wrong lifecycle phase, stale references, Agent/object death, null when accessed before init, direct field mutation bypassing Actions/Models, save/recalc interactions.
8. 成员说明: each mod-relevant public member = purpose + side-effect + when called (group by theme). NO pure method-signature wall as the only body.
9. 最小真实示例 (1–2): real acquisition path (`Campaign.Current`, static accessor, event subscription, SubModule hook). Show real method calls with correct types (no `SomeValue`, no `service =`, no fake type names).
10. 导航块: `↑ 父级` (bucket `_index`: `../`), `↔ 同级` (a few real sibling pages in the SAME bucket), 相关类. Relative links; targets must EXIST.
11. English page mirrors the SAME understanding (deferred to a later EN sync wave — write ZH now).

## Link depth rules (LEAF page, served at `/v1.3.15/zh/api/<bucket>/<Type>/`)
- Same-bucket sibling: `../SiblingName/`
- Cross-bucket: `../../bucket/TypeName/`
- Architecture page: `../../../architecture/PageName/`
- Bucket index: `../`
- Guide page: `../../../guide/PageName/`
- NEVER `../api/...`, NEVER `./X` from a leaf (resolves into `<Page>/X`), NEVER absolute URLs.

## FORBIDDEN (auto-reject, doc-contract §4)
- 「阅读时先通过属性了解状态」/ 「`X` 是 TaleWorlds…下的公开类型」boilerplate
- Examples with `// ...`, `SomeValue`, `service = ...`, `IIScene` typo, wrong type names
- Only method-signature lists with no "何时调用"
- No dependency / no risk / no acquisition path
- Links to non-existent pages

## Self-verification (run before reporting done)
1. Boilerplate scan: `grep -rilE "阅读时先通过属性了解状态|是 TaleWorlds.*公开类型|SomeValue|service =|IIScene" <your file>` → NO matches.
2. Quality gate (CORRECT invocation — mirror your page OUTSIDE the docs site preserving `content/.../api/...` path under `_audit_l1/`, then pass a RELATIVE target from `tools/`): `node tools/audit-doc-quality.mjs _audit_l1/<your-mirror>` → 0 blockers (ignore non-blocking `method-missing-example` false-positives from prose `###` subsections).
3. Confirm deep_pass criteria: mental>80 chars, dep/see ≥2 links, real ` ```csharp ` example, overview>60 chars non-boilerplate (or long text + real mental), `**Namespace:**`+`**Type:**` metadata, zero stub patterns. Optionally `node _audit_l1/verify-deep.mjs <bucket>/<Class>` → `{"status":"deep_pass",...}`.
4. All outgoing links resolve to existing `.md`/`_index.md` (apply the depth rules above).

## Report back
State: file path, line count, source files read, the real API members you documented (with correct signatures), boilerplate scan result, and self-verification outcome. Do NOT claim done if any gate failed — fix it.
