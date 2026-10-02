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