---
title: "FamilyFeudIssueBehavior"
description: "FamilyFeudIssueBehavior 的自动生成类参考。"
---
# FamilyFeudIssueBehavior

**Namespace:** SandBox.Issues
**Module:** SandBox.Issues
**Type:** `public class FamilyFeudIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/Issues/FamilyFeudIssueBehavior.cs`

## 概述

`FamilyFeudIssueBehavior` 位于 `SandBox.Issues`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Issues` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `CounterOfferHero` | `public override Hero CounterOfferHero { get; set; }` |
| `NeededInfluenceForLordSolution` | `public override int NeededInfluenceForLordSolution { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueLordSolutionExplanationByIssueGiver` | `public override TextObject IssueLordSolutionExplanationByIssueGiver { get; }` |
| `IssuePlayerResponseAfterLordExplanation` | `public override TextObject IssuePlayerResponseAfterLordExplanation { get; }` |
| `IssuePlayerResponseAfterAlternativeExplanation` | `public override TextObject IssuePlayerResponseAfterAlternativeExplanation { get; }` |
| `IssueLordSolutionAcceptByPlayer` | `public override TextObject IssueLordSolutionAcceptByPlayer { get; }` |
| `IssueLordSolutionResponseByIssueGiver` | `public override TextObject IssueLordSolutionResponseByIssueGiver { get; }` |
| `IssueLordSolutionCounterOfferExplanationByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferExplanationByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferBriefByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferBriefByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferAcceptByPlayer` | `public override TextObject IssueLordSolutionCounterOfferAcceptByPlayer { get; }` |
| `IssueLordSolutionCounterOfferAcceptResponseByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferAcceptResponseByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferDeclineByPlayer` | `public override TextObject IssueLordSolutionCounterOfferDeclineByPlayer { get; }` |
| `IssueLordSolutionCounterOfferDeclineResponseByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferDeclineResponseByOtherNpc { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `Title` | `public override TextObject Title { get; }` |

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.RegisterEvents();
```

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**用途 / Purpose:** 在 「check for issue」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnCheckForIssue(hero);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.SyncData(dataStore);
```

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** 在 「agent hit」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can be selected in inventory info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can have party role or be governor info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(hero, result);
```

### OnHeroCanLeadPartyInfoIsRequested
`public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can lead party info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnHeroCanLeadPartyInfoIsRequested(hero, result);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can have campaign issues info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### GetAlternativeSolutionSkill
`public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「alternative solution skill」 的结果。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
var result = familyFeudIssueBehavior.GetAlternativeSolutionSkill(hero);
```

### LordSolutionCondition
`public override bool LordSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** 获取或更新 「lord solution condition」 的状态。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
var result = familyFeudIssueBehavior.LordSolutionCondition(explanation);
```

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**用途 / Purpose:** 获取或更新 「alternative solution condition」 的状态。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
var result = familyFeudIssueBehavior.AlternativeSolutionCondition(explanation);
```

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**用途 / Purpose:** 处理与 「do troops satisfy alternative solution」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
var result = familyFeudIssueBehavior.DoTroopsSatisfyAlternativeSolution(troopRoster, explanation);
```

### IsTroopTypeNeededByAlternativeSolution
`public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)`

**用途 / Purpose:** 判断当前对象是否处于 「troop type needed by alternative solution」 状态或条件。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
var result = familyFeudIssueBehavior.IsTroopTypeNeededByAlternativeSolution(character);
```

### GetFrequency
`public override IssueBase.IssueFrequency GetFrequency()`

**用途 / Purpose:** 读取并返回当前对象中 「frequency」 的结果。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
var result = familyFeudIssueBehavior.GetFrequency();
```

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**用途 / Purpose:** 创建或发起「stay alive conditions」。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
var result = familyFeudIssueBehavior.IssueStayAliveConditions();
```

### OnHeroCanBeSelectedInInventoryInfoIsRequested
`public override void OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can be selected in inventory info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnHeroCanBeSelectedInInventoryInfoIsRequested(hero, result);
```

### OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested
`public override void OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can have party role or be governor info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(hero, result);
```

### OnHeroCanLeadPartyInfoIsRequested
`public override void OnHeroCanLeadPartyInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can lead party info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnHeroCanLeadPartyInfoIsRequested(hero, result);
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**用途 / Purpose:** 在 「hero can have campaign issues info is requested」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnHeroCanHaveCampaignIssuesInfoIsRequested(hero, result);
```

### OnMissionStarted
`public void OnMissionStarted(IMission iMission)`

**用途 / Purpose:** 在 「mission started」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnMissionStarted(iMission);
```

### OnSettlementLeft
`public void OnSettlementLeft(MobileParty party, Settlement settlement)`

**用途 / Purpose:** 在 「settlement left」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnSettlementLeft(party, settlement);
```

### OnBeforeMissionOpened
`public void OnBeforeMissionOpened()`

**用途 / Purpose:** 在 「before mission opened」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FamilyFeudIssueBehavior 实例
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.OnBeforeMissionOpened();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FamilyFeudIssueBehavior familyFeudIssueBehavior = ...;
familyFeudIssueBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)