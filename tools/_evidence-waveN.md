# 证据包 — Wave #N 验收（2026-08-18 ~18:4x–18:5x · 战役地图/时间/状态基础设施簇）

## 本周期完成
- **Wave #N 全部 6 页**（战役地图/时间/状态基础设施簇）整页手写 → `deep_pass`，三重复验全绿：
  - `content/v1.4.5/zh/api/campaign/MapTimeTracker.md`
  - `content/v1.4.5/zh/api/campaign/LocatorGrid.md`
  - `content/v1.4.5/zh/api/campaign/NavigationCacheElement.md`
  - `content/v1.4.5/zh/api/campaign/PeriodicTicker.md`
  - `content/v1.4.5/zh/api/campaign/CachedPartyVariables.md`
  - `content/v1.4.5/zh/api/campaign/BehaviorSaveData.md`
- 6 × general-purpose Author agent 均已完成（run_in_background，独立任务）。
- 三重复验全绿（见下）。
- 覆盖率重算（v1.4.5/zh/api）。

## 三重复验结果（Wave #N）
**(a) classifyPage `deep_pass` 门禁** — `node tools/_verify_waveN_classify.mjs`
```
PASS .../MapTimeTracker.md            -> deep_pass [mental>80|dep-or-see-links=6|real-csharp-example|overview-ok]
PASS .../LocatorGrid.md               -> deep_pass [mental>80|dep-or-see-links=9|real-csharp-example|overview-ok]
PASS .../NavigationCacheElement.md    -> deep_pass [mental>80|dep-or-see-links=6|real-csharp-example|overview-ok]
PASS .../PeriodicTicker.md            -> deep_pass [mental>80|dep-or-see-links=14|real-csharp-example|overview-ok]
PASS .../CachedPartyVariables.md      -> deep_pass [mental>80|dep-or-see-links=15|real-csharp-example|overview-ok]
PASS .../BehaviorSaveData.md          -> deep_pass [mental>80|dep-or-see-links=12|real-csharp-example|overview-ok]
ALL_DEEP_PASS
```
（主编排器对 6 页逐一做了**独立** classify 复验，与 agent 自查一致，非仅采信自报。）
**(b) 禁止样板（14 STUB_PATTERNS）**：`deep_pass` 要求 `reasons.length === 0`，STUB_PATTERNS 命中即非 deep_pass → 由 (a) 全 `deep_pass` 等价证明 0 命中。
**(c) 链接审计**（`tools/audit-links.mjs`，`AUDIT_MODE=url`）：
- `AUDIT_CONTENT_ROOT=content/v1.4.5/zh/api`：**BROKEN_LINKS=0 / FILES_WITH_BROKEN=0**（RESOLVE_OK_EITHER=30,772）。
- `AUDIT_CONTENT_ROOT=content/v1.4.5/zh`（全树）：**BROKEN_LINKS=0 / FILES_WITH_BROKEN=0**（RESOLVE_OK_EITHER=31,446）。

## 覆盖率（v1.4.5/zh/api，9,421 页）
- 重算（`node tools/_fresh_inventory.mjs --version 1.4.5 --lang zh --api-only`）：
  `deep_pass`=**451**（基线 445，+6 净增；6 目标派发时均为 stub，故净新转换 = 6）
  `stub`=**8869**（基线 8875，−6）· `family_entry_pass`=73 · `noise`=28 · 总计 9421
- 内容口径：stub 8869（94.1%）/ deep_pass 451。
- 结构口径（旧 R1）：gap=0 / sTier 62/62 / 质量 blockers=0（CI 绿）。

## 本波洞察
- Wave #N 选定逻辑（`tools/_rank_stub_indegree.mjs`）：剩余 stub 被 deep 页反链 = 0，最高 in-degree 仅 2–3 → 中枢 hub 已达标，故挑「被 MobileParty/Settlement 依赖 + 坏档/崩溃相关」的地图/时间/状态基础设施簇做高 ROI 长尾推进。
- BehaviorSaveData / PeriodicTicker / CachedPartyVariables 三页重点写了**存档坏档 / tick 崩溃面**（如 TickDebt 堆积、缓存未失效、[SaveableField] 漏标丢档），直接服务驱动文档「防离奇崩溃」核心目标。

## 健康 / 未完成 / 待用户决策
- 结构口径：R1 gap=0 / sTier 62/62 / 质量 blockers=0（CI 绿）。内容口径：stub 8869（94.1%）/ deep_pass 451。
- 四项战略决策仍挂起：①`audit:quality:strict` 接 CI 硬门禁；②每周期并行手写节奏固化；③覆盖口径改判「达标=真手写」；④campaign/ vs campaign-ext/ 重复树去重裁定。

## 下一 cycle 入口
- 继续按 `_rank_stub_indegree.mjs` 选高 ROI 长尾簇派发下一波（Wave #O）；建议优先仍 stub 且与 deep hub 强相关的 Foundation/engine 数据·状态类型，或开启 engine/ 子树。
- 维持硬化 brief 前置 + 主编排器三重复验（_verify_wave*_classify.mjs + audit-links BROKEN=0 + 独立 classify 复验）。
