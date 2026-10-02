---
title: "AssembleTheBannerQuest"
description: "第一阶段主线中枢：集齐 3 块龙旗碎片，然后分别与两位导师对话，选定自立王国或支持现有王国两条后续线。"
---
# AssembleTheBannerQuest

**Namespace:** StoryMode.Quests.FirstPhase
**Module:** StoryMode
**Type:** `public class AssembleTheBannerQuest : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** StoryMode/Quests/FirstPhase/AssembleTheBannerQuest.cs

## 概述

第一阶段的真正中枢。它自己几乎不判定任何进度，只做一件关键的事：监听 `StoryModeEvents.OnBannerPieceCollectedEvent`，用 `FirstPhase.Instance.CollectedBannerPieceCount` 更新任务日志上的 0→3 进度条；一旦 `FirstPhase.Instance.AllPiecesCollected` 为真，就把两位导师及其所在定居点设为追踪目标，提示玩家去"做决定"。当玩家分别与两位导师谈完，`OnQuestCompleted` 监听 `CreateKingdomQuest` 或 `SupportKingdomQuest` 的完成来清理追踪并结束本任务。

## 心智模型

它**由 `MeetWithIstianaQuest` 或 `MeetWithArzagosQuest` 在玩家表态后创建**（两处都有幂等检查），无参构造，时限与第一阶段共享。

它的生命周期横跨整个第一阶段，且有三个出口：正常完成（玩家选定路线并完成对应任务）、失败（`OnFailed`）、取消（`OnCanceled`）、超时（`OnTimedOut`）。后三个出口全部调用 `RemoveRemainingBannerPieces()`——把玩家物品栏里还没合成完整龙旗的三件物品（`dragon_banner_center`、`dragon_banner_dragonhead`、`dragon_banner_handle`）清掉。**这是它最重要的副作用**：任何非正常结束都会清理道具。

坑有三处。第一，`OnBannerPieceCollected` 里 `firstPhase` 可能为 null（`StoryModeManager.Current.MainStoryLine.FirstPhase` 在某些读档时机为空），原版用 null 检查直接 return，但**此时日志已经更新过了**——意味着会出现"进度条动了但没有触发后续追踪"的中间态。第二，`GetImperialMentorEndQuestDialog` / `GetAntiImperialMentorEndQuestDialog` 都是 `PlayerSpecialOption` 入口，条件要求 `AllPiecesCollected && !已跟该导师谈过`；玩家**可以两个都谈**，此时日志会根据对方是否已谈给出不同文案，然后同时开出 `CreateKingdomQuest` 和 `SupportKingdomQuest` 两个任务。第三，`OnQuestCompleted` 只认 `quest is CreateKingdomQuest || quest is SupportKingdomQuest`——如果 mod 用别的方式推进主线，这个任务会永远挂着。

## 主要成员

- `AssembleTheBannerQuest()`：无参构造。两个 bool 置 false，不注册事件（事件在 `RegisterEvents` 里挂）。
- `protected override void OnStartQuest()`：调 `SetDialogs()`，并创建 0→3 的离散日志 `_startLog`，初值取 `FirstPhase.Instance.CollectedBannerPieceCount`——所以**中途才接手这个任务（例如读档重建）也能显示正确进度**。
- `protected override void RegisterEvents()`：挂 `StoryModeEvents.OnBannerPieceCollectedEvent` 与 `CampaignEvents.OnQuestCompletedEvent`。
- `private void OnBannerPieceCollected()`：更新进度；若 `AllPiecesCollected` 则追加"可以做决定了"的日志、`AddTrackedObject` 两个导师与他们的定居点，并调 `FirstPhase.Instance.MergeDragonBanner()`。
- `private void OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)`：若完成的是建国/支持任务，就移除全部追踪对象并 `CompleteQuestWithSuccess()`。
- `public override void OnFailed()` / `OnCanceled()` / `OnTimedOut()`：三个 override 都调用 `RemoveRemainingBannerPieces()`。
- `private void RemoveRemainingBannerPieces()`：从 `MobileParty.MainParty.ItemRoster` 里按 `EquipmentElement.Item` 匹配三个碎片 ID 并移除。
- `private bool AssembleBannerConditionDialogCondition()`：控制"还在收集就别来烦我"这条兜底对话——只要还有对应导师的 `MeetWithXxxQuest` 未 finalize 就不放行。
- `private DialogFlow GetImperialMentorEndQuestDialog()` / `GetAntiImperialMentorEndQuestDialog()`：两条"我来交旗"的特殊选项流，各自的 `Consequence` 分别调 `GetImperialQuests()` / `GetAntiImperialQuests()`。
- `private void GetImperialQuests()` / `GetAntiImperialQuests()`：置对应 bool、移除导师定居点的追踪、**各开出 `CreateKingdomQuest` 和 `SupportKingdomQuest` 两个任务**。
- `[SaveableField(1..3)]`：`_startLog`、`_talkedWithImperialMentor`、`_talkedWithAntiImperialMentor`。

## 使用示例

```csharp
// 失败/取消/超时的统一清理：碎片不能留在玩家物品栏里
private void RemoveRemainingBannerPieces()
{
    ItemObject center = Campaign.Current.ObjectManager.GetObject<ItemObject>("dragon_banner_center");
    ItemObject head   = Campaign.Current.ObjectManager.GetObject<ItemObject>("dragon_banner_dragonhead");
    ItemObject handle = Campaign.Current.ObjectManager.GetObject<ItemObject>("dragon_banner_handle");
    foreach (ItemRosterElement e in MobileParty.MainParty.ItemRoster)
        if (e.EquipmentElement.Item == center || e.EquipmentElement.Item == head || e.EquipmentElement.Item == handle)
            MobileParty.MainParty.ItemRoster.Remove(e);
}

// 收集碎片：进度条直接读全局计数，不自己累加
private void OnBannerPieceCollected()
{
    this._startLog.UpdateCurrentProgress(FirstPhase.Instance.CollectedBannerPieceCount);
    if (FirstPhase.Instance.AllPiecesCollected) { /* 追踪两位导师 */ }
}
```

## 风险与边界

三个失败出口都会删玩家物品，这是不可逆的世界状态修改——如果 mod 让玩家能在集齐后保留碎片作为收藏，必须同时覆写 `OnFailed`/`OnCanceled`/`OnTimedOut`。存档方面三个字段齐备，但 `_startLog` 之外进度完全依赖 `FirstPhase.Instance.CollectedBannerPieceCount` 这个全局计数器，**任务自身不记进度**——意味着如果 mod 重置了全局计数而任务还在，进度条会倒退。第三，它没有失败日志，玩家在第一阶段超时后拿不到任何"我失败了"的解释，只会发现龙旗道具消失。

## 依赖关系

- [MeetWithIstianaQuest（创建方之一）](../MeetWithIstianaQuest)
- [MeetWithArzagosQuest（创建方之二）](../MeetWithArzagosQuest)
- [CreateKingdomQuest（后续任务）](../CreateKingdomQuest)
- [SupportKingdomQuest（后续任务）](../SupportKingdomQuest)
- [IstianasBannerPieceQuest（碎片来源之一）](../IstianasBannerPieceQuest)