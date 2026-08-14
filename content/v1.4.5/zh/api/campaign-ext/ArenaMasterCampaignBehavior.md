---
title: "ArenaMasterCampaignBehavior"
description: "角斗场老板 NPC：教学（锦标赛/练习战）、城镇 arena Location 生成、菜单选项与报名、练习战奖励结算。"
---
# ArenaMasterCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox
**类型：** `public class ArenaMasterCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**源文件:** `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/ArenaMasterCampaignBehavior.cs`

## 概述

`ArenaMasterCampaignBehavior` 负责城镇里的「角斗场老板」这条故事线：把角斗场主 `TournamentMaster` 摆进城镇 `arena` Location；通过对话教会玩家锦标赛/练习战机制；在 `town_arena` 菜单挂上「练习战」选项；并在玩家确认后报名锦标赛或开始练习战。与 `BarberCampaignBehavior` 不同，它**确实持有需要存档的状态**——`_arenaMasterHasMetInSettlements`（已见过的城镇列表）和 `_knowTournaments`（是否已被告知锦标赛），二者都在 `SyncData` 中持久化。它是研究「带存档的 CampaignBehavior」与「对话→Mission 流转」的标准范例。

## 心智模型

把它想成「角斗场这条线的导演 + 记账员」。**战役层**活动：它监听 `SettlementEntered`（主角进城→生成角斗场主）、`OnSessionLaunchedEvent`（注册对话与菜单）、`OnGameLoadFinishedEvent`（读档后把角斗场主重新摆回）、`AfterMissionStarted`（若从菜单进练习战则自动开打）。

它内部维护两份**持久化**状态：玩家在哪些城镇见过角斗场老板（`_arenaMasterHasMetInSettlements`），以及玩家是否已经「知道锦标赛这回事」（`_knowTournaments`）。后者是关键的门禁：在玩家第一次从对话得知锦标赛之前，`town_arena` 菜单的「练习战」选项是禁用并提示「先和角斗场老板聊聊」的。**这是一个典型的『先对话解锁、后菜单可用』模式**，mod 自己做类似功能时应沿用这种 `_knowXxx` 标志位 + `SyncData` 的做法，而不是每次都重新判定。

生命周期：战役启动 → `RegisterEvents` 订阅四事件 → 进城/读档生成 `TournamentMaster` → 对话教学 → 玩家从菜单或对话报名 → 转入 Mission（锦标赛或 `ArenaPracticeFightMissionController` 练习战）→ 战后结算奖励。

## 何时用 / 何时不要用

- **用**：你想接入官方锦标赛/练习战入口；想在城镇 Location 提供可对话、可报名的 NPC；想学「带存档标志位 + 对话解锁菜单」的写法。
- **不要用**：想直接操控锦标赛对阵/奖励——那是 `TournamentManager`/`TournamentGame` 的职责；想在非城镇语境开始练习战——练习战与 `LocationEncounter`/`ArenaPracticeFightMissionController` 强绑定，地图 UI 直接调会崩。

## 依赖

- 上游：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（基类）、[CampaignEvents](../../campaign/CampaignEvents)（`SettlementEntered`、`OnSessionLaunchedEvent`、`OnGameLoadFinishedEvent`、`AfterMissionStarted`）、[Settlement](../../campaign/Settlement) 与 [Town](../../campaign/Town)（判断 `IsTown`、`HasTournament`）、[Hero](../../campaign/Hero)（`MainHero`、伤/伪装状态）、[MobileParty](../../campaign/MobileParty)（`MainParty`）、[CampaignGameStarter](../../campaign/CampaignGameStarter)（注册对话/菜单）。
- 下游 / 相关：[GiveGoldAction](../GiveGoldAction)（练习战奖励发钱）、[Campaign](../../campaign/Campaign)（`TournamentManager`、`GameMenuManager`、`ConversationManager`）、[Mission](../../mission/Mission) 与 `ArenaPracticeFightMissionController`（练习战控制器）、[InformationManager](../../core-extra/InformationManager)（奖励通知）、[LocationCharacter](../../campaign/LocationCharacter)（角斗场主实体）、[AgeModel](../../campaign/AgeModel)、[FaceGen](../../core-extra/FaceGen)、[SandBoxManager](../../campaign/SandBoxManager)。

## 成员说明

### SyncData(IDataStore dataStore)
**有实现**，持久化两份状态——这是它和 `BarberCampaignBehavior` 的本质区别：
```csharp
dataStore.SyncData<List<Settlement>>("_arenaMasterHasMetInSettlements", ref _arenaMasterHasMetInSettlements);
dataStore.SyncData<bool>("_knowTournaments", ref _knowTournaments);
```
新增字段必须在此登记，否则读档后丢失（典型坏档点）。

### RegisterEvents()
订阅 `SettlementEntered`、`OnSessionLaunchedEvent`、`OnGameLoadFinishedEvent`、`AfterMissionStarted`。

### AddGameMenus(CampaignGameStarter starter)
向 `town_arena` 菜单加选项 `mno_enter_practice_fight`（「练习战」），`OnConditionDelegate` 为 `game_menu_enter_practice_fight_on_condition`——在 `_knowTournaments` 为 false、主角受伤/伪装、或城镇正在办锦标赛时禁用。

### OnSettlementEntered(...) / OnGameLoadFinished() → AddArenaMaster(Settlement)
主角 `MobileParty.MainParty` 进入城镇、或读档后处于城镇且非囚犯/非被围，都会在 `arena` Location 生成 `TournamentMaster`（`CreateTournamentMaster`）。

### conversation_arena_master_post_fight_on_condition()（练习战结算）
战后复盘：读 `ArenaPracticeFightMissionController.AfterPractice` 与 `OpponentCountBeatenByPlayer`，按击败数分级发奖，并通过 `GiveGoldAction` 入账：
```csharp
if (num > 0)
{
    GiveGoldAction.ApplyBetweenCharacters(null, Hero.MainHero, num, true);
    InformationManager.DisplayMessage(new InformationMessage(
        GameTexts.FindText("str_quest_gold_reward_msg").ToString(),
        "event:/ui/notification/coins_positive"));
}
Mission.Current.SetMissionMode((MissionMode)1, false); // 退回自由模式
```
注意收款方为 `null`、付款方为主角——金币来自「世界」而非某个账户。

### conversation_arena_join_tournament_on_consequence()
报名锦标赛：结束当前 Mission 并切到锦标赛加入菜单：
```csharp
Mission.Current.EndMission();
Campaign.Current.GameMenuManager.SetNextMenu("menu_town_tournament_join");
```

### conversation_arena_join_fight_on_consequence()
报名练习战：把 `StartPlayerPracticeAfterConversationEnd` 挂到 `ConversationManager.ConversationEndOneShot`，待对话结束再开打：
```csharp
Campaign.Current.ConversationManager.ConversationEndOneShot += StartPlayerPracticeAfterConversationEnd;
```
其实现压入练习模式并启动控制器：
```csharp
Mission.Current.SetMissionMode((MissionMode)2, false);
Mission.Current.GetMissionBehavior<ArenaPracticeFightMissionController>().StartPlayerPractice();
```

### conversation_tournament_soon_on_condition()（附近锦标赛列表）
遍历 `Town.AllTowns`，用 `Campaign.Current.TournamentManager.GetTournamentGame(town)` 找有锦标赛的城镇，按 `DistanceHelper.FindClosestDistanceFromSettlementToSettlement` 排序，把最近 1–2 个写进 `NEARBY_TOURNAMENT_STRING` 文本变量。

## 风险

- **持久化字段必须登记 `SyncData`**：`_arenaMasterHasMetInSettlements` 与 `_knowTournaments` 缺一不可；派生或 fork 时漏登记 → 读档后「是否见过角斗场老板」重置，菜单门禁失效。
- **`ArenaPracticeFightMissionController` 依赖活动 Mission**：`Mission.Current.GetMissionBehavior<...>()` 在 `Mission.Current == null` 时会空引用崩溃。所有练习战入口都应在已进入 arena Mission 的语境下调用。
- **练习战只能在城镇 LocationEncounter 内开始**：`game_menu_enter_practice_fight_on_consequence` 通过 `PlayerEncounter.LocationEncounter.CreateAndOpenMissionController` 开局，脱离城镇场景会失败。
- **门禁 `_knowTournaments`**：在第一次对话教学前，`town_arena` 的练习战选项是禁用态；mod 复用此模式时注意标志位的初始化时机。
- **受伤/伪装阻断**：`conversation_town_arena_fight_join_check_on_condition` 与菜单条件都会因 `IsWounded`/`IsMainHeroDisguised` 直接禁用，调相关流程前先清状态。

## 最小真实示例

从菜单进入练习战（官方 `game_menu_enter_practice_fight_on_consequence` 精简版）：
```csharp
// 确保本城镇已记录「见过角斗场老板」
if (!_arenaMasterHasMetInSettlements.Contains(Settlement.CurrentSettlement))
    _arenaMasterHasMetInSettlements.Add(Settlement.CurrentSettlement);

// 在城镇 Location 内开练习战 Mission
PlayerEncounter.LocationEncounter.CreateAndOpenMissionController(
    LocationComplex.Current.GetLocationWithId("arena"), null, null, null);
_enteredPracticeFightFromMenu = true;
```
战后发奖（永远用 Action，不直写 `Gold`）：
```csharp
GiveGoldAction.ApplyBetweenCharacters(null, Hero.MainHero, rewardGold, true);
```

## 导航

- ↑ 父级/枢纽：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（基类与生命周期契约；也是带存档 Behavior 的对照范本）
- ↔ 同级行为：[BarberCampaignBehavior](../BarberCampaignBehavior)（同样在城镇 Location 生成 NPC；但**无**存档状态，可对照理解 `SyncData` 的有无）
- 相关系统：[GiveGoldAction](../GiveGoldAction)（奖励通道）、[Mission](../../mission/Mission) 与 `ArenaPracticeFightMissionController`（练习战控制器）、[Campaign](../../campaign/Campaign)（`TournamentManager`/`GameMenuManager`）
