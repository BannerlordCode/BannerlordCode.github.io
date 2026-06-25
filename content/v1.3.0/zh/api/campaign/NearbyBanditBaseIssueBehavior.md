---
title: "NearbyBanditBaseIssueBehavior"
description: "NearbyBanditBaseIssueBehavior 的自动生成类参考。"
---
# NearbyBanditBaseIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class NearbyBanditBaseIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/Issues/NearbyBanditBaseIssueBehavior.cs`

## 概述

`NearbyBanditBaseIssueBehavior` 位于 `TaleWorlds.CampaignSystem.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `IssueAlternativeSolutionFailLog` | `public override TextObject IssueAlternativeSolutionFailLog { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 NearbyBanditBaseIssueBehavior 实例
NearbyBanditBaseIssueBehavior nearbyBanditBaseIssueBehavior = ...;
nearbyBanditBaseIssueBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 NearbyBanditBaseIssueBehavior 实例
NearbyBanditBaseIssueBehavior nearbyBanditBaseIssueBehavior = ...;
nearbyBanditBaseIssueBehavior.SyncData(dataStore);
```

### CanBeCompletedByAI
`public override bool CanBeCompletedByAI()`

**用途 / Purpose:** 检查当前对象是否满足 「be completed by a i」 的前置条件。

```csharp
// 先通过子系统 API 拿到 NearbyBanditBaseIssueBehavior 实例
NearbyBanditBaseIssueBehavior nearbyBanditBaseIssueBehavior = ...;
var result = nearbyBanditBaseIssueBehavior.CanBeCompletedByAI();
```

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「alternative solution skill」 的结果。

```csharp
// 先通过子系统 API 拿到 NearbyBanditBaseIssueBehavior 实例
NearbyBanditBaseIssueBehavior nearbyBanditBaseIssueBehavior = ...;
var result = nearbyBanditBaseIssueBehavior.GetAlternativeSolutionSkill(hero);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**用途 / Purpose:** 处理与 「do troops satisfy alternative solution」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 NearbyBanditBaseIssueBehavior 实例
NearbyBanditBaseIssueBehavior nearbyBanditBaseIssueBehavior = ...;
var result = nearbyBanditBaseIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**用途 / Purpose:** 判断当前对象是否处于 「troop type needed by alternative solution」 状态或条件。

```csharp
// 先通过子系统 API 拿到 NearbyBanditBaseIssueBehavior 实例
NearbyBanditBaseIssueBehavior nearbyBanditBaseIssueBehavior = ...;
var result = nearbyBanditBaseIssueBehavior.IsTroopTypeNeededByAlternativeSolution(character);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** 获取或更新 「alternative solution condition」 的状态。

```csharp
// 先通过子系统 API 拿到 NearbyBanditBaseIssueBehavior 实例
NearbyBanditBaseIssueBehavior nearbyBanditBaseIssueBehavior = ...;
var result = nearbyBanditBaseIssueBehavior.AlternativeSolutionCondition(explanation);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**用途 / Purpose:** 读取并返回当前对象中 「frequency」 的结果。

```csharp
// 先通过子系统 API 拿到 NearbyBanditBaseIssueBehavior 实例
NearbyBanditBaseIssueBehavior nearbyBanditBaseIssueBehavior = ...;
var result = nearbyBanditBaseIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**用途 / Purpose:** 创建或发起「stay alive conditions」。

```csharp
// 先通过子系统 API 拿到 NearbyBanditBaseIssueBehavior 实例
NearbyBanditBaseIssueBehavior nearbyBanditBaseIssueBehavior = ...;
var result = nearbyBanditBaseIssueBehavior.IssueStayAliveConditions();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
NearbyBanditBaseIssueBehavior nearbyBanditBaseIssueBehavior = ...;
nearbyBanditBaseIssueBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)