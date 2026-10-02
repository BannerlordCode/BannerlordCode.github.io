# Wave #L 验收证据 — 2026-08-18 (~16:2x)

> 目标：将 6 个被自动生成器写成 stub 的战役核心 hub 类型 + Settlement 模型，基于真实源码整页重写为达标深页（`deep_pass`）。
> 位置：`content/v1.4.5/zh/api/campaign/`（项目规范树，见 `_author_brief_waveL.md` 与金牌范例 `SettlementMilitiaModel.md`）。

## 交付的 6 个手写深页

| 页面 | 类型 | 依赖/参见链接 | 状态 |
|------|------|--------------|------|
| `api/campaign/CampaignCheats.md` | `public static class`（TaleWorlds.CampaignSystem） | 16 | deep_pass |
| `api/campaign/CampaignInformationManager.md` | Manager（TaleWorlds.CampaignSystem） | 8 | deep_pass |
| `api/campaign/CampaignFactionManagerBehaviour.md` | CampaignBehavior | 8 | deep_pass |
| `api/campaign/CampaignWarManagerBehavior.md` | CampaignBehavior | 17 | deep_pass |
| `api/campaign/SettlementAccessModel.md` | ComponentInterface 模型 | 11 | deep_pass |
| `api/campaign/SettlementPatrolModel.md` | ComponentInterface 模型 | 9 | deep_pass |

## 三重复验结果（全绿）

1. **禁止样板 / `classifyPage` 深页门禁**
   - 脚本：`tools/_verify_waveL_classify.mjs`（复用 `lib/handwritten-policy.mjs`）
   - 6/6 `PASS` → `deep_pass`，`reasons` 全空 → **0 命中 `STUB_PATTERNS`**
   - 心智模型 >80 字、依赖链接 ≥2（实际 8–17）、真实 C# 示例、概述达标，四项齐备。
2. **链接审计（api 子树，`AUDIT_CONTENT_ROOT=content/v1.4.5/zh/api AUDIT_MODE=url`）**
   - `BROKEN_LINKS=0` · `FILES_WITH_BROKEN=0`（扫描 9,421 文件 / 30,497 链接）
   - 跨顶级链接 `../../campaign-ext/<Action>` 全部解析到已存在页（GiveGoldAction / ChangeRelationAction / DeclareWarAction / MakePeaceAction / GainRenownAction / ChangeClanInfluenceAction / ChangeOwnerOfSettlementAction / MarriageAction / ChangeRulingClanAction / ChangeKingdomAction 等均已核验存在）。
3. **链接审计（v1.4.5/zh 全树，`AUDIT_MODE=url`）**
   - `BROKEN_LINKS=0` · `FILES_WITH_BROKEN=0`（扫描 9,475 文件 / 31,186 链接）

## 覆盖率（v1.4.5/zh/api，9,421 页，本波现场重算）

- `deep_pass` = **441**（435 + 6）
- `stub` = **8879**（8885 − 6）
- `family_entry_pass` = 73 · `noise` = 28

## 故障恢复

- `general-purpose-3`（CampaignFactionManagerBehaviour）失败：`Tool Gash not found`（调用了不存在的工具）。
- 已作为 `general-purpose-7`（agent-779522d2）用标准工具（Read/Grep/Bash/Write/Edit）重派，该页现已 `deep_pass`（mtime 16:21）。

## ⚠️ 重大架构发现：`campaign/` 与 `campaign-ext/` 大面积重复

- node 统计：campaign/ 1,361 md，campaign-ext/ 3,666 md，**同文件名重叠 1,313**；union 唯一 3,714。
- 即约 1,313 个类在两条树里都被生成器写成 stub —— 站点级 stub 数（8,879）被重复严重高估。
- 全版本（zh+en）Grep 确认：6 个类的 `campaign-ext/` 副本**无任何入链**（孤儿），仅被 `campaign-ext/_index.md` 的 Zola 自动章节列表引用（审计已证 `BROKEN_LINKS=0`）。
- `campaign/` 是各 wave 持续手写的主树（deep_pass 多落于此）；`campaign-ext/` 是旧自动生成 dump（基本全 stub）。

### 待用户决策：campaign-ext/ 处置

若以 `campaign/` 为唯一规范树、删除 `campaign-ext/` 的 1,313 个重复 stub，站点级 stub 将从 **8,879 骤降到约 7,500+**，且诚实覆盖率口径更准。
本周期**未单边删除**（破坏性 + 架构未定）。建议下一周期前由用户裁决：
- (A) 废弃 `campaign-ext/`，仅保留 `campaign/`；
- (B) 保留双树但去重（删 `campaign-ext/` 中与 `campaign/` 同名的 stub）；
- (C) 维持现状，仅把手写推进到 `campaign/`。

## 证据文件

- `tools/_verify_waveL_classify.mjs` — classify 复验脚本（保留）
- `tools/_analyze_waveL_targets.mjs` · `tools/_all_stubs_waveL.txt` — 权威分析 + stub 清单（保留）
