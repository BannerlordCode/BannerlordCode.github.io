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

## 怎么用

### 怎么拿到它

`public class RecruitTroopTutorialQuestTask : QuestTaskBase` 声明在 `bannerlord-1.5.3/StoryMode/Quests/QuestTasks/RecruitTroopTutorialQuestTask.cs:10`，全文 104 行。

同样是「任务内的子目标」。唯一构造函数 `RecruitTroopTutorialQuestTask(Action onSucceed, int targetRecruitAmount, Func<CharacterObject, bool> recruitTypeConditions, Settlement recruitSettlement = null, JournalLog progressLog = null)`（`:13`），基类同样 `: base(null, onSucceed, null, null)`（`:14`）——**不处理失败/放弃**。

`SetReferences()`（`:32`）是读档钩子，挂 `CampaignEvents.OnUnitRecruitedEvent`（`:34`）。

`OnUnitRecruited(CharacterObject character, int amount)`（`:38`）的三个条件全在**一个 `if` 里用 `&&`**（`:40`）：`base.IsActive`、`this._recruitSettlement == null || Settlement.CurrentSettlement == this._recruitSettlement`、`this._recruitTypeConditions(character)`。第三个条件**无条件调用**——传 null 委托就 NRE。

达标时先写 `progressLog.UpdateCurrentProgress(this._targetRecruitAmount)`（`:48`，写目标值）、`base.Finish(QuestTaskBase.FinishStates.Success)`、`return`（`:50`→`:51`）；未达标写实际累计（`:58`）。

注意聚落条件的语义：**`_recruitSettlement` 为 null 表示「不限制地点」**（`:40` 的 `== null ||`）；非 null 时用 `Settlement.CurrentSettlement ==` **引用相等**——玩家在野外招募就不计数。

存档只有 `_progressLog`（`[SaveableField(1)]`，`:97`）和 `_recruitedTroopAmount`（`[SaveableField(2)]`，`:101`）。**`_targetRecruitAmount`、`_recruitTypeConditions`、`_recruitSettlement` 全都不存档**，读档后靠 `InitializeTaskOnLoad(int targetRecruitAmount, Func<CharacterObject, bool> recruitTypeConditions, Settlement recruitSettlement = null)`（`:24`→`:28`）重新注入。

### 典型用法

```csharp
// 宿主任务里造并挂上（[RecruitTroopsTutorialQuest](../RecruitTroopsTutorialQuest) 就是这样）
public class MyRecruitQuest : StoryModeQuestBase
{
    private RecruitTroopTutorialQuestTask _task;

    public MyRecruitQuest(Hero questGiver) : base("my_recruit_quest", questGiver, CampaignTime.Never)
    {
        Settlement village = Settlement.Find(TutorialPhase.QuestVillageStringId);
        JournalLog log = CreateLog("[MyLogId]招募 4 名{!}[ recruits]", 0, 4);
        log.Active = true;

        // 委托负责筛「什么兵算」
        Func<CharacterObject, bool> onlyVillager = c =>
            c != null && c.StringId == TutorialPhase.TutorialVolunteerStringId;

        _task = new RecruitTroopTutorialQuestTask(OnRecruitedEnough, 4, onlyVillager, village, log);
        AddTask(_task);
        InitializeQuestOnCreation();
    }

    private void OnRecruitedEnough() => Campaign.Current.QuestManager.EndQuest(Quest);

    // 读档：三个参数都不存档，必须重灌
    [LoadInitializationCallback]
    private void OnLoad(MetaData metaData, ObjectLoadData loadData)
    {
        _task.InitializeTaskOnLoad(4,
            c => c != null && c.StringId == TutorialPhase.TutorialVolunteerStringId,
            Settlement.Find(TutorialPhase.QuestVillageStringId));
    }
}

// 运行时验证：地点用引用相等，野外招募不计数
Debug.Print("聚落条件=" + (Settlement.CurrentSettlement == Settlement.Find(TutorialPhase.QuestVillageStringId)));
```

### 最容易踩的坑

`_recruitSettlement` 是**引用相等**判断（`Settlement.CurrentSettlement == this._recruitSettlement`，`:40`），而 `_targetRecruitAmount` / `_recruitTypeConditions` / `_recruitSettlement` **都不进存档**。读档后只调 `InitializeTaskOnLoad` 恢复了一部分（比如只传了目标数量而漏了委托），`this._recruitTypeConditions(character)` 就是对 null 调 `Invoke` —— 直接 `NullReferenceException`，且发生在玩家第一次招募的瞬间，看起来像随机崩溃。三个参数要么全恢复，要么全都不恢复。

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