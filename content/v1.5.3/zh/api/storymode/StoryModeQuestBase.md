---
title: "StoryModeQuestBase"
description: "所有主线剧情任务的抽象基类：统一 SpecialQuestType、隐藏剩余时间，并在超时时写一条固定日志。"
---
# StoryModeQuestBase

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public abstract class StoryModeQuestBase : QuestBase`
**Base:** `QuestBase`（TaleWorlds.CampaignSystem）
**Source:** `bannerlord-1.5.3/StoryMode/StoryModeQuestBase.cs`

## 概述

这是一个只做三件事的抽象基类，但正是这三件事把「主线任务」和「沙盒任务」在 UI 上区分开：它把 `SpecialQuestType` 固定成 `"MainStoryline"`，把 `IsRemainingTimeHidden` 固定成 `true`（主线任务不在任务栏显示倒计时），并在超时时往日志里补一句玩家必看的失败提示。它**不含任何剧情逻辑**——具体任务（`SupportKingdomQuest`、`AssembleTheBannerQuest`、`RescueFamilyQuest` 等十几个）都在各自的子类里。

## 心智模型

它在继承树里的位置是：`QuestBase` ← `StoryModeQuestBase` ← 具体主线任务。同时还有一条平行的继承链：`QuestBase` ← `ConspiracyQuestBase`（阴谋任务）——**阴谋任务不继承本类，但它同样返回 `"MainStoryline"`**。所以 `is StoryModeQuestBase` 会漏掉整条阴谋任务线，而 `SpecialQuestType == "MainStoryline"` 两条线都能抓到。这也是为什么 UI 侧一律按字符串分类。

构造函数只有一行：`base(questId, questGiver, duration, 0)`。第四个参数（`questType` 相关的数值参数）被固定成 0，意味着**所有主线任务都不带那个额外分类位**。

`IsRemainingTimeHidden = true` 的后果是：即使你在 `QuestBase` 构造时给了非零 `duration`，UI 也不会显示倒计时。本类的 `OnTimedOut()` 仍然会跑——隐藏显示 ≠ 取消超时逻辑。

**坑**：

1. **只覆写了 `OnTimedOut`，没覆写 `OnFail` / `OnCancel`**。主线任务失败或被取消时不会写任何日志。
2. **`SpecialQuestType` 是 override 且硬编码**：子类不能改。任务想换分类只能改继承链。
3. **超时文本是硬编码英文**：`"{=JTPmw3cb}You couldn't complete the quest in time."`。这是本地化键，翻译在官方语言包里，mod 无法替换这条文本而只能用同样的键。
4. **`AddLog(text, false)`** 的 `false` 是 `showNotification`——**超时不会弹提示框**，只在日志里留一条。想让玩家立刻看到得自己再发通知。

## 主要成员

- `public override string SpecialQuestType { get; }`：**恒为 `"MainStoryline"`**。这是主线任务在 UI 上被归到主线分类的唯一依据，也是判断一个 `QuestBase` 是否属于主线的可靠办法。
- `public override bool IsRemainingTimeHidden { get; }`：**恒为 `true`**。任务栏与日志都不显示剩余时间。
- `protected StoryModeQuestBase(string questId, Hero questGiver, CampaignTime duration)`：唯一的构造函数签名，`questType` 参数固定 0。子类必须照此转发。
- `protected override void OnTimedOut()`：调 `base` 后 `AddLog("{=JTPmw3cb}You couldn't complete the quest in time.", false)`。

本类**没有** `StartQuest`、`CompleteQuestWithSuccess` 之类的成员——那些是 `QuestBase` 上的，子类按需调用。

## 使用示例

```csharp
// 1) 写一个自己的主线任务：继承本基类，拿不到主线分类以外的东西
public class RescueBrotherQuest : StoryModeQuestBase
{
    public RescueBrotherQuest(string questId, Hero questGiver, CampaignTime duration)
        : base(questId, questGiver, duration)
    {
    }

    public override bool OnStartQuest()
    {
        // QuestBase 的标准开局流程
        base.OnStartQuest();
        return true;
    }
}

// 2) 判断一个任务是不是主线任务：看 SpecialQuestType，不要用 is StoryModeQuestBase
//    （ConspiracyQuestBase 也返回 "MainStoryline"，但它不继承 StoryModeQuestBase）
public override void DailyTick()
{
    foreach (QuestBase quest in Campaign.Current.QuestManager.Quests)
    {
        if (quest.IsOngoing && quest.SpecialQuestType == "MainStoryline")
        {
            Debug.Print("进行中的主线任务：" + quest.StringId);
        }
    }
}

// 3) 结束任务：这些是 QuestBase 的 API，经本类继承而来
RescueBrotherQuest q = new RescueBrotherQuest("rescue_brother", Hero.MainHero, CampaignTime.Days(10));
q.StartQuest();
q.CompleteQuestWithSuccess();
```

## 风险与边界

- **不是所有主线任务都继承它**：阴谋任务走 `ConspiracyQuestBase`，虽然两者都返回 `"MainStoryline"`，但 `is StoryModeQuestBase` 判据只覆盖一条线。用 `SpecialQuestType` 判。
- **`QuestStates` 枚举是 `internal`**：`QuestBase.QuestStates` 不可访问，外部判断进行中状态要用 public 的 `IsOngoing` / `IsFinalized`，不是 `quest.State`。
- **隐藏倒计时 ≠ 无超时**：给了 `duration` 仍会在到期时触发 `OnTimedOut()`。想让主线任务永不过期，**传 `CampaignTime.Never`**，而不是靠 UI 隐藏。
- **失败/取消无日志**：`OnFail` / `OnCancel` 未覆写。想统一加提示得自己在子类里写。
- **`SpecialQuestType` 硬编码**：无法通过继承做「主线但不同分类」的变体。
- **文本键固定**：本地化键 `JTPmw3cb` 写死，mod 只能沿用不能替换。
- **构造函数第三参数仍是 `duration`**：子类忘记传 `CampaignTime.Never` 就会得到一个会超时的任务，而 UI 不提示任何倒计时——玩家只会莫名其妙失败。

## 依赖关系

- [ConspiracyQuestMapNotification](../ConspiracyQuestMapNotification) — 阴谋任务用的地图通知，与本类是两条平行任务线
- [StoryModeManager](../StoryModeManager) — 主线任务整体进度由 `MainStoryLine` 的阶段链决定