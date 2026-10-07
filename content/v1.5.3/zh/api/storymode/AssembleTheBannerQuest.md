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

## 怎么用

### 怎么拿到它

`public class AssembleTheBannerQuest : StoryModeQuestBase` 声明在 `bannerlord-1.5.3/StoryMode/Quests/FirstPhase/AssembleTheBannerQuest.cs:18`，全文 435 行。

构造函数**无参**（约 `:127`），基类调用有个关键点：

```csharp
: base("assemble_the_banner_story_mode_quest", null,
       StoryModeManager.Current.MainStoryLine.FirstPhase.FirstPhaseEndTime)
```

`questGiver` 传 `null`，**时限取的是 `FirstPhase.FirstPhaseEndTime`**（即 `CampaignTime.Years(20f) + FirstPhaseStartTime`，`FirstPhase.cs:62`→`:66`）——**所以第一阶段没开始时 new 它会直接 NRE**。存档 id 683001（`SaveableStoryModeTypeDefiner.cs:51`）。

**谁创建它**：两个「见导师」任务在对话里承诺救帝国时，各自的 `ActivateAssembleTheBannerQuest()` 查重后 `new AssembleTheBannerQuest().StartQuest();`——`MeetWithIstianaQuest.cs:149` 与 `MeetWithArzagosQuest.cs:149` 两处**逐行相同**，两边都带 `!Quests.Any(q => q is AssembleTheBannerQuest)` 守卫。

`RegisterEvents()`（`:146`）挂**两条**：`StoryModeEvents.OnBannerPieceCollectedEvent`（`:148`）、`CampaignEvents.OnQuestCompletedEvent`（`:149`）。

`OnStartQuest()`（`:153`）建离散进度日志，**目标是字面量 `3`**（`:156`）：`AddDiscreteLog(_startQuestLog, new TextObject("{=xL3WGYsw}Collected Pieces", null), FirstPhase.Instance.CollectedBannerPieceCount, 3, null, false)`——与常量 `FirstPhase.NeededBannerPieceCount = 3`（`FirstPhase.cs:124`）是两处独立数字。

`OnBannerPieceCollected()`（`:166`）刷进度（`:168`），并在 `FirstPhase.Instance.AllPiecesCollected`（`:169`）时推进对话链。`OnCompleteWithSuccess()`（`:160`）与 `OnTimedOut()`（`:225`）都要 `RemoveRemainingBannerPieces()`（`:232`）——**回收还没捡的碎片**。它还覆写了 `public override void OnFailed()`（`:211`）与 `public override void OnCanceled()`（`:218`）——这是少数几个主线任务主动覆写失败/取消的。

对话流挂 `"lord_start"`、priority **150**（`:251`，与 `MainStoryLine.MainStoryLineDialogOptionPriority = 150` 同值）。三条流：主线入口 `AssembleBannerConditionDialogCondition()`（`:264`，要求对话对象是任一导师 **且** `!AllPiecesCollected`，`:266`）、`GetAntiImperialMentorEndQuestDialog()`（`:288`，条件含 `AllPiecesCollected && !_talkedWithAntiImperialMentor`，`:292`）、`GetImperialMentorEndQuestDialog()`（`:340`，对称，`:344`）。

**任务的最终产品是另外两条**：`GetAntiImperialQuests()`（`:320`）开 `new CreateKingdomQuest(AntiImperialMentor).StartQuest();`（`:335`）或 `new SupportKingdomQuest(AntiImperialMentor).StartQuest();`（`:336`）；`GetImperialQuests()`（`:372`）开帝国版（`:387`→`:388`）。

存档三项：`_startLog`（1，`:423`）、`_talkedWithImperialMentor`（2，`:427`）、`_talkedWithAntiImperialMentor`（3，`:431`）。

### 典型用法

```csharp
// 1) 正常由两位导师的对话后果创建（带查重）
if (!Campaign.Current.QuestManager.Quests.Any(q => q is AssembleTheBannerQuest))
{
    new AssembleTheBannerQuest().StartQuest();
}

// 2) 时限来源（务必在第一阶段已开始之后）
FirstPhase first = StoryModeManager.Current.MainStoryLine.FirstPhase;
if (first != null)
{
    Debug.Print("阶段截止=" + first.FirstPhaseEndTime.ToYears + " 年");
    Debug.Print("碎片进度=" + first.CollectedBannerPieceCount + "/" + FirstPhase.NeededBannerPieceCount);
    Debug.Print("AllPiecesCollected=" + first.AllPiecesCollected);
}

// 3) 它会派生哪条：取决于你跟哪位导师谈
Debug.Print("帝国线 -> CreateKingdomQuest / SupportKingdomQuest（帝国导师）");
Debug.Print("反帝国线 -> 同两种（反帝国导师）");

// 4) 读任务
QuestBase b = Campaign.Current.QuestManager.GetQuest<AssembleTheBannerQuest>();
Debug.Print("id=" + b.QuestId + "，存档 id=683001，发布者=" + (b.QuestGiver?.Name.ToString() ?? "null"));
```

### 最容易踩的坑

它是**两个入口任务共用的同一个类**，而 [_talkedWithImperialMentor]（`:427`）与 [_talkedWithAntiImperialMentor]（`:431`）两个存档位决定了走哪条对话流。问题是 `AssembleBannerConditionDialogCondition()`（`:264`）的判据是「对话对象是任一导师 **且** 碎片还没齐」（`:266`）——它**不看主线立场**。玩家先跟帝国导师聊（`_talkedWithImperialMentor` 置 true，派生帝国任务）再跟反帝国导师聊，`AllPiecesCollected` 已为 true，`AntiImperial` 那条流也会放行（`:292`），于是**两条终局任务同时被开出来**。源码没有互斥守卫。

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