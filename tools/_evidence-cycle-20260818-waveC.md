# 证据 · 2026-08-18 周期（wave #C — 实体/经济页手写 + 标题规范化）

## 本周期完成

### 0. 重校基线（发现并发写入现象）
本周期开工首先重跑 `classifyPage` 全量扫描，确认真实状态：v1.4.5 zh/api 共 **9421** 页，诚实口径 `deep_pass=378 / stub=8942`。但在编写过程中发现**并行 Author agent 仍在后台持续写入**——本周期初判为 stub 的 `PartySpeedModel`/`PartyHealingModel`/`CharacterDevelopmentModel`/`DiplomacyModel`/`BarterModel`/`BarterManager` 在我分类之后、读取之前已被其他 agent 改写为 `deep_pass`。结论：必须以**当前磁盘状态**为唯一事实来源，不再信任一轮扫描结果。

### 1. 标题规范化（2 页，内容本已达标）
两页早已手写达标，仅因章节标题命名不符 `handwritten-policy.mjs` 的 h2 级正则（`心智模型` / `依赖图`/`参见`）而误判为 stub：
- `content/v1.4.5/zh/api/campaign/Army.md`：`## 父级与依赖` → `## 依赖图`（保留 mermaid + 上游/下游，12 条真实链接）。
- `content/v1.4.5/zh/api/campaign/CultureObject.md`：`## 一句话职责与心智模型` → `## 心智模型`；`## 对象图与依赖` → `## 依赖图`（10 条真实链接）。

经 `grep -rlE` 全量扫描，此类非规范标题仅此 2 处，非系统性问题（已排除 `^## .*心智模型` 误匹配）。

### 2. 真手写重写（1 页，原为自动生成壳）
- `content/v1.4.5/zh/api/campaign/Building.md`：原页为签名灌版（"阅读时先看属性…" 模板句 + `Building building = ...;` 占位示例 + 单链接 `参见`）。整页重写为 §3 达标页：实例/定义（`BuildingType`）心智模型、生命周期、`## 依赖图`（7 条真实链接：Town/BuildingType/BuildingEffectModel/BuildingsCampaignBehavior/Settlement/Campaign/SaveManager）、成员契约（含 `LevelUp`/`LevelDown`/`HitPointChanged`/`AddEffectOfBuilding` 真实语义）、2 个真实 C# 示例（遍历 `Town.Buildings` 汇总加成 / 经 `BuildingEffectModel` 读单值）、6 条崩溃/坏档风险（耐久暗降级、直接写进度、等级越界断言、加成不存字段等）。

### 3. 验收命令与结果
- `node tools/_verify_*.mjs` 等价 classify：三页均 `deep_pass`（mental>80 / dep-or-see-links≥7 / real-csharp-example / overview-ok）。
- `AUDIT_MODE=url node tools/audit-links.mjs` → `FILES=38652 TOTAL_LINKS=123800 BROKEN_LINKS=0 FILES_WITH_BROKEN=0`（exit 0）。
- `node tools/_fresh_inventory.mjs` 复算：`deep_pass=381 / stub=8939`（较本周期初 378/8942 各 +3/−3）。

## 健康 / 未完成 / 待用户决策
- 内容口径（权威版 v1.4.5/zh/api）：诚实手写 ~381/9421（4.04%），长尾 ~8939 仍为公式化壳——R1 结构口径（gap=0）与诚实口径差距巨大，与历史结论一致。
- 并行 Author agent 节奏持续有效（本轮 6 个 Models/实体页在被我扫描后由其他 agent 补完）。建议下一周期继续依赖该节奏，并**以当前磁盘 classify 为准**复查，避免重复劳动。
- 三项历史战略决策仍挂起：①`audit:quality:strict` 接 CI；②每周期并行手写 N 篇节奏固化；③`r1-coverage-report` 的 covered 改判为「内容分类器达标」。

## 下一 cycle 入口
- 复用 `tools/_fresh_inventory.mjs` 取当前 stub 清单，挑高 ROI 长尾（SettlementMilitiaModel / SettlementEconomyModel / PartyTrainingModel / CombatXpModel / PregnancyModel / SmithingModel / MarriageModel / VolunteerModel / RaidModel / NotableSpawnModel / BuildingConstructionModel / BuildingEffectModel / 各类 Barter* / ArmyManagementCalculationModel 等）。
- 维持标题规范（`## 心智模型` / `## 依赖图`）；对"已写好但非规范标题"继续小幅归一。
- 等用户就三项决策表态后再调整 CI/节奏/覆盖口径。
