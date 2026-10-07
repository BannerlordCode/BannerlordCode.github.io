---
title: "MeetWithIstianaQuest"
description: "第一阶段首个任务：找到并说服帝国阵营导师 Istiana，由她引入龙旗主线，同时决定支持帝国还是反帝国。"
---
# MeetWithIstianaQuest

**Namespace:** StoryMode.Quests.FirstPhase
**Module:** StoryMode
**Type:** `public class MeetWithIstianaQuest : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** StoryMode/Quests/FirstPhase/MeetWithIstianaQuest.cs

## 概述

主线第一阶段的入口任务。玩家在序章拿到龙旗碎片之后，必须找到帝国阵营导师 Istiana 并与她对话。对话里她解释龙旗传说，然后问玩家一个关键问题：**你打算用龙旗救帝国，还是用它毁掉帝国？** 玩家可以当场表态，也可以答"还没想好"——答后者只会把 `_metImperialMentor` 置为 true 而不完成任务，下次对话再问一次。这个"态度选择"直接决定第二阶段跟谁走。

## 心智模型

它由 `StoryModeManager` / 第一阶段逻辑创建，构造时传入**Istiana 当前所在的定居点**，用 `HeroHelper.SpawnHeroForTheFirstTime` 把她放进地图。任务的时限来自 `StoryModeManager.Current.MainStoryLine.FirstPhase.FirstPhaseEndTime`——这是整个第一阶段共享的截止时间，`IsRemainingTimeHidden` 返回 `false` 意味着 UI 会显示倒计时。

它有两种"完成路径"：玩家在对话中选了与帝国一致的立场，立刻触发 `ActivateAssembleTheBannerQuest()` 开出 `AssembleTheBannerQuest`，并在**对话彻底结束时**（挂在 `ConversationEndOneShot`）调用 `CompleteQuestWithSuccess()`；玩家选了"还没决定"，任务保持 ongoing，只把导师标记为"已见过"，方便下次对话用第二个 flow。

坑：`_metImperialMentor` 这个字段名和它的实际语义相反——它表示"导师还等着再问你一次"，而不是"玩家已经见过 Istiana"。真正的"见过"是 `Hero.MainHero` 侧的 `SetHasMet()`。跨读档时如果玩家在对话中途存档，`_metImperialMentor` 仍是 false，会重开第一个 flow（完整长对话）而不是续上。

## 怎么用

### 怎么拿到它

`public class MeetWithIstianaQuest : StoryModeQuestBase` 声明在 `bannerlord-1.5.3/StoryMode/Quests/FirstPhase/MeetWithIstianaQuest.cs:15`，全文 182 行。

创建入口是唯一构造函数 `MeetWithIstianaQuest(Settlement settlement)`（`:65`），基类调用：

```csharp
: base("meet_with_istiana_story_mode_quest", null,
       StoryModeManager.Current.MainStoryLine.FirstPhase.FirstPhaseEndTime)
```

三点值得注意：**任务 id 是硬编码字符串**、**`questGiver` 传的是 `null`**（`:66`——发布者留空，任务列表里没有发布者头像）、**时长取的是 `FirstPhase.FirstPhaseEndTime` 而不是 `CampaignTime.Never`**（`FirstPhase.cs:62`→`:66`，即 `CampaignTime.Years(20f) + FirstPhaseStartTime`）。同时它**覆写了 `IsRemainingTimeHidden` 为 `false`**（`:56`→`:60`）——这是全模块少数几个让主线任务显示剩余时间的类，与基类恒 `true` 相反。

**谁创建它**：不在本文件里。宿主是 [FirstPhaseCampaignBehavior](../FirstPhaseCampaignBehavior) 的 `OnQuestCompleted`——它按 `quest is XxxQuest` 类型分支串链，`MeetWithIstianaQuest` 构造完并 `StartQuest()` 后，才轮到下一条。

构造函数体（`:68`→`:73`）依次：`_metImperialMentor = false`、`SetDialogs()`、`HeroHelper.SpawnHeroForTheFirstTime(StoryModeHeroes.ImperialMentor, settlement)`（`:70`，把导师放进指定聚落）、`AddTrackedObject(settlement)`（`:71`）、`AddTrackedObject(StoryModeHeroes.ImperialMentor)`（`:72`）、`AddLog(this._startQuestLog, false)`（`:73`）。

三个 `TextObject` 都是**私有属性形式的 getter，每次访问重新 new 并注入文本变量**：

- `_startQuestLog`（`:19`）注入 `HERO`（`:24`）和 `SETTLEMENT`（`:25`，取 `StoryModeHeroes.ImperialMentor.CurrentSettlement.EncyclopediaLinkWithName`）
- `_endQuestLog`（`:32`）只注入 `HERO`（`:37`）
- `Title`（`:44`）只注入 `HERO`（`:49`）——文案 `"{=Y6SqyQwn}Meet with {HERO.NAME}"`，与 `MeetWithArzagosQuest` **共用同一句模板**

`SetDialogs()`（`:88`）注册**两条** `AddDialogFlow`（`:90`、`:126`），都挂在 `"lord_start"` 节点、优先级都 `110`。第一条的分支后果：承诺救帝国 → `ActivateAssembleTheBannerQuest`（`:105`）；没想好 → `_metImperialMentor = true` + `SetHasMet()`（`:119`→`:120`）。两条流里「已想好」的结局都是 `Campaign.Current.ConversationManager.ConversationEndOneShot += base.CompleteQuestWithSuccess;`（`:113`、`:134`）——**任务是在对话结束那一刻才完成，不是选词那一刻**。

`ActivateAssembleTheBannerQuest()`（`:145`）先查重：`!Campaign.Current.QuestManager.Quests.Any<QuestBase>(q => q is AssembleTheBannerQuest)`（`:147`），没有才 `new AssembleTheBannerQuest().StartQuest();`（`:149`）。

`InitializeQuestOnGameLoad()`（`:77`）只调 `SetDialogs()`（`:79`）——读档后重新注册对话流。`HourlyTick()`（`:83`）是空实现。

存档只有 `_metImperialMentor`（`[SaveableField(1)]`，`:179`→`:180`）。

### 典型用法

```csharp
// 1) 正常由剧情链创建：new + StartQuest()
Settlement mentorTown = StoryModeManager.Current.MainStoryLine.ImperialMentorSettlement;
if (mentorTown != null && !Campaign.Current.QuestManager.Quests.Any(q => q is MeetWithIstianaQuest))
{
    MeetWithIstianaQuest quest = new MeetWithIstianaQuest(mentorTown);
    quest.StartQuest();
}

// 2) 读任务状态：唯一持久化的字段就是 _metImperialMentor
QuestBase q = Campaign.Current.QuestManager.GetQuest<MeetWithIstianaQuest>();
if (q != null)
{
    // Title 是 getter，每次重新注入文本变量
    Debug.Print(q.Title.ToString() + "，剩余时间隐藏=" + q.IsRemainingTimeHidden);
    Debug.Print("跟踪对象数=" + q.TrackedObjects.Count);
}

// 3) 时限的真正来源
FirstPhase first = StoryModeManager.Current.MainStoryLine.FirstPhase;
Debug.Print("任务截止=" + first.FirstPhaseEndTime.ToYears + " 年（阶段起点 " + first.FirstPhaseStartTime.ToYears + "）");
```

### 最容易踩的坑

基类调用的第三个参数是 `FirstPhase.FirstPhaseEndTime`（`:66`）——**而 `FirstPhase` 在教学未完成时是 `null`**，直接解引用会 NRE。也就是说这个构造函数只能在 `MainStoryLine.CompleteTutorialPhase` 之后被调。此外 `questGiver` 传的是 `null`（`:66`），所以 `quest.QuestGiver` 为 null：任何按发布者过滤任务的 UI 或 mod 代码（例如 `quest.QuestGiver.HeroObject`）会在这个任务上崩——主线第一个「见导师」任务就是这么特殊。

## 主要成员

- `MeetWithIstianaQuest(Settlement settlement)`：构造入口。置 `_metImperialMentor = false`、`SetDialogs()`、把 Istiana 放进指定定居点、`AddTrackedObject` 两个对象、写起始日志。
- `override TextObject Title`：`Meet with {HERO.NAME}`。
- `override bool IsRemainingTimeHidden`：覆写为 `false`，让第一阶段的共享截止时间在任务栏可见。
- `protected override void SetDialogs()`：注册**两条**对话流。第一条条件是"一对一对象是 Istiana 且 `!_metImperialMentor`"，包含完整的旗子传说问答与立场二选一；第二条条件是"`_metImperialMentor` 为真"，是"想好了没有"的追问流。
- 私有 `ActivateAssembleTheBannerQuest()`：立场对话的 `Consequence`。先用 `Campaign.Current.QuestManager.Quests.Any(q => q is AssembleTheBannerQuest)` 做幂等检查，再 `new AssembleTheBannerQuest().StartQuest()`。**这个去重是必须的**，因为两条 flow 都可能触发它。
- 私有 `headman` 无关；`protected override void OnCompleteWithSuccess()`：追加结束日志"You talked with {HERO.NAME}"。
- `[SaveableField(1)] _metImperialMentor`：唯一状态位。

## 使用示例

```csharp
// 幂等开子任务：重复对话不会开出第二份 AssembleTheBannerQuest
private void ActivateAssembleTheBannerQuest()
{
    if (!Campaign.Current.QuestManager.Quests.Any<QuestBase>(q => q is AssembleTheBannerQuest))
    {
        new AssembleTheBannerQuest().StartQuest();
    }
}

// 对话彻底结束才算完成，而不是选完选项立刻完成
Campaign.Current.ConversationManager.ConversationEndOneShot += base.CompleteQuestWithSuccess;
```

## 风险与边界

限时任务：它继承的是 `FirstPhase.FirstPhaseEndTime`，如果玩家拖到第一阶段结束，本任务会走 `StoryModeQuestBase.OnTimedOut()`（基类默认行为）而不是失败日志，主线可能因此断链。存档方面只有一个 bool，且状态语义反直觉——读档后若玩家已经表过态但对话未关闭，会被要求重新走一遍长对话。此外 `StoryModeHeroes.ImperialMentor` 与它的对称任务 `MeetWithArzagosQuest` 会同时存在；如果 mod 提前推了 `MainStoryLineSide`，两者的对话条件并不会自动失效，可能出现"两边都能开龙旗任务"的重叠状态。

## 依赖关系

- [MeetWithArzagosQuest（对立阵营的对称任务）](../MeetWithArzagosQuest)
- [AssembleTheBannerQuest（对话后果开出的任务）](../AssembleTheBannerQuest)
- [CampaignEvents（对话与任务生命周期事件源）](../../campaign/CampaignEvents)