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

## 怎么用

### 怎么拿到它

`public class VillagersInNeed : StoryModeQuestBase` 声明在 `bannerlord-1.5.3/StoryMode/Quests/TutorialPhase/VillagersInNeed.cs:22`，全文 562 行。

构造函数**无参**（约 `:99`），基类 `: base("talk_to_villagers_in_village_quest", null, CampaignTime.Never)`（`:100`）——任务 id 硬编码、`questGiver` 传 `null`、时限 `Never`。存档 id 18（`SaveableStoryModeTypeDefiner.cs:60`，属 `1`–`18` 那段连续号）。

**谁创建它**：[FirstPhaseCampaignBehavior](../FirstPhaseCampaignBehavior) 的 `StartStealthTutorial()`（`:133`）在玩家离开练武场时 `new VillagersInNeed().StartQuest();`（`:135`），紧接着 `StoryModeEvents.Instance.OnStealthTutorialActivated();`（`:136`）。**创建与广播是紧挨着的两句**——任务一出生，潜行教学事件就已经广播出去了。

`RegisterEvents()`（`:122`）挂**五条**：`SettlementEntered`（`:124`）、`GameMenuOpened`（`:125`）、`OnGameLoadFinishedEvent`（`:126`）、`OnMissionEndedEvent`（`:127`）、`IsSettlementBusyEvent`（`:128`，`ReferenceAction<Settlement, object, ref int>` → `IsSettlementBusy`，`:132`）。

`AddGameMenus()`（`:175`）注册村庄菜单选项 `AddGameMenuOption("village", "talk_to_villager", ...)`（`:177`）。

**两条对话流都挂在 `"start"` 且 priority 都是 `1000010`**（`:307`、`:311`），配六个委托：`talk_to_headman_in_villa_on_consequence()`（`:349`）、`talk_to_headman_in_villa_on_condition()`（`:356`）、`talk_to_headman_in_villa_after_talking_on_condition()`（`:367`）、`talk_to_headman_in_villa_skipped_on_condition()`（`:378`）、`talk_to_headman_in_villa_not_skipped_on_condition()`（`:384`）、`talk_to_villagers_not_skipped_on_consequence()`（`:423`）。

**「跳过教学」被编进了条件委托**：`skipped` 版返回 `talk_to_headman_in_villa_on_condition() && TutorialPhase.Instance.IsSkipped`（`:380`），`not_skipped` 版返回同一个条件 `&& !TutorialPhase.Instance.IsSkipped`（`:386`）——**同一个判据的两极**。后果侧同理（`:401`、`:409`、`:465`、`:473` 都读 `IsSkipped`）。

**两个公开方法是它的对外接口**：`OnRescueMissionFailed()`（`:487`）与 `OnHeadmanRescued()`（`:493`）；`TakeRewards()`（`:390`）是 private。场景入口是 `StartVillaMission()`（`:431`）。

四个资源 id 常量：`StealthEquipmentId = "stealth_tutorial_set_player"`（`:529`）、`VillaSceneId = "villa_singular_c"`（`:532`）、`HeadmanId = "tutorial_npc_captive_headman"`（`:535`，public），外加 `private const string VillagerId = "tutorial_npc_questgiver_villager"`（`:538`）。

`OnStartQuest()`（`:115`）按 `TutorialPhase.Instance.IsSkipped` 二选一写开场日志（`:117`）。

存档三个布尔：`_talkedToVillagers`（1，`:541`）、`_failedTheMission`（2，`:545`）、`_firstConversationWithVillagerOpened`（3，`:549`）。另外三个 `_startVillaMission`（`:552`）、`_isHeadmanFollowing`（`:553`）、`_rescuedHeadman`（`:556`）**没有 `[SaveableField]`，不进存档**。

### 典型用法

```csharp
// 1) 正常由 FirstPhaseCampaignBehavior.StartStealthTutorial 创建
VillagersInNeed q = new VillagersInNeed();
q.StartQuest();

// 2) 三个公开资源 id
Debug.Print("潜行装备=" + VillagersInNeed.StealthEquipmentId);
Debug.Print("场景=" + VillagersInNeed.VillaSceneId);
Debug.Print("村长=" + VillagersInNeed.HeadmanId);

// 3) 对外接口：失败与营救
Debug.Print("IsSkipped=" + StoryModeManager.Current.MainStoryLine.TutorialPhase.IsSkipped);
Debug.Print("失败上报 OnRescueMissionFailed() / 营救上报 OnHeadmanRescued()");

// 4) 村庄菜单项由它注册
Debug.Print("菜单项 id=talk_to_villager，挂在 \"village\" 菜单下");

// 5) 读任务
QuestBase b = Campaign.Current.QuestManager.GetQuest<VillagersInNeed>();
Debug.Print("id=" + b.QuestId + "，存档 id=18，发布者=" + (b.QuestGiver?.Name.ToString() ?? "null"));
```

### 最容易踩的坑

`_startVillaMission`（`:552`）、`_isHeadmanFollowing`（`:553`）、`_rescuedHeadman`（`:556`）三个字段**没有 `[SaveableField]` 标注，不进存档**，而存档只留了 `_talkedToVillagers` / `_failedTheMission` / `_firstConversationWithVillagerOpened`（`:541`/`:545`/`:549`）。读档后「是否已救出村长」「村长是否跟随」全部回到 false——于是 `talk_to_headman_in_villa_after_talking_on_condition()`（`:367`）这类条件会重新判定为未完成，**玩家可以在读档后再触发一次村庄场景任务**。「对话发生过」存档了、「营救发生过」没存，这个不对称就是坑的根源。

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