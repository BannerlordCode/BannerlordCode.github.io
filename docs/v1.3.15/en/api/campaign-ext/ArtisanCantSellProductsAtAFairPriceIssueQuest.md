<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArtisanCantSellProductsAtAFairPriceIssueQuest`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ArtisanCantSellProductsAtAFairPriceIssueQuest

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ArtisanCantSellProductsAtAFairPriceIssueQuest` is a class in the `TaleWorlds.CampaignSystem.Issues` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `AlternativeSolutionScaleFlags` | `public override IssueBase.AlternativeSolutionScaleFlag AlternativeSolutionScaleFlags { get; }` |
| `CounterOfferHero` | `public override Hero CounterOfferHero { get; set; }` |
| `AlternativeSolutionBaseNeededMenCount` | `public override int AlternativeSolutionBaseNeededMenCount { get; }` |
| `NeededInfluenceForLordSolution` | `public override int NeededInfluenceForLordSolution { get; }` |
| `IsThereAlternativeSolution` | `public override bool IsThereAlternativeSolution { get; }` |
| `IsThereLordSolution` | `public override bool IsThereLordSolution { get; }` |
| `IssueBriefByIssueGiver` | `public override TextObject IssueBriefByIssueGiver { get; }` |
| `IssueAcceptByPlayer` | `public override TextObject IssueAcceptByPlayer { get; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueLordSolutionExplanationByIssueGiver` | `public override TextObject IssueLordSolutionExplanationByIssueGiver { get; }` |
| `IssueLordSolutionAcceptByPlayer` | `public override TextObject IssueLordSolutionAcceptByPlayer { get; }` |
| `IssueLordSolutionResponseByIssueGiver` | `public override TextObject IssueLordSolutionResponseByIssueGiver { get; }` |
| `IssueLordSolutionCounterOfferExplanationByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferExplanationByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferBriefByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferBriefByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferAcceptByPlayer` | `public override TextObject IssueLordSolutionCounterOfferAcceptByPlayer { get; }` |
| `IssueLordSolutionCounterOfferAcceptResponseByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferAcceptResponseByOtherNpc { get; }` |
| `IssueLordSolutionCounterOfferDeclineByPlayer` | `public override TextObject IssueLordSolutionCounterOfferDeclineByPlayer { get; }` |
| `IssueLordSolutionCounterOfferDeclineResponseByOtherNpc` | `public override TextObject IssueLordSolutionCounterOfferDeclineResponseByOtherNpc { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |


## Key Methods

### RegisterEvents

```csharp
public override void RegisterEvents()
```

### OnCheckForIssue

```csharp
public void OnCheckForIssue(Hero hero)
```

### SyncData

```csharp
public override void SyncData(IDataStore dataStore)
```

### GetAlternativeSolutionSkill

```csharp
public override ValueTuple<SkillObject, int> GetAlternativeSolutionSkill(Hero hero)
```

### LordSolutionCondition

```csharp
public override bool LordSolutionCondition(out TextObject explanation)
```

### AlternativeSolutionCondition

```csharp
public override bool AlternativeSolutionCondition(out TextObject explanation)
```

### DoTroopsSatisfyAlternativeSolution

```csharp
public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)
```

### GetFrequency

```csharp
public override IssueBase.IssueFrequency GetFrequency()
```

### IssueStayAliveConditions

```csharp
public override bool IssueStayAliveConditions()
```

### OnHeroCanHaveCampaignIssuesInfoIsRequested

```csharp
public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)
```

### OnFailed

```csharp
public override void OnFailed()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)