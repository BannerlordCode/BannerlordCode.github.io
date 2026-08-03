---
title: "开发者任务路线图 — 我想做 X 该读哪（v1.3.15）"
description: "按模组开发真实任务组织：注册 SubModule、改世界状态、加存档、写 Mission、做 UI、本地化。每个任务给出依赖链与入口类，全部链到已手写页。"
---
# 开发者任务路线图

> 不按字母表找类。先在这里定位你要做的「任务」，顺着依赖链点进具体类页。每格都链到已手写页；未写完的家族（Actions / Models）链到模块桶并标注编写中。

## 任务 → 入口类

### 1. 注册 SubModule 并在战役里加 Behavior
依赖链：`MBSubModuleBase`（SubModule 入口，页面编写中 → 见 [core 模块](../../api/core/)）→ `CampaignGameStarter.AddBehavior<T>` → 你的 `CampaignBehaviorBase` 子类。
- [CampaignGameStarter](../../api/campaign-ext/CampaignGameStarter/)
- [CampaignBehaviorBase](../../api/campaign-ext/CampaignBehaviorBase/)
- [CampaignEventReceiver](../../api/campaign-ext/CampaignEventReceiver/)（订阅战役事件）
- 风险：见 [崩溃边界 · SubModule 加载阶段](../crash-boundaries/) 与 [Campaign 事件时机](../crash-boundaries/)

### 2. 安全地改世界状态（给钱 / 杀人 / 改王国）
原则：**永远走 `*Action.Apply`，不要直接改字段**（直接改会跳过事件级联、坏档、AI 失同步）。
- 事件与 Action 入口：[CampaignEvents](../../api/campaign-ext/CampaignEvents/) · [CampaignEventReceiver](../../api/campaign-ext/CampaignEventReceiver/)
- Actions 家族页：编写中 → 见 [campaign-ext 模块](../../api/campaign-ext/)（KillCharacterAction / ChangeRelationAction / GiveGoldAction / DeclareWarAction 等）
- 实体：[Hero](../../api/campaign/Hero/) · [Clan](../../api/campaign/Clan/) · [Kingdom](../../api/campaign/Kingdom/)
- 风险：见 [崩溃边界 · 世界变更须走 Action](../crash-boundaries/)

### 3. 加自定义存档字段且不坏档
- [SaveManager](../../api/save-system/SaveManager/)
- [SaveableFieldAttribute](../../api/save-system/SaveableFieldAttribute/) · [SaveablePropertyAttribute](../../api/save-system/SaveablePropertyAttribute/)
- [CampaignBehaviorBase.SyncData(IDataStore)](../../api/campaign-ext/CampaignBehaviorBase/)（行为持久化钩子）
- [IDataStore](../../api/campaign-ext/IDataStore/)（读写自定义数据）
- 风险：见 [崩溃边界 · 存档](../crash-boundaries/)

### 4. 写 MissionBehavior 并在 Agent 死亡时处理
- [Mission](../../api/mission/Mission/) · [MissionBehavior](../../api/mission/MissionBehavior/)
- [Agent](../../api/mission/Agent/) · [Team](../../api/mission/Team/) · [Formation](../../api/mission/Formation/)
- [MissionLogic](../../api/mission-ext/MissionLogic/)（逻辑聚合）
- 风险：见 [崩溃边界 · Agent/Mission 生命周期](../crash-boundaries/)

### 5. 改党派战争得分 / 经济数值
- [GameModels](../../api/campaign-ext/GameModels/)（模型聚合入口）
- 具体模型（PartySpeed/Wage/Diplomacy/…）页面编写中 → 见 [campaign-ext 模块](../../api/campaign-ext/)
- 风险：替换模型要经 `GameModels` 注册，直接 new 会被覆盖。

### 6. 做 UI 界面（Gauntlet）
- [ScreenManager](../../api/gui/ScreenManager/) · [ScreenBase](../../api/campaign-ext/ScreenBase/)
- [GauntletLayer](../../api/engine/GauntletLayer/)（加载 movie / 绑定 DataSource）
- ViewModel 模式 → 见 [viewmodel 模块](../../api/viewmodel/)
- 风险：见 [崩溃边界 · UI/ViewModel 寿命](../crash-boundaries/)

### 7. 本地化文本
- [TextObject](../../api/localization/TextObject/)

### 8. 实体 / 据点相关
- [MobileParty](../../api/campaign/MobileParty/) · [PartyBase](../../api/campaign/PartyBase/) · [Settlement](../../api/campaign/Settlement/) · [Town](../../api/campaign/Town/) · [Village](../../api/campaign/Village/) · [Workshop](../../api/campaign/Workshop/)
- [Clan](../../api/campaign/Clan/) · [Kingdom](../../api/campaign/Kingdom/) · [Army](../../api/campaign-ext/Army/) · [MapEvent](../../api/campaign/MapEvent/) · [SiegeEvent](../../api/campaign-ext/SiegeEvent/)
- [ItemObject](../../api/core/ItemObject/) · [Equipment](../../api/core-extra/Equipment/) · [ItemRoster](../../api/campaign-ext/ItemRoster/) · [TroopRoster](../../api/campaign-ext/TroopRoster/)

## 参见

- ↑ [架构总览](../)
- ↔ [文档契约](../doc-contract/) · [崩溃与存档边界](../crash-boundaries/)
- ↓ [API 参考](../../api/)
