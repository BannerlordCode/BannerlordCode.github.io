---
title: "SnareTheWealthyIssue"
description: "SnareTheWealthyIssue 的自动生成类参考。"
---
# SnareTheWealthyIssue

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class SnareTheWealthyIssue`
**Base:** 无
**File:** `Modules.SandBox/SandBox/SandBox.Issues/SnareTheWealthyIssueBehavior.cs`

## 概述

`SnareTheWealthyIssue` 位于 `SandBox.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `Description` | `public override TextObject Description { get; }` |

## 主要方法

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** **用途 / Purpose:** 调用 AlternativeSolutionCondition 对应的操作。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssue 实例
SnareTheWealthyIssue snareTheWealthyIssue = ...;
var result = snareTheWealthyIssue.AlternativeSolutionCondition(explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 troop type needed by alternative solution 状态或条件。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssue 实例
SnareTheWealthyIssue snareTheWealthyIssue = ...;
var result = snareTheWealthyIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DoTroopsSatisfyAlternativeSolution 对应的操作。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssue 实例
SnareTheWealthyIssue snareTheWealthyIssue = ...;
var result = snareTheWealthyIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 frequency 的结果。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssue 实例
SnareTheWealthyIssue snareTheWealthyIssue = ...;
var result = snareTheWealthyIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**用途 / Purpose:** **用途 / Purpose:** 创建或发起stay alive conditions。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssue 实例
SnareTheWealthyIssue snareTheWealthyIssue = ...;
var result = snareTheWealthyIssue.IssueStayAliveConditions();
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero can have campaign issues info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssue 实例
SnareTheWealthyIssue snareTheWealthyIssue = ...;
snareTheWealthyIssue.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### GetMountAndHarnessVisualIdsForQuestCaravan
`public void GetMountAndHarnessVisualIdsForQuestCaravan(CultureObject culture, out string mountStringId, out string harnessStringId)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mount and harness visual ids for quest caravan 的结果。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssue 实例
SnareTheWealthyIssue snareTheWealthyIssue = ...;
snareTheWealthyIssue.GetMountAndHarnessVisualIdsForQuestCaravan(culture, mountStringId, harnessStringId);
```

### OnWarDeclared
`public void OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarDetail reason)`

**用途 / Purpose:** **用途 / Purpose:** 在 war declared 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssue 实例
SnareTheWealthyIssue snareTheWealthyIssue = ...;
snareTheWealthyIssue.OnWarDeclared(faction1, faction2, reason);
```

### OnVillageStateChanged
`public void OnVillageStateChanged(Village village, VillageStates oldState, VillageStates newState, MobileParty raiderParty)`

**用途 / Purpose:** **用途 / Purpose:** 在 village state changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssue 实例
SnareTheWealthyIssue snareTheWealthyIssue = ...;
snareTheWealthyIssue.OnVillageStateChanged(village, oldState, newState, raiderParty);
```

### OnMapEventEnded
`public void OnMapEventEnded(MapEvent mapEvent)`

**用途 / Purpose:** **用途 / Purpose:** 在 map event ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssue 实例
SnareTheWealthyIssue snareTheWealthyIssue = ...;
snareTheWealthyIssue.OnMapEventEnded(mapEvent);
```

### OnSettlementEntered
`public void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 在 settlement entered 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssue 实例
SnareTheWealthyIssue snareTheWealthyIssue = ...;
snareTheWealthyIssue.OnSettlementEntered(party, settlement, hero);
```

### OnSettlementLeft
`public void OnSettlementLeft(MobileParty party, Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 在 settlement left 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssue 实例
SnareTheWealthyIssue snareTheWealthyIssue = ...;
snareTheWealthyIssue.OnSettlementLeft(party, settlement);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero can have campaign issues info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssue 实例
SnareTheWealthyIssue snareTheWealthyIssue = ...;
snareTheWealthyIssue.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** **用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssue 实例
SnareTheWealthyIssue snareTheWealthyIssue = ...;
snareTheWealthyIssue.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** **用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 SnareTheWealthyIssue 实例
SnareTheWealthyIssue snareTheWealthyIssue = ...;
snareTheWealthyIssue.SyncData(dataStore);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SnareTheWealthyIssue snareTheWealthyIssue = ...;
snareTheWealthyIssue.AlternativeSolutionCondition(explanation);
```

## 参见

- [本区域目录](../)