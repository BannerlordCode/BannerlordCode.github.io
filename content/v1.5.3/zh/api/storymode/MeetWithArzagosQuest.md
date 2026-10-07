---
title: "MeetWithArzagosQuest"
description: "第一阶段并列入口任务：找到反帝国阵营导师 Arzagos，表态支持摧毁帝国后被引向龙旗主线。"
---
# MeetWithArzagosQuest

**Namespace:** StoryMode.Quests.FirstPhase
**Module:** StoryMode
**Type:** `public class MeetWithArzagosQuest : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** StoryMode/Quests/FirstPhase/MeetWithArzagosQuest.cs

## 概述

它和 `MeetWithIstianaQuest` 是**逐行对称**的一对：结构、时限、对话流条数、状态字段、幂等开子任务的逻辑全都一样，唯一区别是绑定到 `StoryModeHeroes.AntiImperialMentor`、以及对话里的立场二选一语义相反（Arzagos 想要的是"摧毁帝国"）。把这个类型和 Istiana 版本并排读，是理解 Bannerlord 第一阶段分支设计最快的方式。

## 心智模型

它与 Istiana 版本同时被第一阶段逻辑激活，构造时传入 Arzagos 所在的定居点，`HeroHelper.SpawnHeroForTheFirstTime` 把他放进地图，时限同样取 `StoryModeManager.Current.MainStoryLine.FirstPhase.FirstPhaseEndTime`。`IsRemainingTimeHidden` 覆写为 `false`。

状态机只有一位：`_metAntiImperialMentor`。玩家第一次对话时选"我不认同你的看法"或"还没决定" → 置 true + `Hero.OneToOneConversationHero.SetHasMet()`，任务**不完成**；玩家选"我也希望帝国覆灭" → 触发 `ActivateAssembleTheBannerQuest()`，并在对话结束时 `CompleteQuestWithSuccess()`。

坑和 Istiana 版本一模一样但字段名不同：`_metAntiImperialMentor` 表示的是"需要再问一次"。因为两个任务并存且都用 `Campaign.Current.QuestManager.Quests.Any(q => q is AssembleTheBannerQuest)` 做去重，正常流程下 `AssembleTheBannerQuest` 只会被创建一次——但这也意味着**先跟谁表态谁决定主线节奏**。跨读档在对话中途会让玩家重走完整长对话。

## 怎么用

### 怎么拿到它

`public class MeetWithArzagosQuest : StoryModeQuestBase` 声明在 `bannerlord-1.5.3/StoryMode/Quests/FirstPhase/MeetWithArzagosQuest.cs:15`，全文 182 行。**与 [MeetWithIstianaQuest](../MeetWithIstianaQuest) 逐行对称**，只把 `ImperialMentor` 换成 `AntiImperialMentor`、`_metImperialMentor` 换成 `_metAntiImperialMentor`。

创建入口是唯一构造函数 `MeetWithArzagosQuest(Settlement settlement)`（`:65`），基类调用：

```csharp
: base("meet_with_arzagos_story_mode_quest", null,
       StoryModeManager.Current.MainStoryLine.FirstPhase.FirstPhaseEndTime)
```

**任务 id 不同**（`meet_with_arzagos_story_mode_quest`），**`questGiver` 同样是 `null`**（`:66`），**时长同样取 `FirstPhase.FirstPhaseEndTime`**。它也覆写了 `IsRemainingTimeHidden` 为 `false`（`:56`→`:60`）。

构造函数体（`:68`→`:73`）：`_metAntiImperialMentor = false`、`SetDialogs()`、`HeroHelper.SpawnHeroForTheFirstTime(StoryModeHeroes.AntiImperialMentor, settlement)`（`:70`）、`AddTrackedObject(settlement)`（`:71`）、`AddTrackedObject(StoryModeHeroes.AntiImperialMentor)`（`:72`）、`AddLog(this._startQuestLog, false)`（`:73`）。

**与 Istiana 版的一个实质差异**：两条对话流各自带了 `.Condition(...)` 委托。第一条（`:90`）的条件是 `Hero.OneToOneConversationHero != null && == StoryModeHeroes.AntiImperialMentor && !this._metAntiImperialMentor`（`:90` 尾部）；第二条（`:126`）是 `== AntiImperialMentor && this._metAntiImperialMentor`。**这正是 `_metAntiImperialMentor` 存在的意义——它是「选过话但没答应」的状态位，用来在两条对话流之间切换。**

三个 getter 形式的 `TextObject`：`_startQuestLog`（`:19`，注入 `HERO` 于 `:24`、`SETTLEMENT` 于 `:25`）、`_endQuestLog`（`:32`，注入 `HERO` 于 `:37`）、`Title`（`:44`，注入 `HERO` 于 `:49`）——`Title` 文案与 Istiana 版**共用同一句模板** `"{=Y6SqyQwn}Meet with {HERO.NAME}"`，靠 `{HERO.NAME}` 变量区分。

`SetDialogs()`（`:88`）注册两条 `AddDialogFlow`（`:90`、`:126`），都挂在 `"lord_start"`、优先级都 `110`。后果：救帝国承诺 → `ActivateAssembleTheBannerQuest`（`:105`）；没想好 → `_metAntiImperialMentor = true` + `SetHasMet()`（`:119`）。`ActivateAssembleTheBannerQuest()`（`:145`）查重后 `new AssembleTheBannerQuest().StartQuest();`（`:149`）。

`InitializeQuestOnGameLoad()`（`:77`）只重注册对话流。存档只有 `_metAntiImperialMentor`（`[SaveableField(1)]`，`:179`→`:180`）。

### 典型用法

```csharp
// 1) 正常由剧情链创建
Settlement mentorTown = StoryModeManager.Current.MainStoryLine.AntiImperialMentorSettlement;
if (mentorTown != null && !Campaign.Current.QuestManager.Quests.Any(q => q is MeetWithArzagosQuest))
{
    MeetWithArzagosQuest quest = new MeetWithArzagosQuest(mentorTown);
    quest.StartQuest();
}

// 2) 两个「见导师」任务可以同时存在：靠 id 与宿主类型区分
QuestBase q = Campaign.Current.QuestManager.GetQuest<MeetWithArzagosQuest>();
Debug.Print("任务 id=" + q.QuestId + "，Title=" + q.Title + "，发布者=" + (q.QuestGiver?.Name.ToString() ?? "null"));

// 3) 对话流的切换条件（复现源码 :90 / :126）
bool isArzagos = Hero.OneToOneConversationHero == StoryModeHeroes.AntiImperialMentor;
Debug.Print("当前对话对象是 Arzagos=" + isArzagos);

// 4) 时限来源：与 Istiana 版同一个属性
FirstPhase first = StoryModeManager.Current.MainStoryLine.FirstPhase;
Debug.Print("任务截止=" + first.FirstPhaseEndTime.ToYears + " 年");
```

### 最容易踩的坑

两个任务用的是**同一句 `Title` 文案**（`:48`：`"{=Y6SqyQwn}Meet with {HERO.NAME}"`），只靠注入的 `HERO` 变量区分。玩家的任务日志里两条记录看起来几乎一样。mod 做 UI 时要按 `QuestId`（`meet_with_arzagos_story_mode_quest` / `meet_with_istiana_story_mode_quest`）或类型判断，**不要按 `Title.ToString()` 做字符串匹配**——`{HERO.NAME}` 在不同语言下渲染成不同名字，匹配会静默失效。

## 主要成员

- `MeetWithArzagosQuest(Settlement settlement)`：构造入口，逻辑与 Istiana 版本逐行对应。
- `override TextObject Title`：`Meet with {HERO.NAME}`（两个任务共用同一句文案模板）。
- `override bool IsRemainingTimeHidden`：覆写为 `false`。
- `protected override void SetDialogs()`：注册两条 `DialogFlow.CreateDialogFlow("lord_start", 110)`，priority 都是 110。第一条是完整问答 + "我同样希望帝国被摧毁 / 我不确定" 二选一；第二条是追问流。两条都用 `Hero.OneToOneConversationHero == StoryModeHeroes.AntiImperialMentor` 锁定对象。
- 私有 `ActivateAssembleTheBannerQuest()`：幂等创建 `AssembleTheBannerQuest`。
- `protected override void OnCompleteWithSuccess()`：追加 "You talked with {HERO.LINK}"。
- `[SaveableField(1)] _metAntiImperialMentor`：唯一状态位。

## 使用示例

```csharp
// 立场选择的后果之一：只登记，不完成任务，允许反悔
this._metAntiImperialMentor = true;
Hero.OneToOneConversationHero.SetHasMet();

// 立场选择的后果之二：立刻开主线，但完成要等对话关闭
if (!Campaign.Current.QuestManager.Quests.Any<QuestBase>(q => q is AssembleTheBannerQuest))
{
    new AssembleTheBannerQuest().StartQuest();
}
Campaign.Current.ConversationManager.ConversationEndOneShot += base.CompleteQuestWithSuccess;
```

## 风险与边界

同样继承第一阶段共享截止时间，超时走基类 `OnTimedOut` 而不是自定义失败处理。存档只有一个 bool，语义反直觉。这里还有一个**额外风险**：因为 `AssembleTheBannerQuest` 的创建是跨两个任务共享的幂等操作，如果 mod 让两个导师在同一时间都在场、且玩家两边都完成了表态对话，`AssembleTheBannerQuest` 里 `_talkedWithImperialMentor` / `_talkedWithAntiImperialMentor` 两个标记的组合会决定最终给哪组任务——这正是原版允许玩家"两面都谈"的设计，不要试图用任务存在性去判定立场。

## 依赖关系

- [MeetWithIstianaQuest（对称任务）](../MeetWithIstianaQuest)
- [AssembleTheBannerQuest（对话后果开出的任务）](../AssembleTheBannerQuest)
- [ArzagosBannerPieceQuest（导师给出的碎片线索）](../ArzagosBannerPieceQuest)