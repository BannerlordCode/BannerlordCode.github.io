# 证据包 · 2026-08-18 cycle（~13:10 · wave #J 验收 + wave #K 派发与提前收尾）

## 一、wave #J 验收（6/6 达标）

目标页（`content/v1.4.5/zh/api/campaign/`）：BuildingConstructionModel / DefaultBuildingConstructionModel / BuildingEffectModel / DefaultBuildingEffectModel / SettlementLoyaltyModel / SettlementSecurityModel。

- mtime 均 2026-08-18 12:11–12:13（晚于 11:53 派发），非 06-26 stub。
- 三重复验（主编排器独立，非 agent 自报）：
  1. **禁止样板 Grep（14 类拒收/占位句）** → `NO_BANNED_MATCHES`（0 命中）。
  2. **全站链接审计** `AUDIT_MODE=url node tools/audit-links.mjs` → `BROKEN_LINKS=0` / `FILES_WITH_BROKEN=0` / `RESOLVE_NEITHER=0` / `EXIT=0`（125,262 链接）。
  3. **classifyPage**（`tools/_verify_waveJ_classify.mjs`）→ **6/6 deep_pass**（心智>80 / 依赖链接 11–24 / 真实 C# 示例 / 概述达标）。

## 二、wave #K 派发与提前收尾（6/6 达标）

目标页（战役核心基础类型，高 ROI，被大量页面引用）：CampaignObjectBase / CampaignEntityComponent / CampaignData / CampaignGameMode / CampaignTimeModel / CampaignOptions。源文件均 `find` 定位并嵌入各 agent TARGET 说明。

- 6 个并行 Author agent（run_in_background）全部 completed，mtime 13:23–13:28。
- 三重复验：
  1. **禁止样板 Grep** → 0 真实命中（2 个误报已人工判定非拒收：CampaignObjectBase 散文提及"自动生成"指框架生成收集方法；CampaignGameMode 写"**不是**一个规则模型"为显式否定样板——二者均不匹配 `handwritten-policy.mjs` 的 STUB_PATTERNS）。
  2. **classifyPage**（`tools/_verify_waveK_classify.mjs`）→ **6/6 deep_pass**（依赖链接 8–11 / 真实 C# 示例 / 概述达标）。
  3. **全站链接审计**（末轮复跑，所有 K 文件已落盘）→ `BROKEN_LINKS=0` / `EXIT=0`。

## 三、wave #K 链接缺陷修复（根因与处置）

- `agent-94300748`（CampaignData）写出 4 个跨顶级链接少一层：`../localization/TextObject`、`../campaign-ext/CharacterHelper`、`../campaign-ext/TeleportHeroAction`、`../campaign-ext/DisbandPartyAction`（应为 `../../`）。
- **根因**：agent 按硬化 brief 用 Glob 验证了目标页**存在**，但未考虑 Zola 的页目录深度——`api/campaign/CampaignData.md` 在站点中服务为目录 `api/campaign/CampaignData/`，相对链接需相对该目录解析，故跨顶级（`localization/`、`campaign-ext/`）需 `../../X` 而非 `../X`。这是继 wave #B/#D 之后再次出现、agent 难以自检的盲点。
- **处置**：主编排器阻塞该 agent 完成后，手动将 CampaignData 全部 `../localization/`→`../../localization/`、`../campaign-ext/`→`../../campaign-ext/`（共 13 处），复跑审计 `BROKEN_LINKS=0`。其余 5 个 K 页审计 0 坏链，未受影响。
- **建议**：在 `tools/_author_brief_waveE_recovery.md` 链接规则中显式增补"Zola 页目录深度"说明（页 `X.md` → 站点目录 `X/`，兄弟 `../X`、跨顶级 `../../X`），从源头防复发。

## 四、诚实覆盖率（v1.4.5/zh/api，9421 页，本周期现场重算）

- `deep_pass` = **425**（wave J 末值 419 + wave K +6）· `family_entry_pass`=73 · `noise`=28 · `stub`=**8895（94.4%）**。
- 结构口径（旧 R1）：gap=0 / sTier 62/62 / 质量 blockers=0（CI 绿）。

## 五、证据落盘文件

- `tools/_evidence-cycle-20260818-waveJ.md`（本文件）
- `tools/_verify_waveJ_classify.mjs` · `tools/_verify_waveK_classify.mjs`（classify 复验脚本，保留）
- `tools/_linkaudit-cycle-20260818-waveJ.txt`（末轮全站链接审计，BROKEN=0）
- `tools/_fresh_inventory-waveK.txt`（honest baseline 输出）
- 12 个手写页：`content/v1.4.5/zh/api/campaign/{BuildingConstructionModel,DefaultBuildingConstructionModel,BuildingEffectModel,DefaultBuildingEffectModel,SettlementLoyaltyModel,SettlementSecurityModel,CampaignObjectBase,CampaignEntityComponent,CampaignData,CampaignGameMode,CampaignTimeModel,CampaignOptions}.md`

## 六、健康 / 未完成 / 待用户决策

- 结构口径：R1 gap=0 / 质量 blockers=0（CI 绿）。内容口径（新）：**8895 stub(94.4%)** / deep_pass 425。
- 三项战略决策仍挂起：①`audit:quality:strict` 接 CI 硬门禁；②每周期并行手写节奏固化；③覆盖口径改判「达标=真手写」。本周期未单边推进。

## 七、下一 cycle 入口

- 复用硬化 brief + 3 金牌范例，续推高 ROI 长尾（建议 SettlementProsperityModel / SettlementFoodModel / SettlementGarrisonModel / SettlementTaxModel / SettlementValueModel / SettlementAccessModel；或 CampaignCheats / CampaignInformationManager；或 Items/Equipment/SP 模块）。
- 维持三重复验（禁止样板 Grep + audit-links BROKEN=0 + classifyPage deep_pass）。
- 硬化 brief 增补"Zola 页目录深度"链接约定。
