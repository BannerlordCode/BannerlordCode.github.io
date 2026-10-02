---
title: "VillagersInNeed"
description: "教程潜行任务：夜间与村民对话触发潜入庄园任务，救出村长后领取奖励并赠送一套潜行装备。"
---
# VillagersInNeed

**Namespace:** StoryMode.Quests.TutorialPhase
**Module:** StoryMode
**Type:** `public class VillagersInNeed : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** StoryMode/Quests/TutorialPhase/VillagersInNeed.cs

## 概述

教程里的潜行教学。它把一整段"庄园潜入 → 与村长对话 → 任务结算"包装成一个任务：先在村庄里找村民搭话（必须晚上），对话后拉起一个 `SneakIntoTheVillaMission` 潜行关卡，在关卡里救出村长，回来再对话领奖。与其它教程任务不同，它有明确的**失败路径**（潜行失败后村民对话内容变），并且在完成时会把一整套潜行装备塞进主队物品栏，让玩家之后能正常玩潜行。

## 心智模型

无参构造，目标村庄通过私有属性 `_village => Settlement.Find("village_ES3_2")` 硬编码。它有三段状态：`!_talkedToVillagers`（还没跟村民说话）→ `_talkedToVillagers`（已触发庄园任务）→ `_rescuedHeadman`（任务已结算）。`_failedTheMission` 与 `_startVillaMission` 是两个不入存档的瞬时标志。

推进靠**村庄菜单钩子**而不是事件：`GameMenuOpened` 在玩家打开 `village` 菜单时按顺序判断——需要拉起庄园任务就拉起、需要跟村民初次对话就开对话、救完村长就开村长对话。对应的菜单选项 `village_talk_to_villager_on_condition` 在白天直接 `IsEnabled = false`，主队受伤也禁用。

坑：第一，`OnRescueMissionFailed()` 与 `OnHeadmanRescued()` 是 **public 方法，由潜行任务的行为回调调用**（`SneakIntoTheVillaMissionController`），不是事件订阅者。这两个方法必须保持 public 和精确命名，否则潜行关卡结束时的状态同步会断掉。第二，`talk_to_headman_in_villa_on_consequence` 里直接 `Mission.Current.GetMissionBehavior<SneakIntoTheVillaMissionController>().OnAfterTalkingToPrisoner()`——如果潜行关卡没加载就会 NRE。第三，它抢 `IsSettlementBusyEvent` 把村庄优先级拉到 400，其他系统（例如玩家自己的任务）在这个村庄开不了事件。

## 主要成员

- `VillagersInNeed()`：无参构造。`AddTrackedObject(_village)`、`SetDialogs()`、`AddGameMenus()`、`InitializeQuestOnCreation()`。
- `public CharacterObject Headman`：读 `MBObjectManager` 里的 `tutorial_npc_captive_headman`，供潜行行为识别"救出对象"。
- `public const string StealthEquipmentId / VillaSceneId / HeadmanId`：分别是潜行装备组 ID、庄园场景 ID、村长 CharacterObject ID。`StealthEquipmentId` 在完成钩子里用于发放奖励。
- `public void OnRescueMissionFailed()` / `public void OnHeadmanRescued()`：**外部回调入口**。前者置 `_failedTheMission`，后者置 `_rescuedHeadman`。
- `private void GameMenuOpened(MenuCallbackArgs args)`：驱动整个流程的循环泵。
- `private void OpenConversationWithVillager()` / `OpenConversationWithHeadman()`：分别用 `CampaignMission.OpenConversationMission` 开一段任务内对话。
- `private void StartVillaMission()`：`StoryModeMissions.OpenSneakIntoTheVillaMission(VillaSceneId, CampaignTime.Now, null)`。
- `protected override void OnCompleteWithSuccess()`：写完成日志，并把 `stealth_tutorial_set_player` 这套装备的 12 个非空槽位逐个塞进 `MobileParty.MainParty.ItemRoster`。
- `private void TakeRewards()`：`GiveGoldAction.ApplyBetweenCharacters(null, Hero.MainHero, 100, false)`。
- `[SaveableField(1..3)]`：`_talkedToVillagers`、`_failedTheMission`、`_firstConversationWithVillagerOpened`。注意 `_startVillaMission` / `_isHeadmanFollowing` / `_rescuedHeadman` **都不存档**——`_rescuedHeadman` 丢失意味着读档后救出的村长状态需要靠潜行行为重放。

## 使用示例

```csharp
// 村庄菜单钩子：按当前阶段决定拉起潜行关卡还是开对话
private void GameMenuOpened(MenuCallbackArgs args)
{
    if (Settlement.CurrentSettlement != this._village) return;
    if (args.MenuContext.GameMenu.StringId != "village") return;
    if (this._startVillaMission) { this.StartVillaMission(); return; }
    if (!this._talkedToVillagers && !this._firstConversationWithVillagerOpened)
    { this.OpenConversationWithVillager(); return; }
    if (this._rescuedHeadman) this.OpenConversationWithHeadman();
}

// 完成任务后发放潜行装备
MBEquipmentRoster set = MBObjectManager.Instance.GetObject<MBEquipmentRoster>(StealthEquipmentId);
for (int i = 0; i < 12; i++)
    if (!set.DefaultEquipment[i].IsEmpty)
        MobileParty.MainParty.ItemRoster.AddToCounts(set.DefaultEquipment[i], 1);
```

## 风险与边界

跨读档是这个类型最大的问题：`_rescuedHeadman` 与 `_isHeadmanFollowing` 不参与序列化，读档后如果玩家刚好在庄园关卡中途或刚救出村长但没结算，任务会退化到"需要重新跟村民说话"的阶段。`InitializeQuestOnGameLoad` 只重挂对话、不重挂菜单选项——不过菜单选项是通过 `AddGameMenus` 走 `CampaignEvents.OnGameLoadFinishedEvent` 补挂的，勉强闭环。另一个边界：`private static int SettlementBusyPriority => 400` 会压掉其他系统对同一村庄的事件占用。`TutorialPhase.Instance.IsSkipped`（跳过教程的存档）会让对话文本走另一分支，但流程条件相同。

## 依赖关系

- [LocateAndRescueTravellerTutorialQuest（同阶段并行任务）](../LocateAndRescueTravellerTutorialQuest)
- [TalkToTheHeadmanTutorialQuest（前置教程）](../TalkToTheHeadmanTutorialQuest)
- [CampaignEvents（GameMenuOpened / IsSettlementBusyEvent）](../../campaign/CampaignEvents)