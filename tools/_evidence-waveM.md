# 证据包 — Wave #M 验收 + Wave #N 派发（2026-08-18 ~18:28 周期）

## 本周期完成
- **验收 wave #M**（6 页 Items/Equipment 簇）整页手写 → `deep_pass`：
  - `content/v1.4.5/zh/api/core/ItemObject.md`
  - `content/v1.4.5/zh/api/core-extra/Equipment.md`
  - `content/v1.4.5/zh/api/core-extra/EquipmentElement.md`
  - `content/v1.4.5/zh/api/core-extra/ItemRosterElement.md`
  - `content/v1.4.5/zh/api/core-extra/EquipmentCategories.md`
  - `content/v1.4.5/zh/api/core-extra/EquipmentType.md`
- **修复 1 处断链**：`ItemRosterElement.md` 的 `../../core/MBObjectManager` → `../../campaign-ext/MBObjectManager`（`MBObjectManager` 页仅存于 campaign-ext 重复树）。
- 三重复验全绿（见下）。
- 覆盖率重算（v1.4.5/zh/api）。
- **派发 wave #N**（6 页「战役地图/时间/状态基础设施」簇，6× general-purpose Author agent，run_in_background）。

## 三重复验结果（Wave #M）
**(a) classifyPage `deep_pass` 门禁** — `node tools/_verify_waveM_classify.mjs`
```
PASS content/v1.4.5/zh/api/core/ItemObject.md            -> deep_pass [mental>80|dep-or-see-links=22|real-csharp-example|overview-ok]
PASS content/v1.4.5/zh/api/core-extra/Equipment.md       -> deep_pass [mental>80|dep-or-see-links=14|real-csharp-example|overview-ok]
PASS content/v1.4.5/zh/api/core-extra/EquipmentElement.md-> deep_pass [mental>80|dep-or-see-links=10|real-csharp-example|overview-ok]
PASS content/v1.4.5/zh/api/core-extra/ItemRosterElement.md-> deep_pass [mental>80|dep-or-see-links=8|real-csharp-example|overview-ok]
PASS content/v1.4.5/zh/api/core-extra/EquipmentCategories.md-> deep_pass [mental>80|dep-or-see-links=10|real-csharp-example|overview-ok]
PASS content/v1.4.5/zh/api/core-extra/EquipmentType.md   -> deep_pass [mental>80|dep-or-see-links=6|real-csharp-example|overview-ok]
ALL_DEEP_PASS
```
**(b) 禁止样板（14 STUB_PATTERNS）**：`classifyPage` 的 `deep_pass` 要求 `reasons.length === 0`，而 STUB_PATTERNS 命中会被推入 `reasons` —— 故 (a) 全 `deep_pass` 已等价证明 0 命中。（STUB_PATTERNS 为非导出模块局部常量，无法直接 import，已通过该等价关系证明。）
**(c) 链接审计**（`tools/audit-links.mjs`，`AUDIT_MODE=url`）：
- 修复前 `AUDIT_CONTENT_ROOT=content/v1.4.5/zh/api`：`RESOLVE_NEITHER=2 / FILES_WITH_BROKEN=1`（仅 ItemRosterElement→`../../core/MBObjectManager`）。
- 修复后 `AUDIT_CONTENT_ROOT=content/v1.4.5/zh/api`：**BROKEN_LINKS=0 / FILES_WITH_BROKEN=0**（RESOLVE_OK_EITHER=30,637）。
- 修复后 `AUDIT_CONTENT_ROOT=content/v1.4.5/zh`（全树）：**BROKEN_LINKS=0 / FILES_WITH_BROKEN=0**（RESOLVE_OK_EITHER=31,311）。

## 覆盖率（v1.4.5/zh/api，9,421 页）
- 重算（`node tools/_fresh_inventory.mjs --version 1.4.5 --lang zh --api-only`）：
  `deep_pass`=**445**（基线 441，+4 净增；6 个目标均个体 `deep_pass`，其中 2 个派发时已为 `deep_pass`，故净新转换 = 4）
  `stub`=**8875**（基线 8879，−4）· `family_entry_pass`=73 · `noise`=28 · 总计 9421
- 内容口径：stub 8875（94.2%）/ deep_pass 445。
- 结构口径（旧 R1）：gap=0 / sTier 62/62 / 质量 blockers=0（CI 绿）。

## 覆盖率洞察（高 ROI 选择依据）
- 重跑 in-degree 排名（`tools/_rank_stub_indegree.mjs`）：剩余 stub 被 `deep_pass` 页直接反链的数量 = 0（中枢 hub 互链已完成）；全部 stub 的总 in-degree 最高仅 2–3 → 中枢 hub 已基本达标，剩余为长尾。
- 据此选定 wave #N：战役地图/时间/状态基础设施簇（被 MobileParty/Settlement 等 deep 页依赖，且与坏档/崩溃强相关）。

## Wave #N 派发（本周期，run_in_background，验收见下周期）
目标（6 页，均 `stub`，输出 `content/v1.4.5/zh/api/campaign/`）：
| 页 | 源文件 | 备注 |
|----|--------|------|
| MapTimeTracker | TaleWorlds.CampaignSystem/MapTimeTracker.cs | 独立 |
| LocatorGrid | TaleWorlds.CampaignSystem.Map/LocatorGrid.cs | 独立 |
| NavigationCacheElement | TaleWorlds.CampaignSystem.Map.DistanceCache/NavigationCacheElement.cs | 独立 |
| PeriodicTicker | CampaignPeriodicEventManager.cs（嵌套） | 周期事件驱动 |
| CachedPartyVariables | MobileParty.cs（嵌套） | 队伍派生缓存 |
| BehaviorSaveData | CampaignBehaviorDataStore.cs（嵌套） | **重点坏档风险** |

- Brief：`tools/_author_brief_waveN.md`（数据/状态型写法；🚫清单 + MobileParty/Hero/Settlement/ItemRoster 范例 + 链接规则）。
- 6 × general-purpose Author agent（run_in_background），预计 ~50min 完成。

## 健康 / 未完成 / 待用户决策
- 结构口径：R1 gap=0 / 质量 blockers=0（CI 绿）。内容口径：stub 8875（94.2%）/ deep_pass 445。
- 四项战略决策仍挂起：①`audit:quality:strict` 接 CI 硬门禁；②每周期并行手写节奏固化；③覆盖口径改判「达标=真手写」；④**campaign/ vs campaign-ext/ 重复树去重裁定**（本报告修复的断链再次印证 campaign-ext 为孤儿重复树；若裁定废弃，诚实 stub 口径将大幅下降）。

## 下一 cycle 入口
- 检查 6 个 wave #N 文件 mtime 是否晚于 2026-08-18 18:3x 且 banned=0；若是则跑三重复验（仿 waveM：`_verify_waveN_classify.mjs` + `audit-links` BROKEN=0 + `classifyPage` 直跑 6 页全 `deep_pass`）；未达标页以硬化 brief 重派 fresh agent，勿重复派发已在跑的 task。
- 维持硬化 brief 前置 + 主编排器三重复验。
