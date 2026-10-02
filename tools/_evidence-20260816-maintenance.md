# 维护复验证据 — 2026-08-16（v1.4.5 zh 4 篇深页推送零回归）

> 自动化 loop：BannerlordCode.github.io 手写手册重建（ulw-loop / R1）
> 周期：2026-08-16 17:56（大局观自动化）
> 触发：今日 16:57 未提交推送 `bcc6f5d57`（v1.4.5 zh api/campaign-ext + gameplay，4 files，+104 行）

## 一句话结论

R1 项目仍处于最终验收态（A–G 全过）。今日推送的 4 篇为**高质量手写深页增量**，实测对全部门禁**零回归**：断链 0、质量 0 blocker、覆盖率 gap 0。

## 受影响的 4 个页（v1.4.5 zh）

| 页面 | 路径 | handwritten-policy 判定 |
|------|------|--------------------------|
| CampaignEventDispatcher | `api/campaign-ext/CampaignEventDispatcher` | `deep_pass`（mental>80 / dep-links=12 / real-csharp-example / overview-ok） |
| CharacterRelationManager | `api/campaign-ext/CharacterRelationManager` | `deep_pass`（mental>80 / dep-links=9 / real-csharp-example / overview-ok） |
| EncounterManager | `api/campaign-ext/EncounterManager` | `deep_pass`（mental>80 / dep-links=12 / real-csharp-example / overview-ok） |
| AgentNavigator | `api/gameplay/AgentNavigator` | `deep_pass`（mental>80 / dep-links=10 / real-csharp-example / overview-ok） |

4 页均含：一句话职责、心智模型（生命周期/持有者/层级）、何时用/何时不要使用（含正确替代）、可点击依赖图、风险/崩溃边界段、真实 API 示例（真实获取路径，非 `SomeValue`/`service=...`）、双向导航块（↑ Parent / ↔ Sibling / Related）、中英互链。**无任何样板拒收句、无 STUB_PATTERNS 命中。**

## 门禁复测结果

### C. 断链审计（全站，AUDIT_MODE=url）
- 命令：`AUDIT_MODE=url node tools/audit-links.mjs`（后台 4m31s）
- `FILES=38652 / TOTAL_LINKS=123265 / BROKEN_LINKS=0 / RESOLVE_NEITHER=0 / FILES_WITH_BROKEN=0`
- 4 个新页未出现在任何 broken 段 → 本次推送 0 新增断链。
- 原始日志：`tools/_linkaudit-20260816.txt`

### A. 文档质量（handwritten-policy）
- 4 页全部 `deep_pass`（门禁最强判定，reasons=0）→ 质量 blocker = 0，无样板/自动生成腔。

### B. 覆盖率（v1.4.5 zh 重跑）
- `r1Target 6020 / covered 6020 / gap 0 / coverageRate 100%`
- `coveredDeep 318 / coveredFamily 5702`
- `sTier 62/62（miss=0）`
- 报告：`tools/_current-r1-145-zh.json`（generatedAt 2026-08-16）

### 其余三版
- zh/en × v1.3.15、en v1.4.5 未被本次推送触碰，沿用此前全绿（gap=0 / sTier 62/62 / BROKEN_LINKS=0 / NAVIGATION_OK / build exit 0）。

## 导航 & 构建
- 本次仅改 4 篇 content，未触动 `data/navigation.json` 结构 → 沿用 `NAVIGATION_OK`（CONTENT_SECTIONS=464 / MAX_LANDING_DISTANCE=3）。
- 未改 content 目录结构 → 沿用此前 `zola build` exit 0（约 20 分钟，无改动不重跑）。

## 已知限制（非阻塞，沿用 backlog）
1. `api/final/*` 70 条路由 `group=null`：侧栏仅渲染分组命中项，这些家族索引页需经 `api/` 下 section-tree 嵌套抵达（69 topic 平铺）。需迁页改 URL → 涉链接/覆盖率风险，待用户确认后开新 loop。
2. 剩余 23 条 genuine `method-missing-example`（真实方法缺内联示例，非伪阳性）：可选收敛，优先 `*Action.Apply` 与高价值 Model/组件方法。
3. 构建 F 自上次实测 exit 0 以来 content 结构未变，未重跑。

## 维护态健康结论
R1（全四版 zh/en × v1.3.15/v1.4.5）最终验收 A–G 仍全过；今日 4 篇深页为纯质量提升，零回归。
