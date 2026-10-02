# 证据 — 2026-08-18 周期（~09:17 · wave #G 收尾 + wave #H 派发）

## wave #G 收尾（6 页全部 deep_pass）

### 目标（content/v1.4.5/zh/api/campaign/）
- SettlementMenuOverlayModel
- PartyMoraleModel
- PartyWageModel
- PartySizeLimitModel
- MobilePartyAIModel
- AgeModel

### 三重复验（主编排器）
1. **禁止样板 Grep**：对 6 页扫描 `](./` / `自动生成` / `Purpose:` / `Namespace:` / `Module:` / `Type:` / `File:` / `instance = ` / `读取并返回` / `当作一个 Model 型扩展点` / `是一个规则模型` / `service = ...;` / `II[A-Z]` → **0 命中**。
2. **链接门禁**：`AUDIT_MODE=url node tools/audit-links.mjs`（实跑 4m7s）→ **FILES=38652 / TOTAL_LINKS=124627 / BROKEN_LINKS=0 / FILES_WITH_BROKEN=0 / RESOLVE_NEITHER=0 / EXIT=0**。
3. **内容分类 `classifyPage`**：`node tools/_verify_waveG_classify.mjs`（复用 `lib/handwritten-policy.mjs`）→ 6/6 `deep_pass`（心智模型>80 字、依赖图/参见 ≥8 链接、真实 C# 示例、零 STUB 模式）。`ALL_DEEP_PASS=true`。

### 结论
wave #G 6 页达到 §3 手写达标（心智模型 + 依赖图 + 风险段 + 真实示例 + 双向导航），无门禁退化。

## 诚实覆盖率（v1.4.5/zh/api，9421 页，本周期现场重算）
- `deep_pass` = **405**（较 wave #F 末值 ~399 +6）
- `family_entry_pass` = 73
- `noise` = 28
- `stub` = **8915（94.6%）**
- 结构口径（旧 R1）：gap=0 / sTier 62/62 / 质量 blockers=0（CI 仍绿，未动旧门禁行为）。

## wave #H 派发（下一周期验收）
- 6 个并行 Author agent（run_in_background）已派发，重写以下仍 stub（mtime 2026-06-26）的 L4 模型页（content/v1.4.5/zh/api/campaign/）：
  - DiplomacyModel（mtime 2026-08-12 但 classify 仍 `stub`，非真手写）
  - BarterModel
  - CharacterDevelopmentModel
  - CharacterStatsModel
  - CrimeModel
  - CaravanModel
- task_ids：agent-379d8b92 / agent-c4d6538c / agent-37b556e2 / agent-26df67f1 / agent-58ce3e3b / agent-5303f65a。
- 复用硬化 brief（`tools/_author_brief_waveE_recovery.md`）+ 3 金牌范例（MarriageModel/VolunteerModel/SettlementMilitiaModel）。
- 验收（下一周期）：禁止样板 Grep=0 + `audit-links` BROKEN=0 + `classifyPage` 6/6 deep_pass。

## 待用户决策（仍挂起，本周期未单边推进）
1. `audit:quality:strict` 是否接 CI 硬门禁（会瞬时暴露 ~19k+ blocker，击断 CI）。
2. 自动化是否固化为「每周期并行手写 N 篇」节奏。
3. `r1-coverage-report` 的 covered 是否改判为「内容分类器达标」（消除结构口径假象）。

## 下一 cycle 入口
- 检查 6 个 wave #H 文件 mtime 是否晚于 2026-08-18 09:17 且 banned=0；若是则跑三重复验收尾；若仍 stub（mtime 06-26）说明 agent 失败，重派 fresh agent。不要重复派发已在跑的 task。
- 维持硬化 brief 前置 + 主编排器三重复验。
- 等用户就三项决策表态后再调整 CI/节奏/覆盖口径。
