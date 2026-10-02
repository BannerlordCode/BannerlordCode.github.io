# Wave #T 验收证据（王国决策框架簇 · 6/6 deep_pass）

生成时间：2026-08-19 ~00:28 周期派发，三重复验于本周期收尾完成。
目标：将 6 个被自动生成器写成 stub 的「王国决策框架」页整页重写为达标深页。
位置：`content/v1.4.5/zh/api/campaign/`

## 三重复验原始输出

### (1) classify 门禁 `node tools/_verify_waveT_classify.mjs`
```
PASS content/v1.4.5/zh/api/campaign/KingdomDecisionProposalBehavior.md -> deep_pass [mental>80|dep-or-see-links=19|real-csharp-example|overview-ok]
PASS content/v1.4.5/zh/api/campaign/DecisionOutcome.md -> deep_pass [mental>80|dep-or-see-links=17|real-csharp-example|overview-ok]
PASS content/v1.4.5/zh/api/campaign/KingdomDecisionPermissionModel.md -> deep_pass [mental>80|dep-or-see-links=18|real-csharp-example|overview-ok]
PASS content/v1.4.5/zh/api/campaign/DefaultKingdomDecisionPermissionModel.md -> deep_pass [mental>80|dep-or-see-links=20|real-csharp-example|overview-ok]
PASS content/v1.4.5/zh/api/campaign/KingdomDecisionMapNotification.md -> deep_pass [mental>80|dep-or-see-links=10|real-csharp-example|overview-ok]
PASS content/v1.4.5/zh/api/campaign/KingdomDecisionConcludedLogEntry.md -> deep_pass [mental>80|dep-or-see-links=9|real-csharp-example|overview-ok]
ALL_DEEP_PASS
```
（链接修复后复验仍 ALL_DEEP_PASS，dep 链接数因修复而提升。）

### (2) 14 类 STUB_PATTERNS 独立 Grep（6 页）
```
0  KingdomDecisionProposalBehavior.md
0  DecisionOutcome.md
0  KingdomDecisionPermissionModel.md
0  DefaultKingdomDecisionPermissionModel.md
0  KingdomDecisionMapNotification.md
0  KingdomDecisionConcludedLogEntry.md
--- TOTAL STUB_PATTERN HITS: 0 (须为 0) ---
```

### (3) 断链审计 `AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.4.5/zh/api node tools/audit-links.mjs`
首跑：`BROKEN_LINKS=9`（FILES_WITH_BROKEN=2），均为路径层级错误：
- `KingdomDecisionMapNotification.md`：`../../Kingdom` / `../../CampaignEvents` / `../../Clan`（应为 `../X` 兄弟链接，误升两级）
- `KingdomDecisionPermissionModel.md`：`../MBGameModel`（应为 `../../core-extra/MBGameModel`）

修复后复验：
```
FILES=9421
TOTAL_LINKS=31647
BROKEN_LINKS=0
RESOLVE_NEITHER=0
FILES_WITH_BROKEN=0
```

### (4) 覆盖率重算 `node tools/_fresh_inventory.mjs --version 1.4.5 --lang zh --api-only`
```
total pages scanned: 9421
tally: {"deep_pass":486,"family_entry_pass":73,"noise":28,"stub":8834}
```
对比 Wave #S 基线（deep_pass=480 / stub=8840）：**deep_pass +6（→486），stub −6（→8834）**。

## 源准确性纠偏亮点（手写重建要求的「读源码、敢纠偏」）
- **DecisionOutcome**：抽象基类**无 Apply 方法**——落地在 `KingdomDecision.ApplyChosenOutcome(DecisionOutcome)`；声量 `Support` 按 Supporter 权重（SlightlyFavor=0.2/StronglyFavor=0.4/FullyPush=1.0）累加，`Merit = InitialMerit*(1+Support)`。推翻「本类直接落世界状态」的简报猜测。
- **KingdomDecisionProposalBehavior**：是**普通 CampaignBehavior**（非 *TypeDefiner 注册），由 `SandBoxManager.cs:153 AddBehavior(new KingdomDecisionProposalBehavior())` 注册；`SyncData` 手动序列化 `_kingdomDecisionsList`（无 [SaveableField]，旧档 <v1.3.0 兜底空列表）；`UpdateKingdomDecisions` 是唯一公开推进入口。
- **KingdomDecisionPermissionModel**：抽象类 `MBGameModel<KingdomDecisionPermissionModel>`，定义 7 个抽象判定方法，由 8 个 `*Decision.IsAllowed()` 在流程推进时回调；替换经 `GameModels`（SandBoxManager:258 AddModel）。
- **DefaultKingdomDecisionPermissionModel**：除媾和外全部无条件 `return true`；唯一带真实外交约束的是 `IsPeaceDecisionAllowedBetweenKingdoms`（查 DiplomacyModel.IsAtConstantWar/IsPeaceSuitable 与 IAllianceCampaignBehavior.IsAtWarByCallToWarAgreement）；本类无 [SaveableField]，仅懒缓存 IAllianceCampaignBehavior 引用（不序列化）。
- **KingdomDecisionMapNotification**：纯「末端呈现数据」，不计算规则、不推进流程；仅持 `KingdomOfDecision`/`Decision` 两个 [SaveableProperty] 引用，构造时由 `DefaultLogsCampaignBehavior.OnKingdomDecisionAdded/Concluded` 一次性赋值。
- **KingdomDecisionConcludedLogEntry**：构造时一次性冻结的快照（`Kingdom`/`_isVisibleNotification=!isPlayerInvolved`/`_notificationText`），三者 [SaveableField]，由 SaveableCampaignTypeDefiner 注册（class 149）；唯一构造点在 `DefaultLogsCampaignBehavior.cs:153`。

## 修复记录
- 修正 9 处断链：3×`../../Kingdom|CampaignEvents|Clan`→`../X`，1×`../MBGameModel`→`../../core-extra/MBGameModel`。未改动任何有效链接（`../../Campaign`、`../../campaign-ext/*`、`../../core-extra/*` 保持原样）。

## 健康 / 未完成 / 待用户决策
- 结构口径：R1 gap=0 / sTier 62/62 / 质量 blockers=0（CI 绿）。
- 内容口径：stub 8834(93.8%) / deep_pass 486（本波 +6 净增）。
- 四项战略决策仍挂起：①audit:quality:strict 接 CI；②并行手写节奏固化；③覆盖口径改判「达标=真手写」；④**campaign/ vs campaign-ext/ 去重**（~1313 孤儿 stub 待裁；本波即暴露同类型在 campaign/ 与 campaign-ext/ 双页并存，待用户裁决）。
