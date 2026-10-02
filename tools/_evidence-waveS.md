# Wave #S 验收证据（战役核心 CampaignBehavior 手写深页）

日期：2026-08-18（~23:5x）
目标：6 页整页手写 → deep_pass，位置 `content/v1.4.5/zh/api/campaign/`
- CaravansCampaignBehavior / CraftingCampaignBehavior / CrimeCampaignBehavior / EducationCampaignBehavior / RomanceCampaignBehavior / CampaignFactionManagerBehaviour
- task_ids: agent-1e6cfa00 / agent-c59d9a42 / agent-21081729 / agent-2d767aa9 / agent-923b5c32 / agent-81531eb8

## (1) classify 门禁 — ALL_DEEP_PASS (6/6)
```
PASS content/v1.4.5/zh/api/campaign/CaravansCampaignBehavior.md -> deep_pass [mental>80|dep-or-see-links=14|real-csharp-example|overview-ok]
PASS content/v1.4.5/zh/api/campaign/CraftingCampaignBehavior.md -> deep_pass [mental>80|dep-or-see-links=17|real-csharp-example|overview-ok]
PASS content/v1.4.5/zh/api/campaign/CrimeCampaignBehavior.md -> deep_pass [mental>80|dep-or-see-links=12|real-csharp-example|overview-ok]
PASS content/v1.4.5/zh/api/campaign/EducationCampaignBehavior.md -> deep_pass [mental>80|dep-or-see-links=14|real-csharp-example|overview-ok]
PASS content/v1.4.5/zh/api/campaign/RomanceCampaignBehavior.md -> deep_pass [mental>80|dep-or-see-links=13|real-csharp-example|overview-ok]
PASS content/v1.4.5/zh/api/campaign/CampaignFactionManagerBehaviour.md -> deep_pass [mental>80|dep-or-see-links=12|real-csharp-example|overview-ok]
ALL_DEEP_PASS
```

## (2) 禁止样板扫描（14 类 STUB_PATTERNS 代表性短语 Grep）— 0 命中
```
grep -E "公开类型|阅读时先通过属性|Read properties|SomeValue|service = |Obtain an instance of this type from the relevant subsystem API|entry point or data node|返回当前对象中|读取并返回当前对象|先从命名空间|入口或数据节点" 6页
=> 输出空（EXIT=0，无匹配行）
```

## (3) 断链审计 — BROKEN_LINKS=0
scoped `AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.4.5/zh/api node tools/audit-links.mjs`：
```
FILES=9421
TOTAL_LINKS=31387
BROKEN_LINKS=0
FILES_WITH_BROKEN=0
RESOLVE_NEITHER=0
```
（全树 BROKEN_LINKS 在上一波 #R 验收时为 0；本波新增链接均在 v1.4.5/zh/api 子树内，scoped 已覆盖。）

## 覆盖率重算（`_fresh_inventory.mjs --version 1.4.5 --lang zh --api-only`）
- 总页数 9421
- tally: {deep_pass:480, family_entry_pass:73, noise:28, stub:8840}
- 对比上一波 #R 收尾（deep_pass 475 / stub 8845）：
  - **deep_pass 475 → 480（+5）**
  - **stub 8845 → 8840（−5）**
- 说明：6 个目标页经 classify 全部 deep_pass（无一在 stub 清单出现）；+5 净增是因为 `RomanceCampaignBehavior`（2263 B）在 #R 基线即已处于 deep_pass 档，本波重写后重申，故净 +5 而非 +6。

## 源准确性纠偏亮点（手写重建要求：读源码、敢纠偏）
- `CrimeCampaignBehavior`：无专属 *TypeDefiner，由 `SandBoxManager.cs:136` `AddBehavior` 注册；犯罪值活在 `Clan/Kingdom.MainHeroCrimeRating`，改值走 `ChangeCrimeRatingAction`、结清走 `PayForCrimeAction`，本 Behavior 无公开查询方法。
- `RomanceCampaignBehavior`：恋爱层级走 `ChangeRomanticStateAction`，婚姻落定走 `MarriageAction`，状态查询走 `Romance.GetRomanticState`；`SyncData` 仅序列化 `_previousRomancePersuasionAttempts`。
- `CampaignFactionManagerBehaviour`：brief 提示「由 *TypeDefiner 注册」与源码不符——实际由 `SandBoxManager.cs:156` `AddBehavior` 注册，无 *TypeDefiner；真实职责是「派系结构变动后重算 FactionsAtWarWith 派生缓存」，宣战/媾和落定走 `DeclareWarAction`/`MakePeaceAction`，本行为是成员增减时的安全网；`SyncData` 为空（纯派生缓存，无 [SaveableField]）。
- `CaravansCampaignBehavior`：内嵌 `CaravansCampaignBehaviorTypeDefiner : SaveableTypeDefiner`（id 60000）自动注册；`SyncData` 序列化 6 个以 `MobileParty` 为键的字典。
- `CraftingCampaignBehavior`：内嵌 `CraftingCampaignBehaviorTypeDefiner`（id 150000）；`Get/SetHeroCraftingStamina` 是唯一受支持体力入口；熔炼/精炼直接改 `MobileParty.MainParty.ItemRoster`。
- `EducationCampaignBehavior`：由 `SandBoxManager.cs:90` `AddBehavior` 注册（无 *TypeDefiner）；`EducationVM` 经 `IEducationLogic` 调 `Finalize` 经 `HeroDeveloper` 发放增益。

## 待用户裁决项（非阻塞）
- 3 页（Crime / Romance / CampaignFactionManagerBehaviour）把 `*Action` 链到 `../../campaign-ext/`。核查 `content/v1.4.5/zh/api/campaign/` 下 7 个 *Action 页（ChangeCrimeRatingAction / PayForCrimeAction / ChangeRomanticStateAction / MarriageAction / DeclareWarAction / MakePeaceAction / ChangeKingdomAction）**均不存在**——它们仅在 `campaign-ext/` 孤儿树有页。故当前 `campaign-ext/` 链接是正确目标（唯一存在的页），**不强行改**。待决策④（campaign/ vs campaign-ext/ 去重）裁定后，或这些 Action 在 campaign/ 建立规范页后，再归位链接。
- 决策④未决前维持「campaign/ 为规范树、避开 campaign-ext/」工作假设；本波新增链接未引入断链。
