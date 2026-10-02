# 证据包 · 2026-08-18 cycle（wave #I — Settlement Buildings 簇 6 页手写）

## 本周期手写目标（content/v1.4.5/zh/api/campaign/）
1. BuildingModel.md（agent-8b4d091e / general-purpose-3）
2. BuildingScoreCalculationModel.md（agent-7109af91 / general-purpose-1）
3. BuildingsCampaignBehavior.md（agent-e9bc3ed4 / general-purpose-2）
4. BuildingType.md（agent-d5b56f57 / general-purpose-5）
5. BuildingEffectEnum.md（agent-60a9a79b / general-purpose-6）
6. BuildingEffectIncrementType.md（agent-66dcc79f / general-purpose-4）

## 三重复验结果（主编排器独立复验，非 agent 自报）

### ① 禁止样板 Grep（14 类拒收/占位句）
- 命令：`grep -nE "自动生成|本区域目录|从实际子系统 API|通常定义|读取并返回当前对象|\*\*Namespace:|\*\*Module:|\*\*Type:|\*\*File:|\]\(./|instance = \.\.\.;|SomeValue|service = \.\.\.|阅读时先通过属性了解状态|is a public type|是一个规则模型" <6 files>`
- 结果：**NO_BANNED_MATCHES**（0 命中）

### ② 全站链接审计（BROKEN_LINKS 门禁）
- 命令：`AUDIT_MODE=url node tools/audit-links.mjs`
- 结果（实跑 6m19s）：
  - RESOLVE_OK_URL=124850 / RESOLVE_OK_FILE=102250 / RESOLVE_OK_EITHER=124850 / RESOLVE_OK_BOTH=102250
  - RESOLVE_URL_ONLY=22600 / RESOLVE_FILE_ONLY=0 / **RESOLVE_NEITHER=0**
  - **FILES_WITH_BROKEN=0** ⇒ **BROKEN_LINKS=0**（维持）
- 说明：6 页所加链接均经 agent 用 `ls`/`Glob` 验证存在，且只链到已存在的 campaign 同级页或 core/MBObjectBase；无 `./` 自链、无 `_index.md`、无编造页。

### ③ classifyPage 直跑（lib/handwritten-policy.mjs）
- 命令：`node tools/_verify_waveI_classify.mjs`
- 结果：**6/6 deep_pass**（`ALL_DEEP_PASS=true`）
  | 文件 | 状态 | 心智模型 | 依赖/参见链接 | 真实C#示例 | 概述 |
  |---|---|---|---|---|---|
  | BuildingModel | deep_pass | >80 | 9 | ✓ | ok |
  | BuildingScoreCalculationModel | deep_pass | >80 | 12 | ✓ | ok |
  | BuildingsCampaignBehavior | deep_pass | >80 | 14 | ✓ | ok |
  | BuildingType | deep_pass | >80 | 10 | ✓ | ok |
  | BuildingEffectEnum | deep_pass | >80 | 9 | ✓ | ok |
  | BuildingEffectIncrementType | deep_pass | >80 | 8 | ✓ | ok |

## 诚实覆盖率（v1.4.5/zh/api，9421 页，本周期现场重算 `_fresh_inventory.mjs`）
- `deep_pass` = **417**（较 wave H 末值 411 +6）· `family_entry_pass`=73 · `noise`=28 · `stub`=**8903（94.5%）**
- 结构口径（旧 R1）：gap=0 / sTier 62/62 / 质量 blockers=0（CI 绿）

## 证据落盘文件
- `tools/_evidence-cycle-20260818-waveI.md`（本文件）
- `tools/_verify_waveI_classify.mjs`（6 页 classify 复验脚本，保留）
- `tools/_fresh_inventory-waveI.txt`（本周期 honest baseline 输出）
- 6 个手写页：content/v1.4.5/zh/api/campaign/{BuildingModel,BuildingScoreCalculationModel,BuildingsCampaignBehavior,BuildingType,BuildingEffectEnum,BuildingEffectIncrementType}.md

## 健康 / 未完成 / 待用户决策
- 结构口径：R1 gap=0 / 质量 blockers=0（CI 绿）。内容口径（新）：**8903 stub(94.5%)** / deep_pass 417。
- 三项战略决策仍挂起：①`audit:quality:strict` 接 CI 硬门禁；②每周期并行手写节奏固化；③覆盖口径改判「达标=真手写」。本周期未单边推进。
- 长尾剩余高 ROI：CampaignCheats / CampaignObjectBase / CampaignEntityComponent / Settlement 系其他 / Items/Equipment/SP 模块；或扩 R2 internal。

## 下一 cycle 入口
- 复用硬化 brief + 3 金牌范例，续推高 ROI 长尾（建议 Settlement 系补全：如 BuildingConstructionModel / BuildingEffectModel / SettlementLoyaltyModel 已做则跳过；或 Campaign 系 CampaignCheats 等）。
- 维持三重复验（禁止样板 Grep + audit-links BROKEN=0 + classifyPage deep_pass）。
