---
title: "ArtisanCantSellProductsAtAFairPriceIssueBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArtisanCantSellProductsAtAFairPriceIssueBehavior`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ArtisanCantSellProductsAtAFairPriceIssueBehavior

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArtisanCantSellProductsAtAFairPriceIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/ArtisanCantSellProductsAtAFairPriceIssueBehavior.cs`

## Overview

`ArtisanCantSellProductsAtAFairPriceIssueBehavior` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CounterOfferHero` | `public override Hero CounterOfferHero { get; set; }` |
| `IssueQuestSolutionExplanationByIssueGiver` | `public override TextObject IssueQuestSolutionExplanationByIssueGiver { get; }` |
| `IssueAlternativeSolutionExplanationByIssueGiver` | `public override TextObject IssueAlternativeSolutionExplanationByIssueGiver { get; }` |
| `IssueLordSolutionExplanationByIssueGiver` | `public override TextObject IssueLordSolutionExplanationByIssueGiver { get; }` |
| `IssueQuestSolutionAcceptByPlayer` | `public override TextObject IssueQuestSolutionAcceptByPlayer { get; }` |
| `Title` | `public override TextObject Title { get; }` |
| `Description` | `public override TextObject Description { get; }` |
| `IssueAsRumorInSettlement` | `public override TextObject IssueAsRumorInSettlement { get; }` |
| `IssueAlternativeSolutionAcceptByPlayer` | `public override TextObject IssueAlternativeSolutionAcceptByPlayer { get; }` |
| `IssueDiscussAlternativeSolution` | `public override TextObject IssueDiscussAlternativeSolution { get; }` |
| `IssueAlternativeSolutionResponseByIssueGiver` | `public override TextObject IssueAlternativeSolutionResponseByIssueGiver { get; }` |

## Key Methods

### LordSolutionCondition
`public override bool LordSolutionCondition(out TextObject explanation)`

**Purpose:** Handles logic related to `lord solution condition`.

### AlternativeSolutionCondition
`public override bool AlternativeSolutionCondition(out TextObject explanation)`

**Purpose:** Handles logic related to `alternative solution condition`.

### DoTroopsSatisfyAlternativeSolution
`public override bool DoTroopsSatisfyAlternativeSolution(TroopRoster troopRoster, out TextObject explanation)`

**Purpose:** Handles logic related to `do troops satisfy alternative solution`.

### GetFrequency
`public override IssueFrequency GetFrequency()`

**Purpose:** Gets the current value of `frequency`.

### IssueStayAliveConditions
`public override bool IssueStayAliveConditions()`

**Purpose:** Handles logic related to `issue stay alive conditions`.

### OnHeroCanHaveCampaignIssuesInfoIsRequested
`public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)`

**Purpose:** Called when the `hero can have campaign issues info is requested` event is raised.

### OnFailed
`public override void OnFailed()`

**Purpose:** Called when the `failed` event is raised.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### OnCheckForIssue
`public void OnCheckForIssue(Hero hero)`

**Purpose:** Called when the `check for issue` event is raised.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

## Usage Example

```csharp
var value = new ArtisanCantSellProductsAtAFairPriceIssueBehavior();
value.LordSolutionCondition(explanation);
```

## See Also

- [Complete Class Catalog](../catalog)