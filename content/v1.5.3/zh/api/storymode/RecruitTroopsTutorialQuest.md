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

## 怎么用

### 怎么拿到它

`public class RecruitTroopsTutorialQuest : StoryModeQuestBase` 声明在 `bannerlord-1.5.3/StoryMode/Quests/TutorialPhase/RecruitTroopsTutorialQuest.cs:12`，全文 100 行——**很短，因为活都在子任务里**。

构造函数 `RecruitTroopsTutorialQuest(Hero questGiver)`（约 `:35`），基类 `: base("recruit_troops_tutorial_quest", questGiver, CampaignTime.Never)`（`:36`）。**注意与教学链上其他任务不同——这里 `questGiver` 是真的传进去的**（不是 null），因为它由 [TalkToTheHeadmanTutorialQuest](../TalkToTheHeadmanTutorialQuest) 用村长 `Hero` 创建（`TalkToTheHeadmanTutorialQuest.cs:136`）。存档 id 692001（`SaveableStoryModeTypeDefiner.cs:47`）。

**它真正的逻辑是一个子任务**：`private readonly RecruitTroopTutorialQuestTask _recruitTroopTutorialQuestTask`（`[SaveableField(1)]`，`:96`→`:97`），在构造函数里造好并 `AddTask(...)`。数量来自 `public const int RecruitTroopAmount = 4;`（`:93`）。

三个委托把子任务接回任务：`DoesRecruitedTroopSatifyRecruitTroopTask(CharacterObject troop)`（`:62`）是传给子任务的筛选谓词、`RecruitTaskOnSuccess()`（`:68`）是 `onSucceed` 回调、`HourlyTick()`（`:57`）驱动检查。

`InitializeQuestOnGameLoad()`（`:49`）负责读档后把目标数量与谓词重新注入子任务——因为 [RecruitTroopTutorialQuestTask](../RecruitTroopTutorialQuestTask) 的 `_targetRecruitAmount` 和 `_recruitTypeConditions` **都不进存档**。

### 典型用法

```csharp
// 1) 正常由 TalkToTheHeadmanTutorialQuest 的对话后果创建
Hero headman = StoryModeManager.Current.MainStoryLine.TutorialPhase.TutorialVillageHeadman;
RecruitTroopsTutorialQuest q = new RecruitTroopsTutorialQuest(headman);
q.StartQuest();      // 教程日志里的「招募 4 人」进度条随 AddTask 出现

// 2) 目标数量是公开常量
Debug.Print("目标=" + RecruitTroopsTutorialQuest.RecruitTroopAmount);

// 3) 筛选谓词（源码 :62 的语义）：只认教学占位志愿兵
Debug.Print("只统计 " + TutorialPhase.TutorialVolunteerStringId);   // tutorial_placeholder_volunteer

// 4) 读任务
QuestBase b = Campaign.Current.QuestManager.GetQuest<RecruitTroopsTutorialQuest>();
Debug.Print("id=" + b.QuestId + "，存档 id=692001，发布者=" + b.QuestGiver?.Name);
```

### 最容易踩的坑

`questGiver` 是**村长本人**，而他读自 `TutorialPhase.TutorialVillageHeadman`——那个属性带 `[CachedData]`（`TutorialPhase.cs:143`）且是 `public ... { get; set; }`，**是会话内缓存、不进存档**。读档后到它被重新填充之前可能是 null，于是 `new RecruitTroopsTutorialQuest(null)` 造出的任务发布者为 null，任何按 `QuestGiver` 取英雄的代码在这条任务上 NRE——而 [TravelToVillageTutorialQuest](../TravelToVillageTutorialQuest) 那种 `questGiver` 恒为 null 的任务反而不容易踩到。

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