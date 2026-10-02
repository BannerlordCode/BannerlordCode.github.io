# 证据 · 2026-08-18 周期（wave #D — L4 模型手写 + 链接门禁净零）

## 本周期完成

### 1. 5 个 L4 模型页整页手写（均 deep_pass）
全部基于 `bannerlord-1.4.5` 真源码核验（`Campaign.Current.Models.<Model>` / `GameModels` 访问路径、真实方法名、调用方 Behavior、风险）：
- `content/v1.4.5/zh/api/campaign/SettlementMilitiaModel.md`（依赖 8 链接）
- `content/v1.4.5/zh/api/campaign/SettlementEconomyModel.md`（7 链接）
- `content/v1.4.5/zh/api/campaign/PartyTrainingModel.md`（8 链接）
- `content/v1.4.5/zh/api/campaign/CombatXpModel.md`（11 链接）
- `content/v1.4.5/zh/api/campaign/PregnancyModel.md`（8 链接）

### 2. 链接门禁净零（关键修复）
- 首轮 `AUDIT_MODE=url node tools/audit-links.mjs` → **BROKEN_LINKS=85 / 5 文件 / exit 1**。
- 根因：本周期 Author agent 兄弟链接误用 `./X`（页路径被当目录，`AUDIT_MODE=url` 下 `./X` 解析为当前页子节点 → 断链）。修复 `](./` → `](../`（90 处，覆盖 5 文件兄弟链接与 `./` 索引）。
- 例外：`CombatXpModel` 的 `Equipment` 不在 `campaign/` 而在 `core-extra/`，`../Equipment` → `../../core-extra/Equipment`（2 处）。
- 复验：`AUDIT_MODE=url node tools/audit-links.mjs` → **BROKEN_LINKS=0 / FILES_WITH_BROKEN=0 / RESOLVE_NEITHER=0**（38652 文件 / 123885 链接，exit 0）。

### 3. 预防复发
- 修正 `AGENTS.md` 链接约定（原 "Prefer `./`" 误导）：明确 **同子目录兄弟页 `../X`、父级索引 `../`、跨顶级 `../../<subdir>/X`、无尾斜杠**。后续 Author agent 直接遵循，杜绝同类断链。

## 验收命令与结果
- `node tools/_tmp_classify_cands.mjs` → 5/5 `deep_pass`（mental>80 / dep-or-see-links 7–11 / real-csharp-example / overview-ok）。
- `node tools/_fresh_inventory.mjs` → v1.4.5 zh/api 全量 9421 页 tally：`deep_pass=386`（↑5）/ `stub=8934`（↓5）/ `family_entry_pass=73` / `noise=28`。
- `AUDIT_MODE=url node tools/audit-links.mjs` → `BROKEN_LINKS=0`（exit 0）。

## 健康 / 未完成 / 待用户决策
- 内容口径（v1.4.5/zh/api）：诚实手写 ~386/9421（4.10%）；长尾 ~8934 仍为公式化壳。
- 三项战略决策仍挂起（同 wave #A–#C）：①`audit:quality:strict` 接 CI 硬门禁；②自动化每周期并行手写 N 篇节奏固化；③`r1-coverage-report` 的 covered 改判为「内容分类器达标」。本周期未单边推进。
- 链接规范已写入 AGENTS.md；建议后续 Author agent prompt 直接引用该段，无需再在每条 prompt 内重复约定。

## 下一 cycle 入口
- 复用 `tools/_fresh_inventory.mjs` 取 stub 清单；下一批高 ROI L4 模型（确认仍 stub）：SmithingModel / MarriageModel / VolunteerModel / RaidModel / NotableSpawnModel / BuildingConstructionModel / BuildingEffectModel / ArmyManagementCalculationModel 等。
- 维持标题规范 `## 心智模型` / `## 依赖图`；兄弟链接遵循 AGENTS.md 的 `../X` 约定（已固化）。
- 等用户就三项决策表态后再调整 CI / 节奏 / 覆盖口径。
