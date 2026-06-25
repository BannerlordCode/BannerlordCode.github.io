---
title: "VillageNeedsCraftingMaterialsIssue"
description: "VillageNeedsCraftingMaterialsIssue 的自动生成类参考。"
---
# VillageNeedsCraftingMaterialsIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillageNeedsCraftingMaterialsIssue`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Issues/VillageNeedsCraftingMaterialsIssueBehavior.cs`

## 概述

`VillageNeedsCraftingMaterialsIssue` 位于 `TaleWorlds.CampaignSystem.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssuePlayerResponseAfterAlternativeExplanation` | `public override TextObject IssuePlayerResponseAfterAlternativeExplanation { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 VillageNeedsCraftingMaterialsIssue 实例
VillageNeedsCraftingMaterialsIssue villageNeedsCraftingMaterialsIssue = ...;
villageNeedsCraftingMaterialsIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 VillageNeedsCraftingMaterialsIssue 实例
VillageNeedsCraftingMaterialsIssue villageNeedsCraftingMaterialsIssue = ...;
villageNeedsCraftingMaterialsIssue.SyncData(dataStore);
```

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「alternative solution skill」 的结果。

```csharp
// 先通过子系统 API 拿到 VillageNeedsCraftingMaterialsIssue 实例
VillageNeedsCraftingMaterialsIssue villageNeedsCraftingMaterialsIssue = ...;
var result = villageNeedsCraftingMaterialsIssue.GetAlternativeSolutionSkill(hero);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 VillageNeedsCraftingMaterialsIssue 实例
VillageNeedsCraftingMaterialsIssue villageNeedsCraftingMaterialsIssue = ...;
var result = villageNeedsCraftingMaterialsIssue.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 VillageNeedsCraftingMaterialsIssue 实例
VillageNeedsCraftingMaterialsIssue villageNeedsCraftingMaterialsIssue = ...;
var result = villageNeedsCraftingMaterialsIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**用途 / Purpose:** 读取并返回当前对象中 「frequency」 的结果。

```csharp
// 先通过子系统 API 拿到 VillageNeedsCraftingMaterialsIssue 实例
VillageNeedsCraftingMaterialsIssue villageNeedsCraftingMaterialsIssue = ...;
var result = villageNeedsCraftingMaterialsIssue.GetFrequency();
```

### AlternativeSolutionStartConsequence
`public override void AlternativeSolutionStartConsequence()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 VillageNeedsCraftingMaterialsIssue 实例
VillageNeedsCraftingMaterialsIssue villageNeedsCraftingMaterialsIssue = ...;
villageNeedsCraftingMaterialsIssue.AlternativeSolutionStartConsequence();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**用途 / Purpose:** 创建或发起「stay alive conditions」。

```csharp
// 先通过子系统 API 拿到 VillageNeedsCraftingMaterialsIssue 实例
VillageNeedsCraftingMaterialsIssue villageNeedsCraftingMaterialsIssue = ...;
var result = villageNeedsCraftingMaterialsIssue.IssueStayAliveConditions();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
VillageNeedsCraftingMaterialsIssue villageNeedsCraftingMaterialsIssue = ...;
villageNeedsCraftingMaterialsIssue.RegisterEvents();
```

## 参见

- [本区域目录](../)