# 证据包 — 诚实重基线（2026-08-17 ~23:03 · 大局观 hourly）

> 自动化 loop：BannerlordCode.github.io 手写手册重建（ulw-loop / R1）
> 周期目标：纠正此前错误的"0 stub"结论，用**内容级分类器**给出权威版真实手写口径，
> 并继续增量手写 1 篇 S 级枢纽英文页。

## 本周期完成

1. **纠正测量假象（关键）**：此前本自动化用 `bash grep` 对中文 UTF-8 判定 stub，在 Git Bash 下
   不可靠，产出**假阴性**（误报 v1.4.5/zh/api "0 stub"）。改用项目自带的**内容级分类器**
   `tools/handwritten-coverage.mjs`（`lib/handwritten-policy.mjs` 的 `classifyPage`，按真实心智模型 /
   依赖链接 / 真实 C# 示例 / 概述质量判 `stub|deep_pass|family_entry_pass|noise`）重测，得到真实数字。
2. **权威版真实手写口径**（扫描 `content/v1.4.5/zh/api`，9,421 文件）：
   - `stub` = **8,960（95.1%）**
   - `deep_pass` = 360 · `family_entry_pass` = 73 · `noise` = 28 · `missing` = 0
   → 此前"R1 gap=0 / S 级 62/62"度量的是**结构合规（页存在+条目）**，绝非内容手写合规。
   已读过的 `MBSubModuleBase` / `Campaign` / `MBObjectBase`(zh) 正是那 360 深度页之一。
3. **增量手写 1 页**：重写 `content/v1.4.5/en/api/campaign-ext/MBObjectBase.md`（原 `_evidence-honest-baseline`
   标记的英文 S 级 stub：`description: "Auto-generated class reference..."` + `// Obtain an instance ... = ...;`
   占位示例）→ 与中文"同一理解"的 §3 达标英文深度页（真实心智模型、生命周期、可重写成员表、
   真实 `RegisterType/CreateObject/GetObject` 示例、风险与坏档边界、双向导航）。
4. **全门禁复验（0 回归）**：详见"证据"。

## 证据

- `tools/data/handwritten-coverage-v145-zh.json`（内容分类器输出，权威版中文 api 真实口径）
- `tools/_evidence-honest-rebaseline-20260817.md`（本周期报告）
- 英文页严格门禁：`STRICT_GATE=1 node tools/audit-doc-quality.mjs content/v1.4.5/en/api/campaign-ext`
  → `MBObjectBase.md` **未被标记**（其余 4,637 findings 为同目录其他英文 stub，证明英文长尾也大量待写）。
- 全站断链：`AUDIT_MODE=url node tools/audit-links.mjs`
  → `BROKEN_LINKS=0` / `FILES_WITH_BROKEN=0` / `RESOLVE_NEITHER=0`（本周期改动零回归）。
- 链接目标全部核验存在；原中文页 `../IDataStore/` 在英文会是断链，已改为 `../../campaign/IDataStore/`。
- 源码核验（`bannerlord-1.4.5/.../MBObjectManager.cs`）：`RegisterType<T>(classPrefix, classListPrefix,
  typeId, autoCreateInstance, isTemporary)`、`CreateObject<T>(string)`、`GetObject<T>(string)` 真实存在，
  与示例一致。

## 测量方法论（为什么旧数字不可信）

| 来源 | 口径 | 结论 | 可靠性 |
|------|------|------|--------|
| 旧 `bash grep` 中文标记 | 4 类字符串 | 误报 v1.4.5/zh/api "0 stub" | ❌ Git Bash 中文 UTF-8 失效 |
| `ripgrep`(Grep 工具) 全树 | 同上 | 38k 文件超时被杀 | ⚠️ 超时 |
| `_strict-audit-full-20260817.txt` | 4 类标记 UNION | 35,782 / 38,650（92.6%） | ⚠️ 文件仅存每类前 200 样例，非全枚举 |
| **`handwritten-coverage` 分类器** | 内容质量（§3 形状） | v1.4.5/zh/api 8,960 stub / 9,421 | ✅ 本周期权威口径 |

> 两把尺子测不同范围：4 标记 UNION 是"含特定坏模式"的**粗**口径（全 38,650 文件）；
> 内容分类器是"缺 §3 必备结构"的**严**口径（本次仅测 v1.4.5/zh/api）。两者共同指向同一事实：
> 站点实质是 stub 海洋，"R1 gap=0"只是结构口径。

## 复测权威版全量真实 gap 的精确命令（供用户/后续周期）

```bash
# 内容级 deep/stub 分类（可靠，按 root 跑，每个版本/语言切片分别）
node tools/handwritten-coverage.mjs --root content/v1.4.5/zh/api --out tools/data/hc-v145-zh.json
node tools/handwritten-coverage.mjs --root content/v1.4.5/en/api --out tools/data/hc-v145-en.json
node tools/handwritten-coverage.mjs --root content/v1.3.15/zh/api --out tools/data/hc-1315-zh.json
# ……其余版本/语言同理

# 严格内容完整性门禁（4 标记，全量需 --verbose 才枚举；默认仅样本）
STRICT_GATE=1 node tools/audit-doc-quality.mjs          # 全树
STRICT_GATE=1 node tools/audit-doc-quality.mjs content/v1.4.5/en/api/campaign-ext  # 目录级

# 旧"R1 gap"结构口径（仅供参考，不反映内容）
node tools/r1-coverage-report.mjs
```

## 优先级下一目标队列（基于 stub 样例）

- **Actions 家族**：已见 `AddCompanionAction` / `AddHeroToPartyAction` / `AdoptHeroAction` 进入 `deep_pass`
  样例 → 该家族正在推进，应继续收口（驱动 §5 L3）。
- **campaign-ext 长尾**：`AIBehaviorData` / `AIDifficulty` / `AIState` /
  `AcceptCallToWarAgreementDecision*` / 各类 `*Message` / `*Decision` / `*Tutorial` —— 体量最大，典型占位 stub。
- **mission-ext 长尾**：英文 campaign-ext 严格门禁 4,637 findings 多为 `// Obtain an instance ... = ...;`
  占位，mission-ext 同构。
- **英文同步（§8-D）**：v1.4.5/en S 级枢纽基本达标，但英文长尾与中文长尾同样待写。

## 战略现实（必须让用户知晓）

- 仅 **v1.4.5/zh/api 一个切片**就有 **8,960 个 stub**。四版本 × 中英 full 口径的 stub 总量是数万级。
- 驱动 H2→H9 要求逐页手写、禁止脚本灌版；按本自动化 1 页/周期的节奏，单切片即需 ~9,000 周期，
  **不可行**。这是人机协作/多 agent 并行 + 用户决策才能推进的规模。
- **待用户决策（自动化不可单方面推进）**：
  1. 是否将 `docs.yml` 的 `audit:quality` 改为 `audit:quality:strict`，把 4 标记 17 万 finding 变为 CI 硬阻塞，
     倒逼系统性（可能借助 subagent 并行）手写；
  2. 是否调整自动化节奏（例如每周期并行手写 N 篇 + 持续诚实跟踪），而非 1 页/周期；
  3. 是否把覆盖门禁 `r1-coverage-report` 的"covered"改判为"通过内容分类器"，使 §8-B 诚实。

## 本周期交付物

- 重写：`content/v1.4.5/en/api/campaign-ext/MBObjectBase.md`（§3 达标英文深度页）
- 报告：本文件
- 数据：`tools/data/handwritten-coverage-v145-zh.json`
