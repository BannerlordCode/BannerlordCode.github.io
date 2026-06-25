---
title: "RevenueFarmingIssue"
description: "RevenueFarmingIssue 的自动生成类参考。"
---
# RevenueFarmingIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RevenueFarmingIssue`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Issues/RevenueFarmingIssueBehavior.cs`

## 概述

`RevenueFarmingIssue` 位于 `TaleWorlds.CampaignSystem.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `RevenueVillages` | `public List<RevenueFarmingIssueBehavior.RevenueVillage> RevenueVillages { get; }` |
| `TargetSettlement` | `public Settlement TargetSettlement { get; }` |
| `CollectProgress` | `public float CollectProgress { get; }` |

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 RevenueFarmingIssue 实例
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.RegisterEvents();
```

### OnVillageEventWithIdSpawned
`public void OnVillageEventWithIdSpawned(string Id)`

**用途 / Purpose:** 在 「village event with id spawned」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 RevenueFarmingIssue 实例
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.OnVillageEventWithIdSpawned("example");
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 RevenueFarmingIssue 实例
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**用途 / Purpose:** 在 「check for issue」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 RevenueFarmingIssue 实例
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.OnCheckForIssue(hero);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**用途 / Purpose:** 读取并返回当前对象中 「frequency」 的结果。

```csharp
// 先通过子系统 API 拿到 RevenueFarmingIssue 实例
RevenueFarmingIssue revenueFarmingIssue = ...;
var result = revenueFarmingIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**用途 / Purpose:** 创建或发起「stay alive conditions」。

```csharp
// 先通过子系统 API 拿到 RevenueFarmingIssue 实例
RevenueFarmingIssue revenueFarmingIssue = ...;
var result = revenueFarmingIssue.IssueStayAliveConditions();
```

### RevenuesAreDeliveredToSteward
`public void RevenuesAreDeliveredToSteward()`

**用途 / Purpose:** 处理与 「revenues are delivered to steward」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 RevenueFarmingIssue 实例
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.RevenuesAreDeliveredToSteward();
```

### FindCurrentRevenueVillage
`public RevenueFarmingIssueBehavior.RevenueVillage FindCurrentRevenueVillage()`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「current revenue village」。

```csharp
// 先通过子系统 API 拿到 RevenueFarmingIssue 实例
RevenueFarmingIssue revenueFarmingIssue = ...;
var result = revenueFarmingIssue.FindCurrentRevenueVillage();
```

### SetVillageAsCompleted
`public void SetVillageAsCompleted(RevenueFarmingIssueBehavior.RevenueVillage village, bool addLog = true)`

**用途 / Purpose:** 为 「village as completed」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 RevenueFarmingIssue 实例
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.SetVillageAsCompleted(village, false);
```

### SetDone
`public void SetDone()`

**用途 / Purpose:** 为 「done」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 RevenueFarmingIssue 实例
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.SetDone();
```

### SetAdditionalProgress
`public void SetAdditionalProgress(float progress)`

**用途 / Purpose:** 为 「additional progress」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 RevenueFarmingIssue 实例
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.SetAdditionalProgress(0);
```

### GetIsCompleted
`public bool GetIsCompleted()`

**用途 / Purpose:** 读取并返回当前对象中 「is completed」 的结果。

```csharp
// 先通过子系统 API 拿到 RevenueFarmingIssue 实例
RevenueFarmingIssue revenueFarmingIssue = ...;
var result = revenueFarmingIssue.GetIsCompleted();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RevenueFarmingIssue revenueFarmingIssue = ...;
revenueFarmingIssue.RegisterEvents();
```

## 参见

- [本区域目录](../)