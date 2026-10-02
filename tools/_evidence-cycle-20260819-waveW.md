# Evidence — cycle-W (wave W batch 1, save-system core object-graph)

Date: 2026-08-19
Scope: Continue handwritten save-system docs (driver H0→H10, wave W).
Batch: 6 core object-graph pages rewritten IN PLACE from stub → deep_pass.

## Before / After (save-system, content/v1.3.15/zh/api/save-system)
| Metric | Before (cycle-V tail) | After (cycle-W) |
|--------|-----------------------|-----------------|
| deep_pass | 11 | 17 (+6) |
| stub | 95 | 89 (-6) |
| other | 2 | 2 (unchanged) |
| TOTAL | 108 | 108 |

## Pages rewritten (all deep_pass)
| Page | dep-or-see-links | Notes |
|------|------------------|-------|
| ObjectSaveData | 4 | Agent A (batch A) |
| ObjectLoadData | 4 | Agent A |
| TypeDefinition | 7 | Agent A |
| ContainerDefinition | 5 | Agent B (batch B, fixed) |
| MetaData | 5 | Agent B (fixed) |
| MemberTypeId | 7 | Agent B (fixed) |

## QA performed (independent, not trusting agent summaries)
1. `node tools/_tmp_classify_save.mjs` → deep_pass=17, stub=89, other=2.
2. Per-page `classifyPage` (tools/lib/handwritten-policy.mjs) → 6/6 deep_pass with reasons
   `mental>80, dep-or-see-links=N, real-csharp-example, overview-ok`.
3. `AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.3.15/zh/api node tools/audit-links.mjs`
   → FILES=5632, TOTAL_LINKS=20892, **BROKEN_LINKS=0**, FILES_WITH_BROKEN=0.
4. Forbidden-token grep (阅读时先通过属性了解状态 | SomeValue | service = | 从实际子系统 API | null; // 替换 | Obtain an instance) on the 6 pages → 0 hits.
5. mtime check → only the 6 target files have 08-19_03:3x–03:4x timestamps; no collateral edits.

## Defects found & fixed during QA (agents' "all passed" claim was WRONG)
- Agent B's 3 pages initially classified `noise` (no-type-metadata): metadata used
  bilingual label `**类型/Type：**` which the gate regex `\*\*(?:Type|类型)[：:]\*\*` cannot
  match (the `/` prevents `：` from immediately following the keyword). Fixed to `**类型：**`
  (plus aligning 命名空间/模块/源文件 labels) — matches the gold-standard SaveManager.md / Agent A style.
- After metadata fix the 3 pages fell to `stub` (missing-dependency-or-see-section): section
  heading was `## 依赖图（可点击）`; the gate requires the 依赖/参见 heading to END right after
  the keyword (`依赖图\s*$`). Renamed to `## 依赖图`. Re-classify → 3/3 deep_pass.

## Forward pointer (wave X)
save-system remaining 89 stubs. Recommended next batch (driver layer + remaining object graph):
- Driver layer: `ISaveDriver`, `FileDriver`, `AsyncFileSaveDriver`, `InMemDriver` (InMemDriver/FileDriver already have real content but still stub — verify/upgrade).
- Object graph remainder: `SaveOutput`, `LoadResult`, `ContainerSaveData`, `ContainerLoadData`,
  `ObjectHeaderLoadData`, `FieldSaveData`/`FieldLoadData`, `PropertySaveData`/`PropertyLoadData`,
  `MemberSaveData`/`MemberLoadData`, `ElementSaveData`/`ElementLoadData`, `VariableSaveData`/`VariableLoadData`.
- Then BasicTypeSerializer family (low individual value, high count — consider a family cluster page).
- After save-system ~0 stubs: advance to core/engine/gui/items/mission/viewmodel/localization per driver.
- 4 strategic decisions still pending user ruling (campaign dual-directory dedup #4; coverage口径 #3; etc.).
