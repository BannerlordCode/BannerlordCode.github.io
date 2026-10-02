---
title: "TutorialPhase"
description: "主线教学阶段的对象：记录教学进度、准备教学用的商店与征募道具，并在结束时解锁第一阶段。"
---
# TutorialPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode
**Type:** `public class TutorialPhase`
**Base:** `System.Object`
**Source:** `bannerlord-1.5.3/StoryMode/StoryModePhases/TutorialPhase.cs`

## 概述

`TutorialPhase` 是主线第一段——强制新手教程——的**状态与道具准备器**。它被 [MainStoryLine](../MainStoryLine) 的构造函数无条件创建，因此在整个战役里**永远不为 null**（`MainStoryLine.TutorialPhase` 永不为空，`MainStoryLine.FirstPhase` 才可能为 null）。它管两类事：用 [TutorialQuestPhase](../TutorialQuestPhase) 记录教学小步进；用一个私有 `ItemRoster` 装教学用的假商品，并按需给玩家补金币、补征募名额，让教学流程不可能因为「玩家没钱」而卡死。

## 心智模型

创建时机是 `MainStoryLine` 构造函数，那时 `Campaign.Current` 已可用但剧情英雄还没建。随 `[SaveableProperty]` 一起存档（id 8，见 [SaveableStoryModeTypeDefiner](../SaveableStoryModeTypeDefiner)）。

推进链：

1. 构造函数：`TutorialQuestPhase = None`、所有 flag 为 false、`_tutorialPhaseShoppingRoster` 建空。
2. 各教学任务 `OnStartQuest` 调 `SetTutorialQuestPhase(...)` 推进游标。
3. `TutorialPhaseCampaignBehavior` 在需要时调 `SetTutorialFocusSettlement` / `SetTutorialFocusMobileParty` 给地图打焦点标记；调 `SetLockTutorialVillageEnter(true)` 锁村庄入口。
4. `PrepareRecruitOptionForTutorial()`：把村长所有征募位替换成 `tutorial_placeholder_volunteer`，若队伍人数不足 6 则补钱。
5. `GetAndPrepareBuyProductsOptionForTutorial(village)`：若队伍口粮 ≤ 3，往教学商店塞 3 个 `DefaultItems.Grain` 并按当地粮价补钱，返回这个 roster 供商店 UI 用。
6. `InitializeTutorialVillageItemRoster()`：从 `village_ES3_2` 扫非食物商品，随机塞进教学商店。
7. `MainStoryLine.CompleteTutorialPhase(isSkipped)` → `TutorialPhase.CompleteTutorial(isSkipped)`：`TutorialQuestPhase = Finalized`、清掉焦点、记下 `IsSkipped`。

**坑**：

1. **`PrepareRecruitOptionForTutorial()` 直接解引用 `Settlement.CurrentSettlement.Notables[0]`**。不在聚落里调它立刻 NRE。
2. **补钱是单向的**：`GiveGoldAction.ApplyBetweenCharacters(null, Hero.MainHero, num, false)` 只在 `Hero.MainHero.Gold < num` 时补，**从不回收**。反复调这个方法会让玩家金币通胀。
3. **`GetAndPrepareBuyProductsOptionForTutorial` 只在口粮 ≤ 3 时补货**，之后返回的是同一个 roster 的引用（不是副本），直接改它会改到教学阶段的内部状态。
4. **`TutorialVillageHeadman` 带 `[CachedData]`**：它是会话内缓存，**不存档**。读档后到该属性被重新填充之前可能是 null。
5. **`IsCompleted` 是纯派生**（`TutorialQuestPhase == Finalized`），没有独立字段。改 `TutorialQuestPhase` 就能伪造完成态。

## 主要成员

- `Settlement TutorialFocusSettlement { get; private set; }`：`[SaveableProperty(2)]`。地图上高亮的村庄。`RemoveTutorialFocusSettlement()` 清空。
- `MobileParty TutorialFocusMobileParty { get; private set; }`：`[SaveableProperty(3)]`。地图上高亮的队伍。`RemoveTutorialFocusMobileParty()` 清空。
- `bool TalkedWithBrotherForTheFirstTime { get; private set; }`：`[SaveableProperty(5)]`。由 `PlayerTalkedWithBrotherForTheFirstTime()` 置位，剧情对话用它决定走哪句。
- `bool LockTutorialVillageEnter { get; private set; }`：`[SaveableProperty(6)]`。由 `SetLockTutorialVillageEnter(bool)` 控制。
- `TutorialQuestPhase TutorialQuestPhase { get; private set; }`：`[SaveableProperty(7)]`，教学游标。写入唯一路径 `SetTutorialQuestPhase(...)`。
- `bool IsSkipped { get; private set; }`：`[SaveableProperty(8)]`。`CompleteTutorial` 时写入，是区分「打完」与「跳过」的唯一依据。
- `bool IsCompleted`：**只读派生**，`TutorialQuestPhase == TutorialQuestPhase.Finalized`。
- `Hero TutorialVillageHeadman { get; set; }`：`[CachedData]`，**不存档**。教学村长。
- `void PlayerTalkedWithBrotherForTheFirstTime()`：置 `TalkedWithBrotherForTheFirstTime = true`。对话系统调一次即可，重复调无副作用。
- `void SetLockTutorialVillageEnter(bool value)`：锁/解锁教学村庄入口。行为在别处实现，本类只存标志位。
- `void SetTutorialQuestPhase(TutorialQuestPhase)`：推进游标。**无任何守卫**。
- `void SetTutorialFocusSettlement(Settlement)` / `void RemoveTutorialFocusSettlement()` / `void RemoveTutorialFocusMobileParty()`：焦点管理。**注意没有 `SetTutorialFocusMobileParty`**，写它的 behavior 应该是直接给字段赋值或另有机制。
- `void CompleteTutorial(bool isSkipped)`：置 `Finalized`、清两个焦点、记 `IsSkipped`。**不广播事件**——事件由 `MainStoryLine.CompleteTutorialPhase` 发。
- `void PrepareRecruitOptionForTutorial()`：征募选项造假 + 补钱。必须在聚落内调。
- `ItemRoster GetAndPrepareBuyProductsOptionForTutorial(Settlement village)`：口粮不足时补 3 份粮 + 补钱，返回教学商店 roster。
- `void InitializeTutorialVillageItemRoster()`：从 `village_ES3_2` 抽 1–3 个随机非食物商品塞进教学商店。
- 常量：`QuestVillageStringId = "village_ES3_2"`、`TrainingFieldStringId = "tutorial_training_field"`、`TutorialHeadmanStringId = "storymode_tutorial_headman"`、`TutorialVolunteerStringId = "tutorial_placeholder_volunteer"`、`TutorialFemaleRefugeeStringId` / `TutorialMaleRefugeeStringId`、`RadagosRaidersStringId = "storymode_quest_raider"`、`RestrictedModePriority = 1000000`；私有常量 `GrainAmount = 3`、`RecruitTroopAmount = 6`。

## 使用示例

```csharp
// 1) 地图打焦点：给村庄和队伍加高亮
TutorialPhase tutorial = StoryModeManager.Current.MainStoryLine.TutorialPhase;
tutorial.SetTutorialFocusSettlement(Settlement.Find("village_ES3_2"));
tutorial.SetLockTutorialVillageEnter(true);

// 2) 准备征募选项：必须在聚落里，且会真的给玩家补钱
Settlement current = Settlement.CurrentSettlement;
if (current != null && current.IsVillage)
{
    StoryModeManager.Current.MainStoryLine.TutorialPhase.PrepareRecruitOptionForTutorial();
}

// 3) 准备商店：返回教学用 roster 直接喂给商店 UI
ItemRoster shopRoster = StoryModeManager.Current.MainStoryLine.TutorialPhase
    .GetAndPrepareBuyProductsOptionForTutorial(Settlement.Find("village_ES3_2"));

// 4) 收尾（走 MainStoryLine 的入口，别直接调 CompleteTutorial —— 不会广播事件）
MainStoryLine line = StoryModeManager.Current.MainStoryLine;
line.CompleteTutorialPhase(false);
Debug.Print(line.FirstPhase != null);      // True，第一阶段已解锁
Debug.Print(line.TutorialPhase.IsSkipped);  // False
```

## 风险与边界

- **补金币不可逆**：`PrepareRecruitOptionForTutorial` 和 `GetAndPrepareBuyProductsOptionForTutorial` 都会无条件在钱不够时 `GiveGoldAction`。给玩家派钱当成常规奖励会直接破坏经济平衡。
- **`Notables[0]` 无判空**：`PrepareRecruitOptionForTutorial` 在空聚落或非村庄里调用会抛异常。
- **教学商店 roster 是同一个对象**：`GetAndPrepareBuyProductsOptionForTutorial` 返回引用。购买逻辑消耗它是有意为之，但如果你的商店 UI 往里写东西，会污染内部状态。
- **`TutorialVillageHeadman` 不存档**：`[CachedData]` 属性在读档后需要被重新填充（由教学 behavior 负责）。在此之前读它是 null。
- **`SetTutorialQuestPhase` 无守卫**：改枚举能伪造 `IsCompleted`，进而打开 `MainStoryLine.IsPlayerInteractionRestricted`，属于改全局游戏规则。
- **阶段不可回退**：`MainStoryLine` 没有「重置教学」的 API。要重置得自己 new 一个 `TutorialPhase` 并通过反射塞进 `MainStoryLine.TutorialPhase`（private set）。

## 依赖关系

- [MainStoryLine](../MainStoryLine) — 构造函数创建本对象；`CompleteTutorialPhase` 调本类的 `CompleteTutorial` 并解锁 `FirstPhase`
- [TutorialQuestPhase](../TutorialQuestPhase) — 内部游标的枚举类型，`IsCompleted` 由它派生
- [StoryModeEvents](../StoryModeEvents) — 教学结束事件由 `MainStoryLine` 层广播，不是本类
- [FirstPhase](../FirstPhase) — 教学完成后创建，并立即白送第一块旗子
- [SaveableStoryModeTypeDefiner](../SaveableStoryModeTypeDefiner) — 给本类型分配存档类型 id 8