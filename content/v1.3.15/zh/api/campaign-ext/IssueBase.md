---
title: "IssueBase"
description: "问题/委托：城镇居民或领主遇到的可接任务，玩家可用任务、替代方案或领主方案解决。"
---
# IssueBase

**Namespace:** TaleWorlds.CampaignSystem.Issues  
**Module:** TaleWorlds.CampaignSystem  
**Type：** `public abstract class IssueBase : MBObjectBase`  
**Base：** `MBObjectBase`  
**File：** `TaleWorlds.CampaignSystem/Issues/IssueBase.cs`

## 概述

`IssueBase` 是 Bannerlord **"问题/委托"** 系统的基类。在城镇、村庄或领主头上出现的可接任务，底层就是一个 `IssueBase` 实例。它与 `QuestBase` 的关系：

- `IssueBase` = 酒馆老板/村长/领主挂出来的委托。
- `QuestBase` = 玩家接下委托后出现在任务日志里的追踪对象。
- 当你接受任务时，`IssueBase` 通常会调用 `StartIssueWithQuest()` 生成对应的 `QuestBase`。

三种解决方式：

1. **任务方案** — 玩家亲自跑腿完成任务。
2. **替代方案** — 派出一队士兵和一名英雄（Companion）代替完成，持续若干天后返回。
3. **领主方案** — 说服本地领主出面解决，消耗影响力、关系等。

## 心智模型

把 `IssueBase` 当作**“发布在 NPC 身上的可选任务入口”**：

- 它负责对话文本、可接条件、解决方案说明。
- 它不直接保存玩家进度；真正的任务状态在 `QuestBase` 里。
- 每个 `IssueBase` 有 `IssueOwner`（发布者）和 `IssueSettlement`（所在据点）。
- 你可以通过 `CampaignEvents` 监听新问题的生成，或在某_npc_ 对话时手动创建并启动它。

## 核心抽象/虚成员

| 成员 | 说明 |
|------|------|
| `Title` （抽象） | 问题标题。 |
| `Description` （抽象） | 描述文本。 |
| `IssueBriefByIssueGiver` / `IssueAcceptByPlayer` / `IssueQuestSolutionExplanationByIssueGiver` / `IssueQuestSolutionAcceptByPlayer` （抽象） | 对话文本。 |
| `IsThereAlternativeSolution` / `IsThereLordSolution` （抽象） | 是否有替代/领主方案。 |
| `IssueOwner` | 发布者 Hero。 |
| `IssueSettlement` | 问题所在 Settlement。 |
| `IssueQuest` | 关联的 QuestBase。 |
| `AlternativeSolutionBaseNeededMenCount` / `AlternativeSolutionReturnTimeForTroops` | 替代方案所需兵力和返回时间。 |
| `RelationshipChangeWithIssueOwner` | 解决后与发布者关系变化。 |

## 主要方法

### `public bool StartIssueWithQuest()`
启动任务方案：创建并启用关联的 `QuestBase`。

```csharp
issue.StartIssueWithQuest();
```

### `public void StartIssueWithAlternativeSolution()`
启动替代方案：把指定的部队和同伴派出去，若干天后返回。

```csharp
issue.StartIssueWithAlternativeSolution();
```

### `public void StartIssueWithLordSolution()`
请求领主方案。

```csharp
issue.StartIssueWithLordSolution();
```

### `public virtual bool AlternativeSolutionCondition(out TextObject explanation)`
检查替代方案是否可用。

```csharp
if (issue.AlternativeSolutionCondition(out TextObject reason))
{
    issue.StartIssueWithAlternativeSolution();
}
else
{
    InformationManager.DisplayMessage(new InformationMessage(reason.ToString()));
}
```

### `public virtual bool LordSolutionCondition(out TextObject explanation)`
检查领主方案是否可用。

### `public void CompleteIssueWithQuest()` / `CompleteIssueWithAlternativeSolution()` / `CompleteIssueWithLordSolutionWithAcceptCounterOffer()`
以不同方式完成问题。

### `public void CompleteIssueWithTimedOut()` / `CompleteIssueWithFail(TextObject log)` / `CompleteIssueWithCancel(TextObject log)`
以超时/失败/取消结束问题。

### `public void AddLog(JournalLog log)`
向问题日志（玩家可见）添加条目。

```csharp
issue.AddLog(new JournalLog(CampaignTime.Now, new TextObject(" rumor heard"), null, false));
```

### `public abstract IssueFrequency GetFrequency()` / `public abstract bool IssueStayAliveConditions()`
控制问题的刷新频率与存活条件。

## 典型用法示例

### 示例 1：手动给某 NPC 添加一个问题

```csharp
public class MyCustomIssue : IssueBase
{
    public override TextObject Title => new TextObject("Bandit Trouble");

    public override TextObject Description => new TextObject("Bandits are raiding nearby villages.");

    protected override bool CanPlayerTake
theQuestConditions(Hero issueGiver, out PreconditionFlags flags, out TextObject explanation)
    {
        flags = PreconditionFlags.None;
        explanation = TextObject.Empty;
        return true;
    }

    // ... other abstract members
}
```

### 示例 2：在 CampaignBehavior 里监听问题生成

```csharp
public override void RegisterEvents()
{
    CampaignEvents.OnIssueCreatedEvent.AddNonSerializedListener(this, OnIssueCreated);
}

private void OnIssueCreated(IssueBase issue)
{
    if (issue is MyCustomIssue myIssue)
    {
        // 自定义初始化
    }
}
```

## 跨版本提示

- v1.3.0 / v1.3.15 / v1.4.5 的 `IssueBase` API 基本一致。
- v1.4.5 对 AI 自动完成问题和替代方案的平衡性做了调整，但抽象接口没变。

## 参见

- [QuestBase](../QuestBase/) — Issue 接受后生成的任务
- [CampaignBehaviorBase](../CampaignBehaviorBase/) — 创建/监听 Issue
- [Hero](../../campaign/Hero/) — 问题发布者
- [Settlement](../../campaign/Settlement/) — 问题发生地
