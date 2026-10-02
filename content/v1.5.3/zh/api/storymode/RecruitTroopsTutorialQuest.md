---
title: "RecruitTroopsTutorialQuest"
description: "开局村庄教学任务：让玩家在当前村庄招满 4 名士兵，达标即完成，全程由一个招募子任务驱动。"
---
# RecruitTroopsTutorialQuest

**Namespace:** StoryMode.Quests.TutorialPhase
**Module:** StoryMode
**Type:** `public class RecruitTroopsTutorialQuest : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** StoryMode/Quests/TutorialPhase/RecruitTroopsTutorialQuest.cs

## 概述

跟买粮任务完全对称的另一半：目标是在村庄里招 4 名士兵。它自身没有任何判定，所有进度交给 `RecruitTroopTutorialQuestTask`，并且把"当前定居点"作为招募地点限制传进去，用来强制玩家必须通过村庄菜单的"招募士兵"选项来完成——这正是它想教的东西。类里唯一值得注意的实现细节是那个**永远返回 true 的谓词** `DoesRecruitedTroopSatifyRecruitTroopTask`：教程阶段接受任何兵种，所以筛选被刻意放宽成了空操作。

## 心智模型

它同样由 `TalkToTheHeadmanTutorialQuest` 在与村长首次对话后创建并 `StartQuest()`，与 `PurchaseGrainTutorialQuest` 同时挂上。`CampaignTime.Never` 意味着无时限，`HourlyTick` 是空的，`SetDialogs` 也是空的——触发完全来自 `CampaignEvents.OnUnitRecruitedEvent`。

坑有两个，都很小但很致命。第一，构造期用 `Settlement.CurrentSettlement` 作为招募地点，而**构造发生时玩家正在和村长对话**，此时 `Settlement.CurrentSettlement` 恰好就是新手村庄，所以"碰巧"是对的；但读档分支里写死成 `Settlement.Find("village_ES3_2")`。也就是说这个任务被硬绑死在开局村庄上，mod 换地图或换村庄一定出错。第二，读档分支同样必须成对调用 `AddTaskBehaviorsOnGameLoad` + `InitializeTaskOnLoad`，而 `InitializeTaskOnLoad` 第三个参数（settlement）在这次调用里显式传了硬编码字符串——这正是为了让 `_recruitSettlement` 非空，避免玩家在野外招募被误判为有效。

## 主要成员

- `RecruitTroopsTutorialQuest(Hero questGiver)`：构造入口，`questGiver` 传给基类作为任务发布者（只影响任务列表显示和 `DiscussDialogFlow` 的默认条件）。建一条 0→4 的离散日志，再造 `RecruitTroopTutorialQuestTask` 并 `AddTask`。
- `public const int RecruitTroopAmount = 4`：公开目标数量，同样是"外部可读、内部硬编码 4"。
- `override TextObject Title`：固定文案 `Recruit Troops`。
- `private bool DoesRecruitedTroopSatifyRecruitTroopTask(CharacterObject troop)`：**恒返回 true**。这是 `RecruitTroopTutorialQuestTask` 的 `Func<CharacterObject,bool>` 槽位，教学期不做兵种筛选。方法名有拼写错误（Satify），照抄时别"顺手修正"，会影响反射搜索。
- `protected override void InitializeQuestOnGameLoad()`：重挂子任务行为 + 用 `4` 和恒真谓词 + `village_ES3_2` 重新注入。
- `[SaveableField(1)] _recruitTroopTutorialQuestTask`（readonly）：子任务本体。

## 使用示例

```csharp
// 子任务的完成回调就是宿主任务的完成
private void RecruitTaskOnSuccess()
{
    CompleteQuestWithSuccess();
}

// 想改成"只招精锐"时，替换谓词即可（读档分支也要同步改）
new RecruitTroopTutorialQuestTask(
    new Action(this.RecruitTaskOnSuccess), 4,
    new Func<CharacterObject, bool>(this.IsTierOneTroop),
    Settlement.Find("village_ES3_2"), log);
```

## 风险与边界

跨读档风险与购买任务同源：`_targetRecruitAmount`、`_recruitTypeConditions`、`_recruitSettlement` 不存档，必须在 `InitializeQuestOnGameLoad` 重新注入。另一个隐性边界是 `RecruitTroopTutorialQuestTask` 用 `Settlement.CurrentSettlement` 判定地点，所以**玩家在村庄外招募永远不计数**——即便 tutorial 期间玩家被 AI 抓走又放回原村也没问题，但任何"在野外顺路招几个兵"的路径都会被拒。任务完成后没有奖励、没有声望变化，也没有对 `TutorialPhase` 的额外清理；教程阶段的推进由 `TalkToTheHeadmanTutorialQuest` 在两个子任务都 finalize 时统一处理。

## 依赖关系

- [RecruitTroopTutorialQuestTask（进度引擎）](../RecruitTroopTutorialQuestTask)
- [PurchaseGrainTutorialQuest（同批启动的姊妹任务）](../PurchaseGrainTutorialQuest)
- [TalkToTheHeadmanTutorialQuest（创建它的任务）](../TalkToTheHeadmanTutorialQuest)