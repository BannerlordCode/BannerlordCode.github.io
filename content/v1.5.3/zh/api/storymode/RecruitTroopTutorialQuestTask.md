---
title: "RecruitTroopTutorialQuestTask"
description: "教程用的『招募 N 个士兵』子任务：按可调用谓词与可选定居点过滤招募事件，达标即回调宿主。"
---
# RecruitTroopTutorialQuestTask

**Namespace:** StoryMode.Quests.QuestTasks
**Module:** StoryMode
**Type:** `public class RecruitTroopTutorialQuestTask : QuestTaskBase`
**Base:** QuestTaskBase
**Source:** StoryMode/Quests/QuestTasks/RecruitTroopTutorialQuestTask.cs

## 概述

这是教程子任务的另一半：盯住 `CampaignEvents.OnUnitRecruitedEvent`，把符合条件的招募数量累加到 `_recruitedTroopAmount`，达到 `_targetRecruitAmount` 就 `Finish(QuestTaskBase.FinishStates.Success)`。和 `PurchaseItemTutorialQuestTask` 一样，它不含界面、不含对话、不含失败分支，只是一个"计数器 + 过滤器 + 回调"。它与购买任务的差别在于多了一个 `Func<CharacterObject,bool>` 谓词和一个可选的 `Settlement` 限定，让"在某个村里招满 4 个人"这种带条件的教学目标也能表达。

## 心智模型

它和购买子任务是同一套模式：`StoryModeQuestBase` 的构造期 `new` 出来，`AddTask` 挂上去，达标回调直接 `CompleteQuestWithSuccess()`。没有阶段概念，也不监听任何 `StoryModeEvents`。

坑在于**跨读档的不对称**，而且这个不对称比购买任务更隐蔽。`_recruitedTroopAmount` 有 `[SaveableField(2)]`，会存档；但 `_targetRecruitAmount`、`_recruitTypeConditions`、`_recruitSettlement` 三个字段**都没有** Saveable 标记。读档后必须调 `InitializeTaskOnLoad(target, predicate, settlement)` 重新注入。更糟的是示例宿主 `RecruitTroopsTutorialQuest` 在读档分支里硬编码了 `Settlement.Find("village_ES3_2")` 而不是重算——因为**事件里判定用的是 `Settlement.CurrentSettlement`**，而不是招募发生地的历史快照。这意味着如果玩家在别的城镇招够了兵、然后读档，再在野外招人，进度会照记不误。mod 复用时最好自己写一个基于 `recruitmentSettlement` 参数的判定，而不是沿用 `Settlement.CurrentSettlement` 这个写法。

第二个坑：`_recruitTypeConditions` 是委托，**不参与序列化**。读档后如果宿主没有重新传入，它就是 `null`，下一次招募事件会直接 `NullReferenceException`。这是新手教程里最容易崩的地方。

## 主要成员

- `RecruitTroopTutorialQuestTask(Action onSucceed, int targetRecruitAmount, Func<CharacterObject,bool> recruitTypeConditions, Settlement recruitSettlement = null, JournalLog progressLog = null)`：构造入口。`recruitSettlement` 传 `null` 表示"任何地方招募都算"。基类四个参数同样全部传 `null`。
- `void InitializeTaskOnLoad(int targetRecruitAmount, Func<CharacterObject,bool> recruitTypeConditions, Settlement recruitSettlement = null)`：读档补洞专用，注入三个不存档的字段。
- `void SetReferences()`：override，挂 `CampaignEvents.OnUnitRecruitedEvent` 的 `Action<CharacterObject,int>` 非序列化监听。
- 私有 `OnUnitRecruited(CharacterObject character, int amount)`：三重与条件——`IsActive`、`_recruitSettlement == null || Settlement.CurrentSettlement == _recruitSettlement`、`_recruitTypeConditions(character)`；满足则累加并检查阈值，达标时日志直接打到 target 再 `Finish(Success)`，未达标则更新成累计值。
- `[SaveableField(1)] _progressLog`（readonly JournalLog）、`[SaveableField(2)] _recruitedTroopAmount`：分别是日志句柄和已累计数量。

## 使用示例

```csharp
// 构造期：任何兵种都算数、只在本村招
_recruitTask = new RecruitTroopTutorialQuestTask(
    new Action(this.RecruitTaskOnSuccess),
    4,
    new Func<CharacterObject, bool>(this.IsTierOneTroop),
    Settlement.CurrentSettlement,
    _recruitLog);
AddTask(_recruitTask);

// 想改成"只招精锐"：谓词返回 false 的兵会被事件回调直接忽略
private bool IsTierOneTroop(CharacterObject troop)
{
    return troop.Tier <= 1 && troop.IsActive;
}

// 读档期：目标值、谓词、地点三者都不存档，必须重新注入
_recruitTask.InitializeTaskOnLoad(
    4, new Func<CharacterObject, bool>(this.IsTierOneTroop),
    Settlement.Find("village_ES3_2"));
```

## 风险与边界

风险集中在一处：`Func<CharacterObject,bool>` 是托管委托，序列化系统不会保存，读档后必然是 null。因此**构造与 `InitializeTaskOnLoad` 必须成对出现且传入等价谓词**，否则要么崩要么静默失效。其次，`Settlement.CurrentSettlement` 这个限定条件在野外（不在任何定居点内）恒为 null，意味着一旦 `_recruitSettlement` 非空，**野外招募一律不计数**——这在原版教程里是被接受的（教程要求在村里招），但复用到通用任务上会很难解释。`_recruitedTroopAmount` 只加不减，招募后再遣散不会回退进度。`amount` 参数是本次招募的真实人数，一次招 3 个就加 3。

## 依赖关系

- [RecruitTroopsTutorialQuest（唯一使用方）](../RecruitTroopsTutorialQuest)
- [PurchaseItemTutorialQuestTask（姊妹任务）](../PurchaseItemTutorialQuestTask)
- [TalkToTheHeadmanTutorialQuest（间接创建者）](../TalkToTheHeadmanTutorialQuest)