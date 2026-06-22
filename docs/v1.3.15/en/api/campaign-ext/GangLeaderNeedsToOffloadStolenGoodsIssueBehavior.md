<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GangLeaderNeedsToOffloadStolenGoodsIssueBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GangLeaderNeedsToOffloadStolenGoodsIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `GangLeaderNeedsToOffloadStolenGoodsIssueBehavior` is a class in the `TaleWorlds.CampaignSystem.Issues` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `CounterOfferHero` | `public override Hero CounterOfferHero { get; set; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAlternativeSolutionSuccessLog` | `public override TextObject IssueAlternativeSolutionSuccessLog { get; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `Title` | `public override TextObject Title { get; }` |


## Key Methods

### RegisterEvents

```csharp
public override void RegisterEvents()
```

### SyncData

```csharp
public override void SyncData(IDataStore dataStore)
```

### OnCheckForIssue

```csharp
public void OnCheckForIssue(Hero hero)
```

### GetAlternativeSolutionSkill

```csharp
public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)
```

### AlternativeSolutionCondition

```csharp
public override bool AlternativeSolutionCondition(out TextObject explanation)
```

### DoTroopsSatisfyAlternativeSolution

```csharp
public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)
```

### IsTroopTypeNeededByAlternativeSolution

```csharp
public override bool IsTroopTypeNeededByAlternativeSolution(CharacterObject character)
```

### IssueStayAliveConditions

```csharp
public override bool IssueStayAliveConditions()
```

### IsSettlementBusy

```csharp
public override void IsSettlementBusy(Settlement settlement, object asker, ref int priority)
```

### GetFrequency

```csharp
public override IssueBase.IssueFrequency GetFrequency()
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested

```csharp
public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)