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