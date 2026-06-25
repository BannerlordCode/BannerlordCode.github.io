---
title: "RuralNotableInnAndOutIssueBehavior"
description: "RuralNotableInnAndOutIssueBehavior 的自动生成类参考。"
---
# RuralNotableInnAndOutIssueBehavior

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class RuralNotableInnAndOutIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Modules.SandBox/SandBox/SandBox.Issues/RuralNotableInnAndOutIssueBehavior.cs`

## 概述

`RuralNotableInnAndOutIssueBehavior` 位于 `SandBox.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Description` | `public override TextObject Description { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |

## 主要方法

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** 调用 AlternativeSolutionCondition 对应的操作。

```csharp
// 先通过子系统 API 拿到 RuralNotableInnAndOutIssueBehavior 实例
RuralNotableInnAndOutIssueBehavior ruralNotableInnAndOutIssueBehavior = ...;
var result = ruralNotableInnAndOutIssueBehavior.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**用途 / Purpose:** 调用 DoTroopsSatisfyAlternativeSolution 对应的操作。

```csharp
// 先通过子系统 API 拿到 RuralNotableInnAndOutIssueBehavior 实例
RuralNotableInnAndOutIssueBehavior ruralNotableInnAndOutIssueBehavior = ...;
var result = ruralNotableInnAndOutIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**用途 / Purpose:** 读取并返回当前对象中 frequency 的结果。

```csharp
// 先通过子系统 API 拿到 RuralNotableInnAndOutIssueBehavior 实例
RuralNotableInnAndOutIssueBehavior ruralNotableInnAndOutIssueBehavior = ...;
var result = ruralNotableInnAndOutIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**用途 / Purpose:** 创建或发起stay alive conditions。

```csharp
// 先通过子系统 API 拿到 RuralNotableInnAndOutIssueBehavior 实例
RuralNotableInnAndOutIssueBehavior ruralNotableInnAndOutIssueBehavior = ...;
var result = ruralNotableInnAndOutIssueBehavior.IssueStayAliveConditions();
```

### IsLocationTrackedByQuest
`public override IssueQuestFlags IsLocationTrackedByQuest(Location location)`

**用途 / Purpose:** 判断当前对象是否处于 location tracked by quest 状态或条件。

```csharp
// 先通过子系统 API 拿到 RuralNotableInnAndOutIssueBehavior 实例
RuralNotableInnAndOutIssueBehavior ruralNotableInnAndOutIssueBehavior = ...;
var result = ruralNotableInnAndOutIssueBehavior.IsLocationTrackedByQuest(location);
```

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 RuralNotableInnAndOutIssueBehavior 实例
RuralNotableInnAndOutIssueBehavior ruralNotableInnAndOutIssueBehavior = ...;
ruralNotableInnAndOutIssueBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 RuralNotableInnAndOutIssueBehavior 实例
RuralNotableInnAndOutIssueBehavior ruralNotableInnAndOutIssueBehavior = ...;
ruralNotableInnAndOutIssueBehavior.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**用途 / Purpose:** 在 check for issue 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 RuralNotableInnAndOutIssueBehavior 实例
RuralNotableInnAndOutIssueBehavior ruralNotableInnAndOutIssueBehavior = ...;
ruralNotableInnAndOutIssueBehavior.OnCheckForIssue(hero);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RuralNotableInnAndOutIssueBehavior ruralNotableInnAndOutIssueBehavior = ...;
ruralNotableInnAndOutIssueBehavior.AlternativeSolutionCondition(explanation);
```

## 参见

- [本区域目录](../)