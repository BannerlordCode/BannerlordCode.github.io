---
title: "HeadmanNeedsGrainIssueBehavior"
description: "HeadmanNeedsGrainIssueBehavior 的自动生成类参考。"
---
# HeadmanNeedsGrainIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeadmanNeedsGrainIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/HeadmanNeedsGrainIssueBehavior.cs`

## 概述

`HeadmanNeedsGrainIssueBehavior` 位于 `TaleWorlds.CampaignSystem.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 HeadmanNeedsGrainIssueBehavior 实例
HeadmanNeedsGrainIssueBehavior headmanNeedsGrainIssueBehavior = ...;
headmanNeedsGrainIssueBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 HeadmanNeedsGrainIssueBehavior 实例
HeadmanNeedsGrainIssueBehavior headmanNeedsGrainIssueBehavior = ...;
headmanNeedsGrainIssueBehavior.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**用途 / Purpose:** 在 「check for issue」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HeadmanNeedsGrainIssueBehavior 实例
HeadmanNeedsGrainIssueBehavior headmanNeedsGrainIssueBehavior = ...;
headmanNeedsGrainIssueBehavior.OnCheckForIssue(hero);
```

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「alternative solution skill」 的结果。

```csharp
// 先通过子系统 API 拿到 HeadmanNeedsGrainIssueBehavior 实例
HeadmanNeedsGrainIssueBehavior headmanNeedsGrainIssueBehavior = ...;
var result = headmanNeedsGrainIssueBehavior.GetAlternativeSolutionSkill(hero);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**用途 / Purpose:** 处理与 「do troops satisfy alternative solution」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 HeadmanNeedsGrainIssueBehavior 实例
HeadmanNeedsGrainIssueBehavior headmanNeedsGrainIssueBehavior = ...;
var result = headmanNeedsGrainIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** 获取或更新 「alternative solution condition」 的状态。

```csharp
// 先通过子系统 API 拿到 HeadmanNeedsGrainIssueBehavior 实例
HeadmanNeedsGrainIssueBehavior headmanNeedsGrainIssueBehavior = ...;
var result = headmanNeedsGrainIssueBehavior.AlternativeSolutionCondition(explanation);
```

### AlternativeSolutionStartConsequence
`public override void AlternativeSolutionStartConsequence()`

**用途 / Purpose:** 处理与 「alternative solution start consequence」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 HeadmanNeedsGrainIssueBehavior 实例
HeadmanNeedsGrainIssueBehavior headmanNeedsGrainIssueBehavior = ...;
headmanNeedsGrainIssueBehavior.AlternativeSolutionStartConsequence();
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**用途 / Purpose:** 读取并返回当前对象中 「frequency」 的结果。

```csharp
// 先通过子系统 API 拿到 HeadmanNeedsGrainIssueBehavior 实例
HeadmanNeedsGrainIssueBehavior headmanNeedsGrainIssueBehavior = ...;
var result = headmanNeedsGrainIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**用途 / Purpose:** 创建或发起「stay alive conditions」。

```csharp
// 先通过子系统 API 拿到 HeadmanNeedsGrainIssueBehavior 实例
HeadmanNeedsGrainIssueBehavior headmanNeedsGrainIssueBehavior = ...;
var result = headmanNeedsGrainIssueBehavior.IssueStayAliveConditions();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
HeadmanNeedsGrainIssueBehavior headmanNeedsGrainIssueBehavior = ...;
headmanNeedsGrainIssueBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)