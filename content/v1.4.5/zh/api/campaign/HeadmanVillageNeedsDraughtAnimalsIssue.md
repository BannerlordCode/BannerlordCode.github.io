---
title: "HeadmanVillageNeedsDraughtAnimalsIssue"
description: "HeadmanVillageNeedsDraughtAnimalsIssue 的自动生成类参考。"
---
# HeadmanVillageNeedsDraughtAnimalsIssue

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeadmanVillageNeedsDraughtAnimalsIssue`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/HeadmanVillageNeedsDraughtAnimalsIssueBehavior.cs`

## 概述

`HeadmanVillageNeedsDraughtAnimalsIssue` 位于 `TaleWorlds.CampaignSystem.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |

## 主要方法

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**用途 / Purpose:** 处理与 「do troops satisfy alternative solution」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 HeadmanVillageNeedsDraughtAnimalsIssue 实例
HeadmanVillageNeedsDraughtAnimalsIssue headmanVillageNeedsDraughtAnimalsIssue = ...;
var result = headmanVillageNeedsDraughtAnimalsIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**用途 / Purpose:** 判断当前对象是否处于 「troop type needed by alternative solution」 状态或条件。

```csharp
// 先通过子系统 API 拿到 HeadmanVillageNeedsDraughtAnimalsIssue 实例
HeadmanVillageNeedsDraughtAnimalsIssue headmanVillageNeedsDraughtAnimalsIssue = ...;
var result = headmanVillageNeedsDraughtAnimalsIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** 获取或更新 「alternative solution condition」 的状态。

```csharp
// 先通过子系统 API 拿到 HeadmanVillageNeedsDraughtAnimalsIssue 实例
HeadmanVillageNeedsDraughtAnimalsIssue headmanVillageNeedsDraughtAnimalsIssue = ...;
var result = headmanVillageNeedsDraughtAnimalsIssue.AlternativeSolutionCondition(explanation);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**用途 / Purpose:** 读取并返回当前对象中 「frequency」 的结果。

```csharp
// 先通过子系统 API 拿到 HeadmanVillageNeedsDraughtAnimalsIssue 实例
HeadmanVillageNeedsDraughtAnimalsIssue headmanVillageNeedsDraughtAnimalsIssue = ...;
var result = headmanVillageNeedsDraughtAnimalsIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**用途 / Purpose:** 创建或发起「stay alive conditions」。

```csharp
// 先通过子系统 API 拿到 HeadmanVillageNeedsDraughtAnimalsIssue 实例
HeadmanVillageNeedsDraughtAnimalsIssue headmanVillageNeedsDraughtAnimalsIssue = ...;
var result = headmanVillageNeedsDraughtAnimalsIssue.IssueStayAliveConditions();
```

### AlternativeSolutionStartConsequence
`public override void AlternativeSolutionStartConsequence()`

**用途 / Purpose:** 处理与 「alternative solution start consequence」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 HeadmanVillageNeedsDraughtAnimalsIssue 实例
HeadmanVillageNeedsDraughtAnimalsIssue headmanVillageNeedsDraughtAnimalsIssue = ...;
headmanVillageNeedsDraughtAnimalsIssue.AlternativeSolutionStartConsequence();
```

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 HeadmanVillageNeedsDraughtAnimalsIssue 实例
HeadmanVillageNeedsDraughtAnimalsIssue headmanVillageNeedsDraughtAnimalsIssue = ...;
headmanVillageNeedsDraughtAnimalsIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 HeadmanVillageNeedsDraughtAnimalsIssue 实例
HeadmanVillageNeedsDraughtAnimalsIssue headmanVillageNeedsDraughtAnimalsIssue = ...;
headmanVillageNeedsDraughtAnimalsIssue.SyncData(dataStore);
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**用途 / Purpose:** 在 「check for issue」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HeadmanVillageNeedsDraughtAnimalsIssue 实例
HeadmanVillageNeedsDraughtAnimalsIssue headmanVillageNeedsDraughtAnimalsIssue = ...;
headmanVillageNeedsDraughtAnimalsIssue.OnCheckForIssue(hero);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
HeadmanVillageNeedsDraughtAnimalsIssue headmanVillageNeedsDraughtAnimalsIssue = ...;
headmanVillageNeedsDraughtAnimalsIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

## 参见

- [本区域目录](../)