---
title: "ConspiracyProgressQuest"
description: "第二阶段常驻任务：每天累积阴谋强度并刷新任务日志，监控所有阴谋子任务的成败，并在玩家换王国时取消二三阶段。"
---
# ConspiracyProgressQuest

**Namespace:** StoryMode.Quests.SecondPhase
**Module:** StoryMode
**Type:** `public class ConspiracyProgressQuest : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** SecondPhase/ConspiracyProgressQuest.cs

## 概述

这是一个**几乎不给玩家看的任务**。它的唯一职责是当一块"仪表盘"：任务日志上有一条 0→2000 的"阴谋强度"进度条，每天由 `DailyTick` 调 `SecondPhase.Instance.IncreaseConspiracyStrength()` 涨一点，任何一个阴谋子任务成功时也会刷新一次。同时它扮演"守门人"：玩家一旦**离开主线支持的那个王国**，立刻取消任务并调 `StoryModeManager.Current.MainStoryLine.CancelSecondAndThirdPhase()`。它的构造副作用是 `SecondPhase.Instance.TriggerConspiracy()`，也就是第二阶段由此开启。

## 心智模型

它由第二阶段逻辑在玩家确立主线立场后创建，无参构造，`CampaignTime.Never` 意味着它永远在跑。**它在玩家任务列表里不显示内容**（没有玩家可交互的对话、没有可选目标），但它有一个真实的生命周期钩子：`OnFinalize()` 里遍历 `Campaign.Current.QuestManager.Quests`，把所有"直接继承 `ConspiracyQuestBase`"且仍 ongoing 的任务判失败。

那个遍历条件 `typeof(ConspiracyQuestBase) == questBase.GetType().BaseType` 是**精确基类匹配**而不是 `is` 判断——意味着 mod 写一个继承 `ConspiracyQuestBase` 的子类再派一层自己的抽象类，这个任务就看不见它，清理会漏掉。同一个表达式在 `OnQuestCompleted` 里也用来判断"某个阴谋任务成功了就刷新进度"。

坑：`Title` 里的变量名很容易读反——`_isImperialSide` 为真（即玩家在帝国任务线上）时标题填的是 `ANTIIMPERIAL_MENTOR`，文案是"XXX 的阴谋"。这是**语义正确**的：玩家在帝国线上时，正在对付的阴谋属于反帝国导师。另一处坑：`OnClanChangedKingdom` 只在 `oldKingdom == PlayerSupportedKingdom` 时取消——玩家中途加入另一个王国是允许的，只有主动离开支持对象才算反悔。

## 主要成员

- `ConspiracyProgressQuest()`：无参构造，任务 ID 是 `conspiracy_quest_campaign_behavior`（沿用了行为类的命名，别被误导），核心副作用是 `SecondPhase.Instance.TriggerConspiracy()`。
- `private bool _isImperialSide`：私有属性，等价于 `StoryModeManager.Current.MainStoryLine.IsOnImperialQuestLine`。
- `protected override void RegisterEvents()`：挂 `CampaignEvents.OnQuestCompletedEvent`、`StoryModeEvents.OnConspiracyActivatedEvent`、`CampaignEvents.OnClanChangedKingdomEvent`。
- `protected override void DailyTick()`：**唯一的状态推进点**。`IncreaseConspiracyStrength()` 后把 `(int)ConspiracyStrength` 写进 `_startQuestLog`。
- `private void OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)`：若完成的是阴谋子任务且结果为 `Success`，刷新进度显示。
- `private void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ...)`：`clan == Clan.PlayerClan && oldKingdom == PlayerSupportedKingdom` → `CompleteQuestWithCancel(_questCanceledLogText)` + `CancelSecondAndThirdPhase()`。
- `private void OnConspiracyActivated()`：阴谋被激活（进入第三阶段）→ `CompleteQuestWithTimeOut(null)`。
- `protected override void OnFinalize()`：遍历并判失败所有"直接继承 `ConspiracyQuestBase`"且 ongoing 的任务。
- `[SaveableField(2)] _startQuestLog`：唯一的存档字段，进度条本体。注意 SaveId 从 **2** 开始（1 已被历史版本占用），新增字段不要复用 1。

## 使用示例

```csharp
// 每天涨一点阴谋强度（上限 2000 由 SecondPhase 内部钳制）
protected override void DailyTick()
{
    StoryModeManager.Current.MainStoryLine.SecondPhase.IncreaseConspiracyStrength();
    this._startQuestLog.UpdateCurrentProgress(
        (int)StoryModeManager.Current.MainStoryLine.SecondPhase.ConspiracyStrength);
}

// 收尾时判失败所有仍在进行的一阶阴谋任务
protected override void OnFinalize()
{
    foreach (QuestBase q in Campaign.Current.QuestManager.Quests.ToList<QuestBase>())
        if (typeof(ConspiracyQuestBase) == q.GetType().BaseType && q.IsOngoing)
            q.CompleteQuestWithFail(null);
}
```

## 风险与边界

`GetType().BaseType` 是精确匹配，这是最需要警惕的扩展性限制：派生一层就失效，`is` 判断则更宽容但原作者选了严格版。取消条件只看"离开支持王国"，玩家**加入**另一个王国不会被取消，因此可以四处跳槽而任务仍在——原版允许这么做。如果 mod 删掉这个任务，整个第二阶段会失去"每日涨强度"和"子任务收尾清理"两个能力，阴谋强度将冻结。任务本身不给任何奖励、日志只有一条 0→2000 的"阴谋强度"进度条（创建于 `OnStartQuest`，初值取当时的 `ConspiracyStrength`），玩家几乎注意不到它的存在；不要指望玩家通过任务列表理解"阴谋强度 2000"意味着什么。

## 依赖关系

- [ConspiracyQuestBase（被监控的父类）](../ConspiracyQuestBase)
- [AssembleEmpireQuestBehavior（第二阶段激活者）](../AssembleEmpireQuestBehavior)
- [WeakenEmpireQuestBehavior（第二阶段激活者）](../WeakenEmpireQuestBehavior)
- [CampaignEvents（OnClanChangedKingdomEvent 等）](../../campaign/CampaignEvents)