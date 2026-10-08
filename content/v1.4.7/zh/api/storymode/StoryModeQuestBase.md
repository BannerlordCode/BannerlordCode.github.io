---
title: "StoryModeQuestBase"
description: "主线剧情的任务基类：把 SpecialQuestType 固定成 MainStoryline、把剩余时间藏起来，让子类专心写「剧情怎么推进」。"
---
# StoryModeQuestBase

**命名空间：** `StoryMode`
**模块：** `StoryMode`
**类型：** `public abstract class StoryModeQuestBase : QuestBase`
**基类：** `TaleWorlds.CampaignSystem.QuestBase`
**源文件：** `bannerlord-1.4.7/StoryMode/StoryModeQuestBase.cs`（声明见第 8 行）

## 概述

这是主线战役（Main Storyline）里**所有剧情任务的公共父类**。它自己几乎不做事，只做两处「一刀切」的约定：第一，把 `SpecialQuestType` 写死为 `"MainStoryline"`，让任务日志和任务筛选能一眼区分主线与普通支线；第二，把 `IsRemainingTimeHidden` 写死为 `true`，这样主线任务不会在任务面板上向玩家暴露倒计时。它另外提供了一个三参数构造函数，把「任务 ID + 发布者 + 时长」打包好转发给 `QuestBase`，并在超时钩子里补一条本地化日志。

换句话说，它是**主线任务的身份标签层**，不是流程引擎。它不注册任何事件、不订阅任何 Campaign 事件、不推进任何剧情阶段——这些全部留给派生类。真正在用的派生类之一是第二阶段的 `ConspiracyQuestBase`，它在这一层之上再补了「阴谋强度下降」「导师文本」等主线专属语义。

## 心智模型

把它想成主线任务的**底座夹具**：一个 `QuestBase` 的薄包装，负责向系统声明「我是主线的一环」。状态从哪来？全部来自 `QuestBase`——任务 ID、发布者、截止时间、日志、状态机；`StoryModeQuestBase` 不新增任何字段，因此**没有自己的持久化状态**（这也解释了它为什么不需要 `SyncData`）。

谁改它？没有人改它。它唯一的两个属性都是**只读的常量式覆写**，返回值写死在方法体里，派生类再怎么覆写也改不了「主线」这个身份标签的含义（当然可以在自己的层级再覆写，但那等于自己拆掉这个约定）。

子类要覆写什么？看你想不想接管流程：`QuestBase` 提供的 `OnStartQuest`、`OnCompleteWithSuccess`、`OnTimedOut`、`RegisterEvents` 等钩子它一个都没有封口，派生类必须自己挑需要的那几个覆写，并且**记得调用 `base`**——例如 `OnTimedOut` 的基类实现会写一条「没能按时完成」的日志，跳过 `base.OnTimedOut()` 就等于让玩家失去这条提示。它不负责：任务分支推进、对话注册、阶段切换、存档字段同步。

## 怎么用

不能直接 `new`（`StoryModeQuestBase.cs:8` 是 abstract），也不能靠 `Campaign.Current` 把它「取出来」——它没有单例入口。正确用法是**派生**，在自己的构造函数里用三参数基构造把任务 ID、发布者英雄和时长传上去，然后覆写需要的钩子：

1. **基构造签名只有三个参数**：`(string questId, Hero questGiver, CampaignTime duration)`。它内部再补一个 `0` 转发给 `QuestBase`，所以你没有别的入口去调那个重载；想改超时行为只能在构造之后调用 `QuestBase` 的公开方法。见 `StoryModeQuestBase.cs:8`。
2. **`SpecialQuestType` 已经被占用**：它固定返回 `"MainStoryline"`（`StoryModeQuestBase.cs:12`）。如果你的 mod 想用自己的任务类型字符串做分类，不要在这一层覆写它——那会污染主线任务的分类，改成在你的子类里单独维护一个字段。
3. **`IsRemainingTimeHidden` 固定为 `true`**（`StoryModeQuestBase.cs:22`），所以任务面板不会显示剩余天数。但注意：**时长仍然真实生效**，`CampaignTime.DaysFromNow(...)` 到期后 `QuestBase` 照样触发超时流程。别把「不显示」误当成「不会超时」。
4. **它不注册事件**。想让任务对 `StoryModeEvents` 或 `CampaignEvents` 做出反应，必须在派生类里自己覆写 `RegisterEvents()`，并在其中用 `AddNonSerializedListener` 订阅；否则你的任务只会静静地躺在任务列表里。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `abstract class StoryModeQuestBase : QuestBase` | 抽象基类，禁止直接实例化；继承 `QuestBase` 拿到完整的任务状态机与存档支持。`StoryModeQuestBase.cs:8` |
| `override string SpecialQuestType` | 只读属性，返回常量 `"MainStoryline"`。任务系统的分类标签，主线与支线的分界线。`StoryModeQuestBase.cs:12` |
| `override bool IsRemainingTimeHidden` | 只读属性，返回常量 `true`。隐藏任务面板上的倒计时，但**不取消超时逻辑**。`StoryModeQuestBase.cs:22` |
| `protected StoryModeQuestBase(string questId, Hero questGiver, CampaignTime duration)` | 唯一的构造入口，把三个参数转发给 `QuestBase`，并补一个 `0` 作为额外参数。派生类的构造函数应当直接转调它。`StoryModeQuestBase.cs:31` |
| `protected override void OnTimedOut()` | 超时钩子：先调用 `base.OnTimedOut()`，再向任务日志追加一条本地化文本「没能按时完成」。覆写时务必保留 `base` 调用。`StoryModeQuestBase.cs:37` |

## 真实示例

派生一个主线任务：用基构造传任务 ID / 发布者 / 时长，并在启动时把导师的委托写进任务日志。注意 `base.AddLog(...)` 是 `QuestBase` 提供的真实方法，也是这个基类里最常用的一步。

```csharp
using StoryMode;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Localization;

public class MyStoryQuest : StoryModeQuestBase
{
    public MyStoryQuest(Hero questGiver)
        : base("my_mod_story_quest", questGiver, CampaignTime.DaysFromNow(30f))
    {
    }

    protected override void OnStartQuest()
    {
        base.OnStartQuest();
        // 主线任务不显示倒计时，但时长仍在跑；这里先把委托写进任务日志
        base.AddLog(new TextObject("{=my_mod_log_start}The mentor asked you to act."), false);
    }

    protected override void OnTimedOut()
    {
        base.OnTimedOut(); // 基类会补一条「没能按时完成」的日志，别丢掉它
    }
}
```

## 参见

- ↔ 同桶：[ConspiracyQuestBase](../ConspiracyQuestBase) —— 在它之上补齐第二阶段阴谋任务的语义。
- ↔ 同桶：[CampaignStoryMode](../CampaignStoryMode) —— 主线剧情的总入口，负责创建与推进这些任务。
- ↔ 同桶：[StoryModeManager](../StoryModeManager) —— 通过它访问 `MainStoryLine` 状态，判断任务该不该触发。
- ↔ 跨桶：[Campaign](../../campaign/Campaign) —— 任务挂在战役实例上，任务系统由战役驱动。

## 导航

- ↑ [storymode 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
