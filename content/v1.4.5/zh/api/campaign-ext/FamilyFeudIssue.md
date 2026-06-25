---
title: "FamilyFeudIssue"
description: "FamilyFeudIssue 的自动生成类参考。"
---
# FamilyFeudIssue

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class FamilyFeudIssue`
**Base:** 无
**File:** `Modules.SandBox/SandBox/SandBox.Issues/FamilyFeudIssueBehavior.cs`

## 概述

`FamilyFeudIssue` 位于 `SandBox.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CounterOfferHero` | `public override Hero CounterOfferHero { get; set; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueLordSolutionExplanationByIssueGiver` | `public override TextObject IssueLordSolutionExplanationByIssueGiver { get; }` |
| `IssueLordSolutionAcceptByPlayer` | `public override TextObject IssueLordSolutionAcceptByPlayer { get; }` |
| `IssueLordSolutionCounterOfferExplanationByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferExplanationByOtherNpc { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |

## 主要方法

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssue 实例
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero can be selected in inventory info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssue 实例
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero can have party role or be governor info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssue 实例
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(hero, result);
```

### OnHeroCanLeadPartyInfoIsRequested
`public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero can lead party info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssue 实例
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanLeadPartyInfoIsRequested(hero, result);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero can have campaign issues info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssue 实例
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### LordSolutionCondition
`public override bool LordSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** **用途 / Purpose:** 调用 LordSolutionCondition 对应的操作。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssue 实例
FamilyFeudIssue familyFeudIssue = ...;
var result = familyFeudIssue.LordSolutionCondition(explanation);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** **用途 / Purpose:** 调用 AlternativeSolutionCondition 对应的操作。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssue 实例
FamilyFeudIssue familyFeudIssue = ...;
var result = familyFeudIssue.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DoTroopsSatisfyAlternativeSolution 对应的操作。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssue 实例
FamilyFeudIssue familyFeudIssue = ...;
var result = familyFeudIssue.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 troop type needed by alternative solution 状态或条件。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssue 实例
FamilyFeudIssue familyFeudIssue = ...;
var result = familyFeudIssue.IsTroopTypeNeededByAlternativeSolution(character);
```

### GetFrequency
`public override IssueFrequency GetFrequency()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 frequency 的结果。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssue 实例
FamilyFeudIssue familyFeudIssue = ...;
var result = familyFeudIssue.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**用途 / Purpose:** **用途 / Purpose:** 创建或发起stay alive conditions。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssue 实例
FamilyFeudIssue familyFeudIssue = ...;
var result = familyFeudIssue.IssueStayAliveConditions();
```

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero can be selected in inventory info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssue 实例
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero can have party role or be governor info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssue 实例
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(hero, result);
```

### OnHeroCanLeadPartyInfoIsRequested
`public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero can lead party info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssue 实例
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanLeadPartyInfoIsRequested(hero, result);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero can have campaign issues info is requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssue 实例
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnMissionStarted
`public void OnMissionStarted(IMission iMission)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssue 实例
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnMissionStarted(iMission);
```

### OnSettlementLeft
`public void OnSettlementLeft(MobileParty party, Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 在 settlement left 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssue 实例
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnSettlementLeft(party, settlement);
```

### OnBeforeMissionOpened
`public void OnBeforeMissionOpened()`

**用途 / Purpose:** **用途 / Purpose:** 在 before mission opened 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssue 实例
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnBeforeMissionOpened();
```

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** **用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssue 实例
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.RegisterEvents();
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 在 check for issue 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssue 实例
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnCheckForIssue(hero);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** **用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssue 实例
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.SyncData(dataStore);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FamilyFeudIssue familyFeudIssue = ...;
familyFeudIssue.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

## 参见

- [本区域目录](../)