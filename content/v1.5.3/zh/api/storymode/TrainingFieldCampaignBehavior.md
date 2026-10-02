---
title: "TrainingFieldCampaignBehavior"
description: "训练场行为：注册训练场专属菜单与兄长对话线、在角色创建后强制进入训练场任务、并处理教程的「打 vs 跳过」分支。"
---
# TrainingFieldCampaignBehavior

**Namespace:** StoryMode.GameComponents.CampaignBehaviors
**Module:** StoryMode
**Type:** `public class TrainingFieldCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/CampaignBehaviors/TrainingFieldCampaignBehavior.cs`

## 概述

教学任务第一站是训练场——玩家与兄长在废弃的罗马演武场里练剑，学完再分头行动。这个行为负责训练场这一整站的一切：注册 `training_field_menu`（进入训练 / 离开）与 `[GameMenuInitializationHandler]` 的背景设置；注册兄长与玩家之间十来行对话（练不练、要不要跳过、要不要问强盗的事）；在角色创建结束时把玩家直接传送进训练场并开一场遭遇；以及用 `_completeTutorial` 这个标志把「跳过教程」这个决定传递到任务结束那一刻。

## 心智模型

**注册无条件**：`StoryModeSubModule.AddBehaviors` 里 `AddBehavior(new TrainingFieldCampaignBehavior())`，不受阶段限制。即便玩家读的是主线已完成的存档，这个行为依然注册、依然注册菜单与对话——只是所有条件判定都不会命中。

**三个订阅**：`OnSessionLaunchedEvent`、`OnMissionEndedEvent`、`OnCharacterCreationIsOverEvent`。

**`OnCharacterCreationIsOver(int index)` 的 index 语义**：`index == 1` 表示主线角色创建（`OnCharacterCreationIsOverEvent` 会为不同角色多次触发，用 index 区分）。命中且 `SkipTutorialMission` 为 false 时，做三件事：

```
Settlement settlement = Settlement.Find("tutorial_training_field");
MobileParty.MainParty.Position = settlement.Position;
EncounterManager.StartSettlementEncounter(MobileParty.MainParty, settlement);
PlayerEncounter.LocationEncounter.CreateAndOpenMissionController(
    LocationComplex.Current.GetLocationWithId("training_field"), null, null, null);
```

最后一行紧接着读 `LocationComplex.Current`——**它必须在上一步已经把当前聚落切过去之后才非 null**。

**跳过教程的两段式传递**：

1. 对话里 `storymode_skip_tutorial_from_conversation_consequence` 只做一件事：`this._completeTutorial = true;`
2. `OnMissionEnded(IMission mission)` 里若 `_completeTutorial` 为真 → `StoryModeManager.Current.MainStoryLine.CompleteTutorialPhase(true)`（参数是「是否跳过」），然后复位为 false。

`_completeTutorial` **是私有字段，不进 `SyncData`**——但它在一次任务会话内必然被消费掉，因此源码判定为不需要存档。

**`SkipTutorialMission` 是唯一的 public 字段**，不进存档，作用是「下次角色创建时不要自动进训练场任务」。

**对话条件的关键一行**（`story_mode_training_field_default_conversation_with_brother_condition`）：

```
StoryModeManager.Current.MainStoryLine.IsPlayerInteractionRestricted
&& (Settlement.CurrentSettlement == null || Settlement.CurrentSettlement.StringId != "village_ES3_2")
&& CharacterObject.OneToOneConversationCharacter == StoryModeHeroes.ElderBrother.CharacterObject
&& _talkedWithBrotherForTheFirstTime
```

第二个条件是个 `||` 的否定：`Settlement.CurrentSettlement` 为 null 也算通过。这是为了在野外遇到兄长时也能触发「你准备好了吗」的对话。

**常见误用与坑**

- **`_completeTutorial` 不进存档**。若玩家在对话点了「跳过」之后、任务结束之前存档，读档后这个标志丢失，跳过不会生效。
- **`SkipTutorialMission` 也不进存档**。它被设为 true 后在 `OnCharacterCreationIsOver` 末尾立即复位为 false，是一次性的。
- **`LocationComplex.Current` 在 `OnCharacterCreationIsOver` 里被连续使用**：先 `StartSettlementEncounter` 再 `GetLocationWithId`。若 `StartSettlementEncounter` 因为聚落状态异常失败（例如已在同一聚落的遭遇中），`LocationComplex.Current` 可能是上一个聚落的，训练场任务会在错误地点开起来。
- **对话 priority 是 `1000001`**（普通行是 100），这是刻意的超高优先级，用来保证训练场对话压过通用 `start` 话题的行。
- **`training_field_menu` 的 id 被 [StoryModeEncounterGameMenuModel](../StoryModeEncounterGameMenuModel) 以字符串方式引用**，两处硬编码同一个字面量。
- **`game_menu_training_field_on_init` 会 `Campaign.Current.GameMenuManager.MenuLocations.Clear()`**——全局清空菜单位置，这是训练场专属菜单必须的，但任何依赖其它菜单 location 的 mod 会受影响。

## 主要成员

- `public bool SkipTutorialMission`
  唯一的公开字段，公开是为了让别处（教程相关行为）能设置「下次跳过自动训练场任务」。不进存档。
- `public override void RegisterEvents()`
  订阅三个事件。
- `public override void SyncData(IDataStore dataStore)`
  空实现。
- 私有 `OnCharacterCreationIsOver(int index)`
  `index == 1` 时把玩家传送进训练场并开遭遇，最后复位 `SkipTutorialMission`。
- 私有 `OnMissionEnded(IMission mission)`
  消费 `_completeTutorial`，调 `CompleteTutorialPhase(true)`。
- 私有 `OnSessionLaunched(CampaignGameStarter campaignGameStarter)`
  注册菜单、菜单选项、背景设置，以及全部对话行与玩家选项。
- 私有静态 `storymode_tutorial_training_field_game_menu_on_init_background(MenuCallbackArgs args)`
  带 `[GameMenuInitializationHandler("training_field_menu")]` 特性，把菜单背景设为训练场的 `WaitMeshName`。**特性参数是硬编码的菜单 id**。
- 私有静态 `game_menu_enter_training_field_on_consequence` / `game_menu_settlement_leave_on_consequence`
  分别是 `CreateAndOpenMissionController` 与 `PlayerEncounter.LeaveSettlement()` + `Finish(true)`。
- 私有 `storymode_training_field_start_on_condition()`
  首段对话的条件，同时用 `StringHelpers.SetCharacterProperties` 注入 `PLAYER_LITTLE_BROTHER` / `PLAYER_LITTLE_SISTER` 两个文本变量。
- 私有 `storymode_go_to_end_tutorial_village_consequence()` / `storymode_skip_tutorial_from_conversation_consequence()` / `storymode_skip_tutorial_from_conversation_clickable_condition(out TextObject explanation)`
  结束教程的三条路径：正常打完设 `_talkedWithBrotherForTheFirstTime`、跳过设 `_completeTutorial`、`_completeTutorial` 为真时挂 `ConversationEndOneShot` 结束任务。
- 私有 `storymode_asked_about_raiders_1/2_clickable_condition(out TextObject explanation)` 与对应 `_consequence()`
  四个互斥的一次性分支，用 `_askedAboutRaiders1` / `_askedAboutRaiders2` 两个标志位控制「问过就不能再问」。

## 使用示例

```csharp
// 场景：mod 想让训练场在第二次进入时不再强制开战斗任务
public class TrainingFieldPatcher : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnCharacterCreationIsOverEvent.AddNonSerializedListener(this, OnCreationOver);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnCreationOver(int index)
    {
        if (index != 1)
        {
            return;
        }
        TrainingFieldCampaignBehavior field =
            Campaign.Current.GetCampaignBehavior<TrainingFieldCampaignBehavior>();
        if (field == null)
        {
            return;
        }
        // 该字段是 public，专为外部干预准备
        field.SkipTutorialMission = true;
        Debug.Print("training field mission will be skipped");
    }
}
```

## 风险与边界

- **关键状态不进存档**：`_completeTutorial`、`_talkedWithBrotherForTheFirstTime`、`_askedAboutRaiders1/2`、`SkipTutorialMission` 全部无 `SyncData`。设计上它们都是「一次性、跨帧即消费」的标志，但**在标志与消费之间存档会丢状态**——这是本层最实际的风险点。
- **`LocationComplex.Current` 的隐式依赖**：`OnCharacterCreationIsOver` 里连着三行操作互相依赖，中间任何一步失败都会连锁出错。覆写时不要拆开重排。
- **菜单 id 与对话 id 双重硬编码**，且被 [StoryModeEncounterGameMenuModel](../StoryModeEncounterGameMenuModel) 与教程对话共享。没有常量表。
- **无条件注册但对已完成的存档无效**：所有条件判定都会落空，行为成为纯粹的性能开销（每次会话启动都注册一批对话行）。
- **`GameMenuManager.MenuLocations.Clear()` 是全局副作用**，只在 `training_field_menu` 的 on-init 里执行，改动这个菜单的行为时要留意对其它菜单的影响。

## 依赖关系

- [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) — 行为基类与空 `SyncData` 的合法实现
- [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) — 调用 `RegisterEvents()`，也是 `GetCampaignBehavior<TrainingFieldCampaignBehavior>()` 的目标
- [CampaignEvents](../../campaign/CampaignEvents) — `OnSessionLaunchedEvent` / `OnMissionEndedEvent` / `OnCharacterCreationIsOverEvent` 的来源
- [CampaignGameStarter](../../campaign/CampaignGameStarter) — `AddBehavior` 注册入口与 `AddGameMenu` / `AddDialogLine` / `AddPlayerLine` 的宿主
- [StoryModeEncounterGameMenuModel](../StoryModeEncounterGameMenuModel) — 以字符串 `training_field_menu` 引用本行为注册的菜单
- [TutorialPhaseCampaignBehavior](../TutorialPhaseCampaignBehavior) — 教程阶段的整体推进者，与本行为共同完成教学
- [module-map](../../../architecture/module-map) — StoryMode 模块的组成与依赖