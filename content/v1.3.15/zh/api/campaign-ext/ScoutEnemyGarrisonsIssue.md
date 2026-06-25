---
title: "ScoutEnemyGarrisonsIssue"
description: "ScoutEnemyGarrisonsIssue 的自动生成类参考。"
---
# ScoutEnemyGarrisonsIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ScoutEnemyGarrisonsIssue`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Issues/ScoutEnemyGarrisonsIssueBehavior.cs`

## 概述

`ScoutEnemyGarrisonsIssue` 位于 `TaleWorlds.CampaignSystem.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** **用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 ScoutEnemyGarrisonsIssue 实例
ScoutEnemyGarrisonsIssue scoutEnemyGarrisonsIssue = ...;
scoutEnemyGarrisonsIssue.RegisterEvents();
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 在 check for issue 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ScoutEnemyGarrisonsIssue 实例
ScoutEnemyGarrisonsIssue scoutEnemyGarrisonsIssue = ...;
scoutEnemyGarrisonsIssue.OnCheckForIssue(hero);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** **用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 ScoutEnemyGarrisonsIssue 实例
ScoutEnemyGarrisonsIssue scoutEnemyGarrisonsIssue = ...;
scoutEnemyGarrisonsIssue.SyncData(dataStore);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 frequency 的结果。

```csharp
// 先通过子系统 API 拿到 ScoutEnemyGarrisonsIssue 实例
ScoutEnemyGarrisonsIssue scoutEnemyGarrisonsIssue = ...;
var result = scoutEnemyGarrisonsIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**用途 / Purpose:** **用途 / Purpose:** 创建或发起stay alive conditions。

```csharp
// 先通过子系统 API 拿到 ScoutEnemyGarrisonsIssue 实例
ScoutEnemyGarrisonsIssue scoutEnemyGarrisonsIssue = ...;
var result = scoutEnemyGarrisonsIssue.IssueStayAliveConditions();
```

### IsScoutingCompleted
`public bool IsScoutingCompleted()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 scouting completed 状态或条件。

```csharp
// 先通过子系统 API 拿到 ScoutEnemyGarrisonsIssue 实例
ScoutEnemyGarrisonsIssue scoutEnemyGarrisonsIssue = ...;
var result = scoutEnemyGarrisonsIssue.IsScoutingCompleted();
```

### SetScoutingCompleted
`public void SetScoutingCompleted()`

**用途 / Purpose:** **用途 / Purpose:** 为 scouting completed 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ScoutEnemyGarrisonsIssue 实例
ScoutEnemyGarrisonsIssue scoutEnemyGarrisonsIssue = ...;
scoutEnemyGarrisonsIssue.SetScoutingCompleted();
```

### ResetCurrentProgress
`public void ResetCurrentProgress()`

**用途 / Purpose:** **用途 / Purpose:** 将 current progress 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 ScoutEnemyGarrisonsIssue 实例
ScoutEnemyGarrisonsIssue scoutEnemyGarrisonsIssue = ...;
scoutEnemyGarrisonsIssue.ResetCurrentProgress();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ScoutEnemyGarrisonsIssue scoutEnemyGarrisonsIssue = ...;
scoutEnemyGarrisonsIssue.RegisterEvents();
```

## 参见

- [本区域目录](../)