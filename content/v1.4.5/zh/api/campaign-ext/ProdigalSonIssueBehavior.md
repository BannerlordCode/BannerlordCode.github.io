---
title: "ProdigalSonIssueBehavior"
description: "ProdigalSonIssueBehavior 的自动生成类参考。"
---
# ProdigalSonIssueBehavior

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class ProdigalSonIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Modules.SandBox/SandBox/SandBox.Issues/ProdigalSonIssueBehavior.cs`

## 概述

`ProdigalSonIssueBehavior` 位于 `SandBox.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## 主要方法

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can have campaign issues info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ProdigalSonIssueBehavior 实例
ProdigalSonIssueBehavior prodigalSonIssueBehavior = ...;
prodigalSonIssueBehavior.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**用途 / Purpose:** 读取并返回当前对象中 「frequency」 的结果。

```csharp
// 先通过子系统 API 拿到 ProdigalSonIssueBehavior 实例
ProdigalSonIssueBehavior prodigalSonIssueBehavior = ...;
var result = prodigalSonIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**用途 / Purpose:** 创建或发起「stay alive conditions」。

```csharp
// 先通过子系统 API 拿到 ProdigalSonIssueBehavior 实例
ProdigalSonIssueBehavior prodigalSonIssueBehavior = ...;
var result = prodigalSonIssueBehavior.IssueStayAliveConditions();
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**用途 / Purpose:** 处理与 「do troops satisfy alternative solution」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ProdigalSonIssueBehavior 实例
ProdigalSonIssueBehavior prodigalSonIssueBehavior = ...;
var result = prodigalSonIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**用途 / Purpose:** 判断当前对象是否处于 「troop type needed by alternative solution」 状态或条件。

```csharp
// 先通过子系统 API 拿到 ProdigalSonIssueBehavior 实例
ProdigalSonIssueBehavior prodigalSonIssueBehavior = ...;
var result = prodigalSonIssueBehavior.IsTroopTypeNeededByAlternativeSolution(character);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** 获取或更新 「alternative solution condition」 的状态。

```csharp
// 先通过子系统 API 拿到 ProdigalSonIssueBehavior 实例
ProdigalSonIssueBehavior prodigalSonIssueBehavior = ...;
var result = prodigalSonIssueBehavior.AlternativeSolutionCondition(explanation);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can have campaign issues info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ProdigalSonIssueBehavior 实例
ProdigalSonIssueBehavior prodigalSonIssueBehavior = ...;
prodigalSonIssueBehavior.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnHeroCanMoveToSettlementInfoIsRequested
`public override void OnHeroCanMoveToSettlementInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can move to settlement info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ProdigalSonIssueBehavior 实例
ProdigalSonIssueBehavior prodigalSonIssueBehavior = ...;
prodigalSonIssueBehavior.OnHeroCanMoveToSettlementInfoIsRequested(hero, result);
```

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 ProdigalSonIssueBehavior 实例
ProdigalSonIssueBehavior prodigalSonIssueBehavior = ...;
prodigalSonIssueBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 ProdigalSonIssueBehavior 实例
ProdigalSonIssueBehavior prodigalSonIssueBehavior = ...;
prodigalSonIssueBehavior.SyncData(dataStore);
```

### CheckForIssue
`public void CheckForIssue(Hero hero)`

**用途 / Purpose:** 检查「for issue」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 ProdigalSonIssueBehavior 实例
ProdigalSonIssueBehavior prodigalSonIssueBehavior = ...;
prodigalSonIssueBehavior.CheckForIssue(hero);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ProdigalSonIssueBehavior prodigalSonIssueBehavior = ...;
prodigalSonIssueBehavior.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

## 参见

- [本区域目录](../)