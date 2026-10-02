# Wave #O 派发证据（2026-08-18 ~19:29）

## 本周期动作
- re-scan 源码与 docs 结构；复核 wave #N 收尾（deep_pass=451, BROKEN_LINKS=0, sTier 62/62, 结构 R1 gap=0）。
- 现场重算 `tools/_fresh_inventory.mjs --version 1.4.5 --lang zh --api-only`：
  tally {deep_pass:451, family_entry_pass:73, noise:28, stub:8869}（共 9421 页）。
- 重跑 `tools/_rank_stub_indegree.mjs`：中枢 hub 已基本达标（deep_pass 反链 stub=0，剩余 stub 最高 in-degree 2–3）。
- 选定簇：**Campaign 关系 / 协议状态**（高内聚，非 campaign-ext 重复树）。
- 派发 6 × general-purpose Author agent（run_in_background）整页重写 stub 页，位置 `content/v1.4.5/zh/api/campaign/`。

## TARGET 映射（源已 Grep 定位）
| 页面 | Agent task_id | 源文件（bannerlord-1.4.5/Bannerlord.Source/bin/） | 类型 |
|------|---------------|--------------------------------------------------|------|
| Pregnancy | agent-dde58c90 | `TaleWorlds.CampaignSystem.CampaignBehaviors/PregnancyCampaignBehavior.cs:35` | internal class（嵌套） |
| HeroRelations | agent-f0e19276 | `TaleWorlds.CampaignSystem/CharacterRelationManager.cs:11` | internal class |
| Alliance | agent-6c114572 | `TaleWorlds.CampaignSystem.CampaignBehaviors/AllianceCampaignBehavior.cs:38` | internal struct（主构造函数） |
| StanceType | agent-a13d6f35 | `TaleWorlds.CampaignSystem/StanceType.cs:3` | internal enum |
| TradeAgreement | agent-8a11d371 | `TaleWorlds.CampaignSystem.CampaignBehaviors/TradeAgreementsCampaignBehavior.cs:33` | public struct |
| Grievance | agent-eb5daf0e | `TaleWorlds.CampaignSystem.CampaignBehaviors/CompanionGrievanceBehavior.cs:43` | internal class |

## 审计与门禁
- 硬化 brief：`tools/_author_brief_waveN.md`；金牌范例：MobileParty / Hero / Settlement / ItemRoster（content/v1.4.5/zh/api/campaign/）。
- 链接约定：Zola 页目录深度（同级 `../X`、跨顶级 `../../subdir/X`、优先 `campaign/` 规范页，不链 `campaign-ext/` 副本）。
- 三重复验（下周期执行）：①禁止样板 Grep（14 类 STUB_PATTERNS）→0 命中；②`AUDIT_MODE=url node tools/audit-links.mjs` → BROKEN_LINKS=0；③classifyPage 直跑 6 页全 deep_pass。

## 下一 cycle 入口（验收）
- 查 6 文件 mtime > 2026-08-18 19:29 且 banned=0 → 跑三重复验；未达标以硬化 brief 重派 fresh agent，勿重复派发已在跑 task。
- 验收后重算 `_fresh_inventory.mjs --api-only`：预期 deep_pass 451→457（+6 净增），stub 8869→8863。
