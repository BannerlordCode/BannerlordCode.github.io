# Wave #P 验收证据（v1.4.5/zh/api/campaign — Quest/Issue/Menu 状态簇 6 页）

验收日期：2026-08-18（周期 ~20:28 派发，~21:0x 全部回执并验收）
派发：6 × general-purpose Author agent（background）
- agent-b317a502 → ILocatable
- agent-7e02a69d → IssueState
- agent-26536c75 → QuestStates
- agent-a95e2d9e → MenuContextState
- agent-eea2d93d → PreconditionFlags
- agent-666e9ead → NarrativeMenuCharacterArgs

## 三重复验结果

### (1) classify 门禁（tools/_verify_waveP_classify.mjs → lib/handwritten-policy.mjs）
ALL_DEEP_PASS
- PASS content/v1.4.5/zh/api/campaign/ILocatable.md -> deep_pass [mental>80|dep-or-see-links=7|real-csharp-example|overview-ok]
- PASS content/v1.4.5/zh/api/campaign/IssueState.md -> deep_pass [mental>80|dep-or-see-links=9|real-csharp-example|overview-ok]
- PASS content/v1.4.5/zh/api/campaign/QuestStates.md -> deep_pass [mental>80|dep-or-see-links=11|real-csharp-example|overview-ok]
- PASS content/v1.4.5/zh/api/campaign/MenuContextState.md -> deep_pass [mental>80|dep-or-see-links=7|real-csharp-example|overview-ok]
- PASS content/v1.4.5/zh/api/campaign/PreconditionFlags.md -> deep_pass [mental>80|dep-or-see-links=11|real-csharp-example|overview-ok]
- PASS content/v1.4.5/zh/api/campaign/NarrativeMenuCharacterArgs.md -> deep_pass [mental>80|dep-or-see-links=8|real-csharp-example|overview-ok]

### (2) 链接审计（api 子树，AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.4.5/zh/api）
RESOLVE_OK_EITHER=31006
RESOLVE_OK_BOTH=20778
RESOLVE_URL_ONLY=10228
RESOLVE_FILE_ONLY=0
RESOLVE_NEITHER=0
FILES_WITH_BROKEN=0

### (3) 链接审计（全树，AUDIT_MODE=url）
RESOLVE_OK_EITHER=126243
RESOLVE_OK_BOTH=102332
RESOLVE_URL_ONLY=23911
RESOLVE_FILE_ONLY=0
RESOLVE_NEITHER=0
FILES_WITH_BROKEN=0

### (4) 禁止样板 Grep（14 类 STUB_PATTERNS）
对 6 页逐一 grep：是 TaleWorlds / 阅读时先通过属性了解状态 / Read properties / null; // 替换 / SomeValue / service = / 读取并返回当前对象中 / 本区域目录 / Obtain an instance / 先从命名空间 / entry point or data node / IIScene / Get...Implementation / 从实际子系统 API —— 全部 0 命中。

## 覆盖率重算（tools/_fresh_inventory.mjs --api-only）
tally: {"deep_pass":463,"family_entry_pass":73,"noise":28,"stub":8857}
对比 Wave #O 收尾（deep_pass=457, stub=8863）：deep_pass 457→463(+6)，stub 8863→8857(−6)。

## 源码纠偏亮点（手写质量证据）
- ILocatable：实际为 `internal interface ILocatable<T>`（泛型、无 GetPosition/GetLogicalPosition/LocatedEntity；真实成员 LocatorNodeIndex/NextLocatable/GetPosition2D），实现者仅 MobileParty/Settlement/Track，Hero 不实现——agent 推翻简报猜测并以源码为准。
- IssueState / QuestStates / MenuContextState：均为嵌套 `internal enum`，无公开 State 属性；文档给出正确公开入口（如 Campaign.Current.CurrentMenuContext）。
- PreconditionFlags：`[Flags] protected enum`，位值不连续（0x800→0x4000 跳过 0x1000），不进存档、每次对话临时重算——风险段写实。
- NarrativeMenuCharacterArgs：readonly struct 10 字段真实用途 + CharacterId 匹配槽 StringId（非 CharacterObject ID）等关键纠偏。

## 结论
Wave #P 6/6 达标，三重复验全绿，覆盖率 +6 deep_pass / −6 stub。结构口径 R1 gap=0 / sTier 62/62 / 质量 blockers=0 维持。
