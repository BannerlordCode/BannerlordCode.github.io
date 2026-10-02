# 证据 — 2026-08-18 周期（~09:40 · wave #H 收尾，6/6 达标）

## wave #H 收尾（6 页全部 deep_pass，独立复验）

### 目标（content/v1.4.5/zh/api/campaign/）
- DiplomacyModel
- BarterModel
- CharacterDevelopmentModel
- CharacterStatsModel
- CrimeModel
- CaravanModel

### 主编排器独立复验（逐页，非 agent 自报）
对每页实跑：mtime 更新确认 + 14 类禁止样板 grep + `classifyPage`（`lib/handwritten-policy.mjs`）：

| 页 | mtime | banned_hits | classify |
|----|-------|-------------|----------|
| DiplomacyModel | 09:33 | 0 | deep_pass |
| BarterModel | 09:30 | 0 | deep_pass |
| CharacterDevelopmentModel | 09:31 | 0 | deep_pass |
| CharacterStatsModel | 09:28 | 0 | deep_pass |
| CrimeModel | 09:31 | 0 | deep_pass |
| CaravanModel | 09:29 | 0 | deep_pass |

**6/6 deep_pass；6/6 banned=0。**

### 链接门禁（全站，6 页含跨顶级 `../../campaign-ext/`、`../../core-extra/` 链接）
`AUDIT_MODE=url node tools/audit-links.mjs`（实跑 ~4m）→ **FILES=38652 / TOTAL_LINKS=124864 / BROKEN_LINKS=0 / FILES_WITH_BROKEN=0 / RESOLVE_NEITHER=0 / EXIT=0**。

## 诚实覆盖率（v1.4.5/zh/api，9421 页，本周期现场重算 `tools/_fresh_inventory.mjs`）
- `deep_pass` = **411**（wave H +6，较 wave G 末值 405）
- `family_entry_pass` = 73
- `noise` = 28
- `stub` = **8909（94.6%）**
- 结构口径（旧 R1）：gap=0 / sTier 62/62 / 质量 blockers=0（CI 仍绿）。

## 关键方法质量抽样（确认非签名墙）
- DiplomacyModel：GetScoreOfDeclaringWar / GetEffectiveRelation / GetDailyTributeToPay 等均写实公式与调用方（FactionManager/KingdomManager/ChangeRelationAction）。
- BarterModel：GetBarterPenalty 三分支系数 0.4/0/-8.4 等、CalculateOverpayRelationIncreaseCosts 逐档算法，调用方 BarterManager/ItemBarterable。
- CrimeModel：GetCost 的 `Pow(x,1.2)`、分级区间 0–30/30–65/≥65，调用方 ChangeCrimeRatingAction/PayForCrimeAction。
- CharacterStatsModel：GetTier/WoundedHitPointLimit 默认 20/6，调用方 CharacterObject/Hero/RecruitmentCampaignBehavior。
- CharacterDevelopmentModel：SkillsRequiredForLevel/GetXpRequiredForSkillLevel 查表、CalculateLearningLimit=(属性均值-1)*10+focus*30。
- CaravanModel：GetCaravanFormingCost 精英22500/普通15000、GetInitialTradeGold 基准10000+等，调用方 CaravansCampaignBehavior/CaravanConversationsCampaignBehavior。

## 证据落盘
- `tools/_evidence-cycle-20260818-waveH.md`（本周期报告）
- `tools/_verify_waveG_classify.mjs`（可复用为 6 页 classify 复验，命名保留）

## 待用户决策（仍挂起，本周期未单边推进）
1. `audit:quality:strict` 接 CI 硬门禁。
2. 自动化每周期并行手写 N 篇节奏固化。
3. 覆盖口径改判「达标=真手写」。

## 下一 cycle 入口
- 下一高 ROI 长尾（仍 stub，建议下一批）：Campaign 系剩余（CampaignCheats/BuildingsCampaignBehavior/BuildingModel 等）、Settlement 系（SettlementValueModel 已做，余 SettlementLoyaltyModel 等已做；转向 Items/Equipment/SP 模块）、或扩 R2 internal。
- 维持硬化 brief 前置 + 主编排器三重复验。
- 等用户就三项决策表态。
