---
title: "PurchaseGrainTutorialQuest"
description: "开局村庄教学任务：让玩家买满 2 袋粮食，达标即完成任务，全程由一个购买子任务驱动。"
---
# PurchaseGrainTutorialQuest

**Namespace:** StoryMode.Quests.TutorialPhase
**Module:** StoryMode
**Type:** `public class PurchaseGrainTutorialQuest : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** StoryMode/Quests/TutorialPhase/PurchaseGrainTutorialQuest.cs

## 概述

这是整个战役开局最早被激活的一批任务之一，目标单一到近乎粗暴：走到新手村庄、在村庄菜单的"买入商品"里买 2 袋 `DefaultItems.Grain`。它本身不含任何判定逻辑——所有进度都由一个 `PurchaseItemTutorialQuestTask` 子任务承担；这个类负责的是构造期把教程村庄的商品货架填好、装好任务日志、把回调接到 `CompleteQuestWithSuccess()`，以及在读档后把子任务重新接上。它是"教学任务 + 单个子任务"这种最小结构的样板。

## 心智模型

它由 `TalkToTheHeadmanTutorialQuest` 在与村长首次对话后 `new` 出来并 `StartQuest()`，同时教程阶段被推进到 `TutorialQuestPhase.RecruitAndPurchaseStarted`。因为它 `base(..., CampaignTime.Never)`，**永远没有倒计时**，`IsRemainingTimeHidden` 也保持基类默认。也就是说玩家可以拖到天荒地老都不失败——这是设计意图，别把它当范例去写有期限的任务。

关键坑是**商品货架必须由它自己铺**：构造函数第一行是 `TutorialPhase.Instance.InitializeTutorialVillageItemRoster()`。如果 mod 改了教程村庄的初始库存、或者在别的地方先跑了货架初始化，粮食可能卖不出来，任务会永久卡住。第二个坑是读档：`InitializeQuestOnGameLoad()` 里除了 `SetDialogs()`（其实这个类 `SetDialogs` 是空的），关键是两行——`_purchaseItemTutorialQuestTask.AddTaskBehaviorsOnGameLoad(...)` 重新挂上成功回调，`InitializeTaskOnLoad(2, DefaultItems.Grain)` 重新注入目标和物品。少了任何一行，任务要么崩要么不推进。第三，它用 `public const int BuyGrainAmount = 2` 暴露目标数量，但构造和读档两处都是**硬编码的字面量 2** 而不是引用这个常量——改常量不会改行为。

## 怎么用

### 怎么拿到它

`public class PurchaseGrainTutorialQuest : StoryModeQuestBase` 声明在 `bannerlord-1.5.3/StoryMode/Quests/TutorialPhase/PurchaseGrainTutorialQuest.cs:12`，全文 100 行。

构造函数 `PurchaseGrainTutorialQuest(Hero questGiver)`（约 `:39`），基类 `: base("purchase_grain_tutorial_quest", questGiver, CampaignTime.Never)`（`:40`）。`questGiver` 同样是真传的村长（由 [TalkToTheHeadmanTutorialQuest](../TalkToTheHeadmanTutorialQuest) 在 `:138` 创建）。存档 id 691001（`SaveableStoryModeTypeDefiner.cs:46`）。

**构造函数第一句是铺货**：`TutorialPhase.Instance.InitializeTutorialVillageItemRoster();`（`:42`）——它把 `village_ES3_2` 里所有 `!itemAtIndex.IsFood` 的商品按 `MBRandom.RandomInt(1, 4)` 的数量塞进 `_tutorialPhaseShoppingRoster`（`TutorialPhase.cs:243`→`:251`）。**这是任务链里唯一铺货的地方，且每次 new 都会再跑一次。**

**活都在子任务里**：`private readonly PurchaseItemTutorialQuestTask _purchaseItemTutorialQuestTask`（`[SaveableField(1)]`，`:97`→`:98`），构造时造好并 `AddTask(...)`。数量 `public const int BuyGrainAmount = 2;`（`:94`）。

三个接回点：`PurchaseItemTaskOnSuccess()`（`:69`，`onSucceed` 回调）、`HourlyTick()`（`:64`，驱动检查）、`InitializeQuestOnGameLoad()`（`:56`，读档后把目标数量与物品重新注入子任务——因为 [PurchaseItemTutorialQuestTask](../PurchaseItemTutorialQuestTask) 的 `_targetItemAmount` 和 `_item` **都不进存档**）。

它与 [RecruitTroopsTutorialQuest](../RecruitTroopsTutorialQuest) 结构逐行对称。

### 典型用法

```csharp
// 1) 正常由 TalkToTheHeadmanTutorialQuest 的对话后果创建
Hero headman = StoryModeManager.Current.MainStoryLine.TutorialPhase.TutorialVillageHeadman;
PurchaseGrainTutorialQuest q = new PurchaseGrainTutorialQuest(headman);
q.StartQuest();

// 2) 目标份数是公开常量
Debug.Print("目标=" + PurchaseGrainTutorialQuest.BuyGrainAmount + " 份粮食");

// 3) 教学村庄与商品（由 InitializeTutorialVillageItemRoster 填）
Settlement village = Settlement.Find(TutorialPhase.QuestVillageStringId);
Debug.Print("教学村庄=" + village.StringId + "，商品数=" + village.ItemRoster.Count);

// 4) 手工预铺一次（不必 new 任务）
StoryModeManager.Current.MainStoryLine.TutorialPhase.InitializeTutorialVillageItemRoster();

// 5) 读任务
QuestBase b = Campaign.Current.QuestManager.GetQuest<PurchaseGrainTutorialQuest>();
Debug.Print("id=" + b.QuestId + "，存档 id=691001，发布者=" + b.QuestGiver?.Name);
```

### 最容易踩的坑

`TutorialPhase.Instance.InitializeTutorialVillageItemRoster();`（`:42`）在构造函数里，而那个方法往同一个 `_tutorialPhaseShoppingRoster` 里 `AddToCounts` 且**不判重、不清空**（`TutorialPhase.cs:251`）。每 `new PurchaseGrainTutorialQuest(...)` 一次，村庄的非食物商品就多进一批随机数量。mod 里重复创建这个任务（或读档后任务被重建一次）会让教学商店库存涨得离谱，而正常游玩时它只该被填一次——**要重置就自己改村庄的 `ItemRoster`，别指望再调一次初始化能覆盖。**

## 主要成员

- `PurchaseGrainTutorialQuest(Hero questGiver)`：构造入口。调 `InitializeTutorialVillageItemRoster()` 铺货，`SetDialogs()`（空实现），建一条离散日志（起始文案"买 2 {GRAIN}，点村庄菜单的 Buy Products"），再造 `PurchaseItemTutorialQuestTask` 并 `AddTask`。
- `public const int BuyGrainAmount = 2`：公开的目标数量常量，仅供外部读取，内部并未使用。
- `override TextObject Title`：`Purchase {GRAIN}`，把 `DefaultItems.Grain.Name` 塞进 `GRAIN` 变量，任务列表里显示。
- `protected override void SetDialogs()`：空。本任务不需要对话，因为触发条件是交易事件而不是说话。
- `protected override void InitializeQuestOnGameLoad()`：读档钩子，做两件事——重挂子任务行为、重注入子任务参数。
- `protected override void HourlyTick()`：空覆写，仅为满足基类契约。
- 私有 `PurchaseItemTaskOnSuccess()`：子任务唯一回调，直接 `CompleteQuestWithSuccess()`。
- `[SaveableField(1)] _purchaseItemTutorialQuestTask`（readonly）：子任务本体随存档走。

## 使用示例

```csharp
// TalkToTheHeadmanTutorialQuest 在首次对话结束后这样开：
_purchaseGrainQuest = new PurchaseGrainTutorialQuest(this._headman);
_purchaseGrainQuest.StartQuest();
TutorialPhase.Instance.SetTutorialQuestPhase(TutorialQuestPhase.RecruitAndPurchaseStarted);
```

## 风险与边界

本类的实际风险几乎全在依赖的外部状态上：`DefaultItems.Grain` 必须是可交易品，教程村庄必须真的在卖粮食，`TutorialPhase.Instance` 必须已初始化（读档后它存在，说明教程已开始）。它自己几乎不写存档，只存子任务引用。跨读档的正确性完全依赖 `InitializeQuestOnGameLoad` 里那两行，`StoryModeQuestBase` 不会替你做。任务完成没有失败分支、没有任何声望或金钱奖励——`OnCompleteWithSuccess` 未覆写，因此不要在这个类上找剧情副作用。

## 依赖关系

- [PurchaseItemTutorialQuestTask（进度引擎）](../PurchaseItemTutorialQuestTask)
- [RecruitTroopsTutorialQuest（同批启动的姊妹任务）](../RecruitTroopsTutorialQuest)
- [TalkToTheHeadmanTutorialQuest（创建它的任务）](../TalkToTheHeadmanTutorialQuest)